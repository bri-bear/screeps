class Brain {
    constructor() {
        console.log("brain online..")
        this.creepCount = _.size(Game.creeps);
        this.roleArray = []
        this.joblessCreep = []

        // Keep creep count up
        if (_.size(Game.creeps) !== 5) {
                Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 500));
                console.log("producing filth")
        }
    }

    

    creepSignal() {
         Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 500));
         console.log("Spawning creeps..")
    }

    checkCreeps() {
        for (var name in Game.creeps) {
            var role = Game.creeps[name].memory.role;
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