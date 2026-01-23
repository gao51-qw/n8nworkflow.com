### This n8n template watches an outlook shared inbox for support messages and creates an equivalent issue item in JIRA.

### How it works
* A scheduled trigger fetches recent Outlook messages from an shared inbox which collects support requests.
* These support requests are filtered to ensure they are only processed once and their HTML body is converted to markdown for easier parsing.
* Each support request is then triaged via an AI Agent which adds appropriate labels, assesses priority and summarises a title and description of the original request.
* Finally, the AI generated values are used to create an issue in JIRA to be actioned.

### How to use
* Ensure the messages fetched are solely support requests otherwise you'll need to classify messages before processing them.
* Specify the labels and priorities to use in the system prompt of the AI agent.

### Requirements
* Outlook for incoming support
* OpenAI for LLM
* JIRA for issue management

### Customising this workflow
* Consider automating more steps after the issue is created such as attempting issue resolution or capacity planning.
