## How it works:

Using a Crew of AI agents (Senior Researcher, Visionary, and Senior Editor), this crew will automatically determine the right questions to ask to produce a detailed fundamental stock analysis.

This application has two components: a front-end and a Stock Q&A engine.  

The front end is the team of agents automatically figuring out the questions to ask, and the back-end part is the ability to answer those questions with the SEC 10K data.

This template implements the Stock Q&A engine.

For the front-end of the application, you can choose one of two options:
- using CrewAI with the Replit environment (code approach)
- fully visual approach with n8n template (AI-powered automated stock analysis)

![stockaiexplainerdiagram.png](fileId:783)

## Setup steps:
1. Use first workflow in template to upsert a company annual report PDF (such as from SEC 10K filling) 
2. Get URL for Webhook in second workflow template

**CrewAI front-end:** [Youtube overview video](https://www.youtube.com/watch?v=pMvizUx5n1g)
-  Fork this AI Agent environment [Crew Agent Environment](https://replit.com/@DerekCheung9/AI-Automation-For-Finance)
- Set the webhook URL into N8N_WEBHOOK_URL variable
- Set OpenAI_API_KEY variable