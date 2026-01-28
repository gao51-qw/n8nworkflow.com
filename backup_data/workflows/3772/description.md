### Description
Quickly organize your inbox with AI!
This simple workflow automatically classifies incoming emails into different categories — like High Priority, Work Related, or Promotions — and applies Gmail labels accordingly.
Setup takes less than 2 minutes, and it runs 24/7, helping you stay focused on what matters most without manual sorting.

### Tools/Services Needed
* Gmail: To trigger the workflow and label emails.
* Google Gemini (or any LLM Model): To intelligently classify email content.


### How It Works
1. Gmail Trigger: Detects every new incoming email.


2. Text Classifier Node: Classifies the email content into predefined categories.


3. Google Gemini Chat Model: Provides the AI-powered understanding behind the classification.
4. Conditional Labeling:
- If the email is High Priority, label it accordingly.
- If it’s Work Related (e.g., internal emails), apply the work label.
- If it’s a Promotion, sort it into the promotions label.
5. Gmail Labeling: Automatically adds the correct label to the email.

### Setup Instructions
* Connect your Gmail account to n8n.
* Connect your Google Gemini (or other LLM) credentials.
* Customize the categories and labels if needed.
* Activate the workflow — and that's it!

### Notes
* You can easily add more categories (like "Finance," "Newsletters," etc.) by adjusting the classification prompt.
* Works best with a clean and minimal set of categories to avoid overlap.
* Can be adapted to work with any other large language model (OpenAI, Claude, etc.) if preferred.