# Test full stack for superformula
[DEMO](superformula.joaoporta.com)
To run the project locally:
`yarn` to install dependencies
set up .env file with the required environment variables:
- REACT_APP_GRAPHQL_URI (URI to AppSync)
- REACT_APP_GRAPHQL_ID=(AppSync ID)
- REACT_APP_GRAPHQL_KEY=(AppSync Secret Key)
- REACT_APP_MAPBOX_ID=(MapBox API id, for getting static maps of user location)
- REACT_APP_LAMBDA_URL=(Lambda URL endpoint)

`yarn dev` to run frontend server locally


## Architecture
- DynamoDB on AWS
- AppSync to interface with DynamoDB with GraphQL
- Lambda Function responsible for getting user latitude and logitude based on address, using mapbox API
- Demo on Amplify
