# Automate GPT-4o fine-tuning with Google Sheets or Airtable data

> # Who is this for?  
Anyone curating **before/after** text examples in a spreadsheet and wanting a push-button path to a fine-tuned GPT model—without touching curl. Works with **Google Sheets** or **Airtable**.

---

# What problem does it solve?  
Manually downloading CSVs, converting to JSONL, uploading, and polling OpenAI is a slog.  
This flow automates the whole loop: grab examples flagged **Ready**, build the JSONL file, start the fine-tune, then log the resulting model ID back to a registry sheet/table for reuse.

---

# How it works  

| # | Node | Purpose |
|---|------|---------|
| 1 | **Schedule Trigger** | Runs weekly by default (change as needed). |
| 2a | **Get Examples from Sheet** | Pulls rows where `Ready = TRUE` from your Google Sheet. Uses the [JSONL-Template Sheet](https://docs.google.com/spreadsheets/d/1DvZNQKWKztvPcArkMuviUZ0tsJVw_4WiykFMI1yMfNI/edit?usp=sharing) as the expected column layout. |
| 2b | **Get Examples from Airtable** *(disabled)* | Alternate source for Airtable users. |
| 3 | **Create JSONL File** (Code) | Converts each example to chat-format JSONL and splits into `train.jsonl` / `val.jsonl` (80/20). |
| 4 | **Upload JSONL** | Uploads the training file to OpenAI (`purpose: fine-tune`). |
| 5 | **Begin Fine-Tune** | Starts a fine-tune job on `gpt-4o` (editable). |
| 6 | **Wait → Check Job → IF** | Polls every minute until `status = succeeded`. |
| 7a | **Write Model to Sheet** | Appends the new model ID + meta to your **Model Registry** sheet. |
| 7b | **Write Model to Airtable** *(disabled)* | Equivalent logging step for Airtable. |

---

# Setup steps  

1. **Import & connect credentials**  
   * Import the JSON flow into n8n.  
   * Add your **OpenAI** API key.  
   * **Google Sheets**: create an OAuth2 credential and link it to both Sheets nodes.  
   * **Airtable** (optional): create a Personal Access Token and attach it to the Airtable nodes.

2. **Copy the template sheet**  
   * Duplicate the JSONL-Template Sheet linked above into your own Drive.  
   * Required columns (**exact names**):  
     | systemPrompt | userPrompt | assistantResponse | Ready |  
   * Tick `Ready = TRUE` for rows you want to include.

3. **Create the registry sheet/table**  
   * Google Sheet (or Airtable table) named **Model Registry** with columns:  
     `Model ID`, `Training Examples`, `Epochs`, `Batch Size`, `Learning Rate`, `Finished At`.

4. **Tweak model & schedule**  
   * Change the base model in **Begin Fine-Tune** if desired.  
   * Adjust the **Schedule Trigger** for daily / on-demand runs.

5. **Test it**  
   * Mark a few examples `Ready = TRUE`.  
   * Run the flow manually.  
   * Check OpenAI for the new fine-tune job and confirm the model ID is logged in your registry.

---

# Resources  

* n8n Docs – &lt;https://docs.n8n.io/&gt;  
* OpenAI Fine-Tuning – &lt;https://platform.openai.com/docs/guides/fine-tuning&gt;  
* Google Sheets API – &lt;https://developers.google.com/sheets/api&gt;  
* Airtable API – &lt;https://airtable.com/api&gt;

---

# Extending the flow  

* **Webhook trigger** – swap the schedule for a webhook to train on demand.  
* **Multi-source merge** – enable both Sheets *and* Airtable nodes to combine datasets.  
* **Auto-deploy** – save the new model name to an env-var or Secrets Manager for downstream generation workflows.

## 📊 Basic Information

- **Workflow ID:** 4853
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 369
- **Downloads:** 36
- **Created:** 2025/6/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4853)

## 👤 Author

- **Name:** Matty Reed
- **Username:** @mattyreed1

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **wait** 
- **scheduleTrigger** 
- **set** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** 
- **if** (×2)
- **stopAndError** 
- **airtable** (×2)
- **googleSheets** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
