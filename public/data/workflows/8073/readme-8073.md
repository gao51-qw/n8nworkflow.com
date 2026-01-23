# Generate PRDs and test scenarios with GPT/Claude and PDF export

> ### 📒 Generate **Product Requirements Document (PRD)** and **test scenarios** form input to PDF with OpenRouter and APITemplate.io

This workflow generates a **Product Requirements Document (PRD)** and **test scenarios** from structured form inputs. It uses **OpenRouter LLMs (GPT/Claude)** for natural language generation and **APITemplate.io** for PDF export.  

## Who’s it for
This template is designed for **product managers, business analysts, QA teams, and startup founders** who need to quickly create **Product Requirement Documents (PRDs)** and **test cases** from structured inputs.  

## How it works
1. A **Form Trigger** collects key product details (name, overview, audience, goals, requirements).  
2. The **LLM Chain (OpenRouter GPT/Claude)** generates a professional, structured **PRD in Markdown format**.  
3. A second **LLM Chain** creates **test scenarios and Gherkin-style test cases** based on the PRD.  
4. Data is cleaned and merged using a **Set node**.  
5. The workflow sends the formatted document to **APITemplate.io** to generate a polished **PDF**.  
6. Finally, the workflow returns the PDF via a **Form Completion node** for easy download.  
 

## ⚡ Requirements
- OpenRouter API Key (or any LLM)
- APITemplate.io account  

## 🎯 Use cases
- Rapid PRD drafting for startups.  
- QA teams generating **test scenarios** automatically.  
- Standardized documentation workflows.  

👉 Customize by editing prompts, PDF templates, or extending with integrations (Slack, Notion, Confluence).  

### Need Help?  
Ask in the [n8n Forum](https://community.n8n.io/)!  

Happy Automating with n8n! 🚀


## 📊 Basic Information

- **Workflow ID:** 8073
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 819
- **Downloads:** 81
- **Created:** 2025/8/31
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8073)

## 👤 Author

- **Name:** Alok Kumar
- **Username:** @alokkumar

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×2)
- **stickyNote** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **formTrigger** 
- **set** 
- **apiTemplateIo** 
- **form** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
