# Send follow-ups using Gmail to Hubspot contacts

> ## Use Case
Following up at the right time is one of the most important parts of sales. This workflow uses Gmail to send outreach emails to Hubspot contacts that have already been contacted only once more than a month ago, and records the engagement in Hubspot. 

## Setup 
1. Setup HubSpot Oauth2 creds (Be careful with scopes. They have to be exact, not less or more. Yes, it’s not simple, but it’s well documented in the n8n docs. Be smarter than me, read the docs)
2. Setup Gmail creds.
3. Change the email variables in the `Set keys` node

## How to adjust this template
There's plenty to do here because the approach here is really just a starting point. Most important here is to figure out what your rules are to follow up. After a month? More than once?

Also, remember to update the follow-up email! Unless you want to sell n8n 😉

## 📊 Basic Information

- **Workflow ID:** 2118
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 2828
- **Downloads:** 282
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2118)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Lead Nurturing

## 🔗 Nodes Used

- **scheduleTrigger** 
- **stickyNote** (×4)
- **gmail** 
- **hubspot** (×2)
- **if** (×2)
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
