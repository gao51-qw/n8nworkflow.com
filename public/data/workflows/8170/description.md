## Weekly Gratitude Pulse: Automated Appreciation DMs for Slack & Discord Communities

Foster belonging with a **weekly, automated appreciation message** sent directly to members who engaged in your **Slack or Discord community**. The **Weekly Gratitude Pulse** **runs every Sunday at 6 PM**, quietly recognizing presence — not performance — with a warm, personalized DM that says: *“You showed up. We see you. Thank you.”*

No manual tracking. No public callouts. Just gentle, scalable care.

Perfect for coaches, Etsy sellers, and solopreneurs who want to nurture emotional safety and connection — **without adding to their workload.**

---

## 🛠️ Step-by-Step Setup Instructions

Deploy this workflow in under 10 minutes.

### 1. **Import the Workflow**
- Go to **Scenarios &gt; Import from File**
- Upload the provided JSON template

### 2. **Set the Weekly Schedule**
- Find the **Schedule Trigger** node
- Set to:
  - **Day**: Sunday
  - **Time**: 6:00 PM
  - Adjust **timezone** to match your audience

### 3. **Connect Your Messaging Platform**

#### For Slack:
- Use **Slack → List Conversations** or **HTTP Request** to get channel messages
- Replace `{{SLACK_BOT_TOKEN}}` with a token that has:
  - `channels:history`
  - `users:read`
  - `im:write` (for DMs)
- Set `{{SLACK_CHANNEL_ID}}` (e.g., your main community channel)

#### For Discord:
- Use **Discord Bot** with:
  - `Read Message History`
  - `Send Messages`
  - `Create DM`
- Set `{{DISCORD_BOT_TOKEN}}` and `{{GUILD_ID}}`

&gt; 🔗 Guide: [Slack API Permissions](https://api.slack.com/scopes) | [Discord Bot Setup](https://discord.com/developers/applications)

### 4. **Pull Active Users**
- The workflow pulls all users who:
  - Posted a message
  - Reacted to a message
- Filters out bots and duplicates

### 5. **Send Personalized DMs**
Uses a templated message like:

&gt; “Hey {{Name}},  
&gt; Just wanted to say — I noticed you were around this week, and I’m so glad you were.  
&gt; You’re part of what makes this space feel like home. 💛  
&gt; Rest well, and I’ll see you in the week ahead.  
&gt; — [Your Name]”

Customize the message in the **Set Message** node.

### 6. **Log in Airtable (Optional)**
- Each sent DM is logged in Airtable for reflection
- Never for surveillance — for gratitude auditing

---

## 🗃️ Airtable Structure

### Base: `Community Wellness Tracker`  
#### Table: `Gratitude Logs`

| Field | Type | Description |
|------|------|-------------|
| `Date Sent` | Date | When the DM was sent |
| `User ID` | Text | Slack/Discord user ID |
| `Username` | Text | Display name (e.g., `@alex`) |
| `Engagement Type` | Multi-select | `Message`, `Reaction`, `Thread Reply` |
| `Message Preview` | Text | First 50 characters of their post |
| `Gratitude Sent` | Checkbox | `true` after DM sent |
| `Channel` | Text | Source channel (e.g., `#general`) |

&gt; 📊 Use a **Monthly View** to reflect on community rhythm — not to rank, but to honor.

---

## 🔄 Workflow Explanation

The **Weekly Gratitude Pulse** runs a thoughtful, automated cycle:

1. **Trigger**: Fires every **Sunday at 6:00 PM**
2. **Fetch Messages**: Pulls all messages from the past 7 days
3. **Extract Users**: Gathers IDs of users who posted or reacted
4. **De-duplicate & Filter**: Removes bots and duplicates
5. **Personalize Message**: Injects first name or username
6. **Send DM**: Direct message via Slack/DM or Discord/DM
7. **Log in Airtable**: Records the gesture for reflection

🔁 This creates a **culture of quiet recognition** — where showing up is enough.

---

## 📦 Pre-Conditions & Requirements

- ✅ **Make.com or n8n account** (Free tier supported)
- ✅ **Slack Bot Token** with scopes:
  - `channels:history`, `users:read`, `im:write`
- **OR** **Discord Bot** with:
  - `Read Message History`, `Send Messages`, `Create DM`
- ✅ **Airtable base** with `Gratitude Logs` table
- ✅ Internet access and JSON parsing

&gt; ⚠️ Note: Slack DMs require resolving user → IM channel via `conversations.open`. Discord requires `users.get` and `channels.create` for DMs.

---

## 🎨 Customization Guidance

Make it your own:

### 🎯 Change the Message Tone
- Use warm, coach-like, or playful tones
- Add emojis: 💤 🫶 🌸 ☕

### 🧩 Adjust Engagement Criteria
- Only send to those who posted (not just reacted)
- Exclude certain channels (e.g., announcements)

### 📆 Change Frequency
- Bi-weekly? Edit the schedule.
- Monthly “Big Thank You”? Add a filter for high engagement.

### 💌 Add a Small Gift
- Auto-send a **discount code** or **freebie link** in the DM
- Use **Google Sheets** or **Shopify** to generate unique codes

### 📈 Combine with Hydration Hug
- Use the same Airtable base
- Create a **“Care Score”** view: Hydration reactions + Gratitude receipts

---

## 🌐 Who It’s For

- **Coaches & Facilitators** who want to deepen trust
- **Etsy Sellers** with VIP customer groups
- **Wellness Creators** building mindful spaces
- **Community Managers** reducing burnout

This isn’t engagement farming.  
It’s **digital hospitality** — automation with a heartbeat.

  