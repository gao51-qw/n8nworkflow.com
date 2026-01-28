# Git backup of workflows and credentials

> This creates a git backup of the workflows and credentials.

It uses the n8n export command with git diff, so you can run as many times as you want, but only when there are changes they will create a commit.

# Setup
_You need some access to the server._

Create a repository in some remote place to host your project, like Github, Gitlab, or your favorite private repo.

Clone the repository in the server in a place that the n8n has access. In the example, it's the `.`, and the repository name is `repo`. Change it in the commands *and in the workflow commands* (you can set it as a variable in the wokflow). Checkout to another branch if you won't use the master one.

```
cd .
git clone repository
```

Or you could `git init` and then add the remote (`git remote add origin YOUR_REPO_URL`), whatever pleases you more.

As the server, check if everything is ok for beeing able to commit. Very likely you'll need to setup the user email and name. Try to create a commit, and push it to upstream, and everything you need (like config a user to comit) will appear in way. I strong suggest testing with exporting the commands to garantee it will work too.

```
cd ./repo

git commit -c "Initial commmit" --allow-empty
```

-u is the same as --set-upstream

```sh 
git push -u origin master 
```

Testing to push to upstream with the first exported data

```
npx n8n export:workflow --backup --output ./repo/workflows/
npx n8n export:credentials --backup --output repo/credentials/

cd ./repo
git add .
git commit -c "manual backup: first export"
git push
```

After that, if everything is ok, the workflow should work just fine.

## Adjustments

Adjust the path in used in the workflow. See the the `git -C PATH` command is the same as `cd PATH; git ...`.

Also, adjust the cron to run as you need. As I said in the beginning, you can run it even for every minute, but it will create commits only when there are changes.

### Credentials encryption

The default for exporting the credentials is to do them encrypted. You can add the flag `--decrypted` to the `n8n export:credentials` command if you need to save them in plain. But as general rule, it's better to save the encryption key, that you only need to do that once, and them export it safely encrypted.

## 📊 Basic Information

- **Workflow ID:** 1053
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 15611
- **Downloads:** 1561
- **Created:** 2021/4/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/1053)

## 👤 Author

- **Name:** Allan Daemon
- **Username:** @allandaemon

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **manualTrigger** 
- **executeCommand** (×5)
- **cron** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
