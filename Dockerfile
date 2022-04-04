FROM ubuntu:20.04

RUN apt update && apt upgrade -y
CMD ["echo", "Hello World"] 