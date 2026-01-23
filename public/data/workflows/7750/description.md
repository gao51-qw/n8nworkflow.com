# 🧰 Instagram Carousel Scheduler

A tool to **automatically publish Instagram carousels** using a `Post Description`, `Instructions`, and the **number of images** you want to post — all directly from a Google Sheet.
At the end of each post, the next row is marked as `Pending`, allowing **fully automated posting**, so you can prepare **months of content in advance**.
---

## ✅ Requirements

* 📱 **Instagram Business Account**
  Required to publish content via the Meta Graph API.
  Make sure your IG account is **connected to a Facebook Page**.

* 🔐 **Facebook Developers Token**
  Required to use the **Graph API** and publish on Instagram.
  👉 It's highly recommended to create a **System User** so your token **never expires**.

* ☁️ **Cloudinary Upload Preset**
  Used to upload generated images and retrieve public URLs.
  👉 Use an **unsigned upload preset** (no API key required).

* 🧠 **OpenAI API Key**
  Used for:
  * Generating a **caption** from the post description.
  * Creating **image prompts**.
  * Generating images using **`gpt-image-1`**.
    ⚠️ You might need to **verify your business** with OpenAI to access this model.

* 📊 **Google Sheets App with OAuth credentials**
  To fetch your content and instructions from the spreadsheet.
---

## 💬 Notes and Customization

* ✏️ You can **customize the prompt** to change the visual style of the images.
  Examples:

  * *Gumball* style
  * *Comic-style illustration*
  * *Digital painting*

* 🔄 You can **replace Google Sheets** with tools like:

  * Airtable
  * Notion
  * Your own database

* 🔐 If Facebook requires a **Privacy Policy**, you can quickly create one here:
  👉 [https://www.privacypolicygenerator.info](https://www.privacypolicygenerator.info)