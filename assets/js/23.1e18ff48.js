(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{349:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("或许少侠是从 Github 赶来观看的，那请继续向下看。")]),t._v(" "),a("p",[t._v("如果不是，这是 Github 源码：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/UESTCzhouyuchuan/pythonWromNewYorkTime",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/UESTCzhouyuchuan/pythonWromNewYorkTime"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("喜欢或者对你有用，请点个 star 哦 ⭐️。")]),t._v(" "),a("h2",{attrs:{id:"项目背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目背景"}},[t._v("#")]),t._v(" 项目背景")]),t._v(" "),a("p",[t._v("因肺炎被迫呆在家中这几天，有个朋友请我帮个忙。因为要建关于一带一路的语料库，从纽约时报("),a("a",{attrs:{href:"https://cn.nytimes.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),a("OutboundLink")],1),t._v("外网，未翻墙的同学无法访问)爬取关于一带一路的所有中英双语的文章(统计后一共 1426 篇，如果人工去一个一个 copy，啥时候是个头啊)，然后把文章段落放到 TXT 文档中，把文章中英标题、发表时间、类型放到 excel 表格中。")]),t._v(" "),a("p",[t._v("这种费时费力，但有迹可循即有规律的事机器是最合适不过了。说到爬虫，咱第一个想到大"),a("code",[t._v("python")])]),t._v(" "),a("ol",[a("li",[t._v("python 相关的库也多")]),t._v(" "),a("li",[t._v("语言本身的速度也不慢(至少比俺"),a("code",[t._v("js")]),t._v("快多了，说多了落泪)")]),t._v(" "),a("li",[t._v("而且可以多线程("),a("code",[t._v("js")]),t._v("留下了不学无术的眼泪)")])]),t._v(" "),a("p",[t._v("而且之前正好做过"),a("code",[t._v("python")]),t._v("处理 excel 表格(教程改天出，改天)，所以百分之💯选"),a("code",[t._v("python")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"正片开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正片开始"}},[t._v("#")]),t._v(" 正片开始")]),t._v(" "),a("p",[t._v("在我看来 "),a("code",[t._v("爬虫项目")]),t._v(" = "),a("code",[t._v("找接口挖数据")]),t._v("+"),a("code",[t._v("分析html剔数据")]),t._v("+"),a("code",[t._v("数据格式化处理")]),t._v("+"),a("code",[t._v("数据记录/存储")]),t._v("。")]),t._v(" "),a("p",[t._v("接下来，看我如何一步一步分析、找出这幕后真凶——"),a("code",[t._v("数据")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"数据在哪里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据在哪里"}},[t._v("#")]),t._v(" 数据在哪里")]),t._v(" "),a("p",[t._v("整个项目初期，我做的一切好像就是在狂喊“数据，你在哪里”“啊，数据，我不是坏人，你在哪里，快出来，哥哥在这”。")]),t._v(" "),a("h3",{attrs:{id:"关键字相关的所有文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字相关的所有文章"}},[t._v("#")]),t._v(" 关键字相关的所有文章")]),t._v(" "),a("p",[t._v("内心 OS❤️")]),t._v(" "),a("blockquote",[a("p",[t._v("看起来好简单 o，不就是请求 URL，得到返回的 html 文档，提取标签信息不就完了，顶多再加个翻页。")])]),t._v(" "),a("p",[t._v("NO!No!No!,俺还是太年轻。拿到请求，一看傻眼了，网页的"),a("code",[t._v("preview")]),t._v("下"),a("code",[t._v("search-list")]),t._v("下啥也没有，是空的。")]),t._v(" "),a("p",[t._v("这是"),a("code",[t._v("postman")]),t._v("得到的数据：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/emptySearchResult.png",alt:"search1"}})]),t._v(" "),a("p",[t._v("这时 Chrome 开发者查看下的源码：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/searchResult.png",alt:"search"}})]),t._v(" "),a("p",[t._v("感觉被坑了有没有。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("害，还是自己菜，这明明暗示这是动态网页噻。动态网页就是服务器发送过的源 html 会在解析过进程中进一步被 js 脚本处理的网页。\n动态网页，那也就说明，这些文章数据是有接口传过来的，那岂不是美滋滋。")])]),t._v(" "),a("p",[t._v("开始找接口，打开开发者工具，到 Network 这一栏，"),a("code",[t._v("Ctrl+R")]),t._v("重新请求，开始找。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/search.png",alt:"search"}})]),t._v(" "),a("p",[t._v("果不其然，接口是/query?data。copy 一下请求 url 放到"),a("code",[t._v("postman")]),t._v("中分析一下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/searchPostman.png",alt:"search"}})]),t._v(" "),a("p",[t._v("分析结果：")]),t._v(" "),a("ul",[a("li",[t._v("query:应该是查询的关键字。")]),t._v(" "),a("li",[t._v("lang：语言？反正是空，不管。")]),t._v(" "),a("li",[t._v("dt: dataType,设为 json。")]),t._v(" "),a("li",[t._v("from: 应该是从从第几个文章开始。")]),t._v(" "),a("li",[t._v("size: 本次数据的个数，经本人测试不能超过，最好设置为 100。")])]),t._v(" "),a("p",[t._v("然后写程序"),a("code",[t._v("getAllArticlesPreInfo.py")]),t._v("，shuashuashua 拿到全部文章信息，按照需求根据时间排好序，然后写到"),a("code",[t._v("allArticlesPreInfo.json")]),t._v("文件中。")]),t._v(" "),a("p",[t._v("运行截图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/preInfo.png",alt:"preInfo.png"}})]),t._v(" "),a("p",[t._v("代码地址："),a("a",{attrs:{href:"https://github.com/UESTCzhouyuchuan/pythonWromNewYorkTime/blob/master/getAllArticlesPreInfo.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/UESTCzhouyuchuan/pythonWromNewYorkTime/blob/master/getAllArticlesPreInfo.py"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"从网页中拿到文章数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从网页中拿到文章数据"}},[t._v("#")]),t._v(" 从网页中拿到文章数据")]),t._v(" "),a("p",[t._v("上一节,咱们拿到了所有网页最重要的信息 URL，现在开始分析单篇 URL 中的文章。")]),t._v(" "),a("p",[t._v("再次派上"),a("code",[t._v("postman")]),t._v("和开发者工具:")]),t._v(" "),a("p",[t._v("Postman 结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/paragraphs.png",alt:"paragraphs"}})]),t._v(" "),a("p",[t._v("开发者工具结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/paragraphs2.png",alt:"paragraphs"}})]),t._v(" "),a("p",[t._v("这次文章信息老老实实的在 html 中，段落的"),a("code",[t._v("class")]),t._v("样式是"),a("code",[t._v("article-paragraph")]),t._v("。")]),t._v(" "),a("p",[t._v("然后提取文章段落，中英文标题把文章信息以 json 格式返回出去。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isSingle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isSingle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title_ZH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" title_ZH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title_EN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" title_EN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"article_paragraph_ZH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("article_paragraph_ZH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"article_paragraph_EN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("article_paragraph_EN\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("写程序"),a("code",[t._v("getSingleArticleInfo.py")]),t._v(",运行结果截图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/singlePage.png",alt:"preInfo.png"}})]),t._v(" "),a("h3",{attrs:{id:"多进程获取全部文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程获取全部文章"}},[t._v("#")]),t._v(" 多进程获取全部文章")]),t._v(" "),a("p",[t._v("上一篇讲到如何获得单个页面的文章，这次将如何使用多进程快速获得全部文章信息。")]),t._v(" "),a("p",[t._v("思路如下：")]),t._v(" "),a("ol",[a("li",[t._v("从之前的"),a("code",[t._v("allArticlesPreInfo.json")]),t._v("文件中拿到所有文章的 URL 列表(相当于数组)。")]),t._v(" "),a("li",[t._v("把这个数组分成多份，对于每一份，在线程池中为其分配一个线程去获得该数组中全部 URL 的文章，然后把结果以数组的形式返回出来。")]),t._v(" "),a("li",[t._v("拼接所有线程的返回数组，就得到了全部 URL 中的文章信息。")]),t._v(" "),a("li",[t._v("把数据以 json 形式存放到"),a("code",[t._v("allArticlesPageInfo.json")]),t._v("文件中。")])]),t._v(" "),a("p",[t._v("由于本过程耗时(20 分钟作用，视网络情况)，就不再放出结果图，有兴趣自己运行一下。")]),t._v(" "),a("p",[t._v("这部分在文件"),a("code",[t._v("getAllArticlesPageInfo.py")]),t._v("中，详细请看其中代码，"),a("a",{attrs:{href:"https://github.com/UESTCzhouyuchuan/pythonWromNewYorkTime/blob/master/getAllArticlesPageInfo.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("网址"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"把得到的全部文章信息放到文件中。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把得到的全部文章信息放到文件中。"}},[t._v("#")]),t._v(" 把得到的全部文章信息放到文件中。")]),t._v(" "),a("p",[t._v("这块没啥难点，从上面的"),a("code",[t._v("allArticlesPageInfo.json")]),t._v("文件中提取出全部文章信息存放的的数组。然后依次放到 TXT 和文件中，放入规则由需求而定。")]),t._v(" "),a("p",[t._v("这部分在文件"),a("code",[t._v("_write.py")]),t._v("中,运行截图")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20200216/write.png",alt:"write.png"}})]),t._v(" "),a("h2",{attrs:{id:"万剑合一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#万剑合一"}},[t._v("#")]),t._v(" 万剑合一")]),t._v(" "),a("p",[t._v("把所有流程串起来，写入"),a("code",[t._v("main.py")]),t._v("中")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding:utf-8 -*-")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" getAllArticlesPreInfo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" getAllArticlesPageInfo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" _write "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    query "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"一带一路"')]),t._v("\n    getAllArticlesPreInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    getAllArticlesPageInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    beginWrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"习得独门秘籍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#习得独门秘籍"}},[t._v("#")]),t._v(" 习得独门秘籍")]),t._v(" "),a("p",[t._v("至此，少侠以及习得俺的秘笈。")]),t._v(" "),a("p",[t._v("原创不易，如果学到了东西，麻烦"),a("a",{attrs:{href:"https://github.com/UESTCzhouyuchuan/pythonWromNewYorkTime",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github(我是传送门)"),a("OutboundLink")],1),t._v("点一小⭐️⭐️哦，谢谢。")]),t._v(" "),a("p",[t._v("俺也把俺这两天得心血(这两天都在熬夜肝，呜呜呜)给记录下来，感谢你能看到这里，再见哦。😄")]),t._v(" "),a("h2",{attrs:{id:"项目注意点："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目注意点："}},[t._v("#")]),t._v(" 项目注意点：")]),t._v(" "),a("ol",[a("li",[t._v("第一个，因为纽约时报是外网，需要翻墙开 vpn，而且 requests 模块需要开代理。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("proxies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:1080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:1080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    backFix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dual/"')]),t._v("\n    realURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" backFix\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" realURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        printError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"解析网页"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" realURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("第二个，会存在文章只有中文版，无双语版的情况，要先请求双语版，如果是 notFound，再去请求中文版。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    backFix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dual/"')]),t._v("\n    realURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" backFix\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" realURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        printError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"解析网页"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" realURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        doc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        notFound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"head title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        isSingle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断标题是否为notFound")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notFound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"页面没有找到 - 纽约时报中文网"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            isSingle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("proxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                printError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"解析网页"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在使用多线程拉去全部 URL 的文章时，由于请求数量多难免中间出现网络波动照成请求失败，所以一是要进行错误处理，让程序继续运行下去，二是在后面检查返回的信息是否为 None，如果是重新请求，这样基本可以保证全部请求成功。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("articlesPageInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("articlesPreInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" articlesPageInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" articlesPreInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web_url_with_host"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            printTip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"出现None 需要修复 重新解析网页"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            single_page_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getURLInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            articlesPageInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" single_page_info\n            "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"None"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"articlesPageInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" articlesPageInfo\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);