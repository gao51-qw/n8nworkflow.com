# AI Blog & LinkedIn Content Publisher
## How it works

Daily trigger scans your Notion database for unpublished blog ideas
AI generates complete **blog posts** + engaging **LinkedIn content** using **OpenAI** (*Blog Posting is not implemented yet*)
Creates custom images for posts using **Replicate's Flux-Schnell** AI model
Auto-publishes to LinkedIn with image OR emails draft for review
Updates Notion with published content and tracks status

## Set up steps
**Connect accounts:** Notion, OpenAI, Replicate, LinkedIn, Gmail
**Create 2 Notion databases:** Ideas (input) and Articles (output)
**Update config node:** Add your database IDs and email
**Test with one idea:** Run manually first to verify everything works
**Enable daily automation:** Turn on the cron trigger

**Perfect for:** Content creators, developers, and marketers who want to transform rough ideas into professional blog posts and LinkedIn content automatically.