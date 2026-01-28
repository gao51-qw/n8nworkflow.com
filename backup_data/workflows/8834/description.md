This n8n workflow turns Telegram into a personal language tutor.  
Users can choose between different learning modes — vocabulary, grammar, quiz, or mixed lessons — simply by adding a hashtag to their message.  
The bot processes requests with **AI/ML API** and sends back structured, interactive lessons in Telegram.  

---

## 🚀 Features  

- 📩 Telegram-based input with hashtag commands  
- 🧠 Adaptive AI responses (vocabulary, grammar, quiz)  
- 🔤 Pronunciation support in Latin transcription  
- 📒 Grammar explanations with examples  
- ❓ Custom quizzes with auto-feedback  
- 💬 Supportive learning experience with motivational messages  
- ⏳ Typing indicator for smoother UX  

---

## 🛠 Setup Guide  

1. 📲 **Create Telegram Bot**  
   - Go to [@BotFather](https://t.me/BotFather)  
   - Use `/newbot` → choose a name and username  
   - Save the bot token  

2. 🔐 **Set Up Credentials in n8n**  
   - **Telegram API**: Use your bot token  
   - **AI/ML API**: Add your API key under **AI/ML account**  

3. ⚙️ **Configure the Workflow**  
   - Import the JSON into n8n  
   - Update credentials (Telegram + AI/ML API)  
   - Activate the workflow  

4. 💬 **Start Learning**  
   - In Telegram, send a message with one of the supported hashtags:  
     - `#vocabulary` — learn new words  
     - `#grammar` — study rules with examples  
     - `#quiz` — get exercises   
   - Or just send plain text for a free-form AI response  

---

## 🔍 Node Overview  

- **Telegram Trigger** → Listens for incoming messages  
- **Show Typing Indicator** → Displays “typing…” while processing  
- **Switch Node** → Routes message by hashtag (#vocabulary, #grammar, #quiz)  
- **Prompt Builder Nodes** → Create JSON payload for AI/ML API  
- **AI/ML API Node** → Generates the structured lesson  
- **Telegram Send** → Sends the formatted response back to the user  

---

## 💡 Example Flow  

**User Input:**  
```
#vocabulary кукуруза
```  

**Bot Output:**  
```
Кукуруза (Kukurúza) — Corn  
Pronunciation: koo-koo-ROO-zah  

Sentence:  
Я люблю есть кукурузу на гриле.  
I love eating grilled corn.  

👉 Try to write your own sentence with “кукуруза”!
```  

