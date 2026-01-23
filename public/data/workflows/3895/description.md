![Workflow Image](https://i.ibb.co/zVv3psvZ/n8n-workflow-midia-publish.png)
### Hi! I'm Amanda ❤️
I build intelligent automation flows with n8n and Make. This one is for all content creators, marketing teams, and agencies who want to **publish once and post everywhere**.

With this workflow, you can upload a single video to **YouTube**, **Instagram Reels**, and **TikTok** — simultaneously and automatically.

---

### ✅ What the workflow does

- Downloads a video from a provided URL  
- Uploads the video to your **YouTube** channel with title and description  
- Publishes it as a **Reel on Instagram** via the Meta Graph API  
- Sends the same video to **TikTok** using their official API  
- Supports credential input via `Set` node (tokens, titles, descriptions)

---

### ⚙️ Nodes & Tech Used

- `HTTP Request` – Download video and handle uploads to Instagram & TikTok  
- `YouTube` node – Official n8n integration for video upload  
- `Set` node – For handling user inputs (tokens, titles, video URLs)  
- `Switch`, `Wait`, `Merge` – Logic to control publishing status  
- Manual or webhook start available

---

### 🛠️ Setup Instructions

1. Open the workflow in your **n8n (Cloud or self-hosted)** instance  
2. Edit the `Set` node called `Credentials` and fill in:
   - `Token Instagram`  
   - `Token Tiktok`  
   - `YouTube title`, `description`, and `video URL`  
   - Instagram account ID  
3. Connect your YouTube OAuth credentials in the **YouTube** node  
4. Optionally, trigger via webhook to automate from other apps (Typebot, CRM, Drive)  
5. Hit "Execute Workflow" or schedule via cron

---

### 👥 Who this is for

- Content creators who want to post everywhere at once  
- Agencies managing video distribution across platforms  
- Social media managers and freelancers  
- Anyone wanting a one-click multi-platform publishing workflow

---

### 🌐 Explore more workflows

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)