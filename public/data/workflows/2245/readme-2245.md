# Generate Text-to-Speech Using Elevenlabs via API

> **🎉 Do you want to master AI automation, so you can save time and build cool stuff?** 

I’ve created a welcoming Skool community for non-technical yet resourceful learners.

**👉🏻 [Join the AI Atelier](https://www.skool.com/the-ai-atelier-3311/about) 👈🏻**

---


This workflow provides an API endpoint to generate speech from text using [Elevenlabs.io](http://go.n8n.ninja/elevenlabs), a popular text-to-speech service.

### Step 1: Configure Custom Credentials in n8n
To set up your credentials in n8n, create a new custom authentication entry with the following JSON structure:
```json
{
  "headers": {
    "xi-api-key": "your-elevenlabs-api-key"
  }
}
```
Replace `"your-elevenlabs-api-key"` with your actual Elevenlabs API key.

### Step 2: Send a POST Request to the Webhook
Send a POST request to the workflow's webhook endpoint with these two parameters:
- `voice_id`: The ID of the voice from Elevenlabs that you want to use.
- `text`: The text you want to convert to speech.


This workflow has been a significant time-saver in my video production tasks. I hope it proves just as useful to you!

Happy automating!  
The n8Ninja

## 📊 Basic Information

- **Workflow ID:** 2245
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 39501
- **Downloads:** 3950
- **Created:** 2024/4/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2245)

## 👤 Author

- **Name:** Emmanuel Bernard - n8n Expert Lausanne
- **Username:** @n8ninja

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **if** 
- **respondToWebhook** (×2)
- **webhook** 
- **httpRequest** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
