# cheatsheet

## IF ELSE

```javascript

if ((age >= 14) && (age < 19)) {        // logical condition
    status = "Eligible.";               // executed if condition is true
} else {                                // else block is optional
    status = "Not eligible.";           // executed if condition is false
}

```

## Switch

```javascript

switch (new Date().getDay()) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";
        break;
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
}

```

## Variables

```javascript

var a;                          // variable
var b = "init";                 // string
var c = "Hi" + " " + "Joe";     // = "Hi Joe"
var d = 1 + 2 + "3";            // = "33"
var e = [2,3,5,8];              // array
var f = false;                  // boolean
var g = /()/;                   // RegEx
var h = function(){};           // function object
const PI = 3.14;                // constant
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local variable

```

## Strict Mode

```javascript

"use strict";   // Use strict mode to write secure code
x = 1;          // Throws an error because variable is not de

```

## Values

```javascript

false, true                     // boolean
18, 3.14, 0b10011, 0xF6, NaN    // number
"flower", 'John'                // string
undefined, null , Infinity      // special

```

## Operators

```javascript

a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // postfix increment and decrement

```

## Bitwise operators

```javascript

&	AND
    5 & 1   = (0101 & 0001)	  = 1 (1)
|	OR
    5 | 1   = (0101 | 0001)	  = 5 (101)
~	NOT
    ~ 5     = (~0101)		  = 10 (1010)
^	XOR
    5 ^ 1   = (0101 ^ 0001)	  = 4 (100)
<<	left shift
    5 << 1  = (0101 << 1)	  = 10 (1010)
>>	right shift
    5 >> 1  = (0101 >> 1)	  = 2 (10)
>>>	zero fill right shift
    5 >>> 1 = (0101 >>> 1)	  = 2 (10)

```

## xDates

```javascript

Fri Dec 25 2020 11:03:45 GMT+0700 (Indochina Time)
var d = new Date();
1608869025255 miliseconds passed since 1970
Number(d)
Date("2017-06-23");                 // date declaration
Date("2017");                       // is set to Jan 01
Date("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017");               // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time

```

## Get Times

```javascript

var d = new Date();
a = d.getDay();     // getting the weekday

getDate();          // day as a number (1-31)    => [25]
getDay();           // weekday as a number (0-6) => [5]
getFullYear();      // four digit year (yyyy)    => [2020]
getHours();         // hour (0-23)               => [11]
getMilliseconds();  // milliseconds (0-999)      => [65]
getMinutes();       // minutes (0-59)            => [20]
getMonth();         // month (0-11)              => [11] December
getSeconds();       // seconds (0-59)            => [7]
getTime();          // milliseconds since 1970   => [1608870007065]

```

## Errors

```javascript

try {                           // block of code to try
    undefinedFunction();
}
catch(err) {                    // block to handle errors
    console.log(err.message);
}

```

## Throw error

```javascript

throw "My error message";    // throw a text

```

## Input validation

```javascript

var x = document.getElementById("mynum").value; // get input value
try {
    if(x == "")  throw "empty";                 // error cases
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x > 10)   throw "too high";
}
catch(err) {                                    // if there's an error
    document.write("Input is " + err);          // output error
    console.error(err);                         // write the error in console
}
finally {
    document.write("</br />Done");              // executed regardless of the try / catch result
}

```

## Error name values

```javascript

RangeError          A number is "out of range"
ReferenceError      An illegal reference has occurred
SyntaxError         A syntax error has occurred
TypeError           A type error has occurred
URIError            An encodeURI() error has occurred

```
# Basics

## On page script

```javascript

<script type="text/javascript">  ...
</script>

```

## Include external JS file

```javascript

<script src="filename.js"></script>

```

## Delay - 1 second timeout

```javascript

setTimeout(function () {

}, 1000);

```

## Functions

```javascript

function addNumbers(a, b) {
    return a + b; ;
}
x = addNumbers(1, 2);

```

## Edit DOM element

```javascript

document.getElementById("elementID").innerHTML = "Hello World!";

```

## Output

```javascript

console.log(a);             // write to the browser console
document.write(a);          // write to the HTML
alert(a);                   // output in an alert box
confirm("Really?");         // yes/no dialog, returns true/false depending on user click
prompt("Your age?","0");    // input dialog. Second argument is the initial value

```

## Comments

```javascript

/* Multi line
    comment
*/
// One line

```

## Strings

```javascript

var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
128.toString(16);               // number to hex(16), octal (8) or binary (2)

```

## Numbers and Math

