This workflow allows you to create transcription jobs for all your audio and video files stored in AWS S3.

![workflow-screenshot](fileId:505)

**AWS S3:** This node will retrieve all the files from an S3 bucket you specify.

**AWS Transcribe:** This node will create a transcription job for the files that get returned by the previous node.