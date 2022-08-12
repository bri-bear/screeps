let roleMiner = require('role.miner');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
var nervSys = require('nervous-system');
console.log("nervous-system online")


module.exports.loop = function () {

    nervSys.scrubmem();

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        let creepRole = creep.memory.role;
        if(creepRole == 'miner') {
            roleMiner.run(creep);
        }
        if(creepRole == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creepRole == 'builder') {
            roleBuilder.run(creep);
        }
    }

    nervSys.checkCreeps();
};


