// 页面加载完成后初始化复制按钮
document.addEventListener('DOMContentLoaded', function () {
  // 选中所有代码块容器（pre 标签）
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(block => {
    // 1. 创建复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.innerText = '复制代码';

    // 2. 创建复制成功提示
    const successTip = document.createElement('div');
    successTip.className = 'copy-success-tip';
    successTip.innerText = '复制成功 ✔';

    // 3. 把按钮和提示添加到代码块
    block.appendChild(copyBtn);
    block.appendChild(successTip);

    // 4. 绑定点击复制事件
    copyBtn.addEventListener('click', function () {
      // 获取代码内容（优先取 code 标签内的文本）
      const codeElement = block.querySelector('code');
      const codeText = codeElement ? codeElement.textContent : block.textContent;

      // 复制逻辑（优先用现代 Clipboard API，兼容旧浏览器）
      if (navigator.clipboard) {
        // 现代浏览器
        navigator.clipboard.writeText(codeText)
          .then(() => showSuccessTip(successTip))
          .catch(() => fallbackCopy(codeText, successTip));
      } else {
        // 旧浏览器兼容
        fallbackCopy(codeText, successTip);
      }
    });
  });

  // 旧浏览器复制方案（textarea 模拟）
  function fallbackCopy(text, tip) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    // 隐藏 textarea（避免页面闪烁）
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);

    // 选中并复制
    textArea.select();
    try {
      const isSuccess = document.execCommand('copy');
      isSuccess ? showSuccessTip(tip) : alert('复制失败，请手动复制');
    } catch (err) {
      alert('复制失败：' + err);
    }

    document.body.removeChild(textArea);
  }

  // 显示复制成功提示（2 秒后隐藏）
  function showSuccessTip(tip) {
    tip.style.display = 'block';
    setTimeout(() => {
      tip.style.display = 'none';
    }, 2000);
  }
});
