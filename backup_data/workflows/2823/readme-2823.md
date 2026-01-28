# Social media analysis and automated email generation

> ## Social Media Analysis and Automated Email Generation

&gt; by Thomas Vie [Thomas@pollup.net](mailto:thomas\@pollup.net)

### **Who is this for?**
This template is ideal for marketers, lead generation specialists, and business professionals seeking to analyze social media profiles of potential leads and automate personalized email outreach efficiently.


### **What problem is this workflow solving?**
Manually analyzing social media profiles and crafting personalized emails can be time-consuming and prone to errors. This workflow streamlines the process by integrating social media APIs with AI to generate tailored communication, saving time and increasing outreach effectiveness.

### **What this workflow does:**
1. **Google Sheets Integration:** Start with a Google Sheet containing lead information such as LinkedIn URL, Twitter handle, name, and email.
2. **Social Media Data Extraction:** Automatically fetch profile and activity data from Twitter and LinkedIn using RapidAPI integrations.
3. **AI-Powered Content Generation:** Use OpenAI's Chat Model to analyze the extracted data and generate personalized email subject lines and cover letters.
4. **Automated Email Dispatch:** Send the generated email directly to the lead, with a copy sent to yourself for tracking purposes.
5. **Progress Tracking:** Update the Google Sheet to indicate completed actions.

#### **Setup:**
1. **Google Sheets:**
   - Create a sheet with the columns: LinkedIn URL, name, Twitter handle, email, and a "done" column for tracking.
   - Populate the sheet with your leads.

2. **RapidAPI Accounts:**
   - Sign up for RapidAPI and subscribe to the Twitter and LinkedIn API plans.
   - Configure API authentication keys in the workflow.

3. **AI Configuration:**
   - Connect OpenAI Chat Model with your API key for text generation.

4. **Email Integration:**
   - Add your email credentials or service (SMTP or third-party service like Gmail) for sending automated emails.

#### **How to customize this workflow to your needs:**
- **Modify the AI Prompt:** Adapt the prompt in the AI node to better align with your tone, style, or specific messaging framework.
- **Expand Data Fields:** Add additional data fields in Google Sheets if you require further personalization.
- **API Limits:** Adjust API configurations to fit your usage limits or upgrade to higher tiers for increased data scraping capabilities.
- **Personalize Email Templates:** Tweak email formats to suit different audiences or use cases.
- **Extend Functionality:** Integrate additional social media platforms or CRM tools as needed.

By implementing this workflow, you’ll save time on repetitive tasks and create more effective lead generation strategies.

## 📊 Basic Information

- **Workflow ID:** 2823
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 29014
- **Downloads:** 2901
- **Created:** 2025/1/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2823)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×3)
- **code** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **emailSend** 
- **stickyNote** (×6)
- **googleSheetsTrigger** 
- **googleSheets** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
