// 代码块复制功能 - 电脑端+手机端双适配，彻底过滤行号
document.addEventListener('DOMContentLoaded', function() {
  // 匹配所有代码块外层容器
  const highlightBlocks = document.querySelectorAll('div.highlight');

  highlightBlocks.forEach(block => {
    // 防止重复添加按钮
    if (block.dataset.copyBtn) return;
    block.dataset.copyBtn = 'true';
    block.style.position = 'relative';

    // 创建复制按钮和提示框（样式不变）
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerText = 'copy';
    copyBtn.title = '一键复制代码';
    block.appendChild(copyBtn);

    const copyTip = document.createElement('span');
    copyTip.className = 'code-copy-tip';
    block.appendChild(copyTip);

    // 复制核心逻辑：双结构适配+移动端兼容
    copyBtn.addEventListener('click', function() {
      try {
        let pureCode = '';
        const table = block.querySelector('table.rouge-table');

        if (table) {
          // 适配电脑端：表格布局，取rouge-code列的纯代码
          const codeCell = block.querySelector('.rouge-code pre');
          pureCode = codeCell ? codeCell.textContent.trim() : '';
        } else {
          // 适配手机端：混排布局，遍历行过滤行号
          const codeLines = block.querySelectorAll('pre > span.line, pre > code, pre > span:not(.rouge-gutter):not(.line-number)');
          codeLines.forEach(line => {
            // 跳过行号节点
            if (line.classList.contains('rouge-gutter') || line.classList.contains('line-number')) return;
            pureCode += line.textContent + '\n';
          });
          pureCode = pureCode.trim();
        }

        // 校验：无代码则提示
        if (!pureCode) throw new Error('未检测到纯代码内容');

        // 移动端兼容：优先用同步execCommand降级方案（避免异步失败）
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          const textarea = document.createElement('textarea');
          textarea.value = pureCode;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        } else {
          // 电脑端用现代Clipboard API
          navigator.clipboard.writeText(pureCode);
        }

        copyTip.innerText = '复制成功！';
        copyTip.classList.add('show');
      } catch (err) {
        copyTip.innerText = '复制失败';
        copyTip.classList.add('show');
        console.log('复制失败原因：', err);
      } finally {
        setTimeout(() => copyTip.classList.remove('show'), 2000);
      }
    });
  });
});
