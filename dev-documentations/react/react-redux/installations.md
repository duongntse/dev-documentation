# Create React App installation
```
     npx create-react-app my-app && cd my-app
     npm i -S prop-types
     npm i -S react-redux redux redux-thunk
     npm i -S moment lodash
     npm -D gh-pages enzyme @wojtekmaj/enzyme-adapter-react-17

```
# Full installation
``` my-app
     npx create-react-app my-app && \
     cd my-app && \
     npm i -S prop-types react-redux redux redux-thunk moment lodash && \
     npm -D gh-pages enzyme @wojtekmaj/enzyme-adapter-react-17 && \
     npm start

```
# Packages

```
    "dependencies": {
        "@testing-library/jest-dom": "^5.11.6",
        "@testing-library/react": "^11.1.2",
        "@testing-library/user-event": "^12.2.2",
        "bootstrap": "^4.5.3",
        "lodash": "^4.17.20",
        "moment": "^2.29.1",
        "prop-types": "^15.7.2",
        "react": "^17.0.1",
        "react-bootstrap": "^1.4.0",
        "react-dom": "^17.0.1",
        "react-redux": "^7.2.2",
        "react-scripts": "4.0.0",
        "redux": "^4.0.5",
        "redux-thunk": "^2.3.0",
        "underscore": "^1.11.0",
        "web-vitals": "^0.2.4"
    },
    "devDependencies": {
        "@wojtekmaj/enzyme-adapter-react-17": "^0.3.1",
        "enzyme": "^3.11.0",
        "gh-pages": "^3.1.0"
    },
    "scripts": {
        ...,
        "copyCNAME": "cp ./CNAME ./build/",
        "deploy": "gh-pages -d build"
    },

```

``` setupTest.js

import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

```