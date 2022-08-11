const minerMax = 5;
const builderMax = 1;
const upgraderMax = 1;

console.log("nervous system online..")

const creepPresets = {
    "minerPreset": [WORK, CARRY, MOVE],
    "builderPreset": [WORK,CARRY, MOVE],
    "upgraderPreset": [WORK, CARRY, MOVE]
}


function creepSignal(type) {
                    Game.spawns['Spawn1'].
                    spawnCreep(creepPresets[type], 
                    Math.floor(Math.random() * 500), 
                    {memory: {role: type}});
                    // Ignore this horrendous formatting for now. :)
                    console.log("spawning creep with: " + type);
}

function checkCreeps() {

var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
    if (numberOfMiners !== minerMax) {
       creepSignal("minerPreset");
    }

var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder')
     if (numberOfBuilders !== builderMax) {
        creepSignal("builderPreset");
    }

var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')
    if (numberOfUpgraders !== upgraderMax) {
        creepSignal("upgraderPreset");
    }
}

module.exports = { creepSignal, checkCreeps }
