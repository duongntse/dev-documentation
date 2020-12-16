# GraphQL Syntax 101
#### term: query, field, type
1. `document` is the entire string you send to a GraphQL server.
2. A document can have one or more operations
3. We can send a `query operation` or `mutation operation`
4. A **query** operation is read-only
5. A **mutation** is intended to be a write followed by a fetch. (in other words, Change this data, and then give me some other data.)
6. Examples
	###### Query
	``` 
	query getTopTwoStories {
		hn {
			topStories(limit:2) {
				title
				url
			}
		}
	}
	
	Note: If your GraphQL document contains just one operation: 
		1. You can omit the formal declaration "query getTopTwoStories".
		2. The GraphQL will assume you mean a query.
		{
			hn {
				topStories(limit:2) {
					title
					url
				}
			}
		}
	
	```
	##### Mutation
	```
	mutation upvoteStory {
		hn {
			upvoteStory(id: "11565911") {
				id
				core
			}
		}
	}
	```
7. As the GraphQL specificationstates a server can only run one operation per document.
8. In our previous examples:
	a. `title` and `url` are scalar fields (as `string` is a scalar type)
	b. `hn` and `topStories` are complex types
9. Scalar types include `Int` , `Float`, `String`, `Boolean` and `ID`(coerced to a string).
10. GraphQL provides ways of composing these scalars into more complex types using `Object`, `Interface`, `Union`, `Enum`, and `List` types.
11. `limit` is an argument to `topStories`
12. The arguments to a GraphQL field can also be complex objects
	```
	{
		hn {
			createStory(storyData: {url:"http://fullstackreact.com"} ) {
				title
				url
			}
		}
	}
	```
13. Unions
	```
	union SearchResult = Photo|Person
	
	type Person {
		name: String
		age: Int
	
	}
	
	type Photo {
		height: Int
		width: Int
	}
	
	type SearchQuery {
		firstSearchResult: SearchResult
	}
	```
14. Fragment


