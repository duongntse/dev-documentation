# Element   Markdown Syntax
## Heading  
# H1
## H2
### H3
## Bold 
**bold text**
## Italic   
*italicized text*
## Blockquote 
> blockquote
## Ordered List 
1. First item
2. Second item
3. Third item
## Unordered List   
- First item
- Second item
- Third item
## Code `code`
## Horizontal Rule  ---
## Link [title](https://www.example.com)
## Image    
![alt text](image.jpg)
## Table
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

## Fenced Code Block, Syntax Highlighting
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Footnote

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.


## Heading ID:

``` 
### My Great Heading {#custom-id} 
```
##### The HTML looks like this:
```html
    <h3 id="custom-id">My Great Heading</h3>
```

## Definition List
term
: definition

## Strikethrough
~~The world is flat.~~
## Task List
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
