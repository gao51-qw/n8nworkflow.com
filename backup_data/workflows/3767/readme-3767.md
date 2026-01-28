# Update Hubspot engagement by parsing inbox mail with AI

> ## **Who is this for?**  
This workflow is designed for Customer Success Managers (CSM), sales, support, or marketing teams using **HubSpot CRM** who want to automate customer engagement tracking when new emails arrive. It’s ideal for businesses looking to streamline CRM updates without manual data entry.  

## **Problem Solved / Use Case**  
Manually logging email interactions in HubSpot is time-consuming. This workflow **automatically** parses incoming emails, checks if the sender exists in HubSpot, and either:  
- Creates a new contact + logs the email as an engagement (if the sender is new).  
- Logs the email as an engagement for an existing contact.  

## **What This Workflow Does**  
1. **Triggers** when a new email arrives in a connected IMAP inbox.  
2. **Parses the email** using AI (OpenAI) to extract structured data.  
3. **Searches HubSpot** for the sender’s email address.  
4. **Updates HubSpot**:  
   - Creates a contact (if missing) and logs the email as an engagement.  
   - Or logs the engagement for an existing contact.  

## **Setup**  
1. **Configure Email Account**: Replace the default IMAP node with your email provider
2. **HubSpot Credentials**: Add your HubSpot API key in the HubSpot nodes.  
3. **OpenAI Integration**: Ensure your OpenAI API key is set for email parsing.  
## **Customization Tips**  
- **Improve AI Prompt**: Modify the OpenAI prompt to extract specific email data (e.g., customer intent).  
- **Add Filters**: Exclude auto-replies or spam by adding a filter node.  
- **Extend Functionality**: Use the parsed data to trigger follow-up tasks (e.g., Slack alerts, tickets).  

**Need Help?** Contact [thomas@pollup.net](mailto:thomas@pollup.net) for workflow modifications or help.

**Discover my other workflows [here](https://n8n.io/creators/zeerobug/)**

## 📊 Basic Information

- **Workflow ID:** 3767
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 1201
- **Downloads:** 120
- **Created:** 2025/4/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3767)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- CRM
- AI Summarization

## 🔗 Nodes Used

- **hubspot** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **emailReadImap** 
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
