This n8n workflow collects and summarizes news from multiple RSS feeds, using OpenAI to generate a concise summary that can be sent to WhatsApp or other destinations. Perfect for automating your daily news digest.

🔁 Workflow Breakdown:
Schedule Trigger
Start the workflow on your desired schedule (daily, hourly, etc.).

🟨 Note: Set the trigger however you wish.

RSS Feeds (My RSS 01–04)
Fetches articles from four different RSS sources.

🟨 Note: You can add as many RSS feeds as you want.

Edit Fields (Edit Fields1–3)
Normalizes RSS fields (title, link, etc.) to ensure consistency across different sources.

Merge (append mode)
Combines the RSS items into a single unified list.

Filter
Optionally filter articles by keywords, date, or categories.

Limit
Limits the analysis to the 10 most recent articles.

🟨 Note: This keeps the result concise and avoids overloading the summary.

Aggregate
Prepares the selected news for summarization by combining them into a single content block.

OpenAI (Message Assistant)
Summarizes the aggregated news items in a clean and readable format using AI.

Send Summary to WhatsApp
Sends the AI-generated summary to a WhatsApp endpoint via webhook (yoururlapi.com). You can replace this with an email service, Google Drive, or any other destination.

🟨 Note: You can send it to your WhatsApp API, email, drive, etc.

No Operation (End)
Final placeholder to safely close the workflow. You may expand from here if needed.