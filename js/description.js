d3.select("#description")
    .append("div")
        .attr("id", "description-top-button-container")
        .on("click", function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        })
d3.select("#description-top-button-container")
    .append("img")
        .attr("src", "icons/top.svg")
        .attr("id", "description-top-button-img")
d3.select("#description-top-button-container")
    .append("div")
        .attr("id", "description-top-button-text")
        .text("top")
d3.select("#description")
    .append("div")
        .attr("id", "description-section-what")
        .attr("class", "description-sec")
        .append("h1")
            .text("Stable Diffusion是什么?")
d3.select("#description-section-what")
    .append("p")
        .html(`
        Stable Diffusion是一个文本到图像的模型，可以将文本提示词转换为高分辨率图像。
        比如，当你输入
        <span style="color: var(--text3);">可爱的小兔子(a cute and adorable bunny)</span>，
        Stable Diffusion就会在几秒钟内生成描绘这个场景 
        &mdash; <span style="color: var(--text3);">可爱的小兔子</span> &mdash; 
        的高分辨率图像。
        在Diffusion Explainer中点击"选择其他提示词(Select another prompt)"来更换提示词，查看每个提示词生成的精彩图像！`)

// How does Stable Diffusion work?
d3.select("#description")
    .append("div")
        .attr("id", "description-section-how-work")
        .attr("class", "description-sec")
        .append("h1")
            .text("Stable Diffusion如何工作?")
d3.select("#description-section-how-work")
    .append("p")
        .html(`
        Stable Diffusion首先将文本提示词转换为<span style="font-style: italic">文本表示(text representation)</span>，
        这是一组总结提示词含义的数值。
        文本表示被用来生成<span style="font-style: italic">图像表示(image representation)</span>，
        这个表示总结了提示词中描述的图像。
        最后这个图像表示被放大成高分辨率图像。
        `)
d3.select("#description-section-how-work")
    .append("p")
        .html(`
        你可能会想，为什么Stable Diffusion要引入图像表示而不是直接生成高分辨率图像。
        原因是为了<span style="font-style: italic">计算效率(computational efficiency)</span>。
        在紧凑的图像表示上进行大部分计算，而不是在高分辨率图像上直接计算，可以在保持图像质量的同时大大降低计算时间和成本。
        `)
d3.select("#description-section-how-work")
    .append("p")
        .html(`
        图像表示最初是一个随机噪声，
        然后经过多个时间步骤的优化，最终得到一个能生成高质量且符合文本提示词的图像表示。
        优化的时间步数通常设置为50或100；在Diffusion Explainer中我们固定为50步。
        `)
d3.select("#description-section-how-work")
    .append("p")
        .html('我们将Stable Diffusion的图像生成过程分为三个主要步骤:')
        .append("ol")
        .attr("id", "description-generation-main-steps-ol")
d3.select("#description-generation-main-steps-ol")
    .append("li")
        .html('<a style="font-weight: 500" href="#description-subsec-text-representation-generation">文本表示生成(Text Representation Generation)</a>: Stable Diffusion将文本提示词转换为文本向量表示。')
d3.select("#description-generation-main-steps-ol")
    .append("li")
        .html('<a style="font-weight: 500" href="#description-subsec-image-representation-refining">图像表示优化(Image Representation Refining)</a>: 从随机噪声开始，在文本表示的引导下，Stable Diffusion逐步细化图像表示。Stable Diffusion在多个时间步骤中重复这个优化过程(在我们的Diffusion Explainer中设为50步)。')
d3.select("#description-generation-main-steps-ol")
    .append("li")
        .html('<a style="font-weight: 500" href="#description-subsec-image-upscaling">图像上采样(Image Upscaling)</a>: Stable Diffusion将图像表示放大成高分辨率图像。')
d3.select("#description-section-how-work")
    .append("p")
        .text("现在，让我们详细了解每个过程。")

// Text Representation Generation
d3.select("#description-section-how-work")
    .append("div")
        .attr("id", "description-subsec-text-representation-generation")
        .attr("class", "description-subsec")
        .append("h2")
            .text("文本表示生成(Text Representation Generation)")
d3.select("#description-subsec-text-representation-generation")
    .append("img")
        .attr("class", "description-gif")
        .attr("id", "text-representation-generation-expansion-gif")
        .attr("src", "assets/gif/trg.gif")
d3.select("#description-subsec-text-representation-generation")
    .append("p")
        .html(`
        点击文本表示生成可以看到文本提示词是如何转换为文本表示的，
        这个表示是一个概括了提示词内容的向量。
        这个过程包含两个步骤：
        <span style="font-style: italic">分词</span>
        和
        <span style="font-style: italic">文本编码</span>。`)

