# Automate CVE monitoring with OpenAI processing for ServiceNow security incidents

> This n8n workflow automatically fetches the latest CVE data at scheduled intervals, extracts relevant security details, and creates a corresponding Security Incident in ServiceNow for each new vulnerability.

Schedule Trigger – Runs at predefined intervals.
Jina Fetch – Retrieves the latest CVE feed.
Information Extractor (OpenAI Chat Model) – Processes and extracts key details from the CVE data.
Split Out – Separates each CVE entry for individual processing.
Create Incident – Generates a ServiceNow Security Incident with the extracted CVE details.
Ideal for security teams to ensure timely tracking and remediation of new vulnerabilities without manual monitoring.

## 📊 Basic Information

- **Workflow ID:** 7224
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 929
- **Downloads:** 92
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7224)

## 👤 Author

- **Name:** Tushar Mishra
- **Username:** @yajna

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **splitOut** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **httpRequest** 
- **serviceNow** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
