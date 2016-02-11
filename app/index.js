'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);

    },

    initializing: function () {

    },

    prompting: function () {

    },

    configuring: function () {

    },

    writing: {
        gulpfile: function () {
            this.copy('_gulpfile.js', 'gulpfile.js');
            this.copy('jshintrc', '.jshintrc');
        },

        packageJSON: function () {
            var packageJSON = {
                name: 'myapp',
                version: '0.1.0',
                description: 'my app description',
                main: 'app.js',
                scripts: {
                    test: 'echo \'Error: no test specified\' && exit 1'
                },
                author: 'me',
                license: 'MIT',
                dependencies: {},
                devDependencies: {},
                jspm: {
                    directories: {
                        baseURL: './'
                    },
                    dependencies: {},
                    devDependencies: {}
                }
            };

            // server
            //packageJSON.dependencies['hapi'] = '^10.5.0';
            //packageJSON.dependencies['vision'] = '^3.0.0';
            //packageJSON.dependencies['handlebars'] = '^4.0.5';
            //packageJSON.dependencies['inert'] = '^3.0.1';
            //packageJSON.dependencies['boom'] = '^2.10.1';

            // build system and testing framework
            packageJSON.devDependencies['browser-sync'] = '^2.11.1';
            packageJSON.devDependencies['del'] = '^2.2.0';
            packageJSON.devDependencies['gulp'] = '^3.9.0';
            packageJSON.devDependencies['gulp-jshint'] = '^2.0.0';
            packageJSON.devDependencies['gulp-jspm'] = '^0.5.6';
            packageJSON.devDependencies['gulp-ng-annotate'] = '^1.1.0';
            packageJSON.devDependencies['gulp-ng-config'] = '^1.2.1';
            packageJSON.devDependencies['gulp-rename'] = '^1.2.2';
            packageJSON.devDependencies['jasmine-core'] = '^2.4.1';
            packageJSON.devDependencies['jshint'] = '^2.9.1';
            packageJSON.devDependencies['jshint-stylish'] = '^2.1.0';
            packageJSON.devDependencies['jspm'] = '^0.16.27';
            packageJSON.devDependencies['karma'] = '^0.13.19';
            packageJSON.devDependencies['karma-chrome-launcher'] = '^0.2.2';

            // angular
            packageJSON.jspm.dependencies['angular'] = 'github:angular/bower-angular@^1.5.0';
            packageJSON.jspm.dependencies['angular-route'] = 'github:angular/bower-angular-route@^1.5.0';
            packageJSON.jspm.dependencies['angular-sanitize'] = 'github:angular/bower-angular-sanitize@^1.5.0';

            // aurelia
            //packageJSON.jspm.dependencies['aurelia-bootstrapper'] = 'npm:aurelia-bootstrapper@^1.0.0-beta.1.1.1';
            //packageJSON.jspm.dependencies['aurelia-framework'] = 'npm:aurelia-framework@^1.0.0-beta.1.1.1';
            //packageJSON.jspm.dependencies['aurelia-http-client'] = 'npm:aurelia-http-client@^1.0.0-beta.1.1.0';


            // general client dependencies
            packageJSON.jspm.dependencies['bootstrap-sass'] = 'github:twbs/bootstrap-sass@^3.3.6';
            packageJSON.jspm.dependencies['font-awesome'] = 'npm:font-awesome@^4.5.0';
            packageJSON.jspm.dependencies['lodash'] = 'npm:lodash@^4.2.1';
            packageJSON.jspm.dependencies['moment'] = 'npm:moment@^2.11.2';
            packageJSON.jspm.dependencies['scss'] = 'github:mobilexag/plugin-sass@^0.2.1';

            // jspm core dependencies
            packageJSON.jspm.devDependencies['babel'] = 'npm:babel-core@^5.8.24';
            packageJSON.jspm.devDependencies['babel-runtime'] = 'npm:babel-runtime@^5.8.24';
            packageJSON.jspm.devDependencies['core-js'] = 'npm:core-js@^1.1.4';

            this.fs.writeJSON('package.json', packageJSON);
        },

        git: function () {
            this.copy('gitignore', '.gitignore');
        },

        appStaticFiles: function () {
            this.copy('angular/_app.scss', 'app/app.scss');
            this.copy('angular/components/footer/_footer.template.html', 'app/components/footer/footer.template.html');
            this.copy('angular/components/header/_header.template.html', 'app/components/header/header.template.html');
            this.copy('angular/components/navigation/_navigation.template.html', 'app/components/navigation/navigation.template.html');
            this.copy('angular/pages/about/_about.template.html', 'app/pages/about/about.template.html');
            this.copy('angular/pages/contact/_contact.template.html', 'app/pages/contact/contact.template.html');
            this.copy('angular/pages/home/_home.template.html', 'app/pages/home/home.template.html');
            this.copy('angular/components/footer/_footer.controller.js', 'app/components/footer/footer.controller.js');
            this.copy('angular/components/footer/_footer.directive.js', 'app/components/footer/footer.directive.js');
            this.copy('angular/components/header/_header.controller.js', 'app/components/header/header.controller.js');
            this.copy('angular/components/header/_header.directive.js', 'app/components/header/header.directive.js');
            this.copy('angular/components/navigation/_navigation.controller.js', 'app/components/navigation/navigation.controller.js');
            this.copy('angular/components/navigation/_navigation.directive.js', 'app/components/navigation/navigation.directive.js');
            this.copy('angular/pages/about/_about.controller.js', 'app/pages/about/about.controller.js');
            this.copy('angular/pages/contact/_contact.controller.js', 'app/pages/contact/contact.controller.js');
            this.copy('angular/pages/home/_home.controller.js', 'app/pages/home/home.controller.js');
            this.copy('angular/models/_Person.js', 'app/models/Person.js');
            this.copy('angular/services/_app.service.js', 'app/services/app.service.js');
        },

        scripts: function () {
            this.fs.copyTpl(
                this.templatePath('angular/_app.js'),
                this.destinationPath('app/app.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/_app.config.js'),
                this.destinationPath('app/app.config.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/components/_index.js'),
                this.destinationPath('app/components/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/pages/_index.js'),
                this.destinationPath('app/pages/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/models/_index.js'),
                this.destinationPath('app/models/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/services/_index.js'),
                this.destinationPath('app/services/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
        },

        html: function () {
            this.fs.copyTpl(
                this.templatePath('angular/_index.html'),
                this.destinationPath('app/index.html'),
                {
                    appname: 'My App',
                    ngapp: 'myApp'
                }
            );
        }
    },

    conflicts: function () {

    },

    install: function () {

    },

    end: function () {

    }
});