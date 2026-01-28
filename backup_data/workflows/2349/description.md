Sometimes you want to take a different action in your error workflow based on the data that was flowing through it.

This template illustrates how you can do that (more specifically, how you can retrieve the data of a webhook node).

## How it works
1. Use the 'n8n' node to fetch the data of the failed execution
2. Parse that data to find webhook nodes and extract the data of the one that was executed