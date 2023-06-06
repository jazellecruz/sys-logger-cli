
const formatBytes = (bytes) => {
  var units = ['B', 'KB', 'MB', 'GB', 'TB'],
  given_bytes = bytes,
  i;
  // format bytes into MB
  for (i = 0; given_bytes >= 1024; i++) {
    given_bytes /= 1024;
  }

  return given_bytes.toFixed(2) + units[i];
}

const formatSecs = (sec) => {
  if(sec < 3600) return `${Math.floor(sec / 60)} mins`

  let total_minutes = Math.floor(sec / 60)

  let hrs = Math.floor(total_minutes / 60)
  let mins = total_minutes % 60

  return `${hrs} ${hrs < 2 ? "hr" : "hrs"}, ${mins} ${mins < 2 ? "min" : "mins"}`
}

const convertMHzToGHz = (mhz) => {
  let ghz = (mhz / 1000).toFixed(2);

  return `${ghz} GHz`
}

module.exports = {formatBytes, formatSecs, convertMHzToGHz}