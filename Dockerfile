# Use the official Deno image as the base image
FROM denoland/deno:1.42.1

# Set the working directory
WORKDIR .

# Prefer not to run as root.
USER root


# Copy the project files to the working directory
COPY ./main.ts .
COPY ./deps.ts .
COPY ./main_test.ts .
COPY ./deno.json .

# Expose the port that the application will run on
EXPOSE 8000

# Run the Deno application
CMD ["run", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--allow-run", "main.ts"]