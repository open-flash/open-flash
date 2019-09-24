function AC_AddExtension(b,a){if(unescape(location.href).split("#!").length>1){b=getBaseRef()+getAjaxBaseFragment(location.href)+b
}if(b.indexOf("?")!=-1){return b.replace(/\?/,a+"?")
}else{return b+a
}}function AC_Generateobj(f,e,a){var d="<object ";
for(var b in f){d+=b+'="'+f[b]+'" '
}d+=">";
for(var b in e){d+='<param name="'+b+'" value="'+e[b]+'" /> '
}d+="<embed ";
for(var b in a){d+=b+'="'+a[b]+'" '
}d+=" ></embed></object>";
var c=f.id.substr(7,1);
$(".swfHolderDiv")[c-1].innerHTML=d
}function AC_FL_RunContent(){var a=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");
AC_Generateobj(a.objAttrs,a.params,a.embedAttrs)
}function AC_GetArgs(b,e,g,d,h){var a=new Object();
a.embedAttrs=new Object();
a.params=new Object();
a.objAttrs=new Object();
for(var c=0;
c<b.length;
c=c+2){var f=b[c].toLowerCase();
switch(f){case"classid":break;
case"pluginspage":a.embedAttrs[b[c]]=b[c+1];
break;
case"src":case"movie":b[c+1]=AC_AddExtension(b[c+1],e);
a.embedAttrs.src=b[c+1];
a.params[g]=b[c+1];
break;
case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":a.objAttrs[b[c]]=b[c+1];
break;
case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"id":case"tabindex":a.embedAttrs[b[c]]=a.objAttrs[b[c]]=b[c+1];
break;
default:a.embedAttrs[b[c]]=a.params[b[c]]=b[c+1]
}}a.objAttrs.classid=d;
if(h){a.embedAttrs.type=h
}return a
};