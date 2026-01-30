// 代码块复制功能 - 专属适配你的博客结构，仅复制rouge-code里的纯代码
document.addEventListener('DOMContentLoaded', function() {
  // 1. 匹配最外层代码块容器（挂载按钮）
  const highlightBlocks = document.querySelectorAll('div.highlight');
  // 2. 精准匹配纯代码容器（你的结构：.rouge-code 里的pre，唯一纯代码位置）
  const codeContainers = document.querySelectorAll('div.highlight .rouge-code pre');

  // 确保代码块数量和纯代码容器数量一致
  if (highlightBlocks.length !== codeContainers.length) return;

  highlightBlocks.forEach((block, index) => {
    // 防止重复添加按钮
    if (block.dataset.copyBtn) return;
    block.dataset.copyBtn = 'true';
    block.style.position = 'relative'; // 按钮定位核心

    // 创建复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerText = '复制';
    copyBtn.title = '一键复制纯代码';
    block.appendChild(copyBtn);

    // 创建提示框
    const copyTip = document.createElement('span');
    copyTip.className = 'code-copy-tip';
    block.appendChild(copyTip);

    // 复制核心逻辑：只取对应位置的纯代码容器文本
    copyBtn.addEventListener('click', async function() {
      try {
        // 精准获取纯代码文本，无行号、无复制文字
        const pureCode = codeContainers[index].textContent.trim();
        if (!pureCode) throw new Error('无代码内容');

        // 复制到剪贴板
        await navigator.clipboard.writeText(pureCode);
        copyTip.innerText = '复制成功';
        copyTip.classList.add('show');
      } catch (err) {
        copyTip.innerText = '复制失败';
        copyTip.classList.add('show');
        console.log('复制失败：', err);
      } finally {
        // 2秒隐藏提示
        setTimeout(() => copyTip.classList.remove('show'), 2000);
      }
    });
  });
});