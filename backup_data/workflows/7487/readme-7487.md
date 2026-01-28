# Product marketing assets generator with VEO 3, OpenAI & Airtable

> ![Screenshot 20250817 at 04.55.08.png](fileId:2143)
---

# AI-Powered Flyer & Video Generator with Airtable, Klie.ai, and n8n

### Who is this for?

This template is perfect for e-commerce entrepreneurs, marketers, agencies, and creative teams who want to turn simple product photos and short descriptions into professional flyers or product videos—automatically and at scale.

If you want to generate polished marketing assets without relying on designers or editors, this is for you.

---

### What problem is this workflow solving?

Creating product ads, flyers, or videos usually involves multiple tools and manual steps:

* Collecting and cleaning product photos
* Writing ad copy or descriptions
* Designing flyers or visuals for campaigns
* Producing animations or video ads
* Managing multiple revisions and approvals

This workflow automates the entire pipeline. Upload a raw product image into Airtable, type a quick description, and receive back a flyer or video animation tailored to your brand and context—ready to use for ads, websites, or campaigns.

---

### What this workflow does

* Uses **Airtable** as the central interface where you upload raw product photos and enter descriptions
* Processes the content automatically via **n8n**
* Generates **flyers and visuals** using **OpenAI Image 1**
* Produces **custom product videos** with **Google’s VEO3**
* Runs through **Klie.ai** to unify the image + video generation process
* Sends the final creative assets back into Airtable for review and download

---

### Setup

1. **Download n8n files** and connect your Airtable token to n8n
2. **Duplicate the Airtable base** and make sure you’re on an Airtable Team plan
3. Add your **API key** on the Airtable interface under **API setup**
4. **Create your agency** inside the interface
5. Start generating **concept images and videos** instantly

---

### How to customize this workflow to your needs

* Edit the prompts to match your **brand voice and ad style**
* Extend Airtable fields to include more creative parameters (colors, layout, target audience)
* Add approval steps via email, Slack, or Airtable statuses before finalizing
* Integrate with publishing platforms (social media, e-commerce CMS) for auto-posting
* Track generated assets inside Airtable for team collaboration

---

🎥 **Demo Video:** [Demo Video](https://youtu.be/J1G3rKBnH7w)

---


## 📊 Basic Information

- **Workflow ID:** 7487
- **Complexity:** advanced
- **Node Count:** 47
- **Views:** 676
- **Downloads:** 67
- **Created:** 2025/8/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7487)

## 👤 Author

- **Name:** Ruben AI
- **Username:** @rubenai

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **switch** 
- **airtable** (×8)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **splitOut** (×3)
- **splitInBatches** 
- **code** (×2)
- **aggregate** (×3)
- **httpRequest** (×6)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.toolThink** (×2)
- **limit** 
- **wait** (×2)
- **stickyNote** (×11)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 47 nodes with 31 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
