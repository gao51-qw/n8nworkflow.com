# Send bulk WhatsApp messages from Google Sheets using WasenderAPI

> # WhatsApp Bulk Message Broadcast From Google Sheet (Unofficial API)

## Who’s it for

This workflow is designed for marketers, small business owners, freelancers, and support teams who want to automate WhatsApp messaging using a Google Sheet without paying for the WhatsApp Business API. Ideal for those who need a budget-friendly and scalable bulk messaging solution using their personal or business WhatsApp number.

## How it works / What it does

This workflow reads a Google Sheet for rows where the `Status` column is set to `pending`, sends a message via the connected WhatsApp number using the WasenderAPI, and updates the message status to `sent`. It repeats this process every 10 seconds while maintaining a safe API rate limit.

## How to set up

1. **Duplicate the Sample Sheet**: Use this format [Sample Sheet](https://docs.google.com/spreadsheets/d/1Ui4TzzI-Gq-bsEsrZELwW1Kyddw0IU9L1wxlHikktqw/edit?usp=sharing).
2. **Fill contacts**: Add WhatsApp numbers, names, and messages. Set the `Status` column to `pending`.
3. **Connect Google Sheets** in the n8n node.
4. **Subscribe to WasenderAPI** and get your API key.
5. **Paste API Key** into the HTTP node (if using unofficial API).
6. **Activate your workflow** in n8n.

## Requirements

- Google Sheets API credentials
- A configured Google Sheet
- WhatsApp (Personal or Business)
- WasenderAPI.com subscription (approx. $6/month)
- n8n setup with credentials for Google Sheets

## How to customize the workflow

- **Add delay**: Insert a Wait node if you want to add custom time gaps between messages.
- **Change message format**: Modify the HTTP/Send Template node to send different message types (text, media, etc.).
- **Personalize content**: Use dynamic data from sheet columns (e.g., name, image URL).
- **Add error handling**: Insert a Set or IF node after the WhatsApp send node to capture and log failed deliveries.

## Workflow Highlights

- Triggers every 5 Minutes
- Reads pending messages from Google Sheets
- Sends WhatsApp messages using WasenderAPI or WhatsApp Cloud API
- Updates each row’s `Status` to `sent`

## Support & Community

Need help setting up or customizing the workflow? Reach out here:

- WhatsApp: [Chat with Support](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Server](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Community](https://www.facebook.com/groups/spagreenbd)  
- Website: [SpaGreen Creative](https://spagreen.net)  
- Envato: [SpaGreen Portfolio](https://codecanyon.net/user/spagreen/portfolio)



## 📊 Basic Information

- **Workflow ID:** 6175
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 717
- **Downloads:** 71
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6175)

## 👤 Author

- **Name:** SpaGreen Creative
- **Username:** @spagreen

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **googleSheets** (×2)
- **splitInBatches** 
- **wait** 
- **limit** 
- **scheduleTrigger** 
- **stickyNote** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
