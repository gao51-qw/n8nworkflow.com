# Automate Google Business Profile posts with GPT-4 & Google Sheets

> This powerful n8n workflow automatically generates and publishes Google Business Profile (GMB) posts using topics listed in a Google Sheet.  
It uses **OpenAI** to write SEO-optimized post descriptions and generate **AI images** based on the topic — then posts them directly to your **GMB profile** and marks them as published in the sheet.

---

## 🎯 Use Case  
Perfect for:

- Digital marketers managing local SEO  
- Agencies automating content for clients  
- Businesses regularly posting to GMB  
- Teams managing editorial calendars via Google Sheets

---

## ⚙️ Workflow Overview  

| 🧩 Node                        | 🔧 Purpose |
|-------------------------------|------------|
| 🕘 **Schedule Trigger**        | Runs daily at 9AM (configurable) |
| 📄 **Get Unpublished Row**     | Reads a row from Google Sheet where Status is not marked "Published" |
| ✍️ **Generate Post Text**      | Uses OpenAI (GPT-4) to write a compelling, local-business optimized post |
| 🖼 **Generate Post Image**     | Uses DALL·E or similar to create an image matching the topic |
| 📬 **Post to GMB**             | Publishes the generated content to your Google Business Profile |
| ✅ **Update Sheet**            | Marks the status as "Published" in the Google Sheet |

---

## 📄 Google Sheet Format

| Column Name | Description |
|-------------|-------------|
| Topic       | The subject or idea for the GMB post |
| Status      | Should be blank or "Unpublished" to trigger the flow |
| Date        | (Optional) Posting schedule or note |
| Notes       | (Optional) Internal info — not used in the automation |

---

## 🔐 Google My Business API Setup

### 1. Google Cloud Configuration  
- Go to [Google Cloud Console](https://console.cloud.google.com/)  
- Enable the **Google My Business API**  
- Create **OAuth2 Client ID** and **Client Secret**  
- Add this required scope:  
  ```
### 2. Request for GMB Quota  

- You need to request for GMB (Google Business Profile) API Quota from here, beacuse by deafult it  sets to zero:  https://support.google.com/business/contact/api_default
  ```
### 3. n8n Credential Setup  
- In n8n, go to **Credentials &gt; Google OAuth2**  
- Use your **Client ID** and **Client Secret**  
- Use this credential in GMB-related nodes  

---



## 🧠 OpenAI Prompt Customization

Modify the prompt in the OpenAI node to match your brand’s voice:

### Example Prompt  
```text
Write a short, engaging Google Business Post about: "{{ $json.topic }}".  
Make it suitable for a local audience and include a subtle call to action.
```

---

## 🧪 Optional Enhancements

- Add **If** node to delay publishing on certain days  
- Use **Slack or Email** notifications to alert before/after posting  
- Use **Multiple Businesses** by adding a Router or Switch node per GMB account  

---

## ✅ Benefits

- 🔁 Fully automated GMB posting  
- ✍️ SEO-optimized, AI-written content  
- 🖼 Matching images for visual engagement  
- 📊 Maintains a content log via Google Sheets  
- 🧠 Easily customizable prompt logic and schedule  

## 📊 Basic Information

- **Workflow ID:** 6165
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 385
- **Downloads:** 38
- **Created:** 2025/7/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6165)

## 👤 Author

- **Name:** Muhammad Qaisar Mehmood
- **Username:** @qaisar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **googleSheets** (×2)
- **googleBusinessProfile** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
