# get-value-from-value
It is possible get data from object without error

# installing

***npm:***
```
npm install get-value-from-value
```
***using yarn:***
```
yarn add get-value-from-value
```

***

# Useage
```JavaScript
const <span style="color:red">object</span> =  {
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

***
