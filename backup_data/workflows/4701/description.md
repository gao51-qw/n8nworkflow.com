# Description
Very straightforward workflow. It checks the Epic Games website if the HTML container with free games has changed. If it did then it will send a notification to Discord with a list of embeds containing those games.

# Requirements
- You will need to install `n8n-nodes-puppeteer` community node

# Setup
There are two nodes that notify Discord. One at the very end and one in the loop in case of error. Configure them with a webhook or a bot, whatever suits you. That's all.
