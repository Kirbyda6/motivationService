# motivationService #
This is the Motivational Quote Microservice!
## Requirements ##
- Node.js
- MongoDB
## Instructions ##
1. Clone the repository
2. Run 'npm install'
3. Run 'npm start'
    - To add the default 100 Quotes to the database, run 'npm run script1'
4. To add a quote, send a POST request to 'http://localhost:3001/motivation' with a json {quote: 'quote', author: 'author'} in the body
5. To get a quote document, send a GET request to 'http://localhost:3001/motivation' and response will include a json { _id: 'id', quote: 'quote', author: 'author', _v: '0'}
