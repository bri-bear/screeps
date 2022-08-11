const minerMax = 3;
const builderMax = 1;
const upgraderMax = 1;




const creepPresets = {
    "miner": [WORK, CARRY, MOVE],
    "builder": [WORK,CARRY, MOVE],
    "upgrader": [WORK, CARRY, MOVE]
}


function scrubmem() {
    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            console.log("scrubbing" + name)
            delete Memory.creeps[name];
        }
    }
}


function creepSignal(type) {
    if (Game.spawns["Spawn1"].spawnCreep(creepPresets[type])) {
    // if ((Game.spawns['Spawn1'].spawnCreep(creepPresets[type]), 'Worker1', { dryRun: true }) === true) {
                    Game.spawns["Spawn1"].spawnCreep(creepPresets[type], Math.floor (Math.random() * 500), {memory: {role: type}});
                    console.log("attempting spawn: " + type);
    }
}

function checkCreeps() {
// pretty sure theres a way to encapsulate all of this as a template and a queue
var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
    if (numberOfMiners !== minerMax) {
       creepSignal("miner");
    }

var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder')
    if (numberOfBuilders !== builderMax) {
        creepSignal("builder");
    }

var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')
    if (numberOfUpgraders !== upgraderMax) {
        creepSignal("upgrader");
    }

}

module.exports = { creepSignal, checkCreeps, scrubmem }
