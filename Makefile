## check-format: check all* files if they're formatted correctly with Prettier
.PHONY: check-format
check-format:
	npx prettier --check .

## prettier: format the code with Prettier
.PHONY: prettier
prettier:
	npx prettier --write .
