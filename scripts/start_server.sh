#!/bin/bash

# Start the server using forever
forever start -o out_resize.log -e err_resize.log src/server.js

echo "Server started successfully."
