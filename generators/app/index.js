'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      '欢迎使用 ' + chalk.red('generator-qzwxstart') + ' 脚手架!'
    ));

    this.prompt({
      type: 'input',
      name: 'name',
      message: '你的项目名称',
      default: this.appname
    }, function(answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  },

  writing: {
    app: function(){
      //html
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('index.html'), {
          name: this.props.name
        }
      );

      //css
      this.fs.copy(
        this.templatePath('css/style.scss'),
        this.destinationPath('css/style.scss')
      );

      //js
      this.fs.copy(
        this.templatePath('js/flexible.js'),
        this.destinationPath('js/flexible.js'),
        this.templatePath('js/PageSlider.js'),
        this.destinationPath('js/PageSlider.js'),
        this.templatePath('js/zepto.js'),
        this.destinationPath('js/zepto.js')
      );

      //img
      this.fs.copy(
        this.templatePath('img/pause.png'),
        this.destinationPath('img/pause.png'),
        this.templatePath('img/play.png'),
        this.destinationPath('img/play.png')
      );
    }
  }
});
