&gt; ⚠️ Multi-language WhatsApp Error Notifier  

**Get instant WhatsApp alerts** when any workflow fails — perfect for mobile-first monitoring and fast incident response.

✅ No coding required  
✅ Works with any workflow via *Error Workflow*  
✅ Step-by-step setup instructions included in:
- 🇬🇧 English
- 🇪🇸 Español
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇷🇺 Русский

---

## 📦 What This Template Does

This template sends real-time WhatsApp notifications when a workflow fails. It uses the **WhatsApp Business Cloud API** to deliver a preformatted error message directly to your phone. The message includes:

- Workflow name  
- Error message  
- Last executed node  

Example message:
Error on WorkFlow: {{ $json.workflow.name }}
Message: {{ $json.execution.error.message }}
lastNodeExecuted: {{ $json.execution.lastNodeExecuted }}

---

## ⚙️ Prerequisites

Before using this template, make sure you have:

- A verified Facebook Business account  
- Access to WhatsApp Business Cloud API  
- A sender phone number (registered in Meta)  
- An access token (used as credentials in n8n)  
- A pre-approved message template (or be within the 24h session window)

[More info from Meta Docs →](https://developers.facebook.com/docs/whatsapp)

---

## 🚀 How to Use

1. Open the template and insert your WhatsApp credentials  
2. Enter your target phone number (e.g. your own) in international format  
3. Customize the message body if needed  
4. **Save the workflow but do not activate it**  
5. In any other workflow → open **Settings** → set this as your **Error Workflow**

---

## 🌐 Multi-language Setup Guide Included

This template includes full setup instructions with screenshots and message formatting help in:
- 🇬🇧 English
- 🇪🇸 Español
- 🇩🇪 Deutsch
- 🇫🇷 Français
- 🇷🇺 Русский

Choose your language inside the embedded sticky note in the workflow.