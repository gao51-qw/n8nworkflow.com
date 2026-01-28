Capture new Jotform submissions and instantly create items on a Monday.com board with mapped columns (email, date, dropdowns, instructions, etc.).

---

## 🛠️ Setup — Jotform (simple)
1. **Add your Jotform API key** (Jotform Account → Settings → API → Create Key).  
2. **Create your form template** in Jotform (use fields like Name, Email, Start Date, Engagement Type, Campaign Type, Instructions).  
3. In **n8n**, open the **Jotform Trigger** node and **choose your Jotform template/form** from the dropdown. That’s it.

---

## 🛠️ Setup — Monday.com
1. In Monday.com, **generate an API token** (Admin/Developers → API).  
2. In **n8n → Credentials → New → Monday.com**, paste your **API token**.  
3. Identify and set:
   - **Board ID** (from your board URL or via node “List” operations)  
   - **Group ID** (e.g., `topics`)  
   - **Column IDs** that match your board (examples used by this workflow):  
     - `text_mkvdj8v3` → Email (Text)  
     - `date_mkvdg4aa` → Start Date (Date)  
     - `dropdown_mkvdjwra` → Engagement Type (Dropdown)  
     - `dropdown_mkvdd9v3` → Campaign Type (Dropdown)  
     - `text_mkvd2md9` → Campaign Type (as Text label)  
     - `text_mkvd1bj2` → Instructions (Text)  
     - `text_mkvd5w3y` → Domain (Text)  
4. Update the **label → ID mappings** inside the Monday.com node if your dropdown IDs differ (e.g., `Engagement A` → `1`, `Engagement B` → `2`).

---

## ✅ Notes (best practices)
- No secrets in nodes: store tokens in **n8n Credentials**.  
- Use the included **Sticky Notes** for quick reference inside the workflow.  
- Test once in Jotform to see the payload flow into Monday.

---

## 📬 Contact  
Need help customizing this (e.g., extra fields, file uploads, or routing by campaign)?  

- 📧 **rbreen@ynteractive.com**  
- 🔗 **Robert Breen** — https://www.linkedin.com/in/robert-breen-29429625/  
- 🌐 **ynteractive.com** — https://ynteractive.com
