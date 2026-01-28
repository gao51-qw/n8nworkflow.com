# Generate illustrated stories with GPT-4, DALL-E 3 and Firebase

> Generate complete illustrated stories using AI. This workflow creates engaging narratives with custom DALL-E 3 images for each scene and saves everything to Firebase.

**How it works**
1. User fills out a form with story topic, language, art style, and number of scenes
2. GPT-4 generates a complete story with scenes, characters, and image prompts
3. DALL-E 3 creates unique illustrations for each scene
4. Images are uploaded to Firebase Storage for permanent hosting
5. Complete story data is saved to Firestore
6. Returns JSON with the full story and image URLs

**Set up steps** (10-15 minutes)
1. Add your OpenAI API credentials
2. Add Google Service Account credentials for Firebase
3. Update 3 variables in the Code nodes: `OPENAI_API_KEY`, `FIREBASE_BUCKET`, `FIREBASE_PROJECT_ID`
4. Activate and test with the form

**Features**
- 12 languages supported
- 10 art styles to choose from
- 1-12 scenes per story
- Automatic image hosting on Firebase
- Full story saved to Firestore database

## 📊 Basic Information

- **Workflow ID:** 12263
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 77
- **Downloads:** 7
- **Created:** 2025/12/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12263)

## 👤 Author

- **Name:** Victor Manuel Lagunas Franco
- **Username:** @vicktormanuel

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×10)
- **formTrigger** 
- **code** (×6)
- **httpRequest** (×2)
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
