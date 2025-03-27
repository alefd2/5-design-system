#!/bin/bash

# Remove main node_modules
rm -rf node_modules

# Remove docs node_modules
rm -rf packages/docs/node_modules

# Install dependencies
npm install