// We could use a tool like `node-unzipper` for automatic unzipping, but this would add quite a lot of dependencies.
// Instead, we'll use the native unzipping tools for each operating system. This keeps the repository small.
// If the automatic unzipping fails, you can also simply unzip by hand. Simply use the specified input and output paths.

const { exec } = require('child_process');
const { resolve, basename } = require('path');

const paths = {
  prototype1: {
    input: resolve(__dirname, "../assets/raw/power-prototype-1.zip"),
    output: resolve(__dirname, "../static/power-ui/prototype-1/prototype"),
  },
  prototype2: {
    input: resolve(__dirname, "../assets/raw/power-prototype-2.zip"),
    output: resolve(__dirname, "../static/power-ui/prototype-2/prototype"),
  },
}

async function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stout, sterr) => {
      if (error) { reject(error); return; }
      if (sterr) { reject(sterr); return; }
      resolve(stout)
    });
  });
}

(async ()=> {
  for (const zipFile in paths) {
    const { input, output } = paths[zipFile];
    console.log(`Unzipping '${basename(input)}' from '${input}' to '${output}'. `);
    // Only unzipping for Windows 10+ is supported so far, but other OS can also be added later.
    await execAsync(`powershell.exe "Expand-Archive -Path ${input} -DestinationPath ${output}"`);
  }
})();
