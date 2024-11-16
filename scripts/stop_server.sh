#!/bin/bash

# Stop any running server managed by forever
if forever list | grep -q "server.js"; then
  forever stop server.js
  echo "Stopped running server."
else
  echo "No running server to stop."
fi
