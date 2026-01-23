This n8n workflow automates the process of finding, summarizing, and posting breaking news headlines on X (formerly Twitter). It combines Google Custom Search for finding the latest news articles with Groq's LLaMA 3 model to generate short, engaging headlines — complete with hashtags — and posts them on your X account.

🔧 **Features**

Custom topic support (e.g., "AI", "health", "technology")

Automated scheduling every few hours

Google Custom Search to find the most recent news articles

Groq LLaMA3-based headline generation with hashtags

**Auto-post to X (Twitter)**

Built-in credential separation for API keys and access tokens

📦 **Included Nodes**

Schedule Trigger

Set (Set Topic, Google API Key, Custom Search CX, etc.)

HTTP Request (Google Search API)

Code Node (Format prompt and extract article data)

HTTP Request (Groq API for headline generation)

Twitter Node (Post to X)

⚙️ **How It Works (Step-by-Step)**

Trigger
- The workflow starts on a scheduled interval (default: every 5 hours, at a random minute within the hour).

Set Topic
- You can define your own topic keyword (e.g., AI, mental health, climate change) by editing the Set Topic node.

Build Search Query
- Constructs a Google search query like:
latest {topic} news.

Google API Config
- Injects your own Google API Key and Custom Search CX (replace the placeholders in the Google Config node).

Search for News
- Performs a real-time search using Google Custom Search API and fetches the latest article result.

Generate Prompt for AI
- A JavaScript Function node extracts the top article’s title and link, formats it into a clean prompt including instructions to append hashtags.

Groq AI Request
- Sends the prompt to Groq’s LLaMA 3 model to generate a concise, tweet-length headline with 1–2 relevant hashtags.

Post to Twitter (X)
- The generated headline is posted to your connected X account via the Twitter OAuth2 API.

✅ **Requirements**

- Google API Key

- Google Custom Search Engine (CX)

- Groq API Key

- Twitter Developer App with OAuth2 credentials

💡 **Customization Tips**

- Change the topic in the Set Topic node to anything you like.

- Adjust the posting frequency in the Schedule Trigger node.

- Modify prompt behavior in the Function node to fit a specific tone or brand voice.

- Add logging, filtering, or multiple post variations as needed.