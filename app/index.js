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
                        baseURL: 'src'
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
            packageJSON.devDependencies['gulp-gzip'] = '^1.2.0';
            packageJSON.devDependencies['gulp-inject'] = '^3.0.0';
            packageJSON.devDependencies['gulp-jshint'] = '^2.0.0';
            packageJSON.devDependencies['gulp-ng-config'] = '^1.2.1';
            packageJSON.devDependencies['gulp-tar'] = '^1.8.0';
            packageJSON.devDependencies['jasmine-core'] = '^2.4.1';
            packageJSON.devDependencies['jshint'] = '^2.9.1';
            packageJSON.devDependencies['jshint-stylish'] = '^2.1.0';
            packageJSON.devDependencies['jspm'] = '^0.16.27';
            packageJSON.devDependencies['jspm-dev-builder'] = '^0.3.2';
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
            packageJSON.jspm.dependencies['bootstrap'] = 'github:twbs/bootstrap@^3.3.6';
            packageJSON.jspm.dependencies['css'] = 'github:systemjs/plugin-css@^0.1.20';
            packageJSON.jspm.dependencies['font-awesome'] = 'npm:font-awesome@^4.5.0';
            packageJSON.jspm.dependencies['lodash'] = 'npm:lodash@^4.2.1';
            packageJSON.jspm.dependencies['moment'] = 'npm:moment@^2.11.2';
            packageJSON.jspm.dependencies['scss'] = 'github:mobilexag/plugin-sass@^0.2.1';
            packageJSON.jspm.dependencies['text'] = 'github:systemjs/plugin-text@^0.0.4';

            // jspm core dependencies
            packageJSON.jspm.devDependencies['babel'] = 'npm:babel-core@^5.8.24';
            packageJSON.jspm.devDependencies['babel-runtime'] = 'npm:babel-runtime@^5.8.24';
            packageJSON.jspm.devDependencies['clean-css'] = 'npm:clean-css@^3.4.9';
            packageJSON.jspm.devDependencies['core-js'] = 'npm:core-js@^1.1.4';

            this.fs.writeJSON('package.json', packageJSON);
        },

        git: function () {
            this.copy('gitignore', '.gitignore');
        },

        appStaticFiles: function () {
            this.copy('angular/src/_import.js', 'src/import.js');
            this.copy('angular/src/app/_app.scss', 'src/app/app.scss');
            this.copy('angular/src/app/components/footer/_footer.template.html', 'src/app/components/footer/footer.template.html');
            this.copy('angular/src/app/components/header/_header.template.html', 'src/app/components/header/header.template.html');
            this.copy('angular/src/app/components/navigation/_navigation.template.html', 'src/app/components/navigation/navigation.template.html');
            this.copy('angular/src/app/pages/about/_about.template.html', 'src/app/pages/about/about.template.html');
            this.copy('angular/src/app/pages/contact/_contact.template.html', 'src/app/pages/contact/contact.template.html');
            this.copy('angular/src/app/pages/home/_home.template.html', 'src/app/pages/home/home.template.html');
            this.copy('angular/src/app/components/footer/_footer.controller.js', 'src/app/components/footer/footer.controller.js');
            this.copy('angular/src/app/components/footer/_footer.directive.js', 'src/app/components/footer/footer.directive.js');
            this.copy('angular/src/app/components/header/_header.controller.js', 'src/app/components/header/header.controller.js');
            this.copy('angular/src/app/components/header/_header.directive.js', 'src/app/components/header/header.directive.js');
            this.copy('angular/src/app/components/navigation/_navigation.controller.js', 'src/app/components/navigation/navigation.controller.js');
            this.copy('angular/src/app/components/navigation/_navigation.directive.js', 'src/app/components/navigation/navigation.directive.js');
            this.copy('angular/src/app/pages/about/_about.controller.js', 'src/app/pages/about/about.controller.js');
            this.copy('angular/src/app/pages/contact/_contact.controller.js', 'src/app/pages/contact/contact.controller.js');
            this.copy('angular/src/app/pages/home/_home.controller.js', 'src/app/pages/home/home.controller.js');
            this.copy('angular/src/app/models/_Person.js', 'src/app/models/Person.js');
            this.copy('angular/src/app/services/_app.service.js', 'src/app/services/app.service.js');
        },

        scripts: function () {
            this.fs.copyTpl(
                this.templatePath('angular/src/app/_app.js'),
                this.destinationPath('src/app/app.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/src/app/_app.config.js'),
                this.destinationPath('src/app/app.config.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/src/app/components/_index.js'),
                this.destinationPath('src/app/components/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/src/app/pages/_index.js'),
                this.destinationPath('src/app/pages/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/src/app/models/_index.js'),
                this.destinationPath('src/app/models/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/src/app/services/_index.js'),
                this.destinationPath('src/app/services/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
        },

        html: function () {
            this.fs.copyTpl(
                this.templatePath('angular/src/_index.html'),
                this.destinationPath('src/index.html'),
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