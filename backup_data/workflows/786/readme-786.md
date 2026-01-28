# Analyze feedback and send a message on Mattermost

> This workflow analyzes the sentiments of the feedback provided by users and sends them to a Mattermost channel.

![workflow-screenshot](fileId:346)

**Typeform Trigger node:** Whenever a user submits a response to the Typeform, the Typeform Trigger node will trigger the workflow. The node returns the response that the user has submitted in the form.

**Google Cloud Natural Language node:** This node analyses the sentiment of the response the user has provided and gives a score.

**IF node:** The IF node uses the score provided by the Google Cloud Natural Language node and checks if the score is negative (smaller than 0). If the score is negative we get the result as True, otherwise False.

**Mattermost node:** If the score is negative, the IF node returns true and the true branch of the IF node is executed. We connect the Mattermost node with the true branch of the IF node. Whenever the score of the sentiment analysis is negative, the node gets executed and a message is posted on a channel in Mattermost.

**NoOp:** This node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.

This workflow can be used by Product Managers to analyze the feedback of the product. The workflow can also be used by HR to analyze employee feedback. You can even use this node for sentiment analysis of Tweets.

To perform a sentiment analysis of Tweets, replace the Typeform Trigger node with the Twitter node.

***Note:*** You will need a Trigger node or Start node to start the workflow.

Instead of posting a message on Mattermost, you can save the results in a database or a Google Sheet, or Airtable. Replace the Mattermost node with (or add after the Mattermost node) the node of your choice to add the result to your database. 

You can learn to build this workflow on the documentation page of the [Google Cloud Natural Language](https://docs.n8n.io/nodes/n8n-nodes-base.googleCloudNaturalLanguage/#google-cloud-natural-language) node.

## 📊 Basic Information

- **Workflow ID:** 786
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1003
- **Downloads:** 100
- **Created:** 2020/11/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/786)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **typeformTrigger** 
- **googleCloudNaturalLanguage** 
- **if** 
- **mattermost** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
