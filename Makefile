REPORTER = list

test: 
	chmod 755 ./bin/mocha
	@./bin/mocha ¥
		--reporter $(REPORTER) ¥
		--ui bdd ¥
		test/hello-test

.PHONY: test