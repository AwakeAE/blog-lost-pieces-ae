import{_ as s,o as e,c as a,f as t}from"./app.044f985c.js";const m=JSON.parse('{"title":"\u5728WSL\u4E0A\u5B89\u88C5\u5E76\u914D\u7F6Ezsh","description":"\u4E00\u7BC7\u65E7\u6587\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u663E\u793A\u6548\u679C","frontmatter":{"date":"2020-07-30T00:00:00.000Z","title":"\u5728WSL\u4E0A\u5B89\u88C5\u5E76\u914D\u7F6Ezsh","tags":["zsh","wsl","\u914D\u7F6E"],"description":"\u4E00\u7BC7\u65E7\u6587\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u663E\u793A\u6548\u679C"},"headers":[{"level":2,"title":"1 \u5B89\u88C5 zsh","slug":"_1-\u5B89\u88C5-zsh","link":"#_1-\u5B89\u88C5-zsh","children":[]},{"level":2,"title":"2 \u5B89\u88C5 oh-my-zsh","slug":"_2-\u5B89\u88C5-oh-my-zsh","link":"#_2-\u5B89\u88C5-oh-my-zsh","children":[]},{"level":2,"title":"3 \u66F4\u6362 zsh \u76AE\u80A4","slug":"_3-\u66F4\u6362-zsh-\u76AE\u80A4","link":"#_3-\u66F4\u6362-zsh-\u76AE\u80A4","children":[]}],"relativePath":"posts/install-zsh-wsl.md"}'),o={name:"posts/install-zsh-wsl.md"},c=t(`<h1 id="\u5728-wsl-\u4E0A\u5B89\u88C5\u5E76\u914D\u7F6E-zsh" tabindex="-1">\u5728 WSL \u4E0A\u5B89\u88C5\u5E76\u914D\u7F6E zsh <a class="header-anchor" href="#\u5728-wsl-\u4E0A\u5B89\u88C5\u5E76\u914D\u7F6E-zsh" aria-hidden="true">#</a></h1><h2 id="_1-\u5B89\u88C5-zsh" tabindex="-1">1 \u5B89\u88C5 zsh <a class="header-anchor" href="#_1-\u5B89\u88C5-zsh" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install zsh</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><img src="https://user-images.githubusercontent.com/53137814/88877476-1c2eb700-d258-11ea-8e9a-cce5fd2b4aa9.png" alt="apt install\u80FD\u89E3\u51B3\u5927\u90E8\u5206\u7684\u5B89\u88C5\u95EE\u9898"></p><h2 id="_2-\u5B89\u88C5-oh-my-zsh" tabindex="-1">2 \u5B89\u88C5 oh-my-zsh <a class="header-anchor" href="#_2-\u5B89\u88C5-oh-my-zsh" aria-hidden="true">#</a></h2><p>\u5B98\u65B9 GitHub \u9875\u9762\uFF1A<a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">oh-my-zsh&#39;s GitHub repository</a></p><p>\u53EF\u4EE5\u901A\u8FC7<code>curl</code>\u6216\u8005<code>wget</code>\u6765\u4E0B\u8F7D\u5E76\u5B89\u88C5</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sh -c &quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">sh -c &quot;$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u91CC\u6211\u9009\u62E9\u4F7F\u7528<code>curl</code>\u6765\u5B89\u88C5\uFF1A</p><p>\u7136\u540E\u53D1\u73B0\u62A5\u4E86\u4E00\u4E2A\u9519 \u{1F447}</p><p><img src="https://user-images.githubusercontent.com/53137814/88878706-11c1ec80-d25b-11ea-989d-d8cd354873d7.png" alt="SSH\u7684\u8BC1\u4E66\u9519\u8BEF"></p><blockquote><p>\u4E4B\u524D\u5728 win \u4E0B\u7528 git \u7684\u65F6\u5019\u4E5F\u6709\u8FC7\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u5927\u6982\u662F SSL \u8BC1\u4E66\u4E00\u7C7B\u7684\u95EE\u9898 \u4E4B\u524D\u662F\u81EA\u7B7E\u7F72\u7684\u8BC1\u4E66\u95EE\u9898\uFF0C\u8FD9\u6B21\u597D\u50CF\u662F\u6839\u672C\u6CA1\u6709\u8BC1\u4E66\uFF08</p></blockquote><p>\u603B\u4E4B\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u8BBE\u7F6E git \u6765\u5FFD\u7565\u5404\u79CD\u8BC1\u4E66\u9519\u8BEF\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git config --global http.sslverify false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u679C\u7136\u5C31\u53EF\u4EE5\u5566</p><p><img src="https://user-images.githubusercontent.com/53137814/88879611-4a62c580-d25d-11ea-9f7d-ec4d044b427e.png" alt="zsh\u5B89\u88C5\u5B8C\u6BD5"></p><hr><p>\u5B89\u88C5\u5B8C\u6BD5\uFF0C\u8BBE\u7F6E zsh \u4E3A\u9ED8\u8BA4\u7684 shell\uFF0C\u6548\u679C\u5982\u4E0B \u{1F447}</p><p><img src="https://user-images.githubusercontent.com/53137814/88879776-b34a3d80-d25d-11ea-8adb-f029edea819d.png" alt="zsh\u9ED8\u8BA4\u5916\u89C2\u6548\u679C"></p><p>emmmm....\u611F\u89C9\u4E0D\u592A\u884C\uFF0C\u9700\u8981\u81EA\u5DF1\u914D\u7F6E\u4E00\u4E0B\u76AE\u80A4</p><h2 id="_3-\u66F4\u6362-zsh-\u76AE\u80A4" tabindex="-1">3 \u66F4\u6362 zsh \u76AE\u80A4 <a class="header-anchor" href="#_3-\u66F4\u6362-zsh-\u76AE\u80A4" aria-hidden="true">#</a></h2><p>zsh \u76AE\u80A4\u6587\u4EF6\u5728<code>$ZSH/themes</code>\u8DEF\u5F84\u4E0B\uFF0C\u8FD9\u91CC\u6709\u5404\u79CD<code>.zsh-theme</code>\u6587\u4EF6\uFF08\u4E5F\u5C31\u662F\u5404\u79CD\u5404\u6837\u7684\u76AE\u80A4\u6587\u4EF6\uFF09</p><p>\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539<code>~/.zshrc</code>\u4E2D\u7684<code>ZSH_THEME</code>\u53D8\u91CF\u7684\u503C\u6765\u9009\u62E9\u4E0D\u540C\u7684\u76AE\u80A4\uFF08\u4E3B\u9898\uFF09</p><p><img src="https://user-images.githubusercontent.com/53137814/88912239-9891bc00-d291-11ea-94c7-ab7787640e9a.png" alt="~/.zshrc\u6587\u4EF6"></p><p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u76AE\u80A4\u6587\u4EF6\uFF08\u540E\u7F00\u540D\u4E3A<code>.zsh-theme</code>\u7684\u6587\u4EF6\uFF09\u5C06\u5176\u5B58\u653E\u5230<code>$ZSH/themes</code>\u4E0B\uFF0C\u5373\u53EF\u50CF\u5176\u4ED6\u4E3B\u9898\u4E00\u6837\u88AB\u542F\u7528\u4E86</p><p><strong>zsh \u4E3B\u9898\u7F16\u5199\u53C2\u8003<a href="https://printempw.github.io/zsh-prompt-theme-customization/" target="_blank" rel="noreferrer">\u2192 \u8FD9\u91CC \u2190</a></strong></p><hr><p>\u6211\u81EA\u5DF1\u5199\u4E86\u4E00\u4E2A zsh \u4E3B\u9898\uFF0C\u73B0\u5728\u653E\u5728 github gist \u4E0A \u{1F449} <a href="https://gist.github.com/Locietta/208e63a15aaf07168bfd99be1ff10bc6" target="_blank" rel="noreferrer">arcane</a></p><p><img src="https://pic4.zhimg.com/80/v2-a0233702e04c0825dc642f4207fd78c0.png" alt="\u81EA\u5DF1\u7F16\u5199\u7684arcane\u4E3B\u9898\u7684\u6548\u679C"></p><p>\uFF08\u6837\u5F0F\u53C2\u8003<del>(\u7167\u642C)</del>\u4E86<a href="https://gist.github.com/NachtgeistW/f394ca3e461edb40550a3f59445c61f2" target="_blank" rel="noreferrer">\u5927\u4F6C\u7684 powershell \u4E3B\u9898</a></p>`,31),n=[c];function l(p,h,r,i,d,g){return e(),a("div",null,n)}const z=s(o,[["render",l]]);export{m as __pageData,z as default};
