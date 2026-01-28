# SEO writer: Content generator (2500 keywords) with Perplexity & auto publish

> 🔥 TLDR

  Automatically generate and publish 2000+ word SEO-optimized blog posts to GitHub every 8 hours - Complete with trending topic research, AI content generation, and automatic JSON formatting for your blog platform. Instant SEO traffic upcoming! 

  ---
  📌 Who's it for

  Content creators, marketers, and developers who want to:
  - Maintain a consistent blog publishing schedule without manual effort
  - Generate high-quality, SEO-optimized content automatically
  - Keep up with trending topics in their industry
  - Build content libraries for their websites or applications

  🚀 What it does

  This workflow is a complete content generation pipeline that runs
  automatically every 8 hours:

  1. Discovers trending topics using Perplexity Sonar to find what's hot in
   your chosen categories
  2. Conducts deep research with real statistics, expert opinions, and
  current data
  3. Generates comprehensive content - 2000-2500 word articles using GPT-5
  mini
  4. Formats for web - Converts to JSON with proper metadata (slug,
  keywords, reading time)
  5. Publishes automatically to your GitHub repository as blog-ready JSON
  files

  ✨ Key Features

  SEO Optimization

  - Keyword-rich content with targeted keywords naturally integrated
  - Proper heading structure (H1, H2, H3) for search engine crawling
  - Meta descriptions automatically generated from content
  - Reading time calculation for better user engagement metrics
  - URL-friendly slugs with timestamps for uniqueness

  Content Quality

  - 2000+ words minimum ensuring comprehensive coverage
  - Research-backed with current statistics and expert opinions
  - Structured format with clear sections: Introduction, Analysis,
  Applications, Challenges, Future Outlook
  - Markdown formatting for easy rendering on any platform

  🛠️ How to set up

  Requirements

  - n8n instance (self-hosted or cloud)
  - Perplexity API account
  - OpenAI API account (GPT-5 mini access)
  - GitHub repository for storing blog content

  Setup Steps

  1. Import the workflow into your n8n instance
  2. Configure credentials:
    - Add your Perplexity API key
    - Add your OpenAI API key
    - Connect your GitHub account via OAuth2
  3. Customize the GitHub node:
    - Set your repository owner and name
    - Adjust the file path if needed (default: public/blog-data/)
  4. Adjust the schedule (optional):
    - Default runs every 8 hours
    - Modify the Schedule Trigger node for your preferred frequency
  5. Test the workflow with manual execution before enabling automatic
  scheduling

  🎨 How to customize

  Topic Categories

  Edit the "Find trending topics" node to focus on your niche:
  - Technology & AI
  - Social Media & Marketing
  - Business & Finance
  - Health & Wellness
  - Education & Career

  Content Length

  Adjust word count requirements in the "Format Blog JSON" node validation

  Output Format

  Modify the JSON structure in "Format Blog JSON" to match your blog platform's requirements

  Publishing Destination

  Change the GitHub repository path or integrate with other platforms like WordPress, Contentful, or Strapi

  📊 Workflow Benefits

  - Consistency: Never miss a publishing deadline
  - Scale: Generate multiple articles daily without manual effort
  - Quality: Research-backed content with real data and sources
  - SEO-Ready: Optimized structure and metadata for search engines
  - Cost-Effective: Uses efficient AI models for sustainable content
  generation


## 📊 Basic Information

- **Workflow ID:** 7279
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 480
- **Downloads:** 48
- **Created:** 2025/8/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7279)

## 👤 Author

- **Name:** Reddit Dev 
- **Username:** @harryhaz

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **perplexity** (×2)
- **code** 
- **github** 
- **scheduleTrigger** 
- **openAi** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
