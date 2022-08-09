const worker_adjectives = ["Burnt", "Urist", "Fulfilled", "Greasy", "Happy", "Complacent", "Proud", "Violent"]
const worker_nouns = ["Prole", "Comrade", "Worker"]


// Use this for workers
function genProleName() {
    return worker_adjectives[Math.floor(Math.random() * worker_adjectives.length)] 
    + " " // there is a space here its just fucking invisible
    + worker_nouns[Math.floor(Math.random() * worker_nouns.length)]
}

module.exports = {
    worker_adjectives, worker_nouns,
    genName
};
