build:
	@echo "Building..."
	npm run build

version:
	@echo "versioning..."
	npm version patch

publish:
	@echo "Publishing..."
	npm publish

all:
	build; version; publish