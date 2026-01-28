## Overview
Auto-translate YouTube uploads to Japanese and post to Slack (DeepL + Slack)

## Who’s it for
Marketing or community teams that follow English-speaking creators but share updates with Japanese audiences; language learners who want JP summaries of newly released videos; internal comms teams curating industry channels for a JP workspace.

## What it does
This workflow detects new YouTube uploads, retrieves full metadata, translates the title and description into Japanese using DeepL, and posts a formatted message to a Slack channel. It also skips non-English titles to avoid unnecessary translation.
## How it works
・RSS watches a channel for new items.
・YouTube API fetches the full snippet (title/description).
・Text is combined into a single payload and sent to DeepL.
・The translated result + original metadata is merged and posted to Slack.

## Requirements
・YouTube OAuth (for reliable snippet retrieval)
・DeepL API key (Free or Pro)
・Slack OAuth

## How to set up
・Duplicate this template.
・Open the Config (Set) node and fill in YT_CHANNEL_ID, TARGET_LANG, SLACK_CHANNEL.
・Connect credentials for YouTube, DeepL, and Slack (don’t hardcode API keys in HTTP nodes).
・Click Execute workflow and verify one sample post.

## How to customize
・Change TARGET_LANG to any language supported by DeepL.
・Add filters (exclude Shorts, skip videos under N characters).
・Switch to Slack Blocks for richer formatting or thread replies.
・Add a fallback translator or retry logic on HTTP errors.
## Notes & limits
DeepL Free/Pro have different endpoints/quotas and monthly character limits. YouTube and Slack also enforce rate limits. Keep credentials in n8n’s credential store; do not commit keys into templates. Rotate keys if you accidentally exposed them.