# Automate weekly tutorials from trending GitHub repos with Gemini AI to WordPress

> ## Overview: GitHub to WordPress Tutorial Generator

This workflow automates the process of creating technical tutorials for your blog. It runs on a weekly schedule, automatically identifies trending GitHub repositories, uses an AI to generate a detailed tutorial for each one, and then saves the content as a draft post on your WordPress site. Finally, it sends you an email notification so you can review and publish the new content. This is an excellent way to keep your blog fresh with relevant, trending topics without manual effort.

***

## How It Works

1.  **Weekly Trigger**: The workflow is set to activate every Monday at 10 AM, starting the entire process.
2.  **Get Trending Repositories**: The workflow makes an **HTTP request** to the GitHub API to find the most popular repositories.
3.  **Split Items**: The **Split** node processes the list of repositories from the GitHub API, handling each one as a separate item. This ensures that a unique tutorial is created for every trending repository.
4.  **AI Tutorial Generation**: The **AI Tutorial Generator** node, powered by the **Google Gemini Chat Model**, takes the information for each repository and, following a detailed prompt, creates a comprehensive tutorial. The prompt instructs the AI to include an introduction, prerequisites, code examples, best practices, and more.
5.  **Format Content**: A **Code** node then processes the AI's output. It extracts the title and content, ensuring the data is correctly formatted for the next steps. It's a key step to handle potential variations in the AI's output.
6.  **Create WordPress Post**: The **WordPress** node takes the formatted tutorial content and creates a new post on your blog, automatically setting the title, tags, and categories. It's saved as a **draft**, allowing you to review and edit it before publishing.
7.  **Send Notification**: Once the post is created, the **Email** node sends a notification to your email address, letting you know a new tutorial is ready for your review.

***

## Setup Steps

1.  **Configure WordPress Credentials**: In the **Create Tutorial Post** node, add your WordPress credentials. This includes your site URL, username, and application password.
2.  **Set Up Email Credentials**: In the **Notify Admin** node, add your email service credentials (e.g., SMTP, Gmail) to enable sending email notifications.
3.  **Configure GitHub API Access**:
    * **Manual Mapping**: Run the **Get Trending Repos** node once to get sample data.
    * In the **Split Repository Items** node, manually map the data by setting the **"Field to Split Out"** to `json.items`. This tells the workflow to process each repository in the API response.
    * **Optional**: For higher API limits, you can create a GitHub Personal Access Token and configure the **Get Trending Repos** node to use it.
4.  **Review AI Prompt**: Go to the **AI Tutorial Generator** node and read the system message. You can adjust the prompt to change the style, length, or content of the tutorials the AI generates.



## 📊 Basic Information

- **Workflow ID:** 7417
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 526
- **Downloads:** 52
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7417)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **wordpress** 
- **emailSend** 
- **splitOut** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
