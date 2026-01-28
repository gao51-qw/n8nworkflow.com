This workflow automatically connects to a Cloudflare R2 bucket (via S3-compatible API), filters out files older than 14 days, deletes them, and then sends a Telegram notification for each deletion. It runs on a daily schedule.

🕘 Schedule Trigger
Executes the workflow once a day at a specified hour (e.g., 9 AM).

📦 S3 Node – List Files
Retrieves all objects from a specific folder (prefix) in a Cloudflare R2 bucket using the S3 API.

🔎 Code Node – Filter Files Older Than 2 Weeks
Filters the retrieved files by comparing their LastModified timestamps to the current date. Files older than 14 days (2 weeks) are selected for deletion.

🗑️ S3 Node – Delete File
Deletes each filtered file from the R2 bucket.

📨 Telegram Node – Notify Deletion
Sends a Telegram message with the name of the deleted file to a specified chat ID. The message includes: