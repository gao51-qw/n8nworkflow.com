**Summary**

Onfleet is a last-mile delivery software that provides end-to-end route planning, dispatch, communication, and analytics to handle the heavy lifting while you can focus on your customers.

This workflow template **listens to a Google Drive update event** and **creates an Onfleet delivery task**. You can easily change which Onfleet entity to interact with.

**Configurations**

- Connect to Google Drive with your own Google credentials
- Specify the `Poll Times` and `File URL or ID` to your own preference, the poll time determines the **frequency** of this check while the file URL/ID specifies which file to **monitor**
- Update the Onfleet node with your own Onfleet credentials, to register for an **Onfleet API key**, please visit https://onfleet.com/signup to get started