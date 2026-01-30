// 代码块复制功能 - 修正版：仅复制纯代码，过滤行号/复制文字/冗余空白
document.addEventListener('DOMContentLoaded', function() {
  // 匹配结构：先取pre，再在内部精准找code标签（纯代码容器）
  const codeBlocks = document.querySelectorAll('div.highlight pre');
  
  codeBlocks.forEach(preBlock => {
    // 防止重复添加按钮
    if (preBlock.dataset.copyBtn) return;
    preBlock.dataset.copyBtn = 'true';

    // 1. 创建复制按钮（样式不变，仅位置保留）
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerText = '复制';
    copyBtn.title = '一键复制纯代码（自动过滤行号）';
    preBlock.appendChild(copyBtn);

    // 2. 创建提示框
    const copyTip = document.createElement('span');
    copyTip.className = 'code-copy-tip';
    preBlock.appendChild(copyTip);

    // 3. 复制核心逻辑【重点修正：仅取纯代码，过滤所有冗余】
    copyBtn.addEventListener('click', async function() {
      try {
        // 关键1：精准获取code标签（纯代码内容唯一容器，行号/按钮都不在此标签内）
        const codeTag = preBlock.querySelector('code');
        if (!codeTag) throw new Error('未找到纯代码内容');

        // 关键2：获取code标签原始文本，先过滤首尾空白
        let pureCode = codeTag.textContent.trim();
        
        // 关键3：正则过滤rouge生成的所有格式行号（适配1. / 1  / 01 等所有行号格式）
        // 正则说明：匹配开头的 数字+可选的点/空格 + 空格，全局替换为空
        pureCode = pureCode.replace(/^\d+[.\s]+\s/gm, '');

        // 关键4：再次过滤首尾空白，保证复制的代码干净
        pureCode = pureCode.trim();

        // 原生剪贴板API：仅复制处理后的纯代码
        await navigator.clipboard.writeText(pureCode);
        copyTip.innerText = '复制成功（纯代码）';
        copyTip.classList.add('show');
      } catch (err) {
        copyTip.innerText = '复制失败：' + err.message;
        copyTip.classList.add('show');
        console.log('代码复制失败：', err);
      } finally {
        // 2秒后隐藏提示
        setTimeout(() => copyTip.classList.remove('show'), 2000);
      }
    });
  });
});