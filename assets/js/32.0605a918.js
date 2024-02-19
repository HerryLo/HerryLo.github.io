(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{715:function(t,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图解javascript原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图解javascript原型链"}},[t._v("#")]),t._v(" 图解javascript原型链")]),t._v(" "),a("p",[t._v("作者: "),a("a",{attrs:{href:"https://github.com/HerryLo",target:"_blank",rel:"noopener noreferrer"}},[t._v("HerryLo"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/11",target:"_blank",rel:"noopener noreferrer"}},[t._v("本文永久有效链接: https://github.com/AttemptWeb......"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原型链和原型对象是js的核心，js以原型链的形式，保证函数或对象中的方法、属性可以让向下传递，按照面向对象的说法，这就是继承。而js通过原型链才得以实现函数或对象的继承，那么下面我们就来聊一聊js中的原型链。以下图居多，请放心食用。")]),t._v(" "),a("h2",{attrs:{id:"prototype和constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prototype和constructor"}},[t._v("#")]),t._v(" prototype和constructor")]),t._v(" "),a("p",[a("strong",[t._v("prototype指向函数的原型对象，这是一个显式原型属性，只有函数才拥有该属性")]),t._v("。"),a("strong",[t._v("constructor")]),t._v("指向原型对象的构造函数。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以思考一下的打印结果，它们分别指向谁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("下面来看看各个构造函数与它自己原型对象之间的关系：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20190905/1567698491518.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"proto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[t._v("#")]),t._v(" proto")]),t._v(" "),a("p",[t._v("每个对象都有"),a("code",[t._v("_proto_")]),t._v("，它是隐式原型属性，指向了创建该对象的构造函数原型。由于js中是没有类的概念，而为了实现继承，通过 "),a("code",[t._v("_proto_")]),t._v(" 将对象和原型联系起来组成原型链，就可以让对象访问到不属于自己的属性。")]),t._v(" "),a("h3",{attrs:{id:"函数和对象之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数和对象之间的关系"}},[t._v("#")]),t._v(" 函数和对象之间的关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20190905/1567698598618.jpg",alt:""}})]),t._v(" "),a("p",[t._v("Foo、Function和Object都是函数，它们的"),a("code",[t._v("_proto_")]),t._v("都指向"),a("code",[t._v("Function.prototype")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"原型对象之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型对象之间的关系"}},[t._v("#")]),t._v(" 原型对象之间的关系")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20190905/1567698653683.jpg",alt:""}})]),t._v(" "),a("p",[t._v("它们的"),a("code",[t._v("_proto_")]),t._v("都指向了"),a("code",[t._v("Object.prototype")]),t._v("。js原型链最终指向的是Object原型对象")]),t._v(" "),a("h2",{attrs:{id:"proto-原型链图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proto-原型链图"}},[t._v("#")]),t._v(" _proto_原型链图")]),t._v(" "),a("p",[a("img",{attrs:{src:"/20190905/1567699387394.jpg",alt:""}})]),t._v(" "),a("p",[t._v("相信只要你看懂了上面的图表，那么你应该就已经理解了js的原型链了。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("Function 和 Object 是两个函数。")]),t._v(" "),a("li",[a("strong",[t._v("proto")]),t._v(" 将对象和原型连接起来组成了原型链。")]),t._v(" "),a("li",[t._v("所有的函数的 "),a("strong",[t._v("proto")]),t._v(" 都指向Function原型对象。")]),t._v(" "),a("li",[a("strong",[t._v("js的原型链最终指向的是Object原型对象(Object.prototype)")]),t._v("（在这里我将null排除在外了）。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/20190905/1567698457129.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"最新补充20220223"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最新补充20220223"}},[t._v("#")]),t._v(" 最新补充20220223")]),t._v(" "),a("p",[t._v("2022.02.23号补充：")]),t._v(" "),a("p",[t._v("由于是2019年的文章，当时的自己只是为了理清楚，原型链的整个链条，它是如何实现继承或方法复用的，并没有考虑它实例的样子，真的非常抱歉缺失一环 ，目前由于思维导图工具已找不到 ，只能通过代码补充下了。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let f = new Foo();\n\nf.constructor === Foo;\n\nf._proto_ === Foo.prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("实例化对象f")]),t._v(" 构造函数指向 Foo， 由于 "),a("code",[t._v("实例化对象f")]),t._v(" 是不存在显示原型("),a("code",[t._v("f.prototype")]),t._v(")，"),a("code",[t._v("实例化对象f")]),t._v(" 通过 "),a("code",[t._v("隐式原型_proto_")]),t._v(" 保证原型链条的连续和衔接。那么这里又可以看到一个有趣的情况，这是非常优雅且工整的")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("f._proto_ === Foo.prototype\n\nFoo._proto_ === Function.prototype\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("最终的指向不需要解释了，上面的图中已经有讲到了。"),a("strong",[t._v("其实以上的内容红皮书中都有，新人在阅读时，进行一定程度的拆解就好")]),t._v("，希望可以帮助大家，迟到的补充 。")]),t._v(" "),a("p",[t._v("ps: 微信公众号：Yopai，有兴趣的可以关注，每周不定期更新，分享可以增加世界的快乐")]),t._v(" "),a("p",[a("img",{attrs:{src:"/webChat1.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);