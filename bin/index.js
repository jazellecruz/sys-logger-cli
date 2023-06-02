#!/usr/bin/env node

const commander = require("commander");
const program = new commander.Command();
const chalk = require("chalk");
const { getSystemInfo, 
       getOSInfo,
       getCPUInfo,
       getMemInfo,
       getNetInfo} = require("../lib/index");

const log = console.log;
const highlight = chalk.cyan
const util = require("util")
const format = util.format

program.command("sys")
  .description("get information of system")
  .action(() => {
    let {host_name, sys_uptime} = getSystemInfo();
    let {os_name, os_platform, os_version, os_release} = getOSInfo();
    let {cpu_model, cpu_speed, processor_count} = getCPUInfo();
    let {total_mem, free_mem} = getMemInfo();
    let network = getNetInfo()

    log(`${highlight("Host")}: ${host_name}`);
    log(`${highlight("Uptime")}: ${sys_uptime}`)
    log(`${highlight("OS")}:`)
    log(`   ${highlight("Name")}: ${os_name}`)
    log(`   ${highlight("Platform")}: ${os_platform}`)
    log(`   ${highlight("Version")}: ${os_version}`)
    log(`   ${highlight("Release")}: ${os_release}`)
    log(`${highlight("CPU")}:`)
    log(`   ${highlight("Model")}: ${cpu_model}`)
    log(`   ${highlight("Speed")}: ${cpu_speed}`)
    log(`   ${highlight("Processor Count")}: ${processor_count}`)
    log(`${highlight("Memory")}:`)
    log(`   ${highlight("Total mem")}: ${total_mem}`)
    log(`   ${highlight("Free mem")}: ${free_mem}`)
    log(`${highlight("Network")}:`)  

    // This is for logging the networks that have nested objects
    for(i = 0; i < network.length; i++){
      // Get the name of the interface for the current iteration and remove it from the array
      let interface_name = Object.keys(network[i]).pop()

      // Get the properties of the interface for easier access
      let interface_properties = network[i][interface_name]

      /* 
      * Get the names of the properties of the interface.
      * Each interface may have different properties than the others.
      */
      let interface_names = Object.keys(network[i][interface_name])

      console.log(`   ${highlight(interface_name)}:`)

      // loop through the properties of each interface
      for(j = 0; j < interface_names.length; j++){
        console.log(`      ${highlight(interface_names[j])}: ${interface_properties[interface_names[j]]}`)
      }

    } 

  }); 

program.parse(process.argv);




