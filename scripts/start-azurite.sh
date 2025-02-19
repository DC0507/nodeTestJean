!/bin/bash

# Create a directory for Azurite's temporary files
if [ ! -d ".azurite" ]; then
    mkdir -p .azurite
fi

# Start Azurite in the background
npx azurite --silent --location .azurite --debug .azurite/debug.log &