
const formatBytes = (bytes) => {
  var units = ['B', 'KB', 'MB', 'GB', 'TB'],
  mb = bytes,
  i;

  for (i = 0; bytes >= 1024 && i < 3; i++) {
    mb /= 1024;
  }

  return mb.toFixed(2) + units[i];
}

const formatSecs = (sec) => {
  if(sec < 3600) return `${Math.floor(sec / 60)} mins`

  return `${Math.floor(sec / 3600)} hrs`
}

module.exports = {formatBytes, formatSecs}