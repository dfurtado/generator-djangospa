'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');
var randomstring = require('randomstring');

var Generator = module.exports = generators.Base.extend({

  	constructor: function () {
	    generators.Base.apply(this, arguments);

    	this.on('end', function () {
	    	this.installDependencies({
		      	bower: true,
		      	npm: true,
		      	callback: function() {
	    			this.spawnCommand('grunt');
		      	}.bind(this)
	    	});
  		});

 		this.sourceRoot(path.join(__dirname, '../templates/root'));

 		this.secret_key = randomstring.generate(50);

  	}

});

Generator.prototype.Greetings = function() {
	console.log(yosay("Welcome to the (awesome) single page application generator for Django."));
}

Generator.prototype.PromptUser = function() {
	// prompt the user about the application settings.

	var done = this.async();

	this.prompt([{
	  	type    : 'input',
	   	name    : 'projectname',
	   	message : 'Your project name',
	   	required: true
	}, {
	   	type    : 'input',
	   	name    : 'description',
	   	message : 'Project description',
	   	required: false
	}, {
	   	type    : 'input',
	   	name    : 'appname',
	   	message : 'Initial application name',
	   	required: true
	}, {
      type    : 'confirm',
      name    : 'includeloginpage',
      message : 'Include login page?'
  }], function (answers) {

	   	this.projectName = answers.projectname;
	   	this.projectDescription = answers.description || "";
	   	this.appName = answers.appname;
	    this.includeLoginPage = answers.includeloginpage;

    	this.destinationRoot(path.join(this.destinationRoot(), "/" + this.projectName))

      	done();

    }.bind(this));

};

Generator.prototype.copyFiles = function() {

	// setup source and destination folder.
	var dest = this.destinationRoot(),
		src = this.sourceRoot(),
		destAppRoot = path.join(this.destinationRoot(), "/" + this.projectName);

	// define the template models.
	var templateModel = {
		projectName: this.projectName,
		projectDescription: this.projectDescription,
		appName: this.appName,
		includeLoginPage: this.includeLoginPage,
		secret_key: this.secret_key
	};

	// copy static folder, it is where all the javascript, css, fonts
	// images will be placed.
	this.directory(
		path.join(this.sourceRoot(), "/static"),
		path.join(this.destinationRoot(), "/static"));

	this.copy(
		path.join(this.sourceRoot(), "/templates/base.html"),
		path.join(this.destinationRoot(), "/templates/base.html"),
		templateModel);

	if(this.includeLoginPage) {
		this.copy(
			path.join(this.sourceRoot(), "/templates/login.html"),
			path.join(this.destinationRoot(), "/templates/login.html"));

		this.copy(
			path.join(this.sourceRoot(), "/templates/_loginpartial.html"),		
			path.join(this.destinationRoot(), "/templates/_loginpartial.html"));
	}

	// copying the default application files.
	this.copy(
		path.join(this.sourceRoot(), "/main/__init__.py"),
		path.join(this.destinationRoot(), "/" + this.appName + "/__init__.py"));

	this.copy(
		path.join(this.sourceRoot(), "/main/admin.py"),
		path.join(this.destinationRoot(), "/" + this.appName + "/admin.py"));

	this.copy(
		path.join(this.sourceRoot(), "/main/models.py"),
		path.join(this.destinationRoot(), "/" + this.appName + "/models.py"));

	this.copy(
		path.join(this.sourceRoot(), "/main/tests.py"),
		path.join(this.destinationRoot(), "/" + this.appName + "/tests.py"));

	if(this.includeLoginPage) {
		this.copy(
			path.join(this.sourceRoot(), "/main/forms.py"),
			path.join(this.destinationRoot(), "/" + this.appName + "/forms.py"));
	}

	this.template(
		path.join(this.sourceRoot(), "/main/views.py"),
		path.join(this.destinationRoot(), "/" + this.appName + "/views.py"),
		templateModel);

	this.copy(
		path.join(this.sourceRoot(), "/main/templates/main/index.html"),
		path.join(this.destinationRoot(), "/" + this.appName + "/templates/" + this.appName + "/index.html"));

	this.directory(
		path.join(this.sourceRoot(), "/main/migrations"),
		path.join(this.destinationRoot(), "/" + this.appName + "/migrations"));

	this.copy(
		path.join(this.sourceRoot(), "/Gruntfile.js"),
		path.join(this.destinationRoot(), "/Gruntfile.js"));

	this.copy(
		path.join(this.sourceRoot(), "/appfiles/__init__.py"),
		destAppRoot + "/__init__.py");

	this.copy(
		path.join(this.sourceRoot(), "/appfiles/wsgi.py"),
		destAppRoot + "/wsgi.py");

	this.template(
		path.join(this.sourceRoot(), "/appfiles/urls.py"),
		destAppRoot + "/urls.py",
		templateModel);

	this.template(
		path.join(this.sourceRoot(), "/appfiles/_settings.py"),
		destAppRoot + "/settings.py",
		templateModel);

	this.template(
		path.join(this.sourceRoot(), "/_manage.py"),
		path.join(dest, "/manage.py"),
		templateModel);

};

Generator.prototype.packageFiles = function packageFiles() {
	// Copy the configuration files containing all the project dependencies.

	var dest = this.destinationRoot(),
		src = this.sourceRoot(),
		destAppRoot = path.join(dest, "/" + this.projectName);

	var templateModel = {
		projectName: this.projectName,
		projectDescription: this.projectDescription,
		appName: this.appName
	};

	this.template(
		path.join(this.sourceRoot(), "/_bower.json"),
		path.join(dest, "/bower.json"),
		templateModel);

  	this.template(
  		path.join(this.sourceRoot(), "/_package.json"),
  		path.join(dest, "/package.json"),
  		templateModel);
};
