This is the fourth workflow for the Mattermost Standup Bot. This workflow sends the team a message every morning to ask them three standup questions.

1. What have you accomplished since your last report?
2. What do you want to accomplish until your next report?
3. Is anything blocking your progress?

Once answered, the answers are sent to a Mattermost channel.

The "Read Config" nodes will need to be updated to point to the ID of the "Standup Bot - Read Config" workflow and the "Override Config" node will need to point to "Standup Bot - Override Config"