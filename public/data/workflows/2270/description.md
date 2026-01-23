## Purpose
This ensures that executions of scheduled workflows do not overlap when they take longer than expected.

## How it works
- This is a separate workflow which monitors the execution of the main workflow
- Stores a flag in Redis (key dynamically named after workflow ID) which indicates if the main workflow is running or idle
- Only calls the main workflow if the last execution has finished

## Setup
- Update the credentials suitable for your Redis instance
- Replace the **Schedule Trigger** of your main workflow by an **Execute Workflow Trigger**
- Copy the workflow ID from the URL
- Paste the workflow ID in the **Execute Workflow** Node of this workflow
- Configure the **Schedule Trigger** Node
