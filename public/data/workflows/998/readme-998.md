# Translate cocktail instructions using DeepL

> This workflow allows you to translate cocktail instructions using DeepL.

![workflow-screenshot](fileId:455)

**HTTP Request node:** This node will make a GET request to the API `https://www.thecocktaildb.com/api/json/v1/1/random.php` to fetch a random cocktail. This information gets passed on to the next node in the workflow. Based on your use case, replace the node with the node from where you might receive the data.

**DeepL node:** This node will translate the cocktail instructions that we got from the previous node to French. To translate the instructions in your language, select your language instead.


## 📊 Basic Information

- **Workflow ID:** 998
- **Complexity:** beginner
- **Node Count:** 2
- **Views:** 1380
- **Downloads:** 138
- **Created:** 2021/3/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/998)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** 
- **deepL** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 2 nodes with 1 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
