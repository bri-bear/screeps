const minerMax = 5;
const builderMax = 1;
const upgraderMax = 1;




console.log("nervous system online..")

const minerPreset = [WORK, CARRY, MOVE]
const builderPreset = [WORK, CARRY, MOVE]
const upgraderPreset = [WORK, CARRY, MOVE]


function creepSignal(type) {
                    Game.spawns['Spawn1'].
                    spawnCreep(type + "Preset", 
                    Math.floor(Math.random() * 500), 
                    {memory: {role: type}});
                    // Ignore this horrendous formatting for now. :)
                    console.log("spawning creep with: " + type + "Preset");
}

var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
    if (numberOfMiners !== minerMax) {
       creepSignal("miner");
    }

var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder')
    if (numberOfMiners !== builderMax) {
        creepSignal("builder");
    }

var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')
    if (numberOfMiners !== upgraderMax) {
        creepSignal("upgrader");
    }

module.exports = { creepSignal }
