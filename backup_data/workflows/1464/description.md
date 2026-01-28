This workflow searches for mentions of a company's name on Twitter and shares the tweets that mention it in a Slack channel.

## Prerequisites

- A Slack account and [credentials](https://docs.n8n.io/integrations/credentials/slack/)
- A Twitter account and [credentials](https://docs.n8n.io/integrations/credentials/twitter/)

## Nodes

- [Cron node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.cron/) executes the workflow every 10 minutes. Note that if you change the Mode from "Every X" you will need to manually update the Date & Time node to subtract the interval you are using.
- [Set nodes](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.set/) set the required values (name of the Slack channel, name of the Twitter account to search for, the tweet text and URL).
- [Date & Time node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.datetime/) subtracts 10 minutes from the workflow execution time.
- [Twitter node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.twitter/) gets the latest 50 tweets that mention the specified account.
- [IF node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.if/) filters tweets posted in the past 10 minutes.
- [Slack node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.slack/) posts tweets in a Slack channel.