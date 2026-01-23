# Collect LinkedIn profiles with AI processing using SerpAPI, OpenAI, and NocoDB

> ## What problem does this solve? 

It fetches **LinkedIn profiles** for a multitude of purposes based on a keyword and location via Google search and stores them in an Excel file for download and in a [NocoDB](NocoDB.com) database.
It tries to avoid using costly services and should be n8n **beginner friendly**.
It uses the [serpapi.com](SerpAPI.com) to avoid being blocked by Google Search and to process the data in an easier way.


## What does it do?

- Based on criteria input, it searches LinkedIn profiles
- It discards unnecessary data and turns the follower count into a real number
- The output is provided as an Excel table for download and in a NocoDB database

## How does it do it?

- Based on criteria input, it uses [serpAPI.com](serpAPI.com) to conduct Google search of the respective LinkedI profiles
- With [OpenAI.com](OpenAI.com) the name of the respective company is being added
- With OpenAI.com the follower number e.g., 300+ is turned into a real number: 300
- All unnecessary metadata is being discarded
- As an output an Excel file is being created
- The output is stored in a nocodb.com table

## Step-by-step instruction


1. Import the Workflow:
Copy the workflow JSON from the "Template Code" section below.
Import it into n8n via "Import from File" or "Import from URL".

2. Set up a free account at serpapi.com and get API credentials to enable good Google search results

3. Set up an API account at openai.com and get API key

4. Set up a nocodb.com account (or self-host) and get the API credentials

4. Create the credentials for serpapi.com, opemnai.com and nocodb.com in n8n.

5. Set up a table in NocoDB with the fields indicated in the note above the NocoDB node

5. Follow the instructions as detailed in the notes above individual nodes 

6. When the workflow is finished, open the Excel node and click download if you need the Excel file





## 📊 Basic Information

- **Workflow ID:** 3920
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1823
- **Downloads:** 182
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3920)

## 👤 Author

- **Name:** Askan
- **Username:** @askans

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** (×3)
- **stickyNote** (×13)
- **convertToFile** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **nocoDb** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
