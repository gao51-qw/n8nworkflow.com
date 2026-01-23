This workflow automatically creates an event in PostHog when a request is made to a webhook URL.

## Prerequisites

- A PostHog account and [credentials](https://docs.n8n.io/integrations/credentials/posthog/)

## Nodes

- [Webhook node](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/) triggers the workflow when a URL is accessed.
- [PostHog node](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.posthog/) creates a new event in PostHog.