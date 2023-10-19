// const Command = require('./command.js');


class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = name;  //name is a string that is the name of the message.
      if (!name) {
         throw Error("Message name required.");
      }
      this.commands = commands;  //commands is an array of Command objects.
   }
}

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);

// console.log(commands);
// console.log(message);

module.exports = Message;