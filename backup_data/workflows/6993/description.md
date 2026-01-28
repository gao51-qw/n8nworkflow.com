### This n8n workflow automates lead extraction from Google Maps, enriches data with AI, and stores results for cold outreach.

It uses the [Bright Data](https://brightdata.com/) community node and Bright Data MCP for scraping and AI message generation.

### **How it works**

1. **Form Submission**
    
    User provides Google Maps starting location, keyword and country.
    
2. **Bright Data Scraping**
    
    [Bright Data](https://brightdata.com/) community node triggers a Maps scraping job, monitors progress, and downloads results.
    
3. **AI Message Generation**
    
    Uses Bright Data MCP with LLMs to create a personalized cold call script and talking points for each lead.
    
4. **Database Storage**
    
    Enriched leads and scripts are upserted to Supabase.
    

### **How to use**

Set up all the credentials, create your Postgres table and submit the form. The rest happens automatically.

### **Requirements**

- LLM account (OpenAI, Gemini…) for API usage.
- [Bright Data](https://brightdata.com/) account for API and MCP usage.
- Supabase account (or other Postgres database) to store information.