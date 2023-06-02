const os = require("os");

const getOSInfo = () => {
  let {type, platform, release, version} = os

  let os_name = type(),
  os_platform = platform(),
  os_release = release(),
  os_version = version()

  // Standardize the os name of both windows and mac for consistency. 
  if(os_name.toLowerCase() === "windows_nt") os_name = "Windows";
  if(os_name.toLowerCase() === "darwin") os_name = "macOS";

  return {
    os_name: os_name,
    os_platform: os_platform,
    os_release: os_release,
    os_version: os_version
  }
}

const getMemInfo = () => {
  let {totalmem, freemem} = os

  let total_mem = totalmem(),
  free_mem = freemem()

  return {
    total_mem: total_mem,
    free_mem: free_mem
  }
}

const getCPUInfo = () => {
  let cpu = os.cpus

  let cpu_model = cpu()[0].model,
  cpu_speed = cpu()[0].speed,
  processor_count = cpu().length

  return {
    cpu_model: cpu_model,
    cpu_speed: cpu_speed,
    processor_count: processor_count
  }
}

const getNetInfo = () => {
  let network_interfaces = os.networkInterfaces()
  // net_address = os.networkInterfaces()["Wi-Fi"][0].address,
  // net_netmask = os.networkInterfaces()["Wi-Fi"][0].netmask,
  // net_mac_address = os.networkInterfaces()["Wi-Fi"][0].mac
  let interfaces_names = Object.keys(network_interfaces)
  let network_info= [];

  for(let i = 0; i < interfaces_names.length; i++) {
    network_info.push({
      [interfaces_names[i]]: network_interfaces[interfaces_names[i]][0]
    });
  }
  return network_info;
}

const getSystemInfo = () => {
  let host_name = os.hostname(),
  sys_uptime = os.uptime() 

  return {
    host_name: host_name,
    sys_uptime: sys_uptime
  }
}


module.exports = {getOSInfo, getMemInfo, getCPUInfo, getNetInfo, getSystemInfo}