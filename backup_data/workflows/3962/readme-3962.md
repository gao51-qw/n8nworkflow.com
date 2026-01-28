# Automate Cal.com meeting attendee management with Google Sheets, Beehiiv & Telegram

> This n8n workflow template automates the process of managing meeting guests booked through Cal.com. It captures attendee information, logs it in a Google Sheet, and subscribes new guests to your Beehiiv newsletter, while also notifying you in Telegram.

### How it Works
This workflow is designed to streamline your post-booking process. When a new meeting is booked via Cal.com, the workflow automatically triggers. It extracts the attendee details, adds a new row with the guest's information to a designated Google Sheet, and then adds the guest as a subscriber to your Beehiiv newsletter. Finally, it sends a notification to a specified Telegram channel, keeping you informed of new subscribers.

### Features
- **Automated Data Entry:** Automatically log meeting guest details into Google Sheets.
- **Newsletter Growth:** Effortlessly add new meeting guests to your Beehiiv subscriber list.
- **Real-time Notifications:** Get instant alerts in Telegram for new subscribers.
- **Seamless Integration:** Connects Cal.com, Google Sheets, Beehiiv, and Telegram.

### Set Up
To use this workflow, you will need the following:

- **[Cal.com](https://refer.cal.com/1node):** Set up a Cal.com account and configure a webhook to trigger the workflow on new bookings. You will need the webhook URL provided by the first node in this workflow.
- **Google Cloud:** A Google Cloud account with access to Google Sheets. You will need to specify the Sheet and the range where data should be added.
- **[Beehiiv](https://www.beehiiv.com?via=1node-ai):** A Beehiiv account. You will need your Beehiiv API key and the publication ID of your newsletter.
- **Telegram Account:** A Telegram account and a channel where you want to receive notifications. You will need your Telegram Bot Token and the chat ID of the channel.
- **Configure each node** in the workflow with your respective API keys, IDs, and sheet details as required. The "Define your parameters" box in the workflow provides guidance on finding your Telegram chat ID and Beehiiv API key/publication ID.

### Additional Enhancements
This workflow can be extended and customized further:

- **Conditional Logic:** Add filters to only subscribe guests based on certain criteria (e.g., specific meeting types).
- **Data Enrichment:** Integrate with other services to enrich guest data before adding to Google Sheets or Beehiiv.
- **CRM Integration:** Connect to a CRM to create or update contact records for new guests.
- **Custom Notifications:** Customize the content and format of the Telegram notification.

### Need Help?
If you need assistance setting up this workflow, encounter any issues, or would like to explore setting up similar automation workflows tailored to your company's specific needs, please contact us at [1 Node](https://1node.ai).


## 📊 Basic Information

- **Workflow ID:** 3962
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1409
- **Downloads:** 140
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3962)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **splitOut** 
- **googleSheets** 
- **calTrigger** 
- **httpRequest** 
- **set** (×2)
- **telegram** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
