This workflow automatically reviews new Zendesk tickets and tags them using OpenAI’s language model. It runs every 24 hours, fetches tickets created in the last day (for specified brands), and uses an AI agent to analyze each ticket’s content. Based on customizable rules, the agent suggests and applies relevant tags, ensuring existing tags are preserved. This helps automate ticket categorization and improves support team efficiency.

**Key Features:**

* Scheduled daily execution
* Brand filtering for targeted ticket processing
* AI-powered tagging based on ticket content and custom rules
* Preserves existing tags while adding new ones


**Setup Instructions:**

* Replace placeholder brand IDs/names and tag rules with your own.
* Connect your Zendesk and OpenAI accounts.