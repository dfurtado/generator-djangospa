'use strict';

var Generator = require('yeoman-generator'),
    path = require('path'),
    yosay = require('yosay'),
    randomstring = require('randomstring'),
    config = require('./config');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.sourceRoot(path.join(__dirname, 'templates/root'));
        this.secret_key = randomstring.generate(50);

        this.installdependencies_settings = Object.assign({}, config.dependencies, {
            callback: () => this.spawnCommand('gulp')
        });
    }

    prompting() {

        this.log(yosay("Welcome to the (awesome) single page application generator for Django."));

        return this.prompt([
            config.prompt.projectname,
            config.prompt.description,
            config.prompt.appname,
            config.prompt.includeloginpage,
            config.prompt.djangoVersion,
            config.prompt.sitetheme,
            config.prompt.depmanager,
            config.prompt.projectlicense,
        ]).then((answers) => {
            this.projectName = answers.projectname;
            this.projectDescription = answers.description || "";
            this.appName = answers.appname;
            this.includeLoginPage = answers.includeloginpage;
            this.projectLicense = answers.projectlicense;
            this.destinationRoot(path.join(this.destinationRoot(), `/${this.projectName}`))
            this.projectTheme = "_" + answers.sitetheme.replace(' ', '').toLowerCase();
            this.depmanager = answers.depmanager;
            this.isDjango19orGreater = answers.djangoVersion === "1.9 or greater";
        });

    }

    copyFiles() {

        // setup source and destination folder.
        var dest = this.destinationRoot(),
        src = this.sourceRoot(),
            destAppRoot = path.join(this.destinationRoot(), `/${this.projectName}`);

        // define the template models.
        var templateModel = {
            projectName: this.projectName,
            projectDescription: this.projectDescription,
            appName: this.appName,
            includeLoginPage: this.includeLoginPage,
            secret_key: this.secret_key,
            projectTheme: this.projectTheme,
            isDjango19orGreater: this.isDjango19orGreater
        };

        this.fs.copy(
                path.join(this.sourceRoot(), "/static/**/*"),
                path.join(this.destinationRoot(), "static"));

        this.fs.copy(
                path.join(this.sourceRoot(), "/source/scss/**/*theme.scss"),
                path.join(this.destinationRoot(), "/source/scss"));

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/source/scss/styles.scss"),
                path.join(this.destinationRoot(), "/source/scss/styles.scss"),
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/templates/base.html"),
                path.join(this.destinationRoot(), "/templates/base.html"),
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/fixtures/initdata.json"),
                path.join(this.destinationRoot(), "/fixtures/initdata.json"),
                templateModel);

        if(this.includeLoginPage) {
            this.fs.copy(
                    path.join(this.sourceRoot(), "/templates/login.html"),
                    path.join(this.destinationRoot(), "/templates/login.html"));

            this.fs.copy(
                    path.join(this.sourceRoot(), "/templates/_loginpartial.html"),
                    path.join(this.destinationRoot(), "/templates/_loginpartial.html"));
        }

        // copying the default application files.
        this.fs.copy(
                path.join(this.sourceRoot(), "/main/__init__.py"),
                path.join(this.destinationRoot(), `/${this.appName}/__init__.py`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/admin.py"),
                path.join(this.destinationRoot(), `/${this.appName}/admin.py`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/models.py"),
                path.join(this.destinationRoot(), `/${this.appName}/models.py`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/tests.py"),
                path.join(this.destinationRoot(), `/${this.appName}/tests.py`));

        if(this.isDjango19orGreater) {
            this.fs.copyTpl(
                    path.join(this.sourceRoot(), "/main/apps.py"),
                    path.join(this.destinationRoot(), `/${this.appName}/apps.py`),
                    templateModel);
        }

        // copy the rest framework files.
        this.fs.copy(
                path.join(this.sourceRoot(), "/main/permissions.py"),
                path.join(this.destinationRoot(), `/${this.appName}/permissions.py`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/serializers.py"),
                path.join(this.destinationRoot(), `/${this.appName}/serializers.py`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/urls.py"),
                path.join(this.destinationRoot(), `/${this.appName}/urls.py`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/views.py"),
                path.join(this.destinationRoot(), `/${this.appName}/views.py`));

        if(this.includeLoginPage) {
            this.fs.copyTpl(
                    path.join(this.sourceRoot(), "/main/forms.py"),
                    path.join(this.destinationRoot(), `/${this.appName}/forms.py`),
                    templateModel);
        }

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/main/views.py"),
                path.join(this.destinationRoot(), `/${this.appName}/views.py`),
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/main/permissions.py"),
                path.join(this.destinationRoot(), `/${this.appName}/permissions.py`),
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/main/serializers.py"),
                path.join(this.destinationRoot(), `/${this.appName}/serializers.py`),
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/main/urls.py"),
                path.join(this.destinationRoot(), `/${this.appName}/urls.py`),
                templateModel);

        this.fs.copy(
                path.join(this.sourceRoot(), "/main/templates/main/index.html"),
                path.join(this.destinationRoot(), `/${this.appName}/templates/${this.appName}/index.html`));

        this.fs.copy(
                path.join(this.sourceRoot(), "/gulpfile.js"),
                path.join(this.destinationRoot(), "/gulpfile.js"));

        this.fs.copy(
                path.join(this.sourceRoot(), "/requirements.txt"),
                path.join(this.destinationRoot(), "/requirements.txt"));

        this.fs.copy(
                path.join(this.sourceRoot(), "/appfiles/__init__.py"),
                destAppRoot + "/__init__.py");

        this.fs.copy(
                path.join(this.sourceRoot(), "/appfiles/wsgi.py"),
                destAppRoot + "/wsgi.py");

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/appfiles/urls.py"),
                destAppRoot + "/urls.py",
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/appfiles/_settings.py"),
                destAppRoot + "/settings.py",
                templateModel);

        this.fs.copyTpl(
                path.join(this.sourceRoot(), "/_manage.py"),
                path.join(dest, "/manage.py"),
                templateModel);
    }

    packageFile() {
        var dest = this.destinationRoot(),
            src = this.sourceRoot(),
            destAppRoot = path.join(dest, "/" + this.projectName);

        var templateModel = {
            projectName: this.projectName,
            projectDescription: this.projectDescription,
            appName: this.appName,
            projectLicense : this.projectLicense
        };

        this.fs.copyTpl(
            path.join(this.sourceRoot(), "/_package.json"),
            path.join(dest, "/package.json"),
            templateModel);
    }

    install() {
        this.installdependencies_settings.npm = this.depmanager === "npm";
        this.installdependencies_settings.yarn = this.depmanager === "yarn";

        this.installDependencies(this.installdependencies_settings);
    }

}
