# Generate AI-ready llms.txt files from Screaming Frog website crawls

> This workflow helps you generate an **llms.txt** file (if you're unfamiliar with it, check out [this article](https://towardsdatascience.com/llms-txt-414d5121bcb3/)) using a **Screaming Frog export**.  

[Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) is a well-known website crawler.  
You can easily crawl a website. Then, export the **"internal_html"** section in CSV format.  

## How It Works: 

A **form** allows you to enter:  
- The **name of the website**  
- A **short description**  
- The **internal_html.csv** file from your Screaming Frog export  


Once the form is submitted, the **workflow is triggered automatically**, and you can **download the llms.txt file directly from n8n**. 

## Downloading the File
Since the last node in this workflow is **"Convert to File"**, you will need to **download the file directly from the n8n UI**.  
However, you can easily **add a node** (e.g., Google Drive, OneDrive) to automatically upload the file **wherever you want**.  

## AI-Powered Filtering (Optional):  
This workflow includes a **text classifier node**, which is **deactivated by default**.  
- You can **activate it** to apply a more **intelligent filter** to select URLs for the `llms.txt` file.  
- Consider modifying the **description** in the classifier node to specify the type of URLs you want to include.  

## How to Use This Workflow  

1. **Crawl the website** you want to generate an `llms.txt` file for using **Screaming Frog**.  
2. **Export the "internal_html"** section in CSV format.  
   ![Screaming Frog internal html export](https://i.imgur.com/M0nJQiV.png)  
3. In **n8n**, click **"Test Workflow"**, fill in the form, and **upload** the `internal_html.csv` file.  
4. Once the workflow is complete, go to the **"Export to File"** node and **download the output**.  

**That's it! You now have your llms.txt file!**  



**Recommended Usage:**  
Use this workflow **directly in the n8n UI by clicking** 'Test Workflow' and uploading the file in the form.

## 📊 Basic Information

- **Workflow ID:** 3219
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 3547
- **Downloads:** 354
- **Created:** 2025/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3219)

## 👤 Author

- **Name:** Dataki
- **Username:** @dataki

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×11)
- **set** (×3)
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **noOp** (×2)
- **filter** 
- **summarize** 
- **formTrigger** 
- **extractFromFile** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
