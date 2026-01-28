This n8n workflow automatically fetches the latest CVE data at scheduled intervals, extracts relevant security details, and creates a corresponding Security Incident in ServiceNow for each new vulnerability.

Schedule Trigger – Runs at predefined intervals.
Jina Fetch – Retrieves the latest CVE feed.
Information Extractor (OpenAI Chat Model) – Processes and extracts key details from the CVE data.
Split Out – Separates each CVE entry for individual processing.
Create Incident – Generates a ServiceNow Security Incident with the extracted CVE details.
Ideal for security teams to ensure timely tracking and remediation of new vulnerabilities without manual monitoring.