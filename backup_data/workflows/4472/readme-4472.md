# AI-powered Loom video Q&A with Gemini-2.5 and Slack notifications

> ## How to use the workflow
This workflow takes a Loom link, extracts the video ID, uses the Loom API to download the video, then sends it to Gemini along with your question. Finally, it sends the output to Slack. 

To use it, you just need to add your own [API key for Gemini](https://aistudio.google.com/app/apikey) and Slack connection. 

Click the link above to get your Gemini API key, then add a generic "Query auth" type credential in n8n. The name will be "key" and the value will be your API key.

One way to customize this workflow would be to make the trigger any received email, extract the Loom link, and run an auto-prompt like "Describe this video in detail". 

## 📊 Basic Information

- **Workflow ID:** 4472
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 892
- **Downloads:** 89
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4472)

## 👤 Author

- **Name:** GiovanniSegar
- **Username:** @giosegar

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **set** (×4)
- **httpRequest** (×6)
- **formTrigger** 
- **if** (×2)
- **merge** (×2)
- **wait** 
- **splitInBatches** 
- **stickyNote** (×5)
- **code** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
