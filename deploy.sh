#!/bin/bash

kubectl create ns production
kubectl --namespace=production apply -f https://raw.githubusercontent.com/stanma/ecosia/master/ecosia.yaml