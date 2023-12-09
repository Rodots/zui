import{j as r,D as y,o as i,c as d,I as p,w as o,k as s,a as c,R as e}from"./chunks/framework.U5b_PKOd.js";const F=s("h1",{id:"树形菜单",tabindex:"-1"},[c("树形菜单 "),s("a",{class:"header-anchor",href:"#树形菜单","aria-label":'Permalink to "树形菜单"'},"​")],-1),B=s("h2",{id:"一般用法",tabindex:"-1"},[c("一般用法 "),s("a",{class:"header-anchor",href:"#一般用法","aria-label":'Permalink to "一般用法"'},"​")],-1),u=s("div",{id:"treeExample"},null,-1),h=e(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;treeExample&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tree</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Tree</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#treeExample&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;研发&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            url: </span><span style="color:#9ECBFF;">&#39;#研发&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {text: </span><span style="color:#9ECBFF;">&#39;前端&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#前端&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    text: </span><span style="color:#9ECBFF;">&#39;产品&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    url: </span><span style="color:#9ECBFF;">&#39;#产品&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {text: </span><span style="color:#9ECBFF;">&#39;桌面端&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#桌面端&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {text: </span><span style="color:#9ECBFF;">&#39;移动端&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#移动端&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {text: </span><span style="color:#9ECBFF;">&#39;测试&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#测试&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                {text: </span><span style="color:#9ECBFF;">&#39;运维&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#运维&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;市场&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#市场&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;技术支持&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#技术支持&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;财务&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#财务&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">        {text: </span><span style="color:#9ECBFF;">&#39;行政&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;#行政&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="添加图标" tabindex="-1">添加图标 <a class="header-anchor" href="#添加图标" aria-label="Permalink to &quot;添加图标&quot;">​</a></h2>`,2),C=s("div",{id:"treeWithIcons"},null,-1),m=e(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;treeWithIcons&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tree</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Tree</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#treeExample&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    collapsedIcon: </span><span style="color:#9ECBFF;">&#39;folder&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    expandedIcon: </span><span style="color:#9ECBFF;">&#39;folder-open&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    normalIcon: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="鼠标悬停效果" tabindex="-1">鼠标悬停效果 <a class="header-anchor" href="#鼠标悬停效果" aria-label="Permalink to &quot;鼠标悬停效果&quot;">​</a></h2>`,2),_=s("div",{id:"treeHover"},null,-1),A=e(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;treeHover&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tree</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Tree</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#treeHover&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    collapsedIcon: </span><span style="color:#9ECBFF;">&#39;folder&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    expandedIcon: </span><span style="color:#9ECBFF;">&#39;folder-open&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    normalIcon: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hover: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="添加工具栏" tabindex="-1">添加工具栏 <a class="header-anchor" href="#添加工具栏" aria-label="Permalink to &quot;添加工具栏&quot;">​</a></h2><p>通过选项 <code>itemActions</code> 来设置工具栏，可用选项参考 <a href="/zui/3/lib/components/toolbar/">工具栏</a> 文档。</p>`,3),g=s("div",{id:"treeWithActions"},null,-1),b=e(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;treeWithActions&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> tree</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#E1E4E8;"> zui.</span><span style="color:#B392F0;">Tree</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#treeWithActions&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    collapsedIcon: </span><span style="color:#9ECBFF;">&#39;folder&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    expandedIcon: </span><span style="color:#9ECBFF;">&#39;folder-open&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    normalIcon: </span><span style="color:#9ECBFF;">&#39;file&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    hover: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemActions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                key: </span><span style="color:#9ECBFF;">&#39;edit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&#39;edit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                hint: </span><span style="color:#9ECBFF;">&#39;编辑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">                onClick</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e),</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                key: </span><span style="color:#9ECBFF;">&#39;delete&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&#39;trash&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                hint: </span><span style="color:#9ECBFF;">&#39;删除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">                onClick</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(e),</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;dropdown&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                key: </span><span style="color:#9ECBFF;">&#39;more&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                icon: </span><span style="color:#9ECBFF;">&#39;ellipsis-v&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                caret: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                hint: </span><span style="color:#9ECBFF;">&#39;更多操作&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                dropdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    placement: </span><span style="color:#9ECBFF;">&#39;bottom-end&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {text: </span><span style="color:#9ECBFF;">&#39;分享&#39;</span><span style="color:#E1E4E8;">, key: </span><span style="color:#9ECBFF;">&#39;share&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {text: </span><span style="color:#9ECBFF;">&#39;下载&#39;</span><span style="color:#E1E4E8;">, key: </span><span style="color:#9ECBFF;">&#39;download&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#B392F0;">        onClick</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;你点击了&#39;</span><span style="color:#E1E4E8;">, {event, item, index}),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>items</code></td><td><code>array</code></td><td><code>null</code></td><td>树的数据</td></tr><tr><td><code>collapsedIcon</code></td><td><code>string</code></td><td><code>null</code></td><td>折叠图标</td></tr><tr><td><code>expandedIcon</code></td><td><code>string</code></td><td><code>null</code></td><td>展开图标</td></tr><tr><td><code>normalIcon</code></td><td><code>string</code></td><td><code>null</code></td><td>普通图标</td></tr><tr><td><code>hover</code></td><td><code>boolean</code></td><td><code>false</code></td><td>鼠标悬停效果</td></tr><tr><td><code>itemActions</code></td><td><code>array</code> <code>object</code> <code>function</code></td><td><code>null</code></td><td>工具栏选项，可用选项参考 <a href="/zui/3/lib/components/toolbar/">工具栏</a> 文档</td></tr><tr><td><code>defaultNestedShow</code></td><td><code>object</code></td><td><code>null</code></td><td>默认的折叠状态</td></tr><tr><td><code>indent</code></td><td><code>number</code></td><td><code>20</code></td><td>缩进大小</td></tr><tr><td><code>onClickItem</code></td><td><code>function</code></td><td><code>null</code></td><td>点击菜单项的回调函数</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td><code>null</code></td><td>类名</td></tr><tr><td><code>style</code></td><td><code>object</code></td><td><code>null</code></td><td>自定义 CSS 样式</td></tr></tbody></table><p>其中 <code>itemActions</code> 可以为工具栏按钮定义列表或工具栏对象或通过函数返回工具栏对象，函数接收参数为当前节点的数据。</p><h2 id="菜单条目定义" tabindex="-1">菜单条目定义 <a class="header-anchor" href="#菜单条目定义" aria-label="Permalink to &quot;菜单条目定义&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code"><code><span class="line"><span style="color:#F97583;">type</span><span style="color:#B392F0;"> TreeItemOptions</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /** 作为链接的 URL。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    url</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 作为链接的目标。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    target</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 是否禁用。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    disabled</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 是否激活。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    active</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 图标。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    icon</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> IconType</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 是否选中。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    checked</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项文本。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    text</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> ComponentChildren</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 尾部图标。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    trailingIcon</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> IconType</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 提示文本。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    hint</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 根元素类名。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    rootClass</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> ClassNameLike</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 根元素属性。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    rootAttrs</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> JSX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">HTMLAttributes</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLLIElement</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 根元素样式。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    rootStyle</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> JSX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">CSSProperties</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项组件名称。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    component</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#F97583;"> |</span><span style="color:#B392F0;"> ComponentType</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 内部键。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    key</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> ActionMenuItemKey</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项类型。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    type</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项元素属性。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    attrs</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> JSX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">HTMLAttributes</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLElement</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> {[</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">:</span><span style="color:#9ECBFF;"> \`data-\${</span><span style="color:#79B8FF;">string</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;"> unknown</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项元素类名。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    className</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> ClassNameLike</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项元素样式。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    style</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> JSX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">CSSProperties</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项自定义内容。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    content</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> CustomContentType</span><span style="color:#E1E4E8;">&lt;[</span><span style="color:#B392F0;">ActionBasicProps</span><span style="color:#E1E4E8;">]&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项点击事件。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    onClick</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> JSX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MouseEventHandler</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLAnchorElement</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 菜单项关联数据。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    data</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> Record</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">unknown</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 是否默认展开。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    show</span><span style="color:#F97583;">?:</span><span style="color:#79B8FF;"> boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 子级菜单列表。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    items</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> ((</span><span style="color:#FFAB70;">currentItem</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> ActionNestedItemProps</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;, </span><span style="color:#FFAB70;">menu</span><span style="color:#F97583;">:</span><span style="color:#B392F0;"> ActionMenuNested</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;) </span><span style="color:#F97583;">=&gt;</span><span style="color:#B392F0;"> T</span><span style="color:#E1E4E8;">[])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /** 工具栏定义。 */</span></span>
<span class="line"><span style="color:#FFAB70;">    actions</span><span style="color:#F97583;">?:</span><span style="color:#B392F0;"> ToolbarOptions</span><span style="color:#F97583;"> |</span><span style="color:#B392F0;"> ToolbarItemOptions</span><span style="color:#E1E4E8;">[];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre></div>`,6),k=JSON.parse('{"title":"树形菜单","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/tree/index.md","filePath":"lib/components/tree/index.md","lastUpdated":null}'),x={name:"lib/components/tree/index.md"},v=Object.assign(x,{setup(T){const l=[{text:"研发",url:"#研发",items:[{text:"前端",url:"#前端"},{text:"产品",url:"#产品",items:[{text:"桌面端",url:"#桌面端"},{text:"移动端",url:"#移动端"}]},{text:"测试",url:"#测试"},{text:"运维",url:"#运维"}]},{text:"市场",url:"#市场"},{text:"技术支持",url:"#技术支持"},{text:"财务",url:"#财务"},{text:"行政",url:"#行政"}],E=[{key:"edit",icon:"edit",hint:"编辑",onClick:n=>console.log(n)},{key:"delete",icon:"trash",hint:"删除",onClick:n=>console.log(n)},{type:"dropdown",key:"more",icon:"ellipsis-v",caret:!1,hint:"更多操作",dropdown:{placement:"bottom-end",items:[{text:"分享",key:"share"},{text:"下载",key:"download"}]}}];return r(()=>{onZUIReady(()=>{new zui.Tree("#treeExample",{items:l}),new zui.Tree("#treeWithIcons",{items:l,collapsedIcon:"folder",expandedIcon:"folder-open",normalIcon:"file"}),new zui.Tree("#treeHover",{hover:!0,items:l,collapsedIcon:"folder",expandedIcon:"folder-open",normalIcon:"file"}),new zui.Tree("#treeWithActions",{hover:!0,items:l,itemActions:{items:E,onClick:(n,t,a)=>console.log("你点击了",{event:n,item:t,index:a})},collapsedIcon:"folder",expandedIcon:"folder-open",normalIcon:"file"})})}),(n,t)=>{const a=y("Example");return i(),d("div",null,[F,B,p(a,null,{default:o(()=>[u]),_:1}),h,p(a,null,{default:o(()=>[C]),_:1}),m,p(a,null,{default:o(()=>[_]),_:1}),A,p(a,null,{default:o(()=>[g]),_:1}),b])}}});export{k as __pageData,v as default};
