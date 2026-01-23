This workflow lets you **chat with Reddit** using OpenAI and the Reddit API.  
The chatbot pulls posts from a subreddit and uses GPT to answer your questions.

---

## ⚙️ Setup Instructions

### 2️⃣ Set Up OpenAI Connection
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)  
2. Navigate to [OpenAI Billing](https://platform.openai.com/settings/organization/billing/overview)  
3. Add funds to your billing account  
4. Copy your API key into the **OpenAI credentials** in n8n  

---

### 2️⃣ Set Up Reddit API
1. Go to [Reddit Apps](https://www.reddit.com/prefs/apps)  
2. Click **Create App** → Choose **script** type  
3. Fill in:  
   - **Name**: (your choice)  
   - **Redirect URI**: `http://localhost:8080` (or your n8n URL)  
   - Save → copy **Client ID** and **Secret**  
4. In **n8n → Credentials → New → Reddit OAuth2 API**  
   - Enter **Client ID** + **Client Secret**  
   - Log in with your Reddit account and approve access  
5. Attach this credential to the **Reddit Tool** node  

---

## 🧠 How It Works
- **Reddit Tool Node** → Fetches posts from chosen subreddit (e.g., `r/n8n`)  
- **OpenAI Agent** → Processes posts and your chat question  
- **Chatbot** → Returns summarized answers with Reddit context  

---

## 📬 Contact
Need help customizing this (e.g., targeting multiple subreddits or filtering posts)?  

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**
