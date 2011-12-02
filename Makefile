REPORTER = list

test: 
	chmod 755 ./node_modules/.bin/mocha
	@./node_modules/.bin/mocha ¥
		--reporter $(REPORTER) ¥
		--ui bdd ¥
		test/hello-test

.PHONY: test