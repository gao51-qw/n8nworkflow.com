## Who’s it for

This template is ideal for **creators, bloggers, and automation enthusiasts** who want to auto-generate blog posts from AI-generated content — without lifting a finger. Whether you're running a tech blog, AI newsletter, or just want to keep your WordPress site fresh, this workflow does the heavy lifting.

---

## How it works

This n8n workflow automatically publishes WordPress posts using trending content from Reddit RSS feeds (like `/r/artificial` and `/r/MachineLearning`), enhanced with AI writing and royalty-free images.

1. **RSS Feed Trigger**: Fetches new Reddit posts every minute from multiple AI-related subreddits.
2. **AI Blog Writer**: Uses an LLM (Groq / GPT-4o) to convert Reddit titles + content into a full blog article (title, content, category, tags, image keyword).
3. **Image Generator**: Queries the Pexels API using the keyword provided by the AI to fetch a relevant blog image.
4. **Category & Tag Manager**: Automatically creates or reuses categories and tags in WordPress.
5. **WordPress Publisher**: Posts the article in draft or published form — complete with featured image and metadata.

Everything is dynamically generated — no hardcoded text or API keys!

---

## How to set up

Estimated time: **15–20 minutes**

You’ll need:

* 🧠 **Groq** or **OpenAI** API key (for AI article generation)
* 🖼️ **Pexels API** key (for fetching featured images)
* 📰 **WordPress API** credentials (with media + post permissions)

**Customization via Sticky Notes**:

* Choose your own RSS feeds (or subreddit URLs)
* Modify the AI prompt to match your writing style
* Set post status (`draft` or `publish`)
* Add your WordPress API URL and credentials

---

## Requirements

* Free n8n account (or self-hosted instance)
* API credentials (Groq/OpenAI, Pexels, WordPress)
* Working WordPress site with REST API access
* Sticky notes explaining:

  * Setup instructions
  * AI prompt format
  * Required credential names