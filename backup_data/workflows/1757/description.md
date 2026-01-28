This workflow shows a low code approach to creating a HTML table based on Google Sheets data. It's similar to [this workflow](https://n8n.io/workflows/1756), but allows fully customizing the HTML output.

![image.png](fileId:656)

To run the workflow:
1. Make sure you have a Google Sheet with a header row and some data in it.
2. Grab your sheet ID:
![image.png](fileId:657)
3. Add it to the Google Sheets node:
![image.png](fileId:658)
4. Activate the workflow or execute it manually
5. Visit the URL provided by the webhook node in your browser (*production URL* if the workflow is active, *test URL* if the workflow is executed manually)
