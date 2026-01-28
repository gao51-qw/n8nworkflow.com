

###  How It Works

1. **Story Generation** – Your idea is transformed into a narrative split into scenes using **DeepSeek LLM**.  
2. **Visuals** – Each scene is illustrated with AI images via **Replicate**, then animated into cinematic video clips with **RunwayML**.  
3. **Voice & Music** – Narration is created using **ElevenLabs** (text-to-speech), while **Replicate audio models** generate background music.  
4. **Final Assembly** – All assets are merged into a professional video using **Creatomate**.  
5. **Delivery** – Everything is orchestrated by **n8n**, triggered from Slack with `/render`, and the final video link is delivered back instantly.

---

### Workflow in Action

#### 1. Trigger from Slack
Type your idea with `/render` in Slack - the workflow starts automatically.  
![Slack](https://raw.githubusercontent.com/TuguiDragos/n8n-automated-storytelling/refs/heads/main/SLACK.png)

#### 2. Final Video Output
Receive a polished cinematic video link in Slack.  
![Final Render](https://raw.githubusercontent.com/TuguiDragos/n8n-automated-storytelling/refs/heads/main/creatomate-vd.png)

#### 3. Creatomate Template
⚠️ **Important:** You must create your own template in **Creatomate**.  

This is a **one-time setup** - the template defines where the voiceover, music, and video clips will be placed.  
The more detailed and refined your template is, the better the final cinematic result.  
![Template](https://raw.githubusercontent.com/TuguiDragos/n8n-automated-storytelling/refs/heads/main/template.png)

---

### Required APIs

To run this workflow, you need accounts and API keys from the following services:

- [DeepSeek](https://deepseek.com) – Story generation (LLM)  
- [Replicate](https://replicate.com) – Images & AI music generation  
- [RunwayML](https://runwayml.com) – Image-to-video animations  
- [ElevenLabs](https://elevenlabs.io) – Text-to-speech voiceovers  
- [Creatomate](https://creatomate.com) – Video rendering and templates  
- [Dropbox](https://dropbox.com) – File storage and asset syncing  
- [Slack](https://slack.com) – Workflow trigger and video delivery  

---

### Setup Steps

1. Import the JSON workflow into your **n8n** instance.  
2. Add your API credentials for each service above.  
3. Create a **Creatomate template** (only once) – define layers for visuals, voice, and music.  
4. Trigger the workflow from Slack with `/render Your Story Idea`.  
5. Receive your final cinematic video link directly in Slack.  

---

### Use Cases

- Automated **YouTube Shorts / TikToks** for faceless content creators.  
- Scalable **ad creatives** and marketing videos for agencies.  
- **Educational explainers** and onboarding videos generated from text.  
- **Rapid prototyping** of cinematic ideas for developers & storytellers.  

---

With this workflow, you’re not just using AI tools – you’re running a **full AI-powered studio in n8n**.  