# Send Linkedin connection request with Airtop

> # Automating LinkedIn Connection Requests

## Use Case

Automatically sending LinkedIn connection requests to prospects can significantly streamline your outreach process. This automation ensures you only send requests to users you're not already connected with, and can optionally include a personalized message.

## What This Automation Does

This automation sends a LinkedIn connection request using the following input parameters:

- **linked_url**: The LinkedIn profile URL of the person you want to connect with.
- **airtop_profile**: The name of your [Airtop Profile](https://portal.airtop.ai/browser-profiles) authenticated on LinkedIn.
- **message** *(optional)*: The note you want to include with your connection request.

## How It Works

1. Starts an Airtop browser session using your authenticated profile.
2. Opens the target LinkedIn profile in a new browser window.
3. Detects if you're already connected or if a connection request is pending.
4. If the "Connect" button is available:
   - If no message is provided, clicks "Connect" and sends the request without a note.
   - If a message is provided, clicks "Add a note", types the message, and sends the request.
5. Terminates the browser session.

## Setup Requirements

1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.
2. An [Airtop Profile](https://portal.airtop.ai/browser-profiles) logged in to LinkedIn (requires one-time authentication).

## Next Steps

- **Pair with People Enrichment**: Use with the [LinkedIn Profile Finder](https://www.airtop.ai/blog/find-linkedin-profile-from-email) to generate URLs before sending requests.
- **CRM Integration**: Log connection attempts and responses in your CRM.
- **Campaign Sequencing**: Combine with message follow-up automations for a complete outreach flow.

Read more about [automating Linkedin Connection Requests](https://www.airtop.ai/automations/send-linkedin-connection-request-n8n) 

## 📊 Basic Information

- **Workflow ID:** 4253
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 2079
- **Downloads:** 207
- **Created:** 2025/5/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4253)

## 👤 Author

- **Name:** Airtop
- **Username:** @cesar-at-airtop

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **formTrigger** 
- **executeWorkflowTrigger** 
- **switch** (×2)
- **set** 
- **airtop** (×12)
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
