# Create a Lookio RAG assistant from a CSV text corpus

> 
This advanced template automates the creation of a **[Lookio](https://www.lookio.app)** Assistant populated with a specific corpus of text. Instead of uploading files one by one, you can simply upload a CSV containing multiple text resources. The workflow iterates through the rows, converts them to text files, uploads them to Lookio, and finally creates a new Assistant with strict access limited to these specific resources.

## Who is this for?

* **Knowledge Managers** who want to spin up specific "Topic Bots" (e.g., an "RFP Bot" or "HR Policy Bot") based on a spreadsheet of Q&As or articles.
* **Product Teams** looking to bulk-import release notes or documentation to test RAG (Retrieval-Augmented Generation) responses.
* **Automation Builders** who need a reference implementation for looping through CSV rows, converting text strings to binary files, and aggregating IDs for a final API call.

## What is the RAG platform Lookio for knowledge retrieval?

**Lookio** is an API-first platform that solves the complexity of building **RAG (Retrieval-Augmented Generation)** systems. While tools like NotebookLM are great for individuals, Lookio is built for business automation.

It handles the difficult backend work—file parsing, chunking, vector storage, and semantic retrieval—so you can focus on the workflow.

* **API-First:** Unlike consumer AI tools, Lookio allows you to integrate your knowledge base directly into n8n, Slack, or internal apps.
* **No "DIY" Headache:** You don't need to manage a vector database or write chunking algorithms.
* **Free to Start:** You can sign up without a credit card and get 100 free credits to test this workflow immediately.

## What problem does this workflow solve?

* **Bulk Ingestion:** Converts a CSV export (with columns for Title and Content) into individual text resources in Lookio.
* **Automated Provisioning:** Eliminates the manual work of creating an Assistant and selecting resources one by one.
* **Dynamic Configuration:** Allows the user to define the Assistant's specific name, context (system prompt), and output guidelines directly via the upload form.

## How it works

1. **Form Trigger:** The user uploads a CSV and specifies the Assistant details (Name, Context, Guidelines) and maps the CSV column names.
2. **Parsing:** The workflow converts the CSV to JSON and uses the **Convert to File** node to transform the raw text content of each row into a binary `.txt` file.
3. **Loop & Upload:** It loops through the items, uploading them via the Lookio **Add Resource** API (`/webhook/add-resource`), and collects the returned `Resource ID`s.
4. **Creation:** Once all files are processed, it aggregates the IDs and calls the **Create Assistant** API (`/webhook/create-assistant`), setting the `resources_access_type` to "Limited selection" so the bot relies only on the uploaded data.
5. **Completion:** Returns the new Assistant ID and a success message to the user.

## CSV File Requirements

Your CSV file should look like this (headers can be named anything, as you will map them in the form):

| Title | Content |
| --- | --- |
| How to reset password | Go to settings, click security, and press reset... |
| Vacation Policy | Employees are entitled to 20 days of PTO... |

## How to set up

1. **Lookio Credentials:** Get your **API Key** and **Workspace ID** from your [Lookio API Settings](https://www.lookio.app) (Free to sign up).
2. **Configure HTTP Nodes:**
* Open the **Import resource to Lookio** node: Update headers (`api_key`) and body (`workspace_id`).
* Open the **Create Lookio assistant** node: Update headers (`api_key`) and body (`workspace_id`).


3. **Form Configuration (Optional):** The form is pre-configured to ask for column mapping, but you can hardcode these in the "Convert to txt" node if you always use the same CSV structure.
4. **Activate & Share:** Activate the workflow and use the **Production URL** from the Form Trigger to let your team bulk-create assistants.

## 📊 Basic Information

- **Workflow ID:** 11877
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 0
- **Downloads:** 0
- **Created:** 2025/12/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11877)

## 👤 Author

- **Name:** Guillaume Duvernay
- **Username:** @duv

## 🏷️ Categories

- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×4)
- **convertToFile** 
- **splitInBatches** 
- **extractFromFile** 
- **formTrigger** 
- **aggregate** 
- **set** 
- **form** 
- **httpRequest** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
