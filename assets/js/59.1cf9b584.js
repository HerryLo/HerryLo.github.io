(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{761:function(t,e,r){"use strict";r.r(e);var a=r(15),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"个人博客小程序构建-不知道客官满意不"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#个人博客小程序构建-不知道客官满意不"}},[t._v("#")]),t._v(" 个人博客小程序构建，不知道客官满意不？")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/36",target:"_blank",rel:"noopener noreferrer"}},[t._v("本文原文地址"),r("OutboundLink")],1),t._v(";")]),t._v(" "),r("p",[t._v("一直有构建个人博客小程序的想法，但又不想自己开发后端接口，想做到无后端，人又懒，就没有动手开干。")]),t._v(" "),r("p",[t._v("最近公司原因使用了语雀文档，觉得编辑界面蛮不错，功能强大，"),r("code",[t._v("思维导图")]),t._v("、"),r("code",[t._v("时序图")]),t._v("、"),r("code",[t._v("pdf")]),t._v("都支持，顺便将个人文章上传进行备份。后面在持续使用中，发现还提供"),r("code",[t._v("文档API")]),t._v("接口，于是萌生想法，是否可以考虑用"),r("code",[t._v("语雀接口")]),t._v("构建小程序。在"),r("code",[t._v("Postman")]),t._v(" 测试了一波，发现字段基本都有，那就开始动手干了。")]),t._v(" "),r("h2",{attrs:{id:"uniapp-语雀api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uniapp-语雀api"}},[t._v("#")]),t._v(" uniapp&语雀API")]),t._v(" "),r("p",[t._v("小程序构建框架选择"),r("a",{attrs:{href:"https://uniapp.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp"),r("OutboundLink")],1),t._v("，主要想尝试下不同的框架，之前有尝试使用 Taro 构建过下小程序："),r("a",{attrs:{href:"https://github.com/HerryLo/wxSapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("垃圾分类小程序"),r("OutboundLink")],1),t._v("，就想试试其他框架了。之前听过群友聊过"),r("a",{attrs:{href:"https://uniapp.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp"),r("OutboundLink")],1),t._v("，就决定试试。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://uniapp.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp"),r("OutboundLink")],1),t._v("主要是"),r("code",[t._v("vue")]),t._v("的语法，开发的流程按照"),r("a",{attrs:{href:"https://uniapp.dcloud.net.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp 开发文档"),r("OutboundLink")],1),t._v("就没有太大问题，平时尽管使用"),r("code",[t._v("React")]),t._v("开发，之前是接触和开发过"),r("code",[t._v("vue")]),t._v("项目，问题不太大。")]),t._v(" "),r("p",[t._v("既然"),r("code",[t._v("uniapp")]),t._v("开发问题不大，那就看看接口"),r("code",[t._v("语雀API")]),t._v("怎么样呢？")]),t._v(" "),r("p",[t._v("前期使用"),r("code",[t._v("Postman")]),t._v("调试以后，发现接口是可以调通的，不过语雀近期推出了"),r("strong",[t._v("会员功能")]),t._v("，好像会和这个冲突，免费用户不知道后期是否可以调用"),r("a",{attrs:{href:"https://www.yuque.com/yuque/developer/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("语雀 API"),r("OutboundLink")],1),t._v("，找语雀官方人员确认之后：")]),t._v(" "),r("blockquote",[r("p",[t._v("语雀回复：")])]),t._v(" "),r("blockquote",[r("p",[t._v("你好，目前 api 已变更为会员权益功能")])]),t._v(" "),r("p",[t._v("。。。有点拉了，不过看在文档好用的份上，还是"),r("strong",[t._v("开了99的专业会员")]),t._v("，不然"),r("a",{attrs:{href:"https://www.yuque.com/yuque/developer/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("语雀 API"),r("OutboundLink")],1),t._v("接口没办法调用，整体来说还划算吧？吧？吧？")]),t._v(" "),r("h2",{attrs:{id:"小程序界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序界面"}},[t._v("#")]),t._v(" 小程序界面")]),t._v(" "),r("p",[t._v("界面简单整洁，格调清新（功能简单）。不吹了，有兴趣自己构建的同学，底部附有项目源码地址。（主要是不知道怎么设计，就成这个样子了）")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{staticStyle:{height:"60%",width:"60%"},attrs:{src:"https://herrylo.github.io/image/IMG_2940.png"}}),t._v(" "),r("img",{staticStyle:{height:"60%",width:"60%"},attrs:{src:"https://herrylo.github.io/image/IMG_2941.png"}})]),t._v(" "),r("p",[t._v("目前只支持文章列表，文章总数等功能，后续应该会添加上评论、点赞功能。")]),t._v(" "),r("p",[t._v("如果你也想开发自己的个人博客系小程序项目，希望以上可以帮助到你！")]),t._v(" "),r("h2",{attrs:{id:"更多"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),r("p",[t._v("附上我自己的小程序项目，希望可帮到大家，项目为开源状态，有兴趣可以看看！！")]),t._v(" "),r("p",[t._v("项目地址：")]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://github.com/HerryLo/uniapp-wxapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp 个人博客小程序 GitHub 地址"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://github.com/HerryLo/wxSapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trao 垃圾分类小程序 GitHub 地址"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("博客二维码:")]),t._v(" "),r("blockquote",[r("p",[r("img",{attrs:{src:"https://herrylo.github.io/image/gh_blog.jpg",alt:""}})])]),t._v(" "),r("p",[t._v("注意： 框架使用的uniapp。文章是在语雀："),r("a",{attrs:{href:"https://www.yuque.com/yopai/pp6bv5",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.yuque.com"),r("OutboundLink")],1),t._v(" 发布的，然后语雀有提供API接口，可获取到在语雀上发布的文档列表；不过之前问语雀官方，官方回复是需要会员才可访问语雀API调取文档数据，免费用户是无法调取；")])])}),[],!1,null,null,null);e.default=n.exports}}]);