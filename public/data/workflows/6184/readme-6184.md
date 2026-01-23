# Validate API requests with Bearer Token Authentication and Airtable

> ## Bearer Token Validation


This n8n template helps you manage and validate tokens easily using:

- n8n as your backend workflow engine  
- Airtable as your lightweight token store

---

### 🚀 What It Does

- Stores user tokens securely in Airtable with expiry or usage metadata.
- Validates incoming tokens in your workflows (e.g., webhook APIs).
- Rejects invalid or expired tokens automatically for security.
- Can be extended to generate, rotate, or revoke tokens for user management.

---

### How It Works

1. **Webhook node** receives requests with a `Bearer` header.
2. **Airtable Query** looks up the provided token.
3. **Validation Logic (Code node)**:
   - Checks if the token exists.
   - Verifies expiry or usage limits if configured.
4. Returns **success** if valid, or **error** if error with describing the issue.

---

- Note: This is the simplest way to do auth, just for simplification

---

### Why Use This

- No need for a full backend to manage secure token validation.
- Clean, modular, and ready for your SaaS workflows.

---

Enjoy building secure automations with **n8n + Airtable**! 🚀

### Built by:
[Nazmy](https://n8n.io/creators/islamnazmi/)

## 📊 Basic Information

- **Workflow ID:** 6184
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 174
- **Downloads:** 17
- **Created:** 2025/7/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6184)

## 👤 Author

- **Name:** Nazmy
- **Username:** @islamnazmi

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **if** (×5)
- **respondToWebhook** (×7)
- **webhook** (×2)
- **airtable** (×2)
- **code** (×2)
- **manualTrigger** 
- **httpRequest** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
