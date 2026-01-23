This n8n workflow is a proof-of-concept template exploring how we might work with multimodal LLMs and their multi-image analysis capabilities. In this demo, we compare 2 screenshots of a webpage taken at different timestamps and pass both to our multimodal LLM for a visual comparison of differences. Handling multiple binary inputs (ie. images) in an AI request is supported by n8n's basic LLM node.

## How it works

This template is intended to run as 2 parts: first to generate the base screenshots and next to run the visual regression test which captures fresh screenshots.

* Starting with a list of webpages captured in a Google sheet,  base screenshots are captured for each using a external web scraping service called [Apify.com](https://www.apify.com?fpr=414q6) (I prefer Apify but feel free to use whichever web scraping service available to you)
* These base screenshots are uploaded to Google Drive and will be referenced later when we run our testing.
* Phase 2 of the workflow, we'll use a scheduled trigger to fire sometime in the future which will reuse our web scraping service to generate fresh screenshots of our desired webpages.
* Next, re-download our base screenshots in parallel and with both old and new captures, we'll pass these to our LLM node. In the LLM node's options, we'll define 2 "user message" inputs with the type of binary (data) for our images.
* Finally, we'll prompt our LLM with our testing criteria and capture the regressions detected. Note, results will vary depending on which LLM you use.
* A final report can be generated using the LLM's output and is uploaded to Linear.

## Requirements

* [Apify.com](https://www.apify.com?fpr=414q6) API key for web screenshotting service
* Google Drive and Sheets access to store list of webpages and captures

## Customising this workflow

* Have your own preferred web screenshotting service? Feel free to swap out Apify with your service of choice.

* If the web screenshot is too large, it may prove difficult for the LLM to spot differences with precision. Try splitting up captures into smaller images instead.