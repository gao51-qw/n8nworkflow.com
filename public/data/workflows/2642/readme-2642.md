# Analyze tradingview.com charts with Chrome extension, n8n and OpenAI

> This flow is supported by a Chrome plugin created with Cursor AI.

The idea was to create a Chrome plugin and a **backend service** in N8N to do chart analytics with OpenAI. It's a good sample on how to submit a screenshot from the browser to N8N.

**Who is it for?**
N8N developers who want to learn about using a Chrome plugin, an N8N webhook and OpenAI.

**What opportunity does it present?**
This sample opens up a whole range of N8N connected Chrome extensions that can analyze screenshots by using OpenAI.

**What this workflow does?**
The workflow contains:

- a webhook trigger
- an OpenAI node with GPT-4O-MINI and **Analyze Image** selected
- a response node to send back the Text that was created after analysing the screenshot.

![n8n_tradingview.png](fileId:879)
![chrome.png](fileId:878)

All this is needed to talk to the Chrome extension which is created with Cursor AI.

The idea is to visit the tradingview.com crypto charts, click the Chrome plugin and get back analytics about the shown chart in understandable language. This is driven by the N8N flow.

With the new image analytics capabilities of OpenAI this opens up a world of opportunities.

**Requirements/setup**

- OpenAI API key
- Cursor AI installed
- The Chrome extension. [Download](https://things.io/wp-content/uploads/2024/12/chrome_screenshot.zip)
- The N8N JSON code. [Download](https://things.io/wp-content/uploads/2024/12/chrome_extension_backend_with_AI.json)

**How to customize it to your needs?**
Both the Chrome extension and N8N flow can be adapted to use on other websites. You can consider:

- analyzing a financial screen and ask questions about the data shown
- analyzing other charts
- extending the N8N workflow with other AI nodes

With AI and image analytics the sky is the limit and in some cases it saves you from creating complex API integrations.

[Download Chrome extension](https://things.io/wp-content/uploads/2024/12/chrome_screenshot.zip)





## 📊 Basic Information

- **Workflow ID:** 2642
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 41835
- **Downloads:** 4183
- **Created:** 2024/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2642)

## 👤 Author

- **Name:** Hans Blaauw
- **Username:** @thingsio

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **respondToWebhook** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
