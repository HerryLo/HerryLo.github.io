(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{765:function(_,v,a){"use strict";a.r(v);var t=a(15),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"浅读-软件设计哲学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅读-软件设计哲学"}},[_._v("#")]),_._v(" 浅读-软件设计哲学")]),_._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/590534099",target:"_blank",rel:"noopener noreferrer"}},[_._v("原文链接"),a("OutboundLink")],1)]),_._v(" "),a("p",[_._v("软件为何越来越难维护？甚至于不想去维护？\n在软件迭代中，不关注软件系统结构，导致软件复杂度累加，软件缺乏系统设计，模块混乱，一旦需要增加、修改或优化，改变的代价无法评估，甚至于为了解决一个bug或优化，引入一个新的bug。【高耦合低内聚，降低复杂度】")]),_._v(" "),a("h3",{attrs:{id:"_1-复杂度本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-复杂度本质"}},[_._v("#")]),_._v(" 1. 复杂度本质")]),_._v(" "),a("p",[_._v("复杂度与软件系统结构息息相关。复杂度越大，修改或理解系统的难度也越大。\n复杂度一般的三种症状：")]),_._v(" "),a("ul",[a("li",[_._v("变化放大，需要修改一个地方，却发现改动的点涉及全站，导致难度倍增；")]),_._v(" "),a("li",[_._v("认知负荷，开发者需要完成一项任务的知识量；")]),_._v(" "),a("li",[_._v("未知，开发者在修改代码后，不知道它的实际影响面。")])]),_._v(" "),a("p",[_._v("复杂度的原因：")]),_._v(" "),a("ul",[a("li",[_._v("依赖性，模块的相互依赖关系(模块间过度依赖)；")]),_._v(" "),a("li",[_._v("模糊性，重要信息模糊不清(例如：变量名、系统文档、代码注释等)。")])]),_._v(" "),a("p",[a("strong",[_._v("简化模块依赖 和 减少模糊性 可以有效降低软件复杂度")])]),_._v(" "),a("h3",{attrs:{id:"_2-战略编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-战略编程"}},[_._v("#")]),_._v(" 2. 战略编程")]),_._v(" "),a("p",[_._v("在现代商业软件开发中，通常采用增量开发(敏捷开发)，不断的迭代开发，增加新的功能，如同堆积木一般。")]),_._v(" "),a("p",[_._v("以最快的速度，完成开发任务，崇尚战术编程思维，进行软件开发编程。由于是以完成任务导向，在开发过程，不会过多考虑软件系统设计，导致复杂度累加，迭代难度加大。")]),_._v(" "),a("h4",{attrs:{id:"那么如何避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那么如何避免"}},[_._v("#")]),_._v(" 那么如何避免？")]),_._v(" "),a("p",[_._v("通过战略编程思维，在每次迭代中，尽量设计通用性的接口，花一定的时间修改或调整系统设计，让后期迭代更加顺畅。（任何系统都不是一蹴而就）")]),_._v(" "),a("h3",{attrs:{id:"_3-模块设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-模块设计"}},[_._v("#")]),_._v(" 3. 模块设计")]),_._v(" "),a("p",[_._v("深模块设计，简单的接口和复杂的实现分离。")]),_._v(" "),a("p",[_._v("每一个模块都会提供抽象的接口，使用者并不需要知道内部实现，只需要调用接口，传递对应的参数使用即可。")]),_._v(" "),a("p",[_._v("对于复杂的深模块，只需要暴露简易的接口即可；")]),_._v(" "),a("h3",{attrs:{id:"_4-系统分层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-系统分层"}},[_._v("#")]),_._v(" 4. 系统分层")]),_._v(" "),a("p",[_._v("软件系统是分层构成的，高层使用低层提供的方法。")]),_._v(" "),a("p",[_._v("例如：TCP/IP协议")]),_._v(" "),a("p",[_._v("不要进行简单的参数传递，一个方法只是作为简单的传参使用，这样反而提升复杂度。")]),_._v(" "),a("h3",{attrs:{id:"_5-如何合并和分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何合并和分离"}},[_._v("#")]),_._v(" 5. 如何合并和分离")]),_._v(" "),a("p",[_._v("组件分离的前提是：组件是真正独立的。")]),_._v(" "),a("p",[_._v("如果组件之间依然存在依赖关系，分离是不合适的。")]),_._v(" "),a("p",[_._v("组件模块是否合并，以结果为导向：当两个或多个组件模块被合并时，接口使用更简单、方便。")]),_._v(" "),a("h3",{attrs:{id:"_6-定义错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-定义错误"}},[_._v("#")]),_._v(" 6. 定义错误")]),_._v(" "),a("p",[_._v("代码中异常问题的兼容，通常需要大量代码支持。")]),_._v(" "),a("p",[_._v("对于这种情况，可以通过合理的异常提示来完成，例如：window系统中，对于正在开启的文件进行删除操作，系统就会提示你，操作异常。")]),_._v(" "),a("p",[_._v("在一般情况下，我们就可以采取以上的方法，避免过多的代码兼容，直接提示异常。不过相对理想的情况就是，尽量减少代码，编写通用的异常处理模块，通过通用性来降低异常处理复杂度。")]),_._v(" "),a("h3",{attrs:{id:"_7-两次设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-两次设计"}},[_._v("#")]),_._v(" 7. 两次设计")]),_._v(" "),a("p",[_._v("并不是真的要去做两次设计，而是希望，在设计一个模块或组件功能时，仔细的思考一下是否有更好的设计方案。")]),_._v(" "),a("p",[_._v("考虑多种设计，考虑这种设计和对比弱点，将有益的它们具有其他设计的功能。在对备选方案进行粗略设计后，列出每个利弊。")]),_._v(" "),a("p",[_._v("“两次设计”方法不仅可以改善您的设计，而且还可以提高您的设计技能。设计和比较多个项目的过程方法将教您有关使设计更好或更坏的因素")]),_._v(" "),a("h3",{attrs:{id:"_8-为什么写注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-为什么写注释"}},[_._v("#")]),_._v(" 8. 为什么写注释")]),_._v(" "),a("p",[_._v("注释是抽象的基础，抽象的目的是隐藏复杂性：抽象是简化的实体视图，其中保留了基本信息。如果用户必须阅读方法的代码，那么注释可以帮助它了解实体抽象。")]),_._v(" "),a("h4",{attrs:{id:"说服你注意的三件事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说服你注意的三件事"}},[_._v("#")]),_._v(" 说服你注意的三件事：")]),_._v(" "),a("ol",[a("li",[_._v("好的评论可以在总体上产生很大的不同软件质量；")]),_._v(" "),a("li",[_._v("写好评论并不难；")]),_._v(" "),a("li",[_._v("并且（这可能很难相信）写注释实际上很有趣；")])]),_._v(" "),a("p",[_._v("文档可以通过为开发人员提供他们所需的信息来减少认知负担进行更改，并使开发人员易于忽略以下不相关的信息。好的文档可以阐明依赖关系，并且它填补了空白以消除晦涩之处。")]),_._v(" "),a("h3",{attrs:{id:"_9-注释应该描述代码中没有明显的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-注释应该描述代码中没有明显的内容"}},[_._v("#")]),_._v(" 9. 注释应该描述代码中没有明显的内容")]),_._v(" "),a("p",[_._v("编写注释的原因是，使用编程语言编写的语句，无法捕捉到编写代码的开发人员头脑中的重要信息，而将其写在注释中，即可让后来的开发者更快了解功能代码，也可以提醒现有开发人员。")]),_._v(" "),a("h3",{attrs:{id:"_10-选择命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-选择命名"}},[_._v("#")]),_._v(" 10. 选择命名")]),_._v(" "),a("p",[_._v("给变量，类，模块，文件起名字很难，真的很难。好的命名能使得软件设计更容易理解，差的命名更容易产生Bug。")]),_._v(" "),a("h3",{attrs:{id:"_11-注释先行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-注释先行"}},[_._v("#")]),_._v(" 11. 注释先行")]),_._v(" "),a("p",[_._v("在实现过程中，把接口和注释先准备好。")]),_._v(" "),a("h3",{attrs:{id:"_12-修改现有代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-修改现有代码"}},[_._v("#")]),_._v(" 12. 修改现有代码")]),_._v(" "),a("p",[_._v("对于修改代码，同样面临着“战术性编程”和“战略性编程”的挑战，是以最少的修改完成任务，还是以重新设计使得系统更合理的角度进行长线投资，需要仔细思考。")]),_._v(" "),a("h3",{attrs:{id:"_13-一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-一致性"}},[_._v("#")]),_._v(" 13. 一致性")]),_._v(" "),a("p",[_._v("一致性在软件设计里很重要，包括：")]),_._v(" "),a("ol",[a("li",[_._v("命名")]),_._v(" "),a("li",[_._v("代码风格")]),_._v(" "),a("li",[_._v("接口")]),_._v(" "),a("li",[_._v("设计模式")]),_._v(" "),a("li",[_._v("常量")])]),_._v(" "),a("p",[_._v("可以使用以下的方法来保证一致性：")]),_._v(" "),a("ol",[a("li",[_._v("文档")]),_._v(" "),a("li",[_._v("利用工具/代码审查来强制")]),_._v(" "),a("li",[_._v("入乡随俗")]),_._v(" "),a("li",[_._v("不要随便改变命名约定")])])])}),[],!1,null,null,null);v.default=r.exports}}]);