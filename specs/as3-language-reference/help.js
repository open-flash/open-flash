function closePopup(){window.close()
}function scrollToNameAnchor(){var a=window.location.href;
var b=a.split("nameAnchor=");
if(b[1]!=null){document.location=b[0]+"#"+b[1]
}}function showHideImage(d,b){var a=document.getElementById(d);
var c=b;
if(a.className=="largeImage"){a.src="images/"+d+".png";
a.className="smallImage";
b.className="showImageLink";
b.href="#";
b.firstChild.nodeValue=terms_AHV_LARGE_GRAPHIC;
window.focus()
}else{a.src="images/"+d+"_popup.png";
a.className="largeImage";
b.className="hideImageLink";
b.href="#";
b.firstChild.nodeValue=terms_AHV_SMALL_GRAPHIC;
window.focus()
}}function KeyCheck(f,b,a){var c=(window.event)?event.keyCode:f.keyCode;
var d=YAHOO.widget.TreeView.getNode(b,a);
switch(c){case 37:d.collapse();
break;
case 39:d.expand();
break
}}function toggleLayer(e){if(document.getElementById){var d=document.getElementById(e);
var a=d.previousSibling.firstChild.firstChild;
a.setAttribute("src","images/on.gif");
var c=d.style;
c.display=c.display?"":"block";
if(d.previousSibling.className==="topictitle3"){d.previousSibling.className="topictitle3off";
a.setAttribute("src","images/on.gif")
}else{if(d.previousSibling.className==="topictitle3off"){d.previousSibling.className="topictitle3";
a.setAttribute("src","images/off.gif")
}}}else{if(document.all){var b=document.all[e].style;
b.display=b.display?"":"block"
}}}function addBookmark(a,b){parent.navigation.flashProxy.call("addBookmark",a,b)
}var upperAsciiXlatTbl=new Array(223,"ss",230,"ae",198,"ae",156,"oe",140,"oe",240,"eth",208,"eth",141,"y",159,"y");
var maxNumberOfShownSearchHits=30;
var showInputStringAlerts=0;
var navigationCookie="";
function cookiesNotEnabled(){return true
}function getArgs(){var b=new Object();
var f=window.location.search.substring(1);
if(f.length>0){var e=f.split("&");
for(var c=0;
c<e.length;
c++){var g=e[c].indexOf("=");
if(g==-1){continue
}var a=e[c].substring(0,g);
var d=e[c].substring(g+1);
b[a]=unescape(d)
}}else{b[name]=false
}return b
}function getCookieVal(b){var a=document.cookie.indexOf(";",b);
if(a==-1){a=document.cookie.length
}return unescape(document.cookie.substring(b,a))
}function GetCookie(f){var b=f+"=";
var h=b.length;
var a=document.cookie.length;
var g=0;
if(cookiesNotEnabled()){var e=getArgs();
if(e[f]!==false){return e[f]
}else{if(typeof(localStorage)!="undefined"){var c=localStorage.getItem(f);
if(c!=null){return c
}}}}else{while(g<a){var d=g+h;
if(document.cookie.substring(g,d)==b){return getCookieVal(d)
}g=document.cookie.indexOf(" ",g)+1;
if(g==0){break
}}return null
}}function getTopCookieVal(b){var a=document.cookie.indexOf(";",b);
if(a==-1){a=document.cookie.length
}return unescape(document.cookie.substring(b,a))
}function GetTopCookie(d){var b=d+"=";
var f=b.length;
var a=document.cookie.length;
var e=0;
while(e<a){var c=e+f;
if(document.cookie.substring(e,c)==b){return getTopCookieVal(c)
}e=document.cookie.indexOf(" ",e)+1;
if(e==0){break
}}return null
}function SetCookie(d,a,b){var c=new Date();
c.setTime(c.getTime()+b*60*1000);
document.cookie=d+"="+a+";expires="+c.toGMTString();
if(typeof(localStorage)!="undefined"){localStorage.setItem(d,a)
}}function getContentCookie(){var a=GetCookie("content");
document.cookie="content=";
if((a!=null)&&(a.indexOf("htm")!=-1)){document.cookie="content=";
document.cookie="histR="+a;
location.replace(a)
}}function getNavigationCookie(){navigationCookie=GetCookie("navigation");
document.cookie="navigation=";
if((navigationCookie!=null)&&(navigationCookie.indexOf("htm")!=-1)){document.cookie="navigation=";
document.cookie="histL="+navigationCookie;
location.replace(navigationCookie)
}}function handleContext(a){}function lastNodeOf(d){var c=""+d;
var g=c.indexOf("?");
if(g!==-1){var b=c.substring(0,g);
var a=b.split("/");
return a[a.length-1]
}else{var f=c.lastIndexOf("/");
if((f!=-1)&&(f+1!=c.length)){return c.substr(f+1)
}else{return c
}}}function frameBuster(){}function bubbleSortWithShadow(d,c){var e;
for(var f=1;
f<d.length;
f++){for(var g=0;
g<f;
g++){if(d[g]<d[f]){e=d[f];
d[f]=d[g];
d[g]=e;
e=c[f];
c[f]=c[g];
c[g]=e
}}}}function buildHtmlResultsStr(){var d,c;
c=(matchesArrIndices.length>maxNumberOfShownSearchHits)?maxNumberOfShownSearchHits:matchesArrIndices.length;
for(var b=0,a=new Array();
b<c;
b++){a[a.length]=buildResultsStrOneLine(matchesArrIndices[b],matchesArrHits[b])
}d="<ol>";
for(var b=0;
b<a.length;
b++){d=d+a[b]
}d=d+"</ol>";
return d
}function buildResultsStrOneLine(d,c){var e;
e='<li class="searchresults"><a href="'+fileArr[d]+'.html">';
e+=titleArr[d]+"</a></li>";
return e
}function checkForHits(){var b=new Array();
var c=new Array();
c=searchTerm.split(" ");
for(var a=0;
a<c.length;
a++){if(c[a].length){b[b.length]=c[a]
}}matchesArrHits=new Array();
matchesArrIndices=new Array();
maskArr=new Array();
hitsArr=new Array();
for(var a=0;
a<fileArr.length;
a++){maskArr[maskArr.length]=1;
hitsArr[hitsArr.length]=0
}for(var a=0;
a<b.length;
a++){if(!checkForHitsWordAgainstPages(b[a])){return
}for(var d=0;
d<hitsArr.length;
d++){if(hitsArr[d]==0){maskArr[d]=0
}else{if(maskArr[d]!=0){maskArr[d]+=hitsArr[d]
}}}}for(var a=0;
a<maskArr.length;
a++){if(maskArr[a]){matchesArrHits[matchesArrHits.length]=maskArr[a];
matchesArrIndices[matchesArrIndices.length]=a
}}if(matchesArrIndices.length){bubbleSortWithShadow(matchesArrHits,matchesArrIndices)
}}function checkForHitsWordAgainstPages(a){var c=0;
if(showInputStringAlerts){alert("Length of sc2: "+sc2.length)
}for(var b=0;
b<sc2.length;
b++){glob_title=sc1[b];
glob_phrase=sc2[b];
if(maskArr[b]){if(isDblByte){hitsArr[b]=checkForHitsWordAgainstTitleAndLine2(a,b)
}else{hitsArr[b]=checkForHitsWordAgainstTitleAndLine(a,b)
}if(hitsArr[b]){c=1
}}}return c
}function checkForHitsWordAgainstTitleAndLine(a,e){var f;
var c=0;
var g=0;
a=filterTheChars(a);
var d=new RegExp(a,"i");
f=new Array();
if(glob_title!=null){f=glob_title.split(" ")
}for(var b=0;
b<f.length;
b++){if(a==f[b]){c+=100;
break
}}f=new Array();
if(glob_phrase!=null){f=glob_phrase.split(" ")
}if(d.test(glob_phrase)){for(var b=0;
b<f.length;
b++){if(a==f[b]){g+=getInstanceCount(e,b);
break
}}}return c+g
}function checkForHitsWordAgainstTitleAndLine2(a,c){var b=0;
var d=0;
if(glob_title.indexOf(a)!=-1){b=100
}d=indexesOf(glob_phrase,a);
return b+d
}function checkTheInputString(){var a=new Array();
var c=new Array();
var e=0;
var g=/\d\D/;
var d=/\D\d/;
handleWhitespaceRemoval();
searchTerm=searchTerm.replace(/(%20)+/g," ");
searchTerm=searchTerm.toLowerCase();
searchTerm=filterTheChars(searchTerm);
handleWhitespaceRemoval();
if(searchTerm.length){c=searchTerm.split(" ",100);
if(showInputStringAlerts){alert("size of tempArr: "+c.length)
}for(var b=0;
b<c.length;
b++){if(c[b].charCodeAt(0)==46){}if(c[b].charCodeAt(c[b].length-1)==46){c[b]=c[b].substr(0,c[b].length-1)
}}for(var b=0;
b<c.length;
b++){var f=c[b];
if(showInputStringAlerts){alert("Checking word: "+f)
}if(!sw[f]){if(f.length<2){e=1
}else{if((f.length>2)||(g.test(f)||d.test(f))){a[a.length]=c[b]
}else{e=1
}}}else{e=1
}}searchTerm="";
for(var b=0;
b<a.length;
b++){searchTerm=searchTerm+a[b]+" "
}handleWhitespaceRemoval();
if(showInputStringAlerts){alert("FINAL SEARCH TERM: *"+searchTerm+"*")
}if(e&&!searchTerm.length){return MSG_stopAndShortWords
}srch_input_massaged=searchTerm;
return""
}else{if(!searchTermComp.length){return MSG_noSearchTermEntered
}else{return MSG_noResultFound
}}}function checkTheInputString3(){var a=new Array();
var c=new Array();
var e=0;
var g=/\d\D/;
var d=/\D\d/;
handleWhitespaceRemoval();
searchTerm=searchTerm.toLowerCase();
searchTerm=filterTheChars(searchTerm);
handleWhitespaceRemoval();
if(searchTerm.length){c=searchTerm.split(" ",100);
if(showInputStringAlerts){alert("size of tempArr: "+c.length)
}for(var b=0;
b<c.length;
b++){if(c[b].charCodeAt(0)==46){}if(c[b].charCodeAt(c[b].length-1)==46){c[b]=c[b].substr(0,c[b].length-1)
}}for(var b=0;
b<c.length;
b++){var f=c[b];
if(showInputStringAlerts){alert("Checking word: "+f)
}if(!sw[f]){if(f.length<2){e=1
}else{if((f.length>2)||(g.test(f)||d.test(f))){a[a.length]=c[b]
}else{e=1
}}}else{e=1
}}searchTerm="";
for(var b=0;
b<a.length;
b++){searchTerm=searchTerm+a[b]+" "
}handleWhitespaceRemoval();
if(showInputStringAlerts){alert("FINAL SEARCH TERM: *"+searchTerm+"*")
}if(e&&!searchTerm.length){return MSG_stopAndShortWords
}srch_input_massaged=searchTerm;
return""
}else{return MSG_noSearchTermEntered
}}function checkTheInputString2(){var a=new Array();
var c=new Array();
var f=0;
var h=/\d\D/;
var e=/\D\d/;
var d=/[^\x00-\xff]/g;
handleWhitespaceRemoval();
searchTerm=searchTerm.replace(/(%20)+/g," ");
searchTerm=searchTerm.toLowerCase();
searchTerm=filterTheChars(searchTerm);
searchTerm=searchTerm.replace(new RegExp(String.fromCharCode(12290),"g")," ");
handleWhitespaceRemoval();
if(searchTerm.length){c=searchTerm.split(" ",100);
if(showInputStringAlerts){alert("size of tempArr: "+c.length)
}for(var b=0;
b<c.length;
b++){if(c[b].charCodeAt(0)==46){}if(c[b].charCodeAt(c[b].length-1)==46){c[b]=c[b].substr(0,c[b].length-1)
}}for(var b=0;
b<c.length;
b++){var g=c[b];
if(showInputStringAlerts){alert("Checking word: "+g)
}if(!sw[g]){if(g.length<2){f=1
}else{if((g.length>2)||(h.test(g)||e.test(g))||d.test(g)){a[a.length]=c[b]
}else{f=1
}}}else{f=1
}}searchTerm="";
for(var b=0;
b<a.length;
b++){searchTerm=searchTerm+a[b]+" "
}handleWhitespaceRemoval();
if(showInputStringAlerts){alert("FINAL SEARCH TERM: *"+searchTerm+"*")
}if(f&&!searchTerm.length){return MSG_stopAndShortWords
}srch_input_massaged=searchTerm;
return""
}else{return MSG_noSearchTermEntered
}}function doIEsearch(){var a="";
document.forms[0].sh_term.value=srch_input_verbatim;
if(srch_message.length){document.getElementById("results").innerHTML=srch_message;
srch_message=""
}else{if(srch_1_shot){srch_1_shot=0;
searchTerm=srch_input_massaged;
checkForHits();
if(matchesArrIndices.length){var b=window.location.href;
if(b.indexOf("chcSearch.html")==-1){a='<div class="form">'+MSG_pagesContaining+"<strong>"+srch_input_massaged+"</strong></div><br /><br />\n"
}document.getElementById("results").innerHTML=a+buildHtmlResultsStr()
}else{document.getElementById("results").innerHTML=MSG_noPagesContain+"<strong>"+srch_input_massaged+"</strong><br /><br />"
}}}srch_input_verbatim=""
}function getInstanceCount(d,a){var b=instances[d];
var c=b.substr(a,1);
return parseInt(c)
}function handleWhitespaceRemoval(){var d=/^\s/;
var c=/\s$/;
var b=/\s\s/;
var a;
while(true){a=searchTerm.replace(d,"");
if(a==searchTerm){break
}searchTerm=a
}while(true){a=searchTerm.replace(c,"");
if(a==searchTerm){break
}searchTerm=a
}while(searchTerm.search(b)!=-1){a=searchTerm.replace(b," ");
searchTerm=a
}}function isAcceptableChar(c){var b=new Array(32,46,95);
for(var a=0;
a<b.length;
a++){if(c==b[a]){return true
}}return false
}function indexesOf(d,c){var b=0;
var a=-1;
var e=-1;
while(b!=-1){b=d.indexOf(c,e+1);
a+=1;
e=b
}return a
}function filterTheChars(a){var g="",d;
var f,c,e;
var b;
for(b=0;
b<a.length;
b++){f=a.substr(b,1);
c=f.charCodeAt(0);
if((c>=192)&&(c<=221)){c=c+32;
e=ASCII_to_char(c)
}else{if(withinAcceptableRanges(c)||isAcceptableChar(c)){e=f
}else{d=isLigatureChar(c);
if(d.length){e=f
}else{e=""
}}}g+=e
}return g
}function isLigatureChar(d){var c,b,a="";
for(c=0;
c<upperAsciiXlatTbl.length;
c+=2){b=upperAsciiXlatTbl[c];
if(b==d){a=upperAsciiXlatTbl[c+1];
break
}}return a
}function respondToSearchButton(){var a;
document.getElementById("results").innerHTML="";
srch_input_verbatim=document.forms[0].sh_term.value;
searchTerm=document.forms[0].sh_term.value;
searchTermComp=searchTerm;
if(isDblByte){a=checkTheInputString2()
}else{if(isT4){a=checkTheInputString3()
}else{a=checkTheInputString()
}}srch_message=a;
srch_1_shot=srch_message.length?0:1;
doIEsearch()
}function respondToSearchLoad(){var a=GetCookie("externalQuery");
if(a==null){a=GetCookie("sh_term")
}if(a!=null){searchTermComp=a;
var b;
srch_input_verbatim=a;
searchTerm=a;
if(isDblByte){b=checkTheInputString2()
}else{b=checkTheInputString()
}srch_message=b;
srch_1_shot=srch_message.length?0:1;
doIEsearch()
}}function strReplace(f,e,c){var b=0;
var a=f.indexOf(e,b);
var d="";
while(a!=-1){d=d+f.substring(b,a)+c;
b=a+1;
a=f.indexOf(e,b)
}if(!d.length){return f
}else{return d+f.substring(b,f.length)
}}function withinAcceptableRanges(d){var c=new Array("48-57","65-90","97-122","224-229","231-239","241-246","248-253","255-255");
if(d>255){return true
}for(var b=0;
b<c.length;
b++){var a=new Array();
a=c[b].split("-");
if((d>=a[0])&&(d<=a[1])){return true
}}return false
}function ASCII_to_char(b){var c="";
var a=parseInt(b);
a=unescape("%"+a.toString(16));
c+=a;
return unescape(c)
}var agt=navigator.userAgent.toLowerCase();
var use_ie_behavior=false;
var use_ie_6_behavior=false;
var use_chc_behavior=false;
if(agt.indexOf("msie")!=-1){use_ie_behavior=true
}if((agt.indexOf("msie 5")!=-1)||(agt.indexOf("msie 6")!=-1)){use_ie_6_behavior=true
}if((agt.indexOf("adobe help viewer 2")!=-1||agt.indexOf("community help client")!=-1)){use_chc_behavior=true;
document.styleSheets[0].addRule(".searchForm","display:none");
document.styleSheets[0].addRule(".searchFormION","display:none")
}var Url={encode:function(a){return escape(this._utf8_encode(a))
},decode:function(a){return this._utf8_decode(unescape(a))
},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");
var a="";
for(var e=0;
e<b.length;
e++){var d=b.charCodeAt(e);
if(d<128){a+=String.fromCharCode(d)
}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);
a+=String.fromCharCode((d&63)|128)
}else{a+=String.fromCharCode((d>>12)|224);
a+=String.fromCharCode(((d>>6)&63)|128);
a+=String.fromCharCode((d&63)|128)
}}}return a
},_utf8_decode:function(a){var b="";
var d=0;
var e=c1=c2=0;
while(d<a.length){e=a.charCodeAt(d);
if(e<128){b+=String.fromCharCode(e);
d++
}else{if((e>191)&&(e<224)){c2=a.charCodeAt(d+1);
b+=String.fromCharCode(((e&31)<<6)|(c2&63));
d+=2
}else{c2=a.charCodeAt(d+1);
c3=a.charCodeAt(d+2);
b+=String.fromCharCode(((e&15)<<12)|((c2&63)<<6)|(c3&63));
d+=3
}}}return b
}};