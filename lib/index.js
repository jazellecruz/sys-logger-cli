const os = require("os");

const getOSInfo = () => {
  let os_name = os.type(),
  os_platfrom = os.platform(),
  os_release = os.release(),
  os_version = os.version()

  // Standardize the os name of both windows and mac for consistency. 
  if(os_name.toLowerCase() === "windows_nt") os_name = "Windows";
  if(os_name.toLowerCase() === "darwin") os_name = "macOS";

  return {
    os_name: os_name,
    os_platfrom: os_platfrom,
    os_release: os_release,
    os_version: os_version
  };
}

const getMemInfo = () => {
  let total_mem = os.totalmem(),
  free_mem = os.freemem()

  return {
    total_mem: total_mem,
    free_mem: free_mem
  };
}

const getCPUInfo = () => {
  let cpu_model = os.cpus()[0].model,
  cpu_speed = os.cpus()[0].speed,
  processor_count = os.cpus().length

  return {
    cpu_model: cpu_model,
    cpu_speed: cpu_speed,
    processor_count: processor_count
  };
}

const getNetInfo = () => {
  let net_family = os.networkInterfaces()["Wi-Fi"].family,
  net_address = os.networkInterfaces()["Wi-Fi"].address,
  net_netmask = os.networkInterfaces()["Wi-Fi"].netmask,
  net_mac_address = os.networkInterfaces()["Wi-Fi"].mac

  return {
    net_family: net_family,
    net_address: net_address,
    net_netmask: net_netmask,
    net_mac_address: net_mac_address
  }
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