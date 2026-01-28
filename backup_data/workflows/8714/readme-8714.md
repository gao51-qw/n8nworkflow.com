# Extract and analyze web data with Bright Data & Google Gemini

> This workflow performs structured data extraction and data mining from a web page by combining the capabilities of Bright Data and Google Gemini.

#### **How it Works**

This workflow focuses on extracting structured data from a web page using Bright Data's Web Unlocker Product. It then uses n8n's AI capabilities, specifically Google Gemini Flash Exp, for information extraction and custom sentiment analysis. The results are sent to webhooks and saved as local files.

#### **Use Cases**

- **Data Mining**: Automating the process of extracting and analyzing data from websites.

- **Web Scraping**: Gathering structured data for market research, competitive analysis, or content aggregation.

- **Sentiment Analysis**: Performing custom sentiment analysis on unstructured text.

#### **Setup Instructions**

1. **Bright Data Credentials**: You need to have an account and a Web Unlocker zone with Bright Data. Update the Header Auth account credentials in the **Perform Bright Data Web Request** node.

2. **Google Gemini Credentials**: Provide your Google Gemini(PaLM) Api account credentials for the AI-related nodes.

3. **Configure URL and Zone**: In the **Set URL and Bright Data Zone** node, set the web URL you want to scrape and your Bright Data zone.

4. **Update Webhook**: Update the Webhook Notification URL in the relevant HTTP Request nodes.

#### **Workflow Logic**

1. **Trigger**: The workflow is triggered manually.

2. **Set Parameters**: It sets the target URL and the Bright Data zone.

3. **Web Request**: The workflow performs a web request to the specified URL using Bright Data's Web Unlocker. The output is formatted as markdown.

4. **Data Extraction & Analysis**: The markdown content is then processed by multiple AI nodes to:

   - Extract textual data from the markdown.

   - Perform topic analysis with a structured response.

   - Analyze trends by location and category with a structured response.

5. **Output**: The extracted data and analysis are sent to webhooks and saved as JSON files on disk.

#### **Node Descriptions**

| Node Name | Description |
|-----------|-------------|
| **When clicking 'Test workflow'** | A manual trigger node to start the workflow. |
| **Set URL and Bright Data Zone** | A Set node to define the URL to be scraped and the Bright Data zone to be used. |
| **Perform Bright Data Web Request** | An httpRequest node that performs the web request to Bright Data's API to retrieve the content. |
| **Markdown to Textual Data Extractor** | An AI node that uses Google Gemini to convert markdown content into plain text. |
| **Google Gemini Chat Model** | A node representing the Google Gemini model used for the data extraction. |
| **Topic Extractor with the structured response** | An AI node that performs topic analysis and outputs the results in a structured JSON format. |
| **Trends by location and category with the structured response** | An AI node that analyzes and clusters emerging trends by location and category, outputting a structured JSON. |
| **Initiate a Webhook Notification...** | These nodes send the output of the AI analysis to a webhook. |
| **Create a binary file...** | Function nodes that convert the JSON output into binary format for writing to a file. |
| **Write the topics/trends file to disk** | readWriteFile nodes that save the binary data to a local file (d:\topics.json and d:\trends.json). |

#### **Customization Tips**

- Change the web URL in the **Set URL and Bright Data Zone** node to scrape different websites.

- Modify the AI prompts in the AI nodes to customize the analysis (e.g., change the sentiment analysis criteria).

- Adjust the output path in the readWriteFile nodes to save the files to a different location.

#### **Suggested Sticky Notes for Workflow**

- **Note**: "This workflow deals with the structured data extraction by utilizing Bright Data Web Unlocker Product... Please make sure to set the web URL of your interest within the 'Set URL and Bright Data Zone' node and update the Webhook Notification URL".

- **LLM Usages**: "Google Gemini Flash Exp model is being used... Information Extraction is being used for the handling the custom sentiment analysis with the structured response".

#### **Required Files**

- 1GOrjyc9mtZCMvCr_Structured_Data_Extract,_Data_Mining_with_Bright_Data_&_Google_Gemini.json: The main n8n workflow export for this automation.

#### **Testing Tips**

- Run the workflow and check the webhook to verify that the extracted data is being sent correctly.

- Confirm that the d:\topics.json and d:\trends.json files are created on your disk with the expected structured data.

#### **Suggested Tags & Categories**

- Engineering

- AI

## 📊 Basic Information

- **Workflow ID:** 8714
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 223
- **Downloads:** 22
- **Created:** 2025/9/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8714)

## 👤 Author

- **Name:** Amit Mehta
- **Username:** @amitswba

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **set** 
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **function** (×2)
- **readWriteFile** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
