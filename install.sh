#!/usr/bin/bash

pkg install git nodejs mc nano yarn
yarn install
rm -rf session
npm start