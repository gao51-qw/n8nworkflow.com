# Daily motivational quotes from ZenQuotes to Slack channels

> # 🌟 Send Daily Motivational Quote to Slack

This workflow automatically posts an inspiring motivational quote to your Slack channel every morning at **8 AM**. It uses the free [ZenQuotes.io](https://zenquotes.io) API (no API key required) to fetch quotes and delivers them to your team in Slack.

---

## ⚙️ How It Works

1. **Trigger at 8 AM**  
   A **Cron node** runs daily at **8 AM EST** (America/New_York timezone by default).

2. **Fetch a Random Quote**  
   The workflow sends an **HTTP Request** to [ZenQuotes.io API](https://zenquotes.io/api/random) to retrieve a motivational quote.

3. **Format the Message**  
   A **Code node** structures the quote into a Slack-friendly message, adding styling, emojis, and the author’s name.

4. **Post to Slack**  
   Finally, the **Slack node** sends the motivational message to your chosen Slack channel (default: `#general`).

---

## 🛠️ Setup Steps

### 1. Connect Slack App
- Go to [api.slack.com](https://api.slack.com) → Create a new app.  
- Add OAuth scopes:  
  - `chat:write`  
  - `channels:read`  
- Install the app to your Slack workspace.  
- Copy credentials into n8n.

### 2. Configure Slack Channel
- Default is `#general`.  
- Update the **Slack node** if you want to post to another channel.

### 3. Adjust Timezone (Optional)
- Workflow is set to **America/New_York** timezone.  
- Change under workflow → settings → timezone if needed.

---

## ✅ Example Slack Output

🌟 Daily Motivation 🌟
"Success is not final, failure is not fatal: it is the courage to continue that counts."
— Winston Churchill

---

⚡ Once enabled, your team will receive a motivational quote in Slack every morning at 8 AM — simple, automatic, and uplifting!


## 📊 Basic Information

- **Workflow ID:** 8029
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 318
- **Downloads:** 31
- **Created:** 2025/8/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8029)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** 
- **cron** 
- **httpRequest** 
- **code** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
