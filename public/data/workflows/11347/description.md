**Description:** Your personal AI Book Curator that reads reviews, recommends books, and supports affiliate links. 📚🤖

This advanced workflow acts as a complete "Reading Assistant Application" with monetization features. It takes a book title via form, researches it using Google APIs, and employs an OpenAI Agent to generate a summary and recommendations.

Why use this template?

Monetization Support: Just enter your Amazon Affiliate Tag in the config node, and all email links will automatically include your tag.

Organized & Scalable: The workflow is clearly grouped into 4 sections (Input, Enrichment, AI, Delivery) with sticky notes for easy navigation.

## How it works:

Input: User submits a book title (e.g., "Atomic Habits").

Research: The workflow fetches book metadata and searches for real-world reviews.

Analyze: GPT-4o explains why the book is interesting and suggests 3 related reads.

Deliver: Generates a beautiful HTML email with purchase links and logs the request to Google Sheets.

## Setup Requirements:

Google Sheets: Create headers: date, book_title, author, ai_comment, user_email.

Credentials: OpenAI, Google Custom Search, Gmail, Google Sheets.

Config: Open the "1. Input & Config" section to enter API Keys and IDs.