## Who is this for?
This workflow is for everyone who wants to have easier access to their Odoo sales data without complex queries.

## Use Case
To have a clear overview of your sales data in Odoo you typically needs to extract data from it manually to analyse it. This workflow uses OpenAI's language models to create an intelligent chatbot that provides conversational access to your Odoo sales opportunity data.

## How it works
* Creates a summary of all Odoo sales opportunities using OpenAI
* Uses that summary as context for the OpenAI chat model
* Keeps the summary up to date using a schedule trigger

## Set up steps:
* Configure the Odoo credentials
* Configure OpenAI credentials
* Toggle "Make Chat Publicly Available" from the Chat Trigger node.