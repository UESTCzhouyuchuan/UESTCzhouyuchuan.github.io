(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{346:function(s,e,a){"use strict";a.r(e);var t=a(3),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("昨天写了通过 react 项目配置 webpack，发现 webpack 的配置文件需要单独拿出来学一学。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600",alt:"https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600"}}),s._v(" "),a("strong",[s._v("官方文档地址")]),s._v("："),a("a",{attrs:{href:"https://www.webpackjs.com/configuration/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),a("p",[s._v("以下列举常用的"),a("code",[s._v("webpack.config.js")]),s._v("选项")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const path = require(\'path\');\n\nmodule.exports = {\n  mode: "production", // 模式，"production" | "development" | "none"\n  entry: "./src/index.js", // 入口文件，可以是多个，当前值为默认值，string | object | array\n  output: {\n    path: path.resolve(__dirname, "dist"), // string,所有输出文件的目标的绝对路径\n    filename: "bundle.js", // string,出口分块\n    publicPath: "/assets/", // string，输出解析文件的目录\n  },\n  module: { // 关于模块配置\n    rules: [ // 模块规则（配置 loader、解析器等选项）\n      {\n        test: /\\.jsx|js?$/, // 文件名正则\n        exclude: [ // 排除项\n          path.resolve(__dirname, "node_modules")\n        ],\n        loader: "babel-loader", // 使用的模块\n      },\n    ],\n  },\n  resolve: { //解析模块请求的选项\n    extensions: [".js", ".json", ".jsx", ".css"],// 使用的扩展名\n    alias:{ //别名\n      "@": path.join(__dirname, "./src"), // 源代码根目录别名\n    }\n  },\n  plugins: [],\n  devServer: { // 开发过程中\n    proxy: { // 代理\n      \'/api\': {\n        target: \'http://localhost:3000\',\n        secure: false,\n        pathRewrite: {\n          "^api": "api",// 这是默认值即http://localhost:3000/api\n        }\n      }\n    },\n  },\n  watch: false, // 监听文件改变\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h2",{attrs:{id:"mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[s._v("#")]),s._v(" mode")]),s._v(" "),a("p",[s._v("当前模式，可选择为模式，"),a("code",[s._v('"production" | "development" | "none"')]),s._v("，代表生产模式，开发模式，无模式。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mode: "production", // enable many optimizations for production builds\nmode: "development", // enabled useful tools for development\nmode: "none", // no defaults\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("注")]),s._v("：mode 值是必填项")]),s._v(" "),a("h2",{attrs:{id:"entry-and-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry-and-content"}},[s._v("#")]),s._v(" entry and content")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/entry-context/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/entry-context/"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[s._v("#")]),s._v(" entry")]),s._v(" "),a("p",[s._v("项目入口文件，可以是多个文件。如果传递一个数组，那么数组的每一项都会执行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('entry: "./src/index.js",// SPA单页面\nentry: {\n  home: "./home.js",\n  about: "./about.js",\n  contact: "./contact.js"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("注")]),s._v("：默认值为"),a("code",[s._v("./src/index.js")])]),s._v(" "),a("h3",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[s._v("#")]),s._v(" content")]),s._v(" "),a("p",[s._v("全局上下文，即项目源码的基础目录。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n  context: path.resolve(__dirname, 'src')\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[s._v("#")]),s._v(" output")]),s._v(" "),a("p",[s._v("出口文件。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/output/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/output/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"module-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-模块"}},[s._v("#")]),s._v(" module 模块")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/module/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/module/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("规定使用何种 loader 处理满足条件的文件。")]),s._v(" "),a("h3",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[s._v("#")]),s._v(" Rules")]),s._v(" "),a("p",[s._v("基本结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rules:[\n  {\n    resource: {\n      test:,\n      include:,\n      exclude:,\n      and:[],\n      or:[],\n      not:[]\n    },\n    test:,\n    include:,\n    exclude:,\n    loader:,\n    use:,\n  },\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("规则数组。")]),s._v(" "),a("h3",{attrs:{id:"rule-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-resource"}},[s._v("#")]),s._v(" Rule.resource")]),s._v(" "),a("p",[s._v("{ test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。")]),s._v(" "),a("p",[s._v("{ include: Condition }：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。")]),s._v(" "),a("p",[s._v("{ exclude: Condition }：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。")]),s._v(" "),a("p",[s._v("{ and: [Condition] }：必须匹配数组中的所有条件")]),s._v(" "),a("p",[s._v("{ or: [Condition] }：匹配数组中任何一个条件")]),s._v(" "),a("p",[s._v("{ not: [Condition] }：必须排除这个条件")]),s._v(" "),a("p",[s._v("condition 可以是这些之一：")]),s._v(" "),a("ul",[a("li",[s._v("字符串：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。")]),s._v(" "),a("li",[s._v("正则表达式：test 输入值。")]),s._v(" "),a("li",[s._v("函数：调用输入的函数，必须返回一个真值(truthy value)以匹配。")]),s._v(" "),a("li",[s._v("条件数组：至少一个匹配条件。")]),s._v(" "),a("li",[s._v("对象：匹配所有属性。每个属性都有一个定义行为。")])]),s._v(" "),a("h3",{attrs:{id:"rule-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-test"}},[s._v("#")]),s._v(" Rule.test")]),s._v(" "),a("p",[s._v("Rule.test 是 Rule.resource.test 的简写。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource。")]),s._v(" "),a("h3",{attrs:{id:"rule-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-include"}},[s._v("#")]),s._v(" Rule.include")]),s._v(" "),a("p",[s._v("Rule.include 是 Rule.resource.include 的简写。如果你提供了 Rule.include 选项，就不能再提供 Rule.resource。")]),s._v(" "),a("h3",{attrs:{id:"rule-exclude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-exclude"}},[s._v("#")]),s._v(" Rule.exclude")]),s._v(" "),a("p",[s._v("Rule.exclude 是 Rule.resource.exclude 的简写。如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。")]),s._v(" "),a("h3",{attrs:{id:"rule-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-use"}},[s._v("#")]),s._v(" Rule.use")]),s._v(" "),a("p",[s._v("应用于模块的 UseEntries 列表。每个入口(entry)指定使用一个 loader。")]),s._v(" "),a("p",[s._v('传递字符串（如：use: [ "style-loader" ]）是 loader 属性的简写方式（如：use: [ { loader: "style-loader "} ]）。')]),s._v(" "),a("p",[s._v("loader 可以是多个，webpack 会从右向左即从最后一个到第一个应用这些 loader。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use: [\n  'style-loader',\n  {\n    loader: 'css-loader',\n    options: {\n      importLoaders: 1\n    }\n  },\n  {\n    loader: 'less-loader',\n    options: {\n      noIeCompat: true\n    }\n  }\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"rule-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rule-loader"}},[s._v("#")]),s._v(" Rule.loader")]),s._v(" "),a("p",[s._v("Rule.loader 是 Rule.use: [ { loader } ] 的简写。")]),s._v(" "),a("h2",{attrs:{id:"resolve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve"}},[s._v("#")]),s._v(" resolve")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/resolve/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/resolve/"),a("OutboundLink")],1),s._v("\n这些选项能设置模块如何被解析。")]),s._v(" "),a("p",[s._v("目录结构。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("resolve: {\n  alias: {},\n  extensions: []\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"resolve-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-alias"}},[s._v("#")]),s._v(" resolve.alias")]),s._v(" "),a("p",[s._v("创建 import 或 require 的别名，来确保模块引入变得更简单。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alias: {\n  Utilities: path.resolve(__dirname, 'src/utilities/'),\n  zyz$: path.resolve(__dirname, 'path/to/file.js')\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用精准解析，在字符串后面添加"),a("code",[s._v("$")]),s._v("表示精准解析，不解析其子目录。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Test1 from 'xyz'; // 精确匹配，所以 path/to/file.js 被解析和导入\nimport Test2 from 'xyz/file.js'; // 非精确匹配，触发普通解析\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"resolve-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-extensions"}},[s._v("#")]),s._v(" resolve.extensions")]),s._v(" "),a("p",[s._v("自动解析确定的扩展。默认值为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('extensions: [".js", ".json"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以在引入文件时不带扩展名。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import File from '../path/to/file'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"resolve-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-plugins"}},[s._v("#")]),s._v(" resolve.plugins")]),s._v(" "),a("p",[s._v("额外的解析插件列表。它允许插件，如 "),a("code",[s._v("DirectoryNamedWebpackPlugin")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("plugins: [\n  new DirectoryNamedWebpackPlugin()\n]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[s._v("#")]),s._v(" plugins")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/plugins/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/plugins/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("webpack 插件列表。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const htmlWebpackPlugin = require("html-webpack-plugin");\n// 新建插件实例\nconst htmlPlugin = new htmlWebpackPlugin({\n\ttemplate: path.join(__dirname, "./src/index.html"), // 目标文件\n\tfilename: "index.html", //生成的文件\n});\nmodule.exports = {\n  plugins: [htmlPlugin],\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"devserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver"}},[s._v("#")]),s._v(" devServer")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.webpackjs.com/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.webpackjs.com/configuration/dev-server/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("通过来自 webpack-dev-server 的这些选项，能够用多种方式改变其行为。")]),s._v(" "),a("h3",{attrs:{id:"devserver-compress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver-compress"}},[s._v("#")]),s._v(" devServer.compress")]),s._v(" "),a("p",[s._v("一切服务都启用 gzip 压缩：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("compress: true\n或者CLI\nwebpack-dev-server --compress\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"devserver-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver-https"}},[s._v("#")]),s._v(" devServer.https")]),s._v(" "),a("p",[s._v("默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务。")]),s._v(" "),a("p",[s._v("也可以使用命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("webpack-dev-server --https --key /path/to/server.key --cert /path/to/server.crt --cacert /path/to/ca.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"devserver-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver-port"}},[s._v("#")]),s._v(" devServer.port")]),s._v(" "),a("p",[s._v("指定要监听请求的端口号：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("port: 8080\nwebpack-dev-server --port 8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"devserver-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver-proxy"}},[s._v("#")]),s._v(" devServer.proxy")]),s._v(" "),a("p",[s._v("用于跨域 API 接口。")]),s._v(" "),a("p",[s._v("代理简写。请求到 /api/users 现在会被代理到请求"),a("code",[s._v("http://localhost:3000/api/users")]),s._v("上。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('proxy: {\n  "/api": "http://localhost:3000"\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("也可以重写 api。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('proxy: {\n  "/api": {\n    target: "http://localhost:3000",\n    pathRewrite: {"^/api" : ""}\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("也可以使用"),a("code",[s._v("https")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('roxy: {\n  "/api": {\n    secure: true\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"devserver-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devserver-host"}},[s._v("#")]),s._v(" devServer.host")]),s._v(" "),a("p",[s._v("指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('host: "0.0.0.0"\nwebpack-dev-server --host 0.0.0.0\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"watch-和-watchoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watch-和-watchoptions"}},[s._v("#")]),s._v(" watch 和 watchOptions")]),s._v(" "),a("p",[s._v("watch 是打开文件监听模式。")]),s._v(" "),a("blockquote",[a("p",[s._v("webpack-dev-server 和 webpack-dev-middleware 里 Watch 模式默认开启。")])]),s._v(" "),a("h3",{attrs:{id:"watchoptions-aggregatetimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watchoptions-aggregatetimeout"}},[s._v("#")]),s._v(" watchOptions.aggregateTimeout")]),s._v(" "),a("p",[s._v("当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("aggregateTimeout: 300 // 默认值\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"watchoptions-ignored"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watchoptions-ignored"}},[s._v("#")]),s._v(" watchOptions.ignored")]),s._v(" "),a("p",[s._v("排除监听文件的正则表达式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ignored: /node_modules/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"watchoptions-poll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watchoptions-poll"}},[s._v("#")]),s._v(" watchOptions.poll")]),s._v(" "),a("p",[s._v("通过传递 true 开启 polling，或者指定毫秒为单位进行轮询检查文件变动。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("poll: 1000 // 每秒检查一次变动\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);