# Google Calendar to Slack Status and Philips Hue

> I'm currently trialing a 4 day work week for all staff at my company, and one of the major impacts on productivity is interruptions.

As such, I opted to use N8N to create a workflow to monitor my Google Calendar and when an event starts, to update my Slack status with an emote and the title of the calendar task. Additionally I opted to include to change the colour of Philips Hue lamp located in my living room where my wife is currently working so she know's if she can interrupt me or not.

My calendar is built on the theory behind the [Diary Detox](https://diarydetox.com/) system and as such the Slack Status reflect the colours involved. This was achieved using the emote aliases for the relevant colour circles.

![4DW Colours.png](fileId:602)

The Philips Hue lamp status is changed via the local API with Home Assistant. This is a very similiar process to controlling it with something like the Streamdeck, but the workflow calls the Webhook instead of the Streamdeck. This process can be found in lots of Youtube videos such as [this](https://www.youtube.com/watch?v=QI328yziiZs).

This gives my wife a very quick and easy way to know if she can interrupt me in my office (when the lights are Green or Blue) or when I'm busy (Red).

![RedGreenLight.png](fileId:603)

**Please Note:** The above images are not intended to be an incentive to create your own Squid Games.

Additionally, when integrating Slack with N8N, there are 2 x APIs which can be used. Typically the Bot User OAuth Token is used, however in order for your Status to be updated, the **User OAuth Token** must be used with the *users.profile:read* and *users.profile:write* permissions enabled.

For clarity, I have removed the Webhooks from the Workflow as this would allow any person to control my lights. These can be inserted in the HTTP Request nodes. Each node responds to a different automation within the Home Assistant infrastructure.

*Acknowledgement: I would also credit Jon (Discord) aka 8668 (Workflows) for writing the Function node which turns the ColorID into a named variable.*

## 📊 Basic Information

- **Workflow ID:** 1420
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 1303
- **Downloads:** 130
- **Created:** 2022/2/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1420)

## 👤 Author

- **Name:** TheUnknownEntity
- **Username:** @theunknownentity

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **googleCalendar** 
- **httpRequest** (×3)
- **switch** 
- **googleCalendarTrigger** 
- **slack** 
- **function** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
