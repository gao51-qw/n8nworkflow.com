# Auto-translate blog articles with Google Translate and Airtable storage

> ## How it works
- Fetches a blog post HTML from your blog URL using an HTTP request node  
- Extracts readable content using Cheerio (code node)  
- Saves the raw blog text to Airtable  
- Translates the content to a language of your choice using Google Translate  
- Updates the same Airtable record with the translated version in a different column  

## Set up steps
- **Estimated setup time:** 15–20 minutes (includes connecting Airtable and Google Translate credentials)  
- You’ll need an Airtable base with `HTML` and `TRANSLATED` fields  
  - Or use this pre-made base: [Airtable Template](https://airtable.com/appP62U5MtSww1eeP/shrXwvTYdN7EXPvsp)  
- Simply add your blog post URL inside the **HTTP Request** node  


## 📊 Basic Information

- **Workflow ID:** 6825
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 469
- **Downloads:** 46
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6825)

## 👤 Author

- **Name:** Abrar Sami
- **Username:** @abrarsami

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **airtable** (×2)
- **code** 
- **googleTranslate** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
