## ✅ What problem does this workflow solve?

Sending a plain PDF resume doesn’t stand out anymore. This workflow allows candidates to **convert their resume and photo into a personalized video resume**.
Recruiters get a more engaging first impression, while candidates showcase their profile in a modern, impactful way.

---

## ⚙️ What does this workflow do?

1. Presents a form for uploading:
   - 📄 Resume (PDF)
   - 🖼 Photo (headshot)
2. Extracts key details from the resume (education, experience, skills).
3. Detects gender from the photo to choose a suitable voice/avatar.
4. Generates a **script** (spoken resume summary) based on the extracted information.
5. Uploads the photo to **HeyGen** to create an avatar.
6. Requests **video generation** on HeyGen:
   - Uses the avatar photo
   - Uses gender-specific settings
   - Uses the generated script as narration
7. Monitors video generation status until completion.
8. Stores the final **video URL** in a Google Sheet for easy access and tracking.

---

## 🔧 Setup Instructions

### Google Services
- Connect **Google Sheets** to n8n to store records with:
  - Candidate name
  - Resume link
  - Video link

### HeyGen Setup
- Get an API key from [HeyGen](https://www.heygen.com).
- Configure:
  - **Avatar upload endpoint** (image upload)
  - **Video generation endpoint** (image ID + script)

### Form Setup
- Use the **n8n Form Trigger** to allow candidates to upload:
  - Resume (PDF)
  - Photo (JPEG/PNG)

---

## 🧠 How it Works – Step-by-Step

### 1. Candidate Submission
A candidate fills out a form and uploads:
- Resume (PDF)
- Photo

### 2. Extract Resume Data
- The resume PDF is processed using OCR/AI to extract:
  - Name
  - Experience
  - Skills
  - Education highlights

### 3. Gender Detection
- The uploaded photo is analyzed to detect gender (used for voice/avatar selection).

### 4. Script Generation
- Based on the extracted resume info, a concise, natural **script** is generated automatically.

### 5. Avatar Upload & Video Creation
- The photo is uploaded to **HeyGen** to create a custom avatar.
- A video generation request is made using:
  - The script
  - The avatar (image ID)
  - A matching voice for the detected gender

### 6. Video Status Monitoring
- The workflow polls HeyGen’s API until the video is ready.

### 7. Save Final Video URL
- Once complete, the **video link** is added to a Google Sheet alongside the candidate’s details.

---

## 👤 Who can use this?

This workflow is ideal for:
- 🧑‍🎓 **Students and job seekers** looking to stand out
- 🧑‍💼 **Recruitment agencies** offering modern resume services
- 🏢 **HR teams** wanting engaging candidate submissions
- 🎥 **Portfolio builders** for professionals

---

## 🚀 Impact

Instead of a static PDF, you can now send a **dynamic video resume** that captures attention, adds personality, and makes a lasting impression.

