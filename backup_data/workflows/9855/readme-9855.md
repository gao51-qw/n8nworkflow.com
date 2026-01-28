# Extract LinkedIn profile data & generate follow-ups with Vision AI and Google Forms

> **The problem**
Ever attend a networking event and find yourself taking screenshots of people's LinkedIn? 
Sounds counter-intuitive because you *are* connecting on LinkedIn. But you find it hard to keep track of everyone you've met. 
You also don't want to miss diligently updating your CRM with details and insights. 

**The solution **
There's no need for yet another app. Continue taking screenshots. Just share them on a 2-field only Google Form: screenshot + your quick notes about the person. 

Create a shortcut to the Google Form link on your phone homescreen. Voila! You have app-like access without the need for an app. 

Once you submit with just these 2 pieces of info, AI parses the image AND crafts a follow-up message. Within minutes!

Just open your spreadsheet to have all that information consolidated - automatically - for your review. 

Promote yourself from do-er to manager. 

**Who should use it?**

Anyone really. If you find yourself meeting people but want to be more meticulous or efficient staying on top, use this. 

**How to set it up**

- Time: ~10 minutes end-to-end.
- Import the provided workflow JSON in n8n.
- Connect credentials: Google Drive (read), Google Sheets (write), OpenAI.
- Configure key information: Google Sheets and relevant columns
- Configure Open AI models based on your cost/ efficiency requirements
- Confirm column headers in your Sheet match the variables (or update the variables).
- Test with one screenshot. 

**Pro-tip: Add that Google Form link as a shortcut on your phone's home screen. Get app-like convenience without downloading yet another app.**

## 📊 Basic Information

- **Workflow ID:** 9855
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 64
- **Downloads:** 6
- **Created:** 2025/10/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9855)

## 👤 Author

- **Name:** swathi
- **Username:** @swathi

## 🏷️ Categories

- Lead Nurturing
- AI Summarization

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **code** 
- **googleSheets** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
