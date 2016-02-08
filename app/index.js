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
                        baseURL: 'app'
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
            packageJSON.devDependencies['gulp-concat'] = '^2.6.0';
            packageJSON.devDependencies['gulp-cssnano'] = '^2.1.0';
            packageJSON.devDependencies['gulp-jshint'] = '^2.0.0';
            packageJSON.devDependencies['gulp-less'] = '^3.0.5';
            packageJSON.devDependencies['gulp-ng-annotate'] = '^1.1.0';
            packageJSON.devDependencies['gulp-ng-config'] = '^1.2.1';
            packageJSON.devDependencies['gulp-sourcemaps'] = '^1.6.0';
            packageJSON.devDependencies['gulp-uglify'] = '^1.5.1';
            packageJSON.devDependencies['jasmine-core'] = '^2.4.1';
            packageJSON.devDependencies['jshint'] = '^2.9.1';
            packageJSON.devDependencies['jshint-stylish'] = '^2.1.0';
            packageJSON.devDependencies['jspm'] = '^0.16.27';
            packageJSON.devDependencies['karma'] = '^0.13.19';
            packageJSON.devDependencies['karma-chrome-launcher'] = '^0.2.2';

            // angular
            packageJSON.jspm.dependencies['angular'] = 'github:angular/bower-angular@^1.5.0';
            packageJSON.jspm.dependencies['angular-cookies'] = 'github:angular/bower-angular-cookies@^1.5.0';
            packageJSON.jspm.dependencies['angular-resource'] = 'github:angular/bower-angular-resource@^1.5.0';
            packageJSON.jspm.dependencies['angular-route'] = 'github:angular/bower-angular-route@^1.5.0';
            packageJSON.jspm.dependencies['angular-sanitize'] = 'github:angular/bower-angular-sanitize@^1.5.0';

            // aurelia
            //packageJSON.jspm.dependencies['aurelia-bootstrapper'] = 'npm:aurelia-bootstrapper@^1.0.0-beta.1.1.1';
            //packageJSON.jspm.dependencies['aurelia-framework'] = 'npm:aurelia-framework@^1.0.0-beta.1.1.1';
            //packageJSON.jspm.dependencies['aurelia-http-client'] = 'npm:aurelia-http-client@^1.0.0-beta.1.1.0';


            // general client dependencies
            packageJSON.jspm.dependencies['bootstrap'] = 'github:twbs/bootstrap@^3.3.6';
            packageJSON.jspm.dependencies['font-awesome'] = 'npm:font-awesome@^4.5.0';
            packageJSON.jspm.dependencies['lodash'] = 'npm:lodash@^4.2.1';
            packageJSON.jspm.dependencies['moment'] = 'npm:moment@^2.11.2';

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
            this.directory('less', 'app/less');
            this.copy('angular/modules/components/footer/_footer.template.html', 'app/modules/components/footer/footer.template.html');
            this.copy('angular/modules/components/header/_header.template.html', 'app/modules/components/header/header.template.html');
            this.copy('angular/modules/components/navigation/_navigation.template.html', 'app/modules/components/navigation/navigation.template.html');
            this.copy('angular/modules/pages/about/_about.template.html', 'app/modules/pages/about/about.template.html');
            this.copy('angular/modules/pages/contact/_contact.template.html', 'app/modules/pages/contact/contact.template.html');
            this.copy('angular/modules/pages/home/_home.template.html', 'app/modules/pages/home/home.template.html');
        },

        scripts: function () {
            this.fs.copyTpl(
                this.templatePath('angular/modules/_app.js'),
                this.destinationPath('app/modules/app.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/_app.config.js'),
                this.destinationPath('app/modules/app.config.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/footer/_footer.controller.js'),
                this.destinationPath('app/modules/components/footer/footer.controller.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/footer/_footer.directive.js'),
                this.destinationPath('app/modules/components/footer/footer.directive.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/header/_header.directive.js'),
                this.destinationPath('app/modules/components/header/header.directive.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/header/_header.controller.js'),
                this.destinationPath('app/modules/components/header/header.controller.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/navigation/_navigation.controller.js'),
                this.destinationPath('app/modules/components/navigation/navigation.controller.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/navigation/_navigation.directive.js'),
                this.destinationPath('app/modules/components/navigation/navigation.directive.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/components/_index.js'),
                this.destinationPath('app/modules/components/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/pages/about/_about.controller.js'),
                this.destinationPath('app/modules/pages/about/about.controller.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/pages/contact/_contact.controller.js'),
                this.destinationPath('app/modules/pages/contact/contact.controller.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/pages/home/_home.controller.js'),
                this.destinationPath('app/modules/pages/home/home.controller.js'),
                {
                    ngapp: 'myApp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('angular/modules/pages/_index.js'),
                this.destinationPath('app/modules/pages/index.js'),
                {
                    ngapp: 'myApp'
                }
            );
        },

        html: function () {
            this.fs.copyTpl(
                this.templatePath('_index.angular.html'),
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