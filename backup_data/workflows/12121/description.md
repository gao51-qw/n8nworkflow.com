**Description:** Don't just get a recipe. Get a Strategy. (Speed / Healthy / Creative) 🍳🤖

This workflow solves the "What should I eat?" problem by using Google Gemini to generate 3 distinct recipe variations simultaneously based on your fridge leftovers. It demonstrates advanced n8n concepts like Array Processing and Data Aggregation.

## Key Features:

Array Processing: Demonstrates how to handle JSON lists (Gemini outputs an array -&gt; n8n splits it -&gt; API calls run for each item).

Aggregation: Shows how to combine processed items back into a single summary email.

Visual Enrichment: Automatically searches for recipe images using Google Custom Search.

## How it works:

Input: Enter ingredients via the Form Trigger.

Generate: Gemini creates 3 JSON objects: "Speed (5min)", "Healthy", and "Creative".

Process: The workflow iterates through the 3 recipes, searching for images and logging data to Google Sheets.

Aggregate: The results are combined into one HTML comparison table.

Deliver: You receive an email with 3 options to choose from.

## Setup Requirements:

Google Sheets: Create a sheet named Recipes with headers: date, ingredients, style, recipe_name, recipe_text, image_url.

Credentials: Google Gemini API, Google Custom Search (API Key & Engine ID), Gmail, Google Sheets.

Configuration: Enter your IDs in the "1. Configuration" node.