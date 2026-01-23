Disclaimer: This template only works on self-hosted for now, as it uses a community node.

## Use Case
Web scrapers often break due to web page layout changes.
This workflow attempts to mitigate this problem by auto-generating web scraping data extractor code via LLM.

## How It Works
This workflow leverages ScrapeNinja n8n community node to: 
- scrape webpage HTML, 
- feed it into LLM (Google Gemini) and ask to write a JS extractor function code, then it 
- executes the written JS extractor against scraped HTML to extract useful data from webpage (the code is safely executed in a sandbox)

## Installation
To install ScrapeNinja n8n node, in your self-hosted instance, go to Settings -&gt; Community nodes, enter "n8n-nodes-scrapeninja", and install. 

Make sure you are using at least v0.3.0. 

See this in action:
https://www.linkedin.com/feed/update/urn:li:activity:7289659870935490560/

