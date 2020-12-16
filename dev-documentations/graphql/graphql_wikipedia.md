# Graphql
1. GraphQLHub is a GraphQL service
	https://www.graphqlhub.com/
2. Graphql endpoint:
	https://www.graphqlhub.com/graphql
3. GraphQL queries using an HTTP POST method.
	```
	$ curl -H 'Content-Type:application/graphql' -XPOST https://www.graphqlhub.com/graphql?pretty=true -d '{ hn { topStories(limit: 2) { title url } } }' 
	```
	###### NOTE: 
	1. Set the Content-Type header to application/graphql
	2. We specified a POST to the /graphql?pretty=true endpoint
		1. The /graphql portion is the path
		2. The `?pretty=true` query parameters instructs the server to return the data in a human-friendly, indented format
	3. `-d` argument to our cURL commands is how we specify the **body of the POST request**
	4. **GraphQL query**
		```
		{ hn { topStories(limit: 2) { title url } } }
		```
		###### NOTE: 
		1. This GraphQL server knows that `topStories` will be a list of objects consisting of `title` and `url` entries, and that `title` and `url` are strings