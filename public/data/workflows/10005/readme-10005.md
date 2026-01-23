# Generate song lyrics and music from text prompts using OpenAI and Fal.ai Minimax

> Spark your creativity instantly in any chat—turn a simple prompt like "heartbreak ballad" into original, full-length lyrics and a professional AI-generated music track, all without leaving your conversation.

## 📋 What This Template Does
This chat-triggered workflow harnesses AI to generate detailed, genre-matched song lyrics (at least 600 characters) from user messages, then queues them for music synthesis via Fal.ai's minimax-music model. It polls asynchronously until the track is ready, delivering lyrics and audio URL back in chat.
- Crafts original, structured lyrics with verses, choruses, and bridges using OpenAI
- Submits to Fal.ai for melody, instrumentation, and vocals aligned to the style
- Handles long-running generations with smart looping and status checks
- Returns complete song package (lyrics + audio link) for seamless sharing

## 🔧 Prerequisites
- n8n account (self-hosted or cloud with chat integration enabled)
- OpenAI account with API access for GPT models
- Fal.ai account for AI music generation

## 🔑 Required Credentials

### OpenAI API Setup
1. Go to [platform.openai.com](https://platform.openai.com) → API keys (sidebar)
2. Click "Create new secret key" → Name it (e.g., "n8n Songwriter")
3. Copy the key and add to n8n as "OpenAI API" credential type
4. Test by sending a simple chat completion request

### Fal.ai HTTP Header Auth Setup
1. Sign up at [fal.ai](https://fal.ai) → Dashboard → API Keys
2. Generate a new API key → Copy it
3. In n8n, create "HTTP Header Auth" credential: Name="Fal.ai", Header Name="Authorization", Header Value="Key [Your API Key]"
4. Test with a simple GET to their queue endpoint (e.g., /status)

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance
2. Assign OpenAI API credentials to the "OpenAI Chat Model" node
3. Assign Fal.ai HTTP Header Auth to the "Generate Music Track", "Check Generation Status", and "Fetch Final Result" nodes
4. Activate the workflow—chat trigger will appear in your n8n chat interface
5. Test by messaging: "Create an upbeat pop song about road trips"

## 🎯 Use Cases
- **Content Creators**: YouTubers generating custom jingles for videos on the fly, streamlining production from idea to audio export
- **Educators**: Music teachers using chat prompts to create era-specific folk tunes for classroom discussions, fostering interactive learning
- **Gift Personalization**: Friends crafting anniversary R&B tracks from shared memories via quick chats, delivering emotional audio surprises
- **Artist Brainstorming**: Songwriters prototyping hip-hop beats in real-time during sessions, accelerating collaboration and iteration

## ⚠️ Troubleshooting
- **Invalid JSON from AI Agent**: Ensure the system prompt stresses valid JSON; test the agent standalone with a sample query
- **Music Generation Fails (401/403)**: Verify Fal.ai API key has minimax-music access; check usage quotas in dashboard
- **Status Polling Loops Indefinitely**: Bump wait time to 45-60s for complex tracks; inspect fal.ai queue logs for bottlenecks
- **Lyrics Under 600 Characters**: Tweak agent prompt to enforce fuller structures like [V1][C][V2][B][C]; verify output length in executions

## 📊 Basic Information

- **Workflow ID:** 10005
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 593
- **Downloads:** 59
- **Created:** 2025/10/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10005)

## 👤 Author

- **Name:** Daniel Nkencho
- **Username:** @daniel-automates

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **set** 
- **httpRequest** (×3)
- **wait** 
- **switch** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×7)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
