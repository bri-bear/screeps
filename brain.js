class Brain {
    constructor() {
        this.room = Game.rooms
        console.log(Game.rooms);
        console.log("brain online..")
        this.creepCount = _.size(Game.creeps);
        this.roleArray = []
        this.joblessCreep = []
    }

   


    creepSignal() {
         Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 500));
         console.log("Spawning creeps..")
    }

    checkCreeps() {
        for (var name in Game.creeps) {
            let role = Game.creeps[name].memory.role;
            var name = Game.creeps[name]

            console.log(role);
            if (role !== undefined) { 
                this.roleArray.push(role) 
            } else {
                this.joblessCreep.push(name)
            }
            console.log(this.roleArray);
            console.log(this.joblessCreep)

            if (this.joblessCreep.length) {
                for (let i = 0; i < this.joblessCreep.length; i++) {
                    this.joblessCreep[i].memory.role = "miner"
                }
            }

        }
    }




}


module.exports = { Brain }