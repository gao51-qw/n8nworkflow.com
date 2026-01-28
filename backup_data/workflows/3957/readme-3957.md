# Boost sales: Convert product photos into 360° videos instantly

> ##  Transform Product Images into Stunning 360° Videos with AI (OpenAI + RunwayML Workflow)

Turn static product photos into **eye-catching 360° rotating product videos**—fully automated with AI.  
Perfect for **Shopify, WooCommerce, Amazon sellers, digital marketers, and content creators** looking to **boost engagement, increase conversions, and stand out online**.

---

###  Why This Workflow is a Game-Changer

With this AI-powered **product video automation**, you can:

- **Convert simple product shots into premium, studio-quality videos**—no expensive gear or editing required.
- **Speed up your product media pipeline** from hours to minutes.
- **Boost click-through rates** on ads, listings, and social media posts.
- Maintain **consistent brand visuals** across all product media.

---

###  How the Automation Works

This **n8n + OpenAI + RunwayML workflow** takes a product image, title, and description from a form submission and delivers a ready-to-publish video—completely hands-off:

1. **Upload Product Photo** → Saved to Google Drive for processing.
2. **Generate AI-Optimized Prompt** → OpenAI enhances details for visual quality.
3. **Refine the Image** → AI improves lighting, sharpness, and background for a premium look.
4. **Create a 360° Product Spin Video** → RunwayML API generates a smooth rotating showcase.
5. **Deliver the Final Video** → (Optional) Send via email or store in cloud storage.

---

###  Best Use Cases

- **eCommerce Product Pages** → Give customers a 360° view for higher purchase confidence.
- **Social Media Marketing** → Auto-generate reels, TikToks, and carousel videos.
- **Paid Ads & Campaigns** → Create thumb-stopping visuals for Facebook, Instagram, and Google Ads.
- **Product Launches** → Showcase new arrivals without manual editing.

---

###  Quick Setup Guide

### **Prerequisites**
- Active **n8n instance** (self-hosted or cloud)
- API credentials for:
  - **Google Drive OAuth2 / Service Account**
  - **OpenAI API Key**
  - **RunwayML API Key**
  - *(Optional)* SMTP / Email service for notifications

### **Installation Steps**
1. **Import the Workflow** → Upload the provided JSON file into n8n.
2. **Connect API Credentials**:
   - Google Drive for storage.
   - OpenAI for prompt generation.
   - RunwayML for video rendering.
3. **Update Placeholders**:
   - `{{GDRIVE_FOLDER_ID}}`
   - Email address: `admin@example.com`
4. **Deploy & Test** → Trigger via form submission or webhook.

---

###  Customization Possibilities

- **Style Tweaks** → Change backgrounds, lighting, and colors.
- **Video Settings** → Adjust rotation speed, duration, and aspect ratio (1:1, 4:5, 16:9).
- **Brand Elements** → Add logos, watermarks, or custom overlays.
- **Delivery Channels** → Save to Google Drive, Dropbox, or auto-post to social media.
- **Notification Emails** → Use branded templates for delivery.

---

###  Workflow Highlights

- **End-to-End Automation** → From upload to final video, all handled by AI.
- **No Technical Skills Needed** → Plug-and-play with minimal setup.
- **Scalable** → Works for a single product or thousands.
- **Secure** → Credentials stored safely—no hardcoding.

---

### Keywords for SEO Targeting

`360° product video automation`  
`AI product video generator`  
`eCommerce product videography workflow`  
`Shopify product video automation`  
`RunwayML product showcase`  
`OpenAI product image enhancement`  
`n8n eCommerce automation`

---

**Ready to make your product listings impossible to scroll past?**  
Deploy this AI-powered workflow today and start generating **professional 360° videos—on autopilot**.


## 📊 Basic Information

- **Workflow ID:** 3957
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 621
- **Downloads:** 62
- **Created:** 2025/5/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3957)

## 👤 Author

- **Name:** Aayushman Sharma
- **Username:** @ajstyle0411

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **googleDrive** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **convertToFile** 
- **httpRequest** (×4)
- **wait** (×2)
- **stickyNote** (×11)
- **emailSend** (×2)
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
