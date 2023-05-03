import{q as i,H as r,o as d,c as E,J as n,E as l,a,C as s,V as o}from"./chunks/framework.1026cf52.js";const g=s("h1",{id:"漂浮消息生成器",tabindex:"-1"},[a("漂浮消息生成器 "),s("a",{class:"header-anchor",href:"#漂浮消息生成器","aria-label":'Permalink to "漂浮消息生成器"'},"​")],-1),h=s("p",null,"通过 JS 动态创建一个漂浮消息。",-1),u=s("h2",{id:"基本用法",tabindex:"-1"},[a("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),y=s("p",null,[a("通过构造一个 "),s("code",null,"messager"),a(" 实例，页面上创建一个漂浮消息。")],-1),_=s("button",{id:"messagerTrigger",class:"btn primary messager-toggle"},"显示漂浮消息",-1),m=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">button.</span><span style="color:#B392F0;">addEventLinstener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Messager.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">({content: </span><span style="color:#9ECBFF;">&#39;这是一个悬浮消息&#39;</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="显示位置" tabindex="-1">显示位置 <a class="header-anchor" href="#显示位置" aria-label="Permalink to &quot;显示位置&quot;">​</a></h2><p>提供9个预设的显示位置。</p>`,3),b=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"top-left"},"top-left",-1),f=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"top"},"top",-1),F=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"top-right"},"top-right",-1),C=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"bottom-left"},"bottom-left",-1),k=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"bottom"},"bottom",-1),q=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"bottom-right"},"bottom-right",-1),x=s("button",{class:"messager-toggle btn messager-toggle","data-placement":"center"},"center",-1),T=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">Messager.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;这是一条悬浮消息。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    placement: </span><span style="color:#9ECBFF;">&#39;top-left&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 定义位置</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="颜色主题" tabindex="-1">颜色主题 <a class="header-anchor" href="#颜色主题" aria-label="Permalink to &quot;颜色主题&quot;">​</a></h2><p>提供 多种预设颜色主题 详见 颜色。</p>`,3),P=s("button",{type:"button",class:"btn primary messager-toggle","data-type":"primary"},"primary",-1),B=s("button",{type:"button",class:"btn secondary messager-toggle","data-type":"secondary"},"secondary",-1),A=s("button",{type:"button",class:"btn success messager-toggle","data-type":"success"},"success",-1),S=s("button",{type:"button",class:"btn danger messager-toggle","data-type":"danger"},"danger",-1),v=s("button",{type:"button",class:"btn special messager-toggle","data-type":"special"},"special",-1),V=s("button",{type:"button",class:"btn important messager-toggle","data-type":"important"},"important",-1),w=s("button",{type:"button",class:"btn primary circle messager-toggle","data-type":"primary circle"},"primary circle",-1),I=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.messager-toggle&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    Messager.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        message: </span><span style="color:#9ECBFF;">&#39;这是一个漂浮消息。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: event.target.dataset.type,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="自定义操作按钮" tabindex="-1">自定义操作按钮 <a class="header-anchor" href="#自定义操作按钮" aria-label="Permalink to &quot;自定义操作按钮&quot;">​</a></h2><p>默认会在右侧显示关闭按钮，如果需要禁用关闭按钮，将 close 选项设置为 false。</p>`,3),j=s("button",{class:"btn primary messager-toggle","data-close":"false"}," 禁用关闭按钮 ",-1),N=o(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">Messager.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    message: </span><span style="color:#9ECBFF;">&#39;这是一个漂浮消息。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    close: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><p>通过 <code>actions</code> 数组来自定义一组操作。详细配置可参考 <a href="/zui/3/lib/components/btn-group/index.html">按钮组</a>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Messager</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    massage: </span><span style="color:#9ECBFF;">&#39;你的邮件已成功发送。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;success&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    close: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;undo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        icon: </span><span style="color:#9ECBFF;">&#39;undo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;撤销&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">action</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {  </span><span style="color:#6A737D;">// 点击该操作按钮的回调函数</span></span>
<span class="line"><span style="color:#E1E4E8;">            console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你点击了撤销按钮。&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }]</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre></div><h2 id="禁用自动隐藏" tabindex="-1">禁用自动隐藏 <a class="header-anchor" href="#禁用自动隐藏" aria-label="Permalink to &quot;禁用自动隐藏&quot;">​</a></h2><p>默认超过 5000ms 自动隐藏，通过设置 <code>time</code> 为 <code>0</code> 取消自动隐藏。</p>`,5),M=s("button",{type:"button",class:"btn primary messager-toggle","data-time":"0","data-content":"禁用自动隐藏的悬浮消息"},"禁用自动隐藏",-1),D=s("h2",{id:"禁用动画效果",tabindex:"-1"},[a("禁用动画效果 "),s("a",{class:"header-anchor",href:"#禁用动画效果","aria-label":'Permalink to "禁用动画效果"'},"​")],-1),R=s("p",null,[a("设置 "),s("code",null,"animation"),a(" 为 "),s("code",null,"false"),a(" 禁用动画效果。")],-1),z=s("button",{type:"button",class:"btn messager-toggle","data-animation":"false","data-content":"禁用动画效果的悬浮消息"},"禁用动画效果",-1),L=o('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="messageroptions" tabindex="-1"><code>MessagerOptions</code> <a class="header-anchor" href="#messageroptions" aria-label="Permalink to &quot;`MessagerOptions`&quot;">​</a></h3><p>漂浮消息定义对象。</p><h4 id="type" tabindex="-1"><code>type</code> <a class="header-anchor" href="#type" aria-label="Permalink to &quot;`type`&quot;">​</a></h4><p>消息类型</p><ul><li>类型：<code>string</code>;</li><li>可选值：&#39;default&#39; | &#39;primary&#39; | &#39;danger&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;important&#39; | &#39;special&#39;；</li><li>必选：否。</li><li>默认值：default</li></ul><h4 id="placement" tabindex="-1"><code>placement</code> <a class="header-anchor" href="#placement" aria-label="Permalink to &quot;`placement`&quot;">​</a></h4><p>漂浮消息定位方式</p><ul><li>类型：<code>string</code>;</li><li>可选值：&#39;top&#39; | &#39;center&#39; | &#39;bottom&#39; | &#39;left-top&#39; | &#39;left&#39; | &#39;left-bottom&#39; | &#39;right&#39; | &#39;right-top&#39; | &#39;right-bottom&#39;;</li><li>必选：否。</li><li>默认值：top</li></ul><h4 id="time" tabindex="-1"><code>time</code> <a class="header-anchor" href="#time" aria-label="Permalink to &quot;`time`&quot;">​</a></h4><p>漂浮消息持续时间。</p><ul><li>类型：<code>number</code>;</li><li>必选：否。</li><li>默认值：4000 (ms);</li></ul><h4 id="message" tabindex="-1"><code>message</code> <a class="header-anchor" href="#message" aria-label="Permalink to &quot;`message`&quot;">​</a></h4><p>漂浮消息内容。</p><ul><li>类型：<code>string</code>;</li><li>必选：否。</li></ul><h4 id="parent" tabindex="-1"><code>parent</code> <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;`parent`&quot;">​</a></h4><p>漂浮消息父节点。</p><ul><li>类型：<code>HTMLElement</code>;</li><li>必选：否。</li><li>默认值：body.</li></ul><h4 id="icon" tabindex="-1"><code>icon</code> <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;`icon`&quot;">​</a></h4><p>图标内容。</p><ul><li>类型：<code>string</code>;</li><li>必选：否。</li></ul><h4 id="close" tabindex="-1"><code>close</code> <a class="header-anchor" href="#close" aria-label="Permalink to &quot;`close`&quot;">​</a></h4><p>是否展示关闭按钮。</p><ul><li>类型：<code>boolean</code>;</li><li>必选：否。</li><li>默认值：false。</li></ul><h4 id="show" tabindex="-1"><code>show</code> <a class="header-anchor" href="#show" aria-label="Permalink to &quot;`show`&quot;">​</a></h4><p>是否在初次渲染时展示消息。</p><ul><li>类型：<code>boolean</code>;</li><li>必选：否。</li><li>默认值：true。</li></ul><h4 id="fade" tabindex="-1"><code>fade</code> <a class="header-anchor" href="#fade" aria-label="Permalink to &quot;`fade`&quot;">​</a></h4><p>是否显示和隐藏消息时使用渐隐渐显的动画效果。</p><ul><li>类型：<code>boolean</code>;</li><li>必选：否。</li><li>默认值：false。</li></ul><h4 id="scale" tabindex="-1"><code>scale</code> <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;`scale`&quot;">​</a></h4><p>是否显示和隐藏消息时使用缩放的动画效果。</p><ul><li>类型：<code>boolean</code>;</li><li>必选：否。</li><li>默认值：false。</li></ul><p>actions 漂浮消息按钮组配置项，详细配置可参考 <a href="/zui/3/lib/components/btn-group/index.html">按钮组</a>。</p><p>onAction</p><ul><li>类型：<code>function(actionName, action, messager)</code>;</li><li>必选：否。</li></ul>',36),U=JSON.parse('{"title":"漂浮消息生成器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/messager/index.md","lastUpdated":null}'),O={name:"lib/components/messager/index.md"},$=Object.assign(O,{setup(J){return i(()=>{document.addEventListener("click",p=>{const t=p.target.closest(".messager-toggle");if(!t)return;const e=zui.Messager.show({content:"这是一个漂浮消息",...zui.$(t).data()});console.log("> messager",e)})}),(p,t)=>{const e=r("Example"),c=r("example");return d(),E("div",null,[g,h,u,y,n(e,null,{default:l(()=>[_]),_:1}),m,n(e,{class:"flex gap-2"},{default:l(()=>[b,f,F,C,k,q,x]),_:1}),T,n(c,{class:"flex gap-2"},{default:l(()=>[P,B,A,S,v,V,w]),_:1}),a(" ``` "),I,n(c,null,{default:l(()=>[j]),_:1}),N,n(e,null,{default:l(()=>[M]),_:1}),D,R,n(e,null,{default:l(()=>[z]),_:1}),L])}}});export{U as __pageData,$ as default};
