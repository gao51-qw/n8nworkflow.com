This easy-to-extend workflow automatically serves a static HTML page when a URL is accessed in a browser.

## Prerequisites

- Basic knowledge of HTML

## Nodes

-  [Webhook node](https://docs.n8n.io/nodes/n8n-nodes-base.webhook/) triggers the workflow on an incoming request.
- [Respond to Webhook node](https://docs.n8n.io/nodes/n8n-nodes-base.respondToWebhook/) serves the HTML page in response to the webhook.