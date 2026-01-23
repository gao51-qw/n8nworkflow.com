# Generate SSL/TLS certificate expiry reports with AWS ACM and AI for Slack & email

> # Automated SSL/TLS Certificate Expiry Report for AWS
![](https://wisestackai.s3.ap-southeast-1.amazonaws.com/Blue+and+Yellow+Gradient+Meditation+Youtube+Thumbnail.jpg)
&gt; Automatically generates a weekly report of all AWS ACM certificates, including status, expiry dates, and renewal eligibility. The workflow formats the data into both Markdown (for PDF export to Slack) and HTML (for email summary), helping teams stay on top of certificate compliance and expiration risks.

## **Who’s it for**
This workflow is designed for **DevOps engineers**, **cloud administrators**, and **compliance teams** who manage AWS infrastructure and need **automated weekly visibility** into the status of their SSL/TLS certificates in **AWS Certificate Manager (ACM)**. It's ideal for teams that want to reduce the risk of expired certs, track renewal eligibility, and maintain reporting for audit or operational purposes.

## **How it works / What it does**
This n8n workflow performs the following actions on a weekly schedule:

1. **Trigger**: Automatically runs once a week using the `Weekly schedule trigger`.
2. **Fetch Certificates**: Uses `Get many certificates` action from AWS Certificate Manager to retrieve all certificate records.
3. **Parse Data**: Processes and reformats certificate data (dates, booleans, SANs, etc.) into a clean JSON object.
4. **Generate Reports**:
   - 📄 **Markdown Report**: Uses the `Certificate Summary Markdown Agent` (OpenAI) to generate a Markdown report for PDF export.
   - 🌐 **HTML Report**: Uses the `Certificate Summary HTML Agent` to generate a styled HTML report for email.
5. **Deliver Reports**:
   - Converts Markdown to PDF and sends it to Slack as a file.
   - Sends HTML content as a formatted email.

## **How to set up**

1. **Configure AWS Credentials** in n8n to allow access to AWS ACM.
2. Create a new workflow and use the following nodes in sequence:
   - `Schedule Trigger`: Weekly (e.g., every Monday at 08:00 UTC)
   - `AWS ACM → Get many certificates`
   - `Function Node → Parse ACM Data`: Converts and summarizes certificate metadata
   - `OpenAI Chat Node (Markdown Agent)` with a system/user prompt to generate Markdown
   - `Configure Metadata` → Define file name and MIME type (`.md`)
   - `Create document file` → Converts Markdown to document stream
   - `Convert to PDF`
   - `Slack Node` → Upload the PDF to a channel
   - *(Optional)* Add a second `OpenAI Chat Node` for generating HTML and sending it via email

3. **Connect Output**:
   - Markdown report → Slack file upload
   - HTML report → Email node with embedded HTML

## **Requirements**

- 🟩 **n8n instance** (self-hosted or cloud)
- 🟦 **AWS account** with access to ACM
- 🟨 **OpenAI API key** (for ChatGPT Agent)
- 🟥 **Slack webhook or OAuth credentials** (for file upload)
- 📧 **Email integration** (e.g., SMTP or SendGrid)
- 📝 Permissions to write documents (Google Drive / file node)

## **How to customize the workflow**

- **Change report frequency**: Adjust the `Weekly schedule trigger` to daily or monthly as needed.
- **Filter certificates**:
  - Modify the function node to only include `EXPIRED`, `IN_USE`, or `INELIGIBLE` certs.
  - Add tags or domains to include/exclude.
- **Add visuals**: Enhance the HTML version with colored rows, icons, or company branding.
- **Change delivery channels**:
  - Replace Slack with Microsoft Teams, Discord, or Telegram.
  - Send Markdown as email attachment instead of PDF.
- **Integrate ticketing**:
  - Create a JIRA/GitHub issue for each certificate that is `EXPIRED` or `INELIGIBLE`.

## 📊 Basic Information

- **Workflow ID:** 7689
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 129
- **Downloads:** 12
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7689)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **awsCertificateManager** 
- **stickyNote** (×10)
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **code** 
- **httpRequest** 
- **set** (×2)
- **googleDrive** 
- **slack** 
- **sendGrid** 
- **@n8n/n8n-nodes-langchain.agent** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
