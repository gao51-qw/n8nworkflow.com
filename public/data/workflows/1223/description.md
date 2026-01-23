This workflow is triggered when a typeform is submitted, then it saves the sender's information into HubSpot as a new contact.

![workflow-screenshot](fileId:535)

**Typeform Trigger**: triggers the workflow when a typeform is submitted.

**Set**: sets the fields for the values from Typeform.

**HubSpot 1**: creates a new contact with information from Typeform.

**IF**: filters contacts who expressed their interest in business services.

**HubSpot 2**: updates the contact's stage to opportunity.

**Gmail**: sends an email to the opportunity contacts with informational material.

**NoOp**: takes no action for contacts who are not interested. 