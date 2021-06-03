const gulp = require('gulp');

const fs = require('fs'),
	path = require('path');

const AWS = require('aws-sdk'),
	awspublish = require('gulp-awspublish'),
	merge = require('merge-stream'),
	rename = require('gulp-rename'),
	replace = require('gulp-replace'),
	jshint = require('gulp-jshint');

function getVersionFromPackage() {
	return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
}

gulp.task('embed-version', () => {
	const version = getVersionFromPackage();

	const index = gulp.src(['./lib/index.js'])
		.pipe(replace(/(version:\s*')([0-9]+\.[0-9]+\.[0-9]+.*)(')/g, '$1' + version + '$3'))
		.pipe(gulp.dest('./lib/'));

	const coverpage = gulp.src(['./docs/_coverpage.md'])
		.pipe(replace(/(>)([0-9]+\.[0-9]+\.[0-9]+.*)(<)/g, '$1' + version + '$3'))
		.pipe(gulp.dest('./docs/'));

	const openapi = gulp.src(['./openapi.yaml'])
		.pipe(replace(/(version:\s*)([0-9]+\.[0-9]+\.[0-9]+.*)/g, '$1' + version))
		.pipe(gulp.dest('./'));

	return merge(index, coverpage, openapi);
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
			filePath.dirname = path.join('push-notifications-client-js', filePath.dirname);
		}))
		.pipe(publisher.publish(headers, options))
		.pipe(publisher.cache())
		.pipe(awspublish.reporter());
});

gulp.task('deploy-documentation', gulp.series('upload-documentation-site-to-S3'));

gulp.task('lint', () => {
	return gulp.src([ './**/*.js', '!./node_modules/**', '!./docs/**'])
		.pipe(jshint({ esversion: 9 }))
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('default', gulp.series('lint'));