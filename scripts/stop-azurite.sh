#!/bin/bash

# Find the process ID (PID) of Azurite
AZURITE_PID=$(ps aux | grep '[a]zurite' | awk '{print $2}')

# Check if Azurite is running
if [ -z "$AZURITE_PID" ]; then
  echo "Azurite is not running."
else
  # Kill the Azurite process
  kill $AZURITE_PID
  echo "Azurite stopped."
fi