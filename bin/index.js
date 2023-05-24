#!/usr/bin/env node

// MAIN MODULES
const commander  = require("commander");
const program = new commander.Command();

program.command("hello")
  .description("Greet user")
  .argument('<name', "user's name")
  .action((name) => {
    console.log(`Hello ${name}!`)
  });

program.parse(process.argv);

