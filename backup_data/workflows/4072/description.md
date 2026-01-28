
## 🔍 Email Lookup with Google Search from Postgres Database

This N8N workflow is designed to **enrich seller data** stored in a Postgres database by performing automated **Google search lookups**. It uses **Bright Data's Web Unlocker** to bypass search result restrictions and the **HTML Extract node** to parse and extract relevant information from webpages.

The main purpose of this workflow is to discover **missing contact details, company domains, and secondary emails** for businesses or sellers based on existing database entries.

---

### 🎯 Problem This Workflow Solves

Manually searching for missing seller or business details—like secondary emails, websites, or domain names—can be time-consuming and inefficient, especially for large datasets.
This workflow automates the search and data enrichment process, significantly reducing manual effort while improving the quality and completeness of your seller database.

---

### ✅ Prerequisites

Before using this template, make sure the following requirements are met:

* ✔️ A Bright Data account with access to the **Web Unlocker** or **Amazon Scraper API**
* ✔️ A valid Bright Data API key
* ✔️ An active **PostgreSQL** database with seller data
* ✔️ **N8N self-hosted** instance (recommended for using community nodes like `n8n-nodes-brightdata`)
* ✔️ Installed `n8n-nodes-brightdata` package (custom node for Bright Data integration)

---

## ⚙️ Setup Instructions

### Step 1: Prepare Your Postgres Table

Create a table in Postgres with the following structure (you can adjust field names if needed):

```sql
CREATE TABLE sellers (
  seller_id SERIAL PRIMARY KEY,
  seller_name TEXT,
  primary_email TEXT,
  company_info TEXT,
  trade_name TEXT,
  business_address TEXT,
  coc_number TEXT,
  vat_number TEXT,
  commercial_register TEXT,
  secondary_email TEXT,
  domain TEXT,
  seller_slug TEXT,
  source TEXT
);
```

### Step 2: Setup Web Unlocker on Bright Data

1. Go to your Bright Data dashboard.
2. Navigate to **Proxies & Scraping → Web Unlocker**.
3. Create a new zone, selecting **Web Unlocker API** under **Scraping Solutions**.
4. Whitelist your server IP if required.

### Step 3: Generate API Key

1. In the Bright Data dashboard, go to the **API** section.
2. Generate a new API key.
3. In N8N, create **HTTP Request Credentials** using Bearer Authentication with the API key.

### Step 4: Install the Bright Data Node in N8N

1. In your N8N self-hosted instance, go to **Settings → Community Nodes**.
2. Search and install `n8n-nodes-brightdata`.

---

## 🔄 Workflow Functionality

* 🔁 **Trigger**: Can be set to run on a schedule (e.g., daily) or manually.
* 📥 **Read**: Fetches seller records from the Postgres table.
* 🌐 **Search**: Uses Bright Data to perform a Google search based on `seller_name`, `company_info`, or `trade_name`.
* 🧾 **Extract**: Parses the HTML content using the **HTML Extract node** to identify potential websites and email addresses.
* 📝 **Update**: Writes enriched data (like `domain` or `secondary_email`) back to the Postgres table.

---

## 💡 Use Cases

* Lead enrichment for e-commerce sellers
* Domain and contact info discovery for B2B databases
* Email and web domain verification for CRM systems
* Market research automation

---

## 🛠️ Customization Tips

* You can enhance the parsing logic in the **HTML Extract** node to look for phone numbers, LinkedIn profiles, or social media links.
* Modify the search query logic to include additional parameters like `location` or `industry` for more refined results.
* Integrate additional APIs (e.g., Hunter.io, Clearbit) for email validation or social profile enrichment.
* Add filtering to skip entries that already have `domain` or `secondary_email`.