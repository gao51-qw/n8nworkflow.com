# Automatic issue routing in Linear with GPT-4-mini classification

> ## How it works

This workflow automatically classifies and routes new or updated Linear issues using AI.
When an issue is created or updated, its title and description are analyzed by an OpenAI-powered classifier. The workflow then determines the correct team, routes the issue through the right path, and updates it in Linear.
This ensures accurate, consistent triaging and removes the need for manual assignment.

## Step-by-step

**1. Trigger and validation**  
- **Linear Trigger** – Detects new or updated issues in Linear.  
- **Filter New Issues Only** – Ensures the issue has a valid title.  
- **If (Create or Update)** – Confirms the action is either create or update.  

**2. AI classification**  
- **OpenAI Chat Model** – Provides language model capabilities for classification.  
- **AI Agent (Bug Classifier)** – Uses issue title and description to assign a team ID.  

**3. Routing logic**  
- **Engineering Router** – Checks if classification output is Engineering.  
- **Product Router** – Checks if classification output is Product.  
- **Design Router** – Checks if classification output is Design.  
- **Default Router** – Fallback if no match is found.  

**4. Update Linear issue**  
- **Assign to Engineering** – Updates team assignment in Linear.  
- **Assign to Product** – Updates team assignment in Linear.  
- **Assign to Design** – Updates team assignment in Linear.  
- **Assign to Default** – Assigns to fallback team if no match.  

## Why use this?

- Automates issue triage, eliminating manual team assignment.  
- Speeds up bug resolution by instantly routing to the right team.  
- Ensures consistency in bug categorization using AI-driven analysis.  
- Scales effortlessly with growing issue volume.  
- Reduces human error in issue management.  


## 📊 Basic Information

- **Workflow ID:** 8845
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 136
- **Downloads:** 13
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8845)

## 👤 Author

- **Name:** Avkash Kakdiya
- **Username:** @itechnotion

## 🏷️ Categories

- AI Summarization

## 🔗 Nodes Used

- **if** (×2)
- **linearTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **switch** (×4)
- **linear** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
