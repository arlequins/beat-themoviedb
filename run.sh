#!/bin/bash
npm install
npm run build
cd server && npm install && npm run start
cd ~
