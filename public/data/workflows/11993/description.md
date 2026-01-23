  ## Who is this for?

  Businesses and developers who want to automate customer support or engagement on Facebook Messenger using AI-powered responses.

  ## What does it do?

  Creates an intelligent Facebook Messenger chatbot that:
  - Responds to messages using OpenAI (gpt-4o-mini)
  - Batches rapid-fire messages into a single AI request
  - Maintains conversation history (50 messages per user)
  - Shows professional UX feedback (seen indicators, typing bubbles)

  ## How it works

  1. **Webhook Verification** - Handles Facebook's GET verification request
  2. **Message Reception** - Receives incoming messages via POST webhook
  3. **Message Batching** - Waits 3 seconds to collect multiple quick messages
  4. **AI Processing** - Sends combined message to OpenAI with conversation context
  5. **Response Delivery** - Formats and sends the AI response back to Messenger

  ## Setup

  1. Configure **Facebook Graph API** credential with your Page Access Token
  2. Configure **OpenAI API** credential with your API key
  3. Set your verify token in the "Is Token Valid?" node
  4. Register the webhook URL in Facebook Developer Console

  ## Key Features

  - **Message Batching**: Combines "Hey" + "Can you help" + "with my order?" into one request
  - **Conversation Memory**: Remembers context from previous messages
  - **Echo Filtering**: Prevents responding to your own messages
  - **Response Formatting**: Cleans markdown for Messenger's 2000-char limit
