(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{227:function(n,e,a){__NEXT_REGISTER_PAGE("/",function(){return n.exports=a(228),{page:n.exports.default}})},228:function(n,e,a){"use strict";a.r(e);var t=a(0),o=a.n(t),l=a(26),r=a.n(l),c=(a(64),a(27));e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null,o.a.createElement("meta",{name:"Description",content:"Make a color palette in an intuitive way"}),o.a.createElement("title",null,"Make a color palette")),o.a.createElement(c.a,{libraryName:"Basic",libraryColor:"black",initialState:{hues:[{name:"red",value:348},{name:"orange",value:30},{name:"yellow",value:55},{name:"green",value:134},{name:"cyan",value:187},{name:"blue",value:237},{name:"magenta",value:295}],lightnesses:[{name:"shade",value:25},{name:"tone",value:50},{name:"tint",value:75}],saturation:100},exportTypes:[{name:"CSS",toString:function(n){var e=n.hues,a=n.lightnesses,t=(n.saturation,n.hsl);return":root {\n".concat(e.map(function(n){return a.map(function(e){return"  --".concat(n.name,"_").concat(e.name,": ").concat(t(n.name,e.name),";")}).join("\n")}).join("\n"),"\n}")}},{name:"JSON",toString:function(n){var e=n.hues,a=n.lightnesses,t=(n.saturation,n.hsl);return"{\n".concat(e.map(function(n){return a.map(function(e){return'  "'.concat(n.name,"_").concat(e.name,'": "').concat(t(n.name,e.name),'"')}).join(",\n")}).join(",\n"),"\n}")}}],columnClass:"col-lg-2 col-md-3 col-6"}))}}},[[227,1,0]]]);