The **AI Blog Creator with Gemini, Replicate Image, Supabase Publishing & Slack** is a fully automated content generation and publishing workflow designed for modern marketing and SaaS teams.
It automatically fetches the latest industry trends, generates SEO-optimized blogs using AI, creates a relevant featured image, publishes the post to your CMS (e.g., Supabase or custom API), and notifies your team via Slack all on a daily schedule.

This workflow connects multiple services NewsAPI, Google Gemini, Replicate, Supabase, and Slack into one intelligent content pipeline that runs hands-free once set up.

---

### **✨ Features**

* 📰 **Fetch Trending Topics** — pulls the latest news or updates from your selected industry (via NewsAPI).
* 🤖 **AI Topic Generation** — Gemini suggests trending blog topics relevant to AI, SaaS, and Automation.
* 📝 **AI Blog Authoring** — Gemini then writes a full 1200-1500 word SEO-optimized article in Markdown.
* 🧹 **Smart JSON Cleaner** — A resilient code node parses Gemini’s output and ensures clean, structured data.
* 🖼️ **Auto-Generated Image** — Replicate’s Ideogram model creates a blog cover image based on the content prompt.
* 🌐 **Automatic Publishing** — Posts are automatically published to your Supabase or custom backend.
* 💬 **Slack Notification** — Notifies your team with blog details and live URL.
* ⏰ **Fully Scheduled** — Runs automatically every day at your preferred time (default 10 AM IST).

---

### **⚙️ Workflow Structure**

| Step | Node                                | Purpose                                         |
| ---- | ----------------------------------- | ----------------------------------------------- |
| 1    | **Schedule Trigger**                | Runs daily at 10 AM                             |
| 2    | **Fetch Industry Trends (NewsAPI)** | Retrieves trending articles                     |
| 3    | **Message a model (Gemini)**        | Generates trending topic ideas                  |
| 4    | **Message a model1 (Gemini)**       | Writes full SEO blog content                    |
| 5    | **Code in JavaScript**              | Cleans, validates, and normalizes Gemini output |
| 6    | **HTTP Request (Replicate)**        | Generates an image using Ideogram               |
| 7    | **HTTP Request1**                   | Retrieves generated image URL                   |
| 8    | **Wait + If**                       | Polls until image generation succeeds           |
| 9    | **Edit Fields**                     | Assembles blog fields into final JSON           |
| 10   | **Publish to Supabase**             | Posts to your CMS                               |
| 11   | **Slack Notification**              | Sends message to your Slack channel             |

---

### **🔧 Setup Instructions**

1. **Import the Workflow** in n8n and enable it.
2. Create the following credentials:

   * **NewsAPI (Query Auth)** — from [https://newsapi.org](https://newsapi.org)
   * **Google Gemini (PaLM API)** — use your Gemini API key
   * **Replicate (Bearer Auth)** — API key from [https://replicate.com/account](https://replicate.com/account)
   * **Supabase (Header Auth)** — endpoint to your `/functions/v1/blog-api` (set your key in header)
   * **Slack API** — create a Slack App token with `chat:write` permission
3. Edit the **NewsAPI URL** query parameter to match your industry (e.g., `q=AI automation SaaS`).
4. Update the **Supabase publish URL** to your project endpoint if needed.
5. Adjust the **Slack Channel** name under “Slack Notification”.
6. (Optional) Change the **Schedule Trigger** time as per your timezone.

---

### **💡 Notes & Tips**

* The **Code in JavaScript** node is robust against malformed or extra text in Gemini output — it sanitizes Markdown and reconstructs clean JSON safely.
* You can replace Supabase with any CMS or Webhook endpoint by editing the “Publish to Supabase” node.
* The Replicate model used is `ideogram-ai/ideogram-v3-turbo` — you can swap it with Stable Diffusion or another model for different aesthetics.
* Use the `slug` field in your blog URLs for SEO-friendly links.
* Test with one manual execution before activating scheduled runs.
* If Slack notification fails, verify the token scopes and channel permissions.

---

### **🧩 Tags**

`#AI` `#Automation` `#ContentMarketing` `#BlogGenerator` `#n8n` `#Supabase` `#Gemini` `#Replicate` `#Slack` `#WorkflowAutomation`
