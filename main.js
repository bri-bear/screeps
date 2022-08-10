var roleMiner = require('role.miner');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var brain = require('brain');


manager = new brain.Brain();

for (const name in Memory.creeps) { 
    if (!(name in Game.creeps)) {
        delete Memory.creeps[name];
    }
}


manager.checkCreeps();


module.exports.loop = function () {

    

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
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