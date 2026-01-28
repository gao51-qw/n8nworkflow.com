**Description**

This template automates the end-to-end process of extracting professional data from LinkedIn and converting it into a usable format—ideal for recruiters, SDRs, marketers, and growth teams. With a few simple configurations, you’ll be able to trigger the flow, scrape profiles, and use AI to extract name, headline, company, role, industry, and more—without writing a single line of code.

**Key Features**

🔗 Launch PhantomBuster Agent using a profile URL
⏳ Wait 45 seconds for PhantomBuster to complete scraping
📥 Fetch and parse scraped data (download URL to JSON)
🤖 Use GPT-4 (OpenAI/Azure) to extract structured information
📄 Output fields: Name, Headline, Company, Job Title, Industry, Experience, etc.
🧰 Optional: Personalize messages using extracted data
📊 Send structured output to Google Sheets, Airtable, or CRM

**Setup Instructions**

**PhantomBuster Configuration**
- Sign up for PhantomBuster
- Use the LinkedIn Profile Scraper Phantom
- Obtain your API Key and Agent ID
- Provide a valid LinkedIn session cookie (from browser dev tools)

**OpenAI or Azure Setup**
- Add your GPT-4 or GPT-4o API credentials
- Can be from either OpenAI or Azure OpenAI


**Google Sheet (Optional)**
Add a sheet with LinkedIn profile URLs to process in batch mode

**Environment Cleanup**
- This version uses n8n credentials manager
- All hardcoded tokens and API keys are removed for security compliance

**Customization Tips**
- You can adjust the wait duration depending on PhantomBuster execution time
- Replace or extend the AI parsing prompt to include more fields (e.g., education, location, skills)
- Add additional automations: Slack notifications, CRM sync, or enrichment tools like Clearbit or Hunter.io

**Perfect For**

🚀 Growth hackers and SDRs automating lead generation
🧠 Recruiters scraping profiles for outreach
📊 Marketing teams enriching data for campaigns
🛠️ SaaS builders building LinkedIn intelligence tools