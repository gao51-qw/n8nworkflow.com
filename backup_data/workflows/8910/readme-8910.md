# Automate Zoom attendee segmentation in KlickTipp based on participation

> ![Zoom Meeting participants transfer to KlickTipp.png](fileId:2686)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

### Introduction  
This workflow automates the end-to-end integration between **Zoom** and **KlickTipp**.  
It listens to Zoom webinar events (specifically `meeting.ended`), validates incoming webhooks, retrieves participant data from Zoom, and applies segmentation in KlickTipp by subscribing and tagging participants based on their attendance duration.  

This enables precise, automated campaign targeting without manual effort.  

---

### How It Works  

1. **Zoom Webhook Listener**  
   - Captures `meeting.ended` events from Zoom.  
   - Validates initial webhook registration via **HMAC** before processing.  

2. **Webhook Response Handling**  
   - Distinguishes between Zoom’s URL validation requests and actual event data.  
   - Sends appropriate responses (`plainToken` + `encryptedToken` for validation, or simple `status: ok` for regular events).  

3. **Data Retrieval**  
   - Waits briefly (1 second) to ensure meeting data is available.  
   - Pulls the participant list from Zoom’s `past_meetings/{uuid}/participants` endpoint.  

4. **Participant Processing**  
   - Splits the list into individual participant items.  
   - Filters out internal users (like the host).  
   - Routes participants based on the **meeting topic** (e.g., *Anfänger* vs. *Experten* webinar).  

5. **Attendance Segmentation**  
   - Subscribes each participant to KlickTipp with mapped fields (first name, last name, email).  
   - Uses conditions to check attendance thresholds:  
     - **≥ 90% of total meeting duration → Full attendance**  
     - Otherwise → General attendance  
   - Applies corresponding KlickTipp tags per meeting type.  

---

### Key Features  

- ✅ **Webhook Validation & Security** with HMAC (SHA256).  
- ✅ **Automated Attendance Calculation** using participant `duration` vs. meeting `duration`.  
- ✅ **Dynamic Routing** by meeting topic for multiple webinars.  
- ✅ **KlickTipp Integration** with:  
  - Subscriber creation or update.  
  - Tagging for full vs. general attendance.  
- ✅ **Scalable Structure** for adding more webinars by extending the Switch and tagging branches.  

---

### Setup Instructions  

**Zoom Setup**  
- Enable **Zoom API access** and OAuth2 app credentials.  
- Configure webhook event `meeting.ended`.  
- Grant scopes:  
  - `meeting:read:meeting`  
  - `meeting:read:list_past_participants`  

**KlickTipp Setup**  
- Prepare custom fields:  
  - `Zoom | meeting selection` (Text)  
  - `Zoom | meeting start` (Date & Time)  
  - `Zoom | Join URL` (URL)  
  - `Zoom | Registration ID` (Text)  
  - `Zoom | Duration meeting` (Text)  
- Create tags for each meeting variation:  
  - `attended`, `attended fully`, `not attended` per meeting name.  

**n8n Setup**  
- Add Zoom webhook node (`Listen to ending Zoom meetings`).  
- Configure validation nodes (`Crypto`, `Build Validation Body`).  
- Set up HTTP Request node with Zoom OAuth2 credentials.  
- Connect KlickTipp nodes with your KlickTipp API credentials.  

---

### Testing & Deployment  

1. End a test Zoom meeting connected to this workflow.  
2. Verify that:  
   - The webhook triggers correctly.  
   - Participant list is fetched.  
   - Internal users are excluded.  
   - Participants are subscribed and tagged in KlickTipp.  
3. Check contact records in KlickTipp for tag and field updates.  

💡 *Pro Tip*: Use test emails and manipulate `duration` values to confirm segmentation logic.  

---

### Customization Ideas  

- Adjust attendance thresholds (e.g., 80% instead of 90%).  
- Add additional meeting topics via the Switch node.  
- Trigger email campaigns in KlickTipp based on attendance tags.  
- Expand segmentation with more granular ranges (e.g., 0–30%, 30–60%, 60–90%).  
- Add error handling for missing Zoom data or API failures.

**Resources:**  
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)


## 📊 Basic Information

- **Workflow ID:** 8910
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/9/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8910)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **crypto** 
- **set** (×2)
- **respondToWebhook** (×2)
- **if** (×3)
- **stickyNote** (×4)
- **CUSTOM.klicktipp** (×2)
- **filter** 
- **splitOut** 
- **switch** 
- **wait** 
- **webhook** 
- **httpRequest** 
- **n8n-nodes-klicktipp.klicktipp** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
