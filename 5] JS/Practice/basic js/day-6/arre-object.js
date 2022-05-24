let allUserData=[
    { //key : value
        name:"abc",
        age : "n+1",
        addr : "PT1"

    },
    { //key : value
        name:"bcd",
        age : "n+2",
        addr : "PT2"

    },
    { //key : value
        name:"cef",
        age : "n+3",
        addr : "PT3"

    },
    { //key : value
        name:
        {
            name:"javascript",
            age : "current year - 1995",
            addr : "all over world"
        }

    }
]


console.log("\n\nAll User Data =>\n")
console.log(allUserData)
console.log("\n\n")

console.log("Nested arrey-object access  =>\n")
console.log(allUserData[3].name)