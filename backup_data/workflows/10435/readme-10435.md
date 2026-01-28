# Create long-form documents from simple titles with GPT-5 and Google Docs

> ## How It Works
1. Generate the **document structure** based on the provided **title or short description**.  
2. Use **prompt chaining** to create **detailed content** for each section while maintaining consistent context.  
3. Append the **final content** to a Google Document for easy access and review.

## How to Use
1. Open the submission form.  
2. Enter your **title** and **word count**.  
3. Click **Submit** to generate your Google Document link.  
4. Wait a few minutes — completed document will be ready at that link.

## Requirements
- **OpenAI account**  
- **Google Docs account**

## Customization Options
- Adjust the **document length** by changing the word count input.  
- Modify the **prompt logic** to control writing style or tone.  
- Update the **section structure** to fit different document types (e.g., blog, report, proposal).  
- Replace the **output destination** if you prefer another storage option instead of Google Docs.


## 📊 Basic Information

- **Workflow ID:** 10435
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 206
- **Downloads:** 20
- **Created:** 2025/11/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10435)

## 👤 Author

- **Name:** Nghia Nguyen
- **Username:** @nghiaaidev

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **formTrigger** 
- **form** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
