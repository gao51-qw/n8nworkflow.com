## 📽️ What this workflow does

This workflow turns a user-submitted form with country or animal names into a cinematic video with animated scenes and immersive ambient audio. Using GPT-4 for prompt generation, Dumpling AI for visual creation,& Replicate for motion animation, ElevenLabs for sound generation, and Creatomate for video stitching, it fully automates video production — from raw idea to rendered file.

---

## 🎯 What problem is this solving?

Creating engaging multimedia content can take hours. This workflow automates the entire process of ideation, design, and rendering of high-quality cinematic clips, eliminating the need for manual video editing or audio production.

---

## 👥 Who is this for?

- Content creators and educators  
- Digital artists and storytellers  
- Marketers or YouTubers creating short-form visual content  
- No-code/AI automation enthusiasts  

---

## ⚙️ Setup Instructions

### ✅ Step 1: Google Sheet  
Create a Google Sheet with two columns:
- `Title`  
- `Generated videos`  
Update the Sheet ID and tab name in the final node.

### ✅ Step 2: Google Drive  
Create two folders:
- One for **ambient audio tracks**  
- One for **final generated videos**  
Update the folder IDs in both Google Drive nodes.

### ✅ Step 3: Credentials Setup  
Make sure all your API tokens are saved as **credentials** in n8n.  
This workflow uses the following integrations:

- OpenAI (GPT-4)  
- Dumpling AI (via HTTP header)  
- Replicate.com 
- ElevenLabs  
- Google Drive  
- Google Sheets  
- Creatomate  

### ✅ Step 4: Form Fields  
Ensure your trigger form includes these fields:
- `Title`  
- `Country 1`, `Country 2`, `Country 3`, `Country 4`  
- `Style` (e.g., cinematic, epic, fantasy, noir, etc.)

---

## 🧩 How it works

1. **User Form Submission**  
   Kicks off the workflow with the required inputs.

2. **Format Inputs**  
   Combines all 4 countries/animals into a single array.

3. **GPT-4: Generate Visual Prompts**  
   Uses GPT-4 to create rich cinematic descriptions per animal/country.

4. **Dumpling AI: Create Images**  
   Each description becomes a high-quality visual.

5. **GPT-4: Create Motion Prompts**  
   Each image prompt is rewritten into motion-based video prompts.

6. **Replicate: Animate**  
   Prompts and images are sent to Replicate’s model for animation.

7. **GPT-4: Generate Sound Prompt**  
   Based on the style, GPT-4 creates an ambient sound idea.

8. **ElevenLabs: Create Ambient Audio**  
   Audio is generated and uploaded to Google Drive.

9. **Creatomate: Stitch All Media**  
   All 4 motion videos and the audio track are stitched into one cinematic output.

10. **Upload to Google Drive + Log to Sheet**  
    Final video is saved in Drive and logged in Sheets with its title and link.

---

## 🛠️ How to Customize

- 🎨 Modify GPT prompts for different themes (e.g., horror, fantasy, sci-fi).  
- 🧠 Swap animals for characters, objects, or locations.  
- 🎧 Replace ambient sound with ElevenLabs voiceovers or music.  
- 📂 Add metadata logging (generation time, duration, tags).  
- 🧪 Try using alternative video tools like Pika Labs or Runway ML.


---

## ✅ Requirements

- n8n self-hosted or cloud instance  
- Active accounts for: OpenAI, Dumpling AI, Replicate, ElevenLabs, Creatomate  
- Google credentials set up for Drive + Sheets  

---

This is a perfect end-to-end automation that showcases the power of AI + automation for video storytelling.

