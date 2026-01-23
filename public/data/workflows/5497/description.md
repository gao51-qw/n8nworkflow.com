*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

**How It works:**

When the user clicks "Execute Workflow" they are prompted for a URL, from there the Puppeteer node extracts JavaScript links from the provided URL. 

The links are then filtered down to ones that are relevant to the original URL that was quieried. 

From there an AI Agent searches the provided JavaScript links for API Keys, email addresses, and PII leaks.

Finally a report is generated and sent via gmail to a desired destination. The report contains discovered links as well as any sensitive information that may have been found.

**Why It's Useful:**

This is a great tool for Cybersecurity testing. 
- For Developers, make sure your scripts are clean and you didn't leave anything behind.
- For Ethical Hackers, this is a great tool for Bug Bounties by discovering sensitive information hidden in JavaScript.