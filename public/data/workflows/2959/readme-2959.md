# Facebook token retrieval & management

> ## Pre-Conditions
1. A Facebook Developer account with an active app.
2. Basic understanding of n8n workflows.
3. Access to a database (optional, for storing tokens).

## Setup
1. **Webhook Activation**:
   - Configure the Webhook to receive user requests and process input data.
   - Ensure the Webhook URL is correctly set in your Facebook App settings.

2. **Short-Lived Token Retrieval**:
   - Use **Facebook OAuth** to fetch a short-lived token from the authorization code.

3. **Long-Lived Token Conversion**:
   - Convert the short-lived token into a long-lived token (valid for ~60 days).

4. **Page Token Retrieval**:
   - Follow the provided instructions to retrieve **Page Tokens** for posting on managed Facebook Pages.

5. **Customizable Scopes**:
   - Edit the `correctScopes` array to include or exclude permissions as needed.

6. **Optional Database Storage**:
   - Extend the workflow to save tokens to a database instead of displaying them on-screen.

7. **Step-by-Step Instructions**:
   - Detailed guidance is provided via sticky notes for activating the app, configuring Webhook, and editing parameters like `fb_redirect_uri`, `app_id`, and `app_secret`.

## Who the Template is For
- **Developers**: Integrating Facebook APIs into their applications.
- **Social Media Managers**: Automating posting and engagement on Facebook Pages.
- **n8n Users**: Looking for a ready-to-use workflow for Facebook Token management.

## Primary Use
- Automates Facebook Token retrieval and management.
- Supports posting to Facebook Pages via **Page Tokens**.
- Easily customizable and extendable for specific requirements.

## 📊 Basic Information

- **Workflow ID:** 2959
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1489
- **Downloads:** 148
- **Created:** 2025/2/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2959)

## 👤 Author

- **Name:** L Hùng
- **Username:** @meow-cde

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **webhook** 
- **if** 
- **httpRequest** (×2)
- **stickyNote** (×4)
- **code** 
- **respondToWebhook** (×2)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
