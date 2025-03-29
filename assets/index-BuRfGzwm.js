import{R as Ne,r as l,e as b}from"./index-DbaA8R3S.js";import{_ as Ft}from"./extends-CF3RwP-h.js";import{j as $}from"./index--UfDAOH_.js";function Wt(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Dt(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Bt=function(){function e(r){var n=this;this._insertTag=function(o){var a;n.tags.length===0?n.insertionPoint?a=n.insertionPoint.nextSibling:n.prepend?a=n.container.firstChild:a=n.before:a=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(o,a),n.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Dt(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=Wt(o);try{a.insertRule(n,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var o;return(o=n.parentNode)==null?void 0:o.removeChild(n)}),this.tags=[],this.ctr=0},e}(),j="-ms-",ce="-moz-",C="-webkit-",Ke="comm",$e="rule",ke="decl",Ut="@import",Ze="@keyframes",Ht="@layer",Vt=Math.abs,ue=String.fromCharCode,qt=Object.assign;function Xt(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function Je(e){return e.trim()}function Yt(e,t){return(e=t.exec(e))?e[0]:e}function P(e,t,r){return e.replace(t,r)}function ye(e,t){return e.indexOf(t)}function M(e,t){return e.charCodeAt(t)|0}function Z(e,t,r){return e.slice(t,r)}function F(e){return e.length}function Ce(e){return e.length}function ne(e,t){return t.push(e),e}function Gt(e,t){return e.map(t).join("")}var fe=1,Y=1,Qe=0,I=0,N=0,G="";function de(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:fe,column:Y,length:i,return:""}}function K(e,t){return qt(de("",null,null,"",null,null,0),e,{length:-e.length},t)}function Kt(){return N}function Zt(){return N=I>0?M(G,--I):0,Y--,N===10&&(Y=1,fe--),N}function L(){return N=I<Qe?M(G,I++):0,Y++,N===10&&(Y=1,fe++),N}function D(){return M(G,I)}function ae(){return I}function ee(e,t){return Z(G,e,t)}function J(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function et(e){return fe=Y=1,Qe=F(G=e),I=0,[]}function tt(e){return G="",e}function ie(e){return Je(ee(I-1,ve(e===91?e+2:e===40?e+1:e)))}function Jt(e){for(;(N=D())&&N<33;)L();return J(e)>2||J(N)>3?"":" "}function Qt(e,t){for(;--t&&L()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return ee(e,ae()+(t<6&&D()==32&&L()==32))}function ve(e){for(;L();)switch(N){case e:return I;case 34:case 39:e!==34&&e!==39&&ve(N);break;case 40:e===41&&ve(e);break;case 92:L();break}return I}function er(e,t){for(;L()&&e+N!==57;)if(e+N===84&&D()===47)break;return"/*"+ee(t,I-1)+"*"+ue(e===47?e:L())}function tr(e){for(;!J(D());)L();return ee(e,I)}function rr(e){return tt(se("",null,null,null,[""],e=et(e),0,[0],e))}function se(e,t,r,n,o,a,i,s,u){for(var f=0,p=0,m=i,y=0,S=0,g=0,h=1,v=1,x=1,w=0,k="",R=o,d=a,O=n,E=k;v;)switch(g=w,w=L()){case 40:if(g!=108&&M(E,m-1)==58){ye(E+=P(ie(w),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:E+=ie(w);break;case 9:case 10:case 13:case 32:E+=Jt(g);break;case 92:E+=Qt(ae()-1,7);continue;case 47:switch(D()){case 42:case 47:ne(nr(er(L(),ae()),t,r),u);break;default:E+="/"}break;case 123*h:s[f++]=F(E)*x;case 125*h:case 59:case 0:switch(w){case 0:case 125:v=0;case 59+p:x==-1&&(E=P(E,/\f/g,"")),S>0&&F(E)-m&&ne(S>32?Te(E+";",n,r,m-1):Te(P(E," ","")+";",n,r,m-2),u);break;case 59:E+=";";default:if(ne(O=ze(E,t,r,f,p,o,s,k,R=[],d=[],m),a),w===123)if(p===0)se(E,t,O,O,R,a,m,s,d);else switch(y===99&&M(E,3)===110?100:y){case 100:case 108:case 109:case 115:se(e,O,O,n&&ne(ze(e,O,O,0,0,o,s,k,o,R=[],m),d),o,d,m,s,n?R:d);break;default:se(E,O,O,O,[""],d,0,s,d)}}f=p=S=0,h=x=1,k=E="",m=i;break;case 58:m=1+F(E),S=g;default:if(h<1){if(w==123)--h;else if(w==125&&h++==0&&Zt()==125)continue}switch(E+=ue(w),w*h){case 38:x=p>0?1:(E+="\f",-1);break;case 44:s[f++]=(F(E)-1)*x,x=1;break;case 64:D()===45&&(E+=ie(L())),y=D(),p=m=F(k=E+=tr(ae())),w++;break;case 45:g===45&&F(E)==2&&(h=0)}}return a}function ze(e,t,r,n,o,a,i,s,u,f,p){for(var m=o-1,y=o===0?a:[""],S=Ce(y),g=0,h=0,v=0;g<n;++g)for(var x=0,w=Z(e,m+1,m=Vt(h=i[g])),k=e;x<S;++x)(k=Je(h>0?y[x]+" "+w:P(w,/&\f/g,y[x])))&&(u[v++]=k);return de(e,t,r,o===0?$e:s,u,f,p)}function nr(e,t,r){return de(e,t,r,Ke,ue(Kt()),Z(e,2,-2),0)}function Te(e,t,r,n){return de(e,t,r,ke,Z(e,0,n),Z(e,n+1,-1),n)}function X(e,t){for(var r="",n=Ce(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function or(e,t,r,n){switch(e.type){case Ht:if(e.children.length)break;case Ut:case ke:return e.return=e.return||e.value;case Ke:return"";case Ze:return e.return=e.value+"{"+X(e.children,n)+"}";case $e:e.value=e.props.join(",")}return F(r=X(e.children,n))?e.return=e.value+"{"+r+"}":""}function ar(e){var t=Ce(e);return function(r,n,o,a){for(var i="",s=0;s<t;s++)i+=e[s](r,n,o,a)||"";return i}}function ir(e){return function(t){t.root||(t=t.return)&&e(t)}}function rt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var sr=function(t,r,n){for(var o=0,a=0;o=a,a=D(),o===38&&a===12&&(r[n]=1),!J(a);)L();return ee(t,I)},cr=function(t,r){var n=-1,o=44;do switch(J(o)){case 0:o===38&&D()===12&&(r[n]=1),t[n]+=sr(I-1,r,n);break;case 2:t[n]+=ie(o);break;case 4:if(o===44){t[++n]=D()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=ue(o)}while(o=L());return t},lr=function(t,r){return tt(cr(et(t),r))},Me=new WeakMap,ur=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,o=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!Me.get(n))&&!o){Me.set(t,!0);for(var a=[],i=lr(r,a),s=n.props,u=0,f=0;u<i.length;u++)for(var p=0;p<s.length;p++,f++)t.props[f]=a[u]?i[u].replace(/&\f/g,s[p]):s[p]+" "+i[u]}}},fr=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function nt(e,t){switch(Xt(e,t)){case 5103:return C+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return C+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return C+e+ce+e+j+e+e;case 6828:case 4268:return C+e+j+e+e;case 6165:return C+e+j+"flex-"+e+e;case 5187:return C+e+P(e,/(\w+).+(:[^]+)/,C+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return C+e+j+"flex-item-"+P(e,/flex-|-self/,"")+e;case 4675:return C+e+j+"flex-line-pack"+P(e,/align-content|flex-|-self/,"")+e;case 5548:return C+e+j+P(e,"shrink","negative")+e;case 5292:return C+e+j+P(e,"basis","preferred-size")+e;case 6060:return C+"box-"+P(e,"-grow","")+C+e+j+P(e,"grow","positive")+e;case 4554:return C+P(e,/([^-])(transform)/g,"$1"+C+"$2")+e;case 6187:return P(P(P(e,/(zoom-|grab)/,C+"$1"),/(image-set)/,C+"$1"),e,"")+e;case 5495:case 3959:return P(e,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return P(P(e,/(.+:)(flex-)?(.*)/,C+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+C+e+e;case 4095:case 3583:case 4068:case 2532:return P(e,/(.+)-inline(.+)/,C+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return P(e,/(.+:)(.+)-([^]+)/,"$1"+C+"$2-$3$1"+ce+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ye(e,"stretch")?nt(P(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(M(e,t+1)!==115)break;case 6444:switch(M(e,F(e)-3-(~ye(e,"!important")&&10))){case 107:return P(e,":",":"+C)+e;case 101:return P(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+C+(M(e,14)===45?"inline-":"")+"box$3$1"+C+"$2$3$1"+j+"$2box$3")+e}break;case 5936:switch(M(e,t+11)){case 114:return C+e+j+P(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return C+e+j+P(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return C+e+j+P(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return C+e+j+e+e}return e}var dr=function(t,r,n,o){if(t.length>-1&&!t.return)switch(t.type){case ke:t.return=nt(t.value,t.length);break;case Ze:return X([K(t,{value:P(t.value,"@","@"+C)})],o);case $e:if(t.length)return Gt(t.props,function(a){switch(Yt(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([K(t,{props:[P(a,/:(read-\w+)/,":"+ce+"$1")]})],o);case"::placeholder":return X([K(t,{props:[P(a,/:(plac\w+)/,":"+C+"input-$1")]}),K(t,{props:[P(a,/:(plac\w+)/,":"+ce+"$1")]}),K(t,{props:[P(a,/:(plac\w+)/,j+"input-$1")]})],o)}return""})}},pr=[dr],mr=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(h){var v=h.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||pr,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(h){for(var v=h.getAttribute("data-emotion").split(" "),x=1;x<v.length;x++)a[v[x]]=!0;s.push(h)});var u,f=[ur,fr];{var p,m=[or,ir(function(h){p.insert(h)})],y=ar(f.concat(o,m)),S=function(v){return X(rr(v),y)};u=function(v,x,w,k){p=w,S(v?v+"{"+x.styles+"}":x.styles),k&&(g.inserted[x.name]=!0)}}var g={key:r,sheet:new Bt({key:r,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:u};return g.sheet.hydrate(s),g},me={exports:{}},_={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je;function hr(){if(je)return _;je=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,w=e?Symbol.for("react.scope"):60119;function k(d){if(typeof d=="object"&&d!==null){var O=d.$$typeof;switch(O){case t:switch(d=d.type,d){case u:case f:case n:case a:case o:case m:return d;default:switch(d=d&&d.$$typeof,d){case s:case p:case g:case S:case i:return d;default:return O}}case r:return O}}}function R(d){return k(d)===f}return _.AsyncMode=u,_.ConcurrentMode=f,_.ContextConsumer=s,_.ContextProvider=i,_.Element=t,_.ForwardRef=p,_.Fragment=n,_.Lazy=g,_.Memo=S,_.Portal=r,_.Profiler=a,_.StrictMode=o,_.Suspense=m,_.isAsyncMode=function(d){return R(d)||k(d)===u},_.isConcurrentMode=R,_.isContextConsumer=function(d){return k(d)===s},_.isContextProvider=function(d){return k(d)===i},_.isElement=function(d){return typeof d=="object"&&d!==null&&d.$$typeof===t},_.isForwardRef=function(d){return k(d)===p},_.isFragment=function(d){return k(d)===n},_.isLazy=function(d){return k(d)===g},_.isMemo=function(d){return k(d)===S},_.isPortal=function(d){return k(d)===r},_.isProfiler=function(d){return k(d)===a},_.isStrictMode=function(d){return k(d)===o},_.isSuspense=function(d){return k(d)===m},_.isValidElementType=function(d){return typeof d=="string"||typeof d=="function"||d===n||d===f||d===a||d===o||d===m||d===y||typeof d=="object"&&d!==null&&(d.$$typeof===g||d.$$typeof===S||d.$$typeof===i||d.$$typeof===s||d.$$typeof===p||d.$$typeof===v||d.$$typeof===x||d.$$typeof===w||d.$$typeof===h)},_.typeOf=k,_}var Ie;function gr(){return Ie||(Ie=1,me.exports=hr()),me.exports}var he,Le;function yr(){if(Le)return he;Le=1;var e=gr(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[e.ForwardRef]=n,a[e.Memo]=o;function i(g){return e.isMemo(g)?o:a[g.$$typeof]||t}var s=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,y=Object.prototype;function S(g,h,v){if(typeof h!="string"){if(y){var x=m(h);x&&x!==y&&S(g,x,v)}var w=u(h);f&&(w=w.concat(f(h)));for(var k=i(g),R=i(h),d=0;d<w.length;++d){var O=w[d];if(!r[O]&&!(v&&v[O])&&!(R&&R[O])&&!(k&&k[O])){var E=p(h,O);try{s(g,O,E)}catch{}}}}return g}return he=S,he}yr();var vr=!0;function ot(e,t,r){var n="";return r.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(n+=o+" ")}),n}var Pe=function(t,r,n){var o=t.key+"-"+r.name;(n===!1||vr===!1)&&t.registered[o]===void 0&&(t.registered[o]=r.styles)},at=function(t,r,n){Pe(t,r,n);var o=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var a=r;do t.insert(r===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function xr(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var br={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sr=/[A-Z]|^ms/g,wr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,it=function(t){return t.charCodeAt(1)===45},Fe=function(t){return t!=null&&typeof t!="boolean"},ge=rt(function(e){return it(e)?e:e.replace(Sr,"-$&").toLowerCase()}),We=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(wr,function(n,o,a){return W={name:o,styles:a,next:W},o})}return br[t]!==1&&!it(t)&&typeof r=="number"&&r!==0?r+"px":r};function Q(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var o=r;if(o.anim===1)return W={name:o.name,styles:o.styles,next:W},o.name;var a=r;if(a.styles!==void 0){var i=a.next;if(i!==void 0)for(;i!==void 0;)W={name:i.name,styles:i.styles,next:W},i=i.next;var s=a.styles+";";return s}return $r(e,t,r)}case"function":{if(e!==void 0){var u=W,f=r(e);return W=u,Q(e,t,f)}break}}var p=r;if(t==null)return p;var m=t[p];return m!==void 0?m:p}function $r(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Q(e,t,r[o])+";";else for(var a in r){var i=r[a];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?n+=a+"{"+t[s]+"}":Fe(s)&&(n+=ge(a)+":"+We(a,s)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var u=0;u<i.length;u++)Fe(i[u])&&(n+=ge(a)+":"+We(a,i[u])+";");else{var f=Q(e,t,i);switch(a){case"animation":case"animationName":{n+=ge(a)+":"+f+";";break}default:n+=a+"{"+f+"}"}}}return n}var De=/label:\s*([^\s;{]+)\s*(;|$)/g,W;function Ee(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";W=void 0;var a=e[0];if(a==null||a.raw===void 0)n=!1,o+=Q(r,t,a);else{var i=a;o+=i[0]}for(var s=1;s<e.length;s++)if(o+=Q(r,t,e[s]),n){var u=a;o+=u[s]}De.lastIndex=0;for(var f="",p;(p=De.exec(o))!==null;)f+="-"+p[1];var m=xr(o)+f;return{name:m,styles:o,next:W}}var kr=function(t){return t()},Cr=Ne.useInsertionEffect?Ne.useInsertionEffect:!1,st=Cr||kr,ct=l.createContext(typeof HTMLElement<"u"?mr({key:"css"}):null);ct.Provider;var lt=function(t){return l.forwardRef(function(r,n){var o=l.useContext(ct);return t(r,o,n)})},ut=l.createContext({}),_e={}.hasOwnProperty,xe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Pr=function(t,r){var n={};for(var o in r)_e.call(r,o)&&(n[o]=r[o]);return n[xe]=t,n},Er=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Pe(r,n,o),st(function(){return at(r,n,o)}),null},_r=lt(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var o=e[xe],a=[n],i="";typeof e.className=="string"?i=ot(t.registered,a,e.className):e.className!=null&&(i=e.className+" ");var s=Ee(a,void 0,l.useContext(ut));i+=t.key+"-"+s.name;var u={};for(var f in e)_e.call(e,f)&&f!=="css"&&f!==xe&&(u[f]=e[f]);return u.className=i,r&&(u.ref=r),l.createElement(l.Fragment,null,l.createElement(Er,{cache:t,serialized:s,isStringTag:typeof o=="string"}),l.createElement(o,u))}),Ar=_r,Be=function(t,r){var n=arguments;if(r==null||!_e.call(r,"css"))return l.createElement.apply(void 0,n);var o=n.length,a=new Array(o);a[0]=Ar,a[1]=Pr(t,r);for(var i=2;i<o;i++)a[i]=n[i];return l.createElement.apply(null,a)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Be||(Be={}));function A(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Ee(t)}function ft(){var e=A.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Rr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Or=rt(function(e){return Rr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Nr=Or,zr=function(t){return t!=="theme"},Ue=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Nr:zr},He=function(t,r,n){var o;if(r){var a=r.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},Tr=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return Pe(r,n,o),st(function(){return at(r,n,o)}),null},Mr=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,a,i;r!==void 0&&(a=r.label,i=r.target);var s=He(t,r,n),u=s||Ue(o),f=!u("as");return function(){var p=arguments,m=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&m.push("label:"+a+";"),p[0]==null||p[0].raw===void 0)m.push.apply(m,p);else{var y=p[0];m.push(y[0]);for(var S=p.length,g=1;g<S;g++)m.push(p[g],y[g])}var h=lt(function(v,x,w){var k=f&&v.as||o,R="",d=[],O=v;if(v.theme==null){O={};for(var E in v)O[E]=v[E];O.theme=l.useContext(ut)}typeof v.className=="string"?R=ot(x.registered,d,v.className):v.className!=null&&(R=v.className+" ");var pe=Ee(m.concat(d),x.registered,O);R+=x.key+"-"+pe.name,i!==void 0&&(R+=" "+i);var Lt=f&&s===void 0?Ue(k):u,te={};for(var re in v)f&&re==="as"||Lt(re)&&(te[re]=v[re]);return te.className=R,w&&(te.ref=w),l.createElement(l.Fragment,null,l.createElement(Tr,{cache:x,serialized:pe,isStringTag:typeof k=="string"}),l.createElement(k,te))});return h.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=m,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+i}}),h.withComponent=function(v,x){var w=e(v,Ft({},r,x,{shouldForwardProp:He(h,x,!0)}));return w.apply(void 0,m)},h}},jr=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],z=Mr.bind(null);jr.forEach(function(e){z[e]=z(e)});function Ve(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function dt(...e){return t=>{let r=!1;const n=e.map(o=>{const a=Ve(o,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<n.length;o++){const a=n[o];typeof a=="function"?a():Ve(e[o],null)}}}}function pt(...e){return l.useCallback(dt(...e),e)}function Ir(e,t=[]){let r=[];function n(a,i){const s=l.createContext(i),u=r.length;r=[...r,i];const f=m=>{var x;const{scope:y,children:S,...g}=m,h=((x=y==null?void 0:y[e])==null?void 0:x[u])||s,v=l.useMemo(()=>g,Object.values(g));return $.jsx(h.Provider,{value:v,children:S})};f.displayName=a+"Provider";function p(m,y){var h;const S=((h=y==null?void 0:y[e])==null?void 0:h[u])||s,g=l.useContext(S);if(g)return g;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${a}\``)}return[f,p]}const o=()=>{const a=r.map(i=>l.createContext(i));return function(s){const u=(s==null?void 0:s[e])||a;return l.useMemo(()=>({[`__scope${e}`]:{...s,[e]:u}}),[s,u])}};return o.scopeName=e,[n,Lr(o,...t)]}function Lr(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=n.reduce((s,{useScope:u,scopeName:f})=>{const m=u(a)[`__scope${f}`];return{...s,...m}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}function qe(e,t,{checkForDefaultPrevented:r=!0}={}){return function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function mt(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}function Fr({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,o]=Wr({defaultProp:t,onChange:r}),a=e!==void 0,i=a?e:n,s=mt(r),u=l.useCallback(f=>{if(a){const m=typeof f=="function"?f(e):f;m!==e&&s(m)}else o(f)},[a,e,o,s]);return[i,u]}function Wr({defaultProp:e,onChange:t}){const r=l.useState(e),[n]=r,o=l.useRef(n),a=mt(t);return l.useEffect(()=>{o.current!==n&&(a(n),o.current=n)},[n,o,a]),r}function Dr(e){const t=l.useRef({value:e,previous:e});return l.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var be=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function Br(e){const[t,r]=l.useState(void 0);return be(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let i,s;if("borderBoxSize"in a){const u=a.borderBoxSize,f=Array.isArray(u)?u[0]:u;i=f.inlineSize,s=f.blockSize}else i=e.offsetWidth,s=e.offsetHeight;r({width:i,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function Ur(e,t){return l.useReducer((r,n)=>t[r][n]??r,e)}var ht=e=>{const{present:t,children:r}=e,n=Hr(t),o=typeof r=="function"?r({present:n.isPresent}):l.Children.only(r),a=pt(n.ref,Vr(o));return typeof r=="function"||n.isPresent?l.cloneElement(o,{ref:a}):null};ht.displayName="Presence";function Hr(e){const[t,r]=l.useState(),n=l.useRef({}),o=l.useRef(e),a=l.useRef("none"),i=e?"mounted":"unmounted",[s,u]=Ur(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const f=oe(n.current);a.current=s==="mounted"?f:"none"},[s]),be(()=>{const f=n.current,p=o.current;if(p!==e){const y=a.current,S=oe(f);e?u("MOUNT"):S==="none"||(f==null?void 0:f.display)==="none"?u("UNMOUNT"):u(p&&y!==S?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,u]),be(()=>{if(t){let f;const p=t.ownerDocument.defaultView??window,m=S=>{const h=oe(n.current).includes(S.animationName);if(S.target===t&&h&&(u("ANIMATION_END"),!o.current)){const v=t.style.animationFillMode;t.style.animationFillMode="forwards",f=p.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=v)})}},y=S=>{S.target===t&&(a.current=oe(n.current))};return t.addEventListener("animationstart",y),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{p.clearTimeout(f),t.removeEventListener("animationstart",y),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:l.useCallback(f=>{f&&(n.current=getComputedStyle(f)),r(f)},[])}}function oe(e){return(e==null?void 0:e.animationName)||"none"}function Vr(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var gt=l.forwardRef((e,t)=>{const{children:r,...n}=e,o=l.Children.toArray(r),a=o.find(Xr);if(a){const i=a.props.children,s=o.map(u=>u===a?l.Children.count(i)>1?l.Children.only(null):l.isValidElement(i)?i.props.children:null:u);return $.jsx(Se,{...n,ref:t,children:l.isValidElement(i)?l.cloneElement(i,void 0,s):null})}return $.jsx(Se,{...n,ref:t,children:r})});gt.displayName="Slot";var Se=l.forwardRef((e,t)=>{const{children:r,...n}=e;if(l.isValidElement(r)){const o=Gr(r),a=Yr(n,r.props);return r.type!==l.Fragment&&(a.ref=t?dt(t,o):o),l.cloneElement(r,a)}return l.Children.count(r)>1?l.Children.only(null):null});Se.displayName="SlotClone";var qr=({children:e})=>$.jsx($.Fragment,{children:e});function Xr(e){return l.isValidElement(e)&&e.type===qr}function Yr(e,t){const r={...t};for(const n in t){const o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=(...s)=>{a(...s),o(...s)}:o&&(r[n]=o):n==="style"?r[n]={...o,...a}:n==="className"&&(r[n]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}function Gr(e){var n,o;let t=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}var Kr=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],yt=Kr.reduce((e,t)=>{const r=l.forwardRef((n,o)=>{const{asChild:a,...i}=n,s=a?gt:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),$.jsx(s,{...i,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Ae="Checkbox",[Zr,lo]=Ir(Ae),[Jr,Qr]=Zr(Ae),vt=l.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:a,required:i,disabled:s,value:u="on",onCheckedChange:f,form:p,...m}=e,[y,S]=l.useState(null),g=pt(t,R=>S(R)),h=l.useRef(!1),v=y?p||!!y.closest("form"):!0,[x=!1,w]=Fr({prop:o,defaultProp:a,onChange:f}),k=l.useRef(x);return l.useEffect(()=>{const R=y==null?void 0:y.form;if(R){const d=()=>w(k.current);return R.addEventListener("reset",d),()=>R.removeEventListener("reset",d)}},[y,w]),$.jsxs(Jr,{scope:r,state:x,disabled:s,children:[$.jsx(yt.button,{type:"button",role:"checkbox","aria-checked":U(x)?"mixed":x,"aria-required":i,"data-state":St(x),"data-disabled":s?"":void 0,disabled:s,value:u,...m,ref:g,onKeyDown:qe(e.onKeyDown,R=>{R.key==="Enter"&&R.preventDefault()}),onClick:qe(e.onClick,R=>{w(d=>U(d)?!0:!d),v&&(h.current=R.isPropagationStopped(),h.current||R.stopPropagation())})}),v&&$.jsx(en,{control:y,bubbles:!h.current,name:n,value:u,checked:x,required:i,disabled:s,form:p,style:{transform:"translateX(-100%)"},defaultChecked:U(a)?!1:a})]})});vt.displayName=Ae;var xt="CheckboxIndicator",bt=l.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,a=Qr(xt,r);return $.jsx(ht,{present:n||U(a.state)||a.state===!0,children:$.jsx(yt.span,{"data-state":St(a.state),"data-disabled":a.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});bt.displayName=xt;var en=e=>{const{control:t,checked:r,bubbles:n=!0,defaultChecked:o,...a}=e,i=l.useRef(null),s=Dr(r),u=Br(t);l.useEffect(()=>{const p=i.current,m=window.HTMLInputElement.prototype,S=Object.getOwnPropertyDescriptor(m,"checked").set;if(s!==r&&S){const g=new Event("click",{bubbles:n});p.indeterminate=U(r),S.call(p,U(r)?!1:r),p.dispatchEvent(g)}},[s,r,n]);const f=l.useRef(U(r)?!1:r);return $.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:o??f.current,...a,tabIndex:-1,ref:i,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function U(e){return e==="indeterminate"}function St(e){return U(e)?"indeterminate":e?"checked":"unchecked"}var tn=vt,rn=bt,nn=Object.defineProperty,on=Object.defineProperties,an=Object.getOwnPropertyDescriptors,le=Object.getOwnPropertySymbols,wt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,Xe=(e,t,r)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))wt.call(t,r)&&Xe(e,r,t[r]);if(le)for(var r of le(t))$t.call(t,r)&&Xe(e,r,t[r]);return e},B=(e,t)=>on(e,an(t)),H=(e,t)=>{var r={};for(var n in e)wt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&le)for(var n of le(e))t.indexOf(n)<0&&$t.call(e,n)&&(r[n]=e[n]);return r},sn={white:"#FFF",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray600:"#323238",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F"},cn={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem"},ln={px:"1px",xs:"4px",sm:"6px",md:"8px",full:"99999px"},un={default:"Roboto, sans-serif"},fn={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},dn={regular:"400",medium:"500"},pn={shorter:"125%",base:"160%"},c={colors:sn,fonts:un,fontSizes:fn,fontWeights:dn,lineHeights:pn,radii:ln,space:cn},mn={primary:A`
    color: ${c.colors.white};
    font-family: sans-serif;
    background-color: ${c.colors.ignite500};

    &:not(:disabled):hover {
      background-color: ${c.colors.ignite300};
    }

    &:disabled {
      background-color: ${c.colors.gray200};
    }
  `,secondary:A`
    color: ${c.colors.ignite300};
    border-color: ${c.colors.ignite500};
    border-width: 2px;
    border-style: solid;
    font-family: sans-serif;

    &:not(:disabled):hover {
      background-color: ${c.colors.ignite500};
      color: ${c.colors.white};
    }

    &:disabled {
      color: ${c.colors.gray200};
      border-color: ${c.colors.gray200};
    }
  `,tertiary:A`
    color: ${c.colors.gray100};
    font-family: sans-serif;
    &:not(:disabled):hover {
      color: ${c.colors.white};
    }

    &:disabled {
      color: ${c.colors.gray600};
    }
  `},hn={sm:A`
    font-size: ${c.fontSizes.sm};
    height: ${c.space[8]};
    padding: ${c.space[3]} ${c.space[6]};
  `,md:A`
    font-size: ${c.fontSizes.md};
    height: ${c.space[12]};
    padding: ${c.space[3]} ${c.space[6]};
  `},gn=z.button`
  all: unset;
  border-radius: ${c.radii.md};
  font-size: ${c.fontSizes.md};
  font-weight: ${c.fontWeights.medium};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${c.space[2]};
  cursor: pointer;

  svg {
    width: ${c.space[4]};
    height: ${c.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${c.colors.gray100};
  }

  //default styles
  ${e=>mn[e.variant||"primary"]}
  ${e=>hn[e.size||"md"]}
`;gn.displayName="Button";var yn=z.div`
  font-family: sans-serif;
  padding: ${c.space[6]};
  border-radius: ${c.radii.md};
  background-color: ${c.colors.gray800};
  color: ${c.colors.white};
  border: 1px solid ${c.colors.gray600};
`;yn.displayName="Box";var vn={xxs:A`
    font-size: ${c.fontSizes.xxs};
  `,xs:A`
    font-size: ${c.fontSizes.xs};
  `,sm:A`
    font-size: ${c.fontSizes.sm};
  `,md:A`
    font-size: ${c.fontSizes.md};
  `,lg:A`
    font-size: ${c.fontSizes.lg};
  `,xl:A`
    font-size: ${c.fontSizes.xl};
  `,"2xl":A`
    font-size: ${c.fontSizes["2xl"]};
  `,"4xl":A`
    font-size: ${c.fontSizes["4xl"]};
  `,"5xl":A`
    font-size: ${c.fontSizes["5xl"]};
  `,"6xl":A`
    font-size: ${c.fontSizes["6xl"]};
  `,"7xl":A`
    font-size: ${c.fontSizes["7xl"]};
  `,"8xl":A`
    font-size: ${c.fontSizes["8xl"]};
  `,"9xl":A`
    font-size: ${c.fontSizes["9xl"]};
  `},kt=z.p`
  font-family: ${c.fonts.default};
  line-height: ${c.lineHeights.base};
  margin: 0;
  color: ${c.colors.gray100};

  ${({size:e="md"})=>vn[e]}
`;kt.displayName="Text";var xn={sm:A`
    font-size: ${c.fontSizes.xl};
  `,md:A`
    font-size: ${c.fontSizes["2xl"]};
  `,lg:A`
    font-size: ${c.fontSizes["4xl"]};
  `,"2xl":A`
    font-size: ${c.fontSizes["5xl"]};
  `,"3xl":A`
    font-size: ${c.fontSizes["6xl"]};
  `,"4xl":A`
    font-size: ${c.fontSizes["7xl"]};
  `,"5xl":A`
    font-size: ${c.fontSizes["8xl"]};
  `,"6xl":A`
    font-size: ${c.fontSizes["9xl"]};
  `},bn=z.h2`
  font-family: ${c.fonts.default};
  line-height: ${c.lineHeights.shorter};
  margin: 0;
  color: ${c.colors.gray100};

  ${({size:e="md"})=>xn[e]}
`;bn.displayName="Heading";var Sn=z.textarea`
  background-color: ${c.colors.gray900};
  padding: ${c.space[3]} ${c.space[4]};
  border-radius: ${c.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${c.colors.gray900};

  font-family: ${c.fonts.default};
  font-size: ${c.fontSizes.sm};
  color: ${c.colors.white};
  font-weight: ${c.fontWeights.regular};
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: 0;
    border-color: ${c.colors.ignite300};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${c.colors.gray400};
  }
`;Sn.displayName="TextArea";var wn=l.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ct=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function Ye(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var Pt=l.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,a=e.weight,i=e.mirrored,s=e.children,u=e.renderPath,f=Ye(e,["alt","color","size","weight","mirrored","children","renderPath"]),p=l.useContext(wn),m=p.color,y=m===void 0?"currentColor":m,S=p.size,g=p.weight,h=g===void 0?"regular":g,v=p.mirrored,x=v===void 0?!1:v,w=Ye(p,["color","size","weight","mirrored"]);return b.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??S,height:o??S,fill:n??y,viewBox:"0 0 256 256",transform:i||x?"scale(-1, 1)":void 0},w,f),!!r&&b.createElement("title",null,r),s,b.createElement("rect",{width:"256",height:"256",fill:"none"}),u(a??h,n??y))});Pt.displayName="IconBase";var Et=Pt,V=new Map;V.set("bold",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});V.set("duotone",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});V.set("fill",function(){return b.createElement(b.Fragment,null,b.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});V.set("light",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});V.set("thin",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});V.set("regular",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $n=function(t,r){return Ct(t,r,V)},_t=l.forwardRef(function(e,t){return b.createElement(Et,Object.assign({ref:t},e,{renderPath:$n}))});_t.displayName="Check";var kn=_t,q=new Map;q.set("bold",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});q.set("duotone",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});q.set("fill",function(){return b.createElement(b.Fragment,null,b.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});q.set("light",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});q.set("thin",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});q.set("regular",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Cn=function(t,r){return Ct(t,r,q)},At=l.forwardRef(function(e,t){return b.createElement(Et,Object.assign({ref:t},e,{renderPath:Cn}))});At.displayName="User";var Pn=At;function En(e,t=[]){let r=[];function n(a,i){const s=l.createContext(i),u=r.length;r=[...r,i];const f=m=>{var y;const S=m,{scope:g,children:h}=S,v=H(S,["scope","children"]),x=((y=g==null?void 0:g[e])==null?void 0:y[u])||s,w=l.useMemo(()=>v,Object.values(v));return $.jsx(x.Provider,{value:w,children:h})};f.displayName=a+"Provider";function p(m,y){var S;const g=((S=y==null?void 0:y[e])==null?void 0:S[u])||s,h=l.useContext(g);if(h)return h;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${a}\``)}return[f,p]}const o=()=>{const a=r.map(i=>l.createContext(i));return function(s){const u=(s==null?void 0:s[e])||a;return l.useMemo(()=>({[`__scope${e}`]:B(T({},s),{[e]:u})}),[s,u])}};return o.scopeName=e,[n,_n(o,...t)]}function _n(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const i=n.reduce((s,{useScope:u,scopeName:f})=>{const m=u(a)[`__scope${f}`];return T(T({},s),m)},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}function An(e){const t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...r)=>{var n;return(n=t.current)==null?void 0:n.call(t,...r)},[])}var Rt=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function Ge(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Rn(...e){return t=>{let r=!1;const n=e.map(o=>{const a=Ge(o,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let o=0;o<n.length;o++){const a=n[o];typeof a=="function"?a():Ge(e[o],null)}}}}var Ot=l.forwardRef((e,t)=>{const r=e,{children:n}=r,o=H(r,["children"]),a=l.Children.toArray(n),i=a.find(Nn);if(i){const s=i.props.children,u=a.map(f=>f===i?l.Children.count(s)>1?l.Children.only(null):l.isValidElement(s)?s.props.children:null:f);return $.jsx(we,B(T({},o),{ref:t,children:l.isValidElement(s)?l.cloneElement(s,void 0,u):null}))}return $.jsx(we,B(T({},o),{ref:t,children:n}))});Ot.displayName="Slot";var we=l.forwardRef((e,t)=>{const r=e,{children:n}=r,o=H(r,["children"]);if(l.isValidElement(n)){const a=Tn(n),i=zn(o,n.props);return n.type!==l.Fragment&&(i.ref=t?Rn(t,a):a),l.cloneElement(n,i)}return l.Children.count(n)>1?l.Children.only(null):null});we.displayName="SlotClone";var On=({children:e})=>$.jsx($.Fragment,{children:e});function Nn(e){return l.isValidElement(e)&&e.type===On}function zn(e,t){const r=T({},t);for(const n in t){const o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=(...s)=>{a(...s),o(...s)}:o&&(r[n]=o):n==="style"?r[n]=T(T({},o),a):n==="className"&&(r[n]=[o,a].filter(Boolean).join(" "))}return T(T({},e),r)}function Tn(e){var t,r;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var Mn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Re=Mn.reduce((e,t)=>{const r=l.forwardRef((n,o)=>{const a=n,{asChild:i}=a,s=H(a,["asChild"]),u=i?Ot:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),$.jsx(u,B(T({},s),{ref:o}))});return r.displayName=`Primitive.${t}`,B(T({},e),{[t]:r})},{}),Oe="Avatar",[jn,uo]=En(Oe),[In,Nt]=jn(Oe),zt=l.forwardRef((e,t)=>{const r=e,{__scopeAvatar:n}=r,o=H(r,["__scopeAvatar"]),[a,i]=l.useState("idle");return $.jsx(In,{scope:n,imageLoadingStatus:a,onImageLoadingStatusChange:i,children:$.jsx(Re.span,B(T({},o),{ref:t}))})});zt.displayName=Oe;var Tt="AvatarImage",Mt=l.forwardRef((e,t)=>{const r=e,{__scopeAvatar:n,src:o,onLoadingStatusChange:a=()=>{}}=r,i=H(r,["__scopeAvatar","src","onLoadingStatusChange"]),s=Nt(Tt,n),u=Ln(o,i.referrerPolicy),f=An(p=>{a(p),s.onImageLoadingStatusChange(p)});return Rt(()=>{u!=="idle"&&f(u)},[u,f]),u==="loaded"?$.jsx(Re.img,B(T({},i),{ref:t,src:o})):null});Mt.displayName=Tt;var jt="AvatarFallback",It=l.forwardRef((e,t)=>{const r=e,{__scopeAvatar:n,delayMs:o}=r,a=H(r,["__scopeAvatar","delayMs"]),i=Nt(jt,n),[s,u]=l.useState(o===void 0);return l.useEffect(()=>{if(o!==void 0){const f=window.setTimeout(()=>u(!0),o);return()=>window.clearTimeout(f)}},[o]),s&&i.imageLoadingStatus!=="loaded"?$.jsx(Re.span,B(T({},a),{ref:t})):null});It.displayName=jt;function Ln(e,t){const[r,n]=l.useState("idle");return Rt(()=>{if(!e){n("error");return}let o=!0;const a=new window.Image,i=s=>()=>{o&&n(s)};return n("loading"),a.onload=i("loaded"),a.onerror=i("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{o=!1}},[e,t]),r}var Fn=zt,Wn=Mt,Dn=It,Bn=z(Fn)`
  border-radius: ${c.radii.full};
  display: inline-block;
  width: ${c.space[16]};
  height: ${c.space[16]};
  overflow: hidden;
`,Un=z(Wn)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Hn=z(Dn)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${c.colors.gray400};
  color: ${c.colors.gray200};

  svg {
    width: ${c.space[6]};
    height: ${c.space[6]};
  }
`;function Vn(e){return $.jsxs(Bn,{children:[$.jsx(Un,T({},e)),$.jsx(Hn,{delayMs:600,children:$.jsx(Pn,{})})]})}Vn.displayName="Avatar";var qn=z.div`
  background-color: ${c.colors.gray900};
  border-radius: ${c.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${c.colors.gray900};
  display: flex;
  align-items: center;

  ${({size:e})=>e==="sm"?A`
          padding: ${c.space[2]} ${c.space[3]};
        `:A`
          padding: ${c.space[3]} ${c.space[4]};
        `}

  &:has(input:focus) {
    border-color: ${c.colors.ignite300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Xn=z.span`
  font-family: ${c.fonts.default};
  font-size: ${c.fontSizes.sm};
  color: ${c.colors.gray400};
  font-weight: normal;
`,Yn=z.input`
  font-family: ${c.fonts.default};
  font-size: ${c.fontSizes.sm};
  color: ${c.colors.white};
  font-weight: normal;
  background: transparent;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${c.colors.gray400};
  }
`,Gn=l.forwardRef((e,t)=>{var r=e,{prefix:n}=r,o=H(r,["prefix"]);return $.jsxs(qn,{children:[!!n&&$.jsx(Xn,{children:n}),$.jsx(Yn,T({ref:t},o))]})});Gn.displayName="TextInput";var Kn=z(tn)`
  all: unset;
  width: ${c.space[6]};
  height: ${c.space[6]};
  background-color: ${c.colors.gray900};
  border-radius: ${c.radii.xs};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${c.colors.gray900};

  &[data-state="checked"] {
    background-color: ${c.colors.ignite300};
  }

  &:focus,
  &[data-state="checked"] {
    border: 2px solid ${c.colors.ignite300};
  }
`,Zn=ft`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,Jn=ft`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`,Qn=z(rn)`
  color: ${c.colors.white};
  width: ${c.space[4]};
  height: ${c.space[4]};

  &[data-state="checked"] {
    animation: ${Zn} 200ms ease-out;
  }

  &[data-state="unchecked"] {
    animation: ${Jn} 200ms ease-out;
  }
`;function eo(e){return $.jsx(Kn,B(T({},e),{children:$.jsx(Qn,{asChild:!0,children:$.jsx(kn,{weight:"bold"})})}))}eo.displayName="Checkbox";var to=z.div``,ro=z(kt)`
  color: ${c.colors.gray200};
  font-size: ${c.fontSizes.xs};
`,no=z.div`
  display: grid;
  grid-template-columns: repeat(var(--steps-size), 1fr);
  gap: ${c.space[2]};
  margin-top: ${c.space[1]};
`,oo=z.div`
  height: ${c.space[1]};
  border-radius: ${c.radii.px};
  background-color: ${e=>e.active?c.colors.gray100:c.colors.gray600};
`;function ao({size:e,currentStep:t=1}){return $.jsxs(to,{children:[$.jsxs(ro,{children:["Passo ",t," de ",e]}),$.jsx(no,{style:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>$.jsx(oo,{active:t>=r},r))})]})}ao.displayName="MultiStep";export{Vn as A,yn as B,eo as C,bn as H,ao as M,kt as T,Sn as a,Gn as b,gn as c};
