# Reddit Sentiment Analysis for Apple WWDC25 with Gemini AI and Google Sheets

> This workflow automates sentiment analysis of Reddit posts related to Apple's WWDC25 event. It extracts data, categorizes posts, analyzes sentiment of comments, and updates a Google Sheet with the results. 


### Preliquisites
1. Bright Data Account: You need a Bright Data account to scrape Reddit data. Ensure you have the correct permissions to use their API. https://brightdata.com/
2. Google Sheets API Credentials: Enable the Google Sheets API in your Google Cloud project and create credentials (OAuth 2.0 Client IDs).
3. Google Gemini API Credentials: You need a Gemini API key to run the sentiment analysis. Ensure you have the correct permissions to use their API. https://ai.google.dev/". You can use any other models of choice

### Setup


1. **Import the Workflow:** Import the provided JSON workflow into your n8n instance.",
2. **Configure Bright Data Credentials:**,
In the 'scrap reddit' and the 'get status' nodes, in Header Parameters find the Authorization field, replace `Bearer 1234` with your Bright Data API key. Apply this to every node that utilizes your Bright Data API Key.,
3. **Set up the Google Sheets API credentials**,
       - In the 'Append Sentiments' node, set up the Google Sheets API by connecting your Google Sheets account through oAuth 2 credentials. ",
4. **Configure the Google Gemini Credential ID**,
     - In the ' Sentiment Analysis per comment' node, set up the Google Gemini API by connecting your Google AI account through the API credentials. ,
5. **Configure Additional Parameters:**,
    - In the 'scrap reddit' node, modify the JSON body to adjust the search term, date, or sort method.,
   - In the 'Wait' node, alter the 'Amount' to adjust the polling interval for scraping status, it is set to 15 seconds by default.,
   - In the 'Text Classifier' node, customize the categories and descriptions to suit the sentiment analysis needs. Review categories such as 'WWDC events' to ensure relevancy.,
   - In the 'Sentiment Analysis per comment' node, modify the system prompt template to improve context.
   
### customization_options

1. Bright Data API parameters to adjust scraping behavior.
2. Wait node duration to optimize polling.
3. Text Classifier categories and descriptions.
4. Sentiment Analysis system prompt. 


### Use Case Examples

- **Brand Monitoring:** Track public sentiment towards Apple during and after the WWDC25 event.
- **Product Feedback Analysis:** Gather insights into user reactions to new product announcements.
- **Competitive Analysis:** Compare sentiment towards Apple's announcements versus competitors.
- **Event Impact Assessment:** Measure the overall impact of the WWDC25 event on various aspects of Apple's business.
       
### Target_audiences: 
- Marketing professionals in the tech industry,
- Brand managers,
- Product managers,
- Market research analysts,
- Social media managers

### Troubleshooting: 
1. Workflow fails to start.
Check that all necessary credentials (Bright Data and Google Sheets API) are correctly configured and that the Bright Data API key is valid.
2. Data scraping fails.
Verify the Bright Data API key, ensure the dataset ID is correct, and inspect the Bright Data dashboard for any issues with the scraping job.
3. Sentiment analysis is inaccurate.
Refine the categories and descriptions in the 'Text Classifier' node. Check that you have the correct Google Gemini API key, as the original is a placeholder.
4. Google Sheets are not updating.
Ensure the Google Sheets API credentials have the necessary permissions to write to the specified spreadsheet and sheet. Check API usage limits.
5. Workflow does not produce the correct output.
Check the data connections, by clicking the connections, and looking at which data is being produced. Check all formulas for errors.

Happy productivity!

## 📊 Basic Information

- **Workflow ID:** 4980
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 687
- **Downloads:** 68
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4980)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×3)
- **switch** 
- **wait** 
- **@n8n/n8n-nodes-langchain.textClassifier** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **set** (×4)
- **splitOut** 
- **splitInBatches** 
- **merge** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.sentimentAnalysis** 
- **filter** 
- **stickyNote** (×9)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
