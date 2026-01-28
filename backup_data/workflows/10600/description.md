## This template demonstrates how to provide an interactive chatbot for your work history based off your CV. Unanswered questions and follow-up email contacts are sent to you via Telegram.

Use case: link on your profile to not only show off you AI workflow skills but also to provide an interactive chatbot about your work history for prospective employers. 

#### Good to Know

It will require access to an OpenAI API Key (free for low usage) and setting up a bot in Telegram (free). 

## How it Works

* The n8n inbuilt chat node will be hosted on n8n services to provide the chat interface.
* You will upload your CV either exported from LinkedIn or exported yourself to Microsoft OneDrive along with a simple text file explaining some other information about you.
* On each chat interaction the PDF and text file are used as tools to get context information for the chatbot to respond.
* If a question cannot be answered reliably, a subworkflow will be called to capture that question and send it to you as a telegram message.
* If the person chatting supplies their email address, this will be sent to you via a Telegram message along with other information the user provides. 

## How to use

1. After importing the template, create the subworkflows so that they can be used a Tools by the AI Node. Don't forget to add the Execute sub-workflow trigger.
2. Setup credentials for Open AI, OneDrive and telegram.
3. Upload your CV & text file summary to OneDrive and replace the document IDs in the `get_documents` sub-workflow.
4. Activate the workflow so that publicly available chat will get generated on n8n.