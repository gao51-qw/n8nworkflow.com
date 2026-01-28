# Generate personalized sales emails with MadKudu research & OpenAI for Outreach.io sequences

> # AI-Powered Email Generation with MadKudu sent via Outreach.io
This workflow researches prospects using MadKudu MCP, generates personalized emails with OpenAI, and syncs them to Outreach with automatic sequence enrollment.
Its for SDRs and sales teams who want to scale personalized outreach by automating research and email generation while maintaining quality.

## ✨ Who it's for
- Sales Development Representatives (SDRs) doing cold outreach
- Business Development teams needing personalized emails at scale
- RevOps teams wanting to automate prospect research workflows
- Sales teams using Outreach for email sequences

## 🔧 How it works
**1. Input Email & Research:**
Enter prospect email via chat trigger.
Extract email and generate comprehensive account brief using MadKudu MCP account-brief-instructions.

**2. Deep Research & Email Generation:**
AI Agent performs 6 research steps using MadKudu MCP tools:
- Account details (hiring, partnerships, tech stack, sales motion, risk)
- Top users in the account (for name-dropping opportunities)
- Contact details (role, persona, engagement)
- Contact web search (personal interests, activities)
- Contact picture web search (LinkedIn profile insights)
- Company value prop research

AI generates 5 different email angles and selects the best one based on relevance.

**3. Outreach Integration:**
Checks if prospect exists in Outreach by email.
If exists: Updates custom field (custom49) with generated email.
If new: Creates new prospect with email in custom field.
Enrolls prospect in specified email sequence (ID 781) using mailbox (ID 51).
Waits 30 seconds and verifies successful enrollment.

## 📋 How to set up
**Set your OpenAI credentials**
Required for AI research and email generation.

**Create a n8n Variable to store your MadKudu API key named madkudu_api_key**
Used for the MadKudu MCP tool to access account research capabilities.

**Create a n8n Variable to store your company domain named my_company_domain**
Used for context in email generation and value prop research.

**Create an Oauth2 API credential to connect your Outreach account**
Used to create/update prospects and enroll in sequences.

**Configure Outreach settings**
Update Outreach Mailbox ID (currently set to 51) in the "Configure Outreach Settings" node.
Update Outreach Sequence ID (currently set to 781) in the same node.
Adjust custom field name if using different field than custom49.

## 🔑 How to connect Outreach
1. In n8n, add a new Oauth2 API credential and copy the callback URL
2. Now go to Outreach developer portal
Click "Add" to create a new app
3. In Feature selection add Outreach API (OAuth)
4. In API Access (Oauth) set the redirect URI to the n8n callback
5. Select the following scopes accounts.read, accounts.write, prospects.read, prospects.write, sequences.read
6. Save in Outreach
7.Now enter the Outreach Application ID into n8n Client Id and the Outreach Application Secret into n8n Client secret
8. Save in n8n and connect via Oauth your Outreach Account

## ✅ Requirements
- MadKudu account with access to API Key
- Outreach Admin permissions to create an app
- OpenAI API Key

## 🛠 How to customize the workflow
**Change the research steps**
Modify the AI Agent prompt to adjust the 6 research steps or add additional MadKudu MCP tools.

**Update Outreach configuration**
Change Mailbox ID (51) and Sequence ID (781) in the "Configure Outreach Settings" node.
Update custom field mapping if using different field than custom49.

**Modify email generation**
Adjust the prompt guidelines, tone, or angle priorities in the "AI Email Generator" node.

**Change the trigger**
Swap the chat trigger for a Schedule, Webhook, or integrate with your CRM to automate prospect input.

## 📊 Basic Information

- **Workflow ID:** 7149
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 325
- **Downloads:** 32
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7149)

## 👤 Author

- **Name:** Margo Rey
- **Username:** @margorey

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **if** (×2)
- **httpRequest** (×6)
- **@n8n/n8n-nodes-langchain.mcpClientTool** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **set** (×3)
- **wait** 
- **noOp** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
