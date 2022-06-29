const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const r2 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  r1.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    r1.close()
  })
  r2.question(`What's your name?`, age => {
    console.log(`Hi ${age}!`)
    r2.close()
  })