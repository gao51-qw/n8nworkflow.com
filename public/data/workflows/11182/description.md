# This template gives you a complete, automated system for monitoring Reddit and extracting growth insights.

It tracks discussions across target subreddits, surfaces what users love, dislike, want changed, and highlights how they compare you to competitors.

Paired with the free [WeWeb UI template](https://marketplace.weweb.io/projects/9a2048a6-8702-4606-8320-948db5962e88/), it prioritizes engagement and organizes everything into a clean, easy-to-use dashboard. So every team gets the insights they need:

- **Leadership** gains clarity on industry trends and emerging shifts  
- **Product** can adjust roadmaps and prioritize features or integrations  
- **Marketing** gets content angles, competitive messaging, and SEO topics  
- **Sales** receives objection insights straight from real conversations  
- **Support** spots early patterns in user challenges  

---

## 🙌 Who this is for

Perfect for product teams, founders, and growth marketers who want to build and scale Reddit as a channel without spending hours manually scanning threads.

---

## 💫 What Makes This Different

- **Eliminates manual scanning:** Automatically pull product and competitor mentions using F5Bot for free, without the high cost of traditional monitoring tools.  
- **Captures full conversations:** Track not just posts, but the entire comment chain where real insights, objections, and frustrations actually surface.  
- **AI-powered prioritization:** Every mention is classified by sentiment and topic so you know what to prioritize and why.  
- **Cross-team intelligence:** Highlights product insights, competitor signals, sales objections, user frustrations, and industry trends, helping product, marketing, sales, support, and leadership make more customer-centric decisions.

---

## ⚙️ How the Workflow Works

- A cron job runs every hour and scans your Gmail inbox for new F5Bot alert emails.  
- When an alert is found, the workflow extracts all mention data from the email.  
- An AI node processes each mention to:  
  - categorize it by topic  
  - tag sentiment  
- All data is stored in Supabase.  
- The data is displayed in a WeWeb dashboard where users can browse mentions.  
- If a user wants deeper context, they click **“AI Summary.”**  
- This triggers a webhook in n8n, which pulls the main Reddit post and its entire comment chain.  
- The AI node summarizes the full thread and highlights:  
  - the core discussion  
  - competitor comparisons  
  - what users like or dislike  
  - industry-level signals  
- The workflow returns a clean, actionable summary back to the WeWeb UI.

---

## 🧪 Requirements

You don’t need any heavy infrastructure. To get started, you’ll need:

- **F5Bot account (free)** - to track Reddit mentions by keywords and trigger email alerts  
- **Gmail integration** - so the workflow can parse emails from F5Bot  
- **OpenAI API key** - for AI-powered categorization and summarization  
- **Supabase project (free)** - to store all mention data  
- **WeWeb account (free)** - connects your n8n workflow to a clean, user-friendly dashboard for viewing insights 

[Here's](https://www.weweb.io/blog/reddit-seo-automation) a detailed setup guide.
 

---

## 🔧 Want to Go Further?

This setup is beginner-friendly, but you can extend it with:

- Blog topic generation  
- Full blog post generation  
- Social media posts  
- Competitor benchmarking reports  
- Weekly or monthly email digests  
- Slack alerts for high-signal mentions  
