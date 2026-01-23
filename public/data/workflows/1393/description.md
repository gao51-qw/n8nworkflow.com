This workflow extracts text from images sent in a Telegram chat and uploads the images to AWS S3.

![workflow-screenshot](fileId:588)

- **Telegram Trigger node** triggers the workflow when an image is sent in a Telegram channel.
- **AWS S3 node** uploads the sent image to an S3 bucket.
- **AWS Textract node** extracts text from the image.
- **Airtable node** adds the extracted text and image information to a table. 