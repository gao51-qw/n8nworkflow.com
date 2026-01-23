# Send YouTube video summaries to Obsidian via Dropbox

> [![Click Here!](https://i.imgur.com/KDE34Ay.png)](https://www.youtube.com/watch?v=B6kP8vdGP1M)

---

### How it works

This workflow runs on a schedule you set (default is every 10 minutes). It fetches all videos from a specific YouTube playlist, retrieves details and transcripts for each video using RapidAPI, cleans the transcript text, and then uses OpenAI (GPT models) to generate detailed notes, YAML frontmatter, and internal links formatted for Obsidian. Finally, it assembles everything into a Markdown file, saves it to your designated Dropbox folder, and removes the processed video from the source YouTube playlist.

### Set up steps

Getting started should take about **5 minutes**. A **Quick Start Guide (PDF)** is included in the download with step-by-step instructions!

Here's a quick overview of the setup:

1.  **Connect Credentials:** Add your n8n credentials for YouTube (OAuth2), OpenAI, and Dropbox (OAuth2).
2.  **Add API Keys:**
    *   **RapidAPI:** You'll need a key for the `yt-api` service. The template uses `={{ $env["RAPIDAPI_API_KEY"] }}`. You can either set up an environment variable in n8n named `RAPIDAPI_API_KEY` *or* simply delete that expression in the "Get Video Details" and "Get Video Transcript" nodes and paste your API key directly into the `x-rapidapi-key` field.
3.  **Configure Nodes:**
    *   Update the **Playlist ID** in the "Get Playlist Videos" node to your target YouTube playlist.
    *   (Optional) Adjust the **Save Path** in the "Save Note to Dropbox" node if you want to save files to a different folder.
4.  **Activate:** Turn on the workflow.

&gt; **Bonus Trick**: Symlink the Dropbox folder (using the Dropbox desktop app) to a folder in your Obsidian vault for beautifully organized YouTube summary notes!



## 📊 Basic Information

- **Workflow ID:** 3886
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 930
- **Downloads:** 93
- **Created:** 2025/5/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3886)

## 👤 Author

- **Name:** I versus AI
- **Username:** @iversusai

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **youTube** (×2)
- **code** 
- **convertToFile** 
- **dropbox** 
- **set** (×2)
- **httpRequest** (×2)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
