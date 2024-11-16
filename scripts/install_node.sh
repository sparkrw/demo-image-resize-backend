#!/bin/bash

# Install Node.js 20
curl --silent --location https://rpm.nodesource.com/setup_20.x | bash -
dnf -y install nodejs

# Install forever globally
npm install forever -g

echo "Node.js and forever installed successfully."
