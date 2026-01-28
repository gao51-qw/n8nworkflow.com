# Daily hydration 💧 reminder with Slack/Discord & Airtable reaction tracking

> ##  💧 Daily Hydration Reminder with Slack/Discord & Airtable Reaction Tracking

Automate wellness engagement in your community with a **twice-daily hydration reminder** sent to **Slack or Discord**, and automatically **track member reactions in Airtable**. This no-code workflow nurtures self-care culture while capturing engagement data—zero manual effort required.

Perfect for coaches, community managers, and solopreneurs who want to foster mindful habits and recognize active members.

---

## 🛠️ Step-by-Step Setup Instructions

Follow these steps to deploy the workflow in **Make.com** (compatible with n8n):

### 1. **Import the Workflow**
- In Make.com or n8n, go to **Scenarios &gt; Import from File**
- Upload the provided JSON template

### 2. **Set Up Scheduling**
- Locate the **Schedule Trigger** node
- Confirm times are set to:
  - `10:00 AM`
  - `3:00 PM`
- Adjust **timezone** in Make/n8n settings to match your audience

### 3. **Configure GIF Library**
- Open the **"Pick Random GIF"** node
- Replace placeholder URLs with your own:
  - Hosted on Giphy, Imgur, or a public CDN
  - Must end in `.gif` and allow hotlinking
- Example:
  ```text
  https://media.giphy.com/media/abc123/giphy.gif
  ```

### 4. **Connect Messaging Platform**
Choose **Slack** or **Discord**:

#### For Slack:
- Go to **Send to Slack** node
- Replace `{{SLACK_WEBHOOK_URL}}` with your incoming webhook
- Ensure the channel allows bot messages

#### For Discord:
- Go to **Send to Discord** node
- Replace `{{DISCORD_WEBHOOK_URL}}` with your server webhook
- Enable embed permissions

&gt; 🔗 Webhook Guide:
&gt; - [Slack Webhooks](https://api.slack.com/messaging/webhooks)
&gt; - [Discord Webhooks](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

### 5. **Enable Reaction Polling (Slack)**
- In **Get Slack Reactions**, add:
  - `{{SLACK_BOT_TOKEN}}` with scopes:
    - `reactions:read`
    - `channels:history`
  - `{{SLACK_CHANNEL_ID}}` (e.g., `C012AB3CD`)
- The workflow uses the message timestamp to fetch reactions after 24 hours

&gt; ⚠️ Discord note: Native reaction polling requires a **Discord bot**. This version supports Slack; Discord support can be extended using the Discord API.

### 6. **Set Up Airtable Logging**
- In **Log in Airtable** node:
  - Enter your **Airtable Base ID**
  - Ensure table `Hydration Reactions` exists (see structure below)
  - Map fields correctly (Date, Username, Reaction Count, etc.)
- Connect your **Airtable API credential**

---

## 🗃️ Airtable Base Structure

This workflow logs every ✅ reaction into Airtable for long-term tracking.

### Base: `Community Wellness Tracker`

#### Table: `Hydration Reactions`

| Field | Type | Description |
|------|------|-------------|
| `Date` | Date | Date of the reminder (auto-filled) |
| `Time Slot` | Single Select | `10:00 AM` or `3:00 PM` |
| `User ID` | Text | Slack/Discord user ID |
| `Username` | Text | Display name (e.g., `@alex`) |
| `Platform` | Single Select | `Slack` or `Discord` |
| `Reaction Count` | Number | Always `1` per reaction |
| `Message Timestamp` | Text | Message ID for reference |
| `Processed` | Checkbox | Marked `false` initially |

&gt; 🏆 Use a **Grouped View** in Airtable to create a monthly leaderboard:
&gt; - Group by `Username`
&gt; - Rollup: `SUM(Reaction Count)`

---

## 🔄 Workflow Explanation

The automation runs a **daily cycle** with feedback tracking:

1. **Trigger**: Fires at 10 AM and 3 PM via **Schedule node**
2. **GIF Selection**: Randomly picks a calming hydration GIF
3. **Message Delivery**: Sends formatted message to Slack or Discord
4. **Wait**: Pauses for 24 hours to allow reactions
5. **Reaction Check**: Uses Slack API to fetch ✅ reactions
6. **Filter**: Only proceeds if at least one ✅ is found
7. **Log**: Creates a record in Airtable for each reacting user

🔁 This creates a **self-sustaining wellness loop**—encouraging care and capturing engagement.

---

## 📦 Pre-Conditions & Requirements

Before use, ensure:

- ✅ **Make.com or n8n account** (Free tier supported)
- ✅ **Slack workspace** with webhook and bot token **or** **Discord server** with webhook
- ✅ **Airtable account** with base and API key
- ✅ Publicly accessible **GIF library**
- ✅ Internet access and JSON parsing enabled

&gt; ❗ Permissions Required:
&gt; - Slack: `reactions:read`, `channels:history`
&gt; - Airtable: `create`, `read` access to table

---

## 🎨 Customization Guidance

Extend the workflow to fit your needs:

### 🕒 Change Timing
- Edit the **Schedule node** to send at 9 AM and 1 PM, or only once daily.

### 🖼️ Add Seasonal GIFs
- Rotate GIFs by season (e.g., winter themes in December).

### 🧩 Track Multiple Emojis
- Add switches for 💧, 🫶, or ❤️ to measure different engagement types.

### 📈 Auto-Generate Monthly Reports
- Use **Airtable Automations** to:
  - Email top 5 members
  - Export CSV for reward fulfillment
  - Post leaderboard in your community

### 🎁 Reward Integration
- Connect **Shopify**, **Gmail**, or **Printful** to auto-send stickers or discount codes.

### 🔕 Opt-Out Option
- Let users react with ❌ to be excluded from future tracking.
- Add a filter to skip users in a “Do Not Disturb” Airtable table.

---

## 🌐 Who It’s For

- **Coaches & Facilitators** running masterminds or accountability groups
- **Etsy Sellers** with private customer communities
- **Remote Teams** supporting wellness
- **Wellness Creators** promoting mindful habits


**Deploy once. Nurture your community forever.**  
With **Daily Hydration Reminder**, consistency meets compassion—automatically. 💧💙



## 📊 Basic Information

- **Workflow ID:** 7986
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 32
- **Downloads:** 3
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7986)

## 👤 Author

- **Name:** Shelly-Ann Davy
- **Username:** @SheCodesFlow

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** 
- **httpRequest** (×3)
- **wait** 
- **switch** 
- **airtable** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
