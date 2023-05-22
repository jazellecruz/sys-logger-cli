#!/usr/bin/env node
const commander  = require("commander");
const program = new commander.Command();
const path = require('path'); 
const os = require("os");

const userDownloadDirectory = path.join(os.home, "Downloads");

const parseGivenInt = (value) => {
  const parsedValue = parseInt(value);

  if(Number.isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.');
  }

  return parsedValue;
}

program.command('scrape')
  .description('Scape youtube video and metadata')
  .arguments('<url>', 'url to be scrapped')
  .option('-r, --resolution [number]', 'video resolution', parseGivenInt, 360)
  .option('-f, --format [string]', 'video format', 'mp4')
  .option('-p, --path [path]', 'where to store file', userDownloadDirectory)
  .action((url, option) => {
    console.log(option)
    console.log(url)
    console.log(`Video with a quality of ${option.resolution} and with a format of ${option.format} from ${url} has been successfully scraped and downloaded to "${userDownloadDirectory}" directory.`);
  });

program.parse(process.argv);