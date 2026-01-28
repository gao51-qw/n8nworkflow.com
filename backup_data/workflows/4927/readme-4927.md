# Complete lesson automation for modern UK teachers

> # Why
Teachers now spend 3-4 hours per lesson creating materials and resources from scratch. With additional/special needs, this makes it difficult to create additional materials. This is unsustainable and takes their time away from teaching. Tailored for UK teachers but can be expanded globally with prompt and form enhancements.


## How it works
I built a system with three specialized AI agents that create complete lesson packages and automatically uploads a document in Google drive and puts an appointment in calendar to review the document.
### Features
1. Research agent to pull specific information including special education needs and curriculums.
2. The scoring and assessment agent to generate tailored assessment plans, assignments, grading mechanism based on chosen requirements.
3. The integration agent just provides ideas to expand to other tools. In nfuture there is opportunity to add on Kahoot or other tools to create quizzes.
4. Finally the enriched document is emailed and a calendar invite is sent for review. 

## What you need
N8N
Any LLM API Key (I used OpenAI)
Google drive integration
Google calendar integration
Modify the email id from XXX@gmail.com to your Email id in email component.

## Support

Watch this video for intro on how it works. 

Contact me on info@pankstr.com for any queries.




## 📊 Basic Information

- **Workflow ID:** 4927
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 3290
- **Downloads:** 329
- **Created:** 2025/6/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4927)

## 👤 Author

- **Name:** Praveena
- **Username:** @pankstr

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **code** (×2)
- **googleDocs** (×2)
- **googleCalendar** 
- **gmail** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **stickyNote** (×3)
- **googleDrive** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
