# Generate personalized weather reports with OpenWeatherMap, Python and GPT-4.1-mini

> ## How it works
- User enters name of a city for which most current weather information will be gathered
- Custom Python code processes the weather data and generates a custom email about the weather
- AI agent further customizes the email and add a related joke about the weather
- Recipient gets the custom email for the city

## Set up instructions
- Enter city to get the weather data
- Add OpenWeather API and replace &lt;your_API_key&gt; with your actual API key
- Add your OpenAI API in OpenAI Chat Model Node
- Add your Gmail credentials and specify a recipient for the custom email


## 📊 Basic Information

- **Workflow ID:** 6400
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 1334
- **Downloads:** 133
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6400)

## 👤 Author

- **Name:** Moe Ahad
- **Username:** @moe-ahad

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** 
- **code** (×2)
- **gmail** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **formTrigger** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
