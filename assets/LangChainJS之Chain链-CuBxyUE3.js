import{a as e,c as t,i as n,t as r}from"./app-CA7RHYFk.js";var i=JSON.parse(`{"path":"/ai/LangChainJS%E4%B9%8BChain%E9%93%BE.html","title":"LangChainJS之Chain链(四)","lang":"zh-CN","frontmatter":{"title":"LangChainJS之Chain链(四)","date":"2026-07-02T02:00:00.000Z","description":"LangChainJS之Chain链","category":["AI"],"tags":["大模型"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LangChainJS之Chain链(四)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-07-02T02:00:00.000Z\\",\\"dateModified\\":\\"2026-07-02T09:25:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Herrylo\\",\\"url\\":\\"https://github.com/HerryLo\\"}]}"],["meta",{"property":"og:url","content":"https://herrylo.github.io/ai/LangChainJS%E4%B9%8BChain%E9%93%BE.html"}],["meta",{"property":"og:site_name","content":"Herrylo\`s Blog"}],["meta",{"property":"og:title","content":"LangChainJS之Chain链(四)"}],["meta",{"property":"og:description","content":"LangChainJS之Chain链"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-07-02T09:25:28.000Z"}],["meta",{"property":"article:tag","content":"大模型"}],["meta",{"property":"article:published_time","content":"2026-07-02T02:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-07-02T09:25:28.000Z"}]]},"git":{"createdTime":1782983525000,"updatedTime":1782984328000,"contributors":[{"name":"HerryLo","username":"HerryLo","email":"herryloyopai@163.com","commits":2,"url":"https://github.com/HerryLo"},{"name":"Claude Opus 4.7","username":"","email":"noreply@anthropic.com","commits":1}]},"readingTime":{"minutes":6.58,"words":1974},"filePathRelative":"ai/LangChainJS之Chain链.md","excerpt":"<p>前面几章，我们了解如何使用消息大模型，使用prompt提示词，Runnable是什么。如果你对于大模型使用、prompt提示词、Runnable不太了解，可以先看看前面几章。下面我们将继续学习讨论Chain链。</p>\\n<h3>为什么需要Chain链？</h3>\\n<p><code>Chain链</code>的本质，就是管道。在Shell命令行中，我们通过<code>|</code>操作符串联命令，例如<code>cat file.txt | tr 'a-z' 'A-Z'</code>将文件内容转为大写——管道将左侧命令的标准输出，直接作为右侧命令的标准输入。LangChain借鉴了这一经典设计，将其命名为<code>Chain</code>（链）。</p>"}`),a={name:`LangChainJS之Chain链.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<p>前面几章，我们了解如何使用消息大模型，使用prompt提示词，Runnable是什么。如果你对于大模型使用、prompt提示词、Runnable不太了解，可以先看看前面几章。下面我们将继续学习讨论Chain链。</p><h3 id="为什么需要chain链" tabindex="-1"><a class="header-anchor" href="#为什么需要chain链"><span>为什么需要Chain链？</span></a></h3><p><code>Chain链</code>的本质，就是管道。在Shell命令行中，我们通过<code>|</code>操作符串联命令，例如<code>cat file.txt | tr &#39;a-z&#39; &#39;A-Z&#39;</code>将文件内容转为大写——管道将左侧命令的标准输出，直接作为右侧命令的标准输入。LangChain借鉴了这一经典设计，将其命名为<code>Chain</code>（链）。</p><p>引入管道特性的目的，在于践行Unix哲学：每个组件只做一件事，并把它做好，然后通过管道将它们组合起来解决复杂问题。在LangChain.js中，Chain链正是这一理念的落地——它将模型、提示词模板、工具等异构组件串联成可执行的工作流，并统一管理组件间的数据传递与逻辑编排，让开发者能以声明式、可组合的方式构建复杂的AI应用。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>ChatPrompt.pipe(model).pipe(new StringOutputParser())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果没有<code>Chain链</code>，在使用模型、提示词、工具等组件时，开发者只能手动管理它们之间的数据传递。每一次调用都需要显式地获取前一步的输出，再作为下一步的输入。这种“胶水代码”在单次调用时尚且可控，但一旦涉及多轮对话或复杂工作流，数据结构就会变得混乱不堪，逻辑纠缠，维护成本急剧攀升。</p><p><code>Chain链</code>正是为此而生。它不仅允许开发者反复复用一个已构建好的工作流，更重要的是，它提供了一种标准化的编排模式——将模型、提示词、工具等异构组件统一纳入同一套接口（<code>Runnable</code>）之下，由链本身统一管理组件间的数据流转与执行顺序。开发者只需关心“做什么”，而无需关心“怎么传”。</p><p>下面我们来看看，手动调用和使用Chain调用的不同之处。</p><h3 id="手动调用" tabindex="-1"><a class="header-anchor" href="#手动调用"><span>手动调用</span></a></h3><p>如果我们要生成一篇文章，不使用Chain链调用，代码的执行是什么样，可以看看下面的代码↓</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 初始化模型</span></span>
<span class="line"><span>const model = new ChatOpenAI({ model: &quot;DeepSeek-V4-Pro&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义提示词模板（依然可以复用）</span></span>
<span class="line"><span>const outlinePrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;请为主题 &#39;{topic}&#39; 生成一篇文章的大纲。&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>const articlePrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;根据以下大纲写一篇完整的文章：\\n\\n{outline}&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1️⃣ 生成大纲</span></span>
<span class="line"><span>const outlineMessages = await outlinePrompt.formatMessages({ </span></span>
<span class="line"><span>  topic: &quot;人工智能的未来&quot; </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const outlineResponse = await model.invoke(outlineMessages);</span></span>
<span class="line"><span>// 从响应中提取文本内容（相当于 StringOutputParser 的功能）</span></span>
<span class="line"><span>const outline = outlineResponse.content;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2️⃣ 基于大纲生成文章</span></span>
<span class="line"><span>const articleMessages = await articlePrompt.formatMessages({ </span></span>
<span class="line"><span>  outline: outline </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const articleResponse = await model.invoke(articleMessages);</span></span>
<span class="line"><span>const article = articleResponse.content;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(article);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不使用Chain 链，开发者需要手动依次调用每个组件，并显式地传递数据，手动管理每一步的输入/输出、顺序和异常。</p><h3 id="chain链调用" tabindex="-1"><a class="header-anchor" href="#chain链调用"><span>Chain链调用</span></a></h3><p>下面我们来看看使用Chain链调用，又是什么样子，请看下面的代码↓</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 初始化模型</span></span>
<span class="line"><span>const model = new ChatOpenAI({ model: &quot;DeepSeek-V4-Pro&quot; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 大纲提示词</span></span>
<span class="line"><span>const outlinePrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;请为主题 &#39;{topic}&#39; 生成一篇文章的大纲。&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>const outlineChain = outlinePrompt</span></span>
<span class="line"><span>  .pipe(model)</span></span>
<span class="line"><span>  .pipe(new StringOutputParser()); // 输出字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文章提示词</span></span>
<span class="line"><span>const articlePrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;根据以下大纲写一篇完整的文章：\\n\\n{outline}&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>const articleChain = articlePrompt</span></span>
<span class="line"><span>  .pipe(model)</span></span>
<span class="line"><span>  .pipe(new StringOutputParser()); // 输出字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// chain链拼接组合</span></span>
<span class="line"><span>const fullChain = outlineChain</span></span>
<span class="line"><span>   // 把上一步的字符串 outline 包成对象,再喂给 articleChain</span></span>
<span class="line"><span>  .pipe(RunnableLambda.from((outline: string) =&gt; ({ outline }))) </span></span>
<span class="line"><span>  .pipe(articleChain);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result = await fullChain.invoke({ topic: &quot;人工智能的未来&quot; });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>outlineChain</code>和<code>articleChain</code>使用<code>Chain链</code>组装，它们是两个等待调用或复用的组件，此时它们还没被调用。而<code>fullChain</code>是这两个Chain组件的组合结果，<code>outlineChain</code>生成大纲并且输出字符串，再将生成的大纲字符串通过<code>RunnableLambda</code>转换成<code>{ outline: string }</code>对象传递给<code>articleChain</code>。直到调用<code>invoke</code>方法，整个流程才开始运行：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span> topic 进入 outlineChain</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>   大纲字符串</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>RunnableLambda 包成 { outline }</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>{ outline } 进入 articleChain</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span> 最终文章字符串</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用Chain链构建工作流，其中的每个子链（如 <code>outlineChain</code>）都可<strong>独立复用，</strong> 也可<strong>灵活拼接</strong>，自动<strong>由链管理数据流转</strong>。</p><h3 id="路由链" tabindex="-1"><a class="header-anchor" href="#路由链"><span>路由链</span></a></h3><p>这里的路由，类比网络路由，首先收到一个数据包，看包的目的地址，再根据路由表把包转发到正确的下一跳。&quot;路由&quot;的核心是：根据输入的某个属性，把请求分发到不同的处理路径。</p><p>在 <code>Chain链</code>中，是根据问题类别分发到不同专家 prompt，下面我们来看看路由链：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 使用 withStructuredOutput 进行分类</span></span>
<span class="line"><span>const classificationSchema = z.object({</span></span>
<span class="line"><span>  category: z.enum([&quot;tech&quot;, &quot;cooking&quot;, &quot;general&quot;]).describe(&quot;问题类别&quot;),</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const classifier = model.withStructuredOutput(classificationSchema);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 三个提示词模版</span></span>
<span class="line"><span>const techPrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;你是一个技术专家。请回答以下技术问题：\\n{question}&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>const cookingPrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;你是一个厨师。请回答以下烹饪问题：\\n{question}&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>const generalPrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;请回答以下问题：\\n{question}&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const question = &quot;怎么做红烧肉？&quot;;</span></span>
<span class="line"><span>// 分类</span></span>
<span class="line"><span>const classification = await classifier.invoke(</span></span>
<span class="line"><span>  \`将以下问题分类为 tech（技术）、cooking（烹饪）或 general（一般）：\\n\${question}\`</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let selectedPrompt;</span></span>
<span class="line"><span>// 根据问题分类，加载对应提示词模版</span></span>
<span class="line"><span>switch (classification.category) {</span></span>
<span class="line"><span>  case &quot;tech&quot;:</span></span>
<span class="line"><span>    selectedPrompt = techPrompt;</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  case &quot;cooking&quot;:</span></span>
<span class="line"><span>    selectedPrompt = cookingPrompt;</span></span>
<span class="line"><span>    break;</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    selectedPrompt = generalPrompt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const answer = await selectedPrompt</span></span>
<span class="line"><span>  .pipe(model)</span></span>
<span class="line"><span>  .pipe(new StringOutputParser()).invoke({ question });</span></span>
<span class="line"><span>// const result = await answerChain.invoke({ question });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你只看 switch 语句，那就是普通的条件分支，没什么&quot;路由&quot;味道。&quot;路由链&quot;这个名字来自 <code>LangChain</code> 的设计模式命名 ——强调的是整个流程的模式（<strong>分类 → 分发 → 处理</strong>），而不是单个 switch 语句。</p><p>换句话说：switch 本身不叫路由，但 &quot;<strong>先分类再分发到不同链</strong>&quot;这种整体结构就叫<strong>路由链</strong>。</p><h3 id="转换链" tabindex="-1"><a class="header-anchor" href="#转换链"><span>转换链</span></a></h3><p>转换链的本质，是借助 <code>Runnable</code> 统一标准，对单个或多个输入数据进行灵活处理，将其转换为下游组件所需的结构。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>const transformInput = RunnableLambda.from((input: { text: string }) =&gt; ({</span></span>
<span class="line"><span>  text: input.text,</span></span>
<span class="line"><span>  wordCount: input.text.split(/\\s+/).length,</span></span>
<span class="line"><span>  characterCount: input.text.length,</span></span>
<span class="line"><span>}));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const promptTemplate = ChatPromptTemplate.fromTemplate(\`</span></span>
<span class="line"><span>  分析以下文本的摘要：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  文本: {text}</span></span>
<span class="line"><span>  字数统计: {wordCount} 词，{characterCount} 字</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  请提供摘要。</span></span>
<span class="line"><span>\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const chain = transformInput</span></span>
<span class="line"><span>  .pipe(promptTemplate)</span></span>
<span class="line"><span>  .pipe(model)</span></span>
<span class="line"><span>  .pipe(new StringOutputParser());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const text = \`</span></span>
<span class="line"><span>  LangChain 是一个用于开发由语言模型驱动的应用程序的框架。</span></span>
<span class="line"><span>  它提供了一套丰富的工具和组件，使得构建复杂的 LLM 应用变得更加容易。</span></span>
<span class="line"><span>  无论是简单的聊天机器人还是复杂的智能代理，LangChain 都能帮你实现。</span></span>
<span class="line"><span>\`.trim();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const result = await chain.invoke({ text });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码示例中，<code>RunnableLambda.from</code> 将原始的 <code>text</code> 字段转换为多个字段组成的对象。得益于 <code>Runnable</code> 的统一接口规范，经转换后的数据对象，能够无缝传递给后续的提示词模板（<code>promptTemplate</code>）使用，整个流程自然而流畅。</p><p>在实际业务场景中，原始数据格式往往是固定的，但前端展示或下游处理逻辑，对数据形态有特定要求。转换链恰好精准地解决了这一问题——它作为数据预处理/后处理的标准化“加工站”，让开发者能够以声明式、可组合的方式，将复杂的数据清洗、格式转换、字段映射等逻辑解耦出来，确保数据在进入核心大模型（LLM）环节之前，已完全就绪。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>如今日常开发中，AI 编程工具已成为得力助手。但理解这些底层原理依然有意义：当你看到 AI 生成的代码时，你能看懂它“在做什么”，更能理解它“为什么这样写”。</p>`,31)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};