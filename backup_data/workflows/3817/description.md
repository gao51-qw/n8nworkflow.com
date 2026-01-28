#### **Who is this template for?**

Growth teams, SDRs, recruiters, or anyone who routinely hunts for hard‑to‑find business emails and would rather spend time reaching out than guessing formats.

#### **What problem does this workflow solve?**

Manually piecing together email patterns, cross‑checking them in a verifier, and updating a tracking sheet is slow and error‑prone. This template automates the entire loop—research, guess, verify, and log—so you hit **Start** and watch rows fill up with ready‑to‑send addresses.

#### **What this workflow does**

1. **Pull fresh leads** – Grabs only the rows in your Google Sheet where `Status` = `FALSE`.
2. **Find the company pattern** – Queries **Serper.dev** for snippets and feeds them to **Gemini Flash** (via OpenRouter) to spot the dominant email format.
3. **Build the address** – Constructs a likely email for every first/last name.
4. **Verify in real time** – Pings **Prospeo** by default (API) *or* lets you bulk‑clean in **Sparkle.io**.
5. **Write it back** – Updates the sheet with pattern, email, confidence, verification status, and flips `Status` to `TRUE`.
6. **Loop until done** – Runs batch‑by‑batch so you never hit API limits.

---

### 🆓 **Work free‑tier magic (up to \~2,500 contacts/month)**

| Service        | Free allowance                | How this template uses it                                                            |
| -------------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| **Serper.dev** | 2,500 searches/mo             | Scrapes three public email snippets per domain to learn the pattern                  |
| **Sparkle.io** | 10,000 bulk verifications/day | Manual *upload‑download* option—perfect to clean your first 2.5k emails at zero cost |
| **Prospeo**    | 75 API calls/mo             | Built‑in if you prefer *fully automated* verification                                |

**Quick Sparkle workflow:**

1. Let the template generate emails.
2. Export the “Email” column to CSV → upload to Sparkle.io.
3. Download the results and paste the "verification\_status" back into the sheet (or add a small n8n import sub‑flow).

---

#### **Setup (5 minutes)**

1. **Copy the Google Sheet** linked in the sticky note and paste its ID into the *Get Rows* and *Update Rows* nodes.
2. Add credentials for Google Sheets, Serper (X‑API‑KEY), OpenRouter, and *optionally* Prospeo.
3. Hit **Execute Workflow**—that’s it.

---

#### **How to customise**

* **Prefer Sparkle for volume:** Skip the Prospeo node, export emails in one click, bulk‑verify in Sparkle, and re‑import results.
* **Swap the search source:** Replace the *Get Email Pattern* HTTP node with Bing, Brave, etc.
* **Extend enrichment:** Add phone look‑ups or LinkedIn scrapers before the *Update Rows* node.
* **Auto‑run:** Replace the Manual Trigger with a Cron node so the sheet cleans itself every morning.

---

### **Additional resources**

| Tool                                                                                                                              | Purpose                                   | Link                                                     |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------- |
| **Prospeo** – API‑ready email verification<br><sub>**Special offer:** 20 % free credits for the first 3 months on any plan using this link!</sub> | Real‑time, single‑call mailbox validation | [prospeo.io](https://prospeo.io/?via=naveen) |
| **Sparkle.io** – high‑volume bulk verifier (manual upload)                                                                        | Free daily quota of 10 000 verifications  | [app.sparkle.io/sign‑up](https://app.sparkle.io/sign-up) |
| **OpenRouter** – API gateway for Gemini Flash & other LLMs                                                                        | One key unlocks multiple frontier models  | [openrouter.ai](https://openrouter.ai/)                  |
| **Serper.dev** – Google Search API                                                                                                | 2 500 searches/month on the free tier     | [serper.dev](https://serper.dev/)                        |

Add the relevant keys or signup details from these links, drop them into the matching n8n credentials, and you’re all set to enrich your first 2 500 contacts at zero cost. Happy building!
