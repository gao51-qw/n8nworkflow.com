
# 📬 What this workflow does
Every morning → fetch 3 French economy RSS feeds → keep fresh items → AI rewrites into short summaries → send a nice HTML email newsletter.

---

# 🔄 Flow (high level)
1. ⏰ Trigger at 07:00  
2. 📰 Fetch RSS (Le Monde, Usine Nouvelle, Le Figaro)  
3. ⛔ Filter → keep only recent items  
4. 🔢 Sort newest first  
5. ✂️ Limit 2 per source  
6. ➕ Merge  
7. 🤖 AI summary (title + paragraph)  
8. 🏷 Normalize fields (title, source, link…)  
9. 📦 Aggregate arrays  
10. 📧 Send via Outlook (HTML template)

---

# 🧩 Node notes
- **Trigger** → 07:00 daily (check timezone).  
- **RSS Read** → feeds OK, but UsineNouvelle is `http` (redirects fine).  
- **If** nodes → ❗ currently `after $today` → keeps only future dates.  
  - Fix:  
    - For *today only*: `after $today.startOf('day')`  
    - For *last 24h*: `after $now.minus({ hours: 24 })`  
- **Sort + Limit** → newest 2 per feed.  
- **Merge** → combine up to 6 items.  
- **AI agent** → prompt uses `<article>` … needs closing `</article>` ✅  
- **Edit Fields** → maps source domains → nice labels (“Le Monde” etc).  
- **Aggregate** → arrays for email template.  
- **Outlook email** → HTML newsletter (mobile-friendly).

---

# ⚡ Quick wins
- 🕒 Fix the **date filter** logic (today/24h).  
- 📝 Fix **closing tag** in AI prompt (`</article>`).  
- 🌍 Add **User-Agent** header in RSS nodes (avoid 403).  
- 🔁 Remove duplicates on `link`.  
- ⏳ Mind the server **timezone** vs your audience.  

---

![Screenshot 20250821 at 12.32.58.png](fileId:2168)