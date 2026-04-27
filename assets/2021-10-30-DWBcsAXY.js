import{a as e,c as t,i as n,t as r}from"./app-CJ7qNnR0.js";import"./webChat1-9C-eRyja.js";var i=JSON.parse('{"path":"/frontend/2021-10-30.html","title":"Docker构建前端项目","lang":"zh-CN","frontmatter":{"title":"Docker构建前端项目","date":"2021-10-30T01:30:00.000Z","category":["前端技术"],"tags":["docker"],"description":"Docker构建前端项目 作者：HerryLo 博客原文链接 Docker单独部署前端项目和Node项目是非常便捷的，在这里分享一下Docker的使用，主要聊聊它的部署实践。（我是window10专业版安装Docker） Docker Docker是一种应用容器引擎技术，类似于虚拟机，不过它的实用性、通用性、便捷性更强，Docker容器可以说就是VM，...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker构建前端项目\\",\\"image\\":[\\"https://herrylo.github.io/webChat1.png\\"],\\"datePublished\\":\\"2021-10-30T01:30:00.000Z\\",\\"dateModified\\":\\"2026-04-21T03:52:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Herrylo\\",\\"url\\":\\"https://github.com/HerryLo\\"}]}"],["meta",{"property":"og:url","content":"https://herrylo.github.io/frontend/2021-10-30.html"}],["meta",{"property":"og:site_name","content":"Herrylo`s Blog"}],["meta",{"property":"og:title","content":"Docker构建前端项目"}],["meta",{"property":"og:description","content":"Docker构建前端项目 作者：HerryLo 博客原文链接 Docker单独部署前端项目和Node项目是非常便捷的，在这里分享一下Docker的使用，主要聊聊它的部署实践。（我是window10专业版安装Docker） Docker Docker是一种应用容器引擎技术，类似于虚拟机，不过它的实用性、通用性、便捷性更强，Docker容器可以说就是VM，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://herrylo.github.io/webChat1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-04-21T03:52:05.000Z"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2021-10-30T01:30:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-04-21T03:52:05.000Z"}]]},"git":{"createdTime":1776514715000,"updatedTime":1776743525000,"contributors":[{"name":"HerryLo","username":"HerryLo","email":"herryloyopai@163.com","commits":2,"url":"https://github.com/HerryLo"},{"name":"Claude Opus 4.7","username":"","email":"noreply@anthropic.com","commits":1}]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"frontend/2021-10-30.md","excerpt":"\\n<p><a href=\\"https://github.com/HerryLo\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">作者：HerryLo</a></p>\\n<p><a href=\\"https://github.com/AttemptWeb/Record/issues/30\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">博客原文链接</a></p>\\n<p>Docker单独部署前端项目和Node项目是非常便捷的，在这里分享一下Docker的使用，主要聊聊它的部署实践。（我是window10专业版安装Docker）</p>","autoDesc":true}'),a={name:`2021-10-30.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h1 id="docker构建前端项目" tabindex="-1"><a class="header-anchor" href="#docker构建前端项目"><span>Docker构建前端项目</span></a></h1><p><a href="https://github.com/HerryLo" target="_blank" rel="noopener noreferrer">作者：HerryLo</a></p><p><a href="https://github.com/AttemptWeb/Record/issues/30" target="_blank" rel="noopener noreferrer">博客原文链接</a></p><p>Docker单独部署前端项目和Node项目是非常便捷的，在这里分享一下Docker的使用，主要聊聊它的部署实践。（我是window10专业版安装Docker）</p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h3><p>Docker是一种应用容器引擎技术，类似于虚拟机，不过它的实用性、通用性、便捷性更强，Docker容器可以说就是VM，不过占用资源更少，更轻量，通过操作系统级虚拟化方法，利用更加节省的硬件资源提供给用户更多的计算资源。</p><p>Docker容器是Linux 容器的一种封装，由于容器存在独立的运行环境，Docker可以将应用程序和依赖打包容器中，启动容器即可运行程序。</p><h2 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署"><span>Docker部署</span></a></h2><p>Docker容器配合 GitHub Action、Jenkins、Rancher使用非常的便捷，当然这里说到的是Docker个人部署实践，下面主要说到的是通用前端项目部署方案。</p><h3 id="配置nginx" tabindex="-1"><a class="header-anchor" href="#配置nginx"><span>配置nginx</span></a></h3><p>在前端根目录创建 nginx.conf（与package.json同级），具体配置如下，可以根据实际项目调整修改:</p><pre><code>server {
    listen 80 default_server;
    server_name _;
    
    location / {
      root   /usr/share/nginx/html/web;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html;
    }
    
    # 接口代理示例
    # location /api {
    #     proxy_pass http://xxx.com;
    #     proxy_set_header Host $host:$server_port;
    #     proxy_set_header X-Real-IP $remote_addr;
    #     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    #     proxy_set_header Cookie $http_cookie;
    #     proxy_buffering off;
    #     proxy_cache off;
    # }
  }
</code></pre><p>nginx配置的主要的作用是静态资源代理，同时接口转发。以上的配置是直接再本机运行，如果要在服务器上运行，可以将其中的配置改为:</p><pre><code>listen 80;
server_name xxx.com;
</code></pre><h3 id="配置dockerfile" tabindex="-1"><a class="header-anchor" href="#配置dockerfile"><span>配置Dockerfile</span></a></h3><p>在根目录创建Dockerfile文件(与package.json同级)</p><pre><code>FROM node:latest
COPY package.json /
RUN npm i --registry=https://registry.npm.taobao.org
RUN npm run build

FROM nginx:latest
# 这里的dist/目录是你的项目打包后的文件目录
COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/

EXPOSE 80
</code></pre><p>上面的配置文件非常的简单，主要就是将构建打包，之后安装nginx，复制nginx配置文件，复制打包后的文件，开放80端口。</p><h3 id="docker镜像部署" tabindex="-1"><a class="header-anchor" href="#docker镜像部署"><span>Docker镜像部署</span></a></h3><p>将项目更新到服务器上，在服务器运行Docker构建命令（ 当然也可以再本地构建）：</p><pre><code>Docker build -t docker/web:v1.0 .
</code></pre><p>docker/web:v1.0 是镜像名称,特别注意后页面那个点不能省略。</p><p><strong>启动容器</strong></p><pre><code>docker run -d -p 8080:80 docker/web:v1.0
</code></pre><p><code>docker/web:v1.0</code> 是构建镜像时设置的名称，<code>8080:80</code>代表将nginx的80映射到你服务器的8080端口(注意你服务器的端口是否开放8080，其他端口也可以；如果是本地访问，不用考虑这个)。</p><p>镜像启动成功后，浏览器输入<code>localhost:8080</code>即可访问了。</p><p><strong>ps</strong>: 微信公众号：Yopai，有兴趣的可以关注，每周不定期更新。不断分享，不断进步</p><figure><img src="/webChat1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,28)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};