# AI Testimonial Extractor Agent: Feedback to Marketing Gold

**Subtitle:** Feedback to Marketing Gold

### 🌍 Overview

This workflow transforms **raw customer feedback** from Google Forms into **short, emotionally engaging testimonials** using Google Gemini.
It then saves the testimonial back into Google Sheets and notifies the marketing team via email.

Think of it as your **automatic testimonial assistant**.

---

## 🟢 Section 1: Trigger – Capture New Feedback

🔗 **Node:** `New Form Response Trigger` (Google Sheets Trigger)

* Watches for **new rows** added to a Google Sheet (linked to your form).
* Starts the workflow whenever a customer submits feedback.

💡 **Why useful?**
No manual copy-pasting — the process kicks off instantly.

📩 Example:
Someone fills in:

&gt; “The product made my workflow so much easier — I finished tasks in half the time!”

---

## 🟦 Section 2: AI Extraction with Gemini

🔗 **Nodes:**

* `Extract Testimonial with Gemini` → Uses **Google Gemini Flash** to rephrase the raw feedback into a concise testimonial.
* `Google Gemini Chat Model` → Supports the LLM chain.

🧠 **Prompt Logic:**

* Keep only the **emotional & engaging part**.
* Remove neutral/irrelevant text.
* Return only the testimonial quote.

💡 **Why useful?**
Raw feedback is often long or messy → Gemini cleans it up into a **marketing-ready quote**.

📩 Example output:

&gt; “This tool cut my work time in half and boosted my productivity instantly!”

---

## 🟣 Section 3: Save to Database

🔗 **Node:** `Save Extracted Testimonial` (Google Sheets)

* Saves the following data into the sheet:

  * **Timestamp**
  * **Name**
  * **Email**
  * **Original Feedback**
  * **Extracted Testimony**

💡 **Why useful?**
Keeps an **organized log of all testimonials** in one place.

---

## 🟡 Section 4: Notify the Marketing Team

🔗 **Node:** `Notify Marketing Team` (Gmail)

* Sends an **email alert** with the new testimonial.
* Subject: `New Testimonial Extracted`
* Body: Contains the extracted quote.

💡 **Why useful?**
Your team gets notified in real time → no need to keep checking the sheet.

---

## 📊 Workflow Summary

| Section          | Node(s)               | Purpose                          | Benefit                    |
| ---------------- | --------------------- | -------------------------------- | -------------------------- |
| 🟢 Trigger       | Google Sheets Trigger | Detects new form submissions     | Fully automated start      |
| 🟦 AI Extraction | Gemini LLM Chain      | Turns raw feedback → testimonial | Marketing-ready content    |
| 🟣 Save          | Google Sheets         | Logs testimonial + user info     | Organized central database |
| 🟡 Notify        | Gmail                 | Emails marketing team            | Real-time updates          |

---

## 🚀 Benefits

* **Automation** → No manual editing or sorting needed.
* **Consistency** → Every testimonial is short, emotional, and engaging.
* **Centralized storage** → Everything logged in Google Sheets.
* **Team alignment** → Marketing notified instantly.

---

⚡ Bonus: You already added **Sticky Notes** inside the workflow → makes it beginner-friendly for anyone opening it in n8n.

---