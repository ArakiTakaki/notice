import { exec } from 'child-process-promise';
const main = async () => {
  await exec('yarn build')
  await Promise.all([
    exec('yarn build:win').catch(() => { console.log('fail to windows') }),
    exec('yarn build:mac').catch(() => { console.log('fail to mac') }),
    exec('yarn build:linux').catch(() => { console.log('fail to linux') }),
  ]);
};

main()
  .then(() => {console.log('DONE')})
  .catch(() => {console.log('fail to process')});
