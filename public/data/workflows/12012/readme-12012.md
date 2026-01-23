# Automate AI-powered quiz generation from PDFs with Google Forms

> ## ✅ What problem does this workflow solve?

Teachers, coaches, and educators spend **hours manually creating quizzes** from study notes and PDFs. This workflow eliminates that effort by using **AI to convert PDF study material into fully functional quizzes**, complete with scoring, student tracking, and Google Form integration — all automatically.

---

## ⚙️ What does this workflow do?

- Accepts study material as a **PDF upload**
- Extracts educational content from the document
- Uses AI to generate **high-quality MCQ questions**
- Automatically creates a **Google Quiz Form**
- Saves all questions and correct answers for teacher reference
- Enables **instant scoring and response tracking** for students

---

## 🧠 How It Works – Step-by-Step

### 1. 📄 Upload Study Material (PDF)
- Teachers upload a PDF via an **n8n Form Trigger**
- They specify how many quiz questions they want

### 2. 📚 PDF Parsing & AI Question Generation
- The workflow extracts text from the PDF
- An **AI Teacher Agent** powered by :contentReference[oaicite:1]{index=1}:
  - Identifies key learning concepts
  - Generates **multiple-choice questions**
  - Ensures:
    - 4 options per question
    - One correct answer
    - Clear and student-friendly language

### 3. 📝 Quiz Creation (Google Forms)
- A new **Google Form** is created automatically
- Quiz mode is enabled with:
  - Point values
  - Correct/incorrect feedback
  - Option shuffling
- Student detail fields (Name, Email, ID, Class) are added

### 4. 📊 Teacher Reference & Record Keeping
- All generated questions are logged in **Google Sheets**
- Stored data includes:
  - Question text
  - All options
  - Correct answers
  - Quiz URL

### 5. 🎓 Student Submission & Scoring
- Students take the quiz via Google Forms
- Scores are calculated automatically
- Teachers receive all responses in the connected Google Sheet

---

## 🛠 Tools & Integrations Used

- **n8n Form Trigger** – File upload & inputs
- **PDF Parser** – Extracts text from documents
- **OpenAI Chat Model** – AI question generation
- **Google Forms API** – Quiz creation & scoring
- **Google Sheets** – Question storage & response tracking

---

## 💡 Key Benefits

- ⏱ Saves hours of manual quiz creation
- 📚 Ensures pedagogically sound questions
- 📊 Automatic grading & analytics
- 🧠 Consistent difficulty & coverage
- 🔁 Easily reusable for different subjects

---

## 👤 Who can use this?

Perfect for:
- 🧑‍🏫 **Teachers & Professors**
- 🏫 **Coaching centers**
- 🎓 **EdTech & LMS platforms**
- 🚀 **SaaS founders building quiz tools**

If you want to transform static PDFs into **interactive, AI-generated assessments**, this workflow is built for you.


## 📊 Basic Information

- **Workflow ID:** 12012
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 93
- **Downloads:** 9
- **Created:** 2025/12/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/12012)

## 👤 Author

- **Name:** InfyOm Technologies
- **Username:** @infyom

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **httpRequest** (×4)
- **extractFromFile** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **formTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **code** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
