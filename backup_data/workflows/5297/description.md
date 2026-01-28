&gt; ⚠️ **Disclaimer**: This workflow uses [Scrapeless](https://scrapeless.com?utm_source=n8n&utm_campaign=b2b-leads) and Claude AI via *community nodes*, which require **n8n self-hosted** to work properly.

---

## 🔁 How It Works

This intelligent B2B lead generation workflow combines search automation, website crawling, AI analysis, and multi-channel output:

1. It starts by using **Scrapeless’s Deep Serp API** to find company websites from targeted Google Search queries.  
2. Each result is then **individually crawled** using Scrapeless's **Crawler** module, retrieving key business information from pages like `/about`, `/contact`, `/services`.  
3. The raw web content is processed via a **Code node** to clean, extract, and prepare structured data.  
4. The cleaned data is passed to **Claude Sonnet (Anthropic)** which analyzes and qualifies the lead based on content richness, contact data, and relevance.  
5. A **filter step** ensures only high-quality leads (e.g. lead score ≥ 6) are kept.  
6. Sent via **Discord webhook** for real-time notification (can be replaced with Slack, email, or CRM tools).

&gt; 📌 The result is a fully automated system that finds, qualifies, and organizes B2B leads with high efficiency and minimal manual input.

---

## ✅ Pre-Conditions

Before using this workflow, make sure you have:

- An **n8n self-hosted** instance  
- A **Scrapeless** account and API key ([get it here](https://app.scrapeless.com/passport/login))  
- An **Anthropic Claude API key**  
- A configured **Discord webhook URL** (or alternative notification service)

## ⚙️ Workflow Overview

Manual Trigger → Scrapeless Google Search → Item Lists → Scrapeless Crawler
→ Code (Data Cleaning) → Claude Sonnet → Code (Response Parser)
→ Filter → Discord Notification


## 🔨 Step-by-Step Breakdown

1. **Manual Trigger** – For testing purposes (can be replaced with Cron or Webhook)  
2. **Scrapeless Google Search** – Queries target B2B topics via Scrapeless’s Deep SERP API  
3. **Item Lists** – Splits search results into individual items  
4. **Scrapeless Crawler** – Visits each company domain and scrapes structured content  
5. **Code Node (Data Cleaner)** – Extracts and formats content for LLM input  
6. **Claude Sonnet (via HTTP Request)** – Evaluates lead quality, relevance, and contact info  
7. **Code Node (Parser)** – Parses Claude’s JSON response  
8. **IF Filter** – Filters leads based on score threshold  
9. **Discord Webhook** – Sends formatted message with company info

---

## 🧩 Customization Guidance

You can easily adjust the workflow to match your needs:

- **Lead Criteria**: Modify the Claude prompt and scoring logic in the Code node  
- **Output Channels**: Replace the Discord webhook with Slack, Email, Airtable, or any CRM node  
- **Search Topics**: Change your query in the Scrapeless SERP node to find leads in different niches or countries  
- **Scoring Threshold**: Adjust the filter logic (`lead_score &gt;= 6`) to match your quality tolerance

---

## 🧪 How to Use

1. Insert your Scrapeless and Claude API credentials in the designated nodes  
2. Replace or configure the Discord webhook (or alternative outputs)  
3. Run the workflow manually (or schedule it)  
4. View qualified leads directly in your chosen notification channel

---

## 📦 Output Example

Each qualified lead includes:

- 🏢 Company Name  
- 🌐 Website  
- ✉️ Email(s)  
- 📞 Phone(s)  
- 📍 Location  
- 📈 Lead Score  
- 📝 Summary of relevant content

---

## 👥 Ideal Users

This workflow is perfect for:

- **AI SaaS companies** targeting mid-market & enterprise leads  
- **Marketing agencies** looking for B2B-qualified leads  
- **Automation consultants** building scraping solutions  
- **No-code developers** working with n8n, Make, Pipedream  
- **Sales teams** needing enriched prospecting data