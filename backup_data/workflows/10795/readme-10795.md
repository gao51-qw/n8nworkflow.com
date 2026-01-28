# Pre-meeting email nurturing sequence with Cal.com and Gmail

> # How it works

Trigger: When a new meeting is booked in Cal.com.

Date Check: The workflow calculates how many days remain before the meeting date.

Email Scheduling: Depending on the time left, it sends a series of pre-written “warm-up” emails using Gmail, designed to set expectations and build interest in your offering.

Timing Control: Emails are automatically spaced out to ensure natural engagement before the meeting.

## How to set up

Connect your Cal.com API key to authenticate and trigger on new bookings.

Connect your Google account to enable Gmail email sending.

Customize the email messages in the Set or Send Email nodes to match your brand voice and tone.

Test with internal bookings to ensure correct timing and delivery before activating for clients.

## Requirements

Cal.com account with API access.

Google account connected to Gmail node.

Active n8n instance (self-hosted or cloud).

## How to customize

Adjust email spacing or timing by modifying the Wait nodes.

Edit the email copy for different purposes (e.g., sales, onboarding, consultation).

Add conditional logic to send different warm-up sequences for specific meeting types or durations.

## 📊 Basic Information

- **Workflow ID:** 10795
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 87
- **Downloads:** 8
- **Created:** 2025/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10795)

## 👤 Author

- **Name:** Maksudur Rahman
- **Username:** @maksudur

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **calTrigger** 
- **if** 
- **code** (×2)
- **wait** (×6)
- **switch** 
- **set** (×3)
- **gmail** (×9)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
