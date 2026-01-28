# Ai data extraction with dynamic prompts and Airtable

> This n8n template introduces the **Dynamic Prompts** Ai workflow pattern which are incredible for certain types of data extraction tasks where attributes are unknown or need to remain flexible.

The general idea behind this pattern is that the prompts for requested attributes to be extracted live outside the template and so can be changed at any time - without needing to edit the template. This seriously cuts down on maintainance requirements and is reusable for any number of tables at little cost.

**Check out the video demo I did for n8n Studio here**: [https://www.youtube.com/watch?v=_fNAD1u8BZw](https://www.youtube.com/watch?v=_fNAD1u8BZw)

**Check out the example Airtable here:** [https://airtable.com/appAyH3GCBJ56cfXl/shrXzR1Tj99kuQbyL](https://airtable.com/appAyH3GCBJ56cfXl/shrXzR1Tj99kuQbyL)

**Looking for the Baserow Version?** [https://n8n.io/workflows/2780-ai-data-extraction-with-dynamic-prompts-and-baserow/](https://n8n.io/workflows/2780-ai-data-extraction-with-dynamic-prompts-and-baserow/)

## How it works
* Given we have an "input" field for context and a number of fields for the data we want to extract, this template will run in the background to react to any changes to either the "input" or fields and automatically update the rows accordingly.
* The key is that Airtable fields have a special property called the "field description". In this pattern, we use this property to allow the user to store a simple prompt describing the data that should exist in the column.
* Our n8n template reads these column descriptions aka "prompts" to use as instructions to perform tasks on the "input".
* In this template, the "input" is a PDF of a resume/CV and the columns are attributes a HR person would want to extract from it - such as full name, address, last position, years of experience etc.

## How to use
* First publish this template and ensure it's accessible via webhook URL.
* You then have to run the "create airtable webhooks" mini-flow to configure your Airtable to send change events to the n8n template. This mini-flow exists in the template but you'll have to update the IDs.

Check the template for more instructions.

## Requirements
* Airtable for Tables/Database
* OpenAI for LLM and extraction. Feel free to choose another LLM if preferred.

## Customising this workflow
* If you're not using files, you can replace the "input" field with anything you like. For example, the "input" could be single line text.


## 📊 Basic Information

- **Workflow ID:** 2771
- **Complexity:** advanced
- **Node Count:** 51
- **Views:** 5367
- **Downloads:** 536
- **Created:** 2025/1/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2771)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **switch** 
- **code** (×3)
- **httpRequest** (×5)
- **extractFromFile** (×2)
- **set** (×5)
- **splitInBatches** (×2)
- **noOp** (×4)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **filter** (×2)
- **stickyNote** (×15)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **airtable** (×6)
- **webhook** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 51 nodes with 36 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
