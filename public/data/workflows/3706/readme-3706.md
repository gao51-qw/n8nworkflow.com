# Analyze client transcripts & route feedback with GPT-4o Mini, HubSpot, and Gmail

> ## **Who is this for?**  
This workflow is designed for Customer Satisfaction Managers (CSM), sales professionals, and operations managers who need to automate the analysis of client transcripts, save summarized notes to HubSpot, and route relevant feedback to the appropriate departments via email.  

## **What problem is this workflow solving? / Use Case**  
Manually processing client conversations, extracting key insights, and distributing them to the right teams is time-consuming and error-prone. This workflow automates:  
- **Transcript analysis** using AI (OpenAI) to identify relevant content.  
- **HubSpot integration** to log meeting notes against client records.  
- **Email routing** to ensure feedback reaches the correct departments (e.g., support, sales, product, admin).  

## **What this workflow does**  
1. **Input Transcript**: Accepts a client conversation transcript (e.g., from emails, calls, or chats).  
2. **HubSpot Sync**:  
   - Searches for the client’s HubSpot ID using their email.  
   - Uploads a summarized version of the conversation as meeting notes.  
3. **AI-Powered Routing**:  
   - Uses an OpenAI model to analyze the transcript and categorize content by department.  
   - Triggers emails (via Gmail) to route feedback to the relevant teams.  
4. **Form Completion**: Ends the workflow with optional user confirmation.  

## **Setup**  
1. **Prerequisites**:  
   - n8n instance (cloud or self-hosted).  
   - HubSpot API credentials (for contact lookup and notes upload).  
   - OpenAI API key (for transcript analysis).  
   - Gmail account (for sending emails).  
2. **Configuration**:  
   - Replace placeholder nodes (e.g., HubSpot, OpenAI, Gmail) with your authenticated accounts.  
   - Define email templates and recipient addresses for routing.  
   - Adjust the OpenAI prompt to match your categorization criteria (e.g., "support," "billing").  

## **How to customize this workflow to your needs**  
- **Transcript Sources**: Extend the workflow to pull transcripts from other sources (e.g., Zoom, Slack).  
- **Departments**: Modify the routing logic to include additional teams or conditions.  
- **Notifications**: Add Slack/MS Teams alerts for urgent feedback.  
- **Error Handling**: Introduce retries or fallback actions for failed HubSpot/Gmail steps. 

## 📊 Basic Information

- **Workflow ID:** 3706
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 1472
- **Downloads:** 147
- **Created:** 2025/4/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3706)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **hubspot** (×2)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chainSummarization** 
- **formTrigger** 
- **form** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **set** 
- **gmailTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
