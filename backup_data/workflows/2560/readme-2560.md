# Send daily translated Calvin and Hobbes comics to Discord

> ### How it works
- Automates the retrieval of Calvin and Hobbes daily comics.
- Extracts the comic image URL from the website.
- Translates comic dialogues to English and Korean.
- Posts the comic and translations to Discord daily.

### Set up steps
- Estimated setup time: ~10-15 minutes.
- Use a **Schedule Trigger** to automate the workflow at 9 AM daily.
- Add nodes for parameter setup, HTTP request, data extraction, and integration with Discord.
- Add detailed notes to each node in the workflow for easy understanding.

## 📊 Basic Information

- **Workflow ID:** 2560
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1683
- **Downloads:** 168
- **Created:** 2024/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2560)

## 👤 Author

- **Name:** Nathan Lee
- **Username:** @datapopcorn

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **discord** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
