#!/bin/bash -e

cd "$(dirname "$0")/.."

red=$'\e[01;31m'
green=$'\e[01;32m'
yellow=$'\e[01;33m'
blue=$'\e[01;34m'
magenta=$'\e[01;35m'
resetColor=$'\e[0m'

updateNodeModules() {
  echo "${magenta}--- Running npm install --------------------------------------------${resetColor}"
  deps=$("$NODE" -e 'console.log(require("./package.json").grevilPlugins.join(" "))');
  for m in ${deps[@]}; do 
    pushd .
    echo "plugins/$m";
    cd "plugins/$m"
    "$NPM" install --loglevel warn
    popd 
  done
  echo "${magenta}--------------------------------------------------------------------${resetColor}"
}


############################################################################
NPM=npm
NODE=node

updateNodeModules

echo -e "c9.*\n.gitignore" >  plugins/.gitignore
echo -e "nak\n.gitignore" >  node_modules/.gitignore

echo "Success!"

echo "run '${yellow}npm start :${resetColor}' to launch architect submodules project"