// Tokenizing
d3.select("#description-subsec-text-representation-generation")
    .append("div")
        .attr("id", "description-subsubsec-tokenizing")
        .attr("class", "description-subsubsec")
d3.select("#description-subsubsec-tokenizing")
    .append("div")
        .attr("class", "description-subsubsec-title")
        .html('1. 分词（Tokenizing）')
d3.select("#description-subsubsec-tokenizing")
    .append("p")
        .html("分词是一种常见的文本处理方法，用于将文本转换为数字以便神经网络处理。")
d3.select("#description-subsubsec-tokenizing")
    .append("div")
        .attr("class", "description-paragraph")
        .attr("id", "description-subsubsec-tokenizing-token-example-paragraph")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
    .html(`Stable Diffusion将文本提示词拆分成一系列分词。
    比如，它把文本提示词`)
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .style("color", "var(--text3)")
        .text("a cute and adorable bunny(一只可爱和讨人喜欢的小兔子)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text("拆分成以下分词：")


d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("a（一只）")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("cute(可爱)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("and（和）")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("adorable(讨人喜欢)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", and ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("bunny(小兔子)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(". 为了标记提示词的开始和结束，Stable Diffusion在序列的开头和结尾添加了")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("<start>")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text("和")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("<end>")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text("分词。上面例子的最终分词序列为：")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("<start>")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("a（一只）")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("cute(可爱)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("and（和）")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("adorable(讨人喜欢)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", ")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("bunny(小兔子)")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(", 和")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .attr("class", "text-vector-generator-token description-token")
        .text("<end>")
d3.select("#description-subsubsec-tokenizing-token-example-paragraph")
    .append("span")
        .text(".")

d3.select("#description-subsubsec-tokenizing")
    .append("p")
        // .html('为了保证所有分词序列具有相同的长度以便于计算，Stable Diffusion会将分词序列填充或截断至77个分词。如果输入提示词少于77个分词，<span class="text-vector-generator-token description-token" id="description-token-end"></span> 分词会被添加到序列末尾，直到序列长度达到77个分词。如果输入提示词超过77个分词，则保留最后77个分词，其余部分会被截断。选择77个分词的数量是为了在性能和计算效率之间取得平衡。')
        .html('为了便于计算，Stable Diffusion会保持所有文本提示词的分词序列长度都是77。如果输入提示词少于77个分词，就在序列末尾添加<span class="text-vector-generator-token description-token" id="description-token-end"></span>分词直到达到77个；如果超过77个分词，则保留前77个分词并截断其余部分。选择77这个长度是为了在性能和计算效率之间取得平衡。')

d3.select("#description-token-end").text("<end>")
// Text encoding
d3.select("#description-subsec-text-representation-generation")
    .append("div")
        .attr("id", "description-subsubsec-text-encoding")
        .attr("class", "description-subsubsec")
d3.select("#description-subsubsec-text-encoding")
    .append("div")
        .attr("class", "description-subsubsec-title")
        .html('2.文本编码（Text encoding）')
d3.select("#description-subsubsec-text-encoding")
    .append("p")
        .html(`Stable Diffusion将分词序列转换为文本表示。为了使文本表示能够指导图像生成，Stable Diffusion确保文本表示包含了提示词所描述图像的相关信息。这是通过使用一个称为<a href="https://openai.com/research/clip">CLIP</a>的特殊神经网络来实现的。`)
d3.select("#description-subsubsec-text-encoding")
    .append("p")
        .html("CLIP由一个图像编码器和一个文本编码器组成，它经过训练可以将图像及其文本描述编码成相似的向量。因此，由CLIP的文本编码器计算出的提示词文本表示很可能包含了提示词所描述图像的信息。点击上方的文本编码器可以看到可视化解释。")

// Image Representation Refining
d3.select("#description-section-how-work")
    .append("div")
        .attr("id", "description-subsec-image-representation-refining")
        .attr("class", "description-subsec")
        .append("h2")
            .text("图像表示优化(Image Representation Refining)")
d3.select("#description-subsec-image-representation-refining")
    .append("img")
        .attr("class", "description-gif")
        .attr("id", "image-refining-description-gif")
        .attr("src", "assets/gif/irr.gif")
d3.select("#description-subsec-image-representation-refining")
    .append("p")
        .html("Stable Diffusion生成图像表示，这是一个以数值形式概括了文本提示词所描述的高分辨率图像的向量。这是通过在多个时间步骤中优化一个随机初始化的噪声来实现的，逐步提高图像质量和与提示词的符合度。你可以通过调整Diffusion Explainer中的<span style='font-style: italic;'>种子值</span>来改变初始随机噪声。点击图像表示优化器可以可视化每个优化步骤中的噪声预测和去除过程。")
// Noise Prediction
d3.select("#description-subsec-image-representation-refining")
    .append("div")
        .attr("id", "description-subsubsec-noise-prediction")
        .attr("class", "description-subsubsec")
d3.select("#description-subsubsec-noise-prediction")
    .append("div")
        .attr("class", "description-subsubsec-title")
        .html('1. 噪声预测（Noise Prediction）')
d3.select("#description-subsubsec-noise-prediction")
    .append("p")
        .html("在每个时间步骤中，一个称为UNet的神经网络会预测当前时间步骤的图像表示中的噪声。UNet需要三个输入：")
d3.select("#description-unet-input-ol")
    .append("li")
    .html(`<span style="font-weight: 500;">图像表示</span>：当前时间步骤的图像表示`)
d3.select("#description-unet-input-ol")
    .append("li")
    .html(`<span style="font-weight: 500; color: var(--text3);">文本表示</span>：提示词的文本表示，用于指导从当前图像表示中应该去除什么噪声，以生成符合文本提示词的图像`)
d3.select("#description-unet-input-ol")
    .append("li")
    .html(`<span style="font-weight: 500;">时间步骤</span>：用于指示当前图像表示中剩余的噪声量`)

d3.select("#description-subsubsec-noise-prediction")
    .append("p")
        .html(`换句话说，
        UNet在文本提示词表示和时间步骤的指导下，预测当前图像表示中的<span style="color: var(--text3);">提示词条件噪声</span>。`)
d3.select("#description-subsubsec-noise-prediction")
    .append("p")
        .html(`然而，即使我们用文本提示词来调节噪声预测，
        生成的图像表示通常与文本提示词的符合程度还不够强。
        为了提高符合度，
        Stable Diffusion会额外预测一个基于空提示词(" ")的<span style="color: #909090;">通用噪声</span>，
        并将其从提示词条件噪声中减去，来衡量提示词的影响：`)

d3.select("#description-subsubsec-noise-prediction")
    .append("p")
        .attr("class", "description-equation")
        .html(`
        <span class="description-equation-term" style="color: var(--text3); background-color: #4d922110;">提示词的影响</span> 
        <span class="description-equation-op">=</span> 
        <span class="description-equation-term" style="color: var(--text3); background-color: #4d922110;">提示词条件噪声</span> 
        <span class="description-equation-op">-</span> 
        <span class="description-equation-term" style="color: #909090; background-color: #a0a0a020;">通用噪声</span>`)

d3.select("#description-subsubsec-noise-prediction")
    .append("p")
    .html(`
    换句话说，通用噪声有助于提高图像质量，
    而提示词的影响则有助于提高与提示词的符合度。
    最终的噪声是这两者的加权和，由一个称为<span style="color: var(--text3);">引导比例</span>的值来控制：`)

d3.select("#description-subsubsec-noise-prediction")
    .append("p")
    .html(`引导比例为0表示完全不符合文本提示词，
    而引导比例为1表示使用原始的提示词条件噪声。
    更大的引导比例会导致与文本提示词的更强符合度，
    但太大的值可能会降低图像质量。
    在Diffusion Explainer中调整引导比例的值，看看它如何改变生成的图像。`)

// Noise Removal Section
d3.select("#description-subsubsec-noise-removal")
    .append("p")
        .html("然后，Stable Diffusion会决定实际要从图像中去除多少预测的噪声，这是由一个称为调度器的算法决定的。每次去除少量噪声有助于逐步优化图像并生成更清晰的图像。")

d3.select("#description-subsubsec-noise-removal")
    .append("p")
        .html("调度器会根据总时间步数来做出这个决定。缩小后的噪声会从当前时间步骤的图像表示中减去，得到优化后的表示，这将成为下一个时间步骤的图像表示：")

d3.select("#description-subsubsec-noise-removal")
    .append("p")
        .attr("class", "description-equation")
        .attr("id", "description-equation-denoise")
d3.select("#description-equation-denoise")
    .append("span")
        .attr("class", "description-equation-term")
        .style("background-color", "#a0a0a020")
        .html(`时间步骤<span style="font-style: italic;">t+1</span>的图像表示`)
d3.select("#description-equation-denoise")
    .append("span")
        .attr("class", "description-equation-op")
        .html(` = `)
d3.select("#description-equation-denoise")
    .append("span")
        .attr("class", "description-equation-term")
        .style("background-color", "#a0a0a020")
        .html(`时间步骤<span style="font-style: italic;">t</span>的图像表示`)
d3.select("#description-equation-denoise")
    .append("span")
        .attr("class", "description-equation-op")
        .html(` - `)
d3.select("#description-equation-denoise")
    .append("span")
        .attr("class", "description-equation-term")
        .style("background-color", "#a0a0a020")
        .html(`缩小后的噪声`)

// Image Upscaling
d3.select("#description-section-how-work")
    .append("div")
        .attr("id", "description-subsec-image-upscaling")
        .attr("class", "description-subsec")
            .append("h2")
                .text("图像上采样(Image Upscaling)")
d3.select("#description-subsec-image-upscaling")
    .append("img")
    .attr("class", "description-gif")
    .attr("src", "assets/gif/upscale.gif")
d3.select("#description-subsec-image-upscaling")
    .append("p")
        .text("完成所有去噪步骤后，Stable Diffusion使用一个称为解码器的神经网络将图像表示放大成高分辨率图像。在文本表示的引导下完全去噪的优化后图像表示将生成一个与文本提示词高度符合的高分辨率图像。")

// Comparison View
d3.select("#description")
    .append("div")
        .attr("id", "description-section-comparison")
        .attr("class", "description-sec")
        .append("h1")
            .text("提示词关键字如何影响图像生成?")
            .style("margin-bottom", "0.5em")
d3.select("#description-section-comparison")
    .append("img")
        .attr("class", "description-gif")
        .attr("id", "rcv-expansion-gif")
        .attr("src", "assets/gif/rcv.gif")
d3.select("#description-section-comparison")
    .append("p")
        .html(`
        编写提示词是一个需要不断尝试和重复的过程。
        例如，从简单的提示词
        <span style="color: var(--text3); font-style: italic;">可爱的兔子(a cute bunny)</span>
        开始，你需要反复添加和删除关键词，比如
        <span style="color: var(--text3); font-style: italic;">皮克斯可爱角色风格(in the style of cute pixar character)</span>，
        直到得到你想要的图像。`)
d3.select("#description-section-comparison")
    .append("p")
        .text(`
        因此，了解提示词关键字如何影响图像生成对编写和优化提示词非常有帮助。
        点击提示词中高亮的关键字，对比包含和不包含这些关键字的两个提示词生成的图像.`)

// What can we change
d3.select("#description")
    .append("div")
        .attr("id", "description-section-change")
        .attr("class", "description-sec")
        .append("h1")
            .text("我们可以改变什么?")
d3.select("#description-section-change")
    .append("p")
        .text("在我们的Diffusion Explainer中，你可以通过调整文本提示词和超参数来改变生成的图像：")
d3.select("#description-hyperparameter-ol")
    .append("li")
    .html(`文本提示词：你想要生成的图像的描述。更详细的文本提示词通常会带来更好的图像质量。`)
d3.select("#description-hyperparameter-ol")
    .append("li")
    .html(`种子值：用于在时间步骤0初始化图像表示的随机种子。改变种子值会导致时间步骤0的图像表示不同，从而生成不同的图像。`)
d3.select("#description-hyperparameter-ol")
    .append("li")
    .html(`引导比例：生成的图像与文本提示词的符合程度。增加引导比例会导致更强的符合度，但可能会使生成的图像过于夸张。`)
d3.select("#description-section-change")
    .append("p")
        .text("此外，还有一些未包含在Diffusion Explainer中的其他超参数，如时间步骤总数、图像大小和调度器类型。")



// How implemented?
d3.select("#description")
    .append("div")
        .attr("id", "description-section-who")
        .attr("class", "description-sec")
        .append("h1")
            .text("谁开发了Diffusion Explainer?")
d3.select("#description-section-who")
    .append("p")
        .html(`这个演示来自Git上的开源项目Diffusion Explainer，它由 
        <a href="http://www.seongmin.xyz">Seongmin Lee</a>, 
        <a href="https://bhoov.com">Ben Hoover</a>, 
        <a href="http://hendrik.strobelt.com">Hendrik Strobelt</a>, 
        <a href="https://zijie.wang">Jay Wang</a>, 
        <a href="https://shengyun-peng.github.io">Anthony Peng</a>, 
        <a href="https://www.austinpwright.com">Austin Wright</a>, 
        <a href="https://www.linkedin.com/in/kevinyli/">Kevin Li</a>, 
        <a href="https://haekyu.com">Haekyu Park</a>, 
        <a href="https://alexanderyang.me">Alex Yang</a>, 
        和 
        <a href="https://poloclub.github.io/polochau/">Polo Chau</a>一起开发.`)