```javascript

var pi = 3.141;
pi.toFixed(0);          // returns 3
pi.toFixed(2);          // returns 3.14 - for working with money
pi.toPrecision(2)       // returns 3.1
pi.valueOf();           // returns number
Number(true);           // converts to number
Number(new Date())      // number of milliseconds since 1970
parseInt("3 months");   // returns the first number: 3
parseFloat("3.5 days"); // returns 3.5
Number.MAX_VALUE        // largest possible JS number
Number.MIN_VALUE        // smallest possible JS number
Number.NEGATIVE_INFINITY// -Infinity
Number.POSITIVE_INFINITY// Infinity

```

## Math

```javascript

var pi = Math.PI;       // 3.141592653589793
Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2,8);          // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5

```

## Constants like Math.PI:

```javascript

E, PI, SQRT2, SQRT1_2, LN2, LN10, LOG2E, Log10E

```

## Global Functions:

```javascript

eval();                     // executes a string as if it was script code
String(23);                 // return string from number
(23).toString();            // return string from number
Number("23");               // return number from string
decodeURI(enc);             // decode URI. Result: "my page.asp"
encodeURI(uri);             // encode URI. Result: "my%page.asp"
decodeURIComponent(enc);    // decode a URI component
encodeURIComponent(uri);    // encode a URI component
isFinite();                 // is variable a finite, legal number
isNaN();                    // is variable an illegal number
parseFloat();               // returns floating point number of string
parseInt();                 // parses a string and returns an integer

```

## Regular Expressions\n:

```javascript

var a = str.search(/CheatSheet/i);

Modifiers
i   perform case-insensitive matching
g   perform a global match
m   perform multiline matching

Patterns
\                   Escape character
\d                  find a digit
\s                  find a whitespace character
\b                  find match at beginning or end of a word
n+                  contains at least one n
n*                  contains zero or more occurrences of n
n?                  contains zero or one occurrences of n
^                   Start of string
$                   End of string
\uxxxx              find the Unicode character
.                   Any single character
(a|b)               a or b
(...)               Group section
[abc]               In range (a, b or c)
[0-9]               any of the digits between the brackets
[^abc]              Not in range
\s                  White space
a?                  Zero or one of a
a*                  Zero or more of a
a*?                 Zero or more, ungreedy
a+                  One or more of a
a+?                 One or more, ungreedy
a{2}                Exactly 2 of a
a{2,}               2 or more of a
a{,5}               Up to 5 of a
a{2,5}              2 to 5 of a
a{2,5}?             2 to 5 of a, ungreedy
[:punct:]           Any punctu­ation symbol
[:space:]           Any space character
[:blank:]           Space or tab

```

## JSON

### 1. Create JSON object

```javascript

    var str = '{"names":[' +                    // create JSON object
    '{"first":"Hakuna","lastN":"Matata" },' +
    '{"first":"Jane","lastN":"Doe" },' +
    '{"first":"Air","last":"Jordan" }]}';
    obj = JSON.parse(str);                      // parse
    document.write(obj.names[1].first);         // access

```

### 2. Send

```javascript

    var myObj = { "name":"Jane", "age":18, "city":"Chicago" };  // create object
    var myJSON = JSON.stringify(myObj);                         // stringify
    window.location = "demo.php?x=" + myJSON;

```

### 3. Storing and retrieving

```javascript

    myObj = { "name":"Jane", "age":18, "city":"Chicago" };
    myJSON = JSON.stringify(myObj);                 // storing data
    localStorage.setItem("testJSON", myJSON);
    text = localStorage.getItem("testJSON");        // retrieving data
    obj = JSON.parse(text);
    document.write(obj.name);

```

## Loops

### 1. For Loop

```javascript

    for (var i = 0; i < 10; i++) {
        document.write(i + ": " + i*3 + "<br />");
    }
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum + = a[i];
    }               // parsing an array
    html = "";
    for (var i of custOrder) {
        html += "<li>" + i + "</li>";
    }

```

### 2. While Loop

```javascript

    var i = 1;                      // initialize
    while (i < 100) {               // enters the cycle if statement is true
        i *= 2;                     // increment to avoid infinite loop
        document.write(i + ", ");   // output
    }

```

### 3. Do While Loop

```javascript

    var i = 1;                      // initialize
    do {                            // enters cycle at least once
        i *= 2;                     // increment to avoid infinite loop
        document.write(i + ", ");   // output
    } while (i < 100)               // repeats cycle if statement is true at the end

```

### 4. Break

```javascript

    for (var i = 0; i < 10; i++) {
        if (i == 5) { break; }          // stops and exits the cycle
        document.write(i + ", ");       // last output number is 4
    }

```

### 5. Continue

