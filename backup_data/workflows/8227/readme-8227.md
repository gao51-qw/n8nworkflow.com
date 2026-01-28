# 🎓 Learn evaluate tool. Tutorial for beginners with Gemini and Google Sheets

> 
This workflow is a beginner-friendly tutorial demonstrating how to use the **Evaluation tool** to automatically score the AI’s output against a known correct answer (“ground truth”) stored in a Google Sheet.


---

### **Advantages**

* ✅ **Beginner-friendly** – Provides a simple and clear structure to understand AI evaluation.
* ✅ **Flexible input sources** – Works with both Google Sheets datasets and manual test entries.
* ✅ **Integrated with Google Gemini** – Leverages a powerful AI model for text-based tasks.
* ✅ **Tool usage** – Demonstrates how an AI agent can call external tools (e.g., calculator) for accurate answers.
* ✅ **Automated evaluation** – Outputs are automatically compared against ground truth data for factual correctness.
* ✅ **Scalable testing** – Can handle multiple dataset rows, making it useful for structured AI model evaluation.
* ✅ **Result tracking** – Saves both answers and correctness scores back to Google Sheets for easy monitoring.

---

### **How it Works**

The workflow operates in two distinct modes, determined by the trigger:
1.  **Manual Test Mode:** Triggered by "When clicking 'Execute workflow'". It sends a fixed question ("How much is 8 * 3?") to the AI agent and returns the answer to the user. This mode is for quick, ad-hoc testing.
2.  **Evaluation Mode:** Triggered by "When fetching a dataset row". This mode reads rows of data from a linked Google Sheet. Each row contains an `input` (a question) and an `expected_output` (the correct answer). It processes each row as follows:
    *   The `input` question is sent to the **AI Agent** node.
    *   The AI Agent, powered by a **Google Gemini** model and equipped with a **Calculator** tool, processes the question and generates an answer (`output`).
    *   The workflow then checks if it's in evaluation mode.
    *   Instead of just returning the answer, it passes the AI's `actual_output` and the sheet's `expected_output` to another **Evaluation node**.
    *   This node uses a second **Google Gemini** model as a "judge" to evaluate the factual correctness of the AI's answer compared to the expected one, generating a `Correctness` score on a scale from 1 to 5.
    *   Finally, both the AI's `actual_output` and the automated `correctness` score are written back to a new column in the same row of the Google Sheet.

---

### **Set up Steps**

To use this workflow, you need to complete the following setup steps:

1.  **Credentials Configuration:**
    *   Set up the **Google Sheets OAuth2 API** credentials (named "Google Sheets account"). This allows n8n to read from and write to your Google Sheet.
    *   Set up the **Google Gemini (PaLM) API** credentials (named "Google Gemini(PaLM) (Eure)"). This provides the AI language model capabilities for both the agent and the evaluator.

2.  **Prepare Your Google Sheet:**
    *   The workflow is pre-configured to use a specific Google Sheet. You must **clone** the provided template sheet (the URL is in the Sticky Note) to your own Google Drive.
    *   In your cloned sheet, ensure you have at least two columns: one for the input/question (e.g., `input`) and one for the expected correct answer (e.g., `expected_output`). You may need to update the node parameters that reference `$json.input` and `$json.expected_output` to match your column names exactly.

3.  **Update Document IDs:**
    *   After cloning the sheet, get its new Document ID from its URL and update the `documentId` field in **all three Evaluation nodes** ("When fetching a dataset row", "Set output Evaluation", and "Set correctness") to point to your new sheet instead of the original template.

4.  **Activate the Workflow:**
    *   Once the credentials and sheet are configured, toggle the workflow to **Active**. You can then trigger a manual test run or set the "When fetching a dataset row" node to poll your sheet automatically to evaluate all rows.
----

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).


## 📊 Basic Information

- **Workflow ID:** 8227
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 484
- **Downloads:** 48
- **Created:** 2025/9/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8227)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **evaluationTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **manualTrigger** 
- **evaluation** (×4)
- **noOp** 
- **set** (×3)
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
