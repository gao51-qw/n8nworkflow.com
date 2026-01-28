A reusable and production-ready n8n workflow that secures public webhooks using **Bearer Token authentication** and **dynamic request validation**.

---

## ✨ What It Does

- **Verifies Bearer Token**  
  Compares the `Authorization` header with a configured secret token.

- **Validates Required Fields**  
  Checks that all expected fields are present in the incoming request body.

- **Returns Standardized JSON Responses**  
  - `401 Unauthorized` if token is missing or invalid  
  - `400 Bad Request` if required fields are missing  
  - `200 OK` with a custom success payload

---

## 👤 Who It’s For

- Developers exposing n8n workflows as APIs
- No-code/low-code builders integrating with external forms or tools
- Anyone needing simple authentication and validation on incoming webhooks

---

## 💡 Why Use It

- 🔒 **Secure**: Prevents unauthorized access to your public workflows
- 🧼 **Clean**: Centralized configuration for token and required fields
- ⚙️ **Flexible**: Easy to extend and customize for any use case

---

## 🛠 Setup Instructions

1. **Configure Values in the `Configuration` Node**
   - Set your secret token:  
     `config.bearerToken = YOUR_TOKEN`
   - Define required request fields by key:  
     Example:  
     ```
     config.requiredFields.message = true;
     config.requiredFields.email = true;
     ```
      ✅ Only the **keys** matter – values can be anything.

2. **Plug in Your Business Logic**  
   Replace the `"Add workflow nodes here"` with your own logic.

3. **Customize the Success Response**  
   Edit the `Create Response` node to shape your success payload.

---

## 🧪 Use Cases

- Securing public form submissions 
- Creating internal API endpoints
- Validating data from external services

---

📌 *Use this as a base for building secure, API-style workflows in n8n.*

---
**👋 Hello! I'm [Audun / xqus](https://xqus.com)** 

If my n8n workflows saved you time or sparked ideas, [consider sending a little support](https://donate.stripe.com/9AQ6ps6Kna3t8Vi28b) my way. It helps me keep building cool stuff — and maybe grab a coffee ☕ along the way!