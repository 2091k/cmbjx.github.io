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
const ENCRYPTED_TEXT = "whYur7Ryo5nBlrNJZUAJ2sIbeSYK8m2jjZBTVbdSEOIiCxYK/bYod7jNT940qQb6kvaxQJjFgh7UUjqCU6fEMrWN6E39w1350JR3GwVaQOY=";

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


#### 用VB显示条码对应数量自动变化

- 标签中有几个条码就像是数量几

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
const ENCRYPTED_TEXT = "j3OlYP9Zh8c5LZiadORJ5let9S8Y902UtXg/w+hwWiKRyVYL6m5azKKC+aD2R2dNiJkVpIPYhtQvmojHAkwuOuFsjRBDhgdD2pKskWahck2z2Ez/cqtmCOpqc9Vhw2tzkkkQtd+4AAVV4ehgWZEbiwnriTTiIUsEIbed8D7Gn2udMuABRd2lEQSJ7FWoVdZNp7Ir/jumX72JzcwJ7jaP+IEycuz2kCqd72Cip1C/pQWPB9AhNvoACfohBK06+WZSpGG7axwdMauXY/uNOvVzma1l7F3sCdkueq/MED5sLYsq0FgTdG1IxGtuN9gbvhtCCxgZufp3tCSAyhMEkmOitAvKkDI/plCMu/clEjgfikowb/ND590AAxLGwIIRZ32zRoR9Dy8hiGPSNCuyiEI0pfGvp7FSaiIc46SgrXePsUQKoeDRu/5Kmd+8FF/Nwir8oVBOgElPKHJs54njGjoFYchXiW1SKLKEfbTmskhgTIbTykFs/Yc8zkHza87IcNg16RauBYPlK2Wtq/4TUXUgS0NqPi60ywfowGeHNtltRzBAA/SnGjWWlJXYUOcfLdCuG2BfFVEMcNmeTMXLpDAu8G+vxewz7xUOynIBo2oL0WO4gpysf/oEXYH7+KFWsz6i9ocWzcySvsZ0sc8ZytqS8f3STSAtpXO+ELgC277ppmstAFVp3eCFacAjT2OTIjBO1z0g5eC3uAYYz37Zga4r1L2DohExEL0kWhsSoN/lzv6psePqLGO5hTz/+xCuO9U0LcixreEi+gqeJo3nibJm4NlM1qsaEVvGBWIqlX6VmML82fmhtxOWr5vYzoF4vuiBgxopiC7oG8NZklJ0NVZJ7MuZfFdx1RoUEq3tc/T/1iQnVfEmOBSg5w8BSaTNq0miOduZQsu487j6pDj9LjJxWVXF3gthrsoJdo5tfKyQFbfo6NpnuiW06YQvGSPIl35j4/dr7zexe3poSZRy3dW55AQcu/ANyRQxuaWKHUVEs4MdontMsyOaGPG40IJthByiGwB9dWaS+3N6jSf7+t9igx/tJvlbSpJ1uw0ariRNHpPekL8/QY71O9GU75vOY45tIsYNb0jZknUbxfqJ5w3Ot6r750Q/OTGlin+l+pRwQ12bjbc13uYvaM58ERwUQEeCFQ28e52BKF3zs04VfaHeR8C+2RMwglHbY3YCcfWQw0m3fz6cSBt20dLIrdaT9ufoPHlYSpQrp4mmZ0V2S1f7sg==";

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

