**🎉 Do you want to master AI automation, so you can save time and build cool stuff?** 

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