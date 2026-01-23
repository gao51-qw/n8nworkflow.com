# Automate webinar registration with Zoom & KlickTipp form integration

> ![Zoom registration wf.png](fileId:2329)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

### Introduction
This workflow automates Zoom recurring webinar registrations by capturing form submissions from a KlickTipp Landingpage and enriching contacts with webinar details. Depending on the registrant’s webinar choice (for example “E-Mail Zustellung für Anfänger” or “E-Mail Zustellung für Experten”), the system fetches the correct Zoom webinar info and writes it into KlickTipp. Ideal for running scalable webinar funnels without manual data entry.

### Benefits
- **Instant contact enrichment**: Automatically populates KlickTipp with Zoom join links and session times.  
- **Dynamic segmentation**: Applies specific tags for “Beginner” or “Expert” webinar participants.  
- **Scalable structure**: Router logic allows easy extension for more webinar types.  

### Key Features
- **KlickTipp Trigger**:
  - Starts the workflow when a landing-page form is submitted via outbound webhook.
- **Switch Router**:
  - Routes based on the webinar selection.
  - Supports multiple webinar options.
- **Zoom API Integration**:
  - Retrieves recurring webinar data including join URL and future occurrences.
  - webinar IDs are set per path (Beginner vs Expert).
- **KlickTipp Contact Sync**:
  - Updates or subscribes contacts in the correct list.
  - Writes custom fields for join link and next session timestamp.
  - Applies topic-specific tags for segmentation.

---

### Custom Fields (KlickTipp Setup)

| **Name**                        | **Field type**   |
|---------------------------------|----------------|
| Zoom \| webinar choice          | Line Text          |
| Zoom \| webinar start timestamp | Date & Time   |
| Zoom \| Join URL                | URL            |
| Zoom \| Registration ID         | Line Text          |
| Zoom \| Duration webinar        | Line Text              |

---

### Tags (Segmentation)

- Zoom webinar E-Mail Zustellung für Anfänger  
- Zoom webinar E-Mail Zustellung für Experten  

---

### Setup Instructions
**KlickTipp Preparation**
- Create the custom fields above.  
- Add dropdown for webinar choice on landing page.  
- Configure outbound webhook to n8n.  

**Credential Configuration**
- Authenticate KlickTipp API.  
- Connect Zoom via OAuth2 (`webinar:write:registrant` scope).  
- Insert correct Zoom webinar IDs in workflow nodes.  

**Field Mapping**
- Map the zoom data to the newly created KlickTipp custom fields.
- Ensure tags match campaign setup.  

---

### Testing and Deployment
1. Submit a registration form.  
2. Confirm workflow triggers and Zoom data is fetched.  
3. Verify KlickTipp contact is updated with:  
   - Join URL  
   - Start timestamp  
   - Correct segmentation tag  

⚠️ *Note*: Zoom OAuth tokens may expire — refresh when needed. Zoom may also enforce API rate limits.  

---

### Campaign Expansion Ideas
- Add more webinar types and extend router.  
- Build reminder and follow-up campaigns in KlickTipp by tag.  
- Track attendance tags for automated post-event actions.  

### Customization
- Adapt Zoom nodes for webinars.  
- Add fallback logic if Zoom data is missing.  
- Trigger cross-tool automations (CRM, Slack, invoicing).  

**Resources:**  
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)


## 📊 Basic Information

- **Workflow ID:** 8416
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 67
- **Downloads:** 6
- **Created:** 2025/9/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8416)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **n8n-nodes-klicktipp.klicktippTrigger** 
- **switch** 
- **stickyNote** (×5)
- **CUSTOM.klicktipp** (×2)
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
