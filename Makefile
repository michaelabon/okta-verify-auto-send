zip:
	zip -0 build/okta-verify-auto-send.zip -r . -x@exclude.lst

clean:
	rm build/okta-verify-auto-send.zip

.PHONY: clean
