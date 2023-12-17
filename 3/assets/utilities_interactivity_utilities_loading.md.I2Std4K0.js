import{_ as c,D as s,o as d,c as r,I as t,w as a,k as l,a as e}from"./chunks/framework.GV9-6vKB.js";const D=JSON.parse('{"title":"加载指示器","description":"","frontmatter":{},"headers":[],"relativePath":"utilities/interactivity/utilities/loading.md","filePath":"utilities/interactivity/utilities/loading.md","lastUpdated":null}'),p={name:"utilities/interactivity/utilities/loading.md"},u=l("h1",{id:"加载指示器",tabindex:"-1"},[e("加载指示器 "),l("a",{class:"header-anchor",href:"#加载指示器","aria-label":'Permalink to "加载指示器"'},"​")],-1),E=l("h2",{id:"用法",tabindex:"-1"},[e("用法 "),l("a",{class:"header-anchor",href:"#用法","aria-label":'Permalink to "用法"'},"​")],-1),_=l("p",null,[e("通过为元素添加 "),l("code",null,"load-indicator"),e(" 来让其拥有加载指示器的能力，通过添加或移除 "),l("code",null,"loading"),e(" 类来控制加载指示器的显示与隐藏。")],-1),m=l("div",{id:"loadExample",class:"load-indicator relative center h-40 secondary-pale"},[l("p",null,"Hello ZUI!")],-1),h=l("button",{type:"button",class:"btn primary",onclick:"document.getElementById('loadExample').classList.toggle('loading')"},"切换加载状态",-1),y=l("div",{class:"language-html"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"html"),l("pre",{class:"shiki github-dark vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"<"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#B392F0"}}," class"),l("span",{style:{color:"#E1E4E8"}},"="),l("span",{style:{color:"#9ECBFF"}},'"load-indicator relative loading"'),l("span",{style:{color:"#E1E4E8"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"  <"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">Hello ZUI!</"),l("span",{style:{color:"#85E89D"}},"p"),l("span",{style:{color:"#E1E4E8"}},">")]),e(`
`),l("span",{class:"line"},[l("span",{style:{color:"#E1E4E8"}},"</"),l("span",{style:{color:"#85E89D"}},"div"),l("span",{style:{color:"#E1E4E8"}},">")])])])],-1),b=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"提示"),l("p",null,[e("作为加载指示器的元素 "),l("code",null,"position"),e(" 属性必须为 "),l("code",null,"relative"),e("、"),l("code",null,"absolute"),e(" 或 "),l("code",null,"fixed"),e("。")])],-1);function g(f,v,x,k,P,T){const n=s("Example"),o=s("PluginTabsTab"),i=s("PluginTabs");return d(),r("div",null,[u,E,_,t(i,null,{default:a(()=>[t(o,{label:"示例"},{default:a(()=>[t(n,{class:"space-y-4"},{default:a(()=>[m,h]),_:1})]),_:1}),t(o,{label:"HTML"},{default:a(()=>[y,b]),_:1})]),_:1})])}const C=c(p,[["render",g]]);export{D as __pageData,C as default};
