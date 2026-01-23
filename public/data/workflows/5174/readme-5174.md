# 🗲 Creating a Secure Webhook - MUST HAVE

> ## How it works

This workflow demonstrates a fundamental pattern for securing a webhook by requiring an API key. It acts as a gatekeeper, checking for a valid key in the request header before allowing the request to proceed.

1.  **Incoming Request:** The `Secured Webhook` node receives an incoming `POST` request. It expects an API key to be sent in the `x-api-key` header.
2.  **API Key Verification:**
    *   The `Check API Key` node takes the key from the incoming request's header.
    *   It then makes an internal HTTP request to a *second* webhook (`Get API Key`) which acts as a mock database.
    *   This second webhook retrieves a list of registered API keys (from the `Registered API Keys` node) and filters it to find a match for the key that was provided.
3.  **Conditional Response:**
    *   **If a match is found**, the `API Key Identified` node routes the execution to the "success" path, returning a `200 OK` response with the identified user's ID.
    *   **If no match is found**, it routes to the "unauthorized" path, returning a `401 Unauthorized` error.

This pattern separates the public-facing endpoint from the data source, which is a good security practice.

## Set up steps

**Setup time: ~2 minutes**

This workflow is designed to be a self-contained example.

1.  **Set up Credentials:** This workflow uses "Header Auth" for its internal communication. Go to **Credentials** and create a new **Header Auth** credential. You can use any name and value (e.g., Name: `X-N8N-Auth`, Value: `my-secret-password`). Select this credential in all four webhook/HTTP Request nodes.
2.  **Add Your API Keys:** Open the **`Registered API Keys`** node. This is your mock database. Edit the array to include the `user_id` and `api_key` pairs you want to authorize.
3.  **Activate the workflow.**
4.  **Test it:** Use the **`Test Secure Webhook`** node to send a request.
    *   Try it with a valid key from your list to see the success response.
    *   Change the `x-api-key` header to an invalid key to see the `401 Unauthorized` error.

**For Production:** Replace the mock database part of this workflow (the `Get API Key` webhook and `Registered API Keys` node) with a real database node like Supabase, Postgres, or Baserow to look up keys.

## 📊 Basic Information

- **Workflow ID:** 5174
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 5291
- **Downloads:** 529
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5174)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **set** 
- **if** 
- **stickyNote** (×6)
- **respondToWebhook** (×2)
- **webhook** (×2)
- **httpRequest** (×2)
- **filter** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
