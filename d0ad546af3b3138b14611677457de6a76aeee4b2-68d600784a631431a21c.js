(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0b+E":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"addTrackers",(function(){return G})),n.d(r,"initialize",(function(){return B})),n.d(r,"ga",(function(){return K})),n.d(r,"set",(function(){return U})),n.d(r,"send",(function(){return $})),n.d(r,"pageview",(function(){return Q})),n.d(r,"modalview",(function(){return W})),n.d(r,"timing",(function(){return Y})),n.d(r,"event",(function(){return Z})),n.d(r,"exception",(function(){return H})),n.d(r,"plugin",(function(){return X})),n.d(r,"outboundLink",(function(){return ee})),n.d(r,"testModeAPI",(function(){return te})),n.d(r,"default",(function(){return ne}));var o=n("q1tI"),a=n.n(o);function i(e){console.warn("[react-ga]",e)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,o=g(i);function i(){var e;f(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(y(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,c=n.onClick,l=n.trackerNames,u={label:o},s="_blank"!==r,f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);s&&f?(t.preventDefault(),i.trackLink(u,(function(){window.location.href=a}),l)):i.trackLink(u,(function(){}),l),c&&c(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=u(u({},s(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return"_blank"===n&&(r.rel="noopener noreferrer"),delete r.eventLabel,delete r.trackerNames,a.a.createElement("a",r)}}])&&p(t.prototype,n),r&&p(t,r),i}(o.Component);h(v,"trackLink",(function(){i("ga tracking not enabled")})),v.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function O(e){return"string"==typeof(t=e)&&-1!==t.indexOf("@")?(i("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function w(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var j=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function k(e){return w(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(j)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}function P(e){console.info("[react-ga]",e)}var S=[],E={calls:S,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];S.push([].concat(t))},resetCalls:function(){S.length=0}};function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var q="undefined"==typeof window||"undefined"==typeof document,I=!1,C=!0,L=!1,R=!0,z=!0,J=function(){var e;return L?E.ga.apply(E,arguments):!q&&(window.ga?(e=window).ga.apply(e,arguments):i("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function M(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e||"";return t&&(r=k(e)),n&&(r=O(r)),r}(e,C,z)}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"==typeof o?(!R&&Array.isArray(e)||J.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){J.apply(void 0,T(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):i("ga command must be a string")}function F(e,t){e?t&&(t.debug&&!0===t.debug&&(I=!0),!1===t.titleCase&&(C=!1),!1===t.redactEmail&&(z=!1),t.useExistingGa)||(t&&t.gaOptions?J("create",e,t.gaOptions):J("create",e,"auto")):i("gaTrackingID is required in initialize()")}function G(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===D(e)?F(e.trackingId,e):i("All configs must be an object")})):F(e,t),!0}function B(e,t){if(t&&!0===t.testMode)L=!0;else{if(q)return;t&&!0===t.standardImplementation||function(e){var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,l,u=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),l=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=u,l.parentNode.insertBefore(c,l)}(t)}R=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,G(e,t)}function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(J.apply(void 0,t),I&&(P("called ga('arguments');"),P("with arguments: ".concat(JSON.stringify(t))))),window.ga}function U(e,t){e?"object"===D(e)?(0===Object.keys(e).length&&i("empty `fieldsObject` given to .set()"),V(t,"set",e),I&&(P("called ga('set', fieldsObject);"),P("with fieldsObject: ".concat(JSON.stringify(e))))):i("Expected `fieldsObject` arg to be an Object"):i("`fieldsObject` is required in .set()")}function $(e,t){V(t,"send",e),I&&(P("called ga('send', fieldObject);"),P("with fieldObject: ".concat(JSON.stringify(e))),P("with trackers: ".concat(JSON.stringify(t))))}function Q(e,t,n){if(e){var r=w(e);if(""!==r){var o={};if(n&&(o.title=n),V(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),I){P("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),P("with path: ".concat(r).concat(a))}}else i("path cannot be an empty string in .pageview()")}else i("path is required in .pageview()")}function W(e,t){if(e){var n,r="/"===(n=w(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);V(t,"send","pageview",o),I&&(P("called ga('send', 'pageview', path);"),P("with path: ".concat(o)))}else i("modalName cannot be an empty string or a single / in .modalview()")}else i("modalName is required in .modalview(modalName)")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"==typeof r){var c={hitType:"timing",timingCategory:M(t),timingVar:M(n),timingValue:r};o&&(c.timingLabel=M(o)),$(c,a)}else i("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,c=e.transport,l=A(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:M(t),eventAction:M(n)};r&&(s.eventLabel=M(r)),void 0!==o&&("number"!=typeof o?i("Expected `args.value` arg to be a Number."):s.eventValue=o),void 0!==a&&("boolean"!=typeof a?i("`args.nonInteraction` must be a boolean."):s.nonInteraction=a),void 0!==c&&("string"!=typeof c?i("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(c)&&i("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=c)),Object.keys(l).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){s[e]=l[e]})),Object.keys(l).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){s[e]=l[e]})),$(s,u)}else i("args.category AND args.action are required in event()")}function H(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=M(n)),void 0!==r&&("boolean"!=typeof r?i("`args.fatal` must be a boolean."):o.exFatal=r),$(o,t)}var X={require:function(e,t,n){if(e){var r=w(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==D(t))return void i("Expected `options` arg to be an Object");0===Object.keys(t).length&&i("Empty `options` given to .require()"),K(o,r,t),I&&P("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else K(o,r),I&&P("called ga('require', '".concat(r,"');"))}else i("`name` cannot be an empty string in .require()")}else i("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),c=2;c<o;c++)a[c-2]=arguments[c];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!=typeof e)i("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)i("Expected `action` arg to be a String.");else{var l="".concat(e,":").concat(t);n=n||null,r&&n?(K(l,r,n),I&&(P("called ga('".concat(l,"');")),P('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(K(l,n),I&&(P("called ga('".concat(l,"');")),P("with payload: ".concat(JSON.stringify(n))))):(K(l),I&&P("called ga('".concat(l,"');")))}}};function ee(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:M(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},$(r,n)}else i("args.label is required in outboundLink()");else i("hitCallback function is required")}var te=E,ne={initialize:B,ga:K,set:U,send:$,pageview:Q,modalview:W,timing:Y,event:Z,exception:H,plugin:X,outboundLink:ee,testModeAPI:E};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}v.origTrackLink=v.trackLink,v.trackLink=ee;var ie=v;t.a=oe(oe({},r),{},{OutboundLink:ie})},"3WtV":function(e,t,n){e.exports=n("pIwj"),t.default=n("pIwj")},"845Q":function(e,t,n){e.exports=n.p+"static/icon-blank-c444e53bf31faf0290b0e25665425322.jpg"},U5tq:function(e,t,n){"use strict";var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("845Q"),c=n.n(i),l=n("pYmA"),u=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=n("TVxV"),t=document.querySelectorAll(".sidenav");e.Sidenav.init(t,{})},o.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"nav-wrapper z-depth-1 hide-on-med-and-down show-on-large"},a.a.createElement("div",{className:"brand-logo row"},a.a.createElement("div",{className:"col s2"},a.a.createElement("img",{className:" z-depth-4",src:c.a,alt:"Ig Tracker logo"})),a.a.createElement("div",{className:"col s10"},a.a.createElement("h1",null,"IG Tracker")))),a.a.createElement("nav",{id:"mobile-nav",className:"nav-wrapper z-depth-1 show-on-medium-and-down hide-on-large-only"},a.a.createElement("div",{className:"brand-logo left row"},a.a.createElement("div",{className:"col s3"},a.a.createElement("img",{className:" z-depth-4",src:c.a,alt:"Ig Tracker logo"})),a.a.createElement("div",{className:"col s7",style:{width:"70%"}},a.a.createElement("h1",null,"IG Tracker")),a.a.createElement("div",{className:"col s1 right ",style:{paddingRight:"0",paddingLeft:"0",width:"0"}},a.a.createElement(l.a,null)))))},t}(o.Component);t.a=u},pIwj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={ios:"https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg",android:"https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"},m=function(e){function t(){return s(this,t),p(this,b(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.store,n=e.url,o=e.height,a=e.width,i=e.linkStyles,s=e.linkProps,f=u(e,["store","url","height","width","linkStyles","linkProps"]),p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({background:"url(".concat(y[t],") no-repeat"),backgroundSize:"contain",display:"inline-block",overflow:"hidden",textDecoration:"none",height:"100%",width:"100%",padding:"5px"},i);return r.default.createElement("div",c({style:{height:o,width:a,display:"inline-block"}},f),r.default.createElement("a",c({style:p,href:n,target:"_blank",rel:"noopener noreferrer"},s)," "))}}])&&f(n.prototype,o),a&&f(n,a),t}(r.default.Component);d(m,"propTypes",{store:o.default.oneOf(["ios","android"]).isRequired,url:o.default.string.isRequired,height:o.default.number,width:o.default.number,linkStyles:o.default.object,linkProps:o.default.object}),d(m,"defaultProps",{height:75,width:255});var h=m;t.default=h},pYmA:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("3WtV"),i=n.n(a),c=n("0b+E");t.a=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{className:"play-button",store:"android",url:"https://play.google.com/store/apps/details?id=com.vacamacomp.ig_tracker",linkStyles:{height:"7.5vmax",width:"20vmax"},linkProps:{title:"Play Store Button"},style:{width:"20vmax",height:"7.5vmax",display:"inline-block",marginTop:"0.7vh"},onClick:function(e){c.a.event({category:"Button",action:"Click the Play Store Button"})}}))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=d0ad546af3b3138b14611677457de6a76aeee4b2-68d600784a631431a21c.js.map