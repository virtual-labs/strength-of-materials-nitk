#!/bin/bash

./scrapper.py

mkdir compressed; tar xvzf compressed.tar.gz -C ./compressed/

cp content.html ./compressed/src/lab/exp1/

cp -r ../../../userfiles ./compressed/src/lab/images/

cp link_changer.sh ./compressed/src/lab/

cd compressed/src/lab

bash ./link_changer.sh

cd ../../..

cd compressed/src

make; cd ../build

firefox index.html

