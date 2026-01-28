# Recover Abandoned Shopify Carts with Email Follow-ups, HubSpot CRM & Google Sheets Tracking

> ## How it works
The workflow triggers on a new checkout event from Shopify and extracts all relevant cart data. It filters carts based on value and age to isolate qualified abandoned checkouts. For each qualified cart, it sends a follow-up email, updates or creates the corresponding HubSpot contact, and generates a CRM note linked to that contact. Finally, it logs the processed cart into Google Sheets for tracking and review.

## Step-by-step

- **Trigger on new Shopify checkout**  
  - **Shopify Trigger** – Starts the workflow when a new checkout is created.

- **Normalize and structure cart data**  
  - **Parse Cart Data** – Extracts email, customer name, items, cart totals, timestamps, and hours since creation.

- **Filter carts that meet follow-up criteria**  
  - **Filter Qualified Carts** – Passes only carts older than 12 hours and valued above 50.

- **Send follow-up message**  
  - **Send a message** – Delivers a reminder email to the customer about the pending checkout.

- **Create or update CRM contact**  
  - **Create or update a contact** – Ensures the shopper exists as a HubSpot contact.

- **Prepare CRM note details**  
  - **Generates Note Data** – Builds a structured note containing timing, cart details, and follow-up context.

- **Create the HubSpot note**  
  - **Create HubSpot Note** – Submits the prepared note to HubSpot’s CRM.

- **Associate note with the contact**  
  - **Associate Note with Contact in HubSpot** – Links the generated note to the correct HubSpot contact.

- **Record activity in tracker sheet**  
  - **Log to Google Sheets** – Appends processed cart fields including items, totals, timestamps, and customer info.

## Why use this?
- Identifies high-value or long-abandoned carts automatically and follows up without manual effort.  
- Keeps CRM records updated and adds contextual notes sales teams can act on.  
- Maintains a structured audit trail of every abandoned cart interaction.  
- Improves recovery chances by combining email outreach with CRM enrichment and logging.  
- Enables analysis of abandoned checkout patterns directly from Google Sheets.


## 📊 Basic Information

- **Workflow ID:** 10818
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 95
- **Downloads:** 9
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10818)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **code** 
- **if** 
- **googleSheets** 
- **shopifyTrigger** 
- **gmail** 
- **hubspot** 
- **set** 
- **httpRequest** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
