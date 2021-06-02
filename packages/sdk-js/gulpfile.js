const gulp = require('gulp');

const exec = require('child_process').exec,
	fs = require('fs'),
	path = require('path');

const AWS = require('aws-sdk'),
	awspublish = require('gulp-awspublish'),
	git = require('gulp-git'),
	gitStatus = require('git-get-status'),
	jshint = require('gulp-jshint'),
	merge = require('merge-stream'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace');

function getVersionFromPackage() {
	return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

function getGitHubLink() {
	const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

	const link = pkg.bugs.url.replace(/\/issues.*/g, '');

	return `Project GitHub: ${link}`;
}

gulp.task('ensure-clean-working-directory', (cb) => {
	gitStatus((err, status) => {
		if (err, !status.clean) {
			throw new Error('Unable to proceed, your working directory is not clean.');
		}

		cb();
	});
});

gulp.task('embed-version', () => {
	const version = getVersionFromPackage();

	const meta = gulp.src(['./lib/index.js'])
		.pipe(replace(/(version:\s*')([0-9]+\.[0-9]+\.[0-9]+)(')/g, '$1' + version + '$3'))
		.pipe(gulp.dest('./lib/'));

	const coverpage = gulp.src(['./docs/_coverpage.md'])
		.pipe(replace(/[0-9]+\.[0-9]+\.[0-9]+/g, version))
		.pipe(gulp.dest('./docs/'));

	return merge(meta, coverpage);
});

gulp.task('upload-documentation-site-to-S3', () => {
	let publisher = awspublish.create({
		region: 'us-east-1',
		params: {
			Bucket: 'docs.barchart.com'
		},
		credentials: new AWS.SharedIniFileCredentials({profile: 'default'})
	});

	let headers = {'Cache-Control': 'no-cache'};
	let options = {};

	return gulp.src(['./docs/**'])
		.pipe(rename((filePath) => {
			filePath.dirname = path.join('push-notifications', filePath.dirname);
		}))
		.pipe(publisher.publish(headers, options))
		.pipe(publisher.cache())
		.pipe(awspublish.reporter());
});

gulp.task('deploy-documentation', gulp.series('upload-documentation-site-to-S3'));

gulp.task('commit-changes', () => {
	return gulp.src([ './', './test/', './package.json', './lib/index.js', './test/SpecRunner.js' ])
		.pipe(git.add())
		.pipe(git.commit('Release. Bump version number'));
});

gulp.task('push-changes', (cb) => {
	git.push('origin', 'master', cb);
});

gulp.task('print-github', () => {
	return Promise.resolve().then(() => {
		console.info(getGitHubLink());
	});
});

gulp.task('release', gulp.series(
	'ensure-clean-working-directory',
	'embed-version',
	'commit-changes',
	'push-changes',
	'deploy-documentation',
	'print-github'
));

gulp.task('lint', () => {
	return gulp.src([ './**/*.js', '!./node_modules/**', '!./docs/**'])
		.pipe(jshint({ esversion: 9 }))
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('default', gulp.series('lint'));
