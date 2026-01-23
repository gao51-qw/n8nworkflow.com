# 🧠 AI-Powered Outreach Engine (Jotform + Gemini AI + HeyReach + Data Tables)

## 🚀 Overview  
This workflow turns every **Jotform submission** — whether from your website or a live marketing campaign — into a **fully automated, AI-personalized outreach sequence**.  

Using **Google Gemini AI**, it instantly generates LinkedIn messages and email content tailored to each lead’s company and context.  
Depending on the data provided (like LinkedIn profile or email), it automatically routes the message to the right platform — **HeyReach for LinkedIn outreach** or **Gmail for email follow-up** — and logs all activity into **n8n Data Tables** for tracking and visibility.  

The result? Zero manual copywriting, zero campaign setup, and instant activation of every inbound lead through personalized, human-sounding communication.

---

## ⚙️ What It Does  
- **Trigger:** Starts when a new submission is received from a Jotform attached to your website or ongoing campaign.  
- **Lead Enrichment (Optional):** You can add an enrichment node (like Clearbit) to pull company, role, and domain details.  
- **AI Message Generation:**  
  - Uses **Google Gemini AI (LangChain)** to write both a **LinkedIn outreach message** and a **short, conversational email**.  
  - Each message is context-aware — referencing the company, role, or query captured from the Jotform submission.  
- **Conditional Routing Logic:**  
  - If the form includes a **LinkedIn URL**, the workflow sends the lead and message to **HeyReach**, adding them to the correct campaign automatically.  
  - If not, it sends the **email variant** via **Gmail**, ensuring no lead is missed.  
- **Data Tracking:**  
  - All lead details, messages, and campaign statuses are automatically saved into **n8n Data Tables**, creating a single source of truth for your outreach history.  
- **Result:** Personalized, multi-channel follow-up happens in seconds — turning inbound form leads into active, engaged prospects instantly.  

---

## 🧠 Example Use Case  
Imagine a SaaS or marketing agency running a “Request a Demo” or “Get Pricing” campaign via a Jotform on their website.  
With this workflow, every time someone fills the form:  
1. Their details are captured and stored in **n8n Data Tables**.  
2. **Gemini AI** instantly writes a relevant, human-sounding LinkedIn and email message.  
3. The lead is automatically added to a **HeyReach campaign** or receives a **Gmail follow-up** if LinkedIn isn’t available.  
4. All statuses (message type, delivery, and timing) are tracked in real time.  

This workflow replaces hours of manual effort with automated, AI-personalized communication that feels natural — not robotic.

---

## 🧩 Ideal For  
- **B2B SaaS teams** generating inbound leads through website forms  
- **Agencies** managing multi-channel LinkedIn + email campaigns  
- **Sales and growth teams** using form submissions for lead capture  
- **Marketers** running Jotform-based campaigns looking to instantly activate leads  

---

## 💡 Key Integrations  
- **JotForm** → Capture and trigger workflow from form submissions  
- **Google Gemini AI (LangChain)** → Generate personalized LinkedIn & Email messages  
- **HeyReach** → Add AI-written messages directly into your LinkedIn campaign  
- **Gmail** → Send AI-personalized cold emails automatically  
- **n8n Data Tables** → Store, monitor, and analyze every lead and message generated  

---

## 🧠 Workflow Logic  

| Step | Node | Description |
|------|------|-------------|
| 1 | **JotForm Trigger** | Captures lead data submitted through your form |
| 2 | **HTTP Request (Optional Enrichment)** | Pulls company details from Clearbit or any enrichment API |
| 3 | **Insert Row (n8n Data Table)** | Stores raw lead submission for tracking |
| 4 | **If Node** | Determines if LinkedIn profile URL is available |
| 5 | **Google Gemini AI (LinkedIn Agent)** | Creates personalized LinkedIn message |
| 6 | **HeyReach Node** | Adds lead + message to selected campaign |
| 7 | **Google Gemini AI (Email Agent)** | Generates personalized HTML email |
| 8 | **Gmail Node** | Sends the AI-generated email if no LinkedIn is found |
| 9 | **Insert Row (n8n Data Table)** | Logs campaign status, sent message, and timestamps |

---

## 🧾 Example Output (AI Node)
```json
{
  "To": "alex@company.com",
  "Subject": "AI automation ideas for CompanyX 🚀",
  "Email Type": "LinkedIn or Cold Email",
  "HTML": "<p>Hey Alex, noticed CompanyX is scaling fast — congrats! 👏</p><p>At Amply, we help growing businesses use <strong>AI-driven automations</strong> to eliminate repetitive ops work and boost team productivity by 30–50%.</p><p>Would it make sense to explore if this could free up your ops bandwidth too?</p>",
  "Message": "Hey Alex, noticed CompanyX is scaling fast — congrats! 👏 At Amply, we help growing businesses use AI-driven automations to eliminate repetitive ops work and boost team productivity by 30–50%. Would it make sense to explore if this could free up your ops bandwidth too?"
}
