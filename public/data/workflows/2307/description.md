Based on [Jonathan's](https://n8n.io/creators/jon-n8n/) work. Check out his templates.

This workflow will backup your credentials to GitHub. It uses a CLI command to export all credentials.

It then loops over the data, checks in GitHub to see if a file exists that uses the credential's ID. Once checked it will:
- update the file on GitHub if it exists;
- create a new file if it doesn't exist;
- ignore if it's the same.

### Config Options
**repo.owner** - Github owner

**repo.name** - Github repository name

**repo.path** - Path within the Github repository

==⚠ The credentials are all decrypted. Make sure you save them safely or tweak the CLI command to store them encrypted.==

### Check out my other templates
👉 [**https://n8n.io/creators/solomon/**](https://n8n.io/creators/solomon/)