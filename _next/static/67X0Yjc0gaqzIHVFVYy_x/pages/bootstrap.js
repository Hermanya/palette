(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(e,n,a){__NEXT_REGISTER_PAGE("/bootstrap",function(){return e.exports=a(209),{page:e.exports.default}})},209:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(26),o=a.n(r),u=(a(64),a(27));n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("meta",{name:"Description",content:"Make a color palette in an intuitive way"}),l.a.createElement("title",null,"Make a bootstrap color palette")),l.a.createElement(u.a,{libraryName:"Bootstrap",libraryColor:"#563d7c",initialState:{hues:[{name:"blue",value:211},{name:"indigo",value:253},{name:"purple",value:271},{name:"pink",value:332},{name:"red",value:354},{name:"orange",value:27},{name:"yellow",value:45},{name:"green",value:134},{name:"teal",value:162},{name:"cyan",value:188}],lightnesses:[{name:"tone",value:50,domain:[25,75]}],saturation:80},exportTypes:[{name:"SASS",toString:function(e){var n=e.hues,a=(e.lightnesses,e.saturation,e.hsl);return n.map(function(e){return"$".concat(e.name,": ").concat(a(e.name,"tone"),";")}).join("\n")+"\n\n$primary:       $blue;\n$secondary:     $gray-600;\n$success:       $green;\n$info:          $cyan;\n$warning:       $yellow;\n$danger:        $red;\n            "}}],columnClass:"col-lg-4 col-md-3 col-6"}))}}},[[208,1,0]]]);