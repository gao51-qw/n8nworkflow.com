# 🧠 **Sentiment Analyzer**

Google Sheets → OpenAI GPT-4o → QuickChart → Gmail

---

## 🚀 What this workflow does

1. **Fetches customer reviews** from a Google Sheet.
2. **Classifies each review** as **Positive**, **Neutral** or **Negative** with GPT-4o-mini.
3. **Writes the sentiment** back to your sheet.
4. **Builds a doughnut chart** summarising the totals.
5. **Emails the chart** to your chosen recipient so the whole team stays in the loop.

Perfect for support teams, product managers or anyone who wants a zero-code mood ring for their users’ feedback.

---

## 🗺️ Node-by-node tour

| 🔩 Node                                                 | 💡 Purpose                                                 |
| ------------------------------------------------------- | ---------------------------------------------------------- |
| **Manual Trigger**                                      | Lets you test the workflow on demand.                      |
| **Select Google Sheet**                                 | Points to the spreadsheet that holds your reviews.         |
| **Loop Over Items**                                     | Feeds each row through the analysis routine.               |
| **Sentiment Analysis (LangChain)**                      | Calls GPT-4o-mini and returns only the sentiment category. |
| **Update Google Sheet**                                 | Writes the new **Sentiment** value into column C.          |
| **Read Data from Google Sheet**                         | Pulls the full sheet again to create a summary.            |
| **Extract Number of Answers per Sentiment (Code node)** | Tallies up how many reviews fall into each category.       |
| **Generate QuickChart**                                 | Creates a doughnut (or pie) chart as a PNG.                |
| **Send Gmail with Sentiment Chart**                     | Fires the chart off to your inbox.                         |
| *(Sticky Notes)*                                        | Friendly setup tips scattered around the canvas.           |

---

## 🛠️ Setup checklist

| ✅ Step                                                                                | Where                            |
| ------------------------------------------------------------------------------------- | -------------------------------- |
| **Connect Google Sheets** → paste your **Spreadsheet ID** & choose the correct sheet. | All Google Sheets nodes          |
| **Add OpenAI credentials** (sk-… key).                                                | Sentiment Analysis node          |
| **Configure Gmail OAuth2 + recipient address.**                                       | Gmail node                       |
| **Match your sheet columns** → “Review title”, “Review text”, empty “Sentiment”.      | Google Sheet itself              |
| *(Optional)* Switch to **gpt-4o** for maximum accuracy.                               | Sentiment Analysis “Model” param |

---

## 🏃‍♂️ How to run

1. Drop a few sample reviews into the sheet.
2. Click **“Test workflow”** on the Manual Trigger.
3. Watch each row march through → sentiment appears in column C.
4. After all rows finish, check your inbox for a fresh chart. ✔️

---

## ✨ Ideas for next level

* **Schedule** the trigger (Cron) to auto-process new reviews daily.
* Feed the counts to **Slack** or **Discord** instead of email.
* Add a second GPT call to generate a short summary for each review.

---

Happy automating! 🎉
