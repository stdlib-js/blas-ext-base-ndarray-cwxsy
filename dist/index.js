"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=c(function(y,s){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),a=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-cwxsy/dist').ndarray;function x(e){var r=e[0],i=e[1],t=e[2];return m(d(r,0),v(r),a(r,0),u(r),v(i),a(i,0),u(i),v(t),a(t,0),u(t)),t}s.exports=x
});var f=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=q(),n,o=g(f(__dirname,"./native.js"));j(o)?n=p:n=o;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
