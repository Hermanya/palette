(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{232:function(n,e,a){__NEXT_REGISTER_PAGE("/",function(){return n.exports=a(233),{page:n.exports.default}})},233:function(n,e,a){"use strict";a.r(e);var t=a(0),o=a.n(t),r=a(21),u=a.n(r),l=(a(54),a(22));e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("meta",{name:"Description",content:"Make a color palette in an intuitive way"}),o.a.createElement("title",null,"Make a color palette")),o.a.createElement(l.a,{libraryName:"Basic",libraryColor:"black",initialState:{hues:[{name:"blue",value:211},{name:"indigo",value:253},{name:"purple",value:271},{name:"pink",value:332},{name:"red",value:354},{name:"orange",value:27},{name:"yellow",value:45},{name:"green",value:134},{name:"teal",value:162},{name:"cyan",value:188}],lightnesses:["900","800","700","600","500","400","300","200","100"].map(function(n,e,a){var t=Math.round(10+90/a.length*e);return{name:n,value:t,domain:[t-5,t+5]}}),saturation:100},exportTypes:[{name:"CSS",toString:function(n){var e=n.hues,a=n.lightnesses,t=(n.saturation,n.hsl);return":root {\n".concat(e.map(function(n){return a.map(function(e){return"  --".concat(n.name,"_").concat(e.name,": ").concat(t(n.name,e.name),";")}).join("\n")}).join("\n"),"\n}")}},{name:"JSON",toString:function(n){var e=n.hues,a=n.lightnesses,t=(n.saturation,n.hsl);return"{\n".concat(e.map(function(n){return a.map(function(e){return'  "'.concat(n.name,"_").concat(e.name,'": "').concat(t(n.name,e.name),'"')}).join(",\n")}).join(",\n"),"\n}")}}],columnClass:"col"}))}}},[[232,1,0]]]);