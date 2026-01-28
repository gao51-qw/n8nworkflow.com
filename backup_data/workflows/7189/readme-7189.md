# AI-powered domain & IP security check automation

> ![AI5.png](fileId:2001)![AI4.png](fileId:2002)

**Description**

This workflow is designed to automate the security reputation check of domains and IP addresses using multiple APIs such as VirusTotal, AbuseIPDB, and Google DNS. It assesses potential threats including malicious and suspicious scores, as well as email security configurations (SPF, DKIM, DMARC). The analysis results are processed by AI to produce a concise assessment, then automatically updated into Google Sheets for documentation and follow-up.

**How It Works**
1. Automatic Trigger – The workflow runs periodically via a Schedule Trigger.

2. Data Retrieval – Fetches a list of domains from Google Sheets with status "To do".

3. Domain Analysis – Uses VirusTotal API to get the domain report, perform a rescan, and check IP resolutions.

4. IP Analysis – Checks IP reputation using AbuseIPDB.

5. Email Security Validation – Verifies SPF, DKIM, and DMARC configurations via Google DNS.

6. AI Assessment – Analysis data is processed by AI to produce a short summary in Indonesian.

7. Data Update – The results are automatically updated to Google Sheets, changing the status to "Done" or adding notes if potential threats are found.

**How to Setup**

1. Prepare API Keys
- Sign up and obtain API keys from VirusTotal and AbuseIPDB.
- Set up access to Google Sheets API.

2. Configure Credentials in n8n
- Add VirusTotal API, AbuseIPDB API, and Google Sheets OAuth credentials in n8n.

3. Prepare Google Sheets
- Create a sheet with columns No, Domain, Customer, Keterangan, Status.
- Ensure initial data has the status "To do".

4. Import Workflow
- Upload the workflow JSON file into n8n.

5. Set Schedule Trigger
- Define the checking interval as needed (e.g., every 1 hour).

6. Test Run
- Run the workflow manually to ensure all API connections and Google Sheets output work properly.

## 📊 Basic Information

- **Workflow ID:** 7189
- **Complexity:** advanced
- **Node Count:** 50
- **Views:** 1079
- **Downloads:** 107
- **Created:** 2025/8/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7189)

## 👤 Author

- **Name:** Garri
- **Username:** @garri

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×15)
- **code** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **if** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** (×3)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×3)
- **googleSheets** (×13)
- **scheduleTrigger** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 50 nodes with 39 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
