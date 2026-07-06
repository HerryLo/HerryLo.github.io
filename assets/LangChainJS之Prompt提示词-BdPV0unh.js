import{a as e,c as t,i as n,t as r}from"./app-CA7RHYFk.js";var i=JSON.parse('{"path":"/ai/LangChainJS%E4%B9%8BPrompt%E6%8F%90%E7%A4%BA%E8%AF%8D.html","title":"LangChainJS之Prompt提示词(二)","lang":"zh-CN","frontmatter":{"title":"LangChainJS之Prompt提示词(二)","date":"2026-07-02T02:00:00.000Z","description":"LangChainJS之Prompt提示词","category":["AI"],"tags":["大模型"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LangChainJS之Prompt提示词(二)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-07-02T02:00:00.000Z\\",\\"dateModified\\":\\"2026-07-02T09:25:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Herrylo\\",\\"url\\":\\"https://github.com/HerryLo\\"}]}"],["meta",{"property":"og:url","content":"https://herrylo.github.io/ai/LangChainJS%E4%B9%8BPrompt%E6%8F%90%E7%A4%BA%E8%AF%8D.html"}],["meta",{"property":"og:site_name","content":"Herrylo`s Blog"}],["meta",{"property":"og:title","content":"LangChainJS之Prompt提示词(二)"}],["meta",{"property":"og:description","content":"LangChainJS之Prompt提示词"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-07-02T09:25:28.000Z"}],["meta",{"property":"article:tag","content":"大模型"}],["meta",{"property":"article:published_time","content":"2026-07-02T02:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-07-02T09:25:28.000Z"}]]},"git":{"createdTime":1782983195000,"updatedTime":1782984328000,"contributors":[{"name":"HerryLo","username":"HerryLo","email":"herryloyopai@163.com","commits":2,"url":"https://github.com/HerryLo"},{"name":"Claude Opus 4.7","username":"","email":"noreply@anthropic.com","commits":1}]},"readingTime":{"minutes":4.31,"words":1294},"filePathRelative":"ai/LangChainJS之Prompt提示词.md","excerpt":"<p>在上文中中，我们了解使用LangChainJS进行基础的消息大模型调用，如果你对于大模型基础调用不了解，可以先看看第一章。下面我们将继续学习讨论Prompt提示词。</p>\\n<h3>为什么需要Prompt提示词？</h3>\\n<p>Prompt提示词是给到大模型的消息指令。在上一章中提到Message消息，Message也是用来给大模型的消息指令，直接使用Message完全可行，而且对于固定内容的单次调用，甚至更简单，那为什么还需要Prompt提示词呢？</p>\\n<p>在LangChain中，prompt提示词的价值在于“动态构建”和“可复用”。如果使用Message消息是没办法动态构建和复用的，而prompt解决了这个问题。</p>"}'),a={name:`LangChainJS之Prompt提示词.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<p>在上文中中，我们了解使用LangChainJS进行基础的消息大模型调用，如果你对于大模型基础调用不了解，可以先看看第一章。下面我们将继续学习讨论Prompt提示词。</p><h3 id="为什么需要prompt提示词" tabindex="-1"><a class="header-anchor" href="#为什么需要prompt提示词"><span>为什么需要Prompt提示词？</span></a></h3><p>Prompt提示词是给到大模型的消息指令。在上一章中提到Message消息，Message也是用来给大模型的消息指令，直接使用Message完全可行，而且对于固定内容的单次调用，甚至更简单，那为什么还需要Prompt提示词呢？</p><p>在LangChain中，prompt提示词的价值在于“动态构建”和“可复用”。如果使用Message消息是没办法动态构建和复用的，而prompt解决了这个问题。</p><p>提示词调用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>import &quot;dotenv/config&quot;;</span></span>
<span class="line"><span>import { ChatOpenAI } from &quot;@langchain/openai&quot;;</span></span>
<span class="line"><span>import { ChatPromptTemplate } from &quot;@langchain/core/prompts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const model = new ChatOpenAI({</span></span>
<span class="line"><span>  model: &quot;DeepSeek-V4-Pro&quot;,</span></span>
<span class="line"><span>  temperature: 0.7,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>async function main() {</span></span>
<span class="line"><span>  const promptTemplate = ChatPromptTemplate.fromMessages([</span></span>
<span class="line"><span>    [&quot;system&quot;, &quot;你是一个语言翻译专家，将 {source_lang} 翻译成 {target_lang}。&quot;],</span></span>
<span class="line"><span>    [&quot;user&quot;, &quot;{text}&quot;],</span></span>
<span class="line"><span>  ]);</span></span>
<span class="line"><span>  const prompt = await promptTemplate.format({</span></span>
<span class="line"><span>    source_lang: &quot;中文&quot;,</span></span>
<span class="line"><span>    target_lang: &quot;英文&quot;,</span></span>
<span class="line"><span>    text: &quot;你好，世界！&quot;,</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const response = await model.invoke(prompt);</span></span>
<span class="line"><span>  console.log(&quot;AI 回复:&quot;, response.content);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main().catch(console.error);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码参考：<a href="https://github.com/HerryLo/LangChainJsLearning/blob/main/src/02-prompts/02-chat-prompt-template.ts" target="_blank" rel="noopener noreferrer">prompt使用</a></p><p>在示例代码中，<code>PromptTemplate</code> 通过结构化模板实现了对提示词的动态调控。它就像一个预设好格式的填空文档，用 <code>{ }</code> 作为占位符，精准标记出需要动态变化的部分。每次调用时，只需传入对应的变量值，模板便会自动完成内容填充，生成一份可直接交付给模型的提示词。</p><p>动态构建：通过占位符变量标记出动态变化的部分，每次调用，只需要传入对于变量值；</p><p>可复用：<code>promptTemplate</code>提示词模板可反复使用，只需要调用<code>promptTemplate.format</code>再次给定变量值即可；</p><h3 id="结构化输出" tabindex="-1"><a class="header-anchor" href="#结构化输出"><span>结构化输出</span></a></h3><p>结构化输出是Prompt提示词的高阶应用场景。基础版的<code>PromptTemplate</code>通过<code>{ }</code>占位符虽然能灵活控制输入，却无法约束模型的输出。</p><p>在实际业务中，我们往往需要模型返回标准格式的JSON数据——便于前端解析、后端存储或下游系统集成。结构化输出正是为此而生：它在提示词层面明确告知模型所需的输出结构，并结合LangChain的解析器，将模型返回的文本自动转换为可用的JSON对象，从而实现对输出的精准控制。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>import { ChatOpenAI } from &quot;@langchain/openai&quot;;</span></span>
<span class="line"><span>import { z } from &quot;zod&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 代码省略......</span></span>
<span class="line"><span>const schema = z.object({</span></span>
<span class="line"><span>  sentiment: z.enum([&quot;positive&quot;, &quot;negative&quot;, &quot;neutral&quot;]).describe(&quot;情感倾向&quot;),</span></span>
<span class="line"><span>  confidence: z.number().min(0).max(1).describe(&quot;置信度&quot;),</span></span>
<span class="line"><span>  reasoning: z.string().describe(&quot;分析理由&quot;),</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const structuredModel = model.withStructuredOutput(schema);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const text = &quot;这家餐厅的食物非常好吃，服务也很棒！&quot;;</span></span>
<span class="line"><span>const result = await structuredModel.invoke(</span></span>
<span class="line"><span>  \`分析以下文本的情感：\\n\${text}\`</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&quot;解析结果:&quot;, result);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 <code>zod</code> 定义你期望的输出结构，定义一个模式（Schema），然后将其传入模型的 <code>withStructuredOutput</code> 方法即可，然后调用<code>invoke()</code>方法，即会输出相应JSON结构数据：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>解析结果: {</span></span>
<span class="line"><span>  sentiment: &#39;positive&#39;,</span></span>
<span class="line"><span>  confidence: 0.98,</span></span>
<span class="line"><span>  reasoning: &quot;文本中使用了&#39;非常好吃&#39;、&#39;很棒&#39;等积极词汇，表达了对餐厅食物和服务的满意与赞赏，没有负面或中性表述，整体情感倾向明确为正面。&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结构化输出既包含提示词里的格式指令，又借助了LangChain的解析器或模型的底层参数（如 <code>response_format</code>）来保障输出，属于格式层面的控制。</p><h3 id="少样本学习" tabindex="-1"><a class="header-anchor" href="#少样本学习"><span>少样本学习</span></a></h3><p>少样本学习是一种通过向大模型提供少量示例来引导其输出的提示词技术。它不直接告诉模型“你应该怎么做”，而是给模型展示几个“输入→输出”的参考样例，让模型从中学习任务模式，并据此对新的输入生成符合预期的结果。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>import { ChatOpenAI } from &quot;@langchain/openai&quot;;</span></span>
<span class="line"><span>import { FewShotChatMessagePromptTemplate, ChatPromptTemplate } from &quot;@langchain/core/prompts&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const examples = [</span></span>
<span class="line"><span>  { input: &quot;苹果&quot;, output: &quot;水果&quot; },</span></span>
<span class="line"><span>  { input: &quot;胡萝卜&quot;, output: &quot;蔬菜&quot; },</span></span>
<span class="line"><span>  { input: &quot;香蕉&quot;, output: &quot;水果&quot; },</span></span>
<span class="line"><span>  { input: &quot;菠菜&quot;, output: &quot;蔬菜&quot; },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>const examplePrompt = ChatPromptTemplate.fromTemplate(</span></span>
<span class="line"><span>  &quot;输入: {input}\\n输出: {output}&quot;</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fewShotPrompt = new FewShotChatMessagePromptTemplate({</span></span>
<span class="line"><span>  examples,</span></span>
<span class="line"><span>  examplePrompt,</span></span>
<span class="line"><span>  prefix: &quot;以下是食物分类的示例，请根据示例回答：&quot;,</span></span>
<span class="line"><span>  suffix: &quot;输入: {input}\\n输出:&quot;,</span></span>
<span class="line"><span>  inputVariables: [&quot;input&quot;],</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const prompt = await fewShotPrompt.format({ input: &quot;橙子&quot; });</span></span>
<span class="line"><span>const response = await model.invoke(prompt);</span></span>
<span class="line"><span>console.log(&quot;AI: 回复：&quot;,response.content); // AI: 回复：水果</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>少样本学习是把例子直接写在提示词文本里，属于内容层面的控制。同时示例不是越多越好，3-6个高质量示例即可，如果当示例比较多时，务必要使用LangChain提供的示例选择器。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><p>以上便是 Prompt 提示词的基础调用与高阶应用示例。这些代码旨在帮助你理解其作用与功能——在实际开发中，你可以根据具体需求灵活选择使用何种方式。</p><p>如今日常开发中，AI 编程工具已成为得力助手。但理解这些底层原理的意义：当你看到 AI 生成的代码时，你能看懂它“在做什么”，更能理解它“为什么这样写”。</p>`,24)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};