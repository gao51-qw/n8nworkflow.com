# Benchmark LLM performance on legal documents with Google Sheets and OpenRouter

> This workflow demonstrates a simple way to run evals on a set of test cases stored in a Google Sheet.

The example we are using comes from an info extraction task dataset, where we tested 6 different LLMs on 18 different test cases.

This workflow extends the functionality of my simple eval for benchmarking legal tasks [here](https://n8n.io/workflows/4712-simple-eval-for-legal-benchmarking/).

Rather than running executions sequentially (waiting for each one to respond before making another request), we use parallel processing to fire 2 requests every second.

You can see our sample data in this spreadsheet [here](https://docs.google.com/spreadsheets/d/10l_gMtPsge00eTTltGrgvAo54qhh3_twEDsETrQLAGU/edit?usp=sharing) to get started.

Once you have this working for our dataset, you can plug in your own test cases matching different LLMs to see how it works with your own data.

## How it works
- Pull our test cases from Google Sheets.
- For each case, fire off an HTTP request to a webhook.
- That webhook grabs the relevant source file from Google Drive and converts it to text.
- The text gets sent to an LLM via Open Router (so we can easily swap out models).
- Results come back and are logged in Google Sheets.


## Set up steps:
- Add your credentials for Google Sheets, Google Drive, and [OpenRouter](https://openrouter.ai/).
- Make a copy of the [original data spreadsheet](https://docs.google.com/spreadsheets/d/10l_gMtPsge00eTTltGrgvAo54qhh3_twEDsETrQLAGU/edit?usp=sharing) so that you can edit it yourself. You will need to plug your version in the Update Results node to see the spreadsheet update on each run of the loop.

## 📊 Basic Information

- **Workflow ID:** 5066
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 661
- **Downloads:** 66
- **Created:** 2025/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5066)

## 👤 Author

- **Name:** Adam Janes
- **Username:** @adamjanes

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **webhook** 
- **merge** 
- **googleSheets** (×2)
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **googleDrive** 
- **extractFromFile** 
- **set** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **stickyNote** (×8)
- **limit** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
