## Description
![AI Social Publisher via PostPulse.png](fileId:2755)

This workflow allows you to turn any idea for a post into platform-specific content using AI. You simply provide the concept, topic, or description of a post, and the AI generates drafts adapted to multiple social media platforms — LinkedIn, Telegram, TikTok, YouTube, X/Twitter, Instagram, Bluesky and Threads. Posts are created in [PostPulse](https://post-pulse.com/) ready for review, scheduling, or publishing. 

⚠️ ***Disclaimer:*** This workflow uses the community node **@postpulse/n8n-nodes-postpulse**. Make sure community nodes are enabled in your n8n instance before importing and using this template.
👉 **To install it:** Go to Settings → Community Nodes → Install and enter:"@postpulse/n8n-nodes-postpulse".
💡 **For more details, see n8n Integration Guide:**[ PostPulse Developers – n8n Integration](https://developers.post-pulse.com/n8n-integration)

## Who Is This For?

- **Social media managers** who want to create content for multiple platforms quickly.
- **Content creators** who need posts automatically adapted to different platforms’ character limits.
- **Agencies** managing multiple accounts who want to save time on copywriting and formatting.

## What Problem Does This Workflow Solve?

Instead of manually writing, adapting, and publishing posts, you get:
- **AI-powered content creation:** Generate posts from any idea you provide.
- **Platform optimization:** Posts are automatically adapted to platform-specific character limits and formatting.
- **Seamless publishing:** Draft posts are sent to PostPulse for scheduling or immediate publishing.
- **Hashtag suggestions:** AI adds relevant hashtags for each platform.
- **Time saving:** Automates content generation and publishing, freeing you for more strategic tasks.

## How It Works

This workflow takes your idea, generates platform-specific posts with AI, and sends them to PostPulse:

**1. Idea input:** Enter any post concept in the idea node.
**2. Setting Restrictions and Hashtags:** Optional: adjust character limits or the number of hashtags.
**3. AI Content Adapter:** Generates text for each platform based on the input idea.
**4. Unification of Platforms and Text + Merge:** Aligns AI-generated content with the correct platforms.
**5. Publish Post**: Creates draft posts in PostPulse ready for scheduling or publishing.

## Setup

**1. Connect PostPulse to n8n**
- Request your OAuth client key and secret from PostPulse support at support@post-pulse.com.
- Add your PostPulse account in the Credentials section in n8n.

**2. Enter an idea in the idea node**
- Type any concept, topic, or description of a post.

**3. (Optional) Adjust restrictions in Setting Restrictions and Hashtags node**
- Change maximum characters per platform or number of hashtags if desired.

**4. Run the workflow**
- AI generates platform-specific drafts and sends them to PostPulse as draft posts.

## Requirements

- **Connected PostPulse accounts** (TikTok, Instagram, YouTube, LinkedIn, Telegram, Bluesky, X, Threads).
- **OAuth client key and secret** obtained from PostPulse.
- **An n8n instance** with community nodes enabled.

✨ With this workflow, PostPulse and n8n become your all-in-one automation hub for generating and publishing social media posts. 

## How To Customize The Workflow
This workflow is flexible and adaptable to your needs:
- **Character limits:** Adjust maximum characters per platform while respecting platform limits.
- **Hashtags:** Modify the number of hashtags added by the AI.
- **AI prompt:** Change text tone or style in the AI Content Adapter node.
- **Add platforms:** Extend supported platforms by updating platform mappings in the workflow.
- **Scheduling:** Adjust scheduledTime in Publish Post node for automated scheduling.

**💡 Tip:** Fully functional out-of-the-box, but easily customizable to match your brand’s tone, posting strategy, or any platform-specific rules.








