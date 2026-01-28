Extract data from a webpage (Ycombinator news page) and create a nice list using itemList node. It seems that current version in n8n (0.141.1) requires to extract each variable one by one. Hopefully in a futute it will be possible to create the table using just one itemList node.

Another nice feature of the workflow is an automatically generated file name with the resulting table. Check out the "fileName" option of the Spreadsheet File node:
 ```
"Ycombinator_news_{{new Date().toISOString().split('T', 1)[0]}}.{{$parameter[\"fileFormat\"]}}"

```

The resulting table is saved as .xls file and delivered via email

![workflow-screenshot](fileId:543)