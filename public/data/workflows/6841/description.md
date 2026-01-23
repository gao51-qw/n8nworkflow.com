## This n8n template demonstrates how to build a **weekly Hollywood film industry briefing** using Tavily for real-time search and Google Gemini for summarization. It sends a concise, emoji‑styled email with **movie releases, box office results, industry news, and must‑watch recommendations** every week automatically.

Use cases: Great for **film journalists, entertainment bloggers, or movie enthusiasts** who want automated weekly updates without manually checking multiple sources.

---

### Good to know

* **Free to use**: Tavily provides **1,000 API credits per month** on their free plan (no credit card required), so this workflow can run at zero cost.
* **Real-time data**: Tavily’s search API is optimized for up-to-date information — perfect for weekly movie releases and box office stats.
* Google Gemini is used for summarization, and you only need basic API access (no paid tier required).

---

### How it works

* **Trigger**: Scheduled every Thursday morning (configurable).
* **Search**: Four Tavily API calls gather:

  * Movies releasing this week
  * Last week’s box office results
  * Hollywood industry news
  * Must‑watch movies currently in theatres
* **Summarization**: Google Gemini turns this into Gmail‑friendly HTML with emojis and bullet points.
* **Email**: The formatted newsletter is sent via Gmail node.

---

### How to use

* Configure **Tavily API** and **Gmail OAuth2 credentials** in n8n’s credential manager.
* (Optional) Edit Tavily queries to focus on specific genres or add filters.
* Adjust the **schedule trigger** to any day/time you prefer.

---

### Requirements

* Tavily API account (free plan – 1,000 monthly requests)
* Google Gemini API key for summarization
* Gmail account (OAuth2 credentials for sending emails)

---

### Want insane output quality?

You can swap Gemini for **OpenAI’s ChatGPT models**:

* **GPT‑3.5 Turbo** – \~\$0.002/run (crazy cheap)
* **GPT‑4o** – \~\$0.009/run (latte price)
* **GPT‑4.5** – \~\$0.15/run (god‑mode quality)

This upgrade gives you **cleaner, richer, “did‑a‑human‑write‑this?” vibes** — perfect for journalist‑grade Hollywood briefings. Just note: OpenAI API requires a **\$5 minimum credit** to activate usage.

---

### Example Output (ChatGPT version)

**Subject:** Daily Hollywood Film Industry Briefing – August 3, 2025

---

Good morning,
Here's your daily Hollywood film briefing for August 3, 2025:

---

🎬 **Releases**

* The Bad Guys 2 – Released Friday, August 1, 2025
* The Naked Gun – Released Friday, August 1, 2025

These are the confirmed new wide theatrical Hollywood releases this week (Monday through Sunday of current week). No additional new Hollywood theatrical releases found for this week.

---

📊 **Box Office**

**Highest‑grossing Hollywood films of 2025 (worldwide):**

* Ne Zha 2 – approx. \$1.90 billion (non‑Hollywood Chinese animated film leads)
* Lilo & Stitch – approx. \$1.02 billion
* A Minecraft Movie – approx. \$955 million
* Jurassic World Rebirth – approx. \$731 million
* How to Train Your Dragon – approx. \$610 million

**Last week’s box office performance (Monday–Sunday):**

* The Fantastic Four: First Steps – domestic debut \~\$118 M; global \~\$218 M, Marvel’s biggest opening of 2025
* Superman – added \~\$94 M worldwide last week, passing \$500 M global total
* Jurassic World Rebirth – up \~\$70 M worldwide last week, despite \~40 % drop week‑on‑week
* F1: The Movie – up \~\$48 M last week internationally/domestically growth visible
* Lilo & Stitch – added \~\$10 M worldwide last week, slower tail but still billion‑plus gross

**Highlights & trends:**
Fantastic Four’s strong debut reboots Marvel success, signaling resumed audience interest; Superman continues to hold strong; Jurassic World Rebirth remains durable after holiday surge; surge in box office recovery noted across key titles. Overall box office up \~12–15 % year‑on‑year.

---

📰 **Industry Buzz**

1. Christopher Nolan has signed to direct a massive \$250 million adaptation of Homer’s *The Odyssey*, starring Matt Damon and Tom Holland, with Imax pre‑sales at 95 % capacity across major locations.
2. Marvel has relaunched the *Fantastic Four* franchise successfully with *First Steps*; positive CinemaScore and strong visuals marking a fresh start.
3. DC’s *Superman* continues strong with over \$500 M global, solidifying DC’s summer comeback.
4. Universal’s *Jurassic World Rebirth* continues strong overseas, especially in China, contributing to \$318 M global in opening holiday weekend.
5. Warner Bros.–Discovery stock surges (\~30 %) amid box office rebound, with Disney, IMAX and Cinemark also seeing robust growth in 2025.
6. *Ne Zha 2* becomes highest‑grossing animated and non‑Hollywood film ever, crossing \$2 billion globally—though not Hollywood, its impact on global trends is notable.
7. *Mission: Impossible – The Final Reckoning* quietly solidifies strong global numbers (\~\$562 M) and continues reliable franchise performance.

---

🎥 **Must‑Watch in Theatres (Surat, India)**

* **The Fantastic Four: First Steps** – Currently showing in English/Hindi/Tamil/Telugu in Surat cinemas; hyped globally, strong visuals, action‑heavy, best experienced in IMAX or premium formats if available in Surat multiplexes. Runs this week.
* **F1: The Movie** – Available in Surat in multiple languages, strong reviews praising adrenaline‑fuelled direction and visuals and growing fan hype; ideal in standard or Dolby formats for immersive sound and speed feel.
* **Jurassic World Rebirth** – Still playing in Surat, popular with family audiences; grand visuals and dinosaur action well‑suited to IMAX or large format screens.

---

That’s all for today’s briefing. Have a great theatrical weekend ahead!
