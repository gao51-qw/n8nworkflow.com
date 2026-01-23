## Who is this for?

BlueSky users who are looking to send a "welcome message" to their new followers as a private message.

## What this workflow does

This worflow will check for new followers on BlueSky every 60 minutes and send a private message to the new ones. 

## Setup

1. You need to create a [BlueSky app password](https://bsky.app/settings/app-passwords) with private messages access.
2. Fill your credentials and the message text on the corresponding nodes (see sticky notes).
3. Manually run once the ``Save followers to file`` node to generate your initial followers list.
4. Enable the workflow

## How to customize this workflow to your needs

You can adjust the check frecuency, but be careful to avoid hitting the 100 createSession per day rate limit

## Feedback or comments

[You can leave comments, feedback or improvements about this workflow on the n8n forums](https://community.n8n.io/t/bluesky-send-a-welcome-message-to-new-followers/62890)
