(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{253:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-防抖和节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-防抖和节流","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 防抖和节流")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("区别")]),t._v(" "),a("ol",[a("li",[t._v("防抖: 限制触发事件的时间间隔. 维护一个定时器, 在规定时间内触发的话会重置定时器.")]),t._v(" "),a("li",[t._v("节流: 在规定的时间内函数只触发一次.相较于防抖最大的区别就是不管时间触发多频繁, 都保证只在规定的时间内触发一次, 防抖只是最后一次事件才触发")])])]),t._v(" "),a("h3",{attrs:{id:"防抖函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 防抖函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 防抖函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果有一个函数在等待执行 清除定时器 下面重新计时")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// wait时间后(期间不能再触发debounce) 执行回调")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("actionFn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'回调'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要执行的函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionFn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一次在1500ms后触发，之后每1000ms触发一次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionFn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还没执行就一直重复触发,不会执行")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"节流函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节流函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 节流函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 节流函数 每隔一定时间就执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gapTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _lastTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _nowTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_nowTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" _lastTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gapTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("_lastTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !_lastTime 第一次进入")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前时间- 上次执行的时间 超过 给定时间间隔 就执行回调")]),t._v("\n      _lastTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _nowTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 触发后，上次执行时间赋值为当前时间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("actionFn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'回调'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 要执行的函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionFn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每隔10毫秒都会触发一次throttle，每隔一秒触发一次actionFn回调(1秒内再次触发被丢弃)")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-tcp和udp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp和udp","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. TCP和UDP")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("1.TCP是面向连接的运输层协议；UDP是无连接的，即发送数据之前不需要建立链接，因此减少了开销和发送数据的时延。\n\n2.TCP提供可靠交付的服务，通过TCP连接传送的数据，无差错、不丢失、不重复、并且按时到达；UDP使用最大努力交付，即不保证可靠性交付，因此主机不需要维持复杂的连接状态。\n\n3.TCP面向字节流，TCP中的“流”指的是流入到进程或从进程流出的字节序列；UDP是面向报文的，发送方的UDP对应用程序交下来的报文，在添加首部后就向下交付IP层。\n\n4.UDP没有拥塞控制，因此网络出现的拥塞不会使源主机的发送速率降低，符合很多实时应用（如IP电话、实时视频会议等）的要求。\n\n5.每一条TCP连接只能有两个端点，每一条TCP连接只能是点对点的；UDP支持一对一、一对多、多对一和多对多的交互通信。\n\n6.UDP的首部开销小，只有8个字节，比TCP的20个字节的首部短。\n\n7.TCP提供可靠的全双工通信，TCP允许通信双方的应用进程在任何时候都能发送数据；UDP是不可靠信道。\n")])])]),a("h2",{attrs:{id:"_3-get和post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-get和post","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. GET和POST")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("GET请求在浏览器回退时是无害的，POST会再次提交请求\nGET请求产生的URL地址可以被收藏，而POST不可以\nGET请求会被浏览器主动缓存，而POST不会，除非手动设置\nGET请求只能进行URL编码，而POST支持多种编码方式\nGET请求参数会被完整的保留在浏览器历史记录里，而POST中的参数不会被保留\nGET请求在URL中传递的参数是有长度限制的（不固定，因浏览器决定），而POST没有限制\nGET请求只接受ASC2字符，而对参数的数据类型POST没有限制\nGET请求比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感数据\nGET请求参数通过URL传递，而POST放在request.body上\n")])])]),a("h2",{attrs:{id:"_4-cookie和storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-cookie和storage","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. cookie和Storage")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("从数据生命周期上来说"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    cookie：一般由服务器端生成，可设置失效时间，如果在浏览器端生成cookie，则默认关闭浏览器后失效。\n    localStorage： 永久保存，除非被清除。\n    sessionStorage： 仅在当前会话下有效，关闭页面或者浏览器被清除。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("从数据存储方面来说"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    cookie大小为"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("KB左右\n    storage一般为"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("MB\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("从与服务器端通信方面"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    cookie每次都会携带在"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v("头中，如果cookie保存过多会带来性能问题\n    storage仅在客户端保存，不参与和服务器的通信\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("从易用性方面来说"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    cookie原生接口不友好\n    storage原生接口友好，也可自行封装\n")])])]),a("h2",{attrs:{id:"_5-inline和block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-inline和block","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. inline和block")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("块级元素的特点：\n\n    总是在新行上开始\n    高度、行高以及内外边距都可以控制\n    宽度默认是它容器的"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("，除非设置一个值\n    它可以容纳内联元素和其他块级元素\n    \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("内联元素的特点：\n\n    和其他元素都在同一行\n    高度、行高以及内外边距都不可控制\n    宽度就是它的文字或图片的高度，不可改变\n    内联元素只能容纳文本或者其他内联元素\n    常见的块级元素："),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`address、center、div、dir、from、h1-h6、hr、ol、ul、li、table、p、pre、menu`")])]),t._v(" 等\n    常见的内联元素："),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`a、b、br、em、font、i、img、input、label、select、span、strong、textarea`")])]),t._v("\n\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注:")]),t._v(" "),a("p",[t._v("设置了float或者position值为absolute和fixed都会使原来的内联元素变成块级元素。")])]),t._v(" "),a("h2",{attrs:{id:"_6-window-onload和window-domcontentloaded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-window-onload和window-domcontentloaded","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. window.onload和window.DOMContentLoaded")]),t._v(" "),a("ol",[a("li",[t._v("load\n页面全部资源加载完才执行, 包括视频, 图片")]),t._v(" "),a("li",[t._v("DOMContentLoaded\nDom渲染即可执行, 此时图片视频有可能还没加载完")])]),t._v(" "),a("h2",{attrs:{id:"_7-正向代理和反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-正向代理和反向代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 正向代理和反向代理")]),t._v(" "),a("ol",[a("li",[t._v("代理对象不同, 正向代理代理的是客户端, 反向代理代理的是服务端")]),t._v(" "),a("li",[t._v("正向代理会明确知道代理的目标, 而反向代理我们只知道方向代理服务器, 而真实的服务器我们是不知道的")])]),t._v(" "),a("h2",{attrs:{id:"_7-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 性能优化")]),t._v(" "),a("h3",{attrs:{id:"原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 原则")]),t._v(" "),a("ol",[a("li",[t._v("多使用内存缓存或其他方法")]),t._v(" "),a("li",[t._v("减少CPU计算, 网络请求")])])])},[],!1,null,null,null);s.default=e.exports}}]);