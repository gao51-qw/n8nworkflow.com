# Automate CVE detection with AI-powered Nuclei template generation & Google Drive

> ## Short description
Automates collection, technical extraction, and automatic generation of Nuclei templates from public CVE PoCs.  
Converts verified PoCs into reproducible detection templates ready for testing and distribution.

## Purpose
Provide a reliable pipeline that turns public proof-of-concept data into usable detection artifacts.  
Reduce manual work involved in finding PoCs, extracting exploit details, validating sources, and building Nuclei templates.

## How it works (technical summary)
1. Runs a scheduled SSH job that executes `vulnx` with filters for recent, high-severity PoCs.  
2. Parses the raw `vulnx` output and splits it into individual CVE entries.  
3. Extracts structured fields: CVE ID, severity, title, summary, risk, remediation, affected products, POCs, and references.  
4. Extracts URLs from PoC sections using regex.  
5. Validates each URL with HTTP requests. Invalid or unreachable links are logged and skipped.  
6. Uses an AI agent (OpenAI via LangChain) to extract technical artifacts: exploit steps, payloads, endpoints, raw HTTP requests/responses, parameters, and reproduction notes. The prompt forces technical-only output.  
7. Sends the extracted technical content to ProjectDiscovery Cloud API to generate Nuclei templates.  
8. Validates AI and API responses. Accepted templates are saved to a configured Google Drive folder.  
9. Produces JSON records and logs for each processed CVE and URL.

## Output
- Nuclei templates in ProjectDiscovery format (YAML) stored in Google Drive.  
- Structured JSON per CVE with metadata and extracted technical details.  
- Validation logs for URL checks, AI extraction, and template generation.

## Intended audience
- Bug bounty hunters.  
- Security researchers and threat intel teams.  
- Automation engineers who need reproducible detection templates.

## Setup & requirements
- n8n instance with workflow imported.  
- SSH access to a host with `vulnx` installed.  
- OpenAI API key for technical extraction.  
- ProjectDiscovery API key for template generation.  
- Google Drive OAuth2 credentials for storing templates.  
- Configure schedule trigger and target Google Drive folder ID.

## Security and usage notes
- Performs static extraction and validation only. No active exploitation.  
- Processes only PoCs that meet configured filters (e.g., CVSS &gt; 6).  
- Use responsibly. Do not target systems you do not own or have explicit permission to test.


## 📊 Basic Information

- **Workflow ID:** 10446
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 208
- **Downloads:** 20
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10446)

## 👤 Author

- **Name:** Javier Rieiro
- **Username:** @pyus3r

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **ssh** 
- **code** (×3)
- **splitInBatches** (×2)
- **splitOut** 
- **httpRequest** (×2)
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleDrive** 
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
