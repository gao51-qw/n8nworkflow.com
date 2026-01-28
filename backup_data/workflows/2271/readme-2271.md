# Gmail AI Auto-Responder: Create Draft Replies to incoming emails

> This workflow automatically generates draft replies in Gmail.
It's designed for anyone who manages a high volume of emails or often face writer's block when crafting responses.
Since it doesn't send the generated message directly, you're still in charge of editing and approving emails before they go out.

## How It Works:
- Email Trigger: activates when new emails reach the Gmail inbox
- Assessment: uses OpenAI gpt-4o and a JSON parser to determine if a response is necessary.
- Reply Generation: crafts a reply with OpenAI GPT-4 Turbo
- Draft Integration: after converting the text to html, it places the draft into the Gmail thread as a reply to the first message

## Set Up Overview (~10 minutes):
- OAuth Configuration ([follow n8n instructions here](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)):
  - Setup Google OAuth in Google Cloud console. Make sure to add Gmail API with the modify scope.
  - Add Google OAuth credentials in n8n. Make sure to add the n8n redirect URI to the   Google Cloud Console consent screen settings.
- OpenAI Configuration: add OpenAI API Key in the credentials
- Tweaking the prompt: edit the system prompt in the "Generate email reply" node to suit your needs

## Detailed Walkthrough
Check out this [blog post](https://medium.com/@nchourrout/i-made-an-email-auto-responder-to-conquer-my-writers-block-aa2b91db6741) where I go into more details on how I built this workflow.

Reach out to me [here](https://flowful.ai/contact) if you need help building automations for your business.

## 📊 Basic Information

- **Workflow ID:** 2271
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 69916
- **Downloads:** 6991
- **Created:** 2024/5/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2271)

## 👤 Author

- **Name:** Nicolas Chourrout
- **Username:** @nchourrout

## 🏷️ Categories

- Ticket Management
- Multimodal AI

## 🔗 Nodes Used

- **gmailTrigger** 
- **if** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×4)
- **gmail** 
- **@n8n/n8n-nodes-langchain.chainLlm** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
