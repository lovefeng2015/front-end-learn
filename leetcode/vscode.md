### 在MacOS上面，批量修改变量

- 选中要修改的变量名称，然后按cmd+shift+L
- 选中要修改的变量名称，然后按F2
- 先选中变量名，然后按cmd+D，依次选中下个变量名

### - 在MacOS上面，批量注释

- 选中内容后按cmd+/，多行注释和取消多行注释
- 当光标放在某一行后按cmd+/，注释或者取消注释这一行
- 选中一行中的某处，alt+shift+A，注释掉选中的内容

作者：shuaiqifeiyang
[链接](https://www.jianshu.com/p/199c2bc13867)
[VisualStudio Code怎么同时编辑多处?vscode同时编辑多处的三种方法](https://www.cnblogs.com/tengrl/p/11413921.html)
### 重命名变量

1. 首先看看自己需要同时修改多处的代码是不是要重命名一个变量，如果是的话，有现成的快捷键f2。选中一个变量，按f2，弹出一个小窗口，在里面输入内容后按回车，所有该变量都会被重命名。
2. 但是要注意，在js文件中，如果这个变量没有用`var`或者`const`或者`let`声明，会无法重命名。
### 多光标

1. 按住`alt`，用鼠标左键点击，可以出现多个光标，输入的代码可以在光标处同时增加。
2. 按住`Ctrl + Alt`，再按键盘上向上或者向下的键，可以使一列上出现多个光标。
3. 选中一段文字，按`shift+alt+i`，可以在每行末尾出现光标
4. 光标放在一个地方，按c`trl+shift+L`或者`ctrl+f2`，可以在页面中出现这个词的不同地方都出现光标。有时候这个快捷键的作用和f2重命名变量类似，但是它更加广泛，因为还可以对比如字符串相同的非同一变量或函数类的东西修改。
5. 按`shift+alt`，再使用鼠标拖动，也可以出现竖直的列光标，同时可以选中多列。
6. 任何光标操作，可以按`Ctrl + U`取消
### 替换字符串

1. 按`ctrl+f`，可以搜索当前页面，然后按搜索框左边的小三角符号，可以切换成替换模式。有时候使用字符串替换，比多光标方便，但是注意别不小心替换掉不想替换的内容。

### 一次搜索所有文件的文本

>Windows: Ctrl + Shift + F Mac: Command + Shift + F

### 删除一行

有两种方法可以立即删除一行。

使用Ctrl + X剪切命令(Mac：command + X)来删除一行。

### 如何找到setting.json设置模板
简单的输入命令
打开VSCode命令面板: mac: command + p window: ctrl + p
> 输入> Open Settings(注意>后面有一个空格)

## 插件

### 自动重命名成对的 HTML/XML 标记，与 Visual Studio IDE 相同(可以安装atuo rename tag)

From 1.44, VS Code offers the built-in auto update tags support for HTML and Handlebars that can be enabled with the setting editor.linkedEditing. If this setting is enabled, this extension will skip HTML and Handlebars files regardless of the languages listed in auto-rename-tag.activationOnLanguage

从1.44开始，VS Code 为 HTML 和 Handlebars 提供了内置的自动更新标记支持，可以通过设置 editor:linked Editing 启用这些支持。如果启用此设置，该扩展将跳过 HTML 和 Handlebars 文件，而不管 auto-rename-tag 中列出的语言是什么。

### Beautify
Beautify javascript, JSON, CSS, Sass, and HTML in Visual Studio Code.

在 Visual Studio Code 中美化 javascript、 JSON、 CSS、 Sass 和 HTML。

### ESLint
Integrates ESLint into VS Code. If you are new to ESLint check the [documentation](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

将 ESLint 集成到 VS 代码中。如果您是 ESLint 的新手，请查看文档。

### Easy LESS
Generates a .css file each time you save a .less file.
e.g. styles.less --> styles.css

每次保存.less 文件时生成一个.css 文件，例如 styles.less -- > styles.css

### koro1FileHeader
WIKI:[WIKI](https://github.com/OBKoro1/koro1FileHeader/wiki/%E5%AE%89%E8%A3%85%E5%92%8C%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B)
1. 快捷键不可用 删掉vscode-fileheader插件，再重新加载就可以了
#### 文件头部注释快捷键
记录文件信息/文件的传参/出参，设置个性签名、留下QQ、微信联系方式、输入空行等等
支持用户高度自定义注释选项, 适配各种需求的注释形式。
保存文件的时候，自动更新最后的编辑时间和编辑人
window：`ctrl+win+i`,mac：ctrl+cmd+i, linux: ctrl+meta+i,Ubuntu: ctrl+super+i
#### 函数注释注释快捷键(新版的vscode已经原生支持,在function上输入/** tab)
更多关于函数参数自动请查阅配置-函数注释自动提取函数的参数文档

将光标放在函数行或者将光标放在函数上方的空白行。
自动解析函数参数，生成函数参数注释。
快捷键：window：`ctrl+win+t`,mac：ctrl+cmd+t,linux: ctrl+meta+t, Ubuntu: ctrl+super+t

### Path Intellisense
自动路劲补全，默认不带这个功能的，赶紧装

### HTML CSS Support
让 html 标签上写class 智能提示当前项目所支持的样式

### open in browser 打开浏览器

使用 Alt + b 快捷方式在默认浏览器中打开当前 html 文件，或者使用 Shift + Alt + b 选择浏览器。你也可以右键点击，就像图片一样

### View In Browser 在浏览器中查看
Use command or context menu in the explorer.

在资源管理器中使用命令或上下文菜单。

Command
命令
```JS
1. Open the command list (Press F1 or Ctrl + Shift + P)
2. Select `View In Browser`
```
Keybindings
键绑定
```JS
1. Press Ctrl + F1
```