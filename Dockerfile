# Use the official Deno image as the base image
FROM denoland/deno:1.42.1

# Set the working directory
WORKDIR /app

# Copy the project files to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 8000

# Run the Deno application
CMD ["run", "--allow-net", "--allow-env", "main.ts"]