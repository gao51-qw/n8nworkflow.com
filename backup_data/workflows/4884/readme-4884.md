# Auto-generate AI news commentary with Dumpling AI and GPT-4o

> This workflow turns trending news into thoughtful first-person commentary for platforms like LinkedIn. It uses **Dumpling AI’s News Search and Scraping APIs** to find and extract article content, then feeds the cleaned text to **GPT-4o** to write personalized insights. The final output is saved back to **Google Sheets** as a draft for easy review or posting.

---

### ✅ What this workflow does

1. **Triggers daily** using a Schedule node.
2. **Fetches a list of content topics** from a Google Sheet.
3. **Uses Dumpling AI** to search for relevant news articles based on each topic.
4. **Scrapes the article content** with Dumpling AI’s `/scrape` endpoint.
5. **Cleans and aggregates the article content** using a Code node.
6. **Generates first-person commentary** with GPT-4o tailored for LinkedIn.
7. **Appends the generated post** back to the Google Sheet next to its topic.

---

### 🧩 Nodes in this workflow

- **Schedule Trigger**: Starts the workflow daily.
- **Google Sheets (Read Topics)**: Pulls topic rows that don’t have a generated commentary yet.
- **Split In Batches**: Processes each topic one at a time.
- **Wait**: Adds a delay to manage API limits.
- **HTTP Request (Search News)**: Uses Dumpling AI's `/search-news` to find relevant articles for the topic.
- **Split Out**: Iterates over the list of article results.
- **HTTP Request (Scrape Article)**: Extracts the full article text using Dumpling AI’s `/scrape`.
- **Aggregate**: Collects and merges article content fields.
- **Code (Clean Article)**: Strips links, formatting, and irrelevant text.
- **OpenAI (GPT-4o)**: Generates a short, first-person LinkedIn post-style commentary using a custom prompt.
- **Google Sheets (Write Back)**: Appends the final output next to the original topic in the sheet.

---

### 🧑‍💼 Who is this for?

- **Founders, content creators, marketers**, or **agency teams** looking to maintain an active presence on LinkedIn or newsletters by sharing smart takes on industry trends.

---

### 💡 What problem does this solve?

Most people want to comment on current events but don't have the time to summarize articles or write well-structured posts. This automation saves hours of manual work by:
- Finding the right article.
- Extracting and cleaning the content.
- Writing it in a natural, first-person voice using AI.

---

### ⚙️ What you need to use this:

- A **Google Sheet** with at least two columns: `topic` and `generated commentary`.
- A **Dumpling AI API Key** with access to the `/search-news` and `/scrape` endpoints.
- An **OpenAI GPT-4o connection**.

---


## 📊 Basic Information

- **Workflow ID:** 4884
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 586
- **Downloads:** 58
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4884)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **noOp** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **splitInBatches** 
- **wait** 
- **httpRequest** (×2)
- **splitOut** 
- **aggregate** 
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
