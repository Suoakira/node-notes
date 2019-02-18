
const square = (x) => {
    const result = x * x
    return result
}

const squareSimple = (x) => x * x

console.log(square(9))
console.log(squareSimple(9))

const user = {
    name: "Stephen",
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi I'm ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi I'm ${this.name}`)
    }
}

console.log(user.sayHi())
console.log(user.sayHiAlt())