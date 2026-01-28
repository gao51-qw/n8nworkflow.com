# Extract Google Trends keywords & summarize articles in Google Sheets

> Stay ahead of trends by automating your content research. This workflow fetches trending keywords from Google Trends RSS, extracts key insights from top articles, and saves structured summaries in Google Sheets—helping you build a data-driven editorial plan effortlessly.  

## **How it works**  

1. **Fetch Google Trends RSS** – The workflow retrieves trending keywords along with three related article links.  
2. **Extract & Process Content** – It fetches the content of these articles, cleans the HTML, and generates a concise summary using Jina AI.  
3. **Store in Google Sheets** – The processed insights, including the trending keyword and summary, are saved in a pre-configured Google Sheet.  

## **Setup Steps**  

1. **Prepare a Google Sheet** – Ensure you have a Google Sheet ready to store the extracted data.  
2. **Configure API Access** – Set up Google Sheets API and any required authentication.
3. Get Jina.ai API key
4. **Adjust Workflow Settings** – A dedicated configuration node allows you to fine-tune how data is processed and stored.  

## **Customization**  

- Modify the **RSS source** to focus on specific Google Trends regions or categories.  
- Adjust the **content processing logic** to refine how article summaries are created.  
- Expand the workflow to **integrate with CMS** (e.g., WordPress) for automated content planning.  

This workflow is ideal for **content strategists, SEO professionals, and news publishers** who want to quickly identify and act on trending topics without manual research. 🚀  

## **Google Sheets Fields**  

Copy and paste these column headers into your Google Sheet:  

| Column Name            | Description |
|------------------------|-------------|
| `status`              | Initial status of the keyword (e.g., "idea") |
| `trending_keyword`    | Trending keyword extracted from Google Trends |
| `approx_traffic`      | Estimated traffic for the trending keyword |
| `pubDate`            | Date when the keyword was fetched |
| `news_item_url1`      | URL of the first related news article |
| `news_item_title1`    | Title of the first news article |
| `news_item_url2`      | URL of the second related news article |
| `news_item_title2`    | Title of the second news article |
| `news_item_url3`      | URL of the third related news article |
| `news_item_title3`    | Title of the third news article |
| `news_item_picture1`  | Image URL from the first news article |
| `news_item_source1`   | Source of the first news article |
| `news_item_picture2`  | Image URL from the second news article |
| `news_item_source2`   | Source of the second news article |
| `news_item_picture3`  | Image URL from the third news article |
| `news_item_source3`   | Source of the third news article |
| `abstract`            | AI-generated summary of the articles (limited to 49,999 characters) |

### **Instructions**
1. Open Google Sheets and create a new spreadsheet.
2. Copy the column names from the table above.
3. Paste them into the first row of your Google Sheet.

## 📊 Basic Information

- **Workflow ID:** 3132
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 17984
- **Downloads:** 1798
- **Created:** 2025/3/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3132)

## 👤 Author

- **Name:** Miko
- **Username:** @mdmiko

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **xml** 
- **httpRequest** (×4)
- **set** (×2)
- **googleSheets** (×2)
- **splitInBatches** 
- **code** 
- **scheduleTrigger** 
- **stickyNote** (×11)
- **if** 
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