```javascript

    for (var i = 0; i < 10; i++) {
        if (i == 5) { continue; }       // skips the rest of the cycle
        document.write(i + ", ");       // skips 5
    }

```

## Data Types

```javascript

var age = 18;                           // number
var name = "Jane";                      // string
var name = {first:"Jane", last:"Doe"};  // object
var truth = false;                      // boolean
var sheets = ["HTML","CSS","JS"];       // array
var a; typeof a;                        // undefined
var a = null;                           // value null

```

## Objects

```javascript

var student = {                 // object name
    firstName:"Jane",           // list of properties and values
    lastName:"Doe",
    age:18,
    height:170,
    fullName : function() {     // object function
    return this.firstName + " " + this.lastName;
    }
};
student.age = 19;           // setting value
student[age]++;             // incrementing
name = student.fullName();  // call object function

```

## Events

```javascript

<button onclick="myFunction();">
    Click here
</button>

```

### 1. Mouse

```javascript

onclick, oncontextmenu, ondblclick, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseover, onmouseout, onmouseup

```

### 2. Keyboard

```javascript
onkeydown, onkeypress, onkeyup
```

### 3. Frame

```javascript
onabort, onbeforeunload, onerror, onhashchange, onload, onpageshow, onpagehide, onresize, onscroll, onunload
```

### 4. Form

```javascript
onblur, onchange, onfocus, onfocusin, onfocusout, oninput, oninvalid, onreset, onsearch, onselect, onsubmit
```

### 5. Drag

```javascript
ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop
```

### 6. Clipboard

```javascript
oncopy, oncut, onpaste
```

### 7. Media

```javascript
onabort, oncanplay, oncanplaythrough, ondurationchange, onended, onerror, onloadeddata, onloadedmetadata, onloadstart, onpause, onplay, onplaying, onprogress, onratechange, onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange, onwaiting
```

### 8. Animation

```javascript
animationend, animationiteration, animationstart
```

### 9. Miscellaneous

```javascript
transitionend, onmessage, onmousewheel, ononline, onoffline, onpopstate, onshow, onstorage, ontoggle, onwheel, ontouchcancel, ontouchend, ontouchmove, ontouchstart
```

## Arrays

```javascript
var dogs = ["Bulldog", "Beagle", "Labrador"];
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
    console.log(dogs[i]);
}

```

### Methods

#### Add/remove items

```javascript
dogs.pop();                             // extracts and remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // extracts and remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning

```

#### splice

```javascript
to delete an element from the array

arr.splice(start[, deleteCount, elem1, ..., elemN])

Remove 1 Element

    let arr = ["I", "study", "JavaScript"];

    arr.splice(1, 1); // from index 1 remove 1 element

    alert( arr ); // ["I", "JavaScript"]

Remove 3 Elements

    let arr = ["I", "study", "JavaScript", "right", "now"];

    // remove 3 first elements and replace them with another
    arr.splice(0, 3, "Let's", "dance");

    alert( arr ) // now ["Let's", "dance", "right", "now"]

Returns the array of removed elements
    let arr = ["I", "study", "JavaScript", "right", "now"];

    // remove 2 first elements
    let removed = arr.splice(0, 2);

    alert( removed ); // "I", "study" <-- array of removed elements

Insert the elements without any removals
    let arr = ["I", "study", "JavaScript"];

    // from index 2
    // delete 0
    // then insert "complex" and "language"
    arr.splice(2, 0, "complex", "language");

    alert( arr ); // "I", "study", "complex", "language", "JavaScript"

Negative indexes are allowed. They specify the position from the end of the array
    let arr = [1, 2, 5];

    // from index -1 (one step from the end)
    // delete 0 elements,
    // then insert 3 and 4
    arr.splice(-1, 0, 3, 4);

    alert( arr ); // 1,2,3,4,5

```

#### slice

```javascript

The syntax is: arr.slice([start], [end])

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

arr.slice() creates a copy of arr

```

#### concat

```javascript

The syntax is: arr.concat(arg1, arg2...)

let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

```


#### Iterate: forEach

```javascript

The syntax is:

    arr.forEach(function(item, index, array) {
    // ... do something with item
    });

    The result of the function (if it returns any) is thrown away and ignore

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

```

#### Searching in array

```javascript

indexOf/lastIndexOf and includes

    arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
    arr.lastIndexOf(item, from) – same, but looks for from right to left.
    arr.includes(item, from) – looks for item starting from index from, returns true if found.

Note The methods use === comparison. (So, if we look for false, it finds exactly false and not the zero.)

    let arr = [1, 0, false];

    alert( arr.indexOf(0) ); // 1
    alert( arr.indexOf(false) ); // 2
    alert( arr.indexOf(null) ); // -1

    alert( arr.includes(1) ); // true

Also, a very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf:
    const arr = [NaN];
    alert( arr.indexOf(NaN) ); // -1 (should be 0, but === equality doesn't work for NaN)
    alert( arr.includes(NaN) );// true (correct)

```

