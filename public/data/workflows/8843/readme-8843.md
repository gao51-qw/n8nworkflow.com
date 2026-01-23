# Transform product photos into studio-quality visuals with Nano Banana & Telegram

> Turn a single product photo into **scroll-stopping, studio-quality visuals** in minutes.  
Perfect for **Shopify / WooCommerce / Amazon / Etsy** sellers, agencies, and UGC creators who want **consistent**, **on-brand** images without costly photoshoots or endless editing.

---

## Why you’ll love it
- **Sell more, faster:** Professional, consistent visuals boost trust and conversions.
- **Save time & money:** No studio, no photographer, no retouching marathon.
- **Multiple looks instantly:** Get up to **3 variants** per product (great for A/B testing).
- **On-brand results:** Subtle **brand color grading** for a polished, consistent look.
- **Zero friction delivery:** Images are sent straight to your **Telegram** for instant review.

---

## Perfect for
- D2C brands, marketplace sellers, and dropshippers  
- Agencies producing UGC for clients  
- Creators who need ad-ready product images *today*  
- Teams that want reliable results without learning complex tools

---

## What’s included
- **n8n workflow (template)** that automates: form input → prompt creation → image rendering → delivery
- **Built-in guidance** (sticky notes) to keep you moving fast
- **Prompt logic** tuned for product realism (camera, lighting, materials, subtle brand grading)

---

## Step-by-Step — How it works

1. **Open the form**  
   Enter:
   - **Product Name** & **Product Description** (material, finish, color, USP)  
   - **Product Image** (required)  
   - Optional: **Background Image**, or describe it (Background Type + Background Description)  
   - Choose **Camera Angle**, **Lighting Style**, **Aperture (Depth of Field)**  
   - Set **Aspect Ratio**, **Variants (1–3)**, and your **TG_Chat ID** (Telegram target)

2. **Click “Submit”**  
   The workflow automatically:
   - Uploads your images  
   - Writes **photography-accurate prompts** (focal length, aperture, lighting, surface/shadows)  
   - Renders each variant into clean **PNG** results

3. **Receive your images**  
   - Finished images land in your **Telegram** chat/group for instant feedback and use

That’s it. No manual editing, no waiting, no hassle.

---

## Real problems solved
- **Inconsistent brand look?** Get uniform, polished visuals across your store and ads.  
- **No time for shoots?** Generate studio/lifestyle shots from one upload.  
- **Need options fast?** Produce multiple variants (A/B/C) in a single run.  
- **Limited budget?** Cut studio and retouching costs to nearly zero.

---

## Customize it to your stack
- Swap Telegram for email, Slack, Google Drive, Dropbox, or S3
- Save prompts & URLs to Notion/Airtable for tracking
- Add an approval step before delivery
- Map aspect ratios to fixed pixel sizes for ad platforms

---

## Requirements
- **n8n** (self-hosted or cloud)  
- Access to **OpenAI** and **Kie.ai** (API creds)  
- A **Telegram bot** added to your target chat (for delivery)

*You control which assets and metadata are sent to external APIs. Always ensure you have rights to the images you upload.*

---

## FAQs

**Do I need a background image?**  
No. If you skip it, the workflow builds a realistic scene from your background description.

**How many images do I get?**  
Up to **3 variants** per run (you choose 1–3).

**Are the results on-brand?**  
Yes—subtle grading honors your **brand colors** without over-saturation.

**Can I change the delivery channel?**  
Absolutely. Replace Telegram with your preferred destination (email, storage, chat).

---

## Use cases
- PDP images, marketplace listings, social ads, story posts, influencer kits, quick mockups for pitch decks and client approvals.



---

### Ready to level up your product visuals?
**Add to cart**, upload your first product image, and get **studio-quality results**—today.


## 📊 Basic Information

- **Workflow ID:** 8843
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 235
- **Downloads:** 23
- **Created:** 2025/9/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8843)

## 👤 Author

- **Name:** SuS
- **Username:** @sulieman-said

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×5)
- **wait** 
- **if** (×2)
- **stickyNote** (×3)
- **splitOut** 
- **splitInBatches** 
- **merge** 
- **telegram** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
