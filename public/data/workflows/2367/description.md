# Replicate Line Items on New Deal in HubSpot Workflow

## Use Case
This workflow solves the problem of manually copying line items from one deal to another in HubSpot, reducing manual work and minimizing errors.

## What this workflow does
- **Triggers** upon receiving a webhook with deal IDs.
- **Retrieves** the IDs of the won and created deals.
- **Fetches** line items associated with the won deal.
- **Extracts** product SKUs from the retrieved line items.
- **Fetches** product details based on SKUs.
- **Creates** new line items for the created deal and associates them.
- **Sends** a Slack notification with success details.

## Step up steps
1. Create a HubSpot Deal Workflow
 1.1 Set up your trigger (ex: when deal stage = Won)
 1.2 Add step : Create Record (deal)
 1.3 Add Step : Send webhook. The webhook should be a Get to your n8n first trigger. Set two query parameter : 
   - `deal_id_won` as the Record ID of the deal triggering the HubSpot Workflow
    - `deal_id_create` as the Record ID of the deal created above. Click Insert Data -&gt; The created object
2. Set up your HubSpot App token in HubSpot -&gt; Settings -&gt; Integration -&gt; Private Apps
3. Set up your HubSpot Token integration using the predefined model.
4. Set up your Slack connection
5. Add an error Workflow to monitor errors