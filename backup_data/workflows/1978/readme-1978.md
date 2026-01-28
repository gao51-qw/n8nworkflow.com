# Personalize marketing emails using customer data and AI

> This workflow uses AI to analyze customer sentiment from product feedback. If the sentiment is negative, AI will determine whether offering a coupon could improve the customer experience.

Upon completing the sentiment analysis, the workflow creates a personalized email templates. This solution streamlines the process of engaging with customers post-purchase, particularly when addressing dissatisfaction, and ensures that outreach is both personalized and automated.

This workflow won the 1st place in our last AI contest.

Note that to use this template, you need to be on n8n version 1.19.4 or later.

## 📊 Basic Information

- **Workflow ID:** 1978
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 84315
- **Downloads:** 8431
- **Created:** 2023/11/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1978)

## 👤 Author

- **Name:** n8n Team
- **Username:** @n8n-team

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×8)
- **extractFromFile** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stopAndError** 
- **httpRequest** 
- **merge** (×3)
- **if** (×2)
- **html** (×2)
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
