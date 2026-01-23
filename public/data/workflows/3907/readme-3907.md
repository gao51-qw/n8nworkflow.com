# Generate riddle shorts & post on YouTube with Sonnet 3.5, Pinecone & Creatomate

> This workflow allows you to generate riddle-themed vertical videos (9:16), render them using Creatomate, and upload them directly to YouTube — all automatically. It's optimized for low-cost operation while still integrating AI and automation at key stages.

Here is a sample: [https://youtube.com/shorts/svhgti9L6Fw?feature=share](https://youtube.com/shorts/svhgti9L6Fw?feature=share)

---

### 🔄 Workflow Overview

This is a **schedule-triggered** workflow that:

1. **Generates riddles with answers** using an AI agent.
2. **Checks Pinecone** vector store to avoid repeating riddles.
3. **Inserts new riddles** into Pinecone under a namespace structured by `month/year` for easier indexing.
4. **Fetches an unused music track URL** for video background.
5. **Generates a video** using Creatomate with the riddles and audio.
6. **Uploads the video to YouTube** via a custom HTTP request with OAuth.
7. **Updates the worksheet and riddle numbering**, and notifies via email.

---

### 🔗 Integration Guide

#### 🔎 Pinecone Setup

* You need an active Pinecone account with an index created.
* The vector index should be accessible from n8n.
* Follow \[n8n's Pinecone Node Documentation] for help setting up credentials and connecting.

#### 📝 Google Sheet Setup

1. Open the sheets template provided in the Gumroad documentation pdf.
2. Make a copy to your Google Drive.
3. Set up the required credentials in n8n and link the Google Sheets node to your new copy.

#### 🎧 Audio Tracks

* Get copyright-free tracks from [Royalty Free Music Library](https://royaltyfreemusiclibrary.com/).
* Ensure files are in `.mp3` format for compatibility.

#### 🎞️ Background Videos (Optional)

* For optional background visuals, use free stock videos from [Pexels](https://www.pexels.com/videos/).

---

### 💡 Creatomate Setup

1. Create a Creatomate account at \[creatomate.com].
2. Create a **9:16 aspect ratio** template.
3. Press **F12** to open the source editor.
4. Download the Creatomate JSON file from the Gumroad page and paste its contents into the source editor.
5. Refresh the page and click **"Use Template" &gt; API Integration**.
6. Copy the **cURL**.
7. From the cURL, extract your `Bearer Token` and `Template ID`.
8. Paste them in the respective fields in the `Creatomate Render Node` inside n8n.

---

### 📉 YouTube Upload Configuration

1. Inside n8n, set up a **YouTube OAuth credential**.
2. Search for "YouTube" in the credentials list and select the OAuth type.
3. Use the Custom HTTP Request node with `multipart/form-data` to upload the video using:

   * Title (e.g., "Riddles4U #001")
   * Description
   * Video file binary
   * Category ID (find ID here: [https://gist.github.com/dgp/1b24bf2961521bd75d6c](https://gist.github.com/dgp/1b24bf2961521bd75d6c))

---

### 🔄 Workflow Logic Detail

1. **Riddle Generation**

   * Checks Pinecone vector store for existing riddles (to avoid duplicates).
   * Generates 4 new riddles with answers.
   * Stores them in Pinecone under `month/year` namespace.
   * Extracts a numbered title for current riddle post (e.g., Riddles4U #001).
   * Prepares next riddle title counter (but only updates after YouTube post succeeds).

2. **Track URL Fetching**

   * Pulls the first unused track from Google Sheets.

3. **Render & Upload**

   * Sends the riddles + track to Creatomate for rendering.
   * Fetches binary video and uploads it directly to YouTube via HTTP.
   * Note: For video source url, I downloaded a video, uploaded it to drive and used that video drive link. You can add a new sheet and rotate videos too, although youtube likes consistency in shorts so I think it is best to have one very beautiful and calm background video then change to a new one after some months or when you generate like 50 shorts. 


4. **Post Actions**

   * Sends email with YouTube video link.
   * Marks used audio row as "used".
   * Updates to next riddle title.
   * If all tracks have been used, resets them to "unused".

---

### 🚀 Customization Ideas

* Add AI-generated voiceover to the riddles.
* Replace riddles with trivia, quotes, or jokes.
* Integrate TikTok or Instagram upload APIs for multichannel publishing.

---

### ✉️ Support

Refer to the **comprehensive setup guide** included in the Gumroad download folder to configure your template, credentials, and API keys correctly.

This is a beginner-friendly, low-cost automation you can build on for more advanced content pipelines. Happy building!

You can find me on [twitter](https://x.com/juppfy) and via [email](mailto:joseph@uppfy.com) incase you need any custom n8n workflows or wanna chat.


## 📊 Basic Information

- **Workflow ID:** 3907
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 914
- **Downloads:** 91
- **Created:** 2025/5/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3907)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 
- **merge** 
- **wait** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.vectorStorePinecone** (×2)
- **googleSheets** (×7)
- **code** (×2)
- **httpRequest** (×4)
- **gmail** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 26 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
