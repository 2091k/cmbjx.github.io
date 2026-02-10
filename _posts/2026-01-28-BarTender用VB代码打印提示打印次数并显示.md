---
layout: post
title: "BarTender用VB代码打印提示打印次数并显示"
subtitle: ""
author: "每天要好心情哦，我的朋友"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
category: 技术
tags:
- BarTender
- VB代码
---
#### 扫码自动打印+重复打印弹窗提示+标签显示打印次数

vb代码示例

<!-- 哈希版解密模块（源码无明文密码） -->
<div id="hash-crypto-container" style="margin: 20px 0; font-family: 'Microsoft Yahei', Roboto, sans-serif;">
  <div id="hash-prompt" style="padding: 15px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; margin-bottom: 10px;">
    <p style="margin: 0 0 10px 0; color: #333; font-size: 14px;">请输入密码查看代码：</p>
    <input 
      type="password" 
      id="hash-pwd" 
      placeholder="输入查看密码"
      style="padding: 8px 12px; width: 250px; border: 1px solid #ddd; border-radius: 4px; margin-right: 8px; font-size: 14px;"
      onkeydown="if(event.key === 'Enter') decryptByHash()"
    >
    <button 
      onclick="decryptByHash()"
      style="padding: 8px 16px; background: #286090; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;"
    >
      解密查看
    </button>
  </div>
  
  <div id="hash-result" style="display: none;">
    <pre style="margin: 0; padding: 16px; background: #f5f5f5; border-radius: 6px; overflow-x: auto;">
      <code class="language-vb" id="hash-decrypted-text" style="color: #333; font-family: Consolas, monospace; font-size: 14px; line-height: 1.5;"></code>
    </pre>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/crypto-js@4.2.0/crypto-js.min.js"></script>
<script>
// ===================== 配置（仅存哈希，无明文密码） =====================
const PWD_HASH = "bb6cfda395a43aa736885f4b191cf8cba6f308939e1155ba736d8c8f43e78673"; // 如：f8095880e8937d7c968f5b81e0903be9f30c266f2f6f28b8b8b8b8b8b8b8b8b8";
const AES_KEY = CryptoJS.enc.Utf8.parse("1234567890123456");
const AES_IV = CryptoJS.enc.Utf8.parse("abcdefghijklmnop");
const ENCRYPTED_TEXT = "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";

// ===================== 哈希验证+解密 =====================
function decryptByHash() {
  const pwdInput = document.getElementById("hash-pwd");
  const inputPwd = pwdInput.value.trim();
  
  if (inputPwd === "") {
    alert("请输入密码！");
    pwdInput.focus();
    return;
  }

  // 关键：生成输入密码的哈希，和源码中的哈希对比（无明文密码）
  const inputHash = CryptoJS.SHA256(inputPwd).toString();
  if (inputHash !== PWD_HASH) {
    alert("❌ 密码错误！");
    pwdInput.value = "";
    pwdInput.focus();
    return;
  }

  try {
    // 解密逻辑（和之前一致）
    const cipherParams = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(ENCRYPTED_TEXT)
    });
    const decryptedData = CryptoJS.AES.decrypt(cipherParams, AES_KEY, {
      iv: AES_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const originalText = CryptoJS.enc.Utf8.stringify(decryptedData);

    document.getElementById("hash-decrypted-text").textContent = originalText;
    document.getElementById("hash-result").style.display = "block";
    document.getElementById("hash-prompt").style.display = "none";
    alert("✅ 密码正确！");
    
  } catch (error) {
    alert("❌ 解密失败：" + error.message);
    pwdInput.value = "";
    pwdInput.focus();
  }
}

window.onload = function() {
  document.getElementById("hash-pwd").focus();
};
</script>

![image](https://jasuimg.2091k.cn/2091k/image/main/001/20260128135827_2ncdtw5mp4.png)

模板示例文件

[https://wwbda.lanzouv.com/i4qq83h6xq9a](https://wwbda.lanzouv.com/i4qq83h6xq9a)
