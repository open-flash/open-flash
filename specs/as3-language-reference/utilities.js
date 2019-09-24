var YAHOO=window.YAHOO||{};
YAHOO.namespace=function(c){if(!c||!c.length){return null
}var d=c.split(".");
var b=YAHOO;
for(var a=(d[0]=="YAHOO")?1:0;
a<d.length;
++a){b[d[a]]=b[d[a]]||{};
b=b[d[a]]
}return b
};
YAHOO.log=function(a,b){if(YAHOO.widget.Logger){YAHOO.widget.Logger.log(null,a,b)
}else{return false
}};
YAHOO.namespace("util");
YAHOO.namespace("widget");
YAHOO.namespace("example");