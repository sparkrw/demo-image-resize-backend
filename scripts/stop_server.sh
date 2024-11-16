#!/bin/bash

# Stop any running server managed by forever
if forever list | grep -q "server.js"; then
  forever stop src/server.js
  echo "Stopped running server."
else
  echo "No running server to stop."
fi
