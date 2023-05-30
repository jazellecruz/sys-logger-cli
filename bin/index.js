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

program.command("system")
  .description("get information of system")
  .action(() => {
    let {host_name, sys_uptime} = getSystemInfo();
    let {os_name, os_platform, os_version, os_release} = getOSInfo();
    let {cpu_model, cpu_speed, processor_count} = getCPUInfo();
    let {total_mem, free_mem} = getMemInfo();
    let {net_family, net_address, net_netmask, net_mac_address} = getNetInfo();
    
  }); 

program.parse(process.argv);




