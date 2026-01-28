# Extracts and organizes academic publications using GPT-4 Mini, Google Sheets, Gmail

> # Extract & Organize Academic Publications with GPT-4 Mini, Google Sheets & Gmail

**Author:** CSChin  
**Example Source:** https://www.ncl.ac.uk/singapore/staff/profile/chengchin.html#publications



## Overview

This automated workflow extracts, processes, and organizes academic publications from university staff profile pages using AI-powered extraction. Publications are automatically categorized by type and stored in organized Google Sheets while sending email notifications.

**Key Features:** AI extraction • Auto-categorization • Dual output (Sheets + Email) • Year-based sorting



## Target Audience

- **Academic Researchers** - Track publications across teams
- **University Administrators** - Manage faculty publication records  
- **Research Librarians** - Maintain institutional repositories
- **Department Heads** - Monitor research output
- **PhD Students** - Organize literature reviews



## Use Cases

1. **Automated Publication Tracking** - Monitor faculty research output
2. **Research Portfolio Management** - Maintain publication databases
3. **Citation Database Building** - Populate citation systems
4. **Department Reporting** - Generate organized reports by category/year
5. **Research Impact Analysis** - Track publication trends




## 📊 Basic Information

- **Workflow ID:** 9282
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 137
- **Downloads:** 13
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9282)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **html** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **formTrigger** 
- **stickyNote** (×3)
- **switch** 
- **splitOut** 
- **googleSheets** (×7)
- **gmail** 
- **convertToFile** 
- **sort** (×6)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **summarize** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
