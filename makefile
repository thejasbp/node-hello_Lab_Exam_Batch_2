# Variables
SHELL := /bin/bash
NODE_MODULES := node_modules

# Default target
all: install lint test run

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Run the application
run: install
	@echo "Starting application..."
	npm start

# Run tests
test: install
	@echo "Running tests..."
	npm test || echo "Some tests failed. Please review."

# Lint (code review)
lint: install
	@echo "Running code linting..."
	npx eslint . || echo "Linting issues found. Please fix them."

# Clean (optional)
clean:
	@echo "Cleaning up..."
	rm -rf $(NODE_MODULES)
