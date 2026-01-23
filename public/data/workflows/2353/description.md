This workflow checks a configured list of Github repositories daily to see if a new release has been published.

### How it works:
- Workflow has a daily trigger
- `RepoConfig` node is a JSON array that defines a list of repositories to check releases for
- For each of the configured repos it fetches the latest release
- If the release was published within the last 24 hours it is output
- The release is sent as a Slack message showing the repo name, release name and link


### Setup
- Update the JSON in the RepoConfig node to the Github repos you wish to get notifications for
- Setup your Slack connection (or replace with your choice of notification)
