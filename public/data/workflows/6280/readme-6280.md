# Revive expired real estate listings with OpenAI and Gmail follow-ups

> ## How it works
1. This automation helps revive expired property listings by:
2. Reading listing data from a Google Sheet that tracks all properties.
3. Filtering listings where the last_activity date is older than 30 days.
4. Generating a personalized email using OpenAI (GPT-4) to re-engage the owner.
5. Sending the email to the property owner using Gmail or SMTP.
6. (Optional): Updating the listing's status to followed_up in the Sheet once the email is sent.
7. This workflow ensures no opportunity is missed by proactively reactivating cold leads.


## Set Up Steps
1. **Prepare your Google Sheet**
   - Create a Google Sheet with these columns:
     - `title`, `owner_name`, `email`, `property_type`, `location`, `last_activity`
   - Fill in sample data for testing.

2. **Connect Google Sheets in n8n**
   - Add a **Google Sheets node**.
   - Use the "Read Rows" operation to load the listing data.

3. **Filter listings inactive for 30+ days**
   - Use a **Set node** to convert `last_activity` to a Date.
   - Add an **IF node** or **Code node** to check if the listing is older than 30 days.

4. **Generate email content with OpenAI**
   - Add an **OpenAI node**.
   - Use dynamic input (e.g. owner name, property type) to create a follow-up message.

5. **Send the email**
   - Add a **Gmail node** or **SMTP node** to send the email to the property owner.

6. **(Optional) Update status**
   - Use a **Google Sheets "Update Row" node** to change the listing's status to `followed_up`.

7. **Test the full workflow**
   - Manually trigger the workflow or schedule it to run daily/weekly.


## 📊 Basic Information

- **Workflow ID:** 6280
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 532
- **Downloads:** 53
- **Created:** 2025/7/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6280)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** 
- **if** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
