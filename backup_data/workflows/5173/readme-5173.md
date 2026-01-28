# 🗲 Serve custom websites (HTML webpages) with webhooks

> ## How it works

This workflow demonstrates how to use n8n to serve a complete, styled HTML webpage. It acts as a mini web server, responding to browser requests with your custom HTML content.

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node configured to listen for `GET` requests on a specific path. When you visit this node's Production URL in a browser, it triggers the workflow.
2.  **Respond with HTML:** The `Respond to Webhook` node is configured to send a response back to the browser.
    *   **Content-Type Header:** It sets a crucial response header, `Content-Type: text/html`, which tells the browser to render the response as a webpage, not just plain text.
    *   **HTML Body:** The entire HTML, CSS, and JavaScript for the webpage is pasted directly into the `Body` field of this node.

When activated, visiting the webhook URL will instantly display the custom webpage.

## Set up steps

**Setup time: &lt; 1 minute**

This workflow is ready to use out-of-the-box.

1.  **Activate the workflow.**
2.  Open the **`Your WebPage`** (Webhook) node and copy its **Production URL**.
3.  Paste the URL into your browser to see the live tutorial page.
4.  To use your own HTML, simply open the **`Site`** (Respond to Webhook) node and replace the content in the `Body` field with your own code.

## 📊 Basic Information

- **Workflow ID:** 5173
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2344
- **Downloads:** 234
- **Created:** 2025/6/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5173)

## 👤 Author

- **Name:** Lucas Peyrin
- **Username:** @lucaspeyrin

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **respondToWebhook** 
- **webhook** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
