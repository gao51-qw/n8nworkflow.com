# Auto-Delete SPAM, Social, and Promotions Emails in Gmail

> ## Who is this for?
This workflow is perfect for Gmail users who want a tidy inbox without manual effort. It’s especially great for those overwhelmed by SPAM, social media updates, or promotional emails and want them automatically removed regularly.

## What problem is this workflow solving?
Unwanted emails like SPAM, social notifications, and promotions can clutter your Gmail inbox, making it hard to focus on what matters. Manually deleting them is repetitive and time-consuming. This workflow automates the cleanup, keeping your inbox streamlined.

## What this workflow does
Every 3 days, this workflow deletes emails from Gmail’s SPAM, Social, and Promotions categories. It uses n8n’s Gmail node to fetch these emails, merges them into a single list, splits out individual email IDs, and deletes each one. The scheduled process ensures consistent inbox maintenance.

## Setup
1. Set up valid Gmail OAuth2 credentials in n8n.
2. Import the "Clean My Mail" workflow into your [n8n instance](https://n8n.partnerlinks.io/khaisastudio).
3. Confirm the Gmail nodes target SPAM, CATEGORY_SOCIAL, and CATEGORY_PROMOTIONS labels.
4. Adjust the "Run Every 3 Days (Trigger)" node’s schedule if needed.
5. Activate the workflow to begin automated cleaning.

## How to customize this workflow to your needs
- Change the Gmail node labels to target other categories or custom labels.
- Adjust the schedule frequency in the trigger node.
- Add filters to spare specific emails from deletion.
- Extend functionality with nodes for archiving or notifications.

***made by:** [khmuhtadin](https://khmuhtadin.com)*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 📊 Basic Information

- **Workflow ID:** 4358
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 3025
- **Downloads:** 302
- **Created:** 2025/5/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4358)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **gmail** (×4)
- **stickyNote** (×5)
- **scheduleTrigger** 
- **merge** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
