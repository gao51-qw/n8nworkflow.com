# Send new YouTube channel videos to Telegram

> ![](https://hostux.pics/images/2022/04/17/image8c74c187fe43f155.png)
A simple node to send new YouTube videos from a channel to a Telegram chat (private, group or channel).
**CheckTime**: set how often videos should be fetched from YouTube. Default is 30 minutes.
**GetVideosYT**: this node will fetch the list of videos from a given channel. Here you need to specify on "Limit" the number of videos to fetch, and on "Channel ID" the ID of the desired channel (it should be the ending part of the URL). You need Google OAuth2 credentials to make it work. A guide is available [here](https://docs.n8n.io/integrations/credentials/google/). (If you use n8n's tunneling, you may need to adjust the OAuth callback URL on Google Cloud Platform)
**Set**: this node will set some variables to work easily with the next nodes. You shouldn't edit this.
**Function**: this node checks if the video was seen previously by the workflow, so that it won't be published a second time on Telegram. You shouldn't edit this.
**SendVideo**: this node sends the message to Telegram. You need to set your bot's credentials ([guide here](https://docs.n8n.io/integrations/credentials/telegram)), specify the Chat ID to send the message ([how to get](https://docs.n8n.io/integrations/nodes/n8n-nodes-base.telegram/?utm_source=n8n_app&utm_medium=node_settings_modal-credential_link&utm_campaign=n8n-nodes-base.telegram#how-do-i-get-the-chat-id)) and personalize the Text of your message.

This workflow works correctly only when it's activated. If you manually execute the workflow, it will send every time the latest videos.

## 📊 Basic Information

- **Workflow ID:** 1599
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 10371
- **Downloads:** 1037
- **Created:** 2022/4/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1599)

## 👤 Author

- **Name:** Alessio
- **Username:** @almi05

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **set** 
- **function** 
- **interval** 
- **youTube** 
- **telegram** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
