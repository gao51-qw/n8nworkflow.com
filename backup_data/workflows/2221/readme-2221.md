# YouTube advanced RSS generator with Telegram formation

> [![Video Overview of template  YouTube Channel Advanced RSS Feeds Generator](https://img.youtube.com/vi_webp/EtzJmrmCiUY/maxresdefault.webp?s)](https://youtu.be/EtzJmrmCiUY)

### Overview

The **[n8n] YouTube Channel Advanced RSS Feeds Generator** workflow facilitates the generation of various RSS feed formats for YouTube channels without requiring API access or administrative permissions. It utilizes third-party services to extract data, making it extremely user-friendly and accessible.

### Key Use Cases and Benefits

* **Content Aggregation**: Easily gather and syndicate content from any public YouTube channel.
* **No API Key Required**: Avoid the complexities and limitations of Google's API.
* **Multiple Formats**: Supports ATOM, JSON, MRSS, Plaintext, Sfeed, and direct YouTube XML feeds.
* **Flexibility**: Input can be a YouTube channel or video URL, ID, or username.

### Services/APIs Utilized

This workflow integrates with:

* **commentpicker.com**: For retrieving YouTube channel IDs.
* **rss-bridge.org**: To generate various RSS formats.

### Configuration Instructions

1. **Start the Workflow**: Activate the workflow in your n8n instance.
2. **Input Details**: Enter the YouTube channel or video URL, ID, or username via the provided form trigger.
3. **Run the Workflow**: Execute the workflow to receive links to 13 different RSS feeds, including community and video content feeds.

### Screenshots
![Screenshot of template  YouTube Channel Advanced RSS Feeds Generator](https://live.staticflickr.com/65535/53658033066_ea92acb899_o.png)

### Additional Notes

* **Customization**: You can modify the RSS feed formats or integrate additional services as needed.

### Support and Contributions

For support, questions, or contributions, please visit the [n8n community forum](https://community.n8n.io) or the [GitHub repository](https://github.com/n8n-io/n8n). We welcome contributions from the community! 

## 📊 Basic Information

- **Workflow ID:** 2221
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 2828
- **Downloads:** 282
- **Created:** 2024/4/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2221)

## 👤 Author

- **Name:** Nskha
- **Username:** @nskha

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×4)
- **set** (×7)
- **aggregate** 
- **respondToWebhook** 
- **stickyNote** (×2)
- **switch** 
- **code** (×2)
- **merge** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
