## ✅ What problem does this workflow solve?

Manual checking of OMR (Optical Mark Recognition) answer sheets is time-consuming, error-prone, and difficult to scale—especially for schools, coaching institutes, and exam centers.  
This workflow automates **OMR evaluation end-to-end** using AI, from reading a scanned answer sheet image to calculating scores and storing structured results in Google Sheets.

---

## ⚙️ What does this workflow do?

1. Accepts a **scanned OMR answer sheet image** via webhook.
2. Uses **AI vision** to extract only the marked answers from the sheet.
3. Extracts basic **student details** (Name, Roll Number, Class).
4. Compares extracted answers with a predefined **answer key**.
5. Calculates:
   - Total questions
   - Correct answers
   - Incorrect answers
   - Score percentage
6. Generates **question-wise binary results** (1 = correct, 0 = incorrect).
7. Stores the complete result in **Google Sheets**.
8. Returns a structured **JSON response** to the calling system.

---

## 🧠 How It Works – Step by Step

### 1. 📥 Webhook Trigger (Student OMR Upload)
- A client uploads the OMR image via a `POST` request.
- Image is received as `form-data` (`key: file`).

### 2. 👁️ AI-Based OMR Image Analysis
- An AI vision model analyzes the image.
- Strict rules ensure:
  - Only answer bubbles are considered
  - Multiple markings → darkest option is selected
  - Unmarked questions are skipped
  - No guessing or hallucination
- Output includes:
  - Student details
  - Question–answer pairs

### 3. 🔄 Answer Formatting
- Raw AI output is converted into a clean, structured format:
  - `1:A, 2:B, 3:C, ...`
- Student metadata is preserved separately.

### 4. 🧮 Answer Key Setup
- Correct answers are defined inside the workflow (editable anytime).
- Supports any number of questions.

### 5. 📊 Result Calculation
- User answers are compared with the answer key.
- Generates:
  - Correct / Incorrect counts
  - Percentage score
  - Detailed per-question result
  - Binary output (`Q.1 = 1 / 0`) for analytics

### 6. 📄 Google Sheets Logging
- Results are appended to a Google Sheet with columns such as:
  - Student Name
  - Roll No
  - Class
  - Correct
  - Incorrect
  - Score Percentage
  - Q.1 → Q.n (binary values)

### 7. 📤 API Response
- Workflow responds with a JSON payload containing:
  - Student details
  - Full evaluation summary
  - Per-question analysis

---

## 📂 Sample Google Sheet Output

| Student Name | Roll No | Class | Correct | Incorrect | Score % | Q.1 | Q.2 | Q.3 | ... |
|-------------|--------|-------|---------|-----------|---------|-----|-----|-----|-----|
| Rahul Shah | 1023 | 10-A | 16 | 4 | 80% | 1 | 0 | 1 | ... |

---

## 🛠 Integrations Used

- 🤖 **AI Vision Model** – for accurate OMR detection
- ⚙️ **n8n Webhook** – to accept image uploads
- 🧠 **Custom Code Nodes** – for parsing and evaluation logic
- 📊 **Google Sheets** – for persistent result storage

---

## 👤 Who can use this?

This workflow is ideal for:
- 🏫 **Schools & Colleges**
- 📚 **Coaching Institutes**
- 🧪 **Online Exam Platforms**
- 🧑‍💻 **EdTech Developers**
- 📝 **Mock Test Providers**

If you need fast, reliable, and scalable OMR checking without expensive hardware—this workflow delivers.

---

## 🚀 Benefits

- ⏱ Saves hours of manual checking
- 🎯 Eliminates human error
- 📊 Produces analytics-ready data
- 🔄 Easy to update answer keys
- 🌐 API-ready for integration with any system

---

## 📦 Ready to Deploy?

Just configure:
- ✅ AI model credentials
- ✅ Google Sheets access
- ✅ Your correct answer key

…and start evaluating OMR sheets automatically at scale.
