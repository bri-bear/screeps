let roleMiner = require('role.miner');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let brain = require('brain');


manager = new brain.Brain();

for (const name in Memory.creeps) { 
    if (!(name in Game.creeps)) {
        delete Memory.creeps[name];
    }
}


manager.checkCreeps();


module.exports.loop = function () {

    

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }


}