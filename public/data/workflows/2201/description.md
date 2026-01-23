This is an end-to-end workflow for creating a simple OpenAI Assistant. The whole process is done with n8n nodes and do not require any programming experience.

The workflow is divided into three main steps:

## Step 1: Get a Google Drive File and Upload to OpenAI

- The workflow starts by retrieving a file from Google Drive using the "Get File" node.
- The example file used is a  [Music Festival document](https://docs.google.com/document/d/1_miLvjUQJ-E9bWgEBK87nHZre26-4Fz0RpfSfO548H0/edit?usp=sharing).
- The retrieved file is then uploaded to OpenAI using the "Upload File to OpenAI" node.
- Run this section only once. The file is stored persistently on the OpenAI side.

## Step 2: Set Up a New Assistant

- In this step, a new assistant is created using the "Create new Assistant" node.
- The assistant is given a name, description, and system prompt.
- The uploaded file from Step 1 is attached as a knowledge source for the assistant.
- Same as for Step 1, run this section only once.

## Step 3: Chat with the Assistant

- The "Chat Trigger" node initiates the conversation with the assistant.
- The "OpenAI Assistant" node handles the conversation, using the assistant created in Step 2.

## Step 4: Expand the Assistant

- This step provides resources for ideas on how to expand the Assistant's capabilities:
    -   [Create a WhatsApp bot](https://blog.n8n.io/whatsapp-bot/)
    -   [Create a simple Telegram bot](https://blog.n8n.io/telegram-bots/)
    -   [Create a Telegram AI bot (YouTube video)](https://www.youtube.com/watch?v=ODdRXozldPw)

By following this workflow, users can create their own AI-powered assistants using OpenAI's API and integrate them with various platforms like WhatsApp and Telegram.