# Remove personally identifiable information (PII) from CSV files with OpenAI

> # What this workflow does
- Monitors Google Drive: The workflow triggers whenever a new CSV file is uploaded.
- Uses AI to Identify PII Columns: The OpenAI node analyzes the data and identifies PII-containing columns (e.g., name, email, phone).
- Removes PII: The workflow filters out these columns from the dataset.
- Uploads Cleaned File: The sanitized file is renamed and re-uploaded to Google Drive, ensuring the original data remains intact.


# How to customize this workflow to your needs
- Adjust PII Identification: Modify the prompt in the OpenAI node to align with your specific data compliance requirements.
- Include/Exclude File Types: Adjust the Google Drive Trigger settings to monitor specific file types (e.g., CSV only).
- Output Destination: Change the folder in Google Drive where the sanitized file is uploaded.

# Setup
### Prerequisites:
- A Google Drive account.
- An OpenAI API key.
### Workflow Configuration:
- Configure the Google Drive Trigger to monitor a folder for new files.
- Configure the OpenAI Node to connect with your API
- Set the Google Drive Upload folder to a different location than the Trigger folder to prevent workflow loops.

## 📊 Basic Information

- **Workflow ID:** 2779
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1732
- **Downloads:** 173
- **Created:** 2025/1/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2779)

## 👤 Author

- **Name:** Artur
- **Username:** @arlusm1

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **googleDrive** (×2)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **merge** 
- **splitOut** (×2)
- **code** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
