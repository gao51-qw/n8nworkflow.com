This workflow uses OpenAI Assistant to compose draft replies for labeled email messages. It automatically connects the drafts to Gmail threads.

💡 You can add knowledge base to your OpenAI Assistant and make your reply drafts very customized (e.g. compose response with product information in response to inquiry from customer).

🎬 See this workflow in action [in my YouTube video](https://youtu.be/a8Dhj3Zh9vQ) about automating Gmail. 

## How it works?

The workflow is triggered at regular intervals (default: every 1 minute – you can change this value) to check for messages with a specific label (e.g., "AI").

The content of the retrieved email message is then forwarded to the OpenAI Assistant node, and a reply draft is generated. Next, the response from the Assistant is converted to HTML, and a raw message in RFC standard is composed.

💡 You can learn more about composing drafts with the Gmail API in [the official Google documentation](https://developers.google.com/gmail/api/reference/rest/v1/users.drafts/create).

The raw email message (reply draft) is encoded and attached to the original thread ID. Finally, the trigger label (in this case: "AI") is removed to prevent the workflow from looping.

## Set up steps

1. Set credentials for Gmail and OpenAI.
2. Add new label in Gmail account for messages that should be handled by the workflow (e.g. name it "AI").
3. Select this label in the first and last Gmail nodes in workflow.
4. Create and configure your OpenAI Assistant. Select your assistant in "OpenAI Assistant" node. 
5. Optionally: change trigger interval (by default interval is 1 minute).

If you like this workflow, please subscribe to [my YouTube channel](https://www.youtube.com/@workfloows/) and/or [my newsletter](https://workfloows.com/).