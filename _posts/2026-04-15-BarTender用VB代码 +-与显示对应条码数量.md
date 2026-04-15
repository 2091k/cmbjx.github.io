---
layout: post
title: "BarTender用VB代码 +-*/与显示对应条码数量"
subtitle: ""
author: "每天要好心情哦，我的朋友"
header-img: "img/tu/home-blue.jpg"
header-mask: 0.4
tags:
- BarTender
- VB
---

#### 显示对某个值+-*/后的结果

- 举例，A是1   B自动变成1.4  （就是B=A+0.4）

#### 用VB显示条码对应数量自动变化

代码如下


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
const ENCRYPTED_TEXT = "UEBSdGR9y5H9fXIek+VTYpN6R0YZppt4EOauHWUU3GSA+RzHCdu7sCS4VFsLh4WxcvwPgEldvqPlDczcQvsHtlhN9AINEz2n3IHcy9/IrM3LYzqCe41gpBQyY3xIwDufzR5rDYQ7ibN7cAAY9C91FDIi28Giz4W2VTIM4MLUcmxAGWYkEvEJyxFGULFclXEt0D4SrYKw/vFiNY8R8j3efhpaLugYng2buzh7NqH6EPUMzrAHeJRb7i/euOFkPzrH/oI4qVALKOHDbrDMfJGI0rkICd3H5c5OWT7jPHC0XVuqVPqGGUxKJAYsStbeED8lcQKua0kr/PcpyaYXO3LXn66uMFtTUORaYTbx9QP1L1umhyvaujoTlpp6g+olrvhB3BXx6O3cIQxhUWgD54DAw4TjFEIgggCvP4yIaciFHPh314NhZum6YRjiLpcHjNcIzPziHptyJyVwOO4UDTguQyiIg9pMK4M6nIHnB6ngx930Q7IVeWUR94NdWO84GP237ujL6J0DOdoZ3dIgFlgZap3+uQV/gPqOWznwFHRSfNzLE6shGuyFIZpH6O26DHkbbyXoDGXrNlDkOtge/9ZpLn3QhbGGuS26Jq6a7f08Hvvqt8Ja3GUSHWkajz0a/B6vCSe1S/c7R7F/dMniNYiU8WK7p/59s3OpS3g9pX9AARl+2D/M1ADiq+27ldf2texYoEpIu0tpgn39V5Q1eTmJq6Pmarv0NMleboWDlUmEjA0tphmw6YLENH69jQKQTEjfe9+CUZCYsDJb1KOr28pRX+iRQq65wkmF1mAfFV4fzKiy9YHnfssK7QIQuJKOgiqvjQ4OEU/PdwL0AqySiqRhDmd7dEa8weczS5dFn6OJXwBYiRn3SjWJQxwscaiQWo83imsQ/jkcBOA4Fsko8f7s9NsFOWnQVgAJg0Dde8ngfyf4Q70cFLJ6GT4aB9qBss+SiP74TgInVI4XoVopJ7GOHEZry67gML9EVTFDSq+9FXS7pw6xuW3M15dlbDkHWVROLF7M7R0ZgqFIAsxjhNa1smNA2RIv7LjjIsXwfd2LntFRyGs5ahL0DXHjeRHySq+KUMjzcne5m0THquVcoA/tj74alULnnskvf9SR5qKAQBKg+yWV8hf2ePeVwEJu1dPZcZe/bVSLYQDm0azrCBXGDX1PMtoPzAd2agQs6/IFie5KohGRwupf8CupU6cV0LEOelLK4vNzQihp+8tg3s5PnapDCusLlLJ8HhYOEu7KzUaUrqtyHAZ0YdH9Zx521+iriNwutMgh/a6Yto0CAgrf1vyb2Qx51lqdBN5MbNYCqC5rOjX78m/6pYiGYdyBD7ay";

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