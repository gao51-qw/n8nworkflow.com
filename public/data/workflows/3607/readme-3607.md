# Find high-intent sales leads by scraping Glassdoor with Bright Data & GPT

> ## 🔍 Scrape Glassdoor with Bright Data

**Designed for sales teams, recruiters, and marketers** aiming to automate job discovery and prospecting.

This workflow scrapes **Glassdoor** job listings using **Bright Data** and automatically generates targeted pitches using **AI**, streamlining lead identification and outreach.

---

### 🧩 How It Works

This automation leverages **n8n**, **Bright Data**, **Google Sheets**, and **OpenAI**:

#### 1. Trigger
- Starts with a custom **form input** (Location, Keyword, Country).

#### 2. Bright Data Job Scrape
- Triggers a Bright Data **dataset snapshot** via HTTP Request.
- Polls snapshot progress using a **Wait node**, ensuring data readiness.
- Retrieves full job listings dataset once ready.

#### 3. Google Sheets Integration
- Writes detailed job data (company, role, location, overview, metrics) into a Google Sheet.
- Uses a **pre-built template** for organized data storage.

#### 4. Automated Pitch Generation (AI)
- Splits listings into actionable parts: company name, title, and description.
- Sends data to **OpenAI (via LangChain)** to generate relevant pitches or icebreakers.
- Saves generated content back into the same sheet for easy access.

---

### ✅ Requirements

Ensure you have the following:

#### Google Sheets
- Google account  
- [Template Sheet](https://docs.google.com/spreadsheets/d/1ZYRk83hNIQCyQNaKpchdnbTiapVxE4aG6ZFIQlwEoWM/edit?usp=sharing) with columns for job details and AI-generated pitches

#### Bright Data
- Active account with **Dataset API access**  
- API key and dataset ID

#### OpenAI
- Valid **OpenAI API key** for GPT models

#### n8n Environment
- Nodes: `HTTP Request`, `Wait`, `If`, `Google Sheets`, `Split Out`, `LangChain (OpenAI)`
- Credentials:
  - Google Sheets OAuth2
  - Bright Data API credentials
  - OpenAI API key

---

### ⚙️ Setup Instructions

**Step 1: Prepare Google Sheets**  
- Copy the provided [Google Sheets template](#)  
- Do not change headers

**Step 2: Import & Configure Workflow in n8n**  
- Import the workflow JSON file  
- Set Google Sheets node:
  - Link to your copied sheet  
  - Confirm correct tab name  

**Step 3: Configure Bright Data**  
- Replace `&lt;YOUR_BRIGHT_DATA_API_KEY&gt;` with your real key  
- Set your dataset ID in all HTTP Request nodes

**Step 4: Configure OpenAI (LangChain)**  
- Connect OpenAI API key to the LangChain node  
- Customize prompt to match tone and outreach style

**Step 5: Testing & Scheduling**  
- Test via manual form trigger  
- Schedule runs or leave form enabled for on-demand use

---

### 🧠 Tips & Best Practices

- Use **specific keywords** and locations for better results  
- Adjust polling intervals based on dataset size  
- Refine AI prompts regularly to improve pitch quality  
- Clean unused columns from your sheet to boost performance

---

### 💬 Support & Feedback

For help or customization:

📧 Email: [Yaron@nofluff.online](mailto:Yaron@nofluff.online)  
📺 YouTube: [@YaronBeen](https://www.youtube.com/@YaronBeen)  
🔗 LinkedIn: [linkedin.com/in/yaronbeen](https://linkedin.com/in/yaronbeen)  

📚 **Bright Data Docs**: [docs.brightdata.com/introduction](https://docs.brightdata.com/introduction)


## 📊 Basic Information

- **Workflow ID:** 3607
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 2169
- **Downloads:** 216
- **Created:** 2025/4/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3607)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×5)
- **httpRequest** (×3)
- **formTrigger** 
- **wait** 
- **if** 
- **googleSheets** (×2)
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
