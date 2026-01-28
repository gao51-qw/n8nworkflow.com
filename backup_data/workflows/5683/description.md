## 🎬 What it does  
This workflow creates an engaging YouTube Short with a single click — from script to voiceover, to visuals and background music.  
It combines several AI tools to automate content creation and final video assembly.

---

## ⚙️ How it works  
- Accepts an input prompt or topic  
- Generates script using GPT  
- Converts script to voiceover using ElevenLabs  
- Generates b-roll style images via Leonardo.Ai  
- Matches background music  
- Assembles a vertical 1080×1920 MP4 video using JSON render config  
- Optionally uploads to YouTube or saves to Cloudinary

---

## 🧰 Setup steps  
- Add your credentials:  
  - Leonardo API (image generation)  
  - ElevenLabs (voiceover)  
  - Cloudinary (upload destination)  
  - Any GPT-based text generator

- Drop your audio/music file in the right node  
- Replace API expressions with your own credentials

&gt; 🟨 Full step-by-step instructions are in sticky notes inside the workflow.
