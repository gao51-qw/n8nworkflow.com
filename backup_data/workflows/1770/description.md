This workflow adds new HubSpot contacts to the Mailchimp email list. 

## Prerequisites
- HubSpot account and [HubSpot credentials](https://docs.n8n.io/integrations/builtin/credentials/hubspot/)
- Mailchimp account and [Mailchimp credentials](https://docs.n8n.io/integrations/builtin/credentials/mailchimp/)

## How it works
1. Cron node triggers this workflow every day at 7:00.
2. HubSpot node searches for the new contacts created.
3. Mailchimp node creates a new contact in a certain audience and add a 'subscribed' status.
