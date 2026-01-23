# Generate AI-powered lease renewal offers with Ollama LLM, Supabase and Gmail

> # 📄 Automated Lease Renewal Offer by Email

## ✅ Features
- Automated Lease Offer Generation using AI (Ollama model).
- Duplicate File Check to avoid reprocessing the same customer.
- Personalized Offer Letter creation based on customer details from Supabase.
- PDF/Text File Conversion for formatted output.
- Automatic Google Drive Management for storing and retrieving files.
- Email Sending with generated offer letter attached.
- Seamless Integration with Supabase, Google Drive, Gmail, and AI LLM.

## ⚙️ How It Works
1. Trigger: Workflow starts on form submission with customer details.

2. Customer Lookup:

- Searches Supabase for customer data.
- Updates customer information if needed.

3. File Search & Duplication Check:

- Looks for existing lease offer files in Google Drive.

- If duplicate found, deletes old file before proceeding.

4. AI Lease Offer Creation:

- Uses the LLM Chain (offerLetter) to generate a customized lease renewal letter.

5. File Conversion:

- Converts AI-generated text into a downloadable file format.

6. Upload to Drive:

- Saves the new lease offer in Google Drive.

7. Email Preparation:

- Uses Basic LLM Chain-email to draft the email body.

- Downloads the offer file from Drive and attaches it.

8. Email Sending:

- Sends the renewal offer email via Gmail to the customer.

## 🛠 Setup Steps
1. Supabase Connection:

- Add Supabase credentials in n8n.

- Ensure a customers table exists with relevant columns.

## 🔜Future Steps
- Add specific letter template (organization template).
- PDF offer letter


## 📊 Basic Information

- **Workflow ID:** 7201
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 279
- **Downloads:** 27
- **Created:** 2025/8/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7201)

## 👤 Author

- **Name:** Lakindu Siriwardana
- **Username:** @laki99

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOllama** 
- **set** 
- **formTrigger** 
- **convertToFile** 
- **gmail** 
- **supabase** (×2)
- **googleDrive** (×4)
- **if** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
