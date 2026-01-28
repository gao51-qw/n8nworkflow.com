# Send personalized WhatsApp templates triggered by KlickTipp with auto-responses

> ![Ricardo Automated WhatsApp Campaigns via KlickTipp  TEMPLATE.png](fileId:1297)

**Community Node Disclaimer**: This workflow uses KlickTipp community nodes.

#### How It Works

This workflow automates personalized WhatsApp message template delivery triggered by events in KlickTipp or by messages sent to the Whatsapp Business account. When a contact triggers an Outbound, the workflow uses a pre-approved WhatsApp message template to send dynamic, real-time messages through the WhatsApp Business Cloud API. When receiving messages it checks whether a cancellation should be processed or if a auto-response is sent.

This setup is ideal for time-sensitive campaigns such as:
- Birthday greetings
- Discount or promo notifications
- Follow-ups on product or service interest

#### Key Features

**KlickTipp Trigger**
- Starts the workflow when a specific outbound is triggered
- Typical use case: subcriber receives activation Tag and triggers an Outbound which sends a webhook call to trigger WhatsApp messaging.

**WhatsApp Business Cloud - Message Trigger**
- Listens to messages from the contact and processes answers with answering auto-responder or by tagging the contact in KlickTipp.

**WhatsApp Business Cloud - Sending Template Messages**
- Sends  WhatsApp message templates using a pre-approved template.
- Template placeholders are filled with data from KlickTipp custom fields.


#### Setup Instructions

1. Set up the KlickTipp and Whatsapp nodes in your n8n instance.
2. Authenticate your WhatsApp and KlickTipp accounts.
3. Create the necessary custom fields to match the data structure
4. Verify and customize field assignments in the workflow to align with your specific form and subscriber list setup.

| Field Label                 | Field Type  |
|-----------------------------|-------------|
| Whatsapp \| Product/service | Single line |
| Whatsapp \| URL             | URL         |
| Whatsapp \| Name/company    | Single line |
| Whatsapp \| URL ending      | Single line |


---

#### Testing & Deployment

1. Use a real test contact with all required fields filled.
2. Trigger the Outbound in KlickTipp using the activation tag and answer with a message to the template.
3. Run the scenario once in n8n to verify successful delivery of the whatsapp message template to your test contact as well as the reception of the auto-responder and the subscription and tagging in KlickTipp to stop further messages.

---

#### Campaign Expansion Ideas

- Connect campaign to process keywords like "STOP" from WhatsApp messages
- Pair WhatsApp with welcome email series for onboarding.
- Use tags like `product_interest_X` for precise segmentation.
- A/B test templates with different CTA formats or timings.
- Monitor CTRs via dynamic URLs in WhatsApp templates.

#### Benefits

- **Multi-channel engagement:** Adds WhatsApp to your marketing toolkit.
- **Dynamic content:** Personalizes messages using contact data.
-**KlickTipp campaign control** Whatsapp contacts can for example signal with messages like "STOP" to receive the according Tag in KlickTipp in order to start/end automations.

&gt; 💡 **Pro Tip:** Customize the domain link ending per campaign or product line. This allows targeted redirects, e.g., `meinshop.de/ProduktA` or `mein

**Ressources:**
- [Send WhatsApp Templates with KlickTipp](https://www.klicktipp.com/support/knowledge-base/automate-send-whatsapp-templates-with-make/)
- [Use KlickTipp Community Node in n8n](https://www.klicktipp.com/support/knowledge-base/install-klicktipp-node-n8n/)
- [Automate Workflows: KlickTipp Integration in n8n](https://www.klicktipp.com/support/knowledge-base/klicktipp-integration-n8n/)


## 📊 Basic Information

- **Workflow ID:** 3937
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3392
- **Downloads:** 339
- **Created:** 2025/5/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3937)

## 👤 Author

- **Name:** KlickTipp
- **Username:** @KlickTipp

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×5)
- **whatsAppTrigger** 
- **switch** 
- **CUSTOM.klicktippTrigger** 
- **whatsApp** (×2)
- **CUSTOM.klicktipp** 
- **filter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
