
const parseGivenInt = (value) => {
  const parsedValue = parseInt(value);

  if(Number.isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.');
  }

  return parsedValue;
}

module.exports = {parseGivenInt}