let roleMiner = require('role.miner');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
var nervSys = require('nervous-system');

console.log("nervous-system online")





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

    nervSys.checkCreeps();
};


