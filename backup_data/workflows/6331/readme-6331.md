# Track demo bookings with Google Calendar to Meta Conversions API integration

> ## Who is this workflow for?
**If you're using Meta Ads to generate new leads** to your sales pipeline, this workflow is for you! 🙌🏻

## What this workflow does
- Triggers every time you have a new calendar event on a chosen Google Acount
- Filter only events with the same name of your "Schedule a demo" event
- Formats and send event to Meta Conversion API

## What events can I send?
Any event you'd like! It's preconfigured with the "Schedule" event, but you can change to "Purchase", "InitiateCheckout", "Lead" and custom events.


## Setup Guide
- Connect Google OAuth2 to n8n
- Get your PIXEL ID and Access Token from Meta
- Set your configuration node with Pixel ID, Access Token, source_url and event_name


## Requirements
- Meta Access Token + Pixel ID (via Meta Conversion API): [Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started)
- Google Access (via OAuth2): [Documentation](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
 

**This free template was created by [pdf noodle](https://pdfnoodle.com).**

Feel free to [contact us via the founder Linkedin](https://www.linkedin.com/in/marceloamiranda/), if you have any questions! 👋🏻

## 📊 Basic Information

- **Workflow ID:** 6331
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 131
- **Downloads:** 13
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6331)

## 👤 Author

- **Name:** Marcelo Abreu
- **Username:** @mabreum

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **googleCalendarTrigger** 
- **if** 
- **noOp** 
- **httpRequest** 
- **crypto** 
- **set** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
