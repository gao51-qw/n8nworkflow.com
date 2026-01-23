### This n8n template can monitor and detect changes to a webpage's contents and notify you only when a change occurs.

Great to keep an eye on and track publicly available documents such as  company TOS, government policy or competitor pages.

### How it works
* A scheduled trigger is used so we can run everyday to automate this process.
* A website page is then fetched with the HTTP request node and the contents we want to track are extracted using the HTML node.
* To detect changes, we generate a hash on the contents with the cryptography node and compare it with previously seen hashes using the "remove duplicates" node. If the hash was seen before, the workflow stops here.
* Finally, when new changes are detected a copy of the contents are uploaded to Google Drive and a logged into a Google sheet. A notification email can also be sent if action is required.

### How to use
* Update the URL you want to track in the node named "variables" and ensure the HTML node has updated selectors to get the content you want.
* Ensure the timezone is set correctly when using the Scheduled Trigger node.

### Requirements
* Google Sheets, Drive and Gmail for storing and notifying about changes.
* Webpages should ideally be publicly accessible. If not, you may need to switch the HTTP request node with a webscraping service.

### Customising this workflow
* Not using Google? Easier swap to other Service providers such as Miscrosoft365.
* Need more URLs? Try modifing the variables node to accept multiple URLs though the HTML node will need to be customised.