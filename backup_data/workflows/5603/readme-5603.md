# Automated stale user re-engagement system with Supabase, Google Sheets & Gmail

> Built this workflow because most of our users signed up, then vanished after ~30 days.
It runs daily, grabs those stale users from Supabase, updates a Google Sheet for tracking, and automatically sends each one a personalized HTML email through Gmail to bring them back.

All fully automated — so once it’s set up, it quietly does its job in the background.
Currently, it only supports Supabase, but the concept should work with any DB or API if you swap out the request node.

## 📊 Basic Information

- **Workflow ID:** 5603
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 170
- **Downloads:** 17
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5603)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** 
- **set** 
- **manualTrigger** 
- **removeDuplicates** 
- **googleSheets** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleVertex** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
