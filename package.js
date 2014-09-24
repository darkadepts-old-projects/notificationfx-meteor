Package.describe({
	summary: "NotificationFX",
	version: "1.0.0"
});

Package.on_use(function (api) {
	//api.add_files(['files'], ['client']);
	api.use(['bower'], 'client');
	//api.export('VarName');

	var files = [
		'lib/ns-default.css',
		'lib/ns-style-attached.css',
		'lib/ns-style-bar.css',
		'lib/ns-style-growl.css',
		'lib/ns-style-other.css',
		'lib/modernizr.custom.js',
		'lib/notificationFx.js'
	];

	api.add_files(files, 'client');
	api.add_files('smart.json','client');

});
