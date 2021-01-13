class Employee {
    constructor(name, salary) {
        this.name = name,
        this.salary = salary
    }

    responsibilities() {

    }

    work() {
        return `${this.name} work with ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} get ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'process of creating programs'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'process of testing'
    }
}

const dev = new Developer('Vlad', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Viktoria', 90000)
console.log(tester.getPaid())
console.log(tester.work())
