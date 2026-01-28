# Automatically sync Beex leads to HubSpot (Create & Update)

> ## Summary

Automatically sync your Beex leads to HubSpot by handling both creation and update events in real time.

## How It Works

1. **Trigger Activation:** The workflow is triggered when a lead is created or updated in Beex.
![1121_2_.gif](fileId:3423)

2. **Data Transformation:** The nested data structure from the Beex Trigger is flattened into a simple JSON format for easier processing.
![1121_1_.gif](fileId:3422)

3. **Email Validation:** The workflow verifies that the lead contains a valid email address (non-null), as this field serves as the unique identifier in HubSpot.

4. **Field Mapping:** Configure the fields (via drag and drop) that will be used to create or update a contact in HubSpot.

⚠️ **Important:** Field names must exactly match the contact property names defined in HubSpot.
![edit_fields.gif](fileId:3425)

5. **Event Routing:** The workflow routes the action based on the event type received: `contact_create` or `contact_update`.

6. **Branch Selection:** If the event is `contact_create`, the workflow follows the upper branch; otherwise, it continues through the lower branch.

7. **API Request Execution:** The corresponding HTTP request is executed POST to create a new contact or PUT to update an existing one both using the same JSON body structure.

## Setup Instructions

1. **Install Beex Nodes:** Before importing the template, install the Beex trigger and node using the following package name:
```
n8n-nodes-beex
```

2. **Configure HubSpot Credentials:** Set up your HubSpot credentials with:
   - Access Token (typically from a private app)
   - Read/Write permissions for **Contacts** objects
![imagen10.PNG](fileId:3418)

3. **Configure Beex Credentials:** For Beex users with platform access (for trial requests, contact frank@beexcc.com):
   - Navigate to **Platform Settings** → **API Key & Callback**
   - Copy your API key and paste it into the Beex Trigger node in n8n
![beex_api_key.PNG](fileId:3420)
![imagen12.PNG](fileId:3417)

4. **Set Up Webhook URL:** Copy the Webhook URL (Test/Production) from the Beex Trigger Node and paste it into the Callback Integration section in Beex. Save your changes.
![imagen11.png](fileId:3419)

## Requirements

- **HubSpot:** An account with a Private App Token and Read/Write permissions for **Contacts** objects.
- **Beex:** An account with lead generation permissions and a Bearer Token configured in the Trigger Node.
- **Event Configuration:** In the Beex platform's **API Key & Callback** section, enable the following events:
  - "Update general and custom contact data"
  - "Networking"
![CAPTURE.PNG](fileId:3421)

## Customization Options

- **Contact Filtering:** Add filters to control which Beex leads should sync to HubSpot.
- **Identifier Configuration:** By default, only leads with a valid email address are processed to ensure accurate matching in HubSpot CRM. You can modify this logic to apply additional restrictions.
- **Field Mapping:** The "Set Fields Update" node is the primary customization point. Here you can map Beex fields to HubSpot properties for both creation and update operations (see Step 4 in How It Works).
- **Field Compatibility:** Ensure that Beex custom fields are compatible with HubSpot's default or custom properties; otherwise, API calls will fail due to schema mismatches.

## 📊 Basic Information

- **Workflow ID:** 11122
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 52
- **Downloads:** 5
- **Created:** 2025/11/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11122)

## 👤 Author

- **Name:** Beex
- **Username:** @zapix

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×4)
- **switch** 
- **httpRequest** (×2)
- **filter** 
- **n8n-nodes-beex.beexTrigger** 
- **code** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
