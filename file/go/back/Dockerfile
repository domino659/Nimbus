FROM golang:alpine

# ----- SETUP -----
# Enable Go modules
ENV GO111MODULE=on

# Set the current working with go absolute path
WORKDIR /go/src/

# ----- DOWNLOAD MODULES -----

# Copy go.mod + go.sum for install before full copy
COPY ./backend/go.* ./

# Download all dependencies
RUN go mod download -x

# ----- COPY SOURCE & RUN -----
# Copy specific folders to avoid large useless images
COPY ./backend/main.go ./
COPY ./backend/app ./app
# COPY config/.env.local .env

# Build binary into temporary folder
RUN go build -o ./tmp/main ./main.go

ENTRYPOINT [ "./tmp/main" ]