(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{718:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react解析-render的中的update-四"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react解析-render的中的update-四"}},[t._v("#")]),t._v(" react解析: render的中的update(四)")]),t._v(" "),s("blockquote",[s("p",[t._v("感谢 "),s("a",{attrs:{href:"https://github.com/KieSun/Dream/issues/19",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: 剖析 React 源码解析"),s("OutboundLink")],1),t._v("，本篇文章是在读完他的文章的基础上，将他的文章进行拆解和加工，加入我自己的一下理解和例子，便于大家理解。觉得"),s("a",{attrs:{href:"https://github.com/KieSun",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck"),s("OutboundLink")],1),t._v("写的真的很棒 。"),s("strong",[t._v("React 版本为 16.8.6")]),t._v("，关于源码的阅读，可以移步到"),s("a",{attrs:{href:"https://github.com/KieSun/react-interpretation",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck react源码解析"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("本文永久有效链接: "),s("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("react解析: render的中的update(四)"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("a",{attrs:{href:"./2019-08-10"}},[t._v("上一章节")]),t._v("说到，"),s("strong",[t._v("不存在root数据节点")]),t._v("，即通过"),s("RouterLink",{attrs:{to:"/front/2019-08-10.html#创建fiberroot核心函数"}},[t._v("createFiberRoot 函数创建FiberRoot")]),t._v("，"),s("code",[t._v("FiberRoot")]),t._v("对象是整个React应用的起点，同时也记录了整个React应用更新过程中的各种信息。")],1),t._v(" "),s("p",[t._v("下面将要聊到的就是，当root呗创建后，还会发生什么👇👇")]),t._v(" "),s("h3",{attrs:{id:"legacyrendersubtreeintocontainer-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacyrendersubtreeintocontainer-函数"}},[t._v("#")]),t._v(" legacyRenderSubtreeIntoContainer 函数")]),t._v(" "),s("p",[t._v("下面衔接上一部分内容，不懂得可以查看"),s("a",{attrs:{href:"./2019-08-10"}},[t._v("上一章节")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/KieSun/react-interpretation/blob/master/packages/react-dom/src/client/ReactDOM.js#L554",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: ReactDOM 源码 554行 legacyRenderSubtreeIntoContainer"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("legacyRenderSubtreeIntoContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parentComponent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("React$Component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" DOMContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("forceHydrate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化时，container 肯定没有 _reactRootContainer属性")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("root")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_reactRootContainer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略创建root部分")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unbatchedUpdates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("legacy_renderSubtreeIntoContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                    parentComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br")])]),s("p",[t._v("在root刚刚被创建时，"),s("code",[t._v("parentComponent")]),t._v("一般都为null；")]),t._v(" "),s("p",[s("code",[t._v("unbatchedUpdates")]),t._v("函数在这里作用是：告知React内部不进行批量更新，即不用将多个setState合并为一个；\n（"),s("strong",[t._v("setState在后面的章节我们将会说到")]),t._v("）")]),t._v(" "),s("p",[t._v("那么这里"),s("strong",[t._v("实际调用的就是root.render函数，root是ReactRoot实例对象，即调用 "),s("code",[t._v("root.render函数 == ReactRoot.prototype.render函数")])]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"reactroot-prototype-render-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reactroot-prototype-render-函数"}},[t._v("#")]),t._v(" ReactRoot.prototype.render 函数")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/KieSun/react-interpretation/blob/master/packages/react-dom/src/client/ReactDOM.js#L377",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: ReactRoot 源码 377行 ReactRoot.prototype.render"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactRoot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" mixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Work "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里指 FiberRoot")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_internalRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" work "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果有 callback，就 push 进 work 中的数组")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// work._onCommit 就是用于执行所有回调函数的")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_onCommit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[t._v("函数中的参数"),s("code",[t._v("children")]),t._v("即是ReactElement节点对象，"),s("code",[t._v("callback")]),t._v("为回调函数。"),s("strong",[s("code",[t._v("ReactWork")]),t._v("实例对象的主要作用就是维护一个回调数组")]),t._v("，可查看"),s("a",{attrs:{href:"https://github.com/KieSun/react-interpretation/blob/master/packages/react-dom/src/client/ReactDOM.js#L327",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: ReactWork 源码 327行"),s("OutboundLink")],1),t._v("，如果传入参数中存在callback，就将其挂载"),s("code",[t._v("ReactWork")]),t._v("实例对象中;")]),t._v(" "),s("p",[t._v("下面来看看updateContainer函数会做什么。")]),t._v(" "),s("h3",{attrs:{id:"updatecontainer-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatecontainer-函数"}},[t._v("#")]),t._v(" updateContainer 函数")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/KieSun/react-interpretation/blob/master/packages/react-reconciler/src/ReactFiberReconciler.js#L284",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: ReactFiberReconciler 源码 284行 updateContainer"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OpaqueRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parentComponent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("React$Component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExpirationTime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算时间")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestCurrentTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expirationTime 代表优先级，数字越大优先级越高")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sync 的数字是最大的，所以优先级也是最高的")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" expirationTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeExpirationForFiber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateContainerAtExpirationTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parentComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    expirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[s("code",[t._v("container.current")]),t._v("即是从FiberRoot中取出"),s("code",[t._v("RootFiber")]),t._v("对象，"),s("strong",[s("code",[t._v("currentTime")]),t._v("就是当前距离React应用初始化的时间")]),t._v("。 **"),s("code",[t._v("expirationTime")]),t._v("字面意思就是过期时间，后面我会专门花一章的时间来介绍这两个时间，这两个时间也是React应用任务调度的重点。")]),t._v(" "),s("h3",{attrs:{id:"schedulerootupdate函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedulerootupdate函数"}},[t._v("#")]),t._v(" scheduleRootUpdate函数")]),t._v(" "),s("p",[t._v("updateContainerAtExpirationTime函数实际调用的就是"),s("code",[t._v("scheduleRootUpdate")]),t._v("函数，下面来说一下"),s("code",[t._v("scheduleRootUpdate")]),t._v("函数的作用。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/KieSun/react-interpretation/blob/master/packages/react-reconciler/src/ReactFiberReconciler.js#L114",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: ReactFiberReconciler 源码 114行 scheduleRootUpdate"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleRootUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("current")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Fiber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactNodeList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("expirationTime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExpirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个 update，就是内部有几个属性的对象")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// render中的回调函数 ")]),t._v("\n  callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flushPassiveEffects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 update 入队，内部就是一些创建或者获取 queue（链表结构），然后给链表添加一个节点的操作")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueueUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scheduleWork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" expirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("p",[t._v("下面就是update对象其中的属性：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update对象属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" type Update"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("State"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新的过期时间")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("expirationTime")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExpirationTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export const UpdateState = 0;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export const ReplaceState = 1;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export const ForceUpdate = 2;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export const CaptureUpdate = 3;")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定更新的类型，值为以上几种")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新内容，比如`setState`接收的第一个参数")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payload")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应的回调，`setState`，`render`都有")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" mixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向下一个更新")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Update"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("State"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向下一个`side effect`")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nextEffect")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Update"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("State"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])]),s("p",[s("strong",[t._v("udate对象会被插入到React应用维护的任务队列中，不管你是setState还是ReactDOM.render造成的 React应用 更新")]),t._v("都是如此。这个函数核心作用就是创建或者获取一个队列，然后把 update 对象插入队列进行更新。"),s("code",[t._v("scheduleWork")]),t._v("函数就是任务调度的东西了。")]),t._v(" "),s("p",[t._v("更多内容：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("react解析: React.createElement(一)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/8",target:"_blank",rel:"noopener noreferrer"}},[t._v("react解析: React.Children(二)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/9",target:"_blank",rel:"noopener noreferrer"}},[t._v("react解析: render的FiberRoot(三)"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/KieSun/Dream/issues/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("yck: 剖剖析 React 源码"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://react.jokcy.me/book/api/react-element.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jokcy 的 《React 源码解析》: react.jokcy.me/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("ps: 顺便推一下自己的个人公众号：Yopai，有兴趣的可以关注，每周不定期更新，分享可以增加世界的快乐")]),t._v(" "),s("p",[s("img",{attrs:{src:"/webChat1.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);