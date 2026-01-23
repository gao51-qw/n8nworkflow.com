# Create videos with AI-generated backgrounds using Gemini and VideoBGRemover

> Automated workflow that generates custom AI image backgrounds from text prompts using Gemini's Nano Banana (native image generation), removes video backgrounds, and composites videos on AI-generated scenes. Create any background you can imagine without needing stock images.

## How it works

• **Describe background**: Provide video URL and text prompt describing desired background scene (e.g., "modern office with city skyline at golden hour")
• **AI generates image**: Gemini creates a background image from your prompt in ~10-20 seconds
• **Upload to Drive**: Generated background is saved to Google Drive and made publicly accessible
• **Remove & composite**: Video background is removed and composited on AI-generated scene with centered template
• **Save final video**: Completed video is uploaded to Google Drive with shareable link

## Set up steps

**⏱️ Total setup time: ~5 minutes**

• **Get Gemini API Key** (~1 min): Visit https://aistudio.google.com/apikey, create new API key, add to n8n Settings → Variables as `GEMINI_KEY`
• **Get VideoBGRemover API Key** (~2 min): Visit https://videobgremover.com/n8n, sign up, add to n8n as `VIDEOBGREMOVER_KEY`
• **Connect Google Drive** (~2 min): Click "Save Background Image to Drive" node, click "Connect", authorize n8n

**Use cases:**
- Marketing videos with custom branded environments tailored to your message
- Product demos with unique AI-generated backgrounds that match your product aesthetic
- Social media content with creative scenes you can't find in stock libraries
- AI avatars placed in AI-generated worlds
- Presentations with custom backgrounds generated for specific topics
- A/B testing different background variations for the same video

**Pricing:**
- Gemini: ~$0.03 per generated image
- VideoBGRemover: $0.50-$2.00 per minute of video
- Total: ~$0.53-$2.03 per video

**Triggers:** Webhook (for automation) or Manual (for testing)

**Processing time:** Typically 5-7 minutes total

**Prompt tips:** Be descriptive and specific. Instead of "office," try: "A modern minimalist office with floor-to-ceiling windows overlooking a city skyline at golden hour. Warm sunlight, polished concrete floors, sleek wooden desks, green plants."

## 📊 Basic Information

- **Workflow ID:** 9821
- **Complexity:** advanced
- **Node Count:** 35
- **Views:** 98
- **Downloads:** 9
- **Created:** 2025/10/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9821)

## 👤 Author

- **Name:** Paul Roussel
- **Username:** @paul

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×13)
- **webhook** 
- **manualTrigger** 
- **set** (×5)
- **merge** 
- **httpRequest** (×5)
- **code** 
- **googleDrive** (×3)
- **if** (×3)
- **wait** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 35 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
