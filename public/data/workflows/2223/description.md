## How it works

This workflow shows how to set credentials dynamically using expressions. It accepts an API key via a form, then uses it in the NASA node to authenticate a request.

## Setup steps

First, set up your NASA credential: 

1. Create a new NASA credential.
1. Hover over **API Key**.
1. Toggle **Expression** on.
1. In the **API Key** field, enter `{{ $json["Enter your NASA API key"] }}`.


Then, test the workflow:

1. Get an [API key from NASA](https://api.nasa.gov/)
2. Select **Test workflow**
3. Enter your key using the form.
4. The workflow runs and sends you to the NASA picture of the day.


For more information on expressions, refer to [n8n documentation | Expressions](https://docs.n8n.io/code/expressions/).