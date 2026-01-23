## ✅ What problem does this workflow solve?

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
