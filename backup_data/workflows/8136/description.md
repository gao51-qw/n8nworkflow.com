Turn a simple email workflow into a **LinkedIn content machine**. Generate post ideas, draft full posts, and auto-publish to LinkedIn all controlled by replying to emails.  

---

## 📌 Purpose  
Automate your LinkedIn posting pipeline using **AI + Email approvals**.  
- Generate **10 scroll-stopping post ideas** tailored to your niche & audience.  
- Approve your favorite by replying to the email with a number.  
- Receive **3 AI-written drafts** for the chosen idea.  
- Pick your favorite draft via email reply.  
- The selected post gets **auto-published to LinkedIn** ✅.  
- All steps are logged in **Google Sheets**.  

---

## 🔗 Apps Used  
- **Google Gemini** → generates ideas & drafts  
- **Gmail** → email-based approval workflow  
- **Google Sheets** → tracks ideas, drafts, and published posts  
- **LinkedIn API** → posts directly to your company or personal account  

---

## ✨ Highlights  
- 📬 Email-based approval → no dashboards, just reply with a number  
- 📝 10 AI-generated content ideas + 3 full drafts per topic  
- 🔄 End-to-end tracking in Google Sheets (`ideas → drafts → published`)  
- ⚡ Auto-posting directly to LinkedIn  
- ✅ Final confirmation email with preview  

---

## 👤 Best For  
- Startup founders  
- Agencies managing multiple clients’ LinkedIn  
- Solopreneurs & creators who want consistent posting  

---

## 🛠️ Workflow Overview  

```mermaid

flowchart TB
    A["Manual Trigger"] --&gt; B["AI Agent - Generate 10 Ideas"]
    B --&gt; C["Code - Parse JSON + Correlation ID"]
    C --&gt; D["Google Sheets - Append Ideas"]
    D --&gt; E["Gmail - Send Ideas Email"]
    E --&gt; F["Gmail Trigger - Await Reply"]
    F --&gt; G["Code1 - Extract Reply Number"]
    G --&gt; H["Google Sheets - Fetch Row"]
    H --&gt; I{"Switch Stage"}
    I -- Ideas --&gt; J["AI Agent - Generate 3 Drafts"]
    J --&gt; K["Code3 - Parse Drafts"]
    K --&gt; L["Google Sheets - Update Drafts"]
    L --&gt; M["Gmail - Send Drafts Email"]
    I -- Drafts --&gt; N["Code4 - Select Final Draft"]
    N --&gt; O["LinkedIn - Publish Post"]
    O --&gt; P["Google Sheets - Update Posted"]
    P --&gt; Q["Gmail - Send Confirmation"]
```