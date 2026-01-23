# Sync Zendesk tickets with subsequent comments to GitHub issues

> This workflow creates a GitHub issue when a new ticket is created in Zendesk. Subsequent comments on the ticket in Zendesk are added as comments to the issue in GitHub.

## Prerequisites

- Zendesk account and [Zendesk credentials](https://docs.n8n.io/integrations/builtin/credentials/zendesk/).
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/).
- [GitHub repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github) to create issues in.

## How it works

1. The workflow listens for new tickets in Zendesk.
2. When a new ticket is created, the workflow creates a new issue in GitHub.
3. The GitHub issue number is then saved in one of the ticket's fields (in [setup](notion://www.notion.so/n8n/a1b8c2bc7d2b4aa3b90d50fa80b766d1?v=a3106a73c9fc41b88630cc9f091cf063&p=3c09e8cb58ea46658e9306950e9c01cf&pm=s#setup) we call this "GitHub Issue Number").
4. The next time a comment is added to the ticket, the workflow retrieves the GitHub issue number from the ticket's field and adds the comment to the issue in GitHub.

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

You will also need to set up a field in Zendesk to store the GitHub issue number. To do so, follow the steps below:

1. In Zendesk, navigate to Admin Center &gt; Objects and rules &gt; Tickets &gt; Fields &gt; Add field.
2. Use the number field option and give the field a name such as “GitHub Issue Number”.
3. Save the field.
4. In n8n, open the `Update ticket` node and select the field you created in Zendesk.

## 📊 Basic Information

- **Workflow ID:** 1832
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1037
- **Downloads:** 103
- **Created:** 2022/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1832)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **zendesk** (×2)
- **if** 
- **function** 
- **github** (×2)
- **webhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
