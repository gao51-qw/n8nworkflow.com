If you have multiple users managing workflows, there may come a time where a user “accidentally” turns off a workflow. Or, if you have workflows that automatically turn off other workflows, that code might “accidentally” turn off the wrong one.

In either case, here’s a workflow that can attempt to “auto-start” accidentally disabled workflows:
![image.png](fileId:776)

How it works:

When activated, then every 4 hours, the workflow will search all other workflows that have the `auto_resume:true` tag present.
If any other workflow has `auto_resume:true` set but is currently turned off, then this workflow will turn it back on.

Of course, this watchdog won’t work if the watchdog workflow is turned off. That said, we’ve found this useful in recovering from accidental actions that cause production workflows to be turned off.