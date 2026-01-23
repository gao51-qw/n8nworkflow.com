# Create AI dream videos with analysis using Veo3 and Telegram

> ## Who is this for?

- **Dream journaling enthusiasts** who want to visualize and record their dreams
- **Self-improvement practitioners** interested in dream analysis and psychology
- **Content creators** looking for unique, AI-generated dream-based content
- **Wellness coaches and therapists** who use dream work with clients

## What it does

1. **Receives dream descriptions** via Telegram bot commands
2. **Parses visual style selection** from 8 options (cinematic, ghibli, surreal, vintage, horror, abstract, watercolor, cyberpunk)
3. **Analyzes the dream** using AI to extract themes, symbols, and psychological meaning
4. **Generates optimized video prompt** tailored to the selected style with audio descriptions
5. **Creates AI video with native audio** using Google Veo3 (single API call)
6. **Logs to Google Sheets** as a searchable dream journal
7. **Sends video + analysis** back to user via Telegram

## How to set up

**Estimated setup time: 15 minutes**

### Step 1: Create Telegram Bot
1. Message @BotFather on Telegram
2. Send `/newbot` and follow prompts
3. Copy the API token

### Step 2: Get fal.ai API Key
1. Sign up at [fal.ai](https://fal.ai)
2. Generate API key from dashboard
3. In n8n, create **Header Auth** credential:
   - Name: `Authorization`
   - Value: `Key YOUR_FAL_API_KEY`

### Step 3: Get OpenRouter API Key
1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Generate API key
3. Add to n8n as OpenRouter credential

### Step 4: Set up Google Sheets (Optional)
1. Create new spreadsheet with columns: Timestamp, Username, Style, Dream, Theme, Emotion, Type, Meaning, Video URL
2. Connect Google Sheets credential in n8n
3. Select your document and sheet in the "Log to Google Sheets" node

### Step 5: Connect Credentials
1. Add Telegram credential to all Telegram nodes
2. Add fal.ai Header Auth to both HTTP Request nodes
3. Add OpenRouter credential to the LLM node

## Requirements

| Service | Purpose | Cost |
|---------|---------|------|
| Telegram Bot | User interface | Free |
| fal.ai (Veo3) | Video + audio generation | ~$0.10-0.15/video |
| OpenRouter | LLM for dream analysis | ~$0.01-0.03/request |
| Google Sheets | Dream journal storage | Free |

## How to customize

- **Change LLM**: Replace OpenRouter with OpenAI, Anthropic, or other providers
- **Add styles**: Edit the `STYLES` object in "Parse Dream Command" node
- **Modify analysis**: Edit system prompt in "AI Dream Analyzer Agent" node
- **Change video model**: Replace Veo3 URL with Kling, Luma, or other fal.ai models
- **Skip logging**: Remove or disable the Google Sheets node

## Commands

| Command | Description |
|---------|-------------|
| `/dream [text]` | Generate video in cinematic style |
| `/dream [style] [text]` | Generate with specific style |
| `/styles` | Show all available styles |

## Example

**Input:** `/dream ghibli I was flying over a forest where the trees had glowing leaves`

**Output:** 8-second AI video with magical Ghibli-style visuals, ambient soundtrack, plus psychological analysis of flight symbolism and nature connection themes.


## 📊 Basic Information

- **Workflow ID:** 11575
- **Complexity:** advanced
- **Node Count:** 23
- **Views:** 223
- **Downloads:** 22
- **Created:** 2025/12/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11575)

## 👤 Author

- **Name:** 福壽一貴
- **Username:** @fukujukazuki

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **telegramTrigger** 
- **code** (×2)
- **if** (×3)
- **telegram** (×4)
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **httpRequest** (×2)
- **wait** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 23 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
