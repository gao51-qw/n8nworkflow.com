How it works
* time trigger using the cron format, every weekday at 5pm
* gets CentralStationCRM people updates of today
* checks for tag "Outreach"
* if true, sends message on gmail (predefine in node)
* waits 7 days, checks for answers
* alerts user if an answer is there
* if not, repeats process with second mail

How to set up
* get credentials for CentralStationCRM, Slack and GMail
* set up the respective nodes with the credentials
* define text for your automated mails
* test without wait nodes