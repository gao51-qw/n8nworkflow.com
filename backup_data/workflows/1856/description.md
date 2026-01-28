This workflow turns a light red when an update is made to a GitHub repository. By default, updates include pull requests, issues, pushes just to name a few.

## Prerequisites

- [GitHub credentials](https://docs.n8n.io/integrations/builtin/credentials/github/).
- [Home Assistant credentials](https://docs.n8n.io/integrations/builtin/credentials/homeassistant/).

## How it works

1. Triggers off on the `On any update in repository` node.
2. Uses Home Assistant to turn on a light and then configure the light to turn red.