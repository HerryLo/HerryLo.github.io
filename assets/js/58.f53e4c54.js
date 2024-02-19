(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{751:function(e,t,r){"use strict";r.r(t);var a=r(15),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"react底层运行简记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react底层运行简记"}},[e._v("#")]),e._v(" React底层运行简记")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("本文原文地址"),r("OutboundLink")],1),e._v(";")]),e._v(" "),r("h4",{attrs:{id:"_1-jsx背后的功能模块是什么-这个功能模块做了哪些事情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsx背后的功能模块是什么-这个功能模块做了哪些事情"}},[e._v("#")]),e._v(" 1. JSX背后的功能模块是什么，这个功能模块做了哪些事情？")]),e._v(" "),r("p",[r("code",[e._v("JSX")]),e._v("通过"),r("code",[e._v("babel")]),e._v("语法转换之后，实际就是通过"),r("code",[e._v("React.createElement")]),e._v("函数来创建React元素。"),r("code",[e._v("createElement")]),e._v("接收三个参数"),r("code",[e._v("type")]),e._v("类型，"),r("code",[e._v("config")]),e._v("配置，"),r("code",[e._v("children")]),e._v("子元素。通过"),r("code",[e._v("createElement")]),e._v("就可创建出虚拟"),r("code",[e._v("DOM")]),e._v("对象。")]),e._v(" "),r("h4",{attrs:{id:"_2-react团队为什么要去掉旧的生命周期函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-react团队为什么要去掉旧的生命周期函数"}},[e._v("#")]),e._v(" 2. React团队为什么要去掉旧的生命周期函数？")]),e._v(" "),r("p",[e._v("React16+引入"),r("code",[e._v("Fiber")]),e._v("架构，"),r("code",[e._v("Fiber")]),e._v("会将一个大的更新任务拆解为多个小任务，而且它是可中止，可恢复的。React16+生命周期被划分为"),r("code",[e._v("render")]),e._v("和"),r("code",[e._v("commit")]),e._v("两个阶段。"),r("code",[e._v("render")]),e._v("阶段在执行过程中允许被打断，而commit阶段操作涉及真实DOM渲染，是不可打断的。")]),e._v(" "),r("p",[r("code",[e._v("ComponentWillMount")]),e._v("、\n"),r("code",[e._v("ComponentWillUpdate")]),e._v("、\n"),r("code",[e._v("ComponentWillReceiveProps")])]),e._v(" "),r("p",[e._v("这些生命周期，它们都处于"),r("code",[e._v("render")]),e._v("阶段，而在"),r("code",[e._v("Fiber")]),e._v("架构中，"),r("code",[e._v("render")]),e._v("阶段会被打断，重复被执行。在这些生命周期可能习惯做的事情可能有：setState、异步请求、操作真实DOM等。而在Fiber异步渲染控制下，这些生命周期可能会导致非常严重的bug（例如在这些废弃的生命周期中调用支付接口）。")]),e._v(" "),r("h4",{attrs:{id:"_3-为什么是react-hooks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么是react-hooks"}},[e._v("#")]),e._v(" 3. 为什么是React Hooks？")]),e._v(" "),r("p",[e._v("相对于"),r("code",[e._v("Class")]),e._v("组件，函数组件更加轻量，更加符合UI=render(data)特点。同时在Fiber架构的加持下，Hooks的实现不是问题。配合函数组件的发展，Hooks应运而生，从而是函数组件真正把数据和渲染绑定到一起。当然Hooks也还是存在部分不足：部分周期不存在；不能很好的消化“复杂”，组件的拆分和组织是一个大的挑战，不易把握。")]),e._v(" "),r("h4",{attrs:{id:"_4-为什么hooks执行顺序如此重要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么hooks执行顺序如此重要"}},[e._v("#")]),e._v(" 4. 为什么Hooks执行顺序如此重要？")]),e._v(" "),r("p",[e._v("Hooks本质是链表。例如 使用useText、useState创建state时，hook创建的state会以单链表形式保存，更新时，函数组件重新调用，hooks会依次遍历单链表，读取数据并更新，这一过程完全按照创建时的顺序来的。因此当更新时，位置一旦改变，执行顺序被替换，运行就会出现bug。")]),e._v(" "),r("h4",{attrs:{id:"_5-调和-协调-和diff的关系或区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-调和-协调-和diff的关系或区别"}},[e._v("#")]),e._v(" 5. 调和(协调)和diff的关系或区别？")]),e._v(" "),r("p",[e._v("调和指的是虚拟DOM映射到真实DOM的过程。调和过程并不能喝diff画等号。调和是“使一致”的过程，而diff是“找不同”的过程，它只是“使一致”过程中的一个环节。(当然常说的调和相关问题多半就是diff过程的)")]),e._v(" "),r("h4",{attrs:{id:"_6-react的diff逻辑和思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-react的diff逻辑和思路"}},[e._v("#")]),e._v(" 6. react的diff逻辑和思路？")]),e._v(" "),r("div",{staticClass:"language-javascript line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v("因为时间付扎渡的原因，diff过程只针对同层的节点作比较；\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v("对于同类型的组件，才有进一步对比的必要性；\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.")]),e._v("对于列表组件，通过key属性来维持节点的稳定性，避免总是生产新节点；\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("h4",{attrs:{id:"_7-setstate的工作流是怎么样的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-setstate的工作流是怎么样的"}},[e._v("#")]),e._v(" 7. setState的工作流是怎么样的？")]),e._v(" "),r("p",[r("strong",[e._v("非并发(")]),r("code",[e._v("**concurrent**")]),r("strong",[e._v(")模式")]),e._v("："),r("code",[e._v("setState")]),e._v("会出现异步和同步的现象。在生命周期和合成事件中是同步，而在setTimeout、setInterval、DOM原生函数等函数中是同步的。那么这是为什么尼？在合成事件或生命周期执行时，批量更新的任务锁就被开启了，我们所做的setState操作会被放入到批量更新队列中，直到函数执行完，批量更新的任务锁才会被关闭。批量更新的任务锁是一个同步操作，而一旦你在setTimeout函数使用setState，此时setTimeout函数回调会被放入下一个宏任务执行，而当setState执行时，批量更新的任务锁时关闭的，它就不会放入到批量更新队列中，而是直接执行。")]),e._v(" "),r("p",[r("strong",[e._v("并发(")]),r("code",[e._v("**concurrent**")]),r("strong",[e._v(")模式")]),e._v("："),r("code",[e._v("setState")]),e._v("不会出现异步和同步的现象。因为存在时间切片，只要当前时间片没有结束，依旧可以将多个 setState 合并成一个，即使是在setTimeout中被调用。而对于超过当前时间片的操作，会通过"),r("code",[e._v("MessageChannel")]),e._v("放入到下一个宏任务中继续执行。（"),r("code",[e._v("MessageChannel")]),e._v("接收消息的时机比 Promise 所在的 microTask 要晚，但是早于 setTimeout）")]),e._v(" "),r("h4",{attrs:{id:"_8-stack-reconciler栈调和-有怎么样的局限性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-stack-reconciler栈调和-有怎么样的局限性"}},[e._v("#")]),e._v(" 8. Stack Reconciler栈调和 有怎么样的局限性？")]),e._v(" "),r("p",[e._v("浏览器中Js线程和渲染线程是互斥的。这两个线程不能穿插执行，必须串行。而当Js线程长时间占用主线程，那么渲染线程的更新就不得不长时间的等待，这时就会导致页面卡顿。")]),e._v(" "),r("p",[r("code",[e._v("Stack Reconciler")]),e._v("栈调和是一个同步递归过程，虚拟DOM树diff算法遍历是深度优先遍历。由于它是同步的，不可在被打断。当处理结构复杂，体量庞大的虚拟DOM树时，"),r("code",[e._v("Stack Reconciler")]),e._v("时间会很长，以为这Js主线程长时间占用主线程，进而导致上述中说道的渲染卡顿/页面卡死。")]),e._v(" "),r("h4",{attrs:{id:"_9-说一说fiber架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-说一说fiber架构"}},[e._v("#")]),e._v(" 9. 说一说Fiber架构？")]),e._v(" "),r("p",[e._v("特点：可中断、可恢复、存在优先级。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" Scheduler ————> Reconciler ————> Renderer\n 更新优先级         找不同         渲染不同\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("在"),r("code",[e._v("Fiber")]),e._v("架构模式下，每个更新任务会被赋予一个优先级。当然有任务A进入调度器，这个任务优先级更高，而"),r("code",[e._v("Reconciler")]),e._v("中已有任务B在执行，那么，"),r("code",[e._v("Reconciler")]),e._v("会将任务B终止，更高优先级的任务A被推入"),r("code",[e._v("Reconciler")]),e._v("。当A任务完成之后，新一轮调度会将之前中断的任务B重新推入"),r("code",[e._v("Reconciler")]),e._v("，继续它的渲染之旅。")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("render开始 ——————> (工作单元| 工作单元 | 工作单元) ——————> commit提交渲染\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h4",{attrs:{id:"_10-reactdom-render调用栈的初始化阶段、render阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10-reactdom-render调用栈的初始化阶段、render阶段"}},[e._v("#")]),e._v(" 10. ReactDOM.render调用栈的初始化阶段、render阶段")]),e._v(" "),r("p",[e._v("初始化阶段：会创建root对象这个对象挂载"),r("code",[e._v("_internalRoot")]),e._v("属性，而"),r("code",[e._v("_internalRoot")]),e._v("也就是"),r("code",[e._v("FiberRoot")]),e._v("。"),r("code",[e._v("FiberRoot")]),e._v("的本质是一个"),r("code",[e._v("FiberRootNode")]),e._v("对象，其中包含current属性，current对象是一个FiberNode实例。current对象就是一个Fiber节点，并是Fiber树的头部节点；确定Fiber的优先级，结合优先级创建当前Fiber的update对象，并将其入队调度FiberRoot；接下来进入render阶段；(此时相当于只有一个Fiber头部节点)")]),e._v(" "),r("p",[e._v("render阶段：通过createWorkInProgress函数，创建rootFiber节点的副本workInProgress节点树(即current节点的副本节点)，他们通过alternate互相引用；接着会触发beginWork函数，进而实现对新的Fiber节点的创建。循环遍历，组件元素Fiber会不断被创建(每个元素节点对应一个Fiber节点)，直到创建到最后一个为止，此时Fiber树(单链表)基本完成；重点，此时已经遍历到了单链表的最底部节点，然后会"),r("strong",[e._v("由下自上")]),e._v("的依次生成真实DOM节点，同时被它的父组件副作用链，这个副作用链也是一个单链表，直遍历到根节点，此时的根节点上的副作用链就包含的全部的DOM更新。那么剩下的只需要拿到root下的副作用链更新即可了。")])])}),[],!1,null,null,null);t.default=s.exports}}]);