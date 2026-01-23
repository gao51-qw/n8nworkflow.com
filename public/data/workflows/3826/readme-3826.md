# AI chat agent: Dumpling AI + GPT-4o to auto-save local business data to Airtable

> ### Who is this for?
This workflow is for digital marketers, small business owners, lead generation agencies, and VAs who need a scalable way to find and store local business leads using AI. It’s especially useful for teams that want to enrich leads with real-time news insights and save the structured data to Airtable.

---

### What problem is this workflow solving?
Manually researching local businesses and staying up to date with relevant news is time-consuming and inefficient. This automation eliminates that burden by using Dumpling AI chat agents to generate leads and context, GPT-4o to summarize, and Airtable to store everything in one place.

---

### What this workflow does
This AI workflow listens for a manual trigger in n8n and executes the following steps:
1. Extracts local business leads using a **Local Business Agent** from Dumpling AI.
2. Pulls current news related to the business type or location using a **News Agent** from Dumpling AI.
3. Uses GPT-4o to combine both responses into a human-readable summary.
4. Extracts structured lead data like name, category, and city.
5. Saves the summary and lead data into Airtable for easy follow-up.

---

### Setup

#### 1. **Create AI Agents in Dumpling AI**
- Sign in at [Dumpling AI](https://app.dumplingai.com)
- Create two separate agents:
  - **Local Business Agent**: Designed to respond with structured lists of businesses by location and category.
  - **News Agent**: Designed to fetch relevant recent news and summaries about a specific industry or region.
- After setting up each agent, copy the **Agent Key** from Dumpling AI. These keys will be required in the headers of your HTTP Request nodes in n8n.

#### 2. **Manual Trigger**
- This workflow begins with a manual trigger inside n8n, Which is the When chat message is recieved.
- This makes it easy to test and reuse, especially during setup.

#### 3. **Get Local Business Data from Dumpling AI**
- The first HTTP Request node sends a prompt like `List 5 top real estate companies in Atlanta with full address and services`.
- Include your **Local Business Agent Key** in the `x-agent-key` header.
- The response will return a structured list of business leads.

#### 4. **Get News Context from Dumpling AI**
- The second HTTP Request node sends a prompt such as `Give me the latest news related to the real estate market in Atlanta`.
- Use your **News Agent Key** in the header.
- This fetches a brief set of recent news summaries relevant to the businesses being researched.

#### 5. **Use GPT-4o to Merge and Summarize**
- The GPT node combines the list of businesses and news into one coherent summary.
- You can modify the prompt to output in paragraph format, bullet points, or structured notes.

#### 6. **Save Lead to Airtable**
- The Airtable node sends all structured fields into your selected base and table.
- Be sure to connect your Airtable account and confirm the columns match exactly.

---

### How to customize this workflow
- Replace the prompt inside the HTTP node to focus on different types of businesses or cities.
- Expand the GPT output to include additional lead info like websites, phone numbers, or emails if the agent includes them.
- Add a webhook trigger to allow this flow to be run via a chatbot, external app, or button.
- Link to HubSpot or another CRM to sync the leads automatically.
- Duplicate the process to run for multiple industries in parallel.

---

### Final Notes
- You must create and configure your Dumpling AI agents first before running this workflow.
- The Agent Keys from Dumpling AI are required in both HTTP Request nodes.
- This flow is modular and flexible, ready for deeper CRM integrations.
- The manual trigger is great for testing, but you can add a Webhook node to automate it.

This workflow helps you launch an intelligent lead gen process that combines location-targeted business discovery, AI-generated insights, and structured CRM-friendly output, all powered by Dumpling AI and OpenAI.


## 📊 Basic Information

- **Workflow ID:** 3826
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1269
- **Downloads:** 126
- **Created:** 2025/5/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3826)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Lead Generation
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **airtableTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
