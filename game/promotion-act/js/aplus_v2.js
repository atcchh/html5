/*2015-05-18 11:42:21*/!function(e){var t=1;if(!(e.ali_analytics&&e.ali_analytics.ua&&t<=e.ali_analytics.ua.version)){var a,r,o,i,n,s,c,l,_,d,m,p,u,g=window,f=document,h=location,b=(location.href,h.hostname,g.navigator),v=b.appVersion,y=b&&b.userAgent||"",w=function(e){var t=0;return parseFloat(e.replace(/\./g,function(){return 0==t++?".":""}))},M=function(e,t){var a,r;t[a="trident"]=.1,(r=e.match(/Trident\/([\d.]*)/))&&r[1]&&(t[a]=w(r[1])),t.core=a},P=function(e){var t,a;return(t=e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/))&&(a=t[1]||t[2])?w(a):0},T=function(e){return void 0==e||""==e?"other":e},E=function(e){function t(){for(var t=[["Windows NT 5.1","winXP"],["Windows NT 6.1","win7"],["Windows NT 6.0","winVista"],["Windows NT 6.2","win8"],["iPad","ios"],["iPhone;","ios"],["iPod","ios"],["Macintosh","mac"],["Android","android"],["Ubuntu","ubuntu"],["Linux","linux"],["Windows NT 5.2","win2003"],["Windows NT 5.0","win2000"],["Windows","winOther"],["rhino","rhino"]],a=0,r=t.length;r>a;++a)if(-1!=e.indexOf(t[a][0]))return t[a][1];return"other"}function a(e,t,a,r){var o,i=g.navigator.mimeTypes;try{for(var o in i)if(i[o][e]==t){if(void 0!==a&&r.test(i[o][a]))return!0;if(void 0===a)return!0}return!1}catch(n){return!1}}var r,o,i,n,s,c,l,_,d="",m=d,p=d,u=[6,9],h="{{version}}",b="<!--[if IE "+h+"]><s></s><![endif]-->",y=f&&f.createElement("div"),T=[],E={webkit:void 0,trident:void 0,gecko:void 0,presto:void 0,chrome:void 0,safari:void 0,firefox:void 0,ie:void 0,ieMode:void 0,opera:void 0,mobile:void 0,core:void 0,shell:void 0,phantomjs:void 0,os:void 0,ipad:void 0,iphone:void 0,ipod:void 0,ios:void 0,android:void 0,nodejs:void 0,extraName:void 0,extraVersion:void 0};if(y&&y.getElementsByTagName&&(y.innerHTML=b.replace(h,""),T=y.getElementsByTagName("s")),T.length>0){for(M(e,E),n=u[0],s=u[1];s>=n;n++)if(y.innerHTML=b.replace(h,n),T.length>0){E[p="ie"]=n;break}!E.ie&&(i=P(e))&&(E[p="ie"]=i)}else(o=e.match(/AppleWebKit\/([\d.]*)/))&&o[1]?(E[m="webkit"]=w(o[1]),(o=e.match(/OPR\/(\d+\.\d+)/))&&o[1]?E[p="opera"]=w(o[1]):(o=e.match(/Chrome\/([\d.]*)/))&&o[1]?E[p="chrome"]=w(o[1]):(o=e.match(/\/([\d.]*) Safari/))&&o[1]&&(E[p="safari"]=w(o[1])),/ Mobile\//.test(e)&&e.match(/iPad|iPod|iPhone/)?(E.mobile="apple",o=e.match(/OS ([^\s]*)/),o&&o[1]&&(E.ios=w(o[1].replace("_","."))),r="ios",o=e.match(/iPad|iPod|iPhone/),o&&o[0]&&(E[o[0].toLowerCase()]=E.ios)):/ Android/i.test(e)?(/Mobile/.test(e)&&(r=E.mobile="android"),o=e.match(/Android ([^\s]*);/),o&&o[1]&&(E.android=w(o[1]))):(o=e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))&&(E.mobile=o[0].toLowerCase()),(o=e.match(/PhantomJS\/([^\s]*)/))&&o[1]&&(E.phantomjs=w(o[1]))):(o=e.match(/Presto\/([\d.]*)/))&&o[1]?(E[m="presto"]=w(o[1]),(o=e.match(/Opera\/([\d.]*)/))&&o[1]&&(E[p="opera"]=w(o[1]),(o=e.match(/Opera\/.* Version\/([\d.]*)/))&&o[1]&&(E[p]=w(o[1])),(o=e.match(/Opera Mini[^;]*/))&&o?E.mobile=o[0].toLowerCase():(o=e.match(/Opera Mobi[^;]*/))&&o&&(E.mobile=o[0]))):(i=P(e))?(E[p="ie"]=i,M(e,E)):(o=e.match(/Gecko/))&&(E[m="gecko"]=.1,(o=e.match(/rv:([\d.]*)/))&&o[1]&&(E[m]=w(o[1]),/Mobile|Tablet/.test(e)&&(E.mobile="firefox")),(o=e.match(/Firefox\/([\d.]*)/))&&o[1]&&(E[p="firefox"]=w(o[1])));r||(r=t());var S,_,A;if(!a("type","application/vnd.chromium.remoting-viewer")){S="scoped"in f.createElement("style"),A="v8Locale"in g;try{_=g.external||void 0}catch(O){}if(o=e.match(/360SE/))c="360";else if(o=e.match(/SE\s([\d.]*)/)||_&&"SEVersion"in _)c="sougou",l=w(o[1])||.1;else if((o=e.match(/Maxthon(?:\/)+([\d.]*)/))&&_){c="maxthon";try{l=w(_.max_version||o[1])}catch(I){l=.1}}else S&&A?c="360se":S||A||!/Gecko\)\s+Chrome/.test(v)||E.opera||(c="360ee")}return(o=e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/))?(c="tt",l=w(o[2])||.1):(o=e.match(/LBBROWSER/)||_&&"LiebaoGetVersion"in _)?c="liebao":(o=e.match(/TheWorld/))?(c="theworld",l=3):(o=e.match(/TaoBrowser\/([\d.]*)/))&&(c="taobao",l=w(o[1])||.1),E.os=r,E.core=E.core||m,E.shell=p,E.ieMode=E.ie&&f.documentMode||E.ie,E.extraName=c,E.extraVersion=l,E.resolution=g.screen.width+"x"+g.screen.height,E},S=1;try{a=E(y),r=a.os,o=a.shell,i=a.core,n=a.resolution,s=a.extraName,c=a.extraVersion,_=r?r+(a[r]?a[r]:""):"",d=o?o+parseInt(a[o]):"",m=i,p=n,u=s?s+(c?parseInt(c):""):""}catch(A){}l={p:S,o:T(_),b:T(d),w:T(m),s:p,mx:u},e.ali_analytics||(e.ali_analytics={}),e.ali_analytics.ua||(e.ali_analytics.ua={}),e.ali_analytics.ua={version:t,ua_info:l}}}(window),function(){function getBeaconSrc(e){if(isTerminal)return"m";if(is_in_iframe)return isContain(e,"wrating.com")?"k":"y";var t,a,r="o",o=[["ju.taobao.com","4"],["juhuasuan.com","4"],["alipay.com","f"],["china.alibaba.com","6"],["1688.com","6"],["alibaba.com","7"],["aliloan.com","8"],["cnzz.com","9"],["net.cn","a"],["hichina.com","a"],["phpwind.com","b"],["aliyun.com","c"],["tao123.com","d"],["alimama.com","e"],["taobao.com","1"],["tmall.com","2"],["tmall.hk","2"],["etao.com","3"],["*",r]],i=o.length;for(t=0;i>t;t++)if(a=o[t],isContain(e,a[0]))return a[1];return r}function isContain(e,t){return e.indexOf(t)>-1}function isStartWith(e,t){return 0==e.indexOf(t)}function isEndWith(e,t){var a=e.length,r=t.length;return a>=r&&e.indexOf(t)==a-r}function trim(e){return isString(e)?e.replace(/^\s+|\s+$/g,""):""}function tryToDecodeURIComponent(e,t){var a=t||"";if(e)try{a=decodeURIComponent(e)}catch(r){}return a}function obj2param(e){var t,a,r=[];for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],r.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a)));return r.join("&")}function arr2param(e){var t,a,r,o=[],i=e.length;for(r=0;i>r;r++)t=e[r][0],a=e[r][1],o.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a));return o.join("&")}function arr2obj(e){var t,a,r,o={},i=e.length;for(r=0;i>r;r++)t=e[r][0],a=e[r][1],o[t]=a;return o}function objSimpleClone(e){var t,a={};for(t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}function objUpdate(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function param2obj(e){for(var t,a=e.split("&"),r=0,o=a.length,i={};o>r;r++)t=a[r].split("="),i[t[0]]=tryToDecodeURIComponent(t[1]);return i}function isNumber(e){return"number"==typeof e}function isUnDefined(e){return"undefined"==typeof e}function isString(e){return"string"==typeof e}function isArray(e){return"[object Array]"===Object.prototype.toString.call(e)}function tryToGetAttribute(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function tryToGetHref(e){var t;try{t=trim(e.getAttribute("href",2))}catch(a){}return t||""}function getExParams(){var e=doc.getElementById("tb-beacon-aplus"),t=tryToGetAttribute(e,"exparams");if(!t)return t;var a,r,o=["taobao.com","tmall.com","etao.com","hitao.com","taohua.com","juhuasuan.com","alimama.com"];if(is_in_iframe){for(r=o.length,a=0;r>a;a++)if(isContain(hostsname,o[a]))return t;t=t.replace(/\buserid=\w*&?/,"")}return t=t.replace(/\buserid=/,"uidaplus=")}function getMetaTags(){return _head_node=_head_node||doc.getElementsByTagName("head")[0],_meta_nodes||(_head_node?_meta_nodes=_head_node.getElementsByTagName("meta"):[])}function parseMetaContent(e,t){var a,r,o=e.split(";"),i=o.length;for(a=0;i>a;a++)r=o[a].split("="),t[trim(r[0])||s_plain_obj]=tryToDecodeURIComponent(trim(r.slice(1).join("=")))}function getCookie(e){var t=doc.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)"));return t?t[1]:""}function makeCacheNum(){return Math.floor(268435456*Math.random()).toString(16)}function init_getMetaMicroscopeData(){var e,t,a,r=getMetaTags(),o=r.length;for(e=0;o>e;e++)t=r[e],"microscope-data"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_microscope_data),is_head_has_meta_microscope_data=s_true);_microscope_data_params=obj2param(_microscope_data),ms_data_page_id=_microscope_data.pageId,ms_data_shop_id=_microscope_data.shopId,ms_data_instance_id=_microscope_data.siteInstanceId,ms_data_siteCategoryId=_microscope_data.siteCategory,ms_prototype_id=_microscope_data.prototypeId,site_instance_id_or_shop_id=ms_data_instance_id||ms_data_shop_id}function getMetaAtpData(){var e,t,a,r=getMetaTags(),o=r.length;for(e=0;o>e;e++)t=r[e],"atp-beacon"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_atp_beacon_data));_atp_beacon_data_params=obj2param(_atp_beacon_data)}function getMetaWaiting(){var e,t,a,r=getMetaTags(),o=r.length;for(e=0;o>e;e++)if(t=r[e],"aplus-waiting"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function getMetaTerminal(){var e,t,a,r=getMetaTags(),o=r.length;for(e=0;o>e;e++)if(t=r[e],"aplus-terminal"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function getMetaAhot(){var e,t,a,r=getMetaTags(),o=r.length;for(e=0;o>e;e++)if(t=r[e],"ahot-aplus"==tryToGetAttribute(t,"name")){a=tryToGetAttribute(t,"content");break}return a}function isOnePage(){var e,t,a=getMetaTags(),r=a.length,o="-1";for(e=0;r>e;e++)if(t=a[e],"isonepage"==tryToGetAttribute(t,"name")){o=tryToGetAttribute(t,"content");break}return o}function getSPMProtocolFromMeta(){var e,t,a,r,o=getMetaTags();for(e=0,t=o.length;t>e;e++)a=o[e],r=tryToGetAttribute(a,"name"),r==s_SPM_ATTR_NAME&&(spm_protocol=tryToGetAttribute(a,s_SPM_DATA_PROTOCOL))}function getMetaSPMData(e){var t,a,r,o,i,n,s=getMetaTags();if(s)for(t=0,a=s.length;a>t;t++)if(o=s[t],i=tryToGetAttribute(o,"name"),i==e)return page_global_spm_id_origin=tryToGetAttribute(o,"content"),page_global_spm_id_origin.indexOf(":")>=0&&(r=page_global_spm_id_origin.split(":"),spm_protocol="i"==r[0]?"i":"u",page_global_spm_id_origin=r[1]),n=tryToGetAttribute(o,s_SPM_DATA_PROTOCOL),n&&(spm_protocol="i"==n?"i":"u"),page_global_is_wangpu=isStartWith(page_global_spm_id_origin,"110"),spm_ab=page_global_is_wangpu?default_ab:page_global_spm_id_origin,s_true;return s_false}function init_getGlobalSPMId(){if(!isUnDefined(spm_ab))return spm_ab;if(spm_a&&spm_b)return spm_a=spm_a.replace(/^{(\w+)}$/g,"$1"),spm_b=spm_b.replace(/^{(\w+)}$/g,"$1"),wh_in_page=s_true,spm_ab=spm_a+"."+spm_b,getSPMProtocolFromMeta(),goldlog.spm_ab=[spm_a,spm_b],spm_ab;{var e;doc.getElementsByTagName("head")[0]}if(getMetaSPMData(s_SPM_ATTR_NAME)||getMetaSPMData("spm-id"),spm_ab=spm_ab||default_ab,!spm_ab)return spm_ab;var t,a=doc.getElementsByTagName("body");return e=spm_ab.split("."),goldlog.spm_ab=e,a=a&&a.length?a[0]:null,a&&(t=tryToGetAttribute(a,s_SPM_ATTR_NAME),t?(spm_ab=e[0]+"."+t,goldlog.spm_ab=[e[0],t]):1==e.length&&(spm_ab=default_ab)),spm_ab}function makePVId(){function e(e){var t="0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ",a="0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";return 1==e?t.substr(Math.floor(60*Math.random()),1):2==e?a.substr(Math.floor(60*Math.random()),1):"0"}var t="g_aplus_pv_id",a="",r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",o=!1;if(!win[t]){for(;a.length<6;){var i=r.substr(Math.floor(62*Math.random()),1);!o&&a.length<=2&&("g"==i.toLowerCase()||"l"==i.toLowerCase())&&(0==a.length&&"g"==i.toLowerCase()?Math.random()<.5&&(i=e(1),o=!0):1==a.length&&"l"==i.toLowerCase()&&"g"==a.charAt(0).toLowerCase()&&(i=e(2),o=!0)),a+=i}win[t]=a}return win[t]}function makeChkSum(e){e=(e||"").split("#")[0].split("?")[0];var t=e.length,a=function(e){var t,a=e.length,r=0;for(t=0;a>t;t++)r=31*r+e.charCodeAt(t);return r};return t?a(t+"#"+e.charCodeAt(t-1)):-1}function init_aplusQueue(){var e,t=win[s_aplus_queue];t.push=e=function(){for(var e,a,r=0,o=arguments.length;o>r;r++)e=arguments[r],isString(e)?goldlog.send(hjlj_beacon_base+e):isArray(e)&&"push"!=(a=e[0])&&(t[a]=t[a]||[]).push(e.slice(1))};for(var a;a=t.shift();)e(a)}function onDOMReady(e){var t=win.KISSY;t?t.ready(e):win.jQuery?jQuery(doc).ready(e):"complete"===doc.readyState?e():addEventListener(win,"load",e)}function recordValInWindowName(){if(!is_in_iframe){var e=win.name||"",t=is_login_page?doc.referrer||page_url:page_url,a={refer_pv_id:pvid};is_https&&(a.wm_referrer=t),-1==e.indexOf("=")?(a.wm_old_value=e,win.name=obj2param(a)):(is_login_page&&e.match(/&?\bwm_referrer=[^&]+/)&&delete a.wm_referrer,e=param2obj(e),objUpdate(e,a),win.name=obj2param(e))}}function addEventListener(e,t,a){e[onevent]((atta?"on":"")+t,function(e){e=e||win.event;var t=e.target||e.srcElement;a(e,t)},s_false)}function atp_inIframeException(){var e,t,a=["/theme/info/info","/promo/co_header.php","fast_buy.htm","/add_collection.htm","/taobao_digital_iframe","/promo/co_header_taoinfo.php","/list_forum","/theme/info/info"];for(e=0,t=a.length;t>e;e++)if(-1!=pathname.indexOf(a[e]))return s_true;var r=/^https?:\/\/[\w\.]+\.taobao\.com/i;return!r.test(page_referrer)}function processGoldlogQueue(){function e(){var e,t,a,r=win[s_GOLDMINER_QUEUE];if(r&&isArray(r)&&r.length)for(;e=r.shift();)if(e&&e.action&&isString(e.action)&&e.arguments&&isArray(e.arguments)){for(a=e.action.split("."),t=win;a.length;)if(t=t[a.shift()],!t)return;if("function"==typeof t)try{t.apply(t,e.arguments)}catch(o){}}}try{e()}catch(t){}}function init_watchGoldlogQueue(){var e=function(){try{processGoldlogQueue(),setTimeout(e,200)}catch(t){}};e(),addEventListener(win,"beforeunload",processGoldlogQueue)}function cleanParams(e){var t,a,r,o,i=[],n={};for(t=e.length-1;t>=0;t--)a=e[t],r=a[0],r!=s_plain_obj&&n.hasOwnProperty(r)||(o=a[1],("aplus"==r||""!=o)&&(i.unshift([r,o]),n[r]=1));return i}function cleanParamsForWindvane(e){var t,a,r,o,i=[],n={logtype:!0,cache:!0,scr:!0,"spm-cnt":!0};for(t=e.length-1;t>=0;t--)a=e[t],r=a[0],o=a[1],isStartWith(r,s_plain_obj)||n[r]||i.unshift([r,o]);return i}function tblogSend(e,t){var a,r;if(t){if(isWindVane&&isTerminal){r=cleanParamsForWindvane(cleanParams(t));var o,i={},n=(getSPMFromUrl(page_url),getSPMFromUrl(page_referrer)),s=isOnePage(),c=s.split("|"),l=c[0],_=c[1]?c[1]:"";try{var a=arr2obj(r);o=JSON.stringify(a),"{}"==o&&(o="")}catch(d){o=""}i.functype="2001",i.urlpagename=_,i.url=loc.href,i.spmcnt=(spm_ab||"0.0")+".0.0",i.spmpre=n||"",i.lzsid="",i.cna=acookie_cna||"",i.extendargs=o,i.isonepage=l,WindVane.call("WVTBUserTrack","toUT",i)}return isUseLSProxy()?useLSProxy({url:makeUrl(e,t),js:js_fdc_lsproxy,referrer:loc.href}):goldlog.send(e,t)}}function mkPlainKey(){return s_plain_obj+Math.random()}function wp_bucketId(e,t){var a,r=2146271213;for(a=0;a<e.length;a++)r=(r<<5)+r+e.charCodeAt(a);return(65535&r)%t}function getSPMFromUrl(e){var t,a=e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));return a&&(t=a[1])&&5==t.split(".").length?t:null}function ifAdd(e,t){var a,r,o,i,n=t.length;for(a=0;n>a;a++)r=t[a],o=r[0],i=r[1],i&&e.push([o,i])}function init_loadScripts(){Math.random()<1e-4&&addScriptFromFDC("sample.js?v=131028");var e=".tbcdn.cn/s/fdc/??spm.js,spmact.js?v=141204";addScript("http://a"+e,"https://s"+e);var t="laiwang",a="ilw/a/lwlog.js?v=140709";isContain(loc.href.split("?")[0],t)&&addScript("http://g.tbcdn.cn/"+a,"https://s.tbcdn.cn/g/"+a);var r="alilog/mlog/xwj_heat.js?v=1503233";(Math.random()<CONFIG.RATE.AHOT_SAMPLING||isAhot||CONFIG.DEBUG.AHOT)&&addScript("//g.alicdn.com/"+r,"//g.alicdn.com/"+r),ms_data_instance_id&&ms_prototype_id&&ms_prototype_id.match(/^[124]$/)&&ms_data_shop_id&&addScriptFromFDC("wp-beacon.js?v=131014"),is_https||onDOMReady(function(){setTimeout(function(){addScript("//g.alicdn.com/sd/data_sufei/1.4.1/aplus/index.js","//g.alicdn.com/sd/data_sufei/1.4.1/aplus/index.js")},1e3)})}function compareVersion(e,t){e=e.toString().split("."),t=t.toString().split(".");for(var a=0;a<e.length||a<t.length;a++){var r=parseInt(e[a],10),o=parseInt(t[a],10);if(window.isNaN(r)&&(r=0),window.isNaN(o)&&(o=0),o>r)return-1;if(r>o)return 1}return 0}function callback(e,t){isAndroid&&compareVersion(osVersion,"2.4.0")<0?setTimeout(function(){e&&e(t)},1):e&&e(t)}function init_windVane(){var WV_Core={call:function(e,t,a,r,o,i){var n,s;return lib.promise&&(s=lib.promise.deferred()),n=i>0?setTimeout(function(){WV_Core.onFailure(n,{ret:"TIMEOUT"})},i):WV_Private.getSid(),a.sid=n,WV_Private.registerCall(n,r,o,s),isAndroid?compareVersion(wvVersion,"2.7.0")>=0?WV_Private.callMethodByPrompt(e,t,WV_Private.buildParam(a),n+""):WindVane_Native&&WindVane_Native.callMethod&&WindVane_Native.callMethod(e,t,WV_Private.buildParam(a),n+""):isIOS&&WV_Private.callMethodByIframe(e,t,WV_Private.buildParam(a),n+""),s?s.promise():void 0},fireEvent:function(e,t){var a=doc.createEvent("HTMLEvents");a.initEvent(e,!1,!0),a.param=WV_Private.parseParam(t),doc.dispatchEvent(a)},getParam:function(e){return WV_Private.params[PARAM_PREFIX+e]||""},onSuccess:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),r=a.success,o=a.deferred,i=WV_Private.parseParam(t);callback(function(e){r&&r(e),o&&o.resolve(e)},i.value||i),WV_Private.onComplete(e)},onFailure:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),r=a.failure,o=a.deferred,i=WV_Private.parseParam(t);callback(function(e){r&&r(e),o&&o.reject(e)},i),WV_Private.onComplete(e)}},WV_Private={params:{},buildParam:function(e){return e&&"object"==typeof e?JSON.stringify(e):e||""},parseParam:function(str){if(str&&"string"==typeof str)try{obj=JSON.parse(str)}catch(e){obj=eval("("+str+")")}else obj=str||{};return obj},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+inc++},registerCall:function(e,t,a,r){t&&(callbackMap[SUCCESS_PREFIX+e]=t),a&&(callbackMap[FAILURE_PREFIX+e]=a),r&&(callbackMap[DEFERRED_PREFIX+e]=r)},unregisterCall:function(e){var t=SUCCESS_PREFIX+e,a=FAILURE_PREFIX+e,r=DEFERRED_PREFIX+e,o={success:callbackMap[t],failure:callbackMap[a],deferred:callbackMap[r]};return delete callbackMap[t],delete callbackMap[a],o.deferred&&delete callbackMap[r],o},useIframe:function(e,t){var a=IFRAME_PREFIX+e,r=iframePool.pop();r||(r=doc.createElement("iframe"),r.setAttribute("frameborder","0"),r.style.cssText="width:0;height:0;border:0;display:none;"),r.setAttribute("id",a),r.setAttribute("src",t),r.parentNode||setTimeout(function(){doc.body.appendChild(r)},5)},retrieveIframe:function(e){var t=IFRAME_PREFIX+e,a=doc.querySelector("#"+t);iframePool.length>=iframeLimit?doc.body.removeChild(a):iframePool.push(a)},callMethodByIframe:function(e,t,a,r){var o={"selfParam=1":1,sid:this.parseParam(a).sid},o=this.buildParam(o),i=LOCAL_PROTOCOL+"://"+e+":"+r+"/"+t+"?"+o;this.params[PARAM_PREFIX+r]=a,this.useIframe(r,i)},callMethodByPrompt:function(e,t,a,r){var o=LOCAL_PROTOCOL+"://"+e+":"+r+"/"+t+"?"+a,i=WV_PROTOCOL+":";this.params[PARAM_PREFIX+r]=a,window.prompt(o,i)},onComplete:function(e){isIOS&&this.retrieveIframe(e),delete this.params[PARAM_PREFIX+e]}};for(var key in WV_Core)win[s_goldlog][key]=WindVane[key]=WV_Core[key]}function addScript(e,t){var a=doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=is_https?t:e,doc.getElementsByTagName("head")[0].appendChild(a)}function addScriptFromFDC(e){var t="http://a.tbcdn.cn/s/fdc/",a="https://s.tbcdn.cn/s/fdc/";addScript(t+e,a+e)}function createIframe(e,t){var a=document.createElement("iframe");a.style.width="1px",a.style.height="1px",a.style.position="absolute",a.style.display="none",a.src=e,t&&(a.name=t);var r=document.getElementsByTagName("body")[0];return r.appendChild(a),a}function checkLS(){var e=!1;if("localStorage"in win&&null!=win.localStorage)try{localStorage.setItem("test","test"),localStorage.removeItem("test"),e=!0}catch(t){}return e}function isUseLSProxy(){if(CONFIG.DEBUG.LS_PROXY)return!0;var e=navigator.userAgent,t=e.split(" Safari/");return 2!=t.length?!1:checkLS()&&win.postMessage&&t[1].match(/[\d\.]+/)&&e.indexOf("AppleWebKit")>-1&&e.match(/\bVersion\/\d+/)&&!e.match(/\bChrome\/\d+/)&&!e.match(/TencentTraveler|QQBrowser/)&&!e.match(/UCBrowser|UCWEB/)}function useLSProxy(e){{var t="http://cdn.mmstat.com/aplus-proxy.html?v=20130115";createIframe(t,JSON.stringify(e))}win.addEventListener&&win.JSON&&win.addEventListener("message",function(e){function t(){var e=hostsname.split("."),t=e.length;return t>1?e[t-2]+"."+e[t-1]:hostsname}var a=e.data;try{a=JSON.parse(a)}catch(r){return}if(a[0]&&"cna"==a[0].k)for(var o,i,n,s=0,c=a.length;c>s;s++)o=a[s],n=o.k,i=encodeURIComponent(n)+"="+("cna"==n?o.v:encodeURIComponent(o.v))+"; domain=."+t()+"; path=/; expires="+new Date(o.t).toGMTString(),doc.cookie=i})}function makeUrl(e,t){var a=-1==e.indexOf("?")?"?":"&",r=t?isArray(t)?arr2param(t):obj2param(t):"";return r?e+a+r:e}var win=window,doc=document,time_start=(new Date).getTime(),s_aplus_queue="_ap",_k="g_tb_aplus_loaded",_launch="g_tb_aplus_launch";if(win[s_aplus_queue]||(win[s_aplus_queue]=[]),!doc.getElementsByTagName("body").length)return setTimeout(arguments.callee,50),void 0;if(!win[_k]){win[_k]=1;var js_fdc_lsproxy="//g.alicdn.com/alilog/mlog/lsproxy.js?v=20150514",CONFIG={VERSION:{DEFAULT:"2",MANUAL:9,MANUAL_TIMEOUT:7},TIME:{MANUAL_TIMEOUT:6e3},RATE:{AHOT_SAMPLING:.1},DEBUG:{AHOT:location.search.indexOf("ap-debug-ahot")>-1,LS_PROXY:location.search.indexOf("ap-debug-lsproxy")>-1}},VERSION=CONFIG.VERSION.DEFAULT,loc=location,loc_protocol=loc.protocol,is_https="https:"==loc_protocol,is_in_iframe=parent!==self,use_protocol=is_https?loc_protocol:"http:",default_ab="0.0",pathname=loc.pathname,hostsname=loc.hostname,isTerminal=getMetaTerminal(),isAhot=getMetaAhot(),tblog_beacon_base=use_protocol+"//log.mmstat.com/",hjlj_beacon_base=is_https?tblog_beacon_base:use_protocol+(isTerminal?"//wgo.mmstat.com/":"//gm.mmstat.com/"),tblog_beacon_url=tblog_beacon_base+getBeaconSrc(loc.hostname)+".gif",tblog_data=[["logtype",is_in_iframe?0:1]],tblog_extra_data=[],page_url=loc.href,loc_hash=loc.hash,page_referrer=doc.referrer,is_login_page=is_https&&(page_url.indexOf("login.taobao.com")>=0||page_url.indexOf("login.tmall.com")>=0),atta=!!doc.attachEvent,s_attachEvent="attachEvent",s_addEventListener="addEventListener",onevent=atta?s_attachEvent:s_addEventListener,s_false=!1,s_true=!0,s_plain_obj="::-plain-::",s_SPM_ATTR_NAME="data-spm",s_SPM_DATA_PROTOCOL="data-spm-protocol",s_GOLDMINER_QUEUE="goldlog_queue",refer_pv_id,pvid=makePVId(),_head_node,_meta_nodes,acookie_cna=getCookie("cna"),_microscope_data={},_microscope_data_params,_atp_beacon_data={},_atp_beacon_data_params,site_instance_id_or_shop_id,ms_data_shop_id,ms_data_instance_id,ms_data_page_id,ms_data_siteCategoryId,ms_prototype_id,wh_in_page=s_false,spm_a=win._SPM_a,spm_b=win._SPM_b,spm_protocol,spm_ab,page_global_spm_id_origin,page_global_is_wangpu,is_head_has_meta_microscope_data=s_false,goldlog,s_goldlog="goldlog",ua=navigator.userAgent,lib=win.lib||(win.lib={}),isIOS=/iPhone|iPad|iPod/i.test(ua),isAndroid=/Android/i.test(ua),isWindVane=/WindVane/i.test(ua),osVersion=ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),wvVersion=ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),hasOwnProperty=Object.prototype.hasOwnProperty,WindVane={},WindVane_Native=win.WindVane_Native,callbackMap={},inc=1,iframePool=[],iframeLimit=3,LOCAL_PROTOCOL="hybrid",WV_PROTOCOL="wv_hybrid",IFRAME_PREFIX="iframe_",SUCCESS_PREFIX="suc_",FAILURE_PREFIX="err_",DEFERRED_PREFIX="defer_",PARAM_PREFIX="param_",waitingMeta=getMetaWaiting(),hasWaitingMeta=1==waitingMeta;page_referrer=function(){var e,t="wm_referrer",a="refer_pv_id",r=win.name||"",o=param2obj(r),i=o[t],n=o.wm_old_value;return e=doc.referrer||tryToDecodeURIComponent(i),refer_pv_id=o[a],is_login_page||(isUnDefined(n)?isUnDefined(i)||(win.name=r.replace(/&?\bwm_referrer=[^&]*/g,"")):win.name=tryToDecodeURIComponent(n)),e}(),osVersion=osVersion?(osVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",wvVersion=wvVersion?(wvVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",goldlog={version:VERSION,pvid:pvid,referrer:page_referrer,_d:{},_microscope_data:_microscope_data,on:addEventListener,DOMReady:onDOMReady,getCookie:getCookie,tryToGetAttribute:tryToGetAttribute,tryToGetHref:tryToGetHref,isNumber:isNumber,send:function(e,t){var a=new Image,r="_img_"+Math.random(),o=makeUrl(e,t);return win[r]=a,a.onload=a.onerror=function(){win[r]=null},a.src=o,a=null,o},emit:function(e,t){var a,r="ued.1.1.2?type=9";return isArray(t)?a=[["_gm:id",e]].concat(t):(a=objSimpleClone(t),a["_gm:id"]=e),goldlog.send(hjlj_beacon_base+r,a)},trace:function(e,t,a,r){goldlog.record(e,t,a,r)},record:function(e,t,a,r){r=arguments[3]||"";var o,i,n="?",s=s_false,c="",l=(spm_ab||"0.0")+".0.0."+pvid,_="http://ac.mmstat.com/";if("ac"==e)o=_+"1.gif",s=isStartWith(r,"A")&&r.substr(1)==makeChkSum(e);else if(isStartWith(e,"ac-"))o=_+e.substr(3),s=isStartWith(r,"A")&&r.substr(1)==makeChkSum(e);else if(isStartWith(e,"/"))s=isStartWith(r,"H")&&r.substr(1)==makeChkSum(e),o=hjlj_beacon_base+e.substr(1),i=s_true,c+="&spm-cnt="+l;else{if(!isEndWith(e,".gif"))return s_false;o=tblog_beacon_base+e}if(!s&&"%"!=r&&makeChkSum(page_url)!=r)return s_false;if(o+=n+"cache="+makeCacheNum()+"&gmkey="+encodeURIComponent(t)+"&gokey="+encodeURIComponent(a)+"&cna="+acookie_cna+"&isbeta="+VERSION+c,i&&(o+="&logtype=2"),isWindVane&&isTerminal){var d,m={},p={gmkey:t,gokey:a,isbeta:VERSION},u=isOnePage(),g=u.split("|"),f=g[0],h=g[1]?g[1]:"";try{d=JSON.stringify(p),"{}"==d&&(d="")}catch(b){d=""}m.functype="2101",m.logkey=e,m.logkeyargs=d,m.urlpagename=h,m.url=loc.href,m.cna=acookie_cna||"",m.extendargs="",m.isonepage=f,WindVane.call("WVTBUserTrack","toUT",m)}return isUseLSProxy()?useLSProxy({url:o,js:js_fdc_lsproxy,referrer:loc.href}):goldlog.send(o)},launch:function(e){if(!win[_launch]){win[_launch]=s_true;var t,a,r=VERSION;hasWaitingMeta&&(r=CONFIG.VERSION.MANUAL,e&&e.isWait&&(r=CONFIG.VERSION.MANUAL_TIMEOUT));for(t in e)e.hasOwnProperty(t)&&(a=e[t])&&tblog_data.push([t,a]);tblog_data.push(["isbeta",r]),tblog_data.push([mkPlainKey(),getExParams()]),tblog_data=tblog_data.concat(tblog_extra_data),win.g_aplus_pv_req=tblogSend(tblog_beacon_url,tblog_data)}}},win[s_goldlog]=goldlog,win.goldminer={record:goldlog.emit},win[s_GOLDMINER_QUEUE]&&isArray(win[s_GOLDMINER_QUEUE])||(win[s_GOLDMINER_QUEUE]=[]),isTerminal||init_watchGoldlogQueue(),init_getMetaMicroscopeData(),init_getGlobalSPMId(),init_aplusQueue(),init_loadScripts(),isWindVane&&isTerminal&&init_windVane(),function(){var e,t,a,r=getCookie("tracknick"),o=getCookie("thw"),i=/\btanx\.com$/.test(hostsname)?getCookie("cnaui"):"",n=getSPMFromUrl(page_url),s=getSPMFromUrl(page_referrer),c=win.ali_analytics&&win.ali_analytics.ua&&win.ali_analytics.ua.ua_info||{};if(loc_hash&&0==loc_hash.indexOf("#")&&(loc_hash=loc_hash.substr(1)),!is_in_iframe||atp_inIframeException()){("3"==ms_prototype_id||"5"==ms_prototype_id)&&(t=getCookie("t"),a=t?wp_bucketId(t,20):""),e=[[mkPlainKey(),"title="+escape(doc.title)],["pre",page_referrer],["cache",makeCacheNum()],["scr",screen.width+"x"+screen.height]],acookie_cna&&e.push([mkPlainKey(),"cna="+acookie_cna]),r&&e.push([mkPlainKey(),"nick="+r]),ifAdd(e,[["wm_pageid",ms_data_page_id],["wm_prototypeid",ms_prototype_id],["wm_sid",ms_data_shop_id],["spm-url",n],["spm-pre",s],["cnaui",i]]),e.push(["spm-cnt",(spm_ab||"0.0")+".0.0."+pvid]),tblog_data=tblog_data.concat(e),ifAdd(tblog_extra_data,[["thw",o],["bucket_id",a],["urlokey",loc_hash],["wm_instanceid",ms_data_instance_id],["p",c.p],["o",c.o],["b",c.b],["s",c.s],["w",c.w],["mx",c.mx]]),hasWaitingMeta?setTimeout(function(){goldlog.launch({isWait:!0})},CONFIG.TIME.MANUAL_TIMEOUT):goldlog.launch();var l=spm_ab.split(".")[0];is_in_iframe||isTerminal||"1.7274553"!=spm_ab&&"2013"!=l&&"a220o"!=l||createIframe("http://cookiemapping.wrating.com/link.html")}if(is_in_iframe){getMetaAtpData();var _,d=_atp_beacon_data.on,m="1"==d?"http://ac.mmstat.com/y.gif":tblog_beacon_url,m=isContain(hostsname,"wrating.com")?tblog_beacon_url:m;"1"!=d&&"2"!=d||!(_=_atp_beacon_data.chksum)||_!==makeChkSum(page_url).toString()||tblogSend(m,tblog_data)}is_login_page?recordValInWindowName():addEventListener(win,"beforeunload",function(){recordValInWindowName()})}();var time_end=(new Date).getTime();setTimeout(function(){Math.random()>1e-4||goldlog.emit("global_sample",{type:"timer",t:time_end-time_start})},1)}}();