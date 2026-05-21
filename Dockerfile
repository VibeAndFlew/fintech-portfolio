FROM node:20-alpine
WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .

ENV HOSTNAME="0.0.0.0"
ENV HOST="0.0.0.0"
ENV PORT=8080
EXPOSE 8080

# BYPASS BUG: Run Next.js directly instead of using the dev wrapper script
CMD ["pnpm", "exec", "next", "dev", "-H", "0.0.0.0", "-p", "8080"]
