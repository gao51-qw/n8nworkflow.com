# Qualify great leads from n8n Form with MadKudu and Hunter and alert on Slack

> ## Use case
If you have a form where potential leads reach out, then you probably want to analyze those leads and send a notification if certain requirements are met, e.g. employee number is high enough. MadKudu is built exactly to solve this problem. We use it along with Hunter to alert on Slack for high quality leads.

![Screenshot 20240222 at 16.35.53.png](fileId:739)

## How to setup
1. Add you **MadKudu**, **Hunter**, and **Slack** credentials 
2. Set the Slack channel
3. Click the Test Workflow button, enter your email and check the Slack channel
4. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 

## How to adjust this template
You may want to raise or lower the threshold for your leads, as you see fit. 


## 📊 Basic Information

- **Workflow ID:** 2119
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 895
- **Downloads:** 89
- **Created:** 2024/2/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2119)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **slack** 
- **formTrigger** 
- **if** (×2)
- **stickyNote** (×3)
- **noOp** (×2)
- **httpRequest** 
- **hunter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
