# Check if a Twitch stream is live

> ## Introduction:

This workflow template helps you determine if a Twitch user's stream is currently live or offline.

## Setup Instructions:

The Document node holds the sample Twitch username you wish to check, you may adapt it in your workflow by replacing this with a chain that contains the Twitch username you want to check. This value is passed to the GraphQL node query as `$('Document').item.json.twitch` so make sure to change this based on your workflow.

## How it Works:

The important nodes here are the `GrapQL` and `IF` nodes. The GrapQL queries the Twitch API, and then the output returns a document with the `stream` property. The IF node then checks if this property has a value, if `null` means the user is offline, otherwise the user is online or live.

## Common Use Cases:
You can use this with other workflow templates to post live stream alerts to Twitter/X, Bluesky, and Discord via webhooks, etc to notify your community to join youR stream. You may also use an `LLM` node to write a custom alert based on the value of property `title`

## How to adjust this template
If you want to check a list of Twitch channels, you can simply exchange the `Document` set node in the beginning with your list of channels.


For more information on the GraphQL output please see the official Twitch API documentation: [Get Streams](https://dev.twitch.tv/docs/api/reference/#get-streams)

## 📊 Basic Information

- **Workflow ID:** 2684
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 2112
- **Downloads:** 211
- **Created:** 2024/12/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2684)

## 👤 Author

- **Name:** Roger Filomeno
- **Username:** @godie

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** 
- **graphql** 
- **if** 
- **manualTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
