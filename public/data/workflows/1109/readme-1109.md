# Add positive feedback messages to a table in Notion

> This workflow allows you to add positive feedback messages to a table in Notion.

## Prerequisites
1. Create a Typeform that contains Long Text filed question type to accepts feedback from users.
2. Get your Typeform credentials by following the steps mentioned in the [documentation](https://docs.n8n.io/credentials/typeform).
3. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/google) to create credentials for Google Cloud Natural Language.
4. Create a page on Notion similar to this [page](https://www.notion.so/n8n/Compliments-ce00772bcd1b43758ae018dce1a0cd8c).
5. Create credentials for the Notion node by following the steps in the [documentation](https://docs.n8n.io/credentials/notion/).
6. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/slack) to create credentials for Slack.
7. Follow the steps mentioned in the [documentation](https://docs.n8n.io/credentials/trello) to create credentials for Trello.


![workflow-screenshot](fileId:503)

**Typeform Trigger node:** Whenever a user submits a response to the Typeform, the Typeform Trigger node will trigger the workflow. The node returns the response that the user has submitted in the form.

**Google Cloud Natural Language node:** This node analyses the sentiment of the response the user has provided and gives a score.

**IF node:** The IF node uses the score provided by the Google Cloud Natural Language node and checks if the score is positive (larger than 0). If the score is positive we get the result as True, otherwise False.

**Notion node:** This node gets connected to the true branch of the IF node. It adds the positive feedback shared by the user in a table in Notion.

**Slack node:** This node will share the positive feedback along with the score and username to a channel in Slack.

**Trello node:** If the score is negative, the Trello node is executed. This node will create a card on Trello with the feedback from the user.

## 📊 Basic Information

- **Workflow ID:** 1109
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1528
- **Downloads:** 152
- **Created:** 2021/6/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1109)

## 👤 Author

- **Name:** Harshil Agrawal
- **Username:** @harshil1712

## 🏷️ Categories

- Ticket Management
- AI Summarization

## 🔗 Nodes Used

- **typeformTrigger** 
- **googleCloudNaturalLanguage** 
- **if** 
- **notion** 
- **slack** 
- **trello** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
