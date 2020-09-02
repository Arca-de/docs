(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(86)),o={id:"requirements",title:"Requirements"},s={unversionedId:"getting-started/requirements",id:"getting-started/requirements",isDocsHomePage:!1,title:"Requirements",description:"Server Requirements",source:"@site/docs/getting-started/requirements.md",permalink:"/getting-started/requirements",editUrl:"https://github.com/phpvms/docs/tree/master/docs/getting-started/requirements.md",sidebar:"docs",previous:{title:"Introduction",permalink:"/getting-started/intro"},next:{title:"Download",permalink:"/getting-started/download"}},c=[{value:"Server Requirements",id:"server-requirements",children:[{value:"Shared Hosting",id:"shared-hosting",children:[]},{value:"VPS/Dedicated Hosts",id:"vpsdedicated-hosts",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"server-requirements"},"Server Requirements"),Object(i.a)("p",null,"One of the first steps in the installer is to check your server for the proper requirements."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"PHP 7.3 or up, extensions required:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"cURL"),Object(i.a)("li",{parentName:"ul"},"JSON"),Object(i.a)("li",{parentName:"ul"},"mbstring"),Object(i.a)("li",{parentName:"ul"},"openssl"),Object(i.a)("li",{parentName:"ul"},"pdo"),Object(i.a)("li",{parentName:"ul"},"tokenizer"),Object(i.a)("li",{parentName:"ul"},"bcmath"))),Object(i.a)("li",{parentName:"ul"},"Database:",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"MySQL 5.7+ (or MySQL variant, including MariaDB and Percona)")))),Object(i.a)("h5",{id:"optional"},"Optional"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"http://php.net/manual/en/book.apc.php"}),"php-apc")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io"}),"Redis")," (for job queuing, various caching and optimizations)")),Object(i.a)("hr",null),Object(i.a)("h3",{id:"shared-hosting"},"Shared Hosting"),Object(i.a)("p",null,"While shared hosts are not ideal for numerous reasons (don't use free hosts, you'll have\na really bad time), it's still possible to run phpVMS. By just uploading the files, you\nwill be able to visit the site. Assuming your host is running Apache, the ",Object(i.a)("inlineCode",{parentName:"p"},".htaccess")," file\nshould handle the URL rewriting. If you're unable to reach the installer (the first test\nto see if it will work with your host), contact your host's support about ",Object(i.a)("inlineCode",{parentName:"p"},".htaccess"),"\nsupport."),Object(i.a)("hr",null),Object(i.a)("h3",{id:"vpsdedicated-hosts"},"VPS/Dedicated Hosts"),Object(i.a)("p",null,"If you have control over your server, the combination of nginx/php-fpm will offer you\nthe best performance, over using Apache. It's the combination that I test with.\nIt will also be much more secure, seeing that only the ",Object(i.a)("inlineCode",{parentName:"p"},"/public")," directory is exposed."),Object(i.a)("p",null,"Pointing the vhost to the ",Object(i.a)("inlineCode",{parentName:"p"},"/public")," directory is the best way to run on a host that you\ncontrol."))}u.isMDXComponent=!0},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);