This workflow automates the process of retrieving Hugging Face paper summaries, analyzing them with OpenAI, and storing the results in Notion. Here’s a breakdown of how it works:

## ⏰ Scheduled Trigger: 
The flow is set to run automatically at 8 AM on weekdays.
## 📄 Fetching Paper Data: 
It fetches Hugging Face paper summaries using their API.
## 🔍 Data Check: 
Before processing, the workflow checks if the paper already exists in Notion to avoid duplicates.
## 🤖 Content Analysis with OpenAI: 
If the paper is new, it extracts the summary and uses OpenAI to analyze the content.
## 📥 Store Results in Notion: 
After analysis, the summarized data is saved in Notion for easy reference.

---

# ⚙️ Set Up Steps for Automation

Follow these steps to set up this automated workflow with Hugging Face, OpenAI, and Notion integration:

## 🔑 Obtain API Tokens: 
You’ll need the Notion and OpenAI API tokens to authenticate and connect these services with n8n.
## 🔗 Integration in n8n: 
Link Hugging Face, OpenAI, and Notion by configuring the appropriate nodes in n8n.
## 🔧 Configure Workflow Logic:
   - Set up a cron trigger for automatic execution at 8 AM on weekdays.
   - Use an HTTP request node to fetch Hugging Face paper data.
   - Add logic to check if the data already exists in Notion.
   - Set up the OpenAI integration to analyze the paper’s summary.
   - Store the results in Notion for easy access and reference.

# Result:
![huggingface.png](fileId:918)
 