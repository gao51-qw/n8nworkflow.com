**Description**

Turn images into viral-ready Twitter/X captions in seconds!

This n8n automation watches a Google Drive folder for new images, uploads them to Cloudinary, and uses Azure OpenAI (GPT-4o-mini) to generate engaging, platform-optimized captions.
Each caption package includes:
- Punchy headlines and primary tweets (≤280 characters)
- Mini tweet threads with insights & actions
- Hashtags, @mentions & posting time recommendations
- HTML email delivery for quick publishing

Perfect for social media managers, creators, and marketing teams who want to speed up content creation while keeping posts high-quality and on-brand.

**Step-by-Step Workflow:**

📂 Google Drive Trigger (Google Drive Trigger Node)
- Watches a specific folder for new or updated image files.
- Instantly starts the workflow on detection.

📥 File Download (Google Drive Node)
- Downloads the new file from Google Drive for processing.
- 
☁️ Cloud Upload (HTTP Request Node → Cloudinary)
- Uploads the image to Cloudinary.
- Returns a publicly accessible URL for AI analysis.

🧠 AI Caption Generation (LangChain + Azure OpenAI GPT-4o-mini)
Analyzes the image and produces:
- Short headline & primary tweet
- A 3-part tweet thread (Hook → Insight → Action)
- Alt text for accessibility
- Suggested first-reply content
- 10–12 optimized hashtags
- Recommended @mentions
- Ideal posting times (IST)

📧 Email Delivery (SMTP Node)
Sends a professionally formatted HTML email with:
- The analyzed image
- All generated Twitter/X content blocks
- Key visual summary
- Feature & user targeting notes

**Perfect For:**

1. Social Media Managers – Automate caption creation for client accounts.
2. Content Creators – Turn visuals into instantly postable Twitter/X threads.
3. Marketing Teams – Maintain consistency & posting frequency without manual work.
4. Built With:
5. Google Drive API – File monitoring & download
6. Cloudinary API – Image hosting & URL generation
7. Azure OpenAI GPT-4o-mini – AI caption creation & formatting
8. n8n LangChain Integration – Structured AI prompt execution
9. SMTP Email – Automated content delivery

**Key Benefits:**

✅ Save hours on manual caption writing.
📈 Boost engagement with AI-optimized hashtags & post timing.
🧠 Get both short posts & full threads ready to publish.
⚡ Fully automated — runs whenever you upload a file.