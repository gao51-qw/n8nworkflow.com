## What it does
Submit a LinkedIn profile URL through a form. The workflow finds their email and company info using Wiza, then researches the prospect and their company with Perplexity AI to uncover recent news, growth signals, and pain points. Your choice of AI model uses that research to write a personalized icebreaker email with a relevant hook. The finished draft shows up in your Gmail inbox, ready to review and send.

## Who's it for
Sales teams, recruiters, and marketers scaling personalized outreach without manual research.


## Requirements
- n8n (self-hosted or cloud)
- Wiza API Key
- OpenAI API Key
- Perplexity API Key
- Gmail OAuth2 credentials

## How to set up

1. Import workflow JSON into n8n
2. Configure Wiza, OpenAI, Perplexity, and Gmail credentials
3. Create Leads and Case Studies data tables in n8n
4. Update business context in the "Your Offer" node
5. Activate workflow and use the form URL

## How to customize

- Modify email templates in the "Ice Breaker Email Generator" prompt
- Update business profile and case studies for relevance
- Adjust AI model settings for tone and creativity

