# Deep Research - Sales Lead Magnet Agent

> Want to check out all my flows, follow me on:

https://maxmitcham.substack.com/

https://www.linkedin.com/in/max-mitcham/


This automation flow is designed to generate comprehensive, research-backed lead magnet articles based on a user-submitted topic, conduct deep research across multiple sources, and automatically create a professional Google Doc ready for LinkedIn sharing.

⚙️ **How It Works (Step-by-Step):**

1. **📝 Chat Input (Entry Point)**
A user submits a topic through the chat interface:
```
Topic for lead magnet content
Target audience (automatically detected)
Company context (when relevant)
```

2. **🔍 Query Builder Agent**
An AI agent refines the input by:
```
Converting the topic into 5 targeted research queries
Determining if topic relates to *company for specialized research
Using structured output parsing for consistent results
```

3. **📚 Research Leader Agent**
Conducts comprehensive research that:
```
Uses Perplexity API for real-time web research
Integrates *company knowledge base when relevant
Creates detailed table of contents with research insights
Identifies key trends, expert opinions, and case studies
```

4. **📋 Project Planner Agent**
Structures the content by:
```
Generating professional title and subtitle
Creating 8-10 logical chapter outlines
Developing detailed writing prompts for each section
Ensuring step-by-step actionable guidance
```

5. **✍️ Research Assistant Team**
Multiple AI agents write simultaneously:
```
Each agent writes one chapter with proper citations
Maintains consistent voice across all sections
Includes real-world examples and implementation steps
Uses both web research and *company knowledge
```

6. **📝 Editor Agent**
Professional content polishing:
```
Refines tone for authenticity and engagement
Adds image placeholders where appropriate
Ensures proper flow between chapters
Optimizes for LinkedIn lead magnet format
```

7. **📄 Google Docs Creation**
Automated document generation:
```
Creates new Google Doc with formatted content
Sets proper sharing permissions (public link)
Organizes in designated company folder
Returns shareable URL for immediate use
```

🛠️ **Tools Used:**
```
n8n: Workflow orchestration platform
Anthropic Claude: Primary AI model for content generation
OpenRouter: Backup AI model options
Perplexity API: Real-time research capabilities
*Company Knowledge Hub: Internal documentation access
Google Docs API: Document creation and formatting
Google Drive API: File management and sharing
```

📦 **Key Features:**
```
End-to-end automation from topic to published document
Multi-agent approach ensures comprehensive coverage
Real-time research with proper citations
Company-specific knowledge integration
Professional editing and formatting
Automatic Google Docs creation with sharing
Scalable content generation (3-5 minutes per article)
```

🚀 **Ideal Use Cases:**
```
B2B companies building thought leadership content
Sales teams creating industry-specific lead magnets
Marketing departments scaling content production
Consultants developing expertise-demonstrating resources
SaaS companies creating feature-focused educational content
Startups establishing market presence without content teams
```

## 📊 Basic Information

- **Workflow ID:** 4721
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 27316
- **Downloads:** 2731
- **Created:** 2025/6/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4721)

## 👤 Author

- **Name:** Max Mitcham
- **Username:** @maxmitcham

## 🏷️ Categories

- Content Creation
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **@n8n/n8n-nodes-langchain.toolWorkflow** 
- **splitOut** 
- **merge** 
- **code** 
- **googleDocs** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×2)
- **set** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
