# Seo blog content automation with GPT-4o-mini and human approval in Google Docs

> ## Overview
This n8n workflow automates the entire content creation process for SEO blog posts, from topic submission and AI drafting to human approval, revision, and final storage in Google Docs. It ensures high-quality, SEO-optimized content is generated efficiently while keeping a human in the loop for quality control.

## Prerequisites
To use this workflow, you need the following accounts and credentials:

#### Google Sheets Account: 
To manage the content tracker. The sheet must contain columns for Topic, Reference URL, Title, Status, and Link to document.

#### OpenAI API Key (for GPT-4o-mini): 
To power the initial content drafting and subsequent revisions.

#### Gmail Account: 
To send the content for human approval and wait for feedback.

#### Google Docs Account: 
To create and store the final approved blog posts.


## How It Works
The workflow operates in four main stages: Topic Submission, AI Content Creation, Human Approval & Revision Loop, and Final Publishing.

#### Stage 1: Topic Submission and Tracking
This stage captures a new blog topic and adds it to the content tracker.

On form submission (Form Trigger): The workflow is initiated when a user submits a Topic and an optional Reference link through the form.

Append row in sheet (Google Sheets): The new topic and reference link are added as a new row in your content tracker sheet.

Get Topic from Google Sheets: The workflow fetches the newly added row, including the system-generated row_number for tracking updates.

#### Stage 2: AI Content Creation (Initial Draft)
The workflow uses an expert AI agent to generate the first draft of the blog post.

Copywriter AI Agent: Acting as an expert SEO content strategist, the agent receives the topic and reference URL.

The agent improves the provided topic into an SEO-optimized title.

It writes a complete, conversational, SEO-friendly blog post (800–1200 words) using proper Markdown headings and lists.

OpenAI Chat Model (GPT-4o-mini): Powers the agent's generation.

Structured Output Parser: Ensures the output is in a JSON format with separate title and content keys.

Set Data: The AI-generated title and content are mapped to workflow variables (Topic Title, Content) for easy use in subsequent nodes.

#### Stage 3: Human Approval and Revision Loop
This is the critical quality control step where a human reviews the draft and decides on the next action.

Send Content for Approval (Gmail): The generated title and content are sent via email to the approver (&lt;your email&gt;).

This uses a custom form that allows the user to choose Yes (Approve), No (Request Revision), or Cancel. The form also includes a Content Feedback textarea.

Approval Result (Switch): The workflow pauses until the approver submits the form, and then directs the flow based on their choice.

If "Yes" (Approved): Proceeds to the final publishing stage. The Update Topic Status on Google Sheets node is executed, setting the Status to Approved and logging the new Title.

If "No" (Revision Requested): Proceeds to the revision loop.

Copywriter Revision Agent: This agent takes the original content, the topic title, and the user's Content Feedback. It is instructed to incorporate the feedback, preserving the existing structure and tone, and outputs a revised blog post.

The flow loops back through the Set Data node and then returns to the Send Content for Approval node for a new review.

If "Cancel": Stops the workflow, and the Update Topic Status on Google Sheets node is executed.

#### Stage 4: Final Publishing
Once approved, the content is stored in Google Docs and the tracker is updated.

Create Blog file (Google Docs): A new Google Doc is created using the approved Topic Title.

Add blog content in file (Google Docs): The final Content (in Markdown format) is inserted into the newly created document.

Update sheet with blog post link (Google Sheets): The final tracker update logs the Link to document and the Published date.


#### Customization Tip
Recommend using AI humanazier and AI detector tools before approval to make the SEO score better.


## 📊 Basic Information

- **Workflow ID:** 11285
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 510
- **Downloads:** 51
- **Created:** 2025/11/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11285)

## 👤 Author

- **Name:** Priyanka Rana
- **Username:** @aiagentpriyanka

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **set** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **googleSheets** (×4)
- **gmail** 
- **switch** 
- **stickyNote** (×6)
- **formTrigger** 
- **googleDocs** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
