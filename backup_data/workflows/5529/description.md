🧩 Jamf Patch Summary to Slack
Stay on top of software patch compliance by automatically posting Jamf patch summaries to Slack.
This helps IT and security teams quickly identify outdated installs and take action—without logging into Jamf.

✅ Prerequisites
• A Jamf Pro API key with permissions to read software titles and patch summary
• A Slack app or incoming webhook URL with permission to post messages to your desired channel

🔍 How it works
• Manually trigger the flow or Add a webhook
• Fetch a list of software titles from Jamf Pro
• Filter to select the software you're tracking (e.g. Chrome, Edge)
• Retrieve the patch summary for that software (latest version, up-to-date, out-of-date counts)
• Format the summary into Slack Block Kit
• Post the formatted summary into a Slack channel

⚙️ Set up steps
• Takes ~5–10 minutes to configure
• Set your server BaseURL variable in the Set Node
• Add your Jamf Pro API credentials in the HTTP Request nodes (Get & Retrieve)
• Set the target software ID in the Filter node
• Add your Slack webhook URL or token in the final HTTP node
• Optional: Adjust Slack formatting inside the Function node