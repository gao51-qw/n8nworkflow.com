## Who is this for?
For developers and organizations that need to convert **PPTX** files to **PDF**.

## What problem is this workflow solving?
The file format conversion problem.

## What this workflow does

1. Downloads the PPTX file from the web.
2. Converts the PPTX file to PDF.
3. Stores the PDF file in the local file system.

## How to customize this workflow to your needs
1. Open the `HTTP Request` node.
2. Adjust the URL parameter (all endpoints can be found [here](https://www.convertapi.com/api)).
3. Use your `API Token` for authentication. Pass the token in the `Authorization` header as a Bearer token. You can manage your API Tokens in the [User panel → Authentication](https://www.convertapi.com/a/authentication).
4. Optionally, additional `Body Parameters` can be added for the converter.
