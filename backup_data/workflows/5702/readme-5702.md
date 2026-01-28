# 🚀 Automated Stripe payment recovery: track failures & follow-up emails

> # 🚀 **Automated Stripe Payment Recovery Workflow (n8n)**

Detect failed payments, log them, and send polite follow-up emails to recover revenue — all automated with n8n.

---

## ✅ **Part A – Detect & log failed payments**

**What it does:**

* Listens for failed Stripe payments.
* Extracts customer & payment info.
* Logs them neatly in Google Sheets for follow-up.

**🧩 Nodes:**

1️⃣ **Stripe Trigger**

* Listens to:

  ```
  payment_intent.payment_failed
  ```

2️⃣ **Set node**

* Extracts & maps fields:

  * Name, Email, Amount (in cents), Currency
  * payment\_intent\_id
  * added\_at → `{{ $now }}`
  * email\_sent\_count → `0`

3️⃣ **Remove Duplicates**

* Keeps the sheet clean (avoids duplicate rows).

4️⃣ **Google Sheets node**

* Append or update row:

  * Name, Email, Amount/100, Currency, payment\_intent\_id, added\_at, email\_sent\_count

&gt; 📌 This builds your “failed payments queue” to drive the follow-up emails later.

---

## 🔁 **Part B – Daily follow-up emails**

**What it does:**

* Runs daily.
* Checks which users haven’t received 2 emails yet.
* Sends reminder emails and tracks how many were sent.

**🧩 Nodes:**
1️⃣ **Schedule Trigger**

* Runs every day at 10 AM (`0 10 * * *`)

2️⃣ **Get Payment Failure Leads**

* Reads rows from Google Sheet.

3️⃣ **Switch node (Check for no. of emails sent)**

* If `email_sent_count &lt; 1` → send first email.
* Else if `email_sent_count &lt; 2` → send second email.
* Else → mark as "quit sending emails".

4️⃣ **Send First Email**

* Sends a gentle reminder with billing page button.

5️⃣ **Update Email Count**

* Increments `email_sent_count` by +1 in Google Sheets.

6️⃣ **Send Second Email**

* Sends final, urgent reminder.

7️⃣ **Quit Sending Emails to these Leads**

* Marks that no more emails should be sent.

---

## 📝 **Headline**

&gt; **🚀 Automated Stripe Payment Recovery: Track Failures & Send Follow-Up Emails via n8n**

---

## ✅ **Why this matters:**

* Catch failed payments automatically.
* Log every attempt & follow-up count.
* Recover lost revenue while staying polite and respectful.
* Avoid spamming by capping follow-ups to 2 emails.

## 📊 Basic Information

- **Workflow ID:** 5702
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 298
- **Downloads:** 29
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5702)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **stripeTrigger** 
- **set** 
- **googleSheets** (×4)
- **removeDuplicates** 
- **scheduleTrigger** 
- **switch** 
- **sendInBlue** (×2)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
