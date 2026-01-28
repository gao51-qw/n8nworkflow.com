# N8N advanced URL parsing and shortening workflow - Switchy.io integration

> [![Video Overview of template  Advanced URL Parsing and Shortening Workflow - Switchy.io Integration](https://img.youtube.com/vi/c7yCZhmMjtI/maxresdefault.jpg)](https://youtu.be/c7yCZhmMjtI)

## Overview

This N8N workflow facilitates advanced URL parsing and shortening, incorporating metadata extraction, OpenGraph tag handling, and integration with Switchy API for link management. It employs various nodes for URL processing, metadata extraction, and creation or updating of shortened links with enriched metadata.

![Screenshot of template  Advanced URL Parsing and Shortening Workflow - Switchy.io Integration](https://live.staticflickr.com/65535/53646661632_fe2acba561_o.png)

## Features

- **URL Metadata Extraction:** Parses URLs to extract metadata such as titles, descriptions, images, and favicons.
- **OpenGraph API Integration:** Utilizes OpenGraph API for detailed metadata retrieval.
- **Switchy API Integration:** Manages shortened links via the Switchy API.
- **GitHub API Integration:** Uses GitHub for hosting images related to the URLs.
- **Screenshot Capabilities:** Captures screenshots of web pages as part of metadata.
- **API Authorization and Configuration:** Manages API keys and configurations for external service integration.

## Workflow Structure

1. **Split In Batches:** Processes URLs in batches.
2. **API Auth:** Configures API authorization.
3. **URL Processing Nodes:** Extract metadata using various nodes like Get Headers, OpenGraph API, and Meta tags Scraper.
4. **Conditional Nodes:** Include IF OpenGraph Invalid and If - Enable ScreenShots for logic handling.
5. **Data Aggregation:** Uses nodes like Method 1 - META for final metadata aggregation.
6. **Switchy API:** Handles link creation and updating.
7. **GitHub Integration:** Hosts screenshots and images on a personal GitHub repository.
8. **Final Output:** Provides the shortened URL after processing.

## API Stack

| API                         | Description                                     |
|---------------------------------|-------------------------------------------------|
| `switchy`                | For creating and updating shortened links.      |
| `opengraph`             | To retrieve URL metadata using OpenGraph tags.  |
| `dub.sh`                    | Used for scraping meta tags from web pages.     |
| `microlink`              | Captures screenshots of web pages.              |
| `pxl.to`                    | Alternative service for capturing screenshots.  |
| `favicone`                  | Retrieves favicons for given URLs.              |
| `github`                    | Hosts images and screenshots on GitHub repo.    |
| `statically`             | Used for CDN services and image hosting.        |
| _Other APIs_                    | _Additional APIs used for various purposes._    |

## GitHub Repository Setup

To use this workflow, ensure your GitHub API is linked for hosting images. Set up a repository where the workflow can upload screenshots and other related images. This repository will be referenced in the workflow nodes where images are handled.

## Configuration

Before running the workflow, set up the necessary API keys and configurations in the **API Auth** node. Adjust batch size and other parameters as needed.

## Error Handling

The workflow includes nodes like **Stop and Error** for robust error handling, post an issue and mention the creator using [N8N community](https://community.n8n.io).

## Contributions

This workflow is open for community contributions. Enhancements and improvements are welcome.

## 📊 Basic Information

- **Workflow ID:** 2064
- **Complexity:** advanced
- **Node Count:** 56
- **Views:** 1406
- **Downloads:** 140
- **Created:** 2024/1/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2064)

## 👤 Author

- **Name:** Nskha
- **Username:** @nskha

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **splitInBatches** 
- **stickyNote** (×9)
- **httpRequest** (×14)
- **if** (×9)
- **html** (×2)
- **set** (×11)
- **convertToFile** 
- **aggregate** (×2)
- **github** (×3)
- **stopAndError** (×2)
- **formTrigger** 
- **respondToWebhook** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 56 nodes with 44 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
