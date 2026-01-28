# TinyURL shortener via webhook

> This n8n template allows you to automatically create shortened URLs using the TinyURL API by simply sending a webhook request. It's a quick and efficient way to integrate URL shortening into your automated workflows, ideal for sharing long links in social media, emails, or other applications.

---

# 🔧 How it works
- Receive Link Webhook: This node acts as the entry point for the workflow. It listens for incoming POST requests and expects a JSON body containing the url to be shortened and your api_key for TinyURL.
- Create TinyURL: This node sends a POST request to the TinyURL API, passing the long URL and your API key. It can also accept optional parameters like domain, alias, and description to customize the shortened link.
- Respond with Shortened URL: This node sends the response from the TinyURL API (which includes the new shortened URL) back to the service that initiated the webhook.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Content Managers & Marketers: Quickly shorten links for campaigns, social media posts, or tracking.
- Developers: Automate the process of link shortening within applications or scripts.
- Automation Enthusiasts: Integrate a URL shortener into various n8n workflows (e.g., after generating a report, before sending a notification).
- Anyone needing on-demand short links: A flexible solution for ad-hoc link shortening.

---

# 📑 Data Structure
When you trigger the webhook, send a POST request with a JSON body structured as follows:

```json
{
  "api_key": "YOUR_TINYURL_API_KEY",
  "url": "https://www.verylongwebsite.com/path/to/specific/page?param1=value1&param2=value2",
  "domain": "tinyurl.com",      // Optional: defaults to tinyurl.com
  "alias": "myCustomAlias",    // Optional: desired custom alias for the link
  "description": "My project link" // Optional: description for the link
}
```

The workflow will return the JSON response directly from the TinyURL API, which will include the short_url and other details about the newly created link.

---

# ⚙️ Setup Instructions
- Obtain TinyURL API Key: Before importing, make sure you have an API key from TinyURL. You can typically get this by signing up for an account on their website.
- Import Workflow: In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.
- Configure Webhook Path:
  - Double-click the Receive Link Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /shorten-link).
- Activate Workflow: Save and activate the workflow.

---

# 📝 Tips
- Dynamic Inputs: The workflow is set up to dynamically use the url, api_key, alias, and description from the incoming webhook data. This makes it highly flexible.
- Error Handling: You can add an Error Trigger node to catch any issues (e.g., invalid API key, malformed URL) during the TinyURL creation process. Configure it to send notifications or log errors for easy troubleshooting.
- Post-Shortening Actions: After generating the shortened URL, you can insert additional nodes before the Respond with Shortened URL node to perform other actions. For example, you could:
  - Save to a Database: Store the original and shortened URLs in a database like Airtable, Google Sheets, or a PostgreSQL database.
  - Send a Message: Automatically send the shortened URL via Slack, Discord, email, or SMS.
  - Update a Record: Update a CRM record or project management task with the new shortened link.
- Custom Domains: If you have a custom domain configured with your TinyURL account, you can change the domain parameter in the Create TinyURL node to use it.

## 📊 Basic Information

- **Workflow ID:** 4595
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 549
- **Downloads:** 54
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4595)

## 👤 Author

- **Name:** ist00dent
- **Username:** @ist00dent

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **stickyNote** (×2)
- **httpRequest** 
- **webhook** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
