# Who is this for?

🧑🏻🫱🏻‍🫲🏻🤖 **Humans** and **Robots** alike.

This workflow can be used as a *Chat Trigger*, as well as a *Workflow Trigger*.

It will take a natural language request, and then generate a `SQL` query. The resulting `query` parameter will contain the query, and a `sqloutput` parameter will contain the results of executing such query.

## What's the use case?

This template is most useful paired with other workflows that extract e-mail information and store it in a structured Postgres table, and use LLMs to understand inquiries about information contained in an e-mail inbox and formulate questions that needs answering.

Plus, the prompt can be easily adapted to formulate SQL queries over any kind of structured database.

## Privacy and Economics

As LLM provider I'm using **Ollama** locally, as I consider my e-mail extremely sensitive information. As model, [`phi4-mini`](https://ollama.com/library/phi4-mini) does an excellent job balancing quality and efficiency.

## Setup

Upon running for the first time, this workflow will *automatically* trigger a sub-section to read all tables and extract their schema into a local file.

Then, either by *chatting* with the workflow in n8n's interface or by using it as a *sub-workflow*, you will get a `query` and a `sqloutput` response.

## Customizations

If you want to work with just one particular table yet keep edits at bay, append a condition to the `List all tables in a database` step, like so:

```sql
WHERE table_schema='public' AND table_name='my_emails_table_name'
```

To repurpose this workflow to work with any other data corpus in a structured database, inspect the `AI Agent` *user* and *system* prompts and edit them accordingly.
