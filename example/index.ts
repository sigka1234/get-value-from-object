import get from "../dist"
// import get from "get-value-from-object"
// import { default as name } from "../src"
// var get = require("../src")
// var name = require("../src")

const object = {
    name: "John",
    birth: { age: 25, day: "1999-01-01" },
    hobbies: [
        "running",
        { kind: "camera", model: "canon 5d" },
        ["sing", { title: "Let it be!" }],
    ]
}

console.log(get(object, "name")) // John
console.log(get(object, "birth.age")) // 25
get(object, "hobbies[0]") // running
get(object, "hobbies[1].model") // canon 5d
get(object, "hobbies[2][0]") // sing
get(object, "hobbies[2][1].title") // Let it be!

// set for default values
get(object, "name2", null) // null
get(object, "birth.age", 29) // 25
get(object, "birth.age.my", 29) // 29