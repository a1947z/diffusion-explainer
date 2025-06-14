d3.select("#header")
    .append("a")
        .attr("id", "header-title")
        .attr("href", "https://poloclub.github.io/diffusion-explainer/")
        .append("img")
        .attr("id", "header-logo")
        .attr("src", "./icons/logo.svg")
d3.select("#header-title")
    .append("div")
        .text("文生图扩散（Diffusion）模型原理解释器")

d3.select("#header")
    .append("div")
    .attr("id", "header-message")

d3.select("#header-message")
    .append("div")
        .attr("id", "header-message-1")
        .text("打开Stable Diffusion模型的黑盒子，看看它如何将你的")
d3.select("#header-message")
    .append("div")
        .attr("id", "header-message-2")
        .text("文本提示(Text Prompt)")
d3.select("#header-message")
    .append("div")
        .attr("id", "header-message-3")
        .text("变成")
d3.select("#header-message")
    .append("div")
        .attr("id", "header-message-4")
        .text("图片")
d3.select("#header-message")
    .append("div")
        .attr("id", "header-message-5")
        .text("!")

        
d3.select("#header")
    .append("div")
    .attr("id", "header-links")

d3.select("#header-links")
    .append("a")
        .attr("class", "header-link")
        .attr("id", "header-link-github")
        .attr("target", "_blank")
        .attr("href", "https://github.com/poloclub/diffusion-explainer")
        .append("img")
            .attr("id", "header-link-img-github")
            .attr("class", "header-link-img")
            .attr("src", "./icons/github.svg")
d3.select("#header-link-github")
    .append("div")
        .attr("id", "header-link-text-github")
        .attr("class", "header-link-text")
        .text("本项目代码继承自 GitHub开源项目diffusion-explainer")





