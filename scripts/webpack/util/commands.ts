import * as Commander from 'commander';
const program = new Commander.Command();

program
  .version('1.0.0')
  .option('-d --development', 'development mode', false)
  .parse(process.argv);

export default program;
