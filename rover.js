const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   // Write code here!
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }
   receiveMessage(message) {
      let results = [];
      for (let i = 0; i < message.commands.length; i++) {
         let command = message.commands[i];
         let result = { completed: false };

         if (command.commandType === "MOVE") {
            if (this.mode === "NORMAL") {
               this.position = command.value;
               result.completed = true;
            }
         } else if (command.commandType === "STATUS_CHECK") {
            result.completed = true;
            result.roverStatus = {
               mode: this.mode,
               generatorWatts: this.generatorWatts,
               position: this.position,
            };
         } else if (command.commandType === "MODE_CHANGE") {
            this.mode = command.value;//String representing rover mode
            result.completed = true;
         }
         results.push(result);
      }

      return {
         message: message.name,
         results: results,
      };
   }

}

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 100)];
let commands = [new Command('MOVE', 100)];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);
console.log(rover.position);

module.exports = Rover;