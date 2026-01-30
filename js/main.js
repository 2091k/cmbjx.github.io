// 代码块复制功能 - Jekyll博客适配版，无第三方依赖
document.addEventListener('DOMContentLoaded', function() {
  // 匹配Jekyll+rouge默认代码块结构（div.highlight > pre），该仓库100%适配
  const codeBlocks = document.querySelectorAll('div.highlight pre');
  
  codeBlocks.forEach(preBlock => {
    // 防止重复添加按钮
    if (preBlock.dataset.copyBtn) return;
    preBlock.dataset.copyBtn = 'true';

    // 1. 创建复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerText = '复制';
    copyBtn.title = '一键复制代码';
    preBlock.appendChild(copyBtn);

    // 2. 创建提示框
    const copyTip = document.createElement('span');
    copyTip.className = 'code-copy-tip';
    preBlock.appendChild(copyTip);

    // 3. 复制核心逻辑
    copyBtn.addEventListener('click', async function() {
      try {
        // 获取代码纯文本，保留原格式
        const codeText = preBlock.textContent.trim();
        // 原生剪贴板API
        await navigator.clipboard.writeText(codeText);
        copyTip.innerText = '复制成功';
        copyTip.classList.add('show');
      } catch (err) {
        copyTip.innerText = '复制失败';
        copyTip.classList.add('show');
        console.log('代码复制失败：', err);
      } finally {
        // 2秒后隐藏提示
        setTimeout(() => copyTip.classList.remove('show'), 2000);
      }
    });
  });
});