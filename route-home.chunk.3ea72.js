(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(t,e,n){"use strict";n.r(e);var o=n("hosL"),s=n("FA6U"),r=n.n(s),a=n("Y3FI"),i=n("D+jO"),c=n.n(i),h=n("8NOS"),p=n.n(h),l=n("C+/E"),u=n.n(l),d=n("ztrv"),m=n("FuQB"),f=n.n(m);class y extends o.Component{constructor(...t){super(...t),this.state={category:""},this.categoryChange=t=>{const e=t.target.value;this.setState({category:e}),this.props.onCategoryChange(e)}}componentDidMount(){const t=d.a.categories.length,e=Math.floor(Math.random()*t),n=d.a.categories[e].name;this.setState({category:n}),this.props.onCategoryChange(n)}render(){const t=d.a.categories.map(t=>Object(o.h)("option",{key:t.name,value:t.name},t.name));return Object(o.h)("select",{"aria-label":"Hieroglyph Categories",class:f.a.categoryselector,value:this.state.category,oninput:this.categoryChange},t)}}var g=n("qLxz");class C extends o.Component{constructor(...t){super(...t),this.state={glyphs:[]},this.onGlyphClick=(t,e)=>{this.props.onGlyphClick&&this.props.onGlyphClick(t,e)},this.onCategoryChange=t=>{this.setState({glyphs:d.a.glyphsByCategoryName(t)})}}render(){const t=this.state.glyphs.map((t,e)=>Object(o.h)(g.a,{key:t.num,index:e,onGlyphClick:()=>this.onGlyphClick(t,e),glyph:t}));return Object(o.h)("div",{class:u.a.chart},Object(o.h)(y,{onCategoryChange:this.onCategoryChange}),Object(o.h)("div",null,t))}}var b=n("8xaq");class v extends o.Component{constructor(...t){super(...t),this.state={glyphs:[],saving:!1},this.addGlyph=t=>{this.state.glyphs.push(t),this.setState({glyphs:this.state.glyphs})},this.removeGlyph=(t,e)=>{const n=this.state.glyphs;n.splice(e,1),this.setState({glyphs:n})},this.shareStory=()=>{const t=this.state.glyphs.map(t=>t.num).join(","),e=c.a.compressToEncodedURIComponent(t);Object(a.route)("/story?"+e)}}render(){return Object(o.h)("div",{class:p.a.storycomposer},Object(o.h)(b.a,{glyphs:this.state.glyphs,onGlyphClick:this.removeGlyph,emptyMessage:"Click Hieroglyphs below to create your story"}),Object(o.h)("button",{type:"button",onClick:this.shareStory,disabled:!this.state.glyphs.length||this.state.saving},"Share Story"),Object(o.h)(C,{onGlyphClick:this.addGlyph}))}}e.default=()=>Object(o.h)("main",{class:r.a.home},Object(o.h)(v,null))},"8NOS":function(t){t.exports={storycomposer:"storycomposer__d7MRf"}},"8xaq":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("hosL"),s=n("qiC/"),r=n.n(s),a=n("qLxz");class i extends o.Component{constructor(...t){super(...t),this.onGlyphClick=(t,e)=>{this.props.onGlyphClick&&this.props.onGlyphClick(t,e)}}render(){const t=(this.props.glyphs||[]).map((t,e)=>Object(o.h)(a.a,{key:t.num,index:e,onGlyphClick:()=>this.onGlyphClick(t,e),glyph:t})),e=Object(o.h)("p",null,this.props.emptyMessage);return Object(o.h)("div",{class:r.a.storyboard},t.length?t:e)}}},"C+/E":function(t){t.exports={chart:"chart__37oUI"}},"D+jO":function(t,e,n){var o,s=function(){function t(t,e){if(!s[t]){s[t]={};for(var n=0;n<t.length;n++)s[t][t.charAt(n)]=n}return s[t][e]}var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",s={},r={compressToBase64:function(t){if(null==t)return"";var e=r._compress(t,6,(function(t){return n.charAt(t)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:r._decompress(e.length,32,(function(o){return t(n,e.charAt(o))}))},compressToUTF16:function(t){return null==t?"":r._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:r._decompress(t.length,16384,(function(e){return t.charCodeAt(e)-32}))},compressToUint8Array:function(t){for(var e=r.compress(t),n=new Uint8Array(2*e.length),o=0,s=e.length;o<s;o++){var a=e.charCodeAt(o);n[2*o]=a>>>8,n[2*o+1]=a%256}return n},decompressFromUint8Array:function(t){if(null==t)return r.decompress(t);for(var n=new Array(t.length/2),o=0,s=n.length;o<s;o++)n[o]=256*t[2*o]+t[2*o+1];var a=[];return n.forEach((function(t){a.push(e(t))})),r.decompress(a.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":r._compress(t,6,(function(t){return o.charAt(t)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),r._decompress(e.length,32,(function(n){return t(o,e.charAt(n))})))},compress:function(t){return r._compress(t,16,(function(t){return e(t)}))},_compress:function(t,e,n){if(null==t)return"";var o,s,r,a={},i={},c="",h="",p="",l=2,u=3,d=2,m=[],f=0,y=0;for(r=0;r<t.length;r+=1)if(c=t.charAt(r),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=u++,i[c]=!0),h=p+c,Object.prototype.hasOwnProperty.call(a,h))p=h;else{if(Object.prototype.hasOwnProperty.call(i,p)){if(p.charCodeAt(0)<256){for(o=0;o<d;o++)f<<=1,y==e-1?(y=0,m.push(n(f)),f=0):y++;for(s=p.charCodeAt(0),o=0;o<8;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1}else{for(s=1,o=0;o<d;o++)f=f<<1|s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s=0;for(s=p.charCodeAt(0),o=0;o<16;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1}0==--l&&(l=Math.pow(2,d),d++),delete i[p]}else for(s=a[p],o=0;o<d;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1;0==--l&&(l=Math.pow(2,d),d++),a[h]=u++,p=String(c)}if(""!==p){if(Object.prototype.hasOwnProperty.call(i,p)){if(p.charCodeAt(0)<256){for(o=0;o<d;o++)f<<=1,y==e-1?(y=0,m.push(n(f)),f=0):y++;for(s=p.charCodeAt(0),o=0;o<8;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1}else{for(s=1,o=0;o<d;o++)f=f<<1|s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s=0;for(s=p.charCodeAt(0),o=0;o<16;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1}0==--l&&(l=Math.pow(2,d),d++),delete i[p]}else for(s=a[p],o=0;o<d;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1;0==--l&&(l=Math.pow(2,d),d++)}for(s=2,o=0;o<d;o++)f=f<<1|1&s,y==e-1?(y=0,m.push(n(f)),f=0):y++,s>>=1;for(;;){if(f<<=1,y==e-1){m.push(n(f));break}y++}return m.join("")},decompress:function(t){return null==t?"":""==t?null:r._decompress(t.length,32768,(function(e){return t.charCodeAt(e)}))},_decompress:function(t,n,o){var s,r,a,i,c,h,p,l=[],u=4,d=4,m=3,f="",y=[],g={val:o(0),position:n,index:1};for(s=0;s<3;s+=1)l[s]=s;for(a=0,c=Math.pow(2,2),h=1;h!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),a|=(i>0?1:0)*h,h<<=1;switch(a){case 0:for(a=0,c=Math.pow(2,8),h=1;h!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),a|=(i>0?1:0)*h,h<<=1;p=e(a);break;case 1:for(a=0,c=Math.pow(2,16),h=1;h!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),a|=(i>0?1:0)*h,h<<=1;p=e(a);break;case 2:return""}for(l[3]=p,r=p,y.push(p);;){if(g.index>t)return"";for(a=0,c=Math.pow(2,m),h=1;h!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),a|=(i>0?1:0)*h,h<<=1;switch(p=a){case 0:for(a=0,c=Math.pow(2,8),h=1;h!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),a|=(i>0?1:0)*h,h<<=1;l[d++]=e(a),p=d-1,u--;break;case 1:for(a=0,c=Math.pow(2,16),h=1;h!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=o(g.index++)),a|=(i>0?1:0)*h,h<<=1;l[d++]=e(a),p=d-1,u--;break;case 2:return y.join("")}if(0==u&&(u=Math.pow(2,m),m++),l[p])f=l[p];else{if(p!==d)return null;f=r+r.charAt(0)}y.push(f),l[d++]=r+f.charAt(0),r=f,0==--u&&(u=Math.pow(2,m),m++)}}};return r}();void 0===(o=function(){return s}.call(e,n,e,t))||(t.exports=o)},FA6U:function(t){t.exports={home:"home__MseGd"}},FuQB:function(t){t.exports={categoryselector:"categoryselector__TWRvG"}},N6VB:function(t){t.exports=function(t){let e=0;const n=t.length,o=[];for(;e<n-1;++e){let n=t.charCodeAt(e);n>=55296&&n<=56319&&(n=t.charCodeAt(e+1),n>=56320&&n<=57343)?(o.push(t.slice(e,e+2)),++e):o.push(t.charAt(e))}return o.push(t.charAt(e)),o}},qLxz:function(t,e,n){"use strict";var o=n("hosL"),s=n("qhrz"),r=n.n(s);e.a=function({glyph:t,index:e,onGlyphClick:n}){return n=n||function(){},Object(o.h)("button",{type:"button",class:r.a.hieroglyph+" hieroglyph",onClick:()=>n(t,e)},t.str)}},qhrz:function(t){t.exports={hieroglyph:"hieroglyph__TTQoI"}},"qiC/":function(t){t.exports={storyboard:"storyboard__1DR4y"}},ztrv:function(t,e,n){"use strict";function o(t){const e=[];for(let n=0,o=t.end-t.start;n<=o;n++){const o=n+t.start,r=o.toString(16),a=s(r);e.push({num:o,hex:r,str:a})}return e}function s(t){return String.fromCodePoint("0x"+t)}var r=n("N6VB"),a=n.n(r);const i=[{name:"Man and his occupations",codes:{start:77824,end:77903}},{name:"Woman and her occupations",codes:{start:77904,end:77914}},{name:"Anthropomorphic deities",codes:{start:77915,end:77941}},{name:"Parts of the human body",codes:{start:77942,end:78024}},{name:"Mammals",codes:{start:78034,end:78077}},{name:"Parts of mammals",codes:{start:78078,end:78142}},{name:"Birds",codes:{start:78143,end:78206}},{name:"Parts of birds",codes:{start:78207,end:78215}},{name:"Amphibious animals, reptiles, etc.",codes:{start:78216,end:78234}},{name:"Fish and parts of fish",codes:{start:78235,end:78242}},{name:"Invertebrates and lesser animals",codes:{start:78243,end:78252}},{name:"Trees and plants",codes:{start:78253,end:78318}},{name:"Sky, earth, water",codes:{start:78319,end:78415}},{name:"Buildings, parts of buildings, etc.",codes:{start:78416,end:78490}},{name:"Ships and parts of ships",codes:{start:78491,end:78503}},{name:"Domestics and funerary furniture",codes:{start:78504,end:78510}},{name:"Temple furniture and sacred emblems",codes:{start:78511,end:78544}},{name:"Crowns, dress, staves, etc.",codes:{start:78545,end:78598}},{name:"Warfare, hunting, and butchery",codes:{start:78599,end:78642}},{name:"Agriculture, crafts, and professions",codes:{start:78643,end:78689}},{name:"Rope, fiber, baskets, bags, etc.",codes:{start:78690,end:78766}},{name:"Vessels of stone and earthenware",codes:{start:78767,end:78798}},{name:"Loaves and cakes",codes:{start:78799,end:78810}},{name:"Writings, games, music",codes:{start:78811,end:78819}},{name:"Strokes, signs derived from Hieratic, geometrical figures",codes:{start:78820,end:78860}},{name:"Unclassified",codes:{start:78861,end:78879}}],c=77824,h=78879,p=78025,l=78033;e.a={glyphsByCategoryName:function(t){const e=i.filter(e=>e.name===t);return e?o(e[0].codes):[]},areCharactersInRange:function(t){const e=a()(t);for(let t=0;t<=e.length;++t)if(!this.isCharaterInRange(e[t]))return!1;return!0},isCharacterInRange:function(t){const e=t.codePointAt(0);return e>=c&&e<p||e>l&&e<=h},glyphsFromIntRange:o,glyphsFromCodesArray:function(t){return t.map(t=>{const e=t.toString(16);return{num:t,hex:e,str:s(e)}})},strFromHex:s,randomCharacterInRange:function t(){const e=Math.floor(Math.random()*(h-c))+c;return e>p&&e<l?t():s(e.toString(16))},categories:i}}}]);
//# sourceMappingURL=route-home.chunk.3ea72.js.map