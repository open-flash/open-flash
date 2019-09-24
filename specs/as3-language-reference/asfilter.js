try{window.onresize=function(){alignFloatLayers()
};
window.onscroll=function(){alignFloatLayers()
};
document.body.onresize=function(){alignFloatLayers()
};
document.body.onscroll=function(){alignFloatLayers()
}
}catch(exception){}var FloatLayers=new Array();
var FloatLayersByName=new Array();
function addFloatLayer(d,b,a,c){new FloatLayer(d,b,a,c)
}function getFloatLayer(a){return FloatLayersByName[a]
}function alignFloatLayers(){for(var a=0;
a<FloatLayers.length;
a++){FloatLayers[a].align()
}}function getXCoord(a){x=0;
while(a){x+=a.offsetLeft;
a=a.offsetParent
}return x
}function getYCoord(a){y=0;
while(a){y+=a.offsetTop;
a=a.offsetParent
}return y
}FloatLayer.prototype.setFloatToTop=setTopFloater;
FloatLayer.prototype.setFloatToBottom=setBottomFloater;
FloatLayer.prototype.setFloatToLeft=setLeftFloater;
FloatLayer.prototype.setFloatToRight=setRightFloater;
FloatLayer.prototype.initialize=defineFloater;
FloatLayer.prototype.adjust=adjustFloater;
FloatLayer.prototype.align=alignFloater;
function FloatLayer(d,b,a,c){this.index=FloatLayers.length;
FloatLayers.push(this);
FloatLayersByName[d]=this;
this.floatname=d;
this.floatX=0;
this.floatY=0;
this.tm=null;
this.steps=c;
this.alignHorizontal=(b>=0)?leftFloater:rightFloater;
this.alignVertical=(a>=0)?topFloater:bottomFloater;
this.ifloatX=Math.abs(b);
this.ifloatY=Math.abs(a)
}function defineFloater(){this.layer=document.getElementById(this.floatname);
this.width=this.layer.offsetWidth;
this.height=this.layer.offsetHeight;
this.prevX=this.layer.offsetLeft;
this.prevY=this.layer.offsetTop
}function adjustFloater(){this.tm=null;
if(this.layer.style.position!="absolute"){return
}var b=Math.abs(this.floatX-this.prevX);
var a=Math.abs(this.floatY-this.prevY);
if(b<this.steps/2){cx=(b>=1)?1:0
}else{cx=Math.round(b/this.steps)
}if(a<this.steps/2){cy=(a>=1)?1:0
}else{cy=Math.round(a/this.steps)
}if(this.floatX>this.prevX){this.prevX+=cx
}else{if(this.floatX<this.prevX){this.prevX-=cx
}}if(this.floatY>this.prevY){this.prevY+=cy
}else{if(this.floatY<this.prevY){this.prevY-=cy
}}this.layer.style.left=this.prevX+"px";
this.layer.style.top=this.prevY+"px";
if(cx!=0||cy!=0){if(this.tm==null){this.tm=setTimeout("FloatLayers["+this.index+"].adjust()",50)
}}else{alignFloatLayers()
}}function setLeftFloater(){this.alignHorizontal=leftFloater
}function setRightFloater(){this.alignHorizontal=rightFloater
}function setTopFloater(){this.alignVertical=topFloater
}function setBottomFloater(){this.alignVertical=bottomFloater
}function leftFloater(){var a=(document.documentElement&&document.documentElement.scrollLeft)?document.documentElement.scrollLeft:document.body.scrollLeft;
this.floatX=a+this.ifloatX
}function topFloater(){var a=(document.documentElement&&document.documentElement.scrollTop)?document.documentElement.scrollTop:document.body.scrollTop;
this.floatY=a+this.ifloatY
}function rightFloater(){this.floatX=document.body.scrollLeft+document.body.clientWidth-this.ifloatX-this.width
}function bottomFloater(){this.floatY=document.body.scrollTop+document.body.clientHeight-this.ifloatY-this.height
}function alignFloater(){if(this.layer==null){this.initialize()
}this.alignHorizontal();
this.alignVertical();
if(this.prevX!=this.floatX||this.prevY!=this.floatY){if(this.tm==null){this.tm=setTimeout("FloatLayers["+this.index+"].adjust()",50)
}}}var g_user_prefs_loaded=false;
var g_filters_loaded=false;
var theHost=document.location.hostname;
if(navigator.userAgent.toLowerCase().indexOf("msie 6")>-1){var isMSIE6=true
}else{if(navigator.userAgent.toLowerCase().indexOf("msie")>-1){var isMSIE=true
}}var pre_filter_content=".......";
var filter_file="filters.xml";
runtime_array=new Array();
product_array=new Array();
rb_runtime_array=new Array();
rb_product_array=new Array();
function arrayEntry(c,b,a){this.name=c.toLowerCase();
this.defaultValue=b.toLowerCase();
this.topversion=a.toLowerCase()
}function rb_arrayEntry(d,a,c,f){this.id="rb_"+d+"_"+a.replace(".","_");
this.name=d;
this.version=a;
this.matches=new Array();
var b;
if(c){for(b=0;
b<c.length;
b++){var e=c[b].getAttribute("value");
this.matches[this.matches.length]=e.toLowerCase()
}}this.description=f
}function loadFilters(b){if(g_user_prefs_loaded!=true){getUserPrefs();
if(getCookie("asdocs_filter_view")!="hidefilters"){showHideFiltersCookie(true)
}else{showHideFiltersCookie(false)
}g_user_prefs_loaded=true
}var a=0;
if((a=b.indexOf("filter_"))!=-1){var c=b.substring(a);
var d=c.indexOf("#");
if(d!=-1){c=c.substring(0,d)
}d=c.indexOf("%23");
if(d!=-1){c=c.substring(0,d)
}setFiltersWithURLArgs(c);
getUserPrefs()
}if(b.indexOf("filter_")!=-1||!g_filters_loaded){g_filters_loaded=true;
updateState("runtime");
updateState("product");
doFilterStateChange1()
}}var currentArgs="";
function getFilterContent(h,e){currentArgs=e;
var c=new String(this.location);
var a="actionscript/3/";
var g=c.indexOf(a);
if(g==-1){a="langref/";
g=c.indexOf(a)
}c=c.substring(g+a.length);
c=c.split("#!")[0];
var f="";
var b;
while((b=c.indexOf("/"))!=-1){c=c.substring(b+1);
f+="../"
}h=f+h;
if(window.ActiveXObject&&/Win/.test(navigator.userAgent)&&window.location.protocol=="file:"){var k=new ActiveXObject("Microsoft.XMLDOM");
try{k.async="true";
k.load(h)
}catch(d){alert("exception:"+d.message)
}loadFilter(k)
}else{ajaxGet(h,loadFilter)
}}function loadFilter(a){rb_runtime_array=new Array();
rb_product_array=new Array();
if(window.location.protocol=="file:"&&/Microsoft/.test(navigator.appName)){parseXML(a.getElementsByTagName("filters")[0].getElementsByTagName("runtimes")[0],"runtime","Runtimes",rb_runtime_array,runtime_array);
parseXML(a.getElementsByTagName("filters")[0].getElementsByTagName("products")[0],"product","Products",rb_product_array,product_array)
}else{parseXML(a.responseXML.getElementsByTagName("filters")[0].getElementsByTagName("runtimes")[0],"runtime","Runtimes",rb_runtime_array,runtime_array);
parseXML(a.responseXML.getElementsByTagName("filters")[0].getElementsByTagName("products")[0],"product","Products",rb_product_array,product_array)
}loadFilters(currentArgs);
doFilterStateChange1();
mainmenu();
var b=document.URL;
if(b.indexOf("/cs_CZ/")==-1&&b.indexOf("/de_DE/")==-1&&b.indexOf("/es_ES/")==-1&&b.indexOf("/fr_FR/")==-1&&b.indexOf("/it_IT/")==-1&&b.indexOf("/ja_JP/")==-1&&b.indexOf("/ko_KR/")==-1&&b.indexOf("/nl_NL/")==-1&&b.indexOf("/pl_PL/")==-1&&b.indexOf("/pt_BR/")==-1&&b.indexOf("/ru_RU/")==-1&&b.indexOf("/sv_SE/")==-1&&b.indexOf("/tr_TR/")==-1&&b.indexOf("/zh_CN/")==-1&&b.indexOf("/zh_TW/")==-1){$("#nav a#RuntimesMenu, #nav a#ProductsMenu").css({width:"80px"});
$("#nav li#ProductsMenu > ul, #nav li#RuntimesMenu > ul").css({left:"90px"});
$("#products").css({width:"92%"})
}if(window.location.href.indexOf("#")!=-1){document.location=window.location.href
}}function parseXML(e,b,n,a,v){var q='<li><a href="#" id="%%filter_submenu" class="%%submenu"><input type="checkbox" id="rb_%%name" checked=""/>%%heading</a><ul>';
var d=" </ul></li>";
if(n=="Runtimes"){var p='<ul id="nav"><li id="'+n+'Menu"><a href="#" id="'+n+'Menu"><input type="checkbox"id="rb_'+b+'" checked=""/>'+runtimesLabel+"</a><ul>"
}else{var p='<ul id="nav"><li id="'+n+'Menu"><a href="#" id="'+n+'Menu"><input type="checkbox"id="rb_'+b+'" checked=""/>'+productsLabel+"</a><ul>"
}var c="</ul></li></ul>";
var l;
if(isMSIE||isMSIE6){l='<li %%styleNone><a href="#"><input type="radio" name="%%name" class="ieFilterRadio"  id="rb_%%name_%%version" onclick="updateStateOnClick(\''+b+"');updateState('"+b+"');doFilterStateChange1();\">%%description</a></li>"
}else{l='<li %%styleNone><a href="#"><input type="radio" name="%%name" class="filterRadio" id="rb_%%name_%%version" value="%%name %%version" onchange="updateStateOnClick(\''+b+"');updateState('"+b+'\');doFilterStateChange1();" checked="">%%description</a></li>'
}var t="";
t+=p;
var o=e.getElementsByTagName(b);
for(i=0;
i<o.length;
i++){var h=o[i];
var w=h.getAttribute("name").toLowerCase();
var g=h.getAttribute("heading");
var m=h.getElementsByTagName("versions")[0].getElementsByTagName("version");
if(m.length==2){t+=(((q.replace(/%%name/g,w)).replace(/%%heading/g,g)).replace(/%%submenu/g,"heading_noexists")).replace(/%%filter_submenu/g,"filter_nosubmenu")
}else{t+=(((q.replace(/%%name/g,w)).replace(/%%heading/g,g)).replace(/%%submenu/g,"heading_exists_exp")).replace(/%%filter_submenu/g,"filter_submenu")
}v[v.length]=new arrayEntry(h.getAttribute("name"),h.getAttribute("default"),h.getAttribute("topversion"));
for(j=0;
j<m.length;
j++){var u=m[j];
var f=u.getAttribute("name").toLowerCase();
var s=u.getElementsByTagName("description")[0].childNodes[0].nodeValue;
var k=u.getElementsByTagName("match");
a[a.length]=new rb_arrayEntry(w,f,k,s);
var r=l;
r=r.replace(/%%name/g,w);
r=r.replace(/%%version/g,f.replace(".","_"));
r=r.replace(/%%description/g,s);
if(f=="none"){r=r.replace(/%%styleNone/g,'style="display: none;"')
}else{r=r.replace(/%%styleNone/g,"")
}t+=r
}t+=d
}t+=c;
document.getElementById(b+"filter").innerHTML=t
}function drawFilterPanel(){document.write('<div id="filter_panel_nf">'+filterdiv+"</div>");
document.write("<style>#runtimespod{top:82px;}</style>");
document.write("<style>#productspod{top:99px;}</style>");
document.write(runtimespod);
document.write(productspod)
}function setFiltersWithURLArgs(b){turnAllFiltersOff();
while(b.length){var e=b;
var f=-1;
if((f=b.indexOf("&"))!=-1){e=b.substring(0,f)
}var d=e.indexOf("=");
var a=e.substring(0,d);
var c=e.substring(d+1);
if(a.indexOf("filter_"!=-1)){setFilterCookie(a,c);
setRadioButtonState(a.substring("filter_".length),c,"checked")
}if(f>0){b=b.substring(f+1)
}else{b=""
}}}function setFilterCookie(a,h){var b=new Date();
b.setDate(b.getDate()+90);
var f=new String(this.location);
var d="actionscript/3/";
var g=f.indexOf(d);
if(g==-1){d="langref/";
g=f.indexOf(d)
}var k=f.substring(0,g);
var e=new Array();
e=k.split("/");
e[0]="";
e[1]="";
e[2]="";
k=e.join("/");
k=k.substring(2);
var c="path="+k+";";
if(navigator.userAgent.indexOf("Firefox")!=-1){c="path="+k+";domain="+theHost+";"
}else{if(navigator.userAgent.indexOf("Community Help Client")!=-1){c="path=/;"
}else{if(location.protocol=="file:"){c="path=/;"
}}}document.cookie=a.toLowerCase()+"="+h.toLowerCase()+";"+c+"expires="+b.toGMTString();
if(typeof(localStorage)!="undefined"){localStorage.setItem(a.toLowerCase(),h.toLowerCase())
}}function setRadioButtonState(b,d,c){var a="rb_"+b+"_"+d.replace(".","_");
if(document.getElementById(a)){document.getElementById(a).checked=c
}}function turnAllFiltersOff(){turnRuntimeFiltersOff();
turnProductFiltersOff()
}function turnRuntimeFiltersOff(){for(i=0;
i<rb_runtime_array.length;
i++){setFilterCookie("filter_"+rb_runtime_array[i].name,"none");
setRadioButtonState(rb_runtime_array[i].name,"none","checked")
}}function turnProductFiltersOff(){for(i=0;
i<rb_product_array.length;
i++){setFilterCookie("filter_"+rb_product_array[i].name,"none");
setRadioButtonState(rb_product_array[i].name,"none","checked")
}}function updateStateOnClick(c){try{var b;
if(c.indexOf("runtime")!=-1){b=rb_runtime_array
}else{b=rb_product_array
}for(i=0;
i<b.length;
i++){if(document.getElementById(b[i].id).checked){setFilterCookie("filter_"+b[i].name,b[i].version)
}}}catch(a){}}function updateState(h){try{var c="";
var b="";
var l=false;
var d;
var g;
if(h.indexOf("runtime")!=-1){c="<font color='blue' onMouseOver='showFilterPods(1)'>"+runtimesLabel+": </font>";
g=rb_runtime_array;
d="runtimes"
}else{c="<font color='blue' onMouseOver='showFilterPods(2)'>"+productsLabel+": </font>";
g=rb_product_array;
d="products"
}for(i=0;
i<g.length;
i++){if(document.getElementById(g[i].id).checked){if(g[i].version.indexOf("none")==-1){if(l==true){b+=", "
}b+=g[i].description;
l=true
}}}if(!l){b=noneLabel
}document.getElementById(d).innerHTML=b;
if(b.length>145){var f=b.substring(0,145);
var a=f.lastIndexOf(",");
document.getElementById(d).innerHTML=b.substring(0,a)+"...";
document.getElementById(d).title=b
}else{document.getElementById(d).innerHTML=b;
document.getElementById(d).title=b
}}catch(k){}}function showFilterPods(a){if(a==1){pod=document.getElementById("runtimespod");
if(pod.style.visibility!="visible"){document.getElementById("runtimes").style.color="blue";
showRuntimes()
}}else{if(a==2){pod=document.getElementById("productspod");
if(pod.style.visibility!="visible"){document.getElementById("products").style.color="blue";
showProducts()
}}}}function hideFilterPods(b,a){curEl=document.elementFromPoint(b.clientX,b.clientY);
if(a==1){filterText=document.getElementById("runtimes");
pod=document.getElementById("runtimespod");
if(filterText.contains){if(!filterText.contains(curEl)&&!pod.contains(curEl)){filterText.style.color="black";
hideRuntimes()
}}else{if(((filterText.compareDocumentPosition(curEl)&16)==0)&&((pod.compareDocumentPosition(curEl)&16)==0)&&curEl!=filterText&&curEl!=pod){filterText.style.color="black";
hideRuntimes()
}}}else{if(a==2){filterText=document.getElementById("products");
pod=document.getElementById("productspod");
if(filterText.contains){if(!filterText.contains(curEl)&&!pod.contains(curEl)){filterText.style.color="black";
hideProducts()
}}else{if(((filterText.compareDocumentPosition(curEl)&16)==0)&&((pod.compareDocumentPosition(curEl)&16)==0)&&curEl!=filterText&&curEl!=pod){filterText.style.color="black";
hideProducts()
}}}}}function toggleRuntimes(){pod=document.getElementById("runtimespod");
if(pod.style.visibility=="hidden"){hideProducts();
document.getElementById("runtimes").style.backgroundImage="url('/en_US/shared/ahpods/images/filter_show.png')";
pod.style.visibility="visible"
}else{hideRuntimes()
}doFilterStateChange1()
}function showRuntimes(){pod=document.getElementById("runtimespod");
document.getElementById("runtimes").style.backgroundImage="url('/en_US/shared/ahpods/images/filter_show.png')";
pod.style.visibility="visible"
}function hideRuntimes(){updateState("runtime");
document.getElementById("runtimes").style.backgroundImage="url('/en_US/shared/ahpods/images/pod_hide.png')";
document.getElementById("runtimes").style.color="black";
document.getElementById("runtimespod").style.visibility="hidden";
doFilterStateChange1()
}function toggleProducts(){var a=document.getElementById("productspod");
if(a.style.visibility=="hidden"){hideRuntimes();
document.getElementById("products").style.backgroundImage="url('/en_US/shared/ahpods/images/filter_show.png')";
a.style.visibility="visible"
}else{hideProducts()
}doFilterStateChange1()
}function showProducts(){var a=document.getElementById("productspod");
document.getElementById("products").style.backgroundImage="url('/en_US/shared/ahpods/images/filter_show.png')";
a.style.visibility="visible"
}function hideProducts(){updateState("product");
document.getElementById("products").style.backgroundImage="url('/en_US/shared/ahpods/images/pod_hide.png')";
document.getElementById("products").style.color="black";
document.getElementById("productspod").style.visibility="hidden";
doFilterStateChange1()
}function toggleFilterPanel(){if(document.getElementById("filter_panel").style.display=="none"){showFilterPanel()
}else{hideFilterPanel()
}}function hideFilterPanel(){hideRuntimes();
hideProducts();
doFilterStateChange1();
try{document.getElementById("filter_panel").style.display="none";
document.getElementById("img_filter_handle").src="/en_US/shared/ahpods/images/filter_show.png";
document.getElementById("showhidefilters").innerHTML="Show filters";
document.cookie="ASFilter=hidden;path=/";
if(isMSIE){document.getElementById("filterSpacer").style.height="0px"
}else{document.getElementById("filterSpacer").style.height="10px"
}}catch(a){}}function showFilterPanel(){try{document.getElementById("filter_panel").style.display="block";
document.getElementById("img_filter_handle").src="/en_US/shared/ahpods/images/filter_hide.png";
document.getElementById("showhidefilters").innerHTML="Hide filters";
document.cookie="ASFilter=visible;path=/";
if(isMSIE){document.getElementById("filterSpacer").style.height="70px"
}else{document.getElementById("filterSpacer").style.height="80px"
}}catch(a){}}function toggleFilterPanelNF(){if(document.getElementById("filter_panel_nf").style.display=="none"){showFilterPanelNF()
}else{hideFilterPanelNF()
}}function showFilterPanelNF(){try{document.getElementById("filter_panel_nf").style.display="block";
document.getElementById("img_filter_handle").src="/en_US/shared/ahpods/images/filter_hide.png";
document.getElementById("showhidefilters").innerHTML="Hide filters";
if(isMSIE){document.getElementById("asfilterhandle_nf").style.top="165px";
document.getElementById("filterSpacer").style.height="170px"
}else{document.getElementById("asfilterhandle_nf").style.top="165px";
document.getElementById("filterSpacer").style.height="180px"
}document.cookie="ASFilter=visible;path=/"
}catch(a){}}function hideFilterPanelNF(){hideRuntimes();
hideProducts();
doFilterStateChange1();
try{document.getElementById("filter_panel_nf").style.display="none";
document.getElementById("img_filter_handle").src="/en_US/shared/ahpods/images/filter_show.png";
if(isMSIE){document.getElementById("filterSpacer").style.height="100px"
}else{document.getElementById("filterSpacer").style.height="110px"
}}catch(a){}document.cookie="ASFilter=hidden;path=/"
}function getUserPrefs(){var a=document.cookie;
var k=0;
if(a==null&&typeof(localStorage)!="undefined"){a="";
for(i=0;
i<localStorage.length;
i++){var e=localStorage.key(i);
var g=localStorage.getItem(e);
a=a+e+"="+g+"; "
}}for(i=0;
i<runtime_array.length;
i++){var f=a.indexOf("filter_"+runtime_array[i].name+"=");
var d="rb_"+runtime_array[i].name;
if(f>-1){var h=a.substring(f+("filter_"+runtime_array[i].name+"=").length);
var c=h.indexOf(";");
h=h.substring(0,c);
if(h=="none"){if(document.getElementById(d)){document.getElementById(d).checked=false
}}else{if(document.getElementById(d)){document.getElementById(d).checked=true
}k=1
}setRadioButtonState(runtime_array[i].name,h,"checked")
}else{if(runtime_array[i].defaultValue=="none"){if(document.getElementById(d)){document.getElementById(d).checked=false
}}else{if(document.getElementById(d)){document.getElementById(d).checked=true
}k=1
}setRadioButtonState(runtime_array[i].name,runtime_array[i].defaultValue,"checked")
}}if(k){if(document.getElementById("rb_runtime")){document.getElementById("rb_runtime").checked=true
}}else{if(document.getElementById("rb_runtime")){document.getElementById("rb_runtime").checked=false
}}k=0;
for(i=0;
i<product_array.length;
i++){var b="filter_"+product_array[i].name;
b=b.toLowerCase();
var f=a.indexOf(b+"=");
var d="rb_"+product_array[i].name;
if(f>-1){var h=a.substring(f+("filter_"+product_array[i].name+"=").length);
var c=h.indexOf(";");
h=h.substring(0,c);
if(h=="none"){if(document.getElementById(d)){document.getElementById(d).checked=false
}}else{if(document.getElementById(d)){document.getElementById(d).checked=true
}k=1
}setRadioButtonState(product_array[i].name,h,"checked")
}else{if(product_array[i].defaultValue=="none"){if(document.getElementById(d)){document.getElementById(d).checked=false
}}else{if(document.getElementById(d)){document.getElementById(d).checked=true
}k=1
}setRadioButtonState(product_array[i].name,product_array[i].defaultValue,"checked")
}}if(k){if(document.getElementById("rb_product")){document.getElementById("rb_product").checked=true
}}else{if(document.getElementById("rb_product")){document.getElementById("rb_product").checked=false
}}}function doFilterStateChangePackageList(){var pkgList=document.getElementById("packagelist");
elements=pkgList.getElementsByTagName("tr");
for(var i=0;
i<elements.length;
i++){node=elements[i];
if((!node.attributes["class"])||node.attributes["class"].nodeValue.indexOf("hideInherited")==-1){if(isProductVisible(node)&&isRuntimeVisible(node)){eval("node.style.display =''")
}else{eval("node.style.display ='none'")
}}}}function doFilterStateChange1(){elements=document.getElementsByTagName("tr");
for(var i=0;
i<elements.length;
i++){node=elements[i];
if(isProductVisible(node)&&isRuntimeVisible(node)){eval("node.style.display =''")
}else{eval("node.style.display ='none'")
}}elements=document.getElementsByTagName("span");
for(var i=0;
i<elements.length;
i++){node=elements[i];
if(node.attributes.id&&node.attributes.id.nodeValue=="pageFilter"){if(isProductVisible(node)&&isRuntimeVisible(node)){eval("node.style.display =''")
}else{eval("node.style.display ='none'")
}}}elements=document.getElementsByName("ftr");
for(var i=0;
i<elements.length;
i++){node=elements[i];
if(node.attributes.runtime||node.attributes.product){if(isProductVisible(node)&&isRuntimeVisible(node)){var inputDiv=document.getElementById("cls_searchbox");
if(inputDiv.value==""||inputDiv.value==inputDiv.defaultValue){eval("node.style.display =''")
}else{}}else{eval("node.style.display ='none'")
}}}if(location.href.indexOf("package-detail.html")>0){setRowColorForPackage("Property");
setRowColorForPackage("Function");
setRowColorForPackage("Constant");
setRowColorForPackage("Class");
setRowColorForPackage("Interface")
}else{if(location.href.indexOf("package-summary.html")>0){setRowColorForPackage("")
}else{if(location.href.indexOf("class-summary.html")>0){setRowColorClassTableSummary()
}else{if(location.href.indexOf("all-index")>0){setRowColorIndexTable()
}else{setRowColorClassTables("Constant");
setRowColorClassTables("ProtectedConstant");
setRowColorClassTables("Property");
setRowColorClassTables("ProtectedProperty");
setRowColorClassTables("Method");
setRowColorClassTables("ProtectedMethod");
setRowColorClassTables("Event");
setRowColorClassTables("commonStyle");
setRowColorClassTables("sparkStyle");
setRowColorClassTables("haloStyle");
setRowColorClassTables("mobileStyle");
setRowColorClassTables("SkinPart");
setRowColorClassTables("SkinState");
setRowColorClassTables("Effect")
}}}}}function setRowColorForPackage(b){var a=findObject("summaryTableId"+b);
if(a!=null){var c=0;
for(j=1;
j<a.rows.length;
j++){if(a.rows[j].style.display.indexOf("none")==-1){c++;
a.rows[j].className=(c%2==0)?"prow0":"prow1"
}}}}function getElementsByClassName(a,b){if(a.getElementsByClassName){return a.getElementsByClassName(b)
}else{return(function c(m,k){if(k==null){k=document
}var h=[],g=k.getElementsByTagName("*"),d=g.length,l=new RegExp("(^|\\s)"+m+"(\\s|$)"),f,e;
for(f=0,e=0;
f<d;
f++){if(l.test(g[f].className)){h[e]=g[f];
e++
}}return h
})(b,a)
}}function setRowColorClassTableSummary(){var c=getElementsByClassName(document,"summaryTable");
var b=c[0];
if(b!=null){var d=0;
for(var a=1;
a<b.rows.length;
a++){if(b.rows[a].style.display.indexOf("none")==-1){d++;
b.rows[a].className=(d%2==0)?"prow0":"prow1"
}}}}function setRowColorClassTables(d){var f="#F2F2F2";
var c=findObject("summaryTable"+d);
if(c!=null){var a=getCookie("showInherited"+d)=="true";
var e=0;
for(var b=1;
b<c.rows.length;
b++){if(a){if(c.rows[b].style.display.indexOf("none")==-1){e++;
c.rows[b].bgColor=(e%2==0)?f:"#FFFFFF"
}}else{if(c.rows[b].className.indexOf("hideInherited")==-1){if(c.rows[b].style.display.indexOf("none")==-1){e++;
c.rows[b].bgColor=(e%2==0)?f:"#FFFFFF"
}}}}}}function setRowColorIndexTable(){var b=findObject("tbl1");
var c=1;
if(b!=null){for(var a=1;
a<b.rows.length;
a++){if(b.rows[a].style.display.indexOf("none")==-1){c++;
b.rows[a].className=(c%4<2)?"odd":"even"
}}}}function isProductVisible(g){if(g.attributes.product){var f=g.attributes.product.nodeValue.toLowerCase();
var c,a;
for(c=0;
c<rb_product_array.length;
c++){var b=rb_product_array[c].id;
if(!rb_product_array[c].rb){rb_product_array[c].rb=document.getElementById(b)
}if(rb_product_array[c].rb&&rb_product_array[c].rb.checked){if(rb_product_array[c].matches){for(a=0;
a<rb_product_array[c].matches.length;
a++){var e=rb_product_array[c].matches[a].toLowerCase();
var d=f.indexOf(e);
if(d!=-1){return true
}}}}}}else{return true
}return false
}function isRuntimeVisible(a){if(a.attributes.runtime){var l=false;
for(d=0;
d<runtime_array.length;
d++){var g="rb_"+runtime_array[d].name+"_none";
if(!document.getElementById(g).checked){l=true
}}if(!l){if(a.attributes.product){return true
}else{return false
}}var b=a.attributes.runtime.nodeValue.toLowerCase();
var d,c;
for(d=0;
d<rb_runtime_array.length;
d++){var e=rb_runtime_array[d].id;
if(!rb_runtime_array[d].rb){rb_runtime_array[d].rb=document.getElementById(e)
}if(rb_runtime_array[d].rb&&rb_runtime_array[d].rb.checked){if(rb_runtime_array[d].matches){for(c=0;
c<rb_runtime_array[d].matches.length;
c++){var h=rb_runtime_array[d].matches[c].toLowerCase();
var f=b.indexOf(h);
if(f!=-1){return true
}}}}}}else{return true
}return false
};