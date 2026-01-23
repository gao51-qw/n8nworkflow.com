## Purpose

This workflow creates a versioned backup of an entire Clockify workspace split up into monthly reports.

## How it works

- This backup routine runs daily by default
- The Clockify reports API endpoint is used to get all data from the workspace based on time entries
- A report file is being retrieved for every month starting with the current one, going back 3 month in total by default
- If changes happened during a day to any report, it is being updated in Github

## Prerequisites

- Create a **private** Github repository
- Create credentials for both Clockify and Github (make sure to give permissions for read and write operations)

## Setup

- Clone the workflow and select the belonging credentials
- Follow the instructions given in the yellow sticky notes
- Activate the workflow