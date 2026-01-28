# Automate agile project setup with GPT-5 Mini, Jira & form interface

> ## **Who is this for?**

This workflow is perfect for:

* Agile development teams and project managers who need to quickly set up Jira projects
* Product managers who want to convert feature ideas into structured user stories and tasks
* Software development agencies that need to rapidly create detailed project structures for clients
* Scrum masters seeking to automate the initial project setup and backlog creation process

## **What problem is this workflow solving?**

Creating comprehensive Jira projects with detailed user stories and sub-tasks is time-consuming and often inconsistent. This workflow solves those issues by:

* **Automating project creation** from basic feature descriptions to fully structured Jira projects
* **Generating professional user stories** following Agile best practices with proper "As a [user], I want to [goal], so that [benefit]" formatting
* **Creating detailed sub-tasks** covering design, development, testing, and documentation phases

## What this workflow does

This workflow transforms raw project ideas into fully structured Jira projects with comprehensive user stories and sub-tasks using AI-powered analysis and automated Jira integration.

**Step by step:**
1. **Form Trigger** collects project name and feature descriptions through a web form
2. **Project Naming** uses GPT-4.1 mini to clean and professionalize the project name while generating a unique project key
3. **Create Project** establishes a new Jira project with proper software development template and configuration
4. **Get Status ID** retrieves project details and available issue types for story creation
5. **Jira Story Generator** analyzes project features using AI to create structured user stories with sub-tasks
6. **Create Story** generates individual Jira stories with proper titles and descriptions
7. **Execute Sub-task Workflow** automatically creates all associated sub-tasks for each story
8. **Gmail Notification** sends completion confirmation with project details and direct links

## How to set up

1. **Connect your Jira account** by adding your Jira Software Cloud API credentials to all Jira-related nodes
2. **Update Jira URL** in the "Set Jira URL" node to match your Jira instance (e.g., https://yourcompany.atlassian.net)
3. **Add OpenAI API key** to the OpenAI Chat Model node for AI-powered story generation
4. **Configure Gmail credentials** for the notification node and update the recipient email address
5. **Update project lead** in the Create Project node by replacing the leadAccountId with your user ID
6. **Test the workflow** using the manual trigger with sample project data
7. **Customize story templates** in the Structured Output Parser if you need different story formats
8. **Set up the sub-workflow** by ensuring the Execute Workflow node points to the correct workflow ID

## How to customize this workflow to your needs

* **Adjust story generation prompts**: modify the AI prompts in the "Jira Story Generator" to match your team's specific story writing style or include additional fields
* **Include estimation**: add story point estimation logic or time tracking fields to generated stories
* **Switch AI models**: replace the OpenAI Chat Model node with other AI providers like Google Gemini, Claude, or local models by using the appropriate n8n AI nodes for different cost and performance requirements

## Need help customizing?

**Contact me for consulting and support:**   
📧 **billychartanto@gmail.com**  

## 📊 Basic Information

- **Workflow ID:** 8101
- **Complexity:** advanced
- **Node Count:** 42
- **Views:** 399
- **Downloads:** 39
- **Created:** 2025/9/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8101)

## 👤 Author

- **Name:** Billy Christi
- **Username:** @billy

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **splitInBatches** (×2)
- **splitOut** (×3)
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **jira** (×2)
- **merge** (×2)
- **limit** (×3)
- **aggregate** 
- **filter** (×2)
- **set** (×4)
- **executeWorkflowTrigger** 
- **stickyNote** (×10)
- **gmail** 
- **executeWorkflow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 42 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
