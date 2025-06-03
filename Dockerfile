FROM nginx:alpine

# Copy the contents of the current directory to nginx html directory
COPY . /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Default command to start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]