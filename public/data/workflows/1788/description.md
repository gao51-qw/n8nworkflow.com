This workflow automatically adds a new lead to Pipedrive once someone forks your GitHub repository. 

## Prerequisites
- Pipedrive account and [Pipedrive credentials](https://docs.n8n.io/integrations/builtin/credentials/pipedrive/)
- GitHub account and [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/)

## How it works
1. GitHub Trigger node starts the workflow once someone forks your GitHub repository.
2. HTTP Request node gets user's data from GitHub and sends it further.
3. Pipedrive node searches forkee's data in Pipedrive by email.
4. IF node decides whether to create a new person in Pipedrive in case contact doesn't exist yet or update an existing contact in Pipedrive.
5. In case there's no contact existing yet, the Pipedrive node creates a lead and adds a note with GitHub URL.
