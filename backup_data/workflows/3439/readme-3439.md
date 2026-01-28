# Validate Seatable webhooks with HMAC SHA256 authentication

> ## 📌 Validate Seatable Webhooks with HMAC SHA256 Authentication

This mini workflow is designed to **securely validate incoming Seatable webhooks** using HMAC SHA256 signature verification.

### 🔐 What it does:
- Listens for incoming Seatable webhook requests.
- Calculates a SHA256 HMAC hash of the raw request body using your shared secret.
- Compares the computed hash with the `x-seatable-signature` header (after removing the `sha256=` prefix).
- If the hashes match: responds with **200 OK** and forwards the request to subsequent nodes.
- If the hashes don’t match: responds with **403 Forbidden**.

### ⚠️ Important Notes:
This workflow is provided as a **template** and is not intended to work standalone. **Please duplicate it** and integrate it with your custom logic at the "Add nodes for processing" node.

Configuration steps:
- Set your **secret key** in the “Calculate sha256” crypto node (replace the placeholder).
- Adjust the webhook path to suit your environment (or set it to "manual" for testing).
- Connect your actual logic after the verification step.


## 📊 Basic Information

- **Workflow ID:** 3439
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 688
- **Downloads:** 68
- **Created:** 2025/4/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3439)

## 👤 Author

- **Name:** Vitali
- **Username:** @vquie

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **respondToWebhook** (×2)
- **crypto** 
- **webhook** 
- **noOp** 
- **if** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
