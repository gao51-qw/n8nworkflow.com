# This n8n workflow automates replying to Google Play Store reviews using AI. 

It analyzes each review’s sentiment and tone and posts a human-like response — saving time for indie devs, founders, and PMs managing multiple apps.

---

## 💡 Use Cases
- Respond to reviews at scale without sounding robotic  
- Prioritize negative sentiment feedback  
- Maintain consistent tone and support messaging  
- Free up time for teams to focus on product instead of ops

---

## 🧠 How it works
- Uses the Play Store API to fetch new app reviews
- Filters out reviews that have already been replied to
- Analyzes sentiment using OpenAI GPT-4o
- Passes sentiment and review context to an AI Agent node that crafts a reply
- Replies are posted to Play Store via Google API
- (Optional) Logs the reply to Slack for visibility

---

## ⚡ Requirements
- Google Play Developer Console access  
- Google Cloud Project with service account  
- OpenAI account (GPT-4o or mini)  
- (Optional) Slack workspace & app for logging

---

## 🙌 Don’t want to set this up yourself?
I’ll do it for you. Just drop me an email: **imarunavadas@gmail.com**

Let’s automate the boring stuff so you can focus on growth. 🚀