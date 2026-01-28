AI-Agent Code Review for GitHub Pull Requests 

# Description:

This **n8n** workflow automates the process of reviewing code changes in GitHub pull requests using an OpenAI-powered agent. 

It connects your **GitHub repo**, extracts modified files, analyzes diffs, and uses an AI agent to generate a code review based on your internal code best practices (fed from a **Google Sheet**).

It ends by posting the review as a comment on the PR and tagging it with a visual label like ✅ **Reviewed by AI**.

**🔧 What It Does**
1. Triggered on PR creation

3. Extracts code diffs from the PR

5. Formats and feeds them into an OpenAI prompt

7. Enriches the prompt using a Google Sheet of Swift best practices

9. Posts an AI-generated review as a comment on the PR

11. Applies a PR label to visually mark reviewed PRs


###  ✅ Prerequisites
Before deploying this workflow, ensure you have the following:

- n8n Instance (Self-hosted or Cloud)
- GitHub Repository with PR activity
- **OpenAI API Key** for GPT-4o, GPT-4-turbo, or GPT-3.5
- **GitHub OAuth App** (or PAT) connected to n8n to post comments and access PR diffs
- (*Optional*) **Google Sheets API credentials** if using the code best practices lookup node.
### ⚙️ Setup Instructions

**1. Import the Workflow** in n8n, click on Workflows → Import from file or JSON
Paste or upload the JSON code of this template

**2. Configure Triggers and Connections**

#### 🔁 GitHub Trigger

- **Node**: PR Trigger
- **Repository**: Select the GitHub repo(s) to monitor
- **Events**: Set to pull_request
- **Auth**: Use GitHub OAuth2 credentials

#### 📥 HTTP Request

**Node**: Get file's Diffs from PR

*No authentication needed; it uses dynamic path from trigger*

#### 🧠 OpenAI Model
- **Node**: OpenAI Chat Model

- **Model**: Select gpt-4o, gpt-4-turbo, or gpt-3.5-turbo

- **Credential**: Provide your OpenAI API Key

#### 🧑‍💻 Code Review Agent
 **Node** : Code Review Agent
*Connected to OpenAI and optionally to tools like Google Sheets*

#### 💬 GitHub Comment Poster

*Uses GitHub API to post review comments back on PR*
**Node**: GitHub Robot
**Credential**: Use the agent Github account (OAuth or PAT)
**Repo** : Pick your owen Github Repository



#### 🏷️ PR Labeler (optional)
*Adds label ReviewedByAI after successful comment*

**Node**: Add Label to PR
**Label** : you ca customize the label text of your owen tag.


#### 📊 Google Sheet Best Practices config (optional)
*Connects to a Google Sheet for coding guideline lookups, we can replace Google sheet by another tool or data base*

- First prepare your best practices list with the **clear description** and the **code bad/good** examples
- Add al the best practices in your **Google Sheet**
- **Configure** the Code **Best Practices node** in the template :
#### Credential : Use your Google Sheet account by OAuth2
#### URL : Add your Google Sheet document URL
#### Sheet : Add the name of the best practices sheet










