function filterclick(b){updateStateOnClick(b);
updateState(b);
doFilterStateChange1();
var a=document.getElementById("cls_clear_search");
if(typeof(a)!="undefined"&&a!=null&&a.className=="search_active"){clsClearSearchButton()
}var a=document.getElementById("pkg_clear_search");
if(typeof(a)!="undefined"&&a!=null&&a.className=="search_active"){pkgClearSearchButton()
}}function showHideFilters(){if(document.getElementById("filter_panel_float").style.display=="none"){showHideFiltersCookie(true)
}else{showHideFiltersCookie(false)
}}function showHideFiltersCookie(a){if(a){var b=document.getElementById("filterImg");
b.className="filterImg_hide";
b.title=hideFilters;
filterImgText.innerHTML=hideFilters;
$("#maincontainer").animate({top:"171px"},{duration:500,queue:false});
$("#filter_panel_float").slideDown(500);
setShowHideFilters("showfilters")
}else{var b=document.getElementById("filterImg");
b.className="filterImg_show";
b.title=showFilters;
filterImgText.innerHTML=showFilters;
$("#maincontainer").animate({top:"113px"},{duration:500,queue:false});
$("#filter_panel_float").slideUp(500);
setShowHideFilters("hidefilters")
}}function setShowHideFilters(a){var b=new Date();
b.setDate(b.getDate()+90);
var c="path=/;";
if(navigator.userAgent.indexOf("Firefox")!=-1){var d=document.location.hostname;
c="path=/;domain="+d+";"
}document.cookie="asdocs_filter_view="+a+";"+c+"expires="+b.toGMTString()
}function mainmenu(){$(" #nav ul ").css({display:"none"});
$(" #nav li input[type=checkbox]").click(function(){var b=$(this).parent().parent();
var a=$(this).attr("id");
if($(this).is(":checked")){if(a!="rb_runtime"&&a!="rb_product"){var c=b.find("ul:first").find("li:first").find("input[type=radio]:first");
c.attr("checked",true);
c.trigger("click");
var d=b.parent().parent();
if(d.attr("id")=="RuntimesMenu"){filterclick("runtime")
}else{filterclick("product")
}}else{if(a=="rb_runtime"){for(i=0;
i<runtime_array.length;
i++){var e="rb_"+runtime_array[i].name;
if(runtime_array[i].topversion!="none"){if(document.getElementById(e)){document.getElementById(e).checked=true
}}setRadioButtonState(runtime_array[i].name,runtime_array[i].topversion,"checked")
}filterclick("runtime")
}else{for(i=0;
i<product_array.length;
i++){var e="rb_"+product_array[i].name;
if(product_array[i].topversion!="none"){if(document.getElementById(e)){document.getElementById(e).checked=true
}}setRadioButtonState(product_array[i].name,product_array[i].topversion,"checked")
}filterclick("product")
}}}else{if(a!="rb_runtime"&&a!="rb_product"){var c=b.find("ul:first").find("li:last").find("input[type=radio]:first");
c.attr("checked",true);
c.trigger("click");
var d=b.parent().parent();
if(d.attr("id")=="RuntimesMenu"){filterclick("runtime")
}else{filterclick("product")
}}else{if(a=="rb_runtime"){for(i=0;
i<runtime_array.length;
i++){var e="rb_"+runtime_array[i].name;
if(document.getElementById(e)){document.getElementById(e).checked=false
}setRadioButtonState(runtime_array[i].name,"none","checked")
}filterclick("runtime")
}else{for(i=0;
i<product_array.length;
i++){var e="rb_"+product_array[i].name;
if(document.getElementById(e)){document.getElementById(e).checked=false
}setRadioButtonState(product_array[i].name,"none","checked")
}filterclick("product")
}}}});
$(" #nav a").click(function(b){if(b.target!==this){return
}var a=$(this).find("input:first");
if(a.attr("type")!="radio"){if(a.is(":checked")){a.attr("checked",false);
a.trigger("click");
a.attr("checked",false)
}else{a.attr("checked",true);
a.trigger("click");
a.attr("checked",true)
}}else{if(!(a.is(":checked"))){$(this).parents().eq(2).find("a:first").find("input:first").attr("checked",true);
$(this).parents().eq(4).find("a:first").find("input:first").attr("checked",true);
a.attr("checked",true);
a.trigger("click");
if($(this).parents().eq(4).attr("id")=="RuntimesMenu"){filterclick("runtime")
}else{filterclick("product")
}}}});
$(" #nav li input[type=radio]").click(function(){if($(this).attr("id").indexOf("_none")==-1){$(this).parents().eq(3).find("a:first").find("input:first").attr("checked",true);
$(this).parents().eq(5).find("a:first").find("input:first").attr("checked",true)
}});
$(" #nav > li").hover(function(){if($(this).find('a[id="RuntimesMenu"]').size()!=0){$(this).find('a[id="RuntimesMenu"]:first').css({"background-color":"grey",color:"white"})
}else{$(this).find('a[id="ProductsMenu"]:first').css({"background-color":"grey",color:"white"})
}},function(){if($(this).find('a[id="RuntimesMenu"]').size()!=0){$(this).find('a[id="RuntimesMenu"]:first').css({"background-color":"transparent",color:"black"})
}else{$(this).find('a[id="ProductsMenu"]:first').css({"background-color":"transparent",color:"black"})
}});
$(" #nav li").hover(function(){if($(this).find("ul:first").find("li").size()!=2){$(this).find("ul:first").css({visibility:"visible",display:"none"}).show(400)
}},function(){$(this).find("ul:first").css({visibility:"hidden"})
});
$(" #nav li li").hover(function(){$(this).find("a:first").css({"background-color":"#00A2E8",color:"white"})
},function(){$(this).find("a:first").css({"background-color":"#E8E8E8",color:"black"})
})
};