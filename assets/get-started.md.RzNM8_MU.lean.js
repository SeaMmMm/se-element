import{_ as i,a,b as t,aa as n}from"./chunks/framework.C3cU7JZf.js";const g=JSON.parse('{"title":"最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库","description":"","frontmatter":{"search":false,"next":{"link":"/components/button","text":"Button 按钮"}},"headers":[],"relativePath":"get-started.md","filePath":"get-started.md"}'),e={name:"get-started.md"};function l(p,s,h,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="最新-vue3-ts-高仿-elementplus-打造自己的组件库" tabindex="-1">最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库 <a class="header-anchor" href="#最新-vue3-ts-高仿-elementplus-打造自己的组件库" aria-label="Permalink to &quot;最新 Vue3 + TS 高仿 ElementPlus 打造自己的组件库&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @seam-element</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save</span></span></code></pre></div><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><p><strong>全局使用</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引入所有组件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SeamElement </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;seam-element&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 引入样式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;seam-element/dist/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./App.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SeamElement).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">se-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;我是 Button&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">se-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>单个导入</strong></p><p>SeamElement 提供了基于 ES Module 的开箱即用的 Tree Shaking 功能。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">se-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;我是 Button&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">se-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { SeElement } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; se-element&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SeButton },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="亮点" tabindex="-1">亮点 <a class="header-anchor" href="#亮点" aria-label="Permalink to &quot;亮点&quot;">​</a></h2><details class="details custom-block"><summary>Details</summary><ul><li>Vite + Vitest + Vitepress 工具链</li><li>monorepo 分包管理</li><li>github actions 实现 CI/CD 自动化部署</li><li>大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。</li><li>当然，也会展示 发布“开箱即用” 的 npm 包</li></ul></details>`,12)]))}const o=i(e,[["render",l]]);export{g as __pageData,o as default};