#### find and findIndex

```javascript

The syntax is:

    let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
    });

For instance:

    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
    ];

    let user = users.find(item => item.id == 1); // return item or undefined

    alert(user.name); // John

```

#### filter

```javascript

The syntax is:

    let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
    });

For instance:

    let users = [
        {id: 1, name: "John"},
        {id: 2, name: "Pete"},
        {id: 3, name: "Mary"}
    ];

    // returns array of the first two users
    let someUsers = users.filter(item => item.id < 3);

    alert(someUsers.length); // 2

```

#### Transform an array

```javascript

map(fn)

    The syntax is:

        let result = arr.map(function(item, index, array) {
        // returns the new value instead of item
        });

    For instance:

        let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
        alert(lengths); // 5,7,6

sort(fn)

    The behaviors
        The call to arr.sort() sorts the array in place, changing its element order
        returns the sorted array.
        arr itself is modified.
        The items are sorted as strings by default.

    For instance:

        1. the method reorders the content of arr, sorted as strings.
            let arr = [ 1, 2, 15 ];
            arr.sort();
            alert( arr );  // 1, 15, 2

        2. use our own sorting order
            function compareNumeric(a, b) {
                if (a > b) return 1; // if the first value is greater than the second
                if (a == b) return 0; // if values are equal
                if (a < b) return -1; // if the first value is less than the second
            }
            let arr = [ 1, 2, 15 ];
            arr.sort(compareNumeric);
            alert(arr);  // 1, 2, 15

        3. Arrow functions for the best
            arr.sort( (a, b) => a - b );

    localeCompare()

        The behaviors
            use str.localeCompare method to correctly sort letters, such as Ö

        For instance:

            1. let’s sort a few countries in German:
                let countries = ['Österreich', 'Andorra', 'Vietnam'];

                alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)
                alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

reverse()

    The behaviors
        The method arr.reverse reverses the order of elements in arr.

    For instance:
        let arr = [1, 2, 3, 4, 5];
        arr.reverse();

        alert( arr ); // 5,4,3,2,1

split(delim) and join(glue)

    split

        let names = 'Bilbo, Gandalf, Nazgul';

        // no limit
            let arr = names.split(', ');

            for (let name of arr) {
                alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
            }

        // a limit of 2 elements on the array length.
            let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

            alert(arr); // Bilbo, Gandalf

        // Split into letters
            let str = "test";
            alert( str.split('') ); // t,e,s,t

    join

        let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

        let str = arr.join(';'); // glue the array into a string using ;

        alert( str ); // Bilbo;Gandalf;Nazgul

reduce/reduceRight

    The syntax is:

        let value = arr.reduce(function(accumulator, item, index, array) {
        // ...
        }, [initial]);

    For instance:

        let arr = [1, 2, 3, 4, 5];
        let result = arr.reduce((sum, current) => sum + current, 0);
        alert(result); // 15

    The method arr.reduceRight does the same, but goes from right to left.

Array.isArray

    alert(Array.isArray({})); // false
    alert(Array.isArray([])); // true

```



```javascript

dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort((a, b) =>  a - b);               // numeric sort
x.sort((a, b) =>  b - a);               // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort

concat, copyWithin, every, fill, filter, find, findIndex, forEach, indexOf, isArray, join, lastIndexOf, map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toString, unshift, valueOf


```

## Promises

```javascript

function sum (a, b) {
    return Promise(function (resolve, reject) {
        setTimeout(function () {                                         // send the response after 1 second
            if (typeof a !== "number" || typeof b !== "number") {        // testing input types
                return reject(new TypeError("Inputs must be numbers"));
            }
            resolve(a + b);
        }, 1000);
    });
}

var myPromise = sum(10, 5);

myPromsise
    .then(function (result) {
        document.write(" 10 + 5: ", result);
        return sum(null, "foo");                // Invalid data and return another promise
    })
    .then(function () {                         // Won't be called because of the error
    })
    .catch(function (err) {                     // The catch handler is called instead, after another second
        console.error(err);                     // => Please provide two numbers to sum.
    });

States

    pending, fulfilled, rejected

Properties

    Promise.length, Promise.prototype

Methods

    Promise.all(iterable),
    Promise.race(iterable),
    Promise.reject(reason),
    Promise.resolve(value)

```