// 代码块复制功能 - 终极版：兼容rouge所有行号结构，精准获取纯代码（过滤行号/复制文字/所有冗余）
document.addEventListener('DOMContentLoaded', function() {
  // 匹配所有代码块外层容器
  const codeBlocks = document.querySelectorAll('div.highlight');
  
  codeBlocks.forEach(highlightBlock => {
    // 防止重复添加按钮
    if (highlightBlock.dataset.copyBtn) return;
    highlightBlock.dataset.copyBtn = 'true';
    // 强制容器相对定位，保证按钮定位
    highlightBlock.style.position = 'relative';

    // 1. 创建复制按钮（样式不变）
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.innerText = '复制';
    copyBtn.title = '一键复制纯代码（自动过滤行号）';
    highlightBlock.appendChild(copyBtn); // 按钮挂在最外层，避免被行号/代码块遮挡

    // 2. 创建提示框
    const copyTip = document.createElement('span');
    copyTip.className = 'code-copy-tip';
    highlightBlock.appendChild(copyTip);

    // 3. 复制核心逻辑【按节点精准获取纯代码，兼容所有rouge行号结构】
    copyBtn.addEventListener('click', async function() {
      try {
        let pureCode = '';
        // ********** 适配结构1：table表格布局（rouge linenos默认，最可能）**********
        const codeTable = highlightBlock.querySelector('table .code pre');
        if (codeTable) {
          pureCode = codeTable.textContent.trim();
        } 
        // ********** 适配结构2：span行号布局 **********
        else if (highlightBlock.querySelectorAll('.line-number, .gutter').length) {
          const codeLines = highlightBlock.querySelectorAll('pre code, pre > span:not(.line-number):not(.gutter)');
          codeLines.forEach(line => pureCode += line.textContent + '\n');
          pureCode = pureCode.trim();
        }
        // ********** 适配常规结构（无行号/单code标签）**********
        else {
          const codeTag = highlightBlock.querySelector('code');
          pureCode = codeTag ? codeTag.textContent.trim() : '';
        }

        // 校验：未获取到代码则抛出错误
        if (!pureCode) throw new Error('未检测到纯代码内容');

        // 仅复制处理后的纯代码
        await navigator.clipboard.writeText(pureCode);
        copyTip.innerText = '复制成功！';
        copyTip.classList.add('show');
      } catch (err) {
        copyTip.innerText = '复制失败';
        copyTip.classList.add('show');
        console.log('复制失败原因：', err);
      } finally {
        // 2秒后隐藏提示
        setTimeout(() => copyTip.classList.remove('show'), 2000);
      }
    });
  });
});