# Create an automated customer support assistant with GPT-4o and GoHighLevel SMS

> ## 📌 AI Agent via GoHighLevel SMS with Website-Based Knowledgebase

This n8n workflow enables an AI agent to interact with users through GoHighLevel SMS, leveraging a knowledgebase dynamically built by scraping the company's website.

---

### ❓ Problem It Solves

Traditional customer support systems often require manual data entry and lack real-time updates from the company's website. This workflow automates the process by:

- Scraping the company's website at set intervals to update the knowledgebase.
- Integrating with GoHighLevel SMS to provide users with timely and accurate information.
- Utilizing AI to interpret user queries and fetch relevant information from the updated knowledgebase.

---

### 🧰 Pre-requisites

Before deploying this workflow, ensure you have:

- An active **n8n** instance (self-hosted or cloud).
- A valid **OpenAI API key** (or any compatible AI model).
- A **Bright Data** account with Web Unlocker setup.
- A **GoHighLevel SMS LeadConnector account**.
- A **GoHighLevel Marketplace App** configured with the necessary scopes.
- Installed **n8n-nodes-brightdata** community node for Bright Data integration (if self-hosted).

---

### ⚙️ Setup Instructions

#### 1. Install the Bright Data Community Node in n8n

For self-hosted n8n instances:

- Navigate to **Settings → Community Nodes**.
- Click on **Install**.
- In the search bar, enter `n8n-nodes-brightdata`.
- Select the node from the list and click **Install**.

Docs: [https://docs.n8n.io/integrations/community-nodes/installation/gui-install](https://docs.n8n.io/integrations/community-nodes/installation/gui-install)

#### 2. Configure Bright Data Credentials

- Obtain your API key from Bright Data.
- In n8n, go to **Credentials → New**, select **HTTP Request**.
  - Set authentication to **Header Auth**.
  - In **Name**, enter `Authorization`.
  - In **Value**, enter `Bearer &lt;your_api_key_from_Bright_Data&gt;`.
  - Save the credentials.

#### 3. Configure OpenAI Credentials

- Add your OpenAI API key to the relevant nodes.
- If you want to use a different model, replace all OpenAI nodes accordingly.


#### 4. Set Up GoHighLevel Integration

##### a. Create a GoHighLevel Marketplace App

- Go to [https://marketplace.gohighlevel.com](https://marketplace.gohighlevel.com)
- Click **My Apps → Create App**
- Set **Distribution Type** to **Sub-Account**
- Add the following scopes:
```
locations.readonly contacts.readonly contacts.write opportunities.readonly opportunities.write users.readonly conversations/message.readonly conversations/message.write
```
- Add your n8n OAuth Redirect URL as a redirect URI in the app settings.
- Save and copy the **Client ID** and **Client Secret**.

##### b. Configure GoHighLevel Credentials in n8n

- Go to **Credentials → New**
- Choose **OAuth2 API**
- Input:
  - **Client ID**
  - **Client Secret**
  - **Authorization URL**: `https://auth.gohighlevel.com/oauth/authorize`
  - **Access Token URL**: `https://auth.gohighlevel.com/oauth/token`
  - **Scopes**:  
    ```
    locations.readonly contacts.readonly contacts.write opportunities.readonly opportunities.write users.readonly conversations/message.readonly conversations/message.write
    ```
- Save and authenticate to complete setup.

Docs: [https://docs.n8n.io/integrations/builtin/credentials/highlevel](https://docs.n8n.io/integrations/builtin/credentials/highlevel)

---

### 🔄 Workflow Functionality (Summary)

- **Scheduled Scraping**: Scrapes website at user-defined intervals.
- **Edit Fields** node: User defines the homepage or site to scrape.
- **Bright Data Node** (self-hosted) OR **HTTP Node** (cloud users) used to perform scraping.
- **Knowledgebase Update**: The scraped content is stored or indexed.
- **GoHighLevel SMS**: Incoming user queries are received through SMS.
- **AI Processing**: AI matches queries to relevant content.
- **Response Delivery**: AI-generated answers are sent back via SMS.

---

### 🧩 Use Cases

- **Customer Support Automation**: Provide instant, accurate responses.
- **Lead Qualification**: Automatically answer potential customer inquiries.
- **Internal Knowledge Distribution**: Keep staff updated via SMS based on website info.

---

### 🛠️ Customization

- **Scraping URLs**: Adjust targets in the Edit Fields node.
- **Model Swap**: Replace OpenAI nodes to use a different LLM.
- **Format Response**: Customize output to match your tone or brand.
- **Other Channels**: Expand to include chat apps or email responses.
- **Vector Databases**: It is advisable to store the data into a third-party vector database services like Pinecone, Supabase, etc.
- **Chat Memory Node**: This workflow is using Redis as a chat memory but you can use N8N built-in chat memory.

---

### ✅ Summary

This n8n workflow combines Bright Data’s scraping tools and GoHighLevel’s SMS interface with AI query handling to deliver a real-time, conversational support experience. Ideal for businesses that want to turn their website into a live knowledge source via SMS, this agent keeps itself updated, smart, and customer-ready.

## 📊 Basic Information

- **Workflow ID:** 4223
- **Complexity:** advanced
- **Node Count:** 43
- **Views:** 3425
- **Downloads:** 342
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4223)

## 👤 Author

- **Name:** Cyril Nicko Gaspar
- **Username:** @cngaspar

## 🏷️ Categories

- Support Chatbot
- AI RAG

## 🔗 Nodes Used

- **html** (×2)
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×3)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **splitOut** (×2)
- **filter** 
- **@n8n/n8n-nodes-langchain.memoryRedisChat** 
- **scheduleTrigger** 
- **n8n-nodes-brightdata.brightData** (×2)
- **set** (×4)
- **httpRequest** (×4)
- **webhook** 
- **wait** 
- **highLevel** 
- **if** 
- **stickyNote** (×9)
- **xml** 
- **merge** 
- **removeDuplicates** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 43 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
