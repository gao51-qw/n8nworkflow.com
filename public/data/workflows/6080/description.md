## What Problem Does This Solve?
This workflow automates the end-to-end process of capturing company information from Google Drive, storing it semantically in Pinecone, and interacting with users via an intelligent AI chatbot. It eliminates the need for manual customer service, lead tracking, and company information retrieval—offering a fully automated, intelligent engagement system.

#### Perfect for teams that need to:
* Maintain accurate, AI-readable company knowledge bases

* Answer customer inquiries 24/7 using AI

* Automatically collect and log lead information

* Embed a chatbot into their website to assist potential customers

---

#### Target Audience:
Sales teams, business owners, marketing departments, customer support reps, startup founders, or anyone looking to automate AI-powered lead generation and customer engagement.

---

### What Does It Do?
 #### Part One – Knowledge Ingestion
* **Monitors** a Google Drive folder for new .txt or document uploads.

* **Downloads** the document and splits the content into manageable chunks using a recursive character splitter.

* **Generates** embeddings via OpenAI.

* **Stores** the embeddings in a Pinecone vector database under the Q&A namespace.

* **Purpose:** This knowledge base is later used to answer business-related questions through AI.

#### Part Two – AI Chatbot Engagement
* **Listens** for incoming chat messages using n8n’s `chatTrigger` node.

* **Activates an AI agent** (powered by GPT-4o) to respond to inquiries regarding business hours, services, products, or general company info.

* **Retrieves knowledge** using a vector search tool connected to Pinecone (newCompany_q).

* **Captures leads:** If a user shows interest, the AI collects and stores:

  * Name

  * Email

  * Phone number

  * Specific interest 

  into a connected Google Sheet automatically.

---

### Key Features
🔄 Google Drive integration for real-time file processing

* 🧠 OpenAI embedding + Pinecone vector store for semantic memory

* 🤖 LangChain agent with tool-based reasoning

* 🗃️ Google Sheets integration for dynamic lead storage

* 💬 GPT-4o model for accurate, human-like conversation

* ⚙️ Modular design to expand into CRM, Notion, or email workflows

* 🌐 Website-ready chatbot endpoint

---

### 🧰 Setup Instructions
**Prerequisites:**
* n8n instance (cloud or self-hosted)

* Google Drive account (for uploading company data)

* Pinecone account (for vector storage)

* OpenAI API key

* Google Sheets access with OAuth2 credentials

---

### 📦 Installation Steps
**1. Import the Workflow**
Upload the JSON files into your n8n instance.

**2. Configure Credentials**
In n8n &gt; Credentials, connect:

   * Google Drive

* OpenAI

* Pinecone

* Google Sheets

**3. Set Pinecone Index & Namespace
Example:**

* Index: `comanyName`

* Namespace: `Q&A`

**4. Test the Flow**

* Upload a sample `.txt` or `pdf` file to the monitored Drive folder.

* Send a message to the chatbot (e.g., "What are your opening hours?").

* Check the Google Sheet for collected user info.

---

###  How It Works (Behind the Scenes)
**Part 1 – Data Preparation:**
1. Company files are uploaded to Google Drive.

2. File is detected, downloaded, and chunked.

3. Embeddings are created using OpenAI.

4. Data is stored in Pinecone for semantic retrieval.

**Part 2 – Chat Interaction:**
1. A chat message triggers the workflow via webhook.

2. The AI agent interprets the intent and accesses company data via `newCompany_q`.

3. If lead data is gathered, it is appended to a Google Sheet using the AI-parsed values.

---

### Need help customizing?
[Contact me](mailto:belgacem.dhiflaoui@gmail.com)  for consulting and support or add me on [Linkedin.](https://www.linkedin.com/in/belgacem-dhiflaoui/)