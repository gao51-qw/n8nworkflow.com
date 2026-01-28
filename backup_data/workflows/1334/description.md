This workflow synchronizes data one-way from Pipedrive to HubSpot.

![workflow-screenshot](fileId:569)

- **Cron node** schedules the workflow to run every minute.
- **Pipedrive** and *Hubspot1  nodes* pull in both lists of persons from Pipedrive and contacts from HubSpot.
- **Merge node** with the option *Remove Key Matches* identifies the items that uniquely exist in Pipedrive.
- **Hubspot2 node** takes those unique items and adds them to HubSpot.