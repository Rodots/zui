import{_ as e,H as t,o as E,c,J as l,E as o,V as n,C as p}from"./chunks/framework.1026cf52.js";const r={mounted(){onZUIReady(()=>{new zui.Menu("#menu1",{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{type:"divider"},{type:"heading",text:"更多操作"},{text:"导入",icon:"icon-upload-alt"},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:s=>console.log("> menuItem.clicked",s)}]}),new zui.Menu("#menu2",{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{type:"divider"},{type:"heading",text:"更多操作"},{text:"导入",icon:"icon-upload-alt"},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:s=>console.log("> menuItem.clicked",s)}],onClickItem:s=>{console.log("> menu.onClickItem",s)}}),new zui.Menu("#menu3",{items:[{text:"复制",icon:"icon-copy"},{text:"粘贴",icon:"icon-paste"},{text:"剪切"},{type:"divider"},{text:"更多操作",items:[{text:"导入",icon:"icon-upload-alt",items:[{text:"单次导入"},{text:"批量导入"}]},{text:"导出",icon:"icon-download-alt"},{text:"保存",icon:"icon-save",onClick:s=>console.log("> menuItem.clicked",s)}]}]})})}},v=JSON.parse('{"title":"菜单生成器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/menu/js.md","lastUpdated":null}'),y=n("",4),i=p("div",{id:"menu1",class:"w-32"},null,-1),F=n("",17),d=p("div",{id:"menu2",class:"w-32"},null,-1),u=n("",3),B=p("div",{id:"menu3",class:"w-32"},null,-1),m=n("",55);function h(s,g,C,b,x,k){const a=t("Example");return E(),c("div",null,[y,l(a,null,{default:o(()=>[i]),_:1}),F,l(a,null,{default:o(()=>[d]),_:1}),u,l(a,null,{default:o(()=>[B]),_:1}),m])}const A=e(r,[["render",h]]);export{v as __pageData,A as default};
