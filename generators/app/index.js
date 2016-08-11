'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var path = require("path");
var _ = require("lodash");

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    var info = {
      title: "活动页面",
      name: "project"
    };

    this.info = info;
  },
  prompting: function() {
    var done = this.async();
    this.log(yosay(
      '欢迎使用 ' + chalk.red('generator-qzwxstart') + ' 脚手架!'
    ));

    var prompts = [
      {
        type: "input",
        name: "title",
        message: "页面标题：",
        default: this.info.title
      },
      {
        type: "input",
        name: "name",
        message: "文件名称：",
        default: this.info.name
      },
      {
        type: "input",
        name: "keywords",
        message: "页面关键字（用英文逗号分隔）："
      },
      {
        type: "input",
        name: "description",
        message: "页面描述："
      },
      {
        type: "input",
        name: "music",
        message: "背景音乐（要就填路径）："
      }
    ];

    this.log("输入活动相关信息！");

    this.prompt(prompts, function( answers ) {
      _.assign(this.info, answers);
      this.log(answers.name);
      done();
    }.bind(this));
  },
  writing: {
    config: function() {
      var info = this.info;

      //html
      this.fs.copyTpl(
        this.templatePath("_index.html"),
        this.destinationPath(path.join(info.name, "index.html")),
        _.assign({}, info)
      );

      //css
      this.fs.copy(
        this.templatePath('css/style.scss'),
        this.destinationPath(path.join(info.name, 'css/style.scss')));

      //img
      this.fs.copy(
        this.templatePath('img/pause.png'),
        this.destinationPath(path.join(info.name, 'img/pause.png')));

      this.fs.copy(
        this.templatePath('img/play.png'),
        this.destinationPath(path.join(info.name, 'img/play.png')));

      //js
      this.fs.copy(
        this.templatePath('js/PageSlider.js'),
        this.destinationPath(path.join(info.name, 'js/PageSlider.js')));

      this.fs.copy(
        this.templatePath('js/flexible.js'),
        this.destinationPath(path.join(info.name, 'js/flexible.js')));

      this.fs.copy(
        this.templatePath('js/zepto.js'),
        this.destinationPath(path.join(info.name, 'js/zepto.js')));
    }
  }
});
