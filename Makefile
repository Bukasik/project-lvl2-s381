install:
	npm install
start:
	npx babel-node -- src/bin/gendiff.js __tests__/__fixtures__/beforeT.json __tests__/__fixtures__/after.json
publish:
	npm publish
test:
	npm test
test-watch:
	npm run test-watch
build:
	npm run build
lint:
	npx eslint .
