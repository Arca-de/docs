(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),r=(n(0),n(85)),i={id:"download",title:"Download"},l={unversionedId:"installation/download",id:"installation/download",isDocsHomePage:!1,title:"Download",description:"There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the vendor directory and you don't need to do anything but upload it.",source:"@site/docs/installation/download.md",permalink:"/installation/download",editUrl:"https://github.com/phpvms/docs/tree/master/docs/installation/download.md",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/getting-started/requirements"},next:{title:"VHost Configuration",permalink:"/installation/vhost"}},c=[{value:"Download Full Package",id:"download-full-package",children:[]},{value:"Cloning the Repository",id:"cloning-the-repository",children:[]},{value:"Composer",id:"composer",children:[]}],p={rightToc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the ",Object(r.a)("inlineCode",{parentName:"p"},"vendor")," directory and you don't need to do anything but upload it."),Object(r.a)("h2",{id:"download-full-package"},"Download Full Package"),Object(r.a)("p",null,"The tar file from the downloads site contains all of the dependencies. The versions available are:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/nabeelio/phpvms/releases"}),"Official releases and pre-releases")," - The latest released versions"),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",Object(a.a)({parentName:"li"},{href:"http://downloads.phpvms.net/phpvms-7.0.0-dev.tar.gz"}),"Development branch")," - The latest commit, unstable")),Object(r.a)("hr",null),Object(r.a)("h2",{id:"cloning-the-repository"},"Cloning the Repository"),Object(r.a)("p",null,"After you SSH to your server, you can clone from Github, or download the ZIP that's offered by Github of the source, you have to run ",Object(r.a)("inlineCode",{parentName:"p"},"composer install")," in order for the dependencies and vendor data to be downloaded. "),Object(r.a)("pre",null,Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/nabeelio/phpvms.git\ncd phpvms\ncomposer install\n")),Object(r.a)("p",null,"After running ",Object(r.a)("inlineCode",{parentName:"p"},"composer install"),", you can continue the directions below."),Object(r.a)("hr",null),Object(r.a)("h2",{id:"composer"},"Composer"),Object(r.a)("p",null,"Coming Soon"))}d.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||r;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);