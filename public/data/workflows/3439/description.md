## 📌 Validate Seatable Webhooks with HMAC SHA256 Authentication

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
