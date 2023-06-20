const person = {
    name: "Igor",
    job: "Programmer",
    parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents[0])

const [father, mother] = parents

console.log(father, mother)

function createUser({ Name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: name,
        job: job,
        parents: parents
    }
}

const luke = createUser(person)

console.log(luke)
