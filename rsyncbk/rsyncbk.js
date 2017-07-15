"use strict";

const glob = require("glob");
const Rsync = require("rsync");

const TO_BACKUP = require("./config");
const GLOB_OPTIONS = { nocase: true, absolute: true };

let filesTosave = {};
for (let i = 0; i < TO_BACKUP.length; i++) {
  const tosave = TO_BACKUP[i];
  for (let x = 0; x < tosave.files.length; x++) {
    if (filesTosave[tosave.remote]) {
        filesTosave[tosave.remote] = filesTosave[tosave.remote].concat(glob.sync(tosave.files[x], GLOB_OPTIONS));
    } else {
        filesTosave[tosave.remote] = glob.sync(tosave.files[x], GLOB_OPTIONS);
    }
  }
}

function handleRsync(error, code, cmd) {
  if (error) {
    console.error(code, cmd, error);
  } else {
    console.log(`Rsync finish ${cmd}`);
    const key = keys.pop();
    if (key) {
      const rsync = new Rsync()
        .shell("ssh -p 444")
        .flags("azR")
        .source(filesTosave[key])
        .destination(key);
      rsync.source(filesTosave[key]);
      rsync.destination(key);
      rsync.execute(handleRsync.bind(this));
    }
  }
}

// console.log(filesTosave);
let keys = Object.keys(filesTosave);
const key = keys.pop();
const rsync = new Rsync()
  .shell("ssh -p 444")
  .flags("azR")
  .source(filesTosave[key])
  .destination(key);
rsync.execute(handleRsync.bind(this));
