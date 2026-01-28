# Create content from form inputs and save it to Google Drive using AI

> # AI Content Generator Workflow

## **Introduction**
This workflow automates the process of creating high-quality articles using AI, organizing them in Google Drive, and tracking their progress in Google Sheets. It's perfect for marketers, bloggers, and businesses looking to streamline content creation. With minimal setup, you can have a fully operational system to generate, save, and manage your articles in one cohesive workflow.

---

## **How It Works**
1. **Collect Inputs**: Users fill out a form with details like article title, keywords, and instructions.
2. **Generate Content**: AI creates an outline and writes the article based on user inputs.
3. **Organize Files**: Saves the outline and final article in Google Drive for easy access.
4. **Track Progress**: Updates Google Sheets with links to the generated content for tracking.

---

## **Set Up Steps**
- **Time Required**: Approximately 15–20 minutes to connect all integrations and test the workflow.
- **Steps**:
  1. **Connect Google Drive and Google Sheets**: Authorize access to store files and update the spreadsheet.
  2. **Set Up OpenAI Integration**: Add your OpenAI API key for generating the outline and article content.
  3. **Customize the Form**: Modify the form fields to match the details you want to collect for each article.
  4. **Test the Workflow**: Run the workflow with sample inputs to ensure everything works smoothly.

---

This workflow not only simplifies the process of article creation but also sets a foundation for expanding into additional automations, like posting to social media platforms.


## 📊 Basic Information

- **Workflow ID:** 2525
- **Complexity:** advanced
- **Node Count:** 39
- **Views:** 11161
- **Downloads:** 1116
- **Created:** 2024/11/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2525)

## 👤 Author

- **Name:** Francis Njenga
- **Username:** @gatura

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **googleDrive** (×3)
- **set** (×8)
- **merge** (×2)
- **sort** 
- **aggregate** 
- **formTrigger** 
- **googleSheets** (×2)
- **convertToFile** (×2)
- **splitOut** 
- **if** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **stickyNote** (×12)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 39 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
