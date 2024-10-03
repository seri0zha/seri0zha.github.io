#!/usr/bin/env bash
export $(grep -v '^#' .env | xargs)
yarn build;
scp -r ./dist/* $HOST:/home/webuser/www/dist;
ssh $HOST 'nginx -s reload';