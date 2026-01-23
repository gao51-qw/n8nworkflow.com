

## 👥 Who Is This For?
Content creators, marketing teams, and channel managers who need to streamline video publishing with optimized metadata and scheduled releases across multiple videos.

## 🛠 What Problem Does This Solve?
Manual YouTube video publishing is time-consuming and often results in inconsistent descriptions, tags, and scheduling. This workflow fully automates:
* Extracting video transcripts via Apify for metadata generation
* Creating SEO-optimized descriptions and tags for each video
* Setting videos to private during initial upload (critical for scheduling)
* Implementing scheduled publishing at strategic times
* Maintaining consistent branding and formatting across all content

## 🔄 Node-by-Node Breakdown
| Step | Node Purpose |
|------|--------------|
| 1 | Every Day (Scheduler) | Trigger workflow on a regular schedule |
| 2 | Get Videos to Harmonize | Retrieve videos requiring metadata enhancement |
| 3 | Get Video IDs (Unpublished) | Filter for videos that need publishing |
| 4 | Loop over Video IDs | Process each video individually |
| 5 | Get Video Data | Retrieve metadata for the current video |
| 6 | Loop over Videos with Parameter IS | Set parameters for processing |
| 7 | Set Videos to Private | Ensure videos are private (required for scheduling) |
| 8 | Apify: Get Transcript | Extract video transcript via Apify |
| 9 | Fetch Latest Videos | Get most recent channel content |
| 10 | Loop Over Items | Process each video item |
| 11 | Generate Description, Tags, etc. | Create optimized metadata from transcript |
| 12 | AP Clean ID | Format identifiers |
| 13 | Retrieve Generated Data | Collect the enhanced metadata |
| 14 | Adjust Transcript Format | Format transcript for better processing |
| 15 | Update Video's Metadata | Apply generated description and tags to video |

## ⚙️ Pre-conditions / Requirements
* n8n with YouTube API credentials configured
* Apify account with API access for transcript extraction
* YouTube channel with upload permissions
* Master templates for description formatting
* Videos must be initially set to private for scheduling to work

## ⚙️ Setup Instructions
1. Import this workflow into your n8n instance.
2. Configure YouTube API credentials with proper channel access.
3. Set up Apify integration with appropriate actor for transcript extraction.
4. Define scheduling parameters in the Every Day node.
5. Configure description templates with placeholders for dynamic content.
6. Set default tags and customize tag generation rules.
7. Test with a single video before batch processing.

## 🎨 How to Customize
* Adjust prompt templates for description generation to match your brand voice.
* Modify tag selection algorithms based on your channel's SEO strategy.
* Create multiple publishing schedules for different content categories.
* Integrate with analytics tools to optimize publishing times.
* Add notification nodes to alert when videos are successfully scheduled.

## ⚠️ Important Notes
* Videos MUST be uploaded as private initially - the Publish At logic only works for private videos that haven't been published before.
* Publishing schedules require videos to remain private until their scheduled time.
* Transcript quality affects metadata generation results.
* Consider YouTube API quotas when scheduling large batches of videos.

## 🔐 Security and Privacy
* API credentials are stored securely within n8n.
* Transcripts are processed temporarily and not stored permanently.
* Webhook URLs should be protected to prevent unauthorized triggering.
* Access to the workflow should be limited to authorized team members only.