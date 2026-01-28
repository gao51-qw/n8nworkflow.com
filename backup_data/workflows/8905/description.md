### UX & SEO Website Analyst (Airtop + OpenAI + Gmail)

This workflow automatically analyzes a website for UX and SEO quality. It uses Airtop for realistic web scraping, OpenAI for structured evaluation of metadata (title, description, and overall SEO signals), and Gmail to send professional reports.  

#### What it does
- Scrapes website content and metadata through an Airtop session.  
- Evaluates SEO and UX factors (strengths, weaknesses, recommendations) with OpenAI.  
- Generates a clear, structured report.  
- Sends the report automatically via Gmail.  

#### Use cases
- Marketing agencies auditing client websites.  
- Freelancers offering SEO/UX review services.  
- Businesses monitoring their own website performance.  

#### Requirements
- **Airtop account** with API access.  
- **OpenAI API key**.  
- **Gmail credentials** connected in n8n.  

---

### How it works
- Start the flow with a target website URL.  
- Airtop opens a session and scrapes metadata naturally.  
- OpenAI analyzes and scores the title, description, and overall quality.  
- Gmail sends a formatted report to your chosen recipient.  

### Set up steps
- Connect Airtop, OpenAI, and Gmail credentials in n8n.  
- Provide the target URL to analyze.  
- Run the workflow and review the email report.  
- Keep detailed instructions inside sticky notes in the workflow.  
