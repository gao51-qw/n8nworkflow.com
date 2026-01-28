# Automate real estate marketing with Llama AI, VAPI calls & Gmail campaigns

> This automated n8n workflow streamlines real estate marketing by combining voice campaigns and email outreach with AI-powered lead generation. The system monitors real estate offers, generates personalized promotional content using AI, creates targeted email campaigns, and manages lead follow-up through automated voice calls and CRM integration.

## **Good to Know**

* Integrates voice campaign automation with email marketing for multi-channel outreach
* Uses Llama 3.2 AI model for generating personalized promotional content
* Automatically syncs lead data with CRM systems for comprehensive tracking
* Includes delay mechanisms to ensure proper data synchronization
* Supports both email and voice-based lead nurturing strategies

## **How It Works**

* **Watch Real Estate Offer** - Monitors incoming real estate listings and opportunities to trigger marketing campaigns
* **Get Client Contact List** - Fetches targeted client information and contact details from CRM or database systems
* **Generate Promo Content with Llama** - Uses AI to create personalized marketing content based on property details and client preferences
* **Trigger Voice Campaign via VAPI** - Initiates automated voice calls to prospects using personalized messaging
* **Create Personalized Email Template** - Generates custom HTML email templates with property information and promotional content
* **Email Promo to Clients (Gmail)** - Sends targeted email campaigns to segmented client lists through Gmail integration
* **Delay to Sync Data** - Ensures proper data synchronization between systems before processing leads
* **Receive Lead Data from VAPI** - Captures lead information and responses from voice campaign interactions
* **Save Lead to CRM Sheet** - Logs all lead data and campaign results to spreadsheet for tracking and analysis
* **Send Acknowledgment to VAPI** - Confirms successful lead processing and maintains system synchronization

## **How to Use**

* Import workflow into n8n
* Configure VAPI credentials for voice campaign automation
* Set up Gmail API for email marketing integration
* Connect CRM or Google Sheets for lead management
* Configure Llama 3.2 AI model access
* Test with sample real estate data
* Monitor campaign performance and lead conversion rates

## **Requirements**

* VAPI account for voice campaigns
* Gmail API credentials
* Llama 3.2 AI model access
* Google Sheets or CRM integration
* Real estate data source

## **Customizing This Workflow**

* Adjust AI prompts for different property types or market segments
* Modify email templates for various campaign styles
* Configure voice campaign scripts based on target audience
* Set up custom lead scoring and qualification criteria
* Integrate additional CRM systems or marketing platforms

## 📊 Basic Information

- **Workflow ID:** 6630
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 1469
- **Downloads:** 146
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6630)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **googleSheetsTrigger** 
- **googleSheets** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wait** (×2)
- **code** 
- **gmail** 
- **webhook** 
- **respondToWebhook** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
