**How it works**

This workflow automatically publishes Instagram and Facebook posts using Google Sheets as a content calendar. Users add post details to a sheet, and the workflow handles scheduling, image processing, posting, and status updates without manual intervention.

**Step-by-step**

**Scheduled Trigger**
The workflow runs automatically at a fixed interval (for example, every 15 minutes) to check for posts that are ready to be published.

**Configuration & Credentials**
A configuration step stores reusable values such as spreadsheet ID, sheet name, and platform settings, keeping the workflow easy to customize and secure.

**Data Retrieval & Filtering**
Posts are read from Google Sheets and filtered to include only rows marked as “Pending” and scheduled for the current time or earlier.

**Image Handling**
If an image link is provided, the workflow downloads the image from Google Drive. If no image is present, the post continues as text-only.

**Platform Routing**
Based on the selected platform (Instagram, Facebook, or both), the workflow routes the post to the appropriate publishing path.

**Social Media Publishing**
The post is published to Instagram and/or Facebook using the connected business account credentials.

**Status Update**
After publishing, the workflow updates the original Google Sheet with the post status (Success or Failed), published timestamp, and error message if applicable.