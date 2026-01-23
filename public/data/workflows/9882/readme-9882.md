# Generate personalized cold email icebreakers from sites with GPT-4 & G-Sheets

> Icebreaker Generator powered with ChatGPT 

This n8n template crawls a company website, distills the content with AI, and produces a short, personalized icebreaker you can drop straight into your cold emails or CRM. Perfect for SDRs, founders, and agencies who want “real research” at scale.

Good to know

Works from a Google Sheet of leads (domain + LinkedIn, etc.).

Handles common scrape failures gracefully and marks the lead’s Status as Error.

Uses ChatGPT to summarize pages and craft one concise, non-generic opener.

Output is written back to the same Google Sheet (IceBreaker, Status).

You’ll need Google credentials (for Sheets) and OpenAI credentials (for GPT).

How it works

Step 1 — Discover internal pages

Reads a lead’s website from Google Sheets.

Scrapes the home page and extracts all links.

A Code node cleans the list (removes emails/anchors/social/external domains, normalizes paths, de-duplicates) and returns unique internal URLs.

If the home page is unreachable or no links are found, the lead is marked Error and the workflow moves on.

Step 2 — Convert pages to text

Visits each collected URL and converts the response into HTML/Markdown text for analysis.

You can cap depth/amount with the Limit node.

Step 3 — Summarize & generate the icebreaker

A GPT node produces a two-paragraph abstract for each page (JSON output).

An Aggregate node merges all abstracts for the company.

Another GPT node turns the merged summary into a personalized, multi-line icebreaker (spartan tone, non-obvious details).

The result is written back to Google Sheets (IceBreaker = ..., Status = Done).

The workflow loops to the next lead.

How to use

Prepare your sheet

Include at least: organization_website_url, linkedin_url, and any other lead fields you track.

Keep an empty IceBreaker and Status column for the workflow to fill.

Connect credentials

Google Sheets: use the Google account that owns the sheet and link it in the nodes.

OpenAI: add your API key to the GPT nodes (“Summarize Website Page”, “Generate Multiline Icebreaker”).

Run the workflow

Start with the Manual Trigger (or replace with a schedule/webhook).

Adjust Limit if you want fewer/more pages per company.

Watch Status (Done/Error) and IceBreaker populate in your sheet.

Requirements

n8n instance

Google Sheets account & access to the leads sheet

OpenAI API key (for summarization + icebreaker generation)

Customizing this workflow

Tone & format: tweak the prompts (both GPT nodes) to match your brand voice and structure.

Depth: change the Limit node to scan more/less pages; add simple rules to prioritize certain paths (e.g., /about, /blog/*).

Fields: write additional outputs (e.g., Company Summary, Key Products, Recent News) back to new sheet columns.

Lead selection: filter rows by Status = "" (or custom flags) to only process untouched leads.

Error handling: expand the Error branch to retry with www./HTTP→HTTPS or to log diagnostics in a separate tab.

Tips

Keep icebreakers short, specific, and free of clichés—small, non-obvious details from the site convert best.

Start with a small batch to validate quality, then scale up.

Consider adding a rate limit if target sites throttle requests.

In short: Sheet → crawl internal pages → AI abstracts → single tailored icebreaker → write back to the sheet, then repeat for the next lead.

This automation can work great with our automation for automated cold emailing.

## 📊 Basic Information

- **Workflow ID:** 9882
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 183
- **Downloads:** 18
- **Created:** 2025/10/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9882)

## 👤 Author

- **Name:** Mirai
- **Username:** @mirai

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **html** 
- **splitOut** 
- **httpRequest** (×2)
- **markdown** 
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **limit** 
- **aggregate** 
- **googleSheets** (×3)
- **set** 
- **code** 
- **if** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
