# Draft daily crypto news tweets with CryptoPanic, Google, GPT‑4o and Gmail

> # 🚀 X-Ray: Your AI Crypto Intelligence & Social Agent

Stop drowning in crypto noise. **X-Ray** is a high-performance "Human-in-the-loop" workflow that monitors the market 24/7, filters for high-impact narratives (like RWA), and prepares viral tweet drafts for your review.

### 🌟 Why use this?
* **Zero Noise:** Focus only on your specific niche (RWA, DeFi, AI).
* **Deep Context:** X-Ray researches full articles before writing, avoiding generic AI fluff.
* **Safe Automation:** 100% control via a Gmail-based approval system.
* **Archive Ready:** Builds your content database in Google Sheets automatically.

---

### ⚙️ How it Works
1. **Market Intelligence:** Fetches real-time news via **CryptoPanic**.
2. **Narrative Filtering:** AI identifies headlines matching your niche.
3. **Autonomous Research:** Uses **Google Search** to extract full source content.
4. **Creative Drafting:** Our **Tweet Architect** (GPT-4o) writes punchy, viral drafts.
5. **Review Pipeline:** Drafts are sent to **Gmail** and saved to **Google Sheets**.

---

### 🔑 Quick Setup

**1. Credentials:**
* **OpenAI API Key** (GPT-4o recommended).
* **CryptoPanic API:** Get your token [here](https://cryptopanic.com/developers/api/).
* **Google Custom Search:** Enable API in Cloud Console and create a Search Engine (CX ID).

**2. Google Sheets:**
Create a sheet with headers: `Date`, `Topic`, `Draft Tweet`, `Source URL`.

**3. Customization:**
* **Niche:** Edit the **Narrative Analyst** prompt to change keywords.
* **Tone:** Adjust the **Tweet Architect** to match your personal brand.

---

### 🛠️ Pro Tips
* **Auto-Post:** Swap Gmail for the **X (Twitter) node** for full automation.
* **Multi-Channel:** Add **Telegram** or **Slack** nodes for team alerts.
* **Sentiment:** Use AI to label news as *Bullish/Bearish* for better hooks.

---

### 📞 Contact & Support
Need help or custom automation?
* 🌐 **Website:** [www.cadaero.ovh](https://www.cadaero.ovh)
* 📧 **Email:** [contact@cadaero.com](mailto:contact@cadaero.com)

**Happy Automating!** — *Cyrille d'Urbal (Cadaero)*

## 📊 Basic Information

- **Workflow ID:** 11960
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 35
- **Downloads:** 3
- **Created:** 2025/12/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11960)

## 👤 Author

- **Name:** Cyrille
- **Username:** @cadaero

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **splitOut** 
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **merge** (×2)
- **httpRequest** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **scheduleTrigger** 
- **if** 
- **splitInBatches** 
- **code** (×2)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
