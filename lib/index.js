
// MAIN FUNCTIONS FOR THE COMMANDS
const chalk = require("chalk");
const { getSystemInfo, 
       getOSInfo,
       getCPUInfo,
       getMemInfo,
       getNetInfo } = require("./system");

const log = console.log;
const highlight = chalk.cyan


const logSysInfo = (options) => {

  let {host_name, sys_uptime, user_name} = getSystemInfo();
  let {os_name, os_platform, os_version, os_release, machine_type} = getOSInfo();
  let {cpu_model, cpu_speed, processor_count} = getCPUInfo();
  let {total_mem, free_mem} = getMemInfo();
  let network = getNetInfo()

  // if there are no options, display all info
  if (Object.keys(options).length === 0){

    log(highlight(`@${user_name}`))
    log(`${highlight("Host")}: ${host_name}`);
    log(`${highlight("Uptime")}: ${sys_uptime}`)
    log(`${highlight("OS")}:`)
    log(`   ${highlight("Name")}: ${os_name}`)
    log(`   ${highlight("Platform")}: ${os_platform}`)
    log(`   ${highlight("Version")}: ${os_version}`)
    log(`   ${highlight("Release")}: ${os_release}`)
    log(`   ${highlight("Machine Type")}: ${machine_type}`)
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
      * Get the names of the properties of the interface to higligth them each
      * Each interface may have different properties than the others.
      */

      let interface_names = Object.keys(network[i][interface_name])

      // Log the current interface
      console.log(`   ${highlight(interface_name)}:`)

      // loop through the properties of each interface
      for(j = 0; j < interface_names.length; j++){
        console.log(`      ${highlight(interface_names[j])}: ${interface_properties[interface_names[j]]}`)
      }
      return;
    } 

  }

  if(options.osOnly) {
    log(`${highlight("OS")}:`)
    log(`   ${highlight("Name")}: ${os_name}`)
    log(`   ${highlight("Platform")}: ${os_platform}`)
    log(`   ${highlight("Version")}: ${os_version}`)
    log(`   ${highlight("Release")}: ${os_release}`)
    log(`   ${highlight("Machine Type")}: ${machine_type}`)
  }

  if(options.cpuOnly) {
    log(`${highlight("CPU")}:`)
    log(`   ${highlight("Model")}: ${cpu_model}`)
    log(`   ${highlight("Speed")}: ${cpu_speed}`)
    log(`   ${highlight("Processor Count")}: ${processor_count}`)
  }

  if(options.memOnly) {
    log(`${highlight("Memory")}:`)
    log(`   ${highlight("Total mem")}: ${total_mem}`)
    log(`   ${highlight("Free mem")}: ${free_mem}`)
  }

  if(options.netOnly) {
    log(`${highlight("Network")}:`)  

    for(i = 0; i < network.length; i++){
      let interface_name = Object.keys(network[i]).pop()
      let interface_properties = network[i][interface_name]
      let interface_names = Object.keys(network[i][interface_name])

      console.log(`   ${highlight(interface_name)}:`)

      for(j = 0; j < interface_names.length; j++){
        console.log(`      ${highlight(interface_names[j])}: ${interface_properties[interface_names[j]]}`)
      }
      
    } 
  }
  
} 

module.exports = logSysInfo


/*
* NOTE TO SELF: 
* COME UP WITH A BETTER SOLUTION FOR HANDLING "ONLY" OPTIONS 
* IT PHYSICALLY HURTS TO READ THE CODE :')
*/ 