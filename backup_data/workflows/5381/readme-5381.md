# Automate startup research & profiling with Extruct AI to Google Sheets

> **Who’s it for:**  
Investors, analysts, and startup enthusiasts who need a complete overview of startups, including industry, product, funding, and leadership information.

**How it works / What it does:**  
Enter a startup’s name into the form, and the workflow will automatically collect and organize details such as the company’s industry, product, investors, and key decision-makers. All this information is neatly updated in your Google Sheet, making it easy to track and compare startups.

**How to set up:**  
1. Sign up for Extruct at [www.extruct.ai/](https://www.extruct.ai/?utm_source=n8n_workflows&utm_medium=referral&utm_campaign=n8n_startup_overview).  
2. Open the Extruct table template, copy the table ID from the URL, and save it.  
3. Copy the Google Sheets template to your own Drive.  
4. Paste the table ID into the variables node in your n8n flow.  
5. Set up Bearer authentication in each HTTP Request node using your Extruct API token.  
6. In the Google Sheets node, paste your template link and connect your Google account.  
7. Run the flow once to reveal the mapping fields, then match each field to the correct column.  
8. Activate the flow and add startups via the form.

**Requirements:**  
- Extruct account and API token  
- Extruct table template  
- Google account with Google Sheets

**How to customize the workflow:**  
Add new columns in both the Extruct table and your Google Sheet, then map them in the Google Sheets node to track additional startup data.

## 📊 Basic Information

- **Workflow ID:** 5381
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 598
- **Downloads:** 59
- **Created:** 2025/6/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5381)

## 👤 Author

- **Name:** Extruct AI
- **Username:** @extruct-ai

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×3)
- **if** 
- **wait** 
- **googleSheets** 
- **set** 
- **code** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
