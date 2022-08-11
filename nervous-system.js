const minerMax = 2;
const builderMax = 1;
const upgraderMax = 1;




console.log("nervous system online..")
const creepPresets = {
    "miner": [WORK, CARRY, MOVE],
    "builder": [WORK,CARRY, MOVE],
    "upgrader": [WORK, CARRY, MOVE]
}


function creepSignal(type) {
        if(Game.spawns['Spawn1'].spawnCreep(creepPresets[type], null, { dryRun: true})) {
                    Game.spawns['Spawn1'].spawnCreep(creepPresets[type], Math.floor (Math.random() * 500), {memory: {role: type}});
                    console.log("spawning creep: " + type);
        }
}

function checkCreeps() {

// pretty sure theres a way to encapsulate all of this as a template and a queue
var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder')
var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')


    if (numberOfMiners != minerMax) {
       creepSignal("miner");
    } else if (numberOfBuilders !== builderMax) {
        creepSignal("builder");
    } else if (numberOfUpgraders !== upgraderMax) {
        creepSignal("upgrader");
    }
}

module.exports = { creepSignal, checkCreeps }
