
let roleMiner = require('role.miner');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');

const minerMax = 3;
const builderMax = 1;
const upgraderMax = 1;




const creepData = {
    "miner": {
        "body": [WORK, CARRY, MOVE],
        "max": 2, 
        "roleFunc": "roleMiner.run()"
    },

    "builder": {
         "body": [WORK,CARRY, MOVE],
         "max": 1,
         "roleFunc": "roleBuilder.run()"
    },

    "upgrader": {
         "body": [WORK, CARRY, MOVE],
         "max:": 1,
         "roleFunc": "roleUpgrader.run()"
    }
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
    // if (Game.spawns["Spawn1"].spawnCreep(creepData[type])) {
    // if ((Game.spawns['Spawn1'].spawnCreep(creepPresets[type]), 'Worker1', { dryRun: true }) === true) {
                    Game.spawns["Spawn1"].spawnCreep(creepData[type].body, Math.floor (Math.random() * 500), {memory: {role: type}});
                    console.log("attempting spawn: " + type);
    // }
}


function specificCheck(type) {
    var numberofType = _.sum(Game.creeps, (c) => c.memory.role == type)  
        if (numberofType !== creepData[type].max) {
            creepSignal(type);
        }
}

function checkCreeps() {
    for (let i in creepData) {
        specificCheck(i)
    }
}

module.exports = { creepSignal, checkCreeps, scrubmem, 
                   specificCheck, creepData}


