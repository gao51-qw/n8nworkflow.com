# Sync Zendesk tickets to Slack thread

> This workflow creates a Slack thread when a new ticket is created in Zendesk. Subsequent comments on the ticket in Zendesk are added as replies to the thread in Slack.

## Prerequisites

- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/).
- Slack account and [Slack credentials](https://docs.n8n.io/integrations/builtin/credentials/slack/).
- Slack channel to create threads in.

## How it works

1. The workflow listens for new tickets in Zendesk.
2. When a new ticket is created, the workflow creates a new thread/message in Slack. The Slack thread ID is then saved in one of the ticket's fields called "Slack thread ID".
3. The next time a comment is added to the ticket, the workflow retrieves the Slack thread ID from the ticket's field and adds the comment to the thread/message in Slack as a reply.

## Setup

This workflow requires that you set up a webhook in Zendesk. To do so, follow the steps below:

1. In the workflow, open the `On new Zendesk ticket` node and copy the webhook URL.
2. In Zendesk, navigate to Admin Center &gt; Apps and integrations &gt; Webhooks &gt; Actions &gt; Create Webhook.
3. Add all the required details which can be retrieved from the `On new Zendesk ticket` node. The webhook URL gets added to the “Endpoint URL” field, and the “Request method” should match what is shown in n8n.
4. Save the webhook.
5. In Zendesk, navigate to Admin Center &gt; Objects and rules &gt; Business rules &gt; Triggers &gt; Add trigger.
6. Give trigger a name such as “New tickets”.
7. Under “Conditions” in “Meet ALL of the following conditions”, add “Status is New”.
8. Under “Actions”, select “Notify active webhook” and select the webhook you created previously.
9. In the JSON body, add the following:
    
    ```
    {
    	"id": "{{ticket.id}}",
    	"comment": "{{ticket.latest_comment_html}}"
    }
    ```
    
10. Save the Zendesk trigger.

You will also need to set up a field in Zendesk to store the Slack thread ID. To do so, follow the steps below:

1. In Zendesk, navigate to Admin Center &gt; Objects and rules &gt; Tickets &gt; Fields &gt; Add field.
2. Use the text field option and give the field a name such as “Slack thread ID”.
3. Save the field.
4. In n8n, open the `Update ticket` node and select the field you created in Zendesk.

## 📊 Basic Information

- **Workflow ID:** 1820
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1742
- **Downloads:** 174
- **Created:** 2022/11/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1820)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **zendesk** (×2)
- **if** 
- **webhook** 
- **slack** (×2)
- **set** 
- **stickyNote** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
