# Automate daily Hindu festival posts on X with Google Gemini and GPT-4o Mini 🤖

> ## ✨ Automate Daily Hindu Festival Posts on X (Twitter) with AI 🐦

This workflow automates the entire process of creating and publishing culturally rich social media content about Hindu festivals. It starts by building a comprehensive festival calendar for the year in a Google Sheet, then runs daily to post engaging, bilingual updates on X (formerly Twitter). 🗓️

The workflow uses a sophisticated dual-AI system: **Google Gemini** acts as a content generator creating multiple post options ✍️, while **OpenAI's GPT-4o Mini** acts as a discerning social media manager, selecting the very best post for publication. 🧠 This ensures your content is not only automated but also high-quality and optimized for engagement.

### How it works ⚙️

This workflow operates in two distinct stages:

**Part 1: Data Population (One-Time Manual Run)**

1.  **🔍 Fetch Festival Data:** Manually trigger the workflow to scrape a list of 2025 Hindu festivals from a public calendar using the [Jina AI Reader API](https://jina.ai/reader/).
2.  **✨ Enrich with AI:** For each festival, a **Google Gemini** model researches and extracts key details:
      * The festival's name in Hindi.
      * A concise description of its significance in English.
      * A Hindi translation of the description.
3.  **📝 Store in Google Sheets:** The enriched data for the entire year is then systematically organized and saved in a designated Google Sheet, creating a content calendar.

**Part 2: Daily Automated Posting**

1.  **⏰ Daily Trigger:** A Schedule Trigger node activates the workflow every morning at 8 AM.
2.  **✔️ Check for Festivals:** The workflow gets today's date and checks the Google Sheet to see if there is a corresponding festival.
3.  **🎨 Generate Post Options:** If a festival is scheduled for the day, **Google Gemini** generates three distinct and engaging post options for X. Each post is crafted to be concise, use a mix of English and Hindi, and include relevant emojis and hashtags.
4.  **🏆 Select the Best Post:** **OpenAI's GPT-4o Mini** then evaluates the three generated posts based on criteria like clarity, engagement potential, and effective use of language. It selects the single most impactful post.
5.  **🚀 Publish to X:** The winning post is automatically published to your connected X account.

### Features ⭐

  * **🤖 Fully Automated Content Pipeline:** From data collection to final publication, no manual intervention is needed after the initial setup.
  * **🧠 Dual-AI System:** Leverages Google Gemini for creative generation and OpenAI GPT-4o Mini for critical selection, ensuring high-quality output.
  * **🗣️ Bilingual Content:** Creates posts that blend English and Hindi to enhance cultural connection and broaden audience reach.
  * **🎯 Dynamic and Contextual:** Posts are automatically tailored to the specific festival of the day.
  * **🗓️ Centralized Content Calendar:** Uses Google Sheets as a reliable, easy-to-manage database for your yearly social media plan.

### Prerequisites 🛠️

Before you can use this workflow, you will need to:

  * Have an [n8n](https://n8n.io/) instance set up.
  * Create a new, empty **Google Sheet**.
  * Obtain credentials for the following services:
      * **Jina AI:** Get a free Bearer Token from the [Jina AI API page](https://jina.ai/reader/).
      * **Google:** Set up [Google credentials](https://docs.n8n.io/credentials/google/) (OAuth2) for the Google Sheets and Google Gemini nodes.
      * **OpenAI:** Get an API key from your [OpenAI Platform dashboard](https://platform.openai.com/api-keys).
      * **X (Twitter):** Set up [X credentials](https://docs.n8n.io/credentials/twitter/) (OAuth2) to allow n8n to post on your behalf.

### How to use this template 🚀

1.  **🔑 Set up Credentials:**
      * In n8n, go to the "Credentials" section and add new credentials for Jina AI, Google (for both Sheets and Gemini), OpenAI, and X using the API keys and tokens you obtained.
2.  **📊 Configure the Google Sheet:**
      * Create a new Google Sheet. In the first row, create the following headers exactly as written:
          * `Name of the Festival`
          * `Date`
          * ` English Description  ` (Note the trailing space)
          * `Hindi Description`
      * Open the **"Add all Rows at once"** and **"Fetch Data of Matched Date"** nodes in the workflow and connect them to your Google account and select the Sheet you just created.
3.  **▶️ Populate the Data (Manual Step):**
      * Click the **"Execute workflow"** button on the `When clicking ‘Execute workflow’` node. This will run the first part of the workflow, filling your Google Sheet with festival data for 2025. This only needs to be done once.
4.  **✅ Activate the Workflow:**
      * Save the workflow and then activate it using the toggle at the top right of the n8n canvas.
      * The workflow will now run automatically every day to post about the day's festival.

### Extending the Workflow 💡

  * **🖼️ Add Image Generation:** Integrate a node like DALL-E or Midjourney to generate a unique image for each festival and include it in the tweet.
  * **🌐 Cross-Platform Posting:** Duplicate the final "Post to X" node and adapt it to post on other platforms like Facebook, LinkedIn, or Telegram.
  * **🎨 Change the Tone:** Modify the prompts in the **"Generate Posts"** and **"Select Best Post"** nodes to change the style of your social media content—make it more formal, humorous, or poetic.
  * **📅 Use a Different Year:** Update the URL in the **"Get Festival Data"** node to fetch data for a different year. The current URL is `https://r.jina.ai/https://www.calendarlabs.com/2025-hindu-calendar`.

## 📊 Basic Information

- **Workflow ID:** 5909
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 432
- **Downloads:** 43
- **Created:** 2025/7/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5909)

## 👤 Author

- **Name:** Harsh Maniya
- **Username:** @harshmaniya1

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **googleSheets** (×2)
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×3)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **scheduleTrigger** 
- **twitter** 
- **stickyNote** (×13)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
