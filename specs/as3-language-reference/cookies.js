function setCookie(b,d,a,f,c,e){document.cookie=b+"="+escape(d)+((a)?"; expires="+a.toGMTString():"")+((f)?"; path="+f:"")+((c)?"; domain="+c:"")+((e)?"; secure":"")
}function getCookie(c){var b=document.cookie;
var e=c+"=";
var d=b.indexOf("; "+e);
if(d==-1){d=b.indexOf(e);
if(d!=0){return null
}}else{d+=2
}var a=document.cookie.indexOf(";",d);
if(a==-1){a=b.length
}return unescape(b.substring(d+e.length,a))
}function deleteCookie(a,c,b){if(getCookie(a)){document.cookie=a+"="+((c)?"; path="+c:"")+((b)?"; domain="+b:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT"
}};