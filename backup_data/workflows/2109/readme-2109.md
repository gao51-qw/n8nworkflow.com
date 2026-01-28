# Enrich new Discourse members with Clearbit then notify in Slack

> ## Who is this template for?
This workflow template is designed for **Sales** and **Customer Success** professionals seeking alerts when potential high-value users, prospects, or existing customers register for a Discourse community. Leveraging Clearbit, it retrieves enriched data for the new member to assess their value.
### Example result in Slack


![Screenshot 20240221 at 13.51.29.png](fileId:738)

## How it works
- Each time a new member is created in Discourse, the workflow runs (powered by Discourse's native Webhooks feature).
- After filtering out popular private email accounts, we run the member's email through Clearbit to fetch available information on the member as well as their organization. 
- If the enriched data meets certain criteria, we send a Slack message to a channel. This message has a few quick actions: `Open LinkedIn profile` and `Email member`



## Setup instructions
Overview is below. Watch this [🎥 quick set up video](https://www.loom.com/share/d379895004374ddc85dc9171ca37c139?sid=bb28df29-bc91-4d32-a657-0bfbaaf50cc7) for detailed instructions on how to get the template running, as well as how to customize it.
1. Complete the `Set up credentials` step when you first open the workflow. You'll need a Discourse (admin user), Clearbit, and Slack account.
2. Set up the Webhook in Discourse, linking the `On new Discourse user` Trigger with your Discourse community.
3. Set the correct channel to send to in the `Post message in channel` step
4. After testing your workflow, swap the Test URL to Production URL in Discourse and activate your workflow 


Template was created in n8n `v1.29.1` 

## 📊 Basic Information

- **Workflow ID:** 2109
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1402
- **Downloads:** 140
- **Created:** 2024/2/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2109)

## 👤 Author

- **Name:** Max Tkacz
- **Username:** @max-n8n

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **filter** (×2)
- **noOp** 
- **stickyNote** (×5)
- **clearbit** (×2)
- **webhook** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
