build:
	docker build --no-cache -t stanlee321/fastapi-front:latest -f ./Dockerfile .
.PHONY:	build