# 🧲 AI-Powered Lead Magnet Idea Generation from Topic List

This n8n workflow automatically generates **lead magnet ideas** based on topics and website URLs stored in a Google Sheet. It uses the [Lead Magnet Idea Generator AI API](https://rapidapi.com/PrineshPatel/api/lead-magnet-idea-generator-ai) to produce relevant, value-driven ideas that marketers can turn into checklists, guides, templates, and more.

---

## 🔧 What This Workflow Does

1. **Monitors a Google Sheet** for new or updated rows using a Drive trigger.
2. **Reads all rows** and identifies entries where:
   - The `Topic` column is **not empty**
   - The `Content` (idea) column is **empty**
3. **Sends a request** to the Lead Magnet Idea Generator AI API:
   - Input: `Topic` + `Website URL`
   - Output: AI-generated lead magnet idea
4. **Writes the idea** back to the same Google Sheet with a timestamp.
5. **Repeats** the process automatically every minute.

---

## 🌐 API Used

- **Name:** [Lead Magnet Idea Generator AI](https://rapidapi.com/PrineshPatel/api/lead-magnet-idea-generator-ai)
- **API Endpoint:** `https://lead-magnet-idea-generator-ai.p.rapidapi.com/index.php`
- **Method:** `POST`
- **Headers:**
  - `x-rapidapi-host: lead-magnet-idea-generator-ai.p.rapidapi.com`
  - `x-rapidapi-key: YOUR_RAPIDAPI_KEY`
- **Body Params:**
  - `topic`
  - `website`

---

## ✅ Benefits

| Feature                         | Value                                                           |
|----------------------------------|------------------------------------------------------------------|
| 🔄 Automated Flow               | No manual entry needed — runs every minute                       |
| 🧠 AI-Based Content Ideation    | Smart suggestions tailored to your topic and brand               |
| 📝 Google Sheets Integration    | Easy to manage, edit, and view input/output in one place         |
| 🕒 Timestamp Tracking           | Know exactly when each idea was generated                        |
| 🚫 No Duplicate Processing      | Only rows missing ideas are sent to the API                      |
| 💼 Scalable for Teams           | Plug-and-play for any team managing multiple content ideas        |

---

## ❌ Challenges This Solves

| Old Challenge                              | New Workflow Solution                                           |
|--------------------------------------------|------------------------------------------------------------------|
| Manual brainstorming of lead magnet ideas  | Fully automated idea generation via API                         |
| Missing or inconsistent content in sheets  | Only incomplete rows are updated with valid ideas               |
| Lack of traceability                       | Timestamp logs show when each idea was generated                |
| Wasting time on repetitive tasks           | Workflow handles idea generation while you focus on execution   |

---

## 📌 Requirements

- ✅ A valid [RapidAPI key](https://rapidapi.com/PrineshPatel/api/lead-magnet-idea-generator-ai)
- ✅ Google Sheets & Google Drive credentials set up in n8n
- ✅ Google Sheet structured with the following columns:

| Column Name     | Purpose                                                | Required |
|------------------|----------------------------------------------------------|----------|
| `Topic`          | Main subject for which the idea is generated            | ✅ Yes   |
| `Website Url`    | Optional URL to provide brand context for the API       | ❌ No    |
| `Content`        | Will be filled with the AI-generated lead magnet idea   | ✅ Yes   |
| `Generated Date` | Timestamp when the idea was created                     | ✅ Yes   |

---

## 🧩 Technologies Used

- **n8n** – Automation platform
- **Google Sheets** – For storing topics and generated ideas
- **Google Drive Trigger** – To initiate the workflow
- **[Lead Magnet Idea Generator AI API](https://rapidapi.com/PrineshPatel/api/lead-magnet-idea-generator-ai)** – For content generation
- **HTTP Request node** – To communicate with the API
- **If / Wait / Split In Batches nodes** – For conditional logic and throttling

---

## 🧠 Example Use Cases

- Content marketing teams planning lead magnets for blog posts
- Agencies creating assets for multiple clients
- Email list-building strategists generating downloadable content ideas
- Business owners who want quick suggestions without manual brainstorming

---

Create your **free n8n account** and set up the workflow in just a few minutes using the link below:

👉 [Start Automating with n8n](https://n8n.partnerlinks.io/7fuarh1e6dz5)

Save time, stay consistent, and grow your LinkedIn presence effortlessly!