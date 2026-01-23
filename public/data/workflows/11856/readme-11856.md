# Automate professional LinkedIn posts with OpenAI GPT, DALL-E and trending topics

> ## Overall Description

This workflow fully automates the process of creating and publishing professional LinkedIn posts based on real-world experience in AI automation and workflow engineering, enriched with latest industry insights from the internet, and paired with a relevant high-quality image

#### The workflow ensures:

- Content relevance to AI automation, backend/frontend systems, IT
- Professional, human-friendly post tone
- Image validation before posting
- Post validation before publishing
- Automatic success/failure email alerts

## Worflow Logic

1. Trigger workflow (daily, weekly, custom date)
2. Define posting context (based on your expertise)
3. Fetch latest AI/automation trends (you can change based on your interested trends)
4. Filter insights relevant to your field
5. Generate linkedin ready post using AI Agent (OpenAI API)
6. Generate image from Open AI Image model related to the post
7. Validate image and text quality
8. Merge approved text and image
9. Convert content into LinkedIn format
10. Publish post on LinkedIn
11. Send email notification on success or failure

## Setup Instructions
#### Credentials

- OpenAI API Key – For text generation.
- LinkedIn API Token – For publishing posts.
- Image Generation API – DALL-E, Pollinations, or MidJourney.
- Gmail / SMTP – For notifications.
- Optional APIs: SERP API for trending topics.



## 📊 Basic Information

- **Workflow ID:** 11856
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 311
- **Downloads:** 31
- **Created:** 2025/12/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11856)

## 👤 Author

- **Name:** Mohamed Abubakkar
- **Username:** @mohamed-abubakkar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **httpRequest** 
- **code** (×3)
- **if** (×3)
- **merge** 
- **linkedIn** 
- **emailSend** (×2)
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
