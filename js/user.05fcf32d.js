(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0293":function(t,e,s){},"08c4":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAABEVBMVEUjGBUkGRYmGxgnHBkoHhsqHxwqIB0rIR4tIh84LSs4Lis4Liw5Lyw6MC07MS47MS8/NTM/NjNANzRHPjtKQD5YUE5ZUU9aUlBlXVtnX11pYmBrY2FsZWNwaWdxamh1b213cG96dHJ7dXN9dnR9d3WBenmDfXuKhIOQioiQi4mTjYyblpWfmpmgm5qgnJqkn56loJ+rp6auqqmvq6qwrKu1sbC3tLK6trW7t7a9urm/u7rBvr3Cv7/EwcDFwsHFw8HHxMPIxcTJxsXJxsbNysrOzMvPzczU0tLW1NTc2trj4uLo5+fp6Ojq6ejw8O/x8fHz8/L08/P19fT19fX4+Pj6+vr7+/v8/Pz9/f3+/v7////RMzWIAAAA10lEQVQYGW3BhVYCURiF0YOIjd3dnViY2IWNKHzv/yDOfy+zZhbM3iJ0Ot7Z3D11Q0h4n2PyZn7whFMeUWiiiiOcDUX2cYSptCsyiCPMo+KKGGHyirvHCHOuuCeMMMWUIpkSRjhDikziCOeuSaGWZxzh7aTkpQ/xRM1Jn8zALTXC+fqmfLa2tH79x3sJR5ijjv7jCub3oCubxwiorijQu7Cd25zNKrBKQMCi6i0Dgl012gPxklGjtlfEtJLMo7e0krR+aEvJchpVsjn1KNmwrgqFS3NR5+EfZvpgwmAcxYYAAAAASUVORK5CYII="},"107c":function(t,e,s){var n=s("d039"),i=s("da84"),a=i.RegExp;t.exports=n((function(){var t=a("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"12f9":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-bg-color"},[s("top"),s("div",{staticClass:"register-bg"},[s("router-view")],1),s("bottom")],1)},i=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("div",{staticClass:"top-inline"},[n("h1",[n("img",{staticClass:"top-logo",attrs:{src:s("caaf")}})])])])}],c={name:"Top"},l=c,o=(s("72de"),s("2877")),u=Object(o["a"])(l,a,r,!1,null,"5a592337",null),g=u.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"bottom-logo"},[n("img",{attrs:{src:s("6473")}})]),n("div",{staticClass:"bottom-links"},[n("ul",[n("li",[t._v("条款和条件 ")]),n("li",[t._v("三星帐户隐私声明")]),n("li",[t._v("声明")]),n("li",[t._v("联系我们")])])]),n("div",{staticClass:"bottom-address"},[t._v(" Copyright © 1995-2021 Samsung. All Rights Reserved. ")])])}],m={name:"Bottom"},p=m,h=(s("e468"),Object(o["a"])(p,d,f,!1,null,"649f6f64",null)),A=h.exports,v={name:"RegistPage",components:{Top:g,Bottom:A}},x=v,E=(s("a2da"),Object(o["a"])(x,n,i,!1,null,null,null));e["default"]=E.exports},"1b0c":function(t,e,s){"use strict";s("5034")},"1dde":function(t,e,s){var n=s("d039"),i=s("b622"),a=s("2d00"),r=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],s=e.constructor={};return s[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,s){"use strict";var n=s("6eeb"),i=s("825a"),a=s("577e"),r=s("d039"),c=s("ad6d"),l="toString",o=RegExp.prototype,u=o[l],g=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=l;(g||d)&&n(RegExp.prototype,l,(function(){var t=i(this),e=a(t.source),s=t.flags,n=a(void 0===s&&t instanceof RegExp&&!("flags"in o)?c.call(t):s);return"/"+e+"/"+n}),{unsafe:!0})},3502:function(t,e,s){t.exports=s.p+"img/bg.8b03ecec.8b03ecec.jpg"},"44e7":function(t,e,s){var n=s("861d"),i=s("c6b6"),a=s("b622"),r=a("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},"4d63":function(t,e,s){var n=s("83ab"),i=s("da84"),a=s("94ca"),r=s("7156"),c=s("9112"),l=s("9bf2").f,o=s("241c").f,u=s("44e7"),g=s("577e"),d=s("ad6d"),f=s("9f7f"),m=s("6eeb"),p=s("d039"),h=s("5135"),A=s("69f3").enforce,v=s("2626"),x=s("b622"),E=s("fce3"),b=s("107c"),w=x("match"),C=i.RegExp,R=C.prototype,y=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,N=/a/g,M=new C(I)!==I,V=f.UNSUPPORTED_Y,G=n&&(!M||V||E||b||p((function(){return N[w]=!1,C(I)!=I||C(N)==N||"/a/i"!=C(I,"i")}))),O=function(t){for(var e,s=t.length,n=0,i="",a=!1;n<=s;n++)e=t.charAt(n),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),i+=e):i+="[\\s\\S]":i+=e+t.charAt(++n);return i},B=function(t){for(var e,s=t.length,n=0,i="",a=[],r={},c=!1,l=!1,o=0,u="";n<=s;n++){if(e=t.charAt(n),"\\"===e)e+=t.charAt(++n);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:y.test(t.slice(n+1))&&(n+=2,l=!0),i+=e,o++;continue;case">"===e&&l:if(""===u||h(r,u))throw new SyntaxError("Invalid capture group name");r[u]=!0,a.push([u,o]),l=!1,u="";continue}l?u+=e:i+=e}return[i,a]};if(a("RegExp",G)){for(var j=function(t,e){var s,n,i,a,l,o,f=this instanceof j,m=u(t),p=void 0===e,h=[],v=t;if(!f&&m&&p&&t.constructor===j)return t;if((m||t instanceof j)&&(t=t.source,p&&(e="flags"in v?v.flags:d.call(v))),t=void 0===t?"":g(t),e=void 0===e?"":g(e),v=t,E&&"dotAll"in I&&(n=!!e&&e.indexOf("s")>-1,n&&(e=e.replace(/s/g,""))),s=e,V&&"sticky"in I&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,""))),b&&(a=B(t),t=a[0],h=a[1]),l=r(C(t,e),f?this:R,j),(n||i||h.length)&&(o=A(l),n&&(o.dotAll=!0,o.raw=j(O(t),s)),i&&(o.sticky=!0),h.length&&(o.groups=h)),t!==v)try{c(l,"source",""===v?"(?:)":v)}catch(x){}return l},P=function(t){t in j||l(j,t,{configurable:!0,get:function(){return C[t]},set:function(e){C[t]=e}})},D=o(C),S=0;D.length>S;)P(D[S++]);R.constructor=j,j.prototype=R,m(i,"RegExp",j)}v("RegExp")},"4de4":function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").filter,a=s("1dde"),r=a("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5034:function(t,e,s){},"5fce":function(t,e,s){"use strict";s("f31b")},6383:function(t,e,s){"use strict";s("f3c0")},6473:function(t,e){t.exports="data:image/png;base64,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"},7156:function(t,e,s){var n=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var a,r;return i&&"function"==typeof(a=e.constructor)&&a!==s&&n(r=a.prototype)&&r!==s.prototype&&i(t,r),t}},"72cd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAAAAAAUfFEPAAAA60lEQVQoz2P4DwZfOoy5ec0nfIfwGMDkFUUGMNC6ixB8LsXAoF9SpMHAoPIeLpjCwND57///PxUMDOUwwW/cDIFgbf8cGMT+QAXPMTCsgdgwi4HhAVRwDwPDEYjgJgaGc1DB/QwMRyGCmxkYLoIF/56ZzsDQux0MGhgYllz495/hjT0DGvD6zJDEgAHKGXgxBXXgLInifCEoUxEmJvny//8HAmiCpSAXJaMJFoMEE9EEhe/8/3+RG02QwfP/f3N0ixjc//83JU5Q9tMbhDsZYaJC/DCWEoM8pjdtGGZhCq5h+D/PSgMF2K78DwALZKRzYS1hFwAAAABJRU5ErkJggg=="},"72de":function(t,e,s){"use strict";s("0293")},"81f0":function(t,e,s){"use strict";s("f288")},8418:function(t,e,s){"use strict";var n=s("a04b"),i=s("9bf2"),a=s("5c6c");t.exports=function(t,e,s){var r=n(e);r in t?i.f(t,r,a(0,s)):t[r]=s}},9263:function(t,e,s){"use strict";var n=s("577e"),i=s("ad6d"),a=s("9f7f"),r=s("5692"),c=s("7c73"),l=s("69f3").get,o=s("fce3"),u=s("107c"),g=RegExp.prototype.exec,d=r("native-string-replace",String.prototype.replace),f=g,m=function(){var t=/a/,e=/b*/g;return g.call(t,"a"),g.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],A=m||h||p||o||u;A&&(f=function(t){var e,s,a,r,o,u,A,v=this,x=l(v),E=n(t),b=x.raw;if(b)return b.lastIndex=v.lastIndex,e=f.call(b,E),v.lastIndex=b.lastIndex,e;var w=x.groups,C=p&&v.sticky,R=i.call(v),y=v.source,I=0,N=E;if(C&&(R=R.replace("y",""),-1===R.indexOf("g")&&(R+="g"),N=E.slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==E.charAt(v.lastIndex-1))&&(y="(?: "+y+")",N=" "+N,I++),s=new RegExp("^(?:"+y+")",R)),h&&(s=new RegExp("^"+y+"$(?!\\s)",R)),m&&(a=v.lastIndex),r=g.call(C?s:v,N),C?r?(r.input=r.input.slice(I),r[0]=r[0].slice(I),r.index=v.lastIndex,v.lastIndex+=r[0].length):v.lastIndex=0:m&&r&&(v.lastIndex=v.global?r.index+r[0].length:a),h&&r&&r.length>1&&d.call(r[0],s,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r&&w)for(r.groups=u=c(null),o=0;o<w.length;o++)A=w[o],u[A[0]]=r[A[1]];return r}),t.exports=f},9362:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("login-box",{staticClass:"login-box"})},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-content "},[n("div",{staticClass:"login-content-wapper"},[t._m(0),n("div",{staticClass:"login-r"},[n("div",{staticClass:"login-box"},[n("div",{staticClass:"login-title"},[t._v("账号密码登录")]),n("div",{staticClass:"login-phone"},[n("img",{attrs:{src:s("08c4")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",name:"tel",id:"tel",placeholder:"请输入手机号码"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),n("div",{staticClass:"login-pwd"},[n("img",{attrs:{src:s("72cd")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",name:"pwd",id:"pwd",placeholder:"请输入密码"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),n("button",{staticClass:"login-btn msg-tip-btn",on:{click:t.login}},[t._v("登陆")]),n("div",{staticClass:"login-tip"},[t._v("注：使用三星账号登录商城或将其他账号绑定三星账号， 可享受积分福利。还没有三星账号？"),n("span",{staticClass:"register"},[n("router-link",{attrs:{to:{name:"Register"}}},[t._v("立即注册>>")])],1)])])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-l"},[n("div",{staticClass:"l-item1"},[n("img",{staticClass:"logo-title",attrs:{src:s("ed38")}})]),n("div",{staticClass:"l-item2 welcome"},[t._v("欢迎登录三星网上商城")]),n("div",{staticClass:"l-item3"},[n("img",{staticClass:"logo-bg",attrs:{src:s("3502")}})])])}],c=s("146b"),l={name:"LoginBox",data:function(){return{tel:"15111111111",pwd:"asdasd123",telPE:/^[1][3,5,7,8][0-9]\d{8}$/,pwdPE:/^[a-zA-Z]{1}[a-zA-Z0-9]{8,15}$/}},computed:{testTel:function(){return this.telPE.test(this.tel)},testPwd:function(){return this.pwdPE.test(this.pwd)}},methods:{login:function(){this.testTel?(this.testPwd||Object(c["a"])("密码格式错误",!0,8e3),this.$router.push({name:"Home"})):Object(c["a"])("账号格式错误",!0,8e3)}}},o=l,u=(s("1b0c"),s("2877")),g=Object(u["a"])(o,a,r,!1,null,"3067f42e",null),d=g.exports,f={name:"LoginPage",components:{LoginBox:d}},m=f,p=(s("977a"),Object(u["a"])(m,n,i,!1,null,"7ca0cbfc",null));e["default"]=p.exports},9419:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},i=[],a={name:"User",mounted:function(){}},r=a,c=s("2877"),l=Object(c["a"])(r,n,i,!1,null,"4da7694b",null);e["default"]=l.exports},"977a":function(t,e,s){"use strict";s("b854")},"9f7f":function(t,e,s){var n=s("d039"),i=s("da84"),a=i.RegExp;e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a2da:function(t,e,s){"use strict";s("b829")},a434:function(t,e,s){"use strict";var n=s("23e7"),i=s("23cb"),a=s("a691"),r=s("50c4"),c=s("7b0b"),l=s("65f0"),o=s("8418"),u=s("1dde"),g=u("splice"),d=Math.max,f=Math.min,m=9007199254740991,p="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!g},{splice:function(t,e){var s,n,u,g,h,A,v=c(this),x=r(v.length),E=i(t,x),b=arguments.length;if(0===b?s=n=0:1===b?(s=0,n=x-E):(s=b-2,n=f(d(a(e),0),x-E)),x+s-n>m)throw TypeError(p);for(u=l(v,n),g=0;g<n;g++)h=E+g,h in v&&o(u,g,v[h]);if(u.length=n,s<n){for(g=E;g<x-n;g++)h=g+n,A=g+s,h in v?v[A]=v[h]:delete v[A];for(g=x;g>x-n+s;g--)delete v[g-1]}else if(s>n)for(g=x-n;g>E;g--)h=g+n-1,A=g+s-1,h in v?v[A]=v[h]:delete v[A];for(g=0;g<s;g++)v[g+E]=arguments[g+2];return v.length=x-n+s,u}})},ac1f:function(t,e,s){"use strict";var n=s("23e7"),i=s("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,s){"use strict";var n=s("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b3c1:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-box"},[s("div",{staticClass:"terms-content"},[t._m(0),s("ul",{staticClass:"box-terms"},[t._l(t.terms,(function(e){return s("li",{key:e.id},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.select,expression:"term.select"}],attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.select)?t._i(e.select,null)>-1:e.select},on:{change:function(s){var n=e.select,i=s.target,a=!!i.checked;if(Array.isArray(n)){var r=null,c=t._i(n,r);i.checked?c<0&&t.$set(e,"select",n.concat([r])):c>-1&&t.$set(e,"select",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(e,"select",a)}}}),s("label",{staticClass:"label-box",attrs:{for:e.id}}),s("label",{staticStyle:{cursor:"pointer"},attrs:{for:e.id}},[t._v(t._s(e.text))]),s("router-link",{staticClass:"link",attrs:{to:e.detail}},[t._v(" 详细信息")])],1)})),s("div",{staticClass:"line-dashed"}),s("li",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],attrs:{type:"checkbox",id:"selectAll"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var s=t.selectAll,n=e.target,i=!!n.checked;if(Array.isArray(s)){var a=null,r=t._i(s,a);n.checked?r<0&&(t.selectAll=s.concat([a])):r>-1&&(t.selectAll=s.slice(0,r).concat(s.slice(r+1)))}else t.selectAll=i}}}),s("label",{staticClass:"label-box",attrs:{for:"selectAll"}}),s("label",{attrs:{for:"selectAll"}},[t._v(" 我已阅读并同意以上所有服务条款。 ")])])],2),s("input",{staticClass:"agree-btn",attrs:{type:"button",disabled:t.disableBtn,value:"同意"},on:{click:t.toMsg}})])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-title"},[s("h1",[t._v("创建您的三星帐户")])])}],a=(s("4de4"),s("159b"),{name:"RegisterTermsBox",data:function(){return{terms:[{id:"001",text:"条款和条件",select:!1,detail:"/"},{id:"002",text:"特殊条款",select:!1,detail:"/"},{id:"003",text:"三星帐户隐私声明",select:!1,detail:"/"},{id:"004",text:"个人敏感信息收集使用说明(核心功能）",select:!1,detail:"/"},{id:"005",text:"其他特殊情形",select:!1,detail:"/"}],disableBtn:!0}},computed:{selectAll:{get:function(){var t=this.terms.filter((function(t){return t.select}));return this.terms.length===t.length},set:function(t){this.terms.forEach((function(e){e.select=t}))}}},methods:{change:function(t){t.target.classList.toggle("agree-y")},toMsg:function(){this.selectAll&&this.$router.push({name:"RegMsg",params:{agreeAll:!0}})}},watch:{selectAll:{handler:function(t,e){this.disableBtn=!t}}}}),r=a,c=(s("6383"),s("2877")),l=Object(c["a"])(r,n,i,!1,null,"7661dc67",null);e["default"]=l.exports},b829:function(t,e,s){},b854:function(t,e,s){},c96f:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-box"},[s("div",{staticClass:"terms-content"},[t._m(0),s("form",[s("div",{staticClass:"box-msgs clearfix"},[s("ul",t._l(t.msgItems,(function(e,n){return s("li",{key:e.msgId},[s("msg-input",{ref:e.msgId,refInFor:!0,attrs:{msgId:e.msgId,msgName:e.msgName,msgTitle:e.msgTitle,testRE:e.testRE,warnMsg:e.warnMsg,type:e.type,ind:n,changeRE:"pwd"===e.msgName?t.changeRE:function(){}},on:{checkValue:t.checkValue}})],1)})),0)]),s("input",{staticClass:"agree-btn",attrs:{type:"button",disabled:!t.showBtn,value:"同意"},on:{click:t.register}})])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-title"},[s("h1",[t._v("创建您的三星帐户")])])}],a=(s("a434"),s("4d63"),s("ac1f"),s("25f0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.msgValue,expression:"msgValue",modifiers:{trim:!0}}],staticClass:"msg-input",attrs:{id:t.msgId,name:t.msgName,type:t.type},domProps:{value:t.msgValue},on:{change:t.changeRE,input:function(e){e.target.composing||(t.msgValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("label",{staticClass:"title",class:t.hasVal,attrs:{for:t.msgId}},[t._v(t._s(t.msgTitle))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"warn"},[t._v(" "+t._s(t.warnMsg)+" ")])])}),r=[],c={data:function(){return{msgValue:"",inc:!1,showWarn:!1}},computed:{hasVal:function(){return""!==this.msgValue?"title-sel":""}},watch:{msgValue:function(){this.showWarn=!this.testRE.test(this.msgValue)},testRE:function(){this.msgValue=""},showWarn:function(){this.$emit("checkValue",this.ind,!this.showWarn)}},beforeDestroy:function(){},props:["msgId","msgName","msgTitle","warnMsg","testRE","type","changeRE","checkValue","ind"]},l=c,o=(s("5fce"),s("2877")),u=Object(o["a"])(l,a,r,!1,null,"d8ddb406",null),g=u.exports,d={name:"RegisterMsgBox",data:function(){return{msgItems:[{msgId:"msg01",msgName:"account",msgTitle:"手机号",testRE:/^[1][3,5,7,8][0-9]\d{8}$/,warnMsg:"手机号格式错误",type:"text"},{msgId:"msg02",msgName:"pwd",msgTitle:"密码",testRE:/^[a-zA-Z]{1}[a-zA-Z0-9]{8,15}$/,warnMsg:"密码格式错误",type:"password"},{msgId:"msg03",msgName:"repwd",msgTitle:"确认密码",testRE:/^[a-zA-Z]{1}[a-zA-Z0-9]{8,15}$/,warnMsg:"密码不一致",type:"password"}],success:[!1,!1,!1],showBtn:!1}},watch:{success:function(t){for(var e in t)if(!1===t[e])return void(this.showBtn=!1);this.showBtn=!0}},methods:{checkValue:function(t,e){this.success.splice(t,1,e)},changeRE:function(){this.msgItems[2].testRE=new RegExp("^"+this.$refs.msg02[0].msgValue+"$")},register:function(){this.$router.push("/user/login")}},computed:{},components:{MsgInput:g},props:{agreeAll:{type:Boolean}},beforeRouteEnter:function(t,e,s){t.params.agreeAll?s():s({name:"RegTerms"})}},f=d,m=(s("81f0"),Object(o["a"])(f,n,i,!1,null,"00da8282",null));e["default"]=m.exports},caaf:function(t,e,s){t.exports=s.p+"img/txt_logo_zh.158e9cd5.svg"},dfc6:function(t,e,s){},e468:function(t,e,s){"use strict";s("dfc6")},ed38:function(t,e,s){t.exports=s.p+"img/samsung_logo.34c0d994.34c0d994.png"},f288:function(t,e,s){},f31b:function(t,e,s){},f3c0:function(t,e,s){},fce3:function(t,e,s){var n=s("d039"),i=s("da84"),a=i.RegExp;t.exports=n((function(){var t=a(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=user.05fcf32d.js.map