#!/usr/bin/env node

/* RUNS ON NODE VERSIONS 18.16.0 and above. */

const commander = require("commander");
const program = new commander.Command();

const logSysInfo = require("../lib/index");
const logError = require("../utils/error");

program.command("sys")
  .description("display all information about system")
  .option("--os-only", "display os details only")
  .option("--cpu-only", "display cpu details only")
  .option("--mem-only", "display memory details only")
  .option("--net-only", "display net details only")
  .action((options) => {
    try{
      logSysInfo(options)
    } catch(err) {
      logError(err);
    }
  }); 

program.parse(process.argv);




