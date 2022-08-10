const minerNum = 5;
console.log("nervous system online..")


function creepSignal(type) {
    switch(type) {
         case 'miner': 
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 500));
            console.log("spawning creeps..")
            break;
         case 'upgrader':
         break;
    }
}

var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner')
    if (numberOfMiners !== minerNum) {
        creepSignal("miner")
    }

module.exports = { creepSignal }
