(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"跨域资源共享-cors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享-cors"}},[t._v("#")]),t._v(" 跨域资源共享(CORS)")]),t._v(" "),n("h2",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("p",[n("strong",[t._v("跨域资源共享")]),t._v("(CORS) 是一种机制：使用额外的HTTP头来告诉浏览器允许web应用访问不同源的资源。当web应用请求一个不同源 (domain, protocol, or port) 的资源时，会发起一个跨域 HTTP 请求。")]),t._v(" "),n("blockquote",[n("p",[t._v("跨域请求的示例，来自"),n("code",[t._v("https://domain-a.com")]),t._v("的前端js代码使用"),n("code",[t._v("XMLHttpRequest")]),t._v("发起"),n("code",[t._v("https://domain-b.com/data.json")]),t._v("的请求")])]),t._v(" "),n("p",[t._v("出于安全原因，浏览器限制从脚本发起的跨源 HTTP 请求。比如，"),n("code",[t._v("XMLHttpRequest")]),t._v(" and the "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fetch API"),n("OutboundLink")],1),t._v(" 遵循 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("同源策略"),n("OutboundLink")],1),t._v("。除非响应里包含正确的CORS头")]),t._v(" "),n("p",[n("strong",[t._v("跨域资源共享")]),t._v("通过让服务器添加新的HTTP headers来描述哪些源被允许访问资源。对那些可能对服务器数据产生副作用的 HTTP 请求方法，浏览器必须首先使用 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("OPTIONS")]),n("OutboundLink")],1),t._v(" 方法发起一个预检请求")]),t._v(" "),n("blockquote",[n("p",[t._v("CORS请求失败会产生错误，但是为了安全，在JavaScript代码层面是无法获知到底具体是哪里出了问题。你只能查看浏览器的控制台以得知具体是哪里出现了错误。")])]),t._v(" "),n("h2",{attrs:{id:"简单请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),n("p",[t._v("某些请求不会触发CORS preflight，称为简单请求。简单请求满足以下所有条件：")]),t._v(" "),n("ul",[n("li",[t._v("允许的methods\n"),n("ul",[n("li",[n("code",[t._v("GET")])]),t._v(" "),n("li",[n("code",[t._v("HEAD")])]),t._v(" "),n("li",[n("code",[t._v("POST")])])])]),t._v(" "),n("li",[t._v("允许手动设置的headers\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Accept")]),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Accept-Language")]),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Content-Language")]),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Content-Type")]),n("OutboundLink")],1)]),t._v(" "),n("li",[n("code",[t._v("DPR")])]),t._v(" "),n("li",[n("code",[t._v("Downlink")])]),t._v(" "),n("li",[n("code",[t._v("Save-Data")])]),t._v(" "),n("li",[n("code",[t._v("Viewport-Width")])]),t._v(" "),n("li",[n("code",[t._v("Width")])])])]),t._v(" "),n("li",[n("code",[t._v("Content-Type")]),t._v("允许的值\n"),n("ul",[n("li",[n("code",[t._v("application/x-www-form-urlencoded")])]),t._v(" "),n("li",[n("code",[t._v("multipart/form-data")])]),t._v(" "),n("li",[n("code",[t._v("text/plain")])])])])]),t._v(" "),n("h3",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bar.other/resources/public-data/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onreadystatechange "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"https://mdn.mozillademos.org/files/17214/simple-req-updated.png",alt:"Simple requests"}})]),t._v(" "),n("p",[t._v("请求报文/响应报文")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("GET /resources/public-data/ HTTP/1.1\nHost: bar.other\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-us,en;q=0.5\nAccept-Encoding: gzip,deflate\nConnection: keep-alive\nOrigin: https://foo.example\n")])])]),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("HTTP/1.1 200 OK\nDate: Mon, 01 Dec 2008 00:23:53 GMT\nServer: Apache/2\nAccess-Control-Allow-Origin: *\nKeep-Alive: timeout=2, max=100\nConnection: Keep-Alive\nTransfer-Encoding: chunked\nContent-Type: application/xml\n\n[…XML Data…]\n")])])]),n("blockquote",[n("p",[t._v("CORS preflight 跨域预检")])]),t._v(" "),n("h2",{attrs:{id:"预检请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[t._v("#")]),t._v(" 预检请求")]),t._v(" "),n("p",[t._v("预检请求首先使用"),n("code",[t._v("OPTION")]),t._v("方法发起HTTP请求来确定实际请求是否安全。因为跨域请求可能对用户数据产生影响。")]),t._v(" "),n("h3",{attrs:{id:"示例-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://bar.other/resources/post-here/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-PINGOTHER'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pingpong'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRequestHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/xml'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onreadystatechange "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<person><name>Arun</name></person>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"https://mdn.mozillademos.org/files/16753/preflight_correct.png",alt:"Preflighted requests"}})]),t._v(" "),n("blockquote",[n("p",[t._v("注意：如下所述，实际 POST 请求不包括"),n("code",[t._v("Access-Control-Request-*")]),t._v("headers;它们仅在OPTIONS 请求时需要。")])]),t._v(" "),n("p",[t._v("预检请求")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("OPTIONS /resources/post-here/ HTTP/1.1\nHost: bar.other\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-us,en;q=0.5\nAccept-Encoding: gzip,deflate\nConnection: keep-alive\nOrigin: http://foo.example\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: X-PINGOTHER, Content-Type\n\n\nHTTP/1.1 204 No Content\nDate: Mon, 01 Dec 2008 01:15:39 GMT\nServer: Apache/2\nAccess-Control-Allow-Origin: https://foo.example\nAccess-Control-Allow-Methods: POST, GET, OPTIONS\nAccess-Control-Allow-Headers: X-PINGOTHER, Content-Type\nAccess-Control-Max-Age: 86400\nVary: Accept-Encoding, Origin\nKeep-Alive: timeout=2, max=100\nConnection: Keep-Alive\n")])])]),n("p",[t._v("预检请求完成之后，发送实际请求")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("POST /resources/post-here/ HTTP/1.1\nHost: bar.other\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-us,en;q=0.5\nAccept-Encoding: gzip,deflate\nConnection: keep-alive\nX-PINGOTHER: pingpong\nContent-Type: text/xml; charset=UTF-8\nReferer: https://foo.example/examples/preflightInvocation.html\nContent-Length: 55\nOrigin: https://foo.example\nPragma: no-cache\nCache-Control: no-cache\n\n<person><name>Arun</name></person>\n\n\nHTTP/1.1 200 OK\nDate: Mon, 01 Dec 2008 01:15:40 GMT\nServer: Apache/2\nAccess-Control-Allow-Origin: https://foo.example\nVary: Accept-Encoding, Origin\nContent-Encoding: gzip\nContent-Length: 235\nKeep-Alive: timeout=2, max=99\nConnection: Keep-Alive\nContent-Type: text/plain\n\n[Some GZIP'd payload]\n")])])]),n("h2",{attrs:{id:"链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看详情"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);