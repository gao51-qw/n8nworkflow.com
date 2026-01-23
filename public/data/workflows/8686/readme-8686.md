# LinkedIn content factory with OpenAI research & Replicate branded images

> **Template Description:**
&gt; Never run out of high-quality LinkedIn content again. This workflow is a complete content factory that takes a simple topic from a Google Sheet, uses AI to research a trending angle, writes a full post, generates a unique and **on-brand** image, and publishes it directly to your LinkedIn profile.

This template is designed for brands and creators who want to maintain a consistent, high-quality social media presence with minimal effort. The core feature is its ability to generate visuals that adhere to a specific, customizable brand style guide.

---

**🚀 What does this workflow do?**

*   Pulls content ideas from a **Google Sheet** acting as your content calendar.
*   Uses an **AI Researcher (OpenAI + SerpAPI)** to find the most recent and engaging news or trends related to your topic.
*   Employs an **AI Writer** to draft a complete, professional LinkedIn post with a catchy title, engaging text, and relevant hashtags.
*   Generates a **unique, on-brand image** for every post using Replicate, based on a customizable style guide (colors, composition, mood) defined within the workflow.
*   **Publishes the post with its image** directly to your LinkedIn profile.
*   **Updates the status** in your Google Sheet to "done" to avoid duplicate posts.

**🎯 Who is this for?**

*   **Marketing Teams:** Automate your content calendar and ensure brand consistency across all visuals.
*   **Social Media Managers:** Save hours of research, writing, and design work.
*   **Solopreneurs & Founders:** Maintain an active, professional LinkedIn presence without a dedicated content team.
*   **Content Creators:** Scale your content production and focus on strategy instead of execution.

**✨ Benefits**

*   **End-to-End Automation:** From a single keyword to a published post, the entire process is automated.
*   **Brand Consistency:** The AI image generator follows a strict, customizable style guide, ensuring all your visuals feel like they belong to your brand.
*   **Always Relevant Content:** The AI research step ensures your posts are based on current trends and news, increasing engagement.
*   **Massive Time Savings:** Automates research, copywriting, and graphic design in one seamless flow.
*   **Content Calendar Integration:** Easily manage your content pipeline using a simple Google Sheet.

**⚙️ How it Works**

1.  **Get Topic:** The workflow fetches the next "Pending" topic from your Google Sheet.
2.  **AI Research:** An AI Agent uses SerpAPI to research the topic and identify a viral angle.
3.  **AI Writing:** A second AI Agent takes the research and writes the full LinkedIn post.
4.  **Generate Image Prompt:** A `Code` node constructs a detailed prompt, merging the post's content with your defined brand style guide.
5.  **Generate Image:** The prompt is sent to Replicate. The workflow waits and checks periodically until the image is ready.
6.  **Publish:** The generated text and image are published to your LinkedIn account.
7.  **Update Status:** The workflow archives the image to Google Drive and updates the topic's status in your Google Sheet to "done".

**📋 n8n Nodes Used**

*   `Google Sheets`
*   `Langchain Agent` (with OpenAI & SerpAPI)
*   `Code`
*   `HTTP Request`
*   `Wait` / `If`
*   `LinkedIn`
*   `Google Drive`

**🔑 Prerequisites**

*   An active n8n instance.
*   **Google Account** with Sheets & Drive access (OAuth2 Credentials).
*   **OpenAI Account & API Key**.
*   **SerpAPI Account & API Key** (for the research tool).
*   **Replicate Account & API Token**.
*   **LinkedIn Account** (OAuth2 Credentials).
*   **A Google Sheet** with "Topic" and "Status" columns.

**🛠️ Setup**

1.  **Import the workflow** into your n8n instance.
2.  **Configure All Credentials:** Go through the workflow and connect your credentials for Google, OpenAI, SerpAPI, Replicate, and LinkedIn in their respective nodes.
3.  **Link Your Google Sheet:** In the `1. Get Pending Topic...` node, select your spreadsheet and sheet. Do the same for the final `8. ...Update Status` node.
4.  **Customize Your Brand Style (Highly Recommended):** In the `4. Generate Branded Image Prompt` (`Code`) node, edit the `fixedImageStyleDetails` variable. Change the RAL color codes and descriptive words to match your brand's visual identity.
5.  **Populate Your Content Calendar:** Add topics to your Google Sheet and set their status to "Pending".
6.  **Activate the workflow!**


## 📊 Basic Information

- **Workflow ID:** 8686
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 980
- **Downloads:** 98
- **Created:** 2025/9/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8686)

## 👤 Author

- **Name:** Onur
- **Username:** @onurpolat05

## 🏷️ Categories

- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.toolSerpApi** (×2)
- **set** 
- **if** 
- **manualTrigger** 
- **wait** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **code** (×2)
- **httpRequest** (×3)
- **linkedIn** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
