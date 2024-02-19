(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{738:function(s,e,a){"use strict";a.r(e);var n=a(15),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"知识扩展-sql查询基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识扩展-sql查询基础"}},[s._v("#")]),s._v(" 知识扩展- SQL查询基础")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/HerryLo",target:"_blank",rel:"noopener noreferrer"}},[s._v("作者：HerryLo"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/AttemptWeb/Record/issues/32",target:"_blank",rel:"noopener noreferrer"}},[s._v("博客原文链接"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("由于公司项目原因，在生产项目中用到了SQL语句，尽管只是一些简单的查询语句，也算是自己前端生涯的技能拓展，所以专门对于SQL语句，作了一些基础练习。网上学习SQL语句教程非常的多，学习资料百度即可。作为一个SQL菜鸟，在这里分享，是为了巩固学习，希望可以帮助到大家。")]),s._v(" "),a("h3",{attrs:{id:"sql基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql基础"}},[s._v("#")]),s._v(" SQL基础")]),s._v(" "),a("p",[s._v("SQL 是用于访问和处理数据库的标准的计算机语言。目前我接触的数据库有：MySQL、PostgreSQL、MongoDB，前两个是关系型数据库，后一个是非关系型数据库。它们给我的直观区别是：关系型支持SQL语句，非关系型不支持。"),a("code",[s._v("MySQL")]),s._v("、"),a("code",[s._v("PostgreSQL")]),s._v("都是支持SQL语句的，这里需要一点前提知识。")]),s._v(" "),a("ul",[a("li",[s._v("数据库: 数据库是一些关联表的集合")]),s._v(" "),a("li",[s._v("数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格")]),s._v(" "),a("li",[s._v("列: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据")]),s._v(" "),a("li",[s._v("行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据")]),s._v(" "),a("li",[s._v("主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据，例如id")])]),s._v(" "),a("h2",{attrs:{id:"sql查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql查询"}},[s._v("#")]),s._v(" SQL查询")]),s._v(" "),a("h3",{attrs:{id:"_1-如何进行数据表的查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何进行数据表的查询"}},[s._v("#")]),s._v(" 1. 如何进行数据表的查询？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 获取数据表中具体那几列的数据\nselect column_name1, column_name2 from PERSONS\n\n// 获取数据表全部的数据，*表示所有\nselect * from PERSONS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这个的"),a("code",[s._v("PERSONS")]),s._v("就是数据表，"),a("code",[s._v("column_name1")]),s._v("、"),a("code",[s._v("column_name2")]),s._v("列的名称。")]),s._v(" "),a("h3",{attrs:{id:"_2-如何进行数据表的过滤查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何进行数据表的过滤查询"}},[s._v("#")]),s._v(" 2. 如何进行数据表的过滤查询？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 查询符合 name为liuheng 的数据\nselect * from PERSONS where name='liuheng';\n\n// 查询符合 name为liuheng和liuheng1 的数据\nselect * from PERSONS where name='liuheng' and name='liuheng1';\n\n// 查询符合 age大于20 的数据\nselect * from PERSONS where age > 20;\n\n// 查询符合 age等于20，30 的数据\nselect * from PERSONS where age in (20, 30);\n\n// 查询符合 name首字母为'l' 的数据\nselect * from PERSONS where name like 'l%';\n\n// 查询符合 name尾字母为'1' 的数据\nselect * from PERSONS where name like '%1';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("code",[s._v("where")]),s._v(" 子句用于提取那些满足指定条件的记录。"),a("code",[s._v("like")]),s._v(" 操作符用于在 WHERE 子句中搜索列中的指定模式。"),a("code",[s._v("in")]),s._v(" 操作符允许在 WHERE 子句中规定多个值。")]),s._v(" "),a("h3",{attrs:{id:"_3-如何多表查询数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何多表查询数据"}},[s._v("#")]),s._v(" 3. 如何多表查询数据？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 查询PERSONS和DOGS两张表的全部数据\nselect * from PERSONS, DOGS;\n\nselect p.id, p.name, p.age, d.owner dog_name from PERSONS p, DOGS d;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("以上sql语句即可进行多表查询，这样的多表查询又称笛卡尔查询，使用笛卡尔查询时要非常小心，由于结果集是目标表的行数乘积，对两个各自有100行记录的表进行笛卡尔查询将返回1万条记录，对两个各自有1万行记录的表进行笛卡尔查询将返回1亿条记录。("),a("strong",[s._v("谨慎使用")]),s._v(")")]),s._v(" "),a("p",[s._v("即使配合where语句也要慎用，因为FROM X,Y是先做笛卡尔乘积，WHERE 再从乘积后的表中选出指定列。")]),s._v(" "),a("h3",{attrs:{id:"_4-有更好的多表查询方法嘛-连接查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-有更好的多表查询方法嘛-连接查询"}},[s._v("#")]),s._v(" 4. 有更好的多表查询方法嘛？—— 连接查询")]),s._v(" "),a("p",[s._v("连接查询分为三种：内查询 INNER JOIN、左查询 LEFT OUTER JOIN、右查询 RIGHT OUTER JOIN；\n"),a("strong",[s._v("内查询")]),s._v("语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 内查询\nselect p.id, p.name, p.gender, p.age, d.name dog_name\nfrom PERSONS p\ninner join DOGS d\non s.name = d.owner;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",[a("li",[s._v("确定主表，使用from <表1>的语法(这里的表1 即可以是特定的表，也可以是(select * from ROBOTS;) 这样的语句)；")]),s._v(" "),a("li",[s._v("确定需要连接的表，使用inner join <表2>的语法；")]),s._v(" "),a("li",[s._v("确定连接条件，使用ON；可选。可选加上where子句、order by等子句；")])]),s._v(" "),a("p",[s._v("内查询主要用来查询两表都存在的记录：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2014/03/img_innerjoin.gif",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_5-左查询和右查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-左查询和右查询"}},[s._v("#")]),s._v(" 5. 左查询和右查询？")]),s._v(" "),a("p",[a("strong",[s._v("左查询")]),s._v("语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 左查询\nselect p.id, p.name, p.gender, p.age, d.name dog_name\nfrom PERSONS p\nleft join DOGS d\non s.name = d.owner;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("left join")]),s._v("等价于"),a("code",[s._v("left outer join")]),s._v("，左查询是选出左表存在的记录：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2014/03/img_leftjoin.gif",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("右查询")]),s._v("语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 右查询\nselect p.id, p.name, p.gender, p.age, d.name dog_name\nfrom PERSONS p\nright join DOGS d\non s.name = d.owner;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("right join")]),s._v("等价于"),a("code",[s._v("right outer join")]),s._v("，右查询是选出左表存在的记录：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://www.runoob.com/wp-content/uploads/2014/03/img_rightjoin.gif",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_6-sql语句支持函数嘛"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-sql语句支持函数嘛"}},[s._v("#")]),s._v(" 6. SQL语句支持函数嘛？")]),s._v(" "),a("p",[s._v("sql是有内建函数，sql的内建函数可以极大便利开发者。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 返回指定列的最大值\nselect MAX(age) from PERSONS;\n\n// 返回表中的记录数\nselect COUNT(*) from PERSONS;\n\n// 返回文本字段中值的长度\nselect LEN(name) from PERSONS;\n\n// 返回指定的列中第一个记录的值\nselect FIRST(*) from PERSONS;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("以上只是sql内建函数中的几个常用函数，还有更多的函数没有列出，例如：LAST、MIN、SUM、AVG等。")]),s._v(" "),a("h3",{attrs:{id:"_7-如何更新表数据或删除表数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何更新表数据或删除表数据"}},[s._v("#")]),s._v(" 7.如何更新表数据或删除表数据？")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 更新表数据\nupdate table_name set col1=values1, clo2=value2 where col3=value\n\n// 删除表数据\ndelete from table_name where col=value;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("建议对于数据表中的必要数据的删除只是标记删除，保存数据记录。")]),s._v(" "),a("p",[s._v("这次分享到此为止，由于自己也是菜鸟的原因，会持续学习sql，后续也会继续分享相关学习。")]),s._v(" "),a("p",[a("strong",[s._v("ps")]),s._v(": 微信公众号：Yopai，有兴趣的可以关注，每周不定期更新。不断分享，不断进步")]),s._v(" "),a("p",[a("img",{attrs:{src:"/webChat1.png",alt:""}})])])}),[],!1,null,null,null);e.default=t.exports}}]);