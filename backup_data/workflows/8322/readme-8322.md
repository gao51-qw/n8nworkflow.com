# AI-powered sales assistant with Airtable CRM, Gmail and web research

> ## Overview of the n8n Workflow

This n8n workflow automates sales processes using AI agents integrated with Airtable as a CRM and Gmail for email handling. It consists of two main workflows: one for handling Airtable status changes to send automated emails, and another for processing incoming emails to add new leads to the CRM or respond to existing leads/clients. The agents personalize emails, research leads via web searches, update CRM notes, and include human approval for responses.

---

## Sticky Notes: Setup and Customization Guidance

The workflows include sticky notes with Markdown formatting for key instructions (assume these are added to the cloned workflows):

1. **Editable Fields (Airtable and Gmail Credentials)**  
   ```
   ## Editable Fields
   - Update Airtable base ID and table ID in trigger/search nodes to match your CRM.
   - Set Gmail credentials for triggers and email nodes.
   ```

2. **Editable Fields (API Keys and Models)**  
   ```
   ## Editable Fields
   - Replace Tavily API key in HTTP request nodes with your own (sign up at tavily.com).
   - Update OpenAI model in chat model nodes if needed (e.g., to gpt-4o).
   ```

3. **Editable Fields (Google Docs Templates)**  
   ```
   ## Editable Fields
   - Replace Google Docs URLs in document nodes with your own templates for each status/email type.
   - Ensure Google Docs credentials have read access.
   ```

---

## How to Set Up the Workflow

To use these workflows in n8n (setup time: ~10-15 minutes):

1. **Import the JSONs**: Paste the provided JSON into n8n to create the two workflows ("Airtable sales agent" and "Email sales Agent").

2. **Configure Credentials**:  
   - **Airtable**: Add API token credentials for your base.  
   - **Gmail**: Set up OAuth2 credentials for your email account.  
   - **OpenAI**: Add API key for chat models.  
   - **Google Docs**: Set up OAuth2 credentials with read access to your templates.  

3. **Update Editable Fields**:  
   - In Airtable nodes: Set your base ID and table ID.  
   - In HTTP nodes: Replace Tavily API key.  
   - In Google Docs nodes: Update URLs to your email templates/knowledge base.  
   - No need to rebuild nodes; all are pre-configured.

4. **Activate Workflows**: Enable the triggers and test with sample data.

---

## Potential Customizations

- **Change Status Templates**: Add more switch outputs and Google Docs nodes for additional Airtable statuses.  
- **Adjust AI Prompts**: Modify system messages in AI Agent nodes for different personalization or response styles.  
- **Replace Search API**: Swap Tavily HTTP requests with another search tool if preferred.  
- **Add More Tools**: Extend the AI Agent with additional tools for CRM updates or integrations.

---

## Considerations and Improvements

- **API Limits**: Monitor Tavily and OpenAI usage to avoid rate limits; add waits if needed.  
- **Error Handling**: Add IF nodes for cases like no matching lead or failed searches.  
- **Data Privacy**: Ensure sensitive lead data in Airtable and emails complies with regulations.  
- **Testing**: Use test emails and Airtable records to verify before going live.

---

## Conclusion

These n8n workflows create an efficient AI-powered sales system, automating lead addition, CRM updates, and email communications with minimal setup. They integrate seamlessly with Airtable and Gmail, allowing focus on high-value tasks. Customize as needed via the editable fields outlined.



## 📊 Basic Information

- **Workflow ID:** 8322
- **Complexity:** advanced
- **Node Count:** 40
- **Views:** 78
- **Downloads:** 7
- **Created:** 2025/9/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8322)

## 👤 Author

- **Name:** LeeWei
- **Username:** @leeweihernandez07

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **airtableTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×4)
- **switch** (×3)
- **googleDocs** (×6)
- **gmailTool** 
- **gmailTrigger** 
- **markdown** 
- **httpRequest** (×3)
- **airtable** (×2)
- **airtableTool** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **gmail** (×2)
- **googleDocsTool** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 40 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
