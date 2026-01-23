# Turn any RSS feed into email

> ## Use case
This workflow automatically turns any RSS feed into a newsletter. It send an email every time a new post is published to an RSS feed in the last hour. 
I have been using this personally to follow Derek Sivers and Anil Dash, who don't have newsletters. Check them out 😉

![Screenshot 20240228 at 18.47.22.png](fileId:753)

## How to setup
1. Add your email and email creds
2. Add the RSS feed URLs you want to follow

## How to adjust this template
Add the feeds you want to follow. It does not have to be just email. Why not get a telegram message? Or Slack message? Ah the power of n8n 🚀

## 📊 Basic Information

- **Workflow ID:** 2144
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 6784
- **Downloads:** 678
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2144)

## 👤 Author

- **Name:** Mutasem
- **Username:** @mutasem

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **scheduleTrigger** 
- **splitInBatches** 
- **noOp** 
- **rssFeedRead** 
- **stickyNote** (×2)
- **if** 
- **gmail** 
- **splitOut** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
