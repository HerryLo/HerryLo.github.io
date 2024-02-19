(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{741:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图解javascript作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图解javascript作用域"}},[t._v("#")]),t._v(" 图解javascript作用域")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/39",target:"_blank",rel:"noopener noreferrer"}},[t._v("本文原文地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhihu.com/people/liu-heng-88-71/answers",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文章是回答知乎问题总结而来"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"作用域访问规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域访问规则"}},[t._v("#")]),t._v(" 作用域访问规则")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("下面我们来看看变量"),a("code",[t._v("count")]),t._v("是如何被打印出来：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. `func`函数调用，`console.log`打印`count`变量，查找当前函数作用域，是否存在变量`count`；\n2. 不存在继续向上查找，查找模块作用域，发现`count`变量存在，并且打印出变量的值。\n")])])]),a("p",[t._v("如果模块作用域依然不存在"),a("code",[t._v("count")]),t._v("变量？")]),t._v(" "),a("p",[t._v("会继续向上查找，查找全局作用域是否存在"),a("code",[t._v("count")]),t._v("变量，如果依然不存在，提示"),a("code",[t._v("undefined")]),t._v("。")]),t._v(" "),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://herrylo.github.io/image/yuque_mind.jpeg",alt:""}})]),t._v(" "),a("p",[t._v("通过上面的示例代码，我们可以知道一个规则，"),a("strong",[t._v("作用域访问顺序")]),t._v("：函数作用域 ——> 模块作用域 ——> 全局作用域")]),t._v(" "),a("p",[a("strong",[t._v("提示：作用域访问的方向是不可逆")]),t._v("，"),a("strong",[t._v("只有由里向外访问")]),t._v("，先函数，再模块，最后全局；")]),t._v(" "),a("h2",{attrs:{id:"作用域创建规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域创建规则"}},[t._v("#")]),t._v(" 作用域创建规则")]),t._v(" "),a("p",[t._v("JavaScript中的作用域是词法作用域（相对于动态作用域）。")]),t._v(" "),a("p",[t._v("什么叫词法作用域？顾名思义，词法作用域就是定义在词法阶段的作用域。换句话说，词法作用域是由你在写代码时将变量和块作用域写在哪来决定的。")]),t._v(" "),a("p",[t._v("无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定，这就是JavaScript的词法作用域。（除非你使用 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with",target:"_blank",rel:"noopener noreferrer"}},[t._v("with"),a("OutboundLink")],1),t._v(" 或者 "),a("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval",target:"_blank",rel:"noopener noreferrer"}},[t._v("eval"),a("OutboundLink")],1),t._v(" 欺骗它）\n我们来看下面的例子：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'func'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("代码执行，作用域创建顺序：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. 优先创建全局作用域，如全局window对象，或者挂载在全局的函数或属性；\n2. 之后模块作用域被创建，`count`变量会挂载在模块作用域，`func`函数也是挂载在模块作用域；\n3. 最后才是函数作用域，此时全局作用域和模块作用域已创建生成，如果它需要使用外部的存在的变量或方法，只需向上查找即可；\n")])])]),a("p",[t._v("如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://herrylo.github.io/image/yuque_diagram.png",alt:""}})]),t._v(" "),a("p",[t._v("上图中作用域创建是至上而下，我省略了表示递进关系的线条。我们来归纳一下，"),a("strong",[t._v("作用域创建顺序是：全局作用域 ——> 模块作用域 ——> 函数作用域")])]),t._v(" "),a("p",[t._v("在调用完成之后，作用域也会相应释放。如果是存在闭包，作用域链就会被保存，可以看看："),a("a",{attrs:{href:"https://juejin.cn/post/6844903747957719053",target:"_blank",rel:"noopener noreferrer"}},[t._v("闭包装逼失败(闭包使用) - 掘金"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("作用域访问顺序")]),t._v("：函数作用域 ——> 模块作用域 ——> 全局作用域")]),t._v(" "),a("li",[a("strong",[t._v("作用域访问的方向是不可逆")]),t._v("，"),a("strong",[t._v("只有由里向外访问")])]),t._v(" "),a("li",[a("strong",[t._v("作用域创建顺序是：全局作用域 ——> 模块作用域 ——> 函数作用域")])])]),t._v(" "),a("p",[t._v("以上内容希望可以帮助到你，"),a("strong",[t._v("你的点赞、收藏是我更新的动力！！")])]),t._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("MDN文档")]),t._v(" "),a("p",[t._v("《你不知道的Javascript上卷》")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/8",target:"_blank",rel:"noopener noreferrer"}},[t._v("冴羽 · JavaScript深入之执行上下文"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);