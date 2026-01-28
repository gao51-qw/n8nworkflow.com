# Optimize Resumes & Generate Cover Letters with Gemini AI and PDF.co

> ## ATS-Optimized Resume and Cover Letter Generator

**This n8n template automates the process of creating ATS-friendly resumes and personalized cover letters from uploaded pdf resume.**

Use cases
- Instantly generate ATS-optimized resumes for specific job descriptions.
- Create customized cover letters tailored to each role.
- Automate resume enhancement for career portals or HR tools.
- Build a resume improvement backend for job platforms or AI career assistants.

Good to know

This workflow connects to few basic external services so you’ll need to configure credentials for them before running the template. It works on both cloud and self-hosted n8n instances, and setup typically takes 5–10 minutes.

### Requirements

- n8n Cloud or self-hosted instance
- Google Gemini API key for AI text generation
- PDF.co API key for document conversion
- Gmail account (OAuth connected) for delivery

### Customising this workflow

- Replace Gmail with Slack, Notion, or Drive for flexible document delivery.
- Integrate other LLMs (like OpenAI GPT or Claude) for different writing styles.
- Add additional formatting, branding, or multilingual support for global users.
- Use it as the base for a career assistant automation or HR application backend.

## 📊 Basic Information

- **Workflow ID:** 10201
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 46
- **Downloads:** 4
- **Created:** 2025/10/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10201)

## 👤 Author

- **Name:** Paul Abraham
- **Username:** @hellopaul

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **set** 
- **googleDrive** (×2)
- **extractFromFile** 
- **code** 
- **httpRequest** 
- **gmail** 
- **merge** 
- **switch** 
- **if** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
