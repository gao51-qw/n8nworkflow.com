

## Instagram Auto-Comment Responder with AI Agent Integration

**Version:** 1.1.0 ‧ **n8n Version:** 1.88.0+ ‧ **License:** MIT

A fully automated workflow for managing and responding to Instagram comments using AI agents. Designed to improve engagement and save time, this system listens for new Instagram comments, verifies and filters them, fetches relevant post data, processes valid messages with a natural language AI, and posts context-aware replies directly on the original post.

---

## Key Features

- 💬 **AI-Driven Engagement**: Intelligent responses to comments via a GPT-powered agent.
- ✅ **Webhook Verification**: Handles Instagram webhook handshake to ensure secure integration.
- 📦 **Data Extraction**: Maps incoming payload fields (user ID, username, message text, media ID) for processing.
- 🚫 **Self-Comment Filtering**: Automatically skips comments made by the account owner to prevent loops.
- 📡 **Post Data Retrieval**: Fetches the media’s `id` and `caption` from the Graph API (v22.0) before generating a reply.
- 🧠 **Natural Language Processing**: Uses a custom system prompt to maintain brand tone and context.
- 🔁 **Automated Replies**: Posts the AI-generated message back to the comment thread using Instagram’s API.
- 🧩 **Modular Architecture**: Clear separation of steps via sticky notes and dedicated HTTP Request and Agent nodes.

## Use Cases

- **Social Media Automation**: Keep followers engaged 24/7 with instant, relevant replies.
- **Community Building**: Maintain a consistent voice and tone across all interactions.
- **Brand Reputation Management**: Ensure no valid comment goes unanswered.
- **AI Customer Support**: Triage simple questions and direct followers to resources or support.

## Technical Implementation

1. **Webhook Verification**  
   - Node: **Webhook** + **Respond to Webhook**  
   - Echoes `hub.challenge` to confirm subscription and secure incoming events.

2. **Data Extraction**  
   - Node: **Set**  
   - Maps payload fields into structured variables: `conta.id`, `usuario.id`, `usuario.name`, `usuario.message.id`, `usuario.message.text`, `usuario.media.id`, `endpoint`.

3. **User Validation**  
   - Node: **Filter**  
   - Skips processing if `conta.id` equals `usuario.id` (self-comments).

4. **Post Data Retrieval**  
   - Node: **HTTP Request (Get post data)**  
   - GET `https://graph.instagram.com/v22.0/{{ $json.usuario.media.id }}?fields=id,caption&access_token={{ credentials }}`  
   - Captures the media’s caption for richer context in replies.

5. **AI Response Generation**  
   - Nodes: **AI Agent** + **OpenRouter Chat Model**  
   - Uses a detailed system prompt with:
     - Profile persona (expert in AI & automations, friendly tone).  
     - Input data (username, comment text, post caption).  
     - Filtering logic (spam, praise, questions, vague comments).  
   - Returns either the reply text or `[IGNORE]` for irrelevant content.

6. **Posting the Reply**  
   - Node: **HTTP Request (Post comment)**  
   - POST `{{ $json.endpoint }}/{{ $json.usuario.message.id }}/replies` with `message={{ $json.output }}`  
   - Sends the AI answer back under the original comment.

---

## Instructions for Setup

1. **Import Workflow**  
   In **n8n &gt; Workflows &gt; Import from File**, upload the provided `.json` template.

2. **Configure Credentials**  
   - **Instagram Graph API** (Header Auth or FacebookGraphApi) with `instagram_basic`, `instagram_manage_comments` scopes.  
   - **OpenRouter/OpenAI API** key for AI agent.

3. **Customize System Prompt**  
   - Edit the AI Agent’s prompt to adjust brand tone, language (Brazilian Portuguese), length, or emoji usage.

4. **Test & Activate**  
   - Publish a test comment on an Instagram post.  
   - Verify each node’s execution, ensuring the webhook, filter, data extraction, HTTP requests, and AI Agent respond as expected.

5. **Extend & Monitor**  
   - Add sentiment analysis or lead capture nodes as needed.  
   - Monitor execution logs for errors or rate-limit events.

---

## Tags

Social Media • Instagram Automation • Webhook Verification • AI Agent • HTTP Request • Auto Reply • Community Management

