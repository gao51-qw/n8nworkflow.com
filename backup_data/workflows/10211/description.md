## AI Recommender: From Food Photo to Restaurant and Book (Google Books Integrated)
## What it does

Analyzes a food photo with an AI vision model to extract dish name + category

Searches nearby restaurants with Google Places and selects the single best (rating → reviews tie-break)

Finds a matching book via Google Books and posts a tidy summary to Slack

## Who it’s for

Foodies, bloggers, and teams who want a plug-and-play flow that turns a single food photo into a dining pick + themed reading.

## How it works

Google Drive Trigger detects a new photo

Dish Classifier (Vision LLM) → JSON (dish_name, category, basic macros)

Search Google Places near your origin; Select Best Place (AI)

Recommend Book (AI) → Search Google Books → format details

Post to Slack (JP/EN both possible)

## Requirements

Google Drive / Google Places / Google Books credentials, LLM access (OpenRouter/OpenAI), Slack OAuth.

## Customize

Edit origin/radius in Set Origin & Radius, tweak category→keyword mapping in Normalize Classification, adjust Slack channel & message in Post to Slack.