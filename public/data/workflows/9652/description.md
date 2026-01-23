# 📸 Instagram Post Automation Workflow

## ℹ️ What is this workflow
This workflow automatically produces daily Instagram posts based on a user-provided prompt and sends them to your email inbox.  
Social media creators can use it to generate content periodically and save time.  

The email includes:  
- Picture  
- Title  
- Caption  
- Relevant hashtags  

You can simply copy and paste the content from the email into Instagram, or go further by connecting it to the Facebook API for **full automation**.

## 💼 Business Cases
- Generating social media posts primarily for Instagram.  
- Integrating with other workflows (trend research, market studies, news feeds) to produce images, statistics, text, or data comparisons for social media.

## 💰 Business Value
If you produce daily posts and each Instagram post takes around 1 hour to find a quote, create an image, caption, and hashtags, this workflow does it in less than 1 minute.

This saves you:
* Weekly: 7 hours (1 hour × 7 days)
* Monthly: 30 hours (1 hour × 30 days)
* Yearly: 360 hours (12 months × 30 hours)
At a cost of $20/hour, this workflow saves:
$7,200 annually (360 hours × $20).

**In total, you're saving 360 hours + $7,200 per year, allowing you to focus on other valuable activities.**

## ⚙️ How Does It Work
1. The workflow runs periodically according to your schedule settings.  
2. Generates a new quote, avoiding duplicates of previously created ones.  
3. Creates an image.  
4. Sends all content by email.

## 🔗 Integrated Services
- Local file storage on the hosted platform  
- OpenAI GPT model (customizable to any AI model you prefer)  
- Gemini model for image generation (replaceable with your preferred tool)  
- Email sending via SMTP

## 🛠 How to Set Up
1. Install the workflow template.  
2. Configure AI models and set up SMTP credentials.  
3. Create a file on your local installation (`/home/node/instagram_posts.txt`).  
4. Set up the scheduler.  
5. Test and enjoy.