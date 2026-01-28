# AI X (twitter) Threads Bot with Approval Loop

This n8n workflow transforms your Telegram messenger into a personal assistant for creating and publishing X-Threads. You can simply send an idea as a text or voice message, collaboratively edit the AI’s suggestion in a chat, and then publish the finished thread directly to X just by saying “Okay.”

## What You’ll Need to Get Started
Before you can use this workflow, you’ll need a few prerequisites set up. This workflow connects three different services, so you will need API credentials for each:

***Telegram Bot API Key***: You can get this by talking to the  [“BotFather” ](https://telegram.me/BotFathers)on Telegram. It will guide you through creating your new bot and provide you with the API token.
New Chat with Telegram BotFather

***OpenAI API Key***: This is required for the “Speech to Text” and “AI Agent” nodes. You’ll need an account with OpenAI to generate this key.
OpenAI API Platform

***Blotato API Key***: This service is used to publish the final post to X. You’ll need a Blotato account and to connect your X profile there to get the key.
Blotato platform for social media publishing


Once you have these keys, you can add them to the corresponding credentials in your n8n instance.

## How the Workflow Operates, Step-by-Step
Here is a detailed breakdown of how the workflow processes your request and handles the publishing.

### 1. Input & Initial Processing
This phase captures your idea and converts it into usable text.

Node Name	Role in Workflow
Start: Telegram Message	This Telegram Trigger node initiates the entire process upon receiving any message from you in the bot.
Prepare Input	Consolidates the message content, ensuring the AI receives only one clean text input.
Check: ist it a Voice?	Checks the incoming message for text. If text is empty, it proceeds to voice handling.
Get Voice File	If a voice note is detected, this node downloads the raw audio file from Telegram.
Speech to Text	This node uses the OpenAI Whisper API to convert the downloaded audio file into a text string.
### 2. AI Core & Iteration Loop
This is the central dialogue system where the AI drafts the content and engages in the feedback loop.


AI: Draft & Revise Post	The main logic agent. It analyzes your request, applies the “System Prompt” rules, drafts the post, and handles revisions based on your feedback.
OpenAI Chat Model	Defines the large language model (LLM) used for generating and revising the post.
Window Buffer Memory	A memory buffer that stores the last turns of the conversation, allowing the AI to maintain context when you request changes (e.g., “Make it shorter”).
Check if Approved	This crucial node detects the specific JSON structure the AI outputs only when you provide an approval keyword (like “ok” or “approved”).
Post Suggestion Or Ask For Approval	Sends the AI’s post draft back to your Telegram chat for review and feedback.
AI Agent System Prompt (Internal Instructions - English)
The agent operates under a strict prompt that dictates its behavior and formatting (found within the AI: Draft & Revise Post node.



### 3. Publishing & Status Check
Once approved, the workflow handles the publication and monitors the post’s status in real-time.

Node Name	Role in Workflow
Approval: Extract Final Thread Posts	Parses the incoming JSON, extracting only the clean text ready for publishing.
Create post with Blotato	Uses the Blotato API to upload the finalized content to your connected X account.
Give Blotat 5s :)	A brief pause to allow the publishing service to start processing the request.
Check post status	Checks back with Blotato to determine if the post is published, in progress, or failed.
Published?	Checks if the status is “published” to send the success message.
In Progress?	Checks if the post is still being processed. If so, it loops back to the next wait period.
Give Blotat other 5s :)	Pauses the workflow before re-checking the post status, preventing unnecessary API calls.
4. Final Notification
Node Name	Role in Workflow
Send a confirmation message	Sends a confirmation message and the direct link to the published X post.
Send an error message	Sends a notification if the post failed to upload or encountered an error during processing.
## 🛠️ Personalizing Your Content Bot
The true power of this n8n workflow lies in its flexibility. You can easily modify key components to match your unique brand voice and technical preferences.

### 1. Tweak the Content Creator Prompt
The personality, tone, and formatting rules for your X content are all defined in the System Prompt.

Where to find it: Inside the AI: Draft & Revise Post node, under the System Message setting.
What to personalize: Adjust the tone, change the formatting rules (e.g., number of hashtags, required emojis), or insert specific details about your industry or target audience.
### 2. Switch the AI Model or Provider
You can easily swap the language model used for generation.

Where to find it: The OpenAI Chat Model node.
What to personalize:
Model: Swap out the default model for a more powerful or faster alternative (e.g., gpt-4 family, or models from other providers if you change the node).
Provider: You can replace the entire Langchain block (including the AI Model and Window Buffer Memory nodes) with an equivalent block using a different provider’s Chat/LLM node (e.g., Anthropic, Cohere, or Google Gemini), provided you set up the corresponding credentials and context flow.
### 3. Modify Publishing Behavior (Schedule vs. Post)
The final step is currently set to publish immediately, but you might prefer to schedule posts.

Where to find it: The Create post with Blotato node.
What to personalize:
Consult the Blotato documentation for alternative operations. Instead of choosing the “Create Post” operation (which often posts immediately), you can typically select a “Schedule Post” or “Add to Queue” operation within the Blotato node.
If scheduling, you will need to add a step (e.g., a Set node or another agent prompt) before publishing to calculate and pass a Scheduled Time parameter to the Blotato node.
