# generator-qzwxstart

一个微信H5活动启动脚手架, 里面包含朋友圈团队的 pageslider.js,对其进行了扩展，适合做微信互动专题的脚手架。

## 用法

先安装 `Yeoman`：

```
npm install -g yo
```

然后安装脚手架：

```
npm install -g generator-qzwxstart
```

到你的项目目录执行：

```
yo qzwxstart
```

根据交互会生成自定义的项目文件,例如：

```
project-name
    css
        style.scss
    js
        flexible.js
        PageSlider.js
        zepto.js
    img
        pause.png
        play.png
    index.html
```

注：

使用640的设计稿切图，如果其他的，需要修改 `style.scss` 里面的 64:

```
@function px2rem( $px ){
  @return $px / 64 * 1rem;
}
```
