# Automated meeting attendance tagging for Zoom Webinars with KlickTipp

> ![Zoom Tagging attendance wf.png](fileId:2330)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

### Introduction
This workflow listens to **Zoom `webinar.ended`** events, validates the webhook (HMAC), fetches the past webinar details/participants, and tags each participant in **KlickTipp** based on attendance thresholds (e.g., ≥90%, ≥60%). It supports routing by webinar topic (Anfänger vs. Experten) so you can run differentiated follow-ups automatically.

### Benefits
- **Hands-off segmentation** based on real attendance
- **Accurate follow-ups** (full, partial, or no attendance)
- **Scales to multiple webinars** with simple rule extensions

### Key Features
- **Webhook validation** for Zoom URL registration (HMAC SHA256)
- **Zoom API calls** to retrieve past webinar & participants by UUID
- **Routing by webinar name** (Beginner/Expert)
- **Attendance thresholds** via IF nodes (≥90% full, 60–89% partial)
- **KlickTipp tagging** for engagement-driven campaigns

---

### Tags (KlickTipp Setup)
- Zoom webinar E-Mail Zustellung für Anfänger  
- Zoom webinar E-Mail Zustellung für Anfänger attended  
- Zoom webinar E-Mail Zustellung für Anfänger attended fully  
- Zoom webinar E-Mail Zustellung für Anfänger not attended  
- Zoom webinar E-Mail Zustellung für Experten  
- Zoom webinar E-Mail Zustellung für Experten attended  
- Zoom webinar E-Mail Zustellung für Experten attended fully  
- Zoom webinar E-Mail Zustellung für Experten not attended  

### Important Note
This workflow is based on the companion workflow **“Automate Webinar Registration with Zoom & KlickTipp Form Integration”**.  
➡️ Both workflows must be activated together for the automations to function correctly.  

In KlickTipp you should:  
- Create a **landing page** for webinar registration.  
- Set up an **email campaign** for invitations and follow-ups.  
- **Manually create the necessary tags based on list above** 

---

### Testing & Deployment
1. End a Zoom webinar tied to this flow.  
2. Confirm the webhook triggers and participants are fetched.  
3. Verify the correct **attendance tags** appear on contacts in KlickTipp.

&gt; 💡 Tip: Use test emails and tweak `duration` to simulate different attendance bands.

### Customization
- Adjust thresholds (e.g., 80% for “full”) in IF nodes.  
- Duplicate routing/tag blocks to support more webinar topics.  
- Add error handling (e.g., retries or alerts) for API edge cases.

**Resources:**  
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)


## 📊 Basic Information

- **Workflow ID:** 8418
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 43
- **Downloads:** 4
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8418)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **crypto** 
- **set** (×2)
- **respondToWebhook** (×2)
- **if** (×5)
- **stickyNote** (×4)
- **CUSTOM.klicktipp** (×4)
- **n8n-nodes-klicktipp.klicktipp** (×2)
- **switch** (×2)
- **webhook** 
- **httpRequest** (×2)
- **filter** 
- **splitOut** (×2)
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
