## Who is this template for?
You are in the bad habit of always checking your feed to see if there are new videos? This workflow will help you get rid of this habit by delivering an email notification for each new video posted from the channels you are subscribed to. No need to check your feed again: no email = no new video.
### Example email
![YouTube n8n.png](fileId:1027)

## How it works
Every hour (by default), we:
- Fetch all your YouTube subscriptions from the YouTube Data v3 API.
- Get a list of the latest videos of each channel through RSS (we don't use YouTube's API for this step as it would put us over the daily quota).
- Send you a simple yet beautiful email for each new video that was published since the last run of the workflow. To go to the video, simply click on the thumbnail.
### Caveats
Because of the way this workflow is implemented, if your n8n instance stops, you will not get emails for the videos you missed when your instance is back online.
The situation could be improved if n8n gave us an easy way to access the last successful execution's timestamp.

## Set up instructions
1. Complete the `Set up credentials` step when you first open the workflow. You'll need YouTube OAuth2 API and SMTP credentials.
2. In the `Send an email for each new video` step, set the email address from which the email will be sent (an email address that your SMTP credentials allow sending from) and the email address to which you are going to send the email to (can be the same).
### Optional steps
3. From the `Schedule Trigger` step, you can change the check frequency (default: every hour).
4. If there are channels that you do not want notifications from, you can add their channel ID to the list in the `Filter out channels` step.
To get a channel's ID, go to its main page, click on the description, then "Share channel" and finally "Copy channel ID".
5. By default, shorts are excluded. But if you want them, simply remove the `Filter out shorts` step from the workflow.

Template was created in n8n v1.84.0

