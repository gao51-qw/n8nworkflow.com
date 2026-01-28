*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

***Automated Data-Driven UX Persona Creation – Try It Out!***

## About
You can create personas based on your website, region, and industry.
Unlike traditional persona creation, this process uses reliable data sources and can estimate market size for each persona.

UX personas have a wide range of applications: use them to better define your target users during product development, align your team around user goals during workshops, or inspire new features and ideas by deeply understanding user needs and behaviors.

## How It Works
- The flow is triggered via a web form
- Perplexity analyzes the market and creates a data foundation for the personas
- An AI agent transforms the data into detailed persona descriptions and publishes them in a Google Doc
- We use DALL·E 3 to generate an image for each persona, which is saved to your Google Drive

## How To Use
- Import the package into your N8N interface
- Set up the credentials in each node to access the necessary tools
- Wait for the process to run (it takes just a few seconds)
- Check the final output in Google Docs and your Google Drive

## Requirements
- Perplexity for research
- OpenAI for LLM and Image generation
- Google Doc
- Google Drive to upload images

