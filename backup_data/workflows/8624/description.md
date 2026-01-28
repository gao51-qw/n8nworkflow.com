# 🖥️ Automated Website Uptime Monitor with Email Alerts & GitHub Status Page Update  

This n8n workflow continuously monitors your website’s availability, sends **email alerts** when the server goes down, and automatically updates a **status page (index.html)** in your GitHub repository to reflect the live status.  

---

## 📌 Good to Know  
- The workflow checks your website every **2 minutes** (interval configurable).  
- If the website is **down (503, bad response, or error)** → it sends an email alert and updates the GitHub-hosted status page to show **Down**.  
- If the website is **up (200)** → it updates the GitHub-hosted status page to show **Up**.  
- The email notification includes an **HTML-formatted alert page**.  
- You can use GitHub Pages to **host the status page** publicly.

### ℹ️ What is GitHub Pages?  
- GitHub Pages is a free hosting service provided by GitHub that lets you publish **static websites (HTML, CSS, JS)** directly from a GitHub repository.  
- You can use it to make your `index.html` status page publicly accessible with a URL like:    


### ⚡ How to Set Up GitHub Pages for Your Status Page  
1. Create a **new repository** on GitHub (recommended name: `status`).  
2. Add a blank `index.html` file (n8n workflow will later update this file).  
3. Go to your repository → **Settings** → **Pages**.  
4. Under **Source**, select the branch (`main` or `master`) and folder (`/root`).  
5. Save changes.  
6. Your status page will now be live at: `https://&lt;USERNAME&gt;.github.io/status`


## ✅ Prerequisites  
- An **n8n instance** (self-hosted or cloud).  
- A **GitHub account & repository** (to host the status page).  
- A **Gmail account** (or any email service supported by n8n – example uses Gmail).  
- Access to the target **website URL** you want to monitor.  

---

## ⚙️ How it Works  
1. **Schedule Trigger** → Runs every 2 minutes.  
2. **HTTP Request** → Pings your website URL.  
3. **Switch Node** → Evaluates the response status (200 OK vs error/503).  
4. **Code Node** → Generates a dynamic **HTML status page** (Up/Down).
5. **GitHub Repo & File** → Github Repo Name Should be `https://github.com/&lt;OWNER_NAME&gt;/status` (recommended) & Must have(required) a blank file named as `index.html` before triggering this flow.
5. **GitHub Node** → Updates/commits the `index.html` file in your repository.  
6. **Gmail Node** → Sends an email alert if the site is down.  

---

## 🚀 How to Use  
1. Import the workflow JSON into your **n8n instance**.  
2. Configure credentials for:  
   - **GitHub** (Personal Access Token with repo permissions).  
   - **Gmail** (or your preferred email service).  
3. Replace the following:  
   - `https://app.yourdomain.com/health` → with your own website URL.  
   - `example@gmail.com` → with your email address (or distribution list).  
   - GitHub repo details → with your repository where `index.html` will live.  
4. Deploy the workflow.  
5. (Optional) Enable **GitHub Pages** on your repo to serve `index.html` as a live status page.  

---

## 🛠 Requirements  
- n8n v1.0+  
- GitHub personal access token  
- Gmail API credentials (or SMTP/email service of your choice)  

---

## 🎨 Customising this Workflow  
- **Interval** → Change schedule from 2 minutes to any desired frequency.  
- **Email Content** → Modify HTML alert template in the Gmail node.  
- **Status Page Styling** → Edit the HTML/CSS in the Code node to match your branding.  
- **Error Handling** → Extend Switch node for other status codes (e.g., 404, 500).  
- **Multiple Websites** → Duplicate HTTP Request + Switch nodes for multiple URLs.  

---

## 👤 Who Can Use It?  
- **DevOps & SRE Engineers** → For automated uptime monitoring.  
- **Freelancers/Developers** → To monitor client websites.  
- **Startups & SMEs** → For a free, lightweight status page without paid tools.  
- **Educators/Students** → As a hands-on learning project with n8n.  

---

## 🌟 Key Features  
- 🔄 Automated uptime checks (configurable interval).  
- 📧 Email notifications on downtime.  
- 📝 Dynamic HTML status page generation.  
- 🌍 GitHub Pages integration for public visibility.  
- ⚡ Lightweight & cost-effective (no paid monitoring tool needed).  

---

## 🔗 Tools Integration  
- **n8n** – Orchestration & automation.  
- **GitHub** – Version control + hosting of status page.  
- **Gmail** – Email notifications.  
- **HTTP Request** – Website availability check.  

---

## 📈 Example Use Cases  
- Personal website monitoring with public status page.  
- Monitoring SaaS apps & notifying support teams.  
- Internal company services uptime dashboard.  
 