const minerMax = 5;
const builderMax = 1;
const upgraderMax = 1;




console.log("nervous system online..")
const creepPresets = {
    "miner": [WORK, CARRY, MOVE],
    "builder": [WORK,CARRY, MOVE],
    "upgrader": [WORK, CARRY, MOVE]
}


function creepSignal(type) {
                    Game.spawns['Spawn1'].
                    spawnCreep(creepPresets[type], 
                    Math.floor(Math.random() * 500), 
                    {memory: {role: type}});
                    // Ignore this horrendous formatting for now. :)
                    console.log("spawning creep: " + type);
}

function checkCreeps() {

var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder')
var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')

    if (numberOfMiners !== minerMax) {
       creepSignal("minerPreset");
    } else if (numberOfBuilders !== builderMax) {
        creepSignal("builderPreset");
    } else if (numberOfMiners !== upgraderMax) {
        creepSignal("upgraderPreset");
    }
}

module.exports = { creepSignal, checkCreeps }
