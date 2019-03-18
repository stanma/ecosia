#!/bin/bash

git clone https://github.com/stanma/ecosia.git .
docker build -t stanma/ecosia .
kubectl create -f ecosia.yaml