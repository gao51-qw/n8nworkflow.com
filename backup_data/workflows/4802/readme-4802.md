# ✍️ Blog image SEO & size auditor with Ghost and Google Sheets

> ***Tags**: Ghost CMS, SEO Audit, Image Optimisation, Alt Text, Google Sheets, Automation*

### Context

Hi! I’m [Samir](https://samirsaci.com) — a Supply Chain Engineer and Data Scientist based in Paris, and founder of [LogiGreen Consulting](https://logi-green.com).

I help companies and content creators use automation and analytics to **improve visibility**, **enhance performance**, and **reduce manual work**.

&gt; Let’s use n8n to automate SEO audits to increase your traffic!

📬 For business inquiries, feel free to connect on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This workflow is perfect for **bloggers, marketers, or content teams** using **Ghost CMS** who want to:

- Extract and review **all images** from articles  
- Detect missing or short **alt texts**  
- Check image **file size** and **filename SEO compliance**  
- Push the audit results into a **Google Sheet**

[![Example of Results](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-24.png)]((https://bit.ly/playlist-n8n-supplyscience))

### How does it work?

This n8n workflow extracts all blog posts from Ghost CMS, scans the HTML to collect all embedded images, then evaluates each image for:

- ✅ Presence and length of `alt text`  
- 📏 File size in kilobytes  
- 🔤 Filename SEO quality (e.g. lowercase, hyphenated, no special chars)  

All findings are written to Google Sheets for **further analysis** or **manual cleanup**.

### 🧭 Workflow Steps:

1. 🚀 Trigger the workflow manually or on schedule  
2. 📰 Extract blog post content from Ghost CMS  
3. 🖼️ Parse all `<img>` tags with `src` and `alt` attributes  
4. 📤 Store image metadata in a Google Sheet (step 1)  
5. 🌐 Download each image using HTTP request  
6. 🧮 Extract file size, extension, and filename SEO flag  
7. 📄 Update the audit sheet with size and format insights

[![Workflow](https://www.samirsaci.com/content/images/size/w1600/2025/06/image-25.png)]((https://bit.ly/playlist-n8n-supplyscience))

### What do I need to get started?

This workflow requires:

- A **Ghost Content API key**  
- A **Google Sheet** (to log audit results)  
- No AI or external APIs required — works fully with built-in nodes
- 
### 📺 Learn More with n8n Tutorials 

Get hands-on experience with automation through my comprehensive **n8n tutorial playlist**, featuring 18+ complete, step-by-step videos and ready-to-use templates.

[![n8n Playlist](https://www.samirsaci.com/content/images/size/w1600/2025/11/image-9.png)](https://bit.ly/playlist-n8n-supplyscience)


### Next Steps

🗒️ Follow the sticky notes inside the workflow to:

- Plug in your Ghost blog credentials  
- Select or create a Google Sheet  
- Run the audit and start improving your SEO!

*This template was built using n8n v1.93.0*  
*Submitted: June 8, 2025*



## 📊 Basic Information

- **Workflow ID:** 4802
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 784
- **Downloads:** 78
- **Created:** 2025/6/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4802)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **ghost** 
- **set** 
- **splitInBatches** (×2)
- **code** (×2)
- **googleSheets** (×3)
- **httpRequest** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
