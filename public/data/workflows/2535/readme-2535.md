# Get long lived Facebook user or page access token

> **Facebook access tokens expire quickly, requiring regular updates for continued API access.** This workflow simplifies the process of exchanging short-lived tokens for long-lived ones, saving time and reducing manual effort.

**What this workflow does**
- Exchanges a short-lived Facebook User Access Token for a long-lived token using the Facebook Graph API.
- Optionally retrieves a long-lived Page Access Token associated with the user.
- Outputs both the user and page tokens for further use in automation or integrations.

**Setup**
**Prerequisites:**

- A valid Facebook App ID and App Secret.
- A short-lived User Access Token from the Facebook platform.
- (Optional) The App-Scoped User ID for fetching associated page tokens.

**Workflow Configuration:**
- Replace placeholder values in the "Set Parameter" node with your Facebook credentials and token.
- Run the workflow manually to generate long-lived tokens.

**Documentation Reference:**

Follow the official Facebook guide for more details: [https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/](https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/)

## 📊 Basic Information

- **Workflow ID:** 2535
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 3322
- **Downloads:** 332
- **Created:** 2024/11/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2535)

## 👤 Author

- **Name:** Sira Ekabut
- **Username:** @siraekabut

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×2)
- **stickyNote** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
