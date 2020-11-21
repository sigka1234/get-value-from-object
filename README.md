# get-value-from-value

<br>

**- Get Data from Object Without Error**               

<br>



<br>

# installing

<br>

**npm:**
```
npm install get-value-from-value
```
**yarn:**
```
yarn add get-value-from-value
```
<br>



<br>

# import 
```JavaScript
import get from "get-value-from-value" 

import { default, get2 } from "get-value-from-value" 

var get = require("get-value-from-value")
```
<br>



<br>

# Useage

```JavaScript
const object = {
    name: "John",
    birth: { age: 25, day: "1999-01-01" },
    hobbies: [
        "running",
        { kind: "camera", model: "canon 5d" },
        ["sing", { title: "Let it be!" }],
    ]
}
```

```JavaScript
get(object, "name") // John
get(object, "birth.age") // 25
get(object, "hobbies[0]") // running
get(object, "hobbies[1].model") // canon 5d
get(object, "hobbies[2][0]") // sing
get(object, "hobbies[2][1].title") // Let it be!

// set for default values
get(object, "name2", null) // null
get(object, "birth.age", 29) // 25
get(object, "birth.age.my", 29) // 29`
```

<br>
<br>
<br>


***
