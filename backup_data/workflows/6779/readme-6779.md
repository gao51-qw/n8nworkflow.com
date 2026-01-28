# Convert unstructured contact data to JSON with GPT-4 for system integration

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This **n8n workflow template** helps you automatically convert unstructured contact information—such as customer details copied from emails, web forms, or chat messages—into clean, structured **JSON** using an **AI agent**.

### What It Does:
- Accepts unstructured contact data via a **Webhook** (as `form-data` under the key `prompt`)
- Uses AI to intelligently extract key fields such as:
  - Company Name  
  - First Name  
  - Last Name  
  - Address  
  - City  
  - Country  
  - Phone  
  - Fax  
  - Email
- Parses and formats the extracted data into a valid JSON object
- Prepares the output for seamless integration into systems like:
  - **Dolibarr**  
  - **Other ERP/CRM platforms**  
  - Any service that consumes JSON via API or webhook

### Use Cases:
- Automate manual data entry from emails into your ERP system  
- Clean and normalize contact data from various input sources  
- Reduce human error in your customer onboarding workflows

This template saves you time and ensures consistency across your business systems.  
Simply connect your systems and let the automation handle the rest.


## 📊 Basic Information

- **Workflow ID:** 6779
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 390
- **Downloads:** 39
- **Created:** 2025/8/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6779)

## 👤 Author

- **Name:** Frankie Wong
- **Username:** @frankiewong

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.agent** 
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
