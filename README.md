# quote-api

A Quote API powered by GitHub Pages. 

Due to me being a cheapskate and deploying this on github pages the content type of the response is text/html however the response is JSON. 

Base URL: https://harryemartland.github.io/quote-api

To get a random quote, first make a request to `/` then randomly chose an integer number within the range returned by `total`. 
Then make a request to `/{number}` with the random number.

CORs is enabled for GitHub pages so you can use this on your own webpages.
An example can be found [here](https://harryemartland.github.io/quote-api/example.html).

### GET /

Returns information about the quotes in the 'database'

| field |   type  | description |
|-------|---------|-------------|
| total | integer | The number of quotes in the quote 'database' | 

### GET /{number}

Returns a single quote and related properties.

Example Request: GET https://harryemartland.github.io/quote-api/1

| field |  type  | description |
|-------|--------|-------------|
| quote | string | The quote | 
| by    | string | Who wrote the quote | 
| link  | string (optional) | A URL to where the quote was taken from| 