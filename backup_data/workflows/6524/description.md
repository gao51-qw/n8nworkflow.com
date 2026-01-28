## **🤖 Automated AI News Video Creation and Social Media Publishing Workflow**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 Overview:
This workflow fully automates the creation and social media distribution of AI-generated news videos. It fetches news, crafts captions, generates avatar videos via HeyGen, stores them, and publishes them across Instagram, Facebook, and YouTube via Postiz.

---

🔄 **WORKFLOW PROCESS:**
1.  **News Fetching:** Reads the latest news from an RSS feed.
2.  **AI Captioning:** Generates concise, engaging captions using an AI agent (GPT-4o-mini).
3.  **Video Generation:** Creates an AI avatar video using HeyGen with the generated caption.
4.  **Video Storage:** Downloads the video and uploads it to Google Drive for archival.
5.  **Data Logging:** Records all news and video metadata into Google Sheets.
6.  **Postiz Upload:** Uploads the video to Postiz's internal storage for publishing.
7.  **Social Publishing:** Fetches Postiz integrations and routes the video to Instagram, Facebook, and YouTube after platform-specific content cleaning.

---

##  ⚙️ KEY TECHNOLOGIES:
-   **RSS Feeds:** News source.
-   **LangChain (n8n nodes):** AI Agent and Chat OpenAI for caption generation.
-   **HeyGen API:** AI avatar video creation.
-   **Google Drive:** Video file storage.
-   **Google Sheets:** Data logging and tracking.
-   **Postiz API:** Unified social media publishing platform.

---

 ## ⚠️CRITICAL CONFIGURATIONS:
-   **API Keys:** Ensure HeyGen and Postiz API keys are correctly set in credentials and the 'Setup Heygen Parameters' node.
-   **HeyGen IDs:** Verify `avatar_id` and `voice_id` in 'Setup Heygen Parameters'.
-   **Postiz URL:** Confirm `https://postiz.yourdomain.com` is your correct Postiz instance URL across all HTTP Request nodes.
-   **Credentials:** All Google, OpenAI, and Postiz credentials must be properly linked.

---

## 📈BENEFITS:
-   Automated content creation and distribution, saving significant time.
-   Consistent branding and messaging across multiple platforms.
-   Centralized logging for tracking and performance analysis.
-   Scalable solution for high-volume content demands.

---