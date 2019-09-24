var ECLIPSE_FRAME_NAME="ContentViewFrame";
var eclipseBuild=false;
var liveDocsBaseUrl="http://livedocs.adobe.com/flex/3";
var liveDocsBookName="langref";
var terms_HELPCFG="PlatformASLR.helpcfg";
var splitterActiveFlag=false;
var splitterObj=false;
var h_splitterActiveFlag=false;
var h_splitterObj=false;
var MIN_LEFT=60;
var MIN_RIGHT=200;
var MIN_TOP=60;
var MIN_BOTTOM=60;
var use_robohelp_behavior=false;
var agt=navigator.userAgent.toLowerCase();
function HideEmptyRows(){var d=document.getElementsByName("rowLink");
var b;
var c=document.getElementById("tbl1");
var a=c.rows.length;
for(b=a-1;
b!=0;
b--){if(c.rows[b].getAttribute("name")=="rowLink"){if(c.rows[b].getElementsByTagName("td")[0].innerHTML.replace(/^\s+|\s+$/g,"")==""){c.deleteRow(b+1);
c.deleteRow(b)
}}}}function alternate(f){HideEmptyRows();
if(document.getElementsByTagName){var d=document.getElementById(f);
var e=d.getElementsByTagName("tr");
var c=e.length-1;
var b="odd";
var a=0*1;
for(i=1;
i<e.length;
i++){if(b=="odd"){if((a*1)<(i*1)&&i<e.length-3){e[i].className="even";
a=1*i;
if((i+1)<=e.length&&i<e.length-3){a=1*(i+1);
e[a].className="even";
b="even"
}}}else{if((a*1)<(i*1)&&i<e.length-3){e[i].className="odd";
a=1*i;
if(i!=1&&(i+1)<=e.length&&i<e.length-3){a=1*(i+1);
e[a].className="odd";
b="odd"
}}}}}}function noFrms(){var d=parent.frames.classFrame.location.href.substring(window.location.href.lastIndexOf("/")+1);
if(d=="search.html"){var c=window.top.location.href.split("?");
var a;
if(c[1]!=null){c=c[1].split("#");
var b=c[1];
c=c[0].split("&amp;");
a=window.top.location.href.substring(0,window.top.location.href.lastIndexOf("?")+1);
a=a.substring(0,a.lastIndexOf("/")+1)+"search.html#"+b
}else{c[0]="index.html";
a=window.top.location.href.substring(0,window.top.location.href.lastIndexOf("/")+1)+c[0]
}top.location=a
}else{top.location=top.classFrame.location
}}function searchfunctionsubmit(b){var a=document.getElementById("search-livedocs").value;
window.location=baseRef+"search.html###"+a
}function submitStandAloneSearchValue(){var a=document.getElementById("search-livedocs").value;
loadClassFrame("search.html?search="+a);
document.getElementById("subTitle").childNodes.item(0).data="Search Results";
return false
}function submitValue(g,e,d,c,f){var g=g;
var a=document.getElementById("search-livedocs").value;
g=encodeURIComponent(encodeURIComponent(g));
var b=/\./;
if(b.test(g)){g=g.replace(b,"%252E")
}if(document.getElementById("checkBoxId").checked){top.location.href="http://"+e+"?q="+escapeSpecialChars(a)+"&loc="+f+"&hl="+f+"&lbl="+d+"&go=Search&self=1&site="+c
}else{top.location.href="http://"+e+"?q="+escapeSpecialChars(a)+"&loc="+f+"&hl="+f+"&lbl="+d+"&go=Search&self=1"
}document.getElementById("subTitle").childNodes.item(0).data="";
return false
}function escapeSpecialChars(a){a=a.replace(/%/g,"%25");
a=a.replace(/!/g,"%21");
a=a.replace(/@/g,"%40");
a=a.replace(/#/g,"%23");
a=a.replace(/\$/g,"%24");
a=a.replace(/&/g,"%26");
a=a.replace(/\(/g,"%28");
a=a.replace(/\)/g,"%29");
a=a.replace(/\+/g,"%2B");
a=a.replace(/\[/g,"%5B");
a=a.replace(/\]/g,"%5D");
a=a.replace(/:/g,"%3A");
a=a.replace(/;/g,"%3B");
a=a.replace(/'/g,"%27");
a=a.replace(/\//g,"%2F");
a=a.replace(/\\/g,"%5C");
a=a.replace(/,/g,"%2C");
a=a.replace(/\s+/g,"+");
return a
}function addIonComments(b){var d=a();
function a(){var o="en-us";
var n=document.all?document.all.tags("meta"):document.getElementsByTagName?document.getElementsByTagName("meta"):new Array();
var g=new Array();
var k=0;
for(var e=0;
e<n.length;
e++){if(n[e].name=="lang"){o=n[e].content;
break
}}var h=/(..)-(..)/;
if(h.test(o)){var f=o.replace(h,"$1");
var l=o.replace(h,"$2");
o=f+"_"+l.toUpperCase()
}return o
}var c="ionComHere";
ionComAddLoadEvent(function(){var e=encodeURIComponent(window.location);
var f=e.replace(new RegExp(/%23(.*)/),"");
ionComments.setup(f,d,c,{siteArea:"help",productLabel:+b})
})
}function gotoHome(a){var b=window.location.href;
var c=b.replace(/title-bar\.html.*/,a);
if(c!=null){parent.top.location=c
}}function findObject(a){if(document.getElementById){return document.getElementById(a)
}if(document.all){return document.all[a]
}}function isEclipse(){return eclipseBuild
}function configPage(){var g=document.location.href.toString();
parameter_index=g.lastIndexOf("?");
var a="";
if(parameter_index!=-1){a=g.substring(parameter_index+1,g.length)
}if(a.indexOf("#")!=-1){a=a.replace(new RegExp(/#/),"%23")
}else{if(a.indexOf("%23")!=-1){a=a.replace(new RegExp(/%23/),"#")
}}setRowColorsInitial(true,"Property");
setRowColorsInitial(true,"Method");
setRowColorsInitial(true,"ProtectedMethod");
setRowColorsInitial(true,"Event");
setRowColorsInitial(true,"Style");
setRowColorsInitial(true,"SkinPart");
setRowColorsInitial(true,"SkinState");
setRowColorsInitial(true,"Constant");
if(isEclipse()){if(window.name!="classFrame"){var c=window.location.href.indexOf("?")!=-1?window.location.href.substring(0,window.location.href.indexOf("?")):window.location.href;
var b="doc/";
c=c.substring(c.indexOf(b)+b.length);
if(window.location.search!=""){c+=("#"+window.location.search.substring(1))
}window.location.replace(baseRef+"frames.html?"+c);
return
}else{setStyle(".eclipseBody","display","block");
if(window.location.hash!=""){window.location.hash=window.location.hash.substring(1)
}}}try{getFilterContent(filter_file,a)
}catch(f){}if(agt.indexOf("adobe help viewer 2")!=-1||agt.indexOf("community help client")!=-1){use_robohelp_behavior=true;
document.getElementById("gsa").style.display="none"
}}function loadFrames(d,b){var c=findObject("classListFrame");
if(c!=null&&classListFrameContent!=""){c.document.location.href=classListFrameContent
}if(isEclipse()){var a=findObject(ECLIPSE_FRAME_NAME);
if(a!=null&&d!=""){a.document.location.href=d
}}else{var e=findObject("classFrame");
if(e!=null&&classFrameContent!=""){e.document.location.href=classFrameContent
}}}function showTitle(a){if(!isEclipse()){top.document.title=a
}}function loadClassFrame(a){if(parent.frames.classFrame!=null){parent.frames.classFrame.location=a
}else{if(parent.frames.packageFrame!=null){if(parent.frames.packageFrame.frames.classFrame!=null){parent.frames.packageFrame.frames.classFrame.location=a
}}}}function loadClassListFrame(a){if(parent.frames.classListFrame!=null){parent.frames.classListFrame.location=a
}else{if(parent.frames.packageFrame!=null){if(parent.frames.packageFrame.frames.classListFrame!=null){parent.frames.packageFrame.frames.classListFrame.location=a
}}}}function loadPage(a){document.location.href=baseRef+a
}function gotoLiveDocs(b,d,a){if(a=="en-us"||a=="en_us"||a=="en_US"){a=""
}else{a="_"+a.substring(3)
}var c=liveDocsBaseUrl+a+"/"+liveDocsBookName+"/frames.html?"+b;
if(d!=null&&d!=""){c+=("&"+d)
}window.open(c,"mm_livedocs","menubar=1,toolbar=1,status=1,scrollbars=1,resizable=yes")
}function findTitleTableObject(a){if(isEclipse()){return parent.titlebar.document.getElementById(a)
}else{if(top.titlebar){return top.titlebar.document.getElementById(a)
}else{return document.getElementById(a)
}}}function titleBar_setSubTitle(a){if(isEclipse()||top.titlebar){findTitleTableObject("subTitle").childNodes.item(0).data=a
}}function titleBar_setSubNav(r,k,a,o,b,q,c,g,e,m,d,p,n,l,f,h){findTitleTableObject("propertiesLink").style.display=k?"inline":"none";
findTitleTableObject("propertiesBar").style.display=(k&&(p||g||e||n||c||a||q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("packagePropertiesLink").style.display=p?"inline":"none";
findTitleTableObject("packagePropertiesBar").style.display=(p&&(g||e||n||c||a||r||q||d||l||f||h||m))?"inline":"none";
findTitleTableObject("constructorLink").style.display=g?"inline":"none";
findTitleTableObject("constructorBar").style.display=(g&&(e||n||c||a||q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("methodsLink").style.display=e?"inline":"none";
findTitleTableObject("methodsBar").style.display=(e&&(n||c||a||q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("packageFunctionsLink").style.display=n?"inline":"none";
findTitleTableObject("packageFunctionsBar").style.display=(n&&(c||a||q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("eventsLink").style.display=c?"inline":"none";
findTitleTableObject("eventsBar").style.display=(c&&(a||q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("stylesLink").style.display=a?"inline":"none";
findTitleTableObject("stylesBar").style.display=(a&&(q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("SkinPartLink").style.display=o?"inline":"none";
findTitleTableObject("SkinPartBar").style.display=(o&&(b||q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("SkinStateLink").style.display=b?"inline":"none";
findTitleTableObject("SkinStateBar").style.display=(b&&(q||r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("effectsLink").style.display=q?"inline":"none";
findTitleTableObject("effectsBar").style.display=(q&&(r||d||l||f||h||m))?"inline":"none";
findTitleTableObject("constantsLink").style.display=r?"inline":"none";
findTitleTableObject("constantsBar").style.display=(r&&(d||l||f||h||m))?"inline":"none";
findTitleTableObject("packageConstantsLink").style.display=d?"inline":"none";
findTitleTableObject("packageConstantsBar").style.display=(d&&(l||f||h||m))?"inline":"none";
findTitleTableObject("packageMethodFunctionsLink").style.display=h?"inline":"none";
findTitleTableObject("packageMethodFunctionsBar").style.display=(h&&(f||l||m))?"inline":"none";
findTitleTableObject("interfacesLink").style.display=l?"inline":"none";
findTitleTableObject("interfacesBar").style.display=(l&&(f||m))?"inline":"none";
findTitleTableObject("classesLink").style.display=f?"inline":"none";
findTitleTableObject("classesBar").style.display=(f&&m)?"inline":"none";
findTitleTableObject("examplesLink").style.display=m?"inline":"none"
}function titleBar_gotoClassFrameAnchor(a){if(isEclipse()){parent.classFrame.location=parent.classFrame.location.toString().split("#")[0]+"#"+a
}else{location=location.toString().split("#")[0]+"#"+a
}}function setMXMLOnly(){if(getCookie("showMXML")=="false"){toggleMXMLOnly()
}}function toggleMXMLOnly(){var c=findObject("mxmlSyntax");
var b=findObject("showMxmlLink");
var a=findObject("hideMxmlLink");
if(c&&b&&a){if(c.style.display=="none"){c.style.display="block";
b.style.display="none";
a.style.display="inline";
setCookie("showMXML","true",new Date(3000,1,1,1,1),"/",document.location.domain)
}else{c.style.display="none";
b.style.display="inline";
a.style.display="none";
setCookie("showMXML","false",new Date(3000,1,1,1,1),"/",document.location.domain)
}}}function showHideInherited(){setInheritedVisible(getCookie("showInheritedConstant")=="true","Constant");
setInheritedVisible(getCookie("showInheritedProtectedConstant")=="true","ProtectedConstant");
setInheritedVisible(getCookie("showInheritedProperty")=="true","Property");
setInheritedVisible(getCookie("showInheritedProtectedProperty")=="true","ProtectedProperty");
setInheritedVisible(getCookie("showInheritedMethod")=="true","Method");
setInheritedVisible(getCookie("showInheritedProtectedMethod")=="true","ProtectedMethod");
setInheritedVisible(getCookie("showInheritedEvent")=="true","Event");
setInheritedVisible(getCookie("showInheritedcommonStyle")=="true","commonStyle");
setInheritedVisible(getCookie("showInheritedsparkStyle")=="true","sparkStyle");
setInheritedVisible(getCookie("showInheritedhaloStyle")=="true","haloStyle");
setInheritedVisible(getCookie("showInheritedmobileStyle")=="true","mobileStyle");
setInheritedVisible(getCookie("showInheritedSkinPart")=="true","SkinPart");
setInheritedVisible(getCookie("showInheritedSkinState")=="true","SkinState");
setInheritedVisible(getCookie("showInheritedEffect")=="true","Effect")
}function setInheritedVisible(a,c){try{if(document.styleSheets[0].cssRules!=undefined){var f=document.styleSheets[0].cssRules;
for(var b=0;
b<f.length;
b++){if(f[b].selectorText==".hideInherited"+c){f[b].style.display=a?"":"none"
}if(f[b].selectorText==".showInherited"+c){f[b].style.display=a?"none":""
}}}else{document.styleSheets[0].addRule(".hideInherited"+c,a?"display:inline":"display:none");
document.styleSheets[0].addRule(".showInherited"+c,a?"display:none":"display:inline")
}}catch(d){document.styleSheets[0].addRule(".hideInherited"+c,a?"display:inline":"display:none");
document.styleSheets[0].addRule(".showInherited"+c,a?"display:none":"display:inline")
}setCookie("showInherited"+c,a?"true":"false",new Date(3000,1,1,1,1),"/",document.location.domain);
setRowColors(a,c)
}function setRowColors(a,d){var f="#F2F2F2";
var c=findObject("summaryTable"+d);
if(c!=null){var e=0;
for(var b=1;
b<c.rows.length;
b++){if(c.rows[b].className.indexOf("hideInherited")==-1||a){if(c.rows[b].style.display.indexOf("none")==-1){e++;
c.rows[b].bgColor=(e%2==0)?f:"#FFFFFF"
}}}}}function setRowColorsInitial(a,d){var f="#F2F2F2";
var c=findObject("summaryTable"+d);
if(c!=null){var e=0;
for(var b=1;
b<c.rows.length;
b++){if(c.rows[b].className.indexOf("hideInherited")==-1&&!a){e++;
c.rows[b].bgColor=(e%2==0)?f:"#FFFFFF"
}}}}function setStyle(c,b,f){try{if(document.styleSheets[0].cssRules!=undefined){var g=document.styleSheets[0].cssRules;
for(var a=0;
a<g.length;
a++){if(g[a].selectorText==c){g[a].style[b]=f;
break
}}}else{document.styleSheets[0].addRule(c,b+":"+f)
}}catch(d){document.styleSheets[0].addRule(c,b+":"+f)
}}function setView(a){var b=new Date();
b.setDate(b.getDate()+90);
var c="path=/;";
if(navigator.userAgent.indexOf("Firefox")!=-1){var d=document.location.hostname;
c="path=/;domain="+d+";"
}document.cookie="asdocs_view="+a+";"+c+"expires="+b.toGMTString()
}var packagesLoaded=false,classesLoaded=false;
function loadPackagesList(d){document.getElementById("packagelist").innerHTML=d.responseText;
if(buildType!="jslr"){document.getElementById("pkg_searchbox").defaultValue=qsearchBoxLabel;
var a=navigator.userAgent.search("MSIE");
var c=getInternetExplorerVersion();
if(a>0&&c<9){document.getElementById("pkg_searchspan").style.display="none"
}else{document.getElementById("pkg_searchspan").style.display=""
}changeQSearchboxWidth()
}packagesLoaded=true;
if(isTablet()){new iScroll("packagelist")
}try{if(classesLoaded){doFilterStateChange1()
}}catch(b){}setTimeout("restorePackageListScrollTop()",1000)
}function loadClassesList(f){if(buildType=="jslr"){document.getElementById("classlist").innerHTML=f.responseText
}else{document.getElementById("classlistoutline").innerHTML=f.responseText;
document.getElementById("cls_searchbox").defaultValue=qsearchBoxLabel;
var b=navigator.userAgent.search("MSIE");
var d=getInternetExplorerVersion();
if(b>0&&d<9){document.getElementById("cls_searchspan").style.display="none"
}else{document.getElementById("cls_searchspan").style.display=""
}if(getCookie("showAllClasses")=="yes"){allClassesLoaded=true;
var a=document.getElementById("cls_searchbox");
if(a&&a.style.display!="none"&&a.value!=a.defaultValue&&a.value!=""){setTimeout("clsSearchOnKeyUp1()",500)
}}changeQSearchboxWidth()
}classesLoaded=true;
if(isTablet()){new iScroll("classlist");
contentScroller=new iScroll("content")
}try{if(packagesLoaded){doFilterStateChange1()
}}catch(c){}setTimeout("restoreClassListScrollTop()",1000)
}function loadClassesList2(b){document.getElementById("classlistWrapper").innerHTML=b.responseText;
classesLoaded=true;
if(isTablet()){new iScroll("classlist");
contentScroller=new iScroll("content")
}try{if(packagesLoaded){doFilterStateChange1()
}}catch(a){}setTimeout("restoreClassListScrollTop()",1000)
}function isTablet(){var a=window.navigator.userAgent;
if(/ipad/i.test(a)||/android/i.test(a)||/iphone/i.test(a)||/PlayBook/i.test(a)){return true
}else{return false
}}function init(){document.getElementById("maincontainer").style.display="";
setTimeout("init1()",0)
}function init1(){if(eclipseBuild){return
}restoreSplitterPos();
restoreHSplitterPos();
if(agt.indexOf("adobe help viewer 2")!=-1||agt.indexOf("community help client")!=-1){if(getCookie("asdocs_view")=="showtoc"){showHideTOC(true)
}else{showHideTOC(false)
}}else{if(getCookie("asdocs_view")=="hidetoc"){showHideTOC(false)
}else{showHideTOC(true)
}}if(getCookie("showAllClasses")==""){setCookie("showAllClasses","no",new Date(3000,1,1,1,1),"/",document.location.domain)
}if(buildType.indexOf("jslr")==-1){ajaxGet(baseRef+"package-list.html",loadPackagesList)
}if(buildType.indexOf("jslr")!=-1){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{if(location.href.indexOf("?allClasses=1")>0){if(getCookie("showAllClasses")=="yes"){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList)
}}else{if((location.href.indexOf("mxml-tag-detail.html")>0)||(baseRef=="../"&&(location.href.indexOf("/mxml/")>0))){ajaxGet(baseRef+"mxml-tags.html",loadClassesList2)
}else{if((baseRef=="")&&(location.href.indexOf("package-detail.html")>0||location.href.indexOf("package.html")>0)){ajaxGet(baseRef+"class-list.html",loadClassesList2)
}else{if(baseRef==""||baseRef=="./"){if(getCookie("showAllClasses")=="yes"){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList)
}}else{if(location.href.indexOf("package-detail")>0){ajaxGet("class-list.html",loadClassesList2)
}else{if(getCookie("showAllClassesList")=="yes"){if(getCookie("showAllClasses")=="yes"){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList)
}}else{ajaxGet("class-list.html",loadClassesList2)
}}}}}}}configPage();
scrollToNameAnchor();
if(window.location.href.indexOf("#")!=-1){document.location=window.location.href
}try{loadIonComments()
}catch(a){}}var islogEnabled=false;
var ajaxAllClassesList=false;
var logString="";
var prevURL="";
var curURL="";
var AsDocs={};
var navigationClickAction=false;
AsDocs.log=function(a){if(islogEnabled){logString+=a+"\n";
try{console.log(a)
}catch(b){}}};
function usingPushState(){if("pushState" in window.history){if($.browser.safari){var a=$.browser.version.split(".");
if(typeof(a[0])!="undefined"&&a[0]>533){return true
}else{if(typeof(a[0])!="undefined"&&a[0]==533){if(typeof(a[1])!="undefined"&&a[1]>18){return true
}else{return false
}}else{return false
}}}else{return true
}}else{return false
}}function init2(){AsDocs.log("init2");
if(eclipseBuild){return
}document.getElementById("maincontainer").style.display="";
if($.browser.msie||agt.indexOf("adobe help viewer 2")!=-1||agt.indexOf("community help client")!=-1||location.protocol.match(/file:/)){if(unescape(location.href).indexOf("#!")>0){location.href=getBaseRef()+unescape(location.href).split("#!")[1]
}else{setTimeout("init1()",0)
}}else{init3();
if(usingPushState()){$(window).bind("popstate",popHistory)
}else{$(window).hashchange(URLHashChange)
}$(document).click(function(d){clickHandler(d)
});
$(document).bind("contextmenu",function(d){rightClickHandler(d)
});
if(usingPushState()){if(unescape(location.href).indexOf("#!")>0){window.history.pushState("","",getBaseRef()+unescape(location.href).split("#!")[1]);
loadAjaxPage(location.href)
}}else{$(window).hashchange()
}if(hasLocalStorage()&&(typeof localStorage!="undefined")){localStorage.clear()
}if(unescape(location.href).match(/\?/)){var c=unescape(location.href).split("?")[0];
var b=unescape(location.href).split("?")[1];
if(b.match(/nameAnchor/i)){var a=b.split("nameAnchor=")[1];
location.href=c+"#"+a
}else{loadFilters(b);
if(b.match(/\#/)){var a=b.split("#")[1];
location.href=c+"#"+a
}else{location.href=c
}}}}copyexample()
}function init3(){AsDocs.log("init3");
restoreSplitterPos();
restoreHSplitterPos();
if(agt.indexOf("adobe help viewer 2")!=-1||agt.indexOf("community help client")!=-1){if(getCookie("asdocs_view")=="showtoc"){showHideTOC(true)
}else{showHideTOC(false)
}}else{if(getCookie("asdocs_view")=="hidetoc"){showHideTOC(false)
}else{showHideTOC(true)
}}if(getCookie("showAllClasses")==""){setCookie("showAllClasses","no",new Date(3000,1,1,1,1),"/",document.location.domain)
}ajaxGet(baseRef+"package-list.html",loadPackagesList);
try{getFilterContent(filter_file,"")
}catch(a){}if(location.href.indexOf("?allClasses=1")>0){ajaxAllClassesList=true;
if(getCookie("showAllClasses")=="yes"){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList)
}}else{if((location.href.indexOf("mxml-tag-detail.html")>0)||(baseRef=="../"&&(location.href.indexOf("/mxml/")>0))){ajaxAllClassesList=false;
ajaxGet(baseRef+"mxml-tags.html",loadClassesList2)
}else{if((baseRef=="")&&(location.href.indexOf("package-detail.html")>0||location.href.indexOf("package.html")>0)){ajaxAllClassesList=false;
ajaxGet(baseRef+"class-list.html",loadClassesList2)
}else{if(baseRef==""||baseRef=="./"){ajaxAllClassesList=true;
if(getCookie("showAllClasses")=="yes"){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList)
}}else{if(location.href.indexOf("package-detail")>0){ajaxAllClassesList=false;
ajaxGet("class-list.html",loadClassesList2)
}else{if(getCookie("showAllClassesList")=="yes"){ajaxAllClassesList=true;
if(getCookie("showAllClasses")=="yes"){ajaxGet(baseRef+"all-classes.html",loadClassesList)
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList)
}}else{ajaxAllClassesList=false;
ajaxGet("class-list.html",loadClassesList2)
}}}}}}try{if(!usingPushState()&&location.href.match(/#!/)){}else{loadIonComments()
}}catch(a){}}function copyexample(){$("div.clipcopy").css({visibility:"hidden"})
}function getBaseRef(){var b=unescape(location.href);
var d="actionscript/3/";
var a=b.indexOf(d);
if(a==-1){d="langref/";
a=b.indexOf(d)
}if(b.match(/#!/)){b=b.substring(a+d.length,b.indexOf("#!"))
}else{b=b.substring(a+d.length)
}var e="";
var c;
while((c=b.indexOf("/"))!=-1){b=b.substring(c+1);
e+="../"
}return e
}function getURLFullLocation(a){a=unescape(a);
a=a.split("#!")[0];
a=a.split("#")[0];
return a
}function getURLBaseLocation(a){a=unescape(a);
a=getURLFullLocation(a);
if(a.match(/langref\//)){a=a.substring(0,a.indexOf("langref/")+8)
}else{if(a.match(/actionscript\/3\//)){a=a.substring(0,a.indexOf("actionscript/3/")+15)
}}return a
}function getAjaxFullFragment(a){a=unescape(a);
var b=a.split("#!").length>1?a.split("#!")[1]:"";
b=b.split("#")[0];
return b
}function getAjaxBaseFragment(a){a=unescape(a);
var b=getAjaxFullFragment(a);
b=b.substring(0,b.lastIndexOf("/")+1);
return b
}function getLangrefFullFragment(a){a=unescape(a);
a=a.split("#!")[0];
a=a.split("#")[0];
if(a.match(/langref/)){a=a.substring(a.indexOf("langref/")+8)
}else{if(a.match(/actionscript\/3/)){a=a.substring(a.indexOf("actionscript/3/")+15)
}}return a
}function getLangrefBaseFragment(b){b=unescape(b);
var a=getLangrefFullFragment(b);
a=a.substring(0,a.lastIndexOf("/")+1);
return a
}function getHyperlinkFragment(a){var b=a.attr("href");
if(!isExternalLink(b)){if(b.match(/\.\.\//)){b=b.replace(/\.\.\//g,"")
}if(b.match(/\.\//)){b=b.replace(/\.\//g,"")
}}return b
}function getScrollTarget(a){a=a.split("#!")[0];
if(a.match(/#/)){a=a.substring(a.indexOf("#")+1);
return a
}else{return""
}}function isExternalLink(a){if(typeof a=="undefined"){return false
}else{if(a.match(/http:/)||a.match(/ftp:/)){return true
}else{return false
}}}function rightClickHandler(f){AsDocs.log("handling right click");
if($(f.target)[0].nodeName.toLowerCase()=="a"||$(f.target).parents("a")[0]){var h="";
if($(f.target).parents("a").length>0){h=$(f.target).parents("a")
}else{h=$(f.target)
}if(isExternalLink(h.attr("href"))){return true
}if(typeof(h.data("changedFromHref"))!="undefined"&&h.data("changedFromHref")!=""){return true
}if(usingPushState()){if($(f.target).parents(".titleTableTitleION").length){var e=getHyperlinkFragment(h);
h.data("changedFromHref",a);
h.attr("href",getBaseRef()+e)
}}else{var b=getURLFullLocation(location.href);
var c=getAjaxBaseFragment(location.href);
var g=getAjaxFullFragment(location.href);
var d=getLangrefBaseFragment(location.href);
var a=h.attr("href");
var e=getHyperlinkFragment(h);
if($(f.target).parents("#toc").length){if($(f.target).parents("#classlist").length>0&&$(f.target).parents("#classlistoutline").length<=0){if(g.match(/^mxml\//)){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+e)
}else{if(g==""){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+d+e)
}else{h.data("changedFromHref",a);
h.attr("href",getBaseRef()+c+e)
}}}}if($(f.target).parents("#content").length){if(g.match(/package-detail/)){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+c+e)
}else{if(e.match(/package-detail/)){if(c==""){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+d+e)
}else{h.data("changedFromHref",a);
h.attr("href",getBaseRef()+c+e)
}}else{if(b.match(/package-detail/)&&g==""){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+d+e)
}else{if(h.attr("href").match(/\//)){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+e)
}else{if(c==""){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+d+e)
}else{h.data("changedFromHref",a);
h.attr("href",getBaseRef()+c+e)
}}}}}}if($(f.target).parents(".titleTableSubTitle").length){if(c==""){h.data("changedFromHref",a);
h.attr("href",getBaseRef()+d+e)
}else{h.data("changedFromHref",a);
h.attr("href",getBaseRef()+c+e)
}}}}return true
}function clickHandler(b){AsDocs.log("click event logged"+arguments.length);
var o=b;
if(b.which=="3"||b.which=="2"||b.ctrlKey==true){rightClickHandler(b);
return true
}if(b.target.nodeName.toLowerCase()=="input"){return true
}if($(b.target).parents("#filter_panel_float").length){return true
}if($(b.target).parents("#badgeContainerSupport").length){return true
}if($(b.target).parents("#ionComHere").length){return true
}if($(b.target).parents("#creativecommons").length>0){return true
}if($(b.target).parents("#whyEnglish").length>0||$(b.target).attr("id")=="whyEnglish"){return true
}if($(b.target).parents("#whyEnglishContent").length>0||$(b.target).attr("id")=="whyEnglishContent"){return true
}if($(b.target).parents("a").length>0){if(isExternalLink($(b.target).parents("a").attr("href"))){return true
}}else{if(isExternalLink($(b.target).attr("href"))){return true
}}b.preventDefault?b.preventDefault():b.returnValue=false;
if($(b.target).parents(".loadingErrorDiv").length){if($(b.target).attr("class")=="innerLoadingErrorSpan2"){clearRightPane();
loadAjaxPage(lastHref)
}if($(b.target).attr("class")=="innerLoadingErrorSpan3"){if(typeof lastRequest=="undefined"||lastRequest==""){}else{lastRequest.abort()
}clearRightPane()
}}if($(b.target).parents(".loadingMsgDiv").length){if($(b.target).attr("class")=="innerLoadingMsgSpan2"){if(typeof lastRequest=="undefined"||lastRequest==""){}else{lastRequest.abort()
}clearRightPane()
}}if(usingPushState()){AsDocs.log("using pushState api");
if($(b.target)[0].nodeName.toLowerCase()=="a"||$(b.target).parents("a")[0]){var g="";
if($(b.target).parents("a").length>0){g=$(b.target).parents("a")
}else{g=$(b.target)
}if(typeof g.data("changedFromHref")!="undefined"){g.attr("href",g.data("changedFromHref"));
g.data("changedFromHref",null)
}var c=getHyperlinkFragment(g);
if($(b.target).parents(".titleTableTitleION").length){AsDocs.log("top left links matched");
prevURL=unescape(location.href);
if($(b.target).attr("id")=="hidetoc"||$(b.target).attr("id")=="showtoc"){}else{window.history.pushState("","",getBaseRef()+c);
curURL=unescape(location.href);
loadAjaxPage(location.href)
}return false
}if(g.attr("href").match(/^#/)){AsDocs.log("scroll links matched");
prevURL=unescape(location.href);
var h=getScrollTarget(c);
window.history.pushState("","",unescape(location.href).split("#")[0]+"#"+h);
scrollHere(h);
curURL=unescape(location.href);
return false
}if($(b.target).parents("#toc").length){AsDocs.log("toc links matched");
var l;
l=getBaseRef();
prevURL=unescape(location.href);
if($(b.target).parents("#packagelist").length){window.history.pushState("","",l+c)
}if($(b.target).parents("#classlistoutline").length){window.history.pushState("","",l+c)
}else{if($(b.target).parents("#classlist").length){if(unescape(location.href).match(/mxml\//)){window.history.pushState("","",l+c)
}else{window.history.pushState("","",c)
}}}curURL=unescape(location.href);
var e=prevURL.match(/#/)?prevURL.split("#")[0]:prevURL;
var d=curURL.match(/#/)?curURL.split("#")[0]:curURL;
if(e==d){scrollHere(curURL.split("#")[1])
}else{loadAjaxPage(location.href,curURL.split("#")[1])
}return false
}if($(b.target).parents("#content").length){AsDocs.log("content links matched");
prevURL=unescape(location.href);
if(g.attr("href").match(/\?/)){window.history.pushState("","",c);
curURL=unescape(location.href);
var m=location.href.substring(location.href.lastIndexOf("?")+1,location.href.length);
loadFilters(m);
return false
}else{window.history.pushState("","",g.attr("href"));
curURL=unescape(location.href);
var e=prevURL.match(/#/)?prevURL.split("#")[0]:prevURL;
var d=curURL.match(/#/)?curURL.split("#")[0]:curURL;
if(e==d){scrollHere(curURL.split("#")[1])
}else{loadAjaxPage(location.href,curURL.split("#")[1])
}}return false
}if($(b.target).parents(".titleTableSubTitle").length){AsDocs.log("links above toc matched");
prevURL=unescape(location.href);
window.history.pushState("","",c);
curURL=unescape(location.href);
loadAjaxPage(location.href);
return false
}}return false
}else{AsDocs.log("not using pushState api");
if($(b.target)[0].nodeName.toLowerCase()=="a"||$(b.target).parents("a")[0]){navigationClickAction=true;
var g="";
if($(b.target).parents("a").length>0){g=$(b.target).parents("a")
}else{g=$(b.target)
}if(typeof g.data("changedFromHref")!="undefined"){g.attr("href",g.data("changedFromHref"));
g.data("changedFromHref",null)
}var k=getURLFullLocation(location.href);
var f=getAjaxBaseFragment(location.href);
var n=getAjaxFullFragment(location.href);
var c=getHyperlinkFragment(g);
var a=getLangrefBaseFragment(location.href);
if($(b.target).parents(".titleTableTitleION").length>0){prevURL=unescape(location.href);
if(g.attr("href").match(/#top/)){}else{location.href=k+"#!"+c
}curURL=unescape(location.href);
return false
}if(g.attr("href").match(/^#/)){prevURL=unescape(location.href);
if(n==""){location.href=k+"#"+getScrollTarget(c)
}else{location.href=k+"#!"+n+"#"+getScrollTarget(c)
}curURL=unescape(location.href);
if(prevURL==curURL){URLHashChange()
}return false
}if($(b.target).parents("#toc").length){prevURL=unescape(location.href);
if($(b.target).parents("#classlist").length>0&&$(b.target).parents("#classlistoutline").length<=0){if(c.match(/mxml\//)){location.href=k+"#!"+c
}else{if(n==""){location.href=k+"#!"+a+c
}else{location.href=k+"#!"+f+c
}}}else{location.href=k+"#!"+c
}curURL=unescape(location.href);
return false
}if($(b.target).parents("#content").length){prevURL=unescape(location.href);
if(g.attr("href").match(/\.\.\//)){location.href=k+"#!"+c
}else{if(c.match(/package-detail/)){if(n.match(/package-summary/)||n.match(/class-summary/)){location.href=k+"#!"+c
}else{if(f==""){location.href=k+"#!"+a+c
}else{location.href=k+"#!"+f+c
}}}else{if(k.match(/package-detail/)&&n==""){location.href=k+"#!"+a+c
}else{if(f==""){if(n=="package-detail.html"){location.href=k+"#!"+c
}else{if(baseRef==""||baseRef=="."||baseRef=="./"){location.href=k+"#!"+a+c
}else{location.href=k+"#!"+c
}}}else{location.href=k+"#!"+f+c
}}}}curURL=unescape(location.href);
return false
}if($(b.target).parents(".titleTableSubTitle").length){prevURL=unescape(location.href);
if(f==""){location.href=k+"#!"+a+c
}else{location.href=k+"#!"+f+c
}curURL=unescape(location.href);
return false
}}return false
}AsDocs.log("ret false");
return false
}var cacheKey="";
function popHistory(){AsDocs.log("popHistory");
prevURL=curURL;
curURL=unescape(location.href);
AsDocs.log("prevURL: "+prevURL);
AsDocs.log("curURL: "+curURL);
if(prevURL==""){}else{if(prevURL==curURL){}else{if(prevURL.split("#")[0]==curURL.split("#")[0]){if(curURL.split("#").length==2){scrollHere(curURL.split("#")[1])
}}else{loadAjaxPage(curURL.split("#")[0],curURL.split("#")[1])
}}}}function URLHashChange(){AsDocs.log("url hash changed");
if(!navigationClickAction){prevURL=curURL
}navigationClickAction=false;
curURL=unescape(location.href);
AsDocs.log("prevURL: "+prevURL);
AsDocs.log("curURL: "+curURL);
var f=unescape(location.href);
var e="actionscript/3/";
var b=15;
var g=f.indexOf(e);
if(g==-1){e="langref/";
g=f.indexOf(e);
b=8
}var a=f.substring(0,f.indexOf(e)+b);
if(f.split("#!").length==1){if(prevURL==""){}else{if(prevURL.split("#")[0]==curURL.split("#")[0]&&curURL.split("#").length>1){scrollHere(curURL.split("#")[1])
}else{loadAjaxPage(f)
}}}else{if(f.match(/\?/)){AsDocs.log("2");
args=f.substring(f.lastIndexOf("?")+1,f.length);
loadFilters(args)
}else{if(f.split("#!").length==2&&f.split("#").length!=3){AsDocs.log("3");
var k=f.substring(0,f.indexOf("#!"));
k=k.substring(0,k.lastIndexOf("/")+1);
loadAjaxPage(a+f.split("#!")[1])
}else{if(f.split("#").length==3){AsDocs.log("matched 3");
var d=unescape(prevURL).split("#!")[1];
var c=unescape(curURL).split("#!")[1];
var h="";
if(d!=undefined&&d.match(/#/)){d=d.split("#")[0]
}if(c!=undefined&&c.match(/#/)){h=c.split("#")[1];
c=c.split("#")[0]
}if(d==c){scrollHere(h)
}else{loadAjaxPage(a+c,curURL.split("#")[2])
}}}}}AsDocs.log("5")
}var lastRequest;
var lastHref="";
var loadingMsgTimeout;
function loadAjaxPage(b,a){AsDocs.log("loading ajax page");
AsDocs.log("scrollTarget: "+a);
cacheKey=unescape(b);
AsDocs.log("loading href: "+cacheKey);
if(lastRequest){lastRequest.abort();
lastRequest=null
}if(!hasLocalStorage()||(typeof localStorage)=="undefined"?true:!localStorage.getItem(cacheKey)){if($(".loaderimg").length<=0){$("#maincontainer").append("<img class='loaderimg' src='"+getBaseRef()+"ajax-loader.gif'/>")
}$("#content").css("opacity","0.5");
clearTimeout(loadingMsgTimeout);
lastHref=b;
lastRequest=$.ajax({url:b,data:null,dataType:"text",type:"GET",success:function(c){AsDocs.log("::success loading::");
clearRightPane();
loadRightContent(c,a);
copyexample();
storePage(cacheKey,c)
},error:function(e,c,d){clearTimeout(loadingMsgTimeout);
if(e.statusText!="abort"){if($(".loaderimg").length>0){if($(".loaderimg").length>0){$(".loaderimg").remove()
}$("#maincontainer").append("<div class='loadingErrorDiv'><div class='innerLoadingErrorDiv'><span class='innerLoadingErrorSpan1'>"+ajaxErrorMsg+"... </span><span class='innerLoadingErrorSpan2'>"+ajaxErrorTryMsg+"</span><span class='innerLoadingErrorSpan3'>"+cancelMsg+"</span></div></div>")
}}}});
loadingMsgTimeout=setTimeout("if(lastRequest.readyState !=4 )createLoadingMsg();",15000)
}else{loadRightContent(localStorage.getItem(cacheKey),a)
}updateOmniture(b);
handleClassListLoading(prevURL,curURL)
}function handleClassListLoading(g,e){var f='<div id="classlistWrapper"> <h4 id="classlisth4"> <a id="cls_name" href="" target="_self" onclick="this.href=baseRef + \'class-summary.html\';saveClassListScrollTop();" oncontextmenu="this.href=baseRef + \'class-summary.html\';saveClassListScrollTop();" style="color:black"> '+classesText+' </a> <span id="cls_searchspan" style="display:none"> <input type="text" id="cls_searchbox" onfocus="clsSearchBoxOnFocus();" onblur="clsSearchBoxOnBlur()" onkeyup="clsSearchOnKeyUp();"> <span id="cls_clear_search" class="search_inactive" onclick="clsClearSearchButton()">x</span> </span> </h4> <div id="classlistoutline" class="classlistoutline"></div></div>';
if(usingPushState()){var m=getLangrefFullFragment(g);
var c=getLangrefFullFragment(g);
var h=getLangrefFullFragment(e);
var a=getLangrefFullFragment(e);
if($("#classlistoutline").length<=0){if(e.match(/package-detail/)){if(m==h){}else{ajaxGet("class-list.html",loadClassesList2)
}}else{if(e.match(/mxml-tag-detail/)||(getBaseRef()=="../"&&location.href.indexOf("/mxml/")>0)){ajaxGet("mxml-tags.html",loadClassesList2)
}else{if(g.match(/mxml-tag-detail/)){$("#classlist").html(f);
if(getCookie("showAllClasses")=="yes"){ajaxGet(getBaseRef()+"all-classes.html",loadClassesList)
}else{ajaxGet(getBaseRef()+"all-classes-A.html",loadClassesList)
}}else{if(a=="language-elements.html"||a=="operators.html"||a=="statements.html"||a=="specialTypes.html"||a=="appendixes.html"||a=="compilerErrors.html"||a=="compilerWarnings.html"||a=="runtimeErrors.html"||a=="charset-codes.html"||a=="motionXSD.html"||a=="TimedTextTags.html"||a=="deprecated.html"||a=="accessibilityImplementationConstants.html"||a=="index.html"||a=="package-summary.html"||a=="class-summary.html"||a=="all-index-Symbols.html"||a=="appendixes.html"){$("#classlist").html(f);
if(getCookie("showAllClasses")=="yes"){ajaxGet(getBaseRef()+"all-classes.html",loadClassesList)
}else{ajaxGet(getBaseRef()+"all-classes-A.html",loadClassesList)
}}else{if(h!=c){ajaxGet("class-list.html",loadClassesList2)
}}}}}}else{if(e.match(/package-detail/)){ajaxGet("class-list.html",loadClassesList2)
}else{if(e.match(/mxml-tag-detail/)||(getBaseRef()=="../"&&location.href.indexOf("/mxml/")>0)){ajaxGet("mxml-tags.html",loadClassesList2)
}}}}else{var n=getAjaxFullFragment(g);
var k=getAjaxBaseFragment(g);
var l=getAjaxFullFragment(e);
var b=getAjaxBaseFragment(e);
var d=getURLBaseLocation(location.href);
if($("#classlistoutline").length<=0){if(l.match(/package-detail/)){if(l==n){ajaxGet(d+b+"class-list.html",loadClassesList2)
}else{if(k==b){if(!n.match(/package-detail/)&&l.match(/package-detail/)){ajaxGet(d+b+"class-list.html",loadClassesList2)
}}else{ajaxGet(d+b+"class-list.html",loadClassesList2)
}}}else{if(l.match(/mxml-tag-detail/)||l.match(/mxml\//)){ajaxGet(d+"mxml-tags.html",loadClassesList2)
}else{if(n.match(/mxml-tag-detail/)){$("#classlist").html(f);
if(getCookie("showAllClasses")=="yes"){ajaxGet(d+"all-classes.html",loadClassesList)
}else{ajaxGet(d+"all-classes-A.html",loadClassesList)
}}else{if(l=="language-elements.html"||l=="operators.html"||l=="statements.html"||l=="specialTypes.html"||l=="appendixes.html"||l=="compilerErrors.html"||l=="compilerWarnings.html"||l=="runtimeErrors.html"||l=="charset-codes.html"||l=="motionXSD.html"||l=="TimedTextTags.html"||l=="deprecated.html"||l=="accessibilityImplementationConstants.html"||l=="index.html"||l=="package-summary.html"||l=="class-summary.html"||l=="all-index-Symbols.html"||l=="appendixes.html"){$("#classlist").html(f);
if(getCookie("showAllClasses")=="yes"){ajaxGet(d+"all-classes.html",loadClassesList)
}else{ajaxGet(d+"all-classes-A.html",loadClassesList)
}}else{if(l==""&&unescape(location.href).match(/package-detail/)){ajaxGet("class-list.html",loadClassesList2)
}else{if(b!=k){if(l==""){ajaxGet(d+getLangrefBaseFragment(e)+"class-list.html",loadClassesList2)
}else{ajaxGet(d+b+"class-list.html",loadClassesList2)
}}}}}}}}else{if(l.match(/package-detail/)){ajaxGet(d+b+"class-list.html",loadClassesList2)
}else{if(l.match(/mxml-tag-detail/)||l.match(/mxml\//)){ajaxGet(d+"mxml-tags.html",loadClassesList2)
}}}}}function createLoadingMsg(){$("#maincontainer").append("<div class='loadingMsgDiv'><div class='innerLoadingMsgDiv'><span class='innerLoadingMsgSpan1'>"+ajaxLoadingMsg+"... </span><span class='innerLoadingMsgSpan2'>"+cancelMsg+"</span></div></div>")
}function clearRightPane(){if($(".loaderimg").length>0){AsDocs.log("::clearing loading image::");
$(".loaderimg").remove()
}if($(".loadingErrorDiv").length>0){$(".loadingErrorDiv").remove()
}if($(".loadingMsgDiv").length>0){$(".loadingMsgDiv").remove()
}$("#content").css("opacity","1")
}function hasLocalStorage(){return"localStorage" in window
}function storePage(a,b){if(!hasLocalStorage()){return false
}try{localStorage.setItem(a,b)
}catch(c){localStorage.clear()
}}function loadRightContent(data,scrolltarget){AsDocs.log("loading right content");
var dt=data;
dt=dt.replace(/document\.write/g,"");
var st=dt.substring(dt.indexOf('<div class="mainright"'),dt.indexOf('<div class="footer">'));
var st1=st.substring(0,st.lastIndexOf("</div>"));
var csscontent=$("#splitter").offset().left+10+"px";
st1=st1.replace('<div class="mainright"','<div class="mainright" style="left:'+csscontent+'"');
var st2=dt.substring(dt.indexOf('<td class="titleTableSubTitle"'),dt.indexOf('<td class="titleTableSubNav"'));
var st3=dt.substring(dt.indexOf('<td class="titleTableSubNav"'));
st3=st3.substring(0,st3.indexOf("</td>")+5);
try{$("#content").replaceWith(st1)
}catch(e){}$("#subTitle").replaceWith(st2);
$("#subNav").replaceWith(st3);
var st4=dt.substring(dt.indexOf("<title>")+7,dt.indexOf("</title"));
st4=st4.replace(/&reg;/g,"\u00AE");
document.title=st4;
var st5=dt.substring(dt.indexOf("titleBar_setSubNav"));
st5=st5.substring(0,st5.indexOf(")")+1);
try{eval(st5)
}catch(e){}var st6=dt.substring(dt.indexOf("AC_FL_RunContent"));
st6=st6.substring(0,st6.indexOf(")")+1);
setTimeout(function(){if($("#swfHolderDiv").length>0&&$("#swfHolderDiv").children().length<1){eval(st6)
}},1000);
if(scrolltarget!=null){scrollHere(scrolltarget)
}if(usingPushState()){baseRef=getBaseRef()
}processRightContent();
try{loadIonComments()
}catch(e){}}function scrollHere(a){var d=encodeURIComponent(a);
try{if(isTablet()){contentScroller.scrollToElement(document.getElementById(d));
return
}if(typeof d=="undefined"||d==""){return
}var c=$("a[name='"+d+"']").offset();
var b=c.top;
if(c.top<171){b=$("#content").scrollTop()+c.top-171
}else{b=$("#content").scrollTop()+c.top-171
}$("#content").scrollTop(b)
}catch(f){}}function processRightContent(){AsDocs.log("processing right content");
clearRightPane();
setTimeout("doFilterStateChange1();clsSearchOnKeyUp1()",500);
if(typeof($("#gsa .searchForm").attr("action"))!="undefined"){$("#gsa .searchForm").attr("action",getBaseRef()+"search.html")
}$("#content img").each(function(){imgsrc=$(this).attr("src");
imgsrc=imgsrc.replace(/\.\.\//g,"");
if(usingPushState()){$(this).attr("src",getBaseRef()+imgsrc)
}else{if($.browser.msie&&$.browser.version<=7){var a=imgsrc.substring(imgsrc.indexOf("images"));
$(this).attr("src",baseRef+a)
}else{$(this).attr("src",baseRef+imgsrc)
}}});
if(isTablet()){contentScroller=new iScroll("content")
}}function updateOmniture(b){if(typeof(s_accountName)!="undefined"){var a=s_gi(s_accountName);
if(window.s_docURL.indexOf("/en_us/")==-1){s_docURLArray=s_docURL.split("/");
s_pageName="http://help.adobe.com/"+s_docURLArray[1]+"/"+s_docURLArray[2]+"/"+s_docURLArray[3]
}else{a.pageName=s_pageName=""
}a.prop23=s_prop23=b;
void (a.t())
}}var helpcfgPath;
var request;
var info;
var ionLoadReady=false;
var ionLoaded=false;
var ionSupportLoaded=false;
var ionSupportLoadReady=false;
var agt=navigator.userAgent.toLowerCase();
var use_robohelp_behavior=false;
if(typeof(terms_HELPCFG)!="undefined"&&terms_HELPCFG.length>0){var loc=getLangName();
helpcfgPath="http://"+window.location.host+"/HelpCfg/"+loc+"/"+terms_HELPCFG
}var helpcfgLoaded=false;
function loadIonComments(){if(!helpcfgLoaded){$.get(helpcfgPath,function(a){helpcfgLoaded=true;
info=a.getElementsByTagName("product");
getIonComments()
},"xml")
}else{getIonComments()
}}function getIonComments(){label=getIonLabel();
site=getIonSite();
if(document.getElementById("ionComHere")||document.getElementById("badgeContainerSupport")){if(use_robohelp_behavior||!(label)||!(loc)||!(label.length>0)||!(loc.length>0)){document.getElementById("ionComHere").style.display="none";
document.getElementById("badgeContainerSupport").style.display="none"
}else{document.getElementById("ionComHere").style.display="block";
document.getElementById("badgeContainerSupport").style.display="block"
}if((info[0].getAttribute("ionCommentingAllowed")=="yes")&&(label)&&(label.length>0)&&(loc)&&(loc.length>0)){ionLoadReady=true
}if((info[0].getAttribute("ionSupportBadgeAllowed")=="yes")&&(label)&&(label.length>0)&&(loc)&&(loc.length>0)){ionSupportLoadReady=true
}loadCommentBadges()
}}function loadCommentBadges(){AsDocs.log("loading comment badges");
if(ionLoadReady&&$("#badgeContainerSupport").length>0){var a=new ionBadge();
if(location.href.match(/#!/)){var c=location.href.split("#!")[0];
c=c.substring(0,c.lastIndexOf("/")+1);
var b=location.href.split("#!")[1];
a.url=(c+b).replace(/\?(.*)/,"")
}else{a.url=location.href.replace(/\?(.*)/,"")
}a.locale=loc;
a.container=document.getElementById("ionComHere");
a.productLabel=label;
if(info[0].getAttribute("ionRatingAllowed")=="yes"){a.ratingType=info[0].getAttribute("ionRatingType");
a.siteArea=site
}a.load()
}if(ionSupportLoadReady&&$("#ionComHere").length>0){var d=new ionSupportBadge();
if(location.href.match(/#!/)){var c=location.href.split("#!")[0];
c=c.substring(0,c.lastIndexOf("/")+1);
var b=location.href.split("#!")[1];
d.url=(c+b).replace(/\?(.*)/,"")
}else{d.url=location.href.replace(/\?(.*)/,"")
}d.container=document.getElementById("badgeContainerSupport");
d.commenting=true;
d.locale=loc;
d.productLabel=label;
d.rating=true;
d.ratingType="thumbs";
d.siteArea=site;
d.timeOutDelay=30000;
d.load()
}}function getLangName(){var f="en-us";
var e=document.all?document.all.tags("meta"):document.getElementsByTagName?document.getElementsByTagName("meta"):new Array();
for(var a=0;
a<e.length;
a++){if(e[a].name=="lang"){f=e[a].content;
break
}}var c=/(..)-(..)/;
if(c.test(f)){var b=f.replace(c,"$1");
var d=f.replace(c,"$2");
f=b+"_"+d.toUpperCase()
}return f
}function isHomepage(){var b=document.all?document.all.tags("meta"):document.getElementsByTagName?document.getElementsByTagName("meta"):new Array();
for(var a=0;
a<b.length;
a++){if((b[a].name=="topictype")&&(b[a].content=="homepage")){return true
}}return false
}function getIonLabel(){var a=""+document.location.href;
var b="";
if(isHomepage()){return b
}if(a.indexOf("Acrobat/9.0/Reviewer")!=-1){return b
}b=info[0].getAttribute("ionId");
return b
}function getIonSite(){if(info[0].getAttribute("ionSiteArea")!=""){return info[0].getAttribute("ionSiteArea")
}else{return"help"
}}function scrollToNameAnchor(){var a=window.location.href;
var b=a.split("nameAnchor=");
if(b[1]!=null){document.location=b[0]+"#"+b[1]
}}function ajaxGet(b,a){var d=false;
if(window.XMLHttpRequest&&!(window.ActiveXObject&&window.location.protocol=="file:")){d=new XMLHttpRequest()
}else{if(window.ActiveXObject){try{d=new ActiveXObject("Msxml2.XMLHTTP")
}catch(c){try{d=new ActiveXObject("Microsoft.XMLHTTP")
}catch(c){}}}else{alert("Your browser does not support XMLHTTP.");
return false
}}d.onreadystatechange=function(){if(d.readyState==4){if(d.status==200||d.status==0){a(d)
}}};
d.open("GET",b,true);
d.send(null)
}function showHideTOC(showTOC){var toc=document.getElementById("toc");
var splitter=document.getElementById("splitter");
var content=document.getElementById("content");
var plist=document.getElementById("packagelist");
var h_splitter=document.getElementById("h_splitter");
var clist=document.getElementById("classlist");
var showtoc=document.getElementById("showtoc");
var hidetoc=document.getElementById("hidetoc");
if(toc){if(!showTOC){eval("toc.style.display =''");
eval("splitter.style.display =''");
if(h_splitter){eval("h_splitter.style.display =''")
}content.style.left="6px";
eval("showtoc.style.display =''");
eval("hidetoc.style.display ='none'");
setView("hidetoc")
}else{eval("toc.style.display ='inline'");
eval("splitter.style.display ='inline'");
toc.style.width=(splitter.offsetLeft-20)+"px";
content.style.left=(splitter.offsetLeft+10)+"px";
if(h_splitter){eval("h_splitter.style.display ='inline'");
plist.style.height=(h_splitter.offsetTop-10)+"px";
clist.style.top=(h_splitter.offsetTop+4)+"px"
}eval("showtoc.style.display ='none'");
eval("hidetoc.style.display =''");
setView("showtoc")
}}}function splitterMouseDown(a,b){if(!splitterActiveFlag){if(b.setCapture){b.setCapture()
}else{document.addEventListener("mouseup",splitterMouseUp,true);
document.addEventListener("mousemove",splitterMouseMove,true);
a.preventDefault()
}splitterActiveFlag=true;
splitterObj=b
}}function changeQSearchboxWidth(){if(getInternetExplorerVersion()!="7"){spObj=document.getElementById("splitter");
var b=document.getElementById("pkg_searchbox");
var a=document.getElementById("cls_searchbox");
if(spObj.offsetLeft>220&&spObj.offsetLeft<265){if(b!=null){b.style.width=spObj.offsetLeft-138+"px"
}if(a!=null){a.style.width=spObj.offsetLeft-138+"px"
}}if(spObj.offsetLeft>=265){if(b!=null){b.style.width="127px"
}if(a!=null){a.style.width="127px"
}}if(spObj.offsetLeft<=220){if(b!=null){b.style.width="82px"
}if(a!=null){a.style.width="82px"
}}}}function splitterMouseUp(b){if(splitterActiveFlag){var a=document.getElementById("toc");
var c=document.getElementById("content");
changeQSearchboxWidth();
a.style.width=(splitterObj.offsetLeft-20)+"px";
c.style.left=(splitterObj.offsetLeft+10)+"px";
if(splitterObj.releaseCapture){splitterObj.releaseCapture()
}else{document.removeEventListener("mouseup",splitterMouseUp,true);
document.removeEventListener("mousemove",splitterMouseMove,true);
b.preventDefault()
}splitterActiveFlag=false;
saveSplitterPos()
}}function splitterMouseMove(a){if(splitterActiveFlag){if(a.clientX>=MIN_LEFT&&a.clientX<=document.documentElement.clientWidth-MIN_RIGHT){splitterObj.style.left=a.clientX+"px";
if(!splitterObj.releaseCapture){a.preventDefault()
}}}}function h_splitterMouseDown(a,b){if(!h_splitterActiveFlag){if(b.setCapture){b.setCapture()
}else{document.addEventListener("mouseup",h_splitterMouseUp,true);
document.addEventListener("mousemove",h_splitterMouseMove,true);
a.preventDefault()
}h_splitterActiveFlag=true;
h_splitterObj=b
}}function h_splitterMouseUp(b){if(h_splitterActiveFlag){var a=document.getElementById("packagelist");
var c=document.getElementById("classlist");
a.style.height=(h_splitterObj.offsetTop-10)+"px";
c.style.top=(h_splitterObj.offsetTop+4)+"px";
if(h_splitterObj.releaseCapture){h_splitterObj.releaseCapture()
}else{document.removeEventListener("mouseup",h_splitterMouseUp,true);
document.removeEventListener("mousemove",h_splitterMouseMove,true);
b.preventDefault()
}h_splitterActiveFlag=false;
saveHSplitterPos()
}}function h_splitterMouseMove(a){if(h_splitterActiveFlag){var b=a.clientY-document.getElementById("maincontainer").offsetTop;
if(b>=MIN_TOP&&a.clientY<=document.documentElement.clientHeight-MIN_BOTTOM){h_splitterObj.style.top=b+"px";
if(!h_splitterObj.releaseCapture){a.preventDefault()
}}}}function setStyle(c,f,b,e){var a=false;
try{if(c.style&&c.style.setProperty){c.style.setProperty(f,b,e);
a=true
}}catch(d){alert("exception caught setting style: "+d.message)
}if(!a){try{c.style[f]=b;
a=true
}catch(g){alert("exception caught setting direct style: "+g.message)
}}return a
}gFocusItem=null;
gLastFocusItem=null;
function doFocus(){if(gFocusItem!=null){gFocusItem.focus();
if(gLastFocusItem&&gLastFocusItem.className=="item focus"){gLastFocusItem.className="item"
}if(gFocusItem&&gFocusItem.className=="item"){gFocusItem.className="item focus"
}gLastFocusItem=gFocusItem;
gFocusItem=null
}}var ahpodjs="/en_US/shared/ahpods/AHPod.js";
document.write('<script src="'+ahpodjs+'"type="text/javascript" language="Javascript" charset="UTF-8"><\/script>');
function savePackageListScrollTop(){var a=document.getElementById("packagelist");
if(a){setCookie("packageListScrollTop",a.scrollTop,new Date(3000,1,1,1,1),"/",document.location.domain);
setCookie("classListScrollTop",0,new Date(3000,1,1,1,1),"/",document.location.domain)
}}function saveClassListScrollTop(){var a=document.getElementById("classlist");
if(a){setCookie("classListScrollTop",a.scrollTop,new Date(3000,1,1,1,1),"/",document.location.domain)
}}function restorePackageListScrollTop(){var a=getCookie("packageListScrollTop");
if(a){document.getElementById("packagelist").scrollTop=a
}}function restoreClassListScrollTop(){var a=getCookie("classListScrollTop");
if(a){document.getElementById("classlist").scrollTop=a
}}function saveSplitterPos(){var a=document.getElementById("splitter");
if(a){setCookie("splitterPosition",a.offsetLeft,new Date(3000,1,1,1,1),"/",document.location.domain)
}}function restoreSplitterPos(){var a=getCookie("splitterPosition");
if(a){document.getElementById("splitter").style.left=a+"px"
}}function saveHSplitterPos(){var a=document.getElementById("h_splitter");
if(a){setCookie("h_splitterPosition",a.offsetTop,new Date(3000,1,1,1,1),"/",document.location.domain)
}}function restoreHSplitterPos(){var a=document.getElementById("h_splitter");
if(a){var b=getCookie("h_splitterPosition");
if(b){a.style.top=b+"px"
}}}function setHrf(b){var c=b.title;
var a=new RegExp(".");
if(a.test(c)){c=c.replace(/\./g,"/");
b.href=baseRef+c+".html"
}else{b.href=baseRef+c
}}function svScrl(a){setCookie("showAllClassesList","yes",new Date(3000,1,1,1,1),"/",document.location.domain);
setHrf(a);
saveClassListScrollTop()
}function setHrfJSLR(a){var b=a.title;
b=b.replace(/\./g,"/");
if(b.search("\\(\\)")>0){titleSub=b.substr(b.lastIndexOf("/")+1);
b=b.replace(titleSub,"package.html#"+titleSub)
}else{b=b+".html"
}a.href=baseRef+b
}function svScrlJSLR(a){setHrfJSLR(a);
saveClassListScrollTop()
}var loadAllClassesRan=0;
var allClassesLoaded=false;
function saveAllClassesView(a){if(a=="more"){ajaxGet(baseRef+"all-classes.html",loadClassesList);
setCookie("showAllClasses","yes",new Date(3000,1,1,1,1),"/",document.location.domain);
loadAllClassesRan=1
}else{ajaxGet(baseRef+"all-classes-A.html",loadClassesList);
setCookie("showAllClasses","no",new Date(3000,1,1,1,1),"/",document.location.domain);
allClassesLoaded=false;
loadAllClassesRan=0
}}function clearAllClassesListCookie(){setCookie("showAllClassesList","no",new Date(3000,1,1,1,1),"/",document.location.domain)
}function quickFilterPackages(){var b=document.getElementById("pkg_searchbox").value;
var e=document.getElementById("packagelist");
var h=e.getElementsByTagName("a");
b=b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
var g=new RegExp(b,"i");
var k=0;
for(i=0;
i<h.length;
i++){var d;
if(h[i].textContent){d=h[i].textContent.match(g)
}else{d=h[i].innerText.match(g)
}if(h[i].className=="noqsearch"){h[i].style.display="none"
}else{if(h[i].id=="pkg_name"){}else{if(d!=null&&d.length>0&&h[i].parentNode.parentNode.style.display!="none"){k++;
var a=h[i].innerHTML;
h[i].innerHTML=a.replace(d[0],"<span class='highlightText'>"+d[0]+"</span>")
}else{if(h[i].id=="pkg_name"||h[i].id=="clear_search"){}else{h[i].style.display="none"
}}}}}if(k==0){var f=document.getElementById("pkg_txtMsg");
if(f==null){var c=document.createElement("div");
c.id="pkg_txtMsg";
c.innerHTML=qsearchText;
bPkg=document.getElementById("packagelist");
bPkg.appendChild(c)
}}}function pkgSearchBoxOnFocus(){var a=document.getElementById("pkg_searchbox");
if(a.value==a.defaultValue){a.value="";
a.style.color="rgb(0, 0, 0)"
}}var typingInterval=300;
var pkgtypingTimer;
function pkgSearchOnKeyUp(){var b=document.getElementById("pkg_searchbox");
if(b.value==""){document.getElementById("pkg_clear_search").className="search_inactive"
}else{document.getElementById("pkg_clear_search").className="search_active"
}var a=document.getElementById("pkg_searchbox").value.length;
if(a>=2){clearTimeout(pkgtypingTimer);
pkgtypingTimer=setTimeout(function(){pkgClearHighlight();
quickFilterPackages()
},typingInterval)
}else{pkgClearHighlight()
}}function pkgSearchBoxOnBlur(){var a=document.getElementById("pkg_searchbox");
if(a.value==""){a.value=a.defaultValue;
a.style.color="rgb(170, 170, 170)";
document.getElementById("pkg_clear_search").className="search_inactive"
}}function pkgClearSearchButton(){document.getElementById("pkg_searchbox").value="";
document.getElementById("pkg_searchbox").focus();
pkgClearHighlight();
document.getElementById("pkg_clear_search").className="search_inactive"
}function pkgClearHighlight(){var a=document.getElementById("packagelist");
x=[];
var c=document.getElementById("pkg_txtMsg");
if(document.getElementById("pkg_txtMsg")!=null){pNode=document.getElementById("packagelist");
pNode.removeChild(c)
}if(navigator.userAgent.search("MSIE")>=0){xtemp=a.getElementsByTagName("span");
j=0;
for(i=0;
i<xtemp.length;
i++){if(xtemp[i].className=="highlightText"){x[j]=xtemp[i];
j++
}}for(i=0;
i<x.length;
i++){y=x[i].parentNode;
z=x[i].innerHTML;
txtNode=document.createTextNode(z);
x[i].appendChild(txtNode);
y.replaceChild(txtNode,x[i])
}}else{x=a.getElementsByClassName("highlightText");
while(x.length>0){y=x[0].parentNode;
z=x[0].innerHTML;
txtNode=document.createTextNode(z);
x[0].appendChild(txtNode);
y.replaceChild(txtNode,x[0])
}}var b=a.getElementsByTagName("a");
for(i=0;
i<b.length;
i++){b[i].style.display=""
}doFilterStateChangePackageList()
}function quickFilterClassList(){var b=document.getElementById("cls_searchbox").value;
var k=document.getElementById("classlistoutline");
var h=k.getElementsByTagName("a");
var g=0;
b=b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
var f=new RegExp(b,"i");
for(i=0;
i<h.length;
i++){var d;
if(h[i].textContent){d=h[i].textContent.replace(/^\s\s*/,"").replace(/\s\s*$/,"").match(f)
}else{d=h[i].innerText.replace(/^\s\s*/,"").replace(/\s\s*$/,"").match(f)
}if(h[i].className=="noqsearch"){h[i].style.display="none"
}else{if(d!=null&&d.length>0&&h[i].style.display!="none"){g++;
var a=h[i].innerHTML;
h[i].innerHTML=a.replace(d[0],"<span class='clsHighlightText'>"+d[0]+"</span>")
}else{if(h[i].id=="cls_name"||h[i].id=="cls_clear_search"){}else{h[i].style.display="none"
}}}}if(g==0){var c=document.getElementById("cls_txtMsg");
if(c==null){var e=document.createElement("div");
e.id="cls_txtMsg";
e.innerHTML=qsearchText;
bCls=document.getElementById("classlistoutline");
bCls.appendChild(e)
}}}function clsSearchBoxOnFocus(){var a=document.getElementById("cls_searchbox");
if(a.value==a.defaultValue){a.value="";
a.style.color="rgb(0, 0, 0)"
}}function clsSearchOnKeyUp(){if(getCookie("showAllClasses")==null||getCookie("showAllClasses")=="no"||getCookie("showAllClasses")==""){if(loadAllClassesRan!=1){saveAllClassesView("more")
}}if(allClassesLoaded){clsSearchOnKeyUp1()
}}var clstypingTimer;
function clsSearchOnKeyUp1(){var b=document.getElementById("cls_searchbox");
if(b){if(b.value==""){document.getElementById("cls_clear_search").className="search_inactive"
}else{if(b.value!=qsearchBoxLabel){document.getElementById("cls_clear_search").className="search_active"
}}var a=document.getElementById("cls_searchbox").value.length;
if(a>=2&&b.value!=qsearchBoxLabel){clearTimeout(clstypingTimer);
clstypingTimer=setTimeout(function(){clsClearHighlight();
quickFilterClassList()
},typingInterval)
}else{clsClearHighlight()
}}}function clsSearchBoxOnBlur(){var a=document.getElementById("cls_searchbox");
if(a.value==""){a.value=a.defaultValue;
a.style.color="rgb(170, 170, 170)";
document.getElementById("cls_clear_search").className="search_inactive"
}}function clsClearSearchButton(){document.getElementById("cls_searchbox").value="";
document.getElementById("cls_searchbox").focus();
clsClearHighlight();
document.getElementById("cls_clear_search").className="search_inactive"
}function clsClearHighlight(){var a=document.getElementById("classlistoutline");
x=[];
var c=document.getElementById("cls_txtMsg");
if(document.getElementById("cls_txtMsg")!=null){pNode=document.getElementById("classlistoutline");
pNode.removeChild(c)
}if(navigator.userAgent.search("MSIE")>=0){xtemp=a.getElementsByTagName("span");
j=0;
for(i=0;
i<xtemp.length;
i++){if(xtemp[i].className=="clsHighlightText"){x[j]=xtemp[i];
j++
}}for(i=0;
i<x.length;
i++){y=x[i].parentNode;
z=x[i].innerHTML;
txtNode=document.createTextNode(z);
x[i].appendChild(txtNode);
y.replaceChild(txtNode,x[i])
}}else{x=a.getElementsByClassName("clsHighlightText");
while(x.length>0){y=x[0].parentNode;
z=x[0].innerHTML;
txtNode=document.createTextNode(z);
x[0].appendChild(txtNode);
y.replaceChild(txtNode,x[0])
}}var b=a.getElementsByTagName("a");
for(i=0;
i<b.length;
i++){b[i].style.display=""
}doFilterStateChange1()
}function getInternetExplorerVersion(){var c=-1;
if(navigator.appName=="Microsoft Internet Explorer"){var a=navigator.userAgent;
var b=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
if(b.exec(a)!=null){c=parseFloat(RegExp.$1)
}}return c
};