REPORTER = list

test:
  @./bin/mocha \
    --reporter $(REPORTER) \
    --ui bdd \
    test/hello-test

.PHONY: test