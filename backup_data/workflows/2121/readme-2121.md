# Get a Telegram alert when a great lead submits form with MadKudu and Hunter

> ## Use case
If you have a form where potential leads reach out, then you probably want to analyze those leads and send a notification if certain requirements are met, e.g. employee number is high enough. MadKudu is built exactly to solve this problem. We use it along with Hunter and Telegram to get a message for high quality leads.

![Screenshot 20240222 at 17.05.42.png](fileId:741)

## How to setup
1. Add you **MadKudu**, **Hunter**, and **Telegram** credentials 
2. Set the Telegram chat id to send to
3. Click the Test Workflow button, enter your email and check your email
4. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 

## How to adjust this template
You may want to raise or lower the threshold for your leads, as you see fit. 

## 📊 Basic Information

- **Workflow ID:** 2121
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 901
- **Downloads:** 90
- **Created:** 2024/2/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2121)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **if** (×2)
- **stickyNote** (×4)
- **noOp** (×2)
- **httpRequest** 
- **hunter** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
