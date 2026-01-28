# Generate AI-Powered LinkedIn Posts with Google Gemini and Gen-Imager

> # 🚀 **AI-Powered LinkedIn Post Automation**

---

## 🧩 **How It Works**

This workflow automatically generates LinkedIn posts based on a user-submitted topic, including both **content creation** and **image generation**, then publishes the post to LinkedIn. Ideal for marketers, content creators, or businesses looking to streamline their social media activity, without the need for manual post creation.

**High-Level Workflow:**

1. **Trigger**: The workflow is triggered when a user submits a form with a **topic** for the LinkedIn post.
2. **Data Mapping**: The topic is mapped and prepared for the AI model.
3. **AI Content Generation**: Calls the Google Gemini AI model to generate engaging post content and a visual image prompt.
4. **Image Creation**: Sends the image prompt to the external API, **[gen-imager](https://rapidapi.com/PrineshPatel/api/gen-imager)**, to generate a professional image matching the topic.
5. **Post Creation**: Publishes the **text** and **image** to LinkedIn, automatically updating the user's feed.

---

## ⚙️ **Set Up Steps (Quick Overview)**

🕐 **Estimated Setup Time**: ~10–20 minutes

1. **Connect Google Gemini**: Set up your Google Gemini API credentials to interact with the AI model for content creation.  
2. **Set Up External Image API**: Configure the external image generation API ([gen-imager API](https://rapidapi.com/PrineshPatel/api/gen-imager)) for visual creation based on the post prompt.
3. **Connect LinkedIn**: Set up OAuth2 credentials to authenticate your LinkedIn account and allow publishing posts.
4. **Form Submission Setup**: Create a simple web form for users to submit the topic for LinkedIn posts.
5. **Activate the Workflow**: Once everything is connected, activate the workflow. It will trigger automatically upon receiving form submissions.

💡 **Important Notes**:
- The flow uses **Google Gemini (PaLM)** for generating content based on the user's topic.
- **Text to Image**: The image generation process involves creating a professional, LinkedIn-appropriate image based on the post’s topic using the **[gen-imager API](https://rapidapi.com/PrineshPatel/api/gen-imager)**.
- You can customize the **visual elements** of the posts and adjust the tone of the generated content based on preferences.

---

## 🛠 **Detailed Node Breakdown:**

1. **On Form Submission**  
   - **Trigger**: Captures the user-submitted topic and initializes the workflow.
   - **Action**: Start the process by gathering the topic information.

2. **Mapper (Field Mapping)**  
   - **Action**: Maps the captured topic to a variable that is passed along for content generation.

3. **AI Agent (Content Generation)**  
   - **Action**: Calls Google Gemini to generate professional LinkedIn post content and an image prompt based on the submitted topic.
   - **Key**: Outputs content in a structured form — post text and image prompt.

4. **Google Gemini Chat Model**  
   - **Action**: AI model that generates actionable insights, engaging copy, and an image prompt for LinkedIn post.

5. **Normalizer (Data Cleanup)**  
   - **Action**: Cleans the output from the AI model to ensure the content and image prompt are correctly formatted for use in the next steps.

6. **Text to Image (Image Generation)**  
   - **Action**: Sends the image prompt to the **[gen-imager API](https://rapidapi.com/PrineshPatel/api/gen-imager)**, which returns a custom image based on the post's topic.

7. **Decoder (Base64 Decoding)**  
   - **Action**: Decodes the image from base64 format for easier uploading to LinkedIn.

8. **LinkedIn (Post Creation)**  
   - **Action**: Publishes the generated text and image to LinkedIn, automatically creating a polished post for the user’s feed.

---

## ⏱ **Execution Time Breakdown:**

- **Total Estimated Execution Time**: ~15–40 seconds per workflow run.
  - **On Form Submission**: Instant (Trigger)
  - **Mapper (Field Mapping)**: ~1–2 seconds
  - **AI Content Generation**: ~5–10 seconds (depending on server load)
  - **Text to Image**: ~5–15 seconds (depends on external API)
  - **LinkedIn Post Creation**: ~2–5 seconds

---

## 🚀 **Ready to Get Started?**

Let’s get you started with automating your LinkedIn posts!  
Create your free n8n account and set up the workflow using this [**link**](https://n8n.partnerlinks.io/7fuarh1e6dz5).

---

## 📝 **Notes & Customizations**  
- **Form Fields**: Customize the form to gather more specific information for the LinkedIn posts (like audience targeting, post category, etc.).
- **Image API Customization**: Adjust the image generation prompt to fit your brand’s style, or change the color palette as needed.
- **Content Tone**: The tone can be adjusted by modifying the system message sent to Google Gemini for content generation.

---


## 📊 Basic Information

- **Workflow ID:** 5002
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 23092
- **Downloads:** 2309
- **Created:** 2025/6/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5002)

## 👤 Author

- **Name:** Evoort Solutions
- **Username:** @evoortsolutions

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **code** (×2)
- **httpRequest** 
- **linkedIn** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
