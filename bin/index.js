#!/usr/bin/env node

// MAIN MODULES
const commander = require("commander");
const program = new commander.Command();
const os = require("os"); 
const chalk = require("chalk");

const log = console.log;

const getSystemInfo = () => {
  let host = os.hostname(),
  os_name = os.type(),
  os_platfrom = os.platform(),
  os_release = os.release(),
  os_version = os.version();

  // Standardize the os name of both windows and mac for consistency. 
  if(os_name.toLowerCase() === "windows_nt") os_name = "Windows";
  if(os_name.toLowerCase() === "darwin") os_name = "macOS";

  return {
    host: host,
    os: {
      name: os_name,
      platform: os_platfrom,
      release: os_release,
      version: os_version
    }
  }
}

program.command("system")
  .description("get information of system")
  .action(() => {
    let system = getSystemInfo();
    log(`${chalk.green("Host")}: ${system.host}`);
    log(`${chalk.green("OS")}: 
  Name: ${system.os.name}
  Platform: ${system.os.platform}
  Release: ${system.os.release}
  Version: ${system.os.version}
    `);
});

program.parse(process.argv);




