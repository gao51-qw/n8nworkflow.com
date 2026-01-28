# Secure API endpoint with bearer token authentication and field validation

> A reusable and production-ready n8n workflow that secures public webhooks using **Bearer Token authentication** and **dynamic request validation**.

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

## 📊 Basic Information

- **Workflow ID:** 3970
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 1170
- **Downloads:** 117
- **Created:** 2025/5/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3970)

## 👤 Author

- **Name:** Audun
- **Username:** @xqus

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **if** (×2)
- **respondToWebhook** (×3)
- **set** (×2)
- **webhook** 
- **code** 
- **stickyNote** (×6)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
