FROM oven/bun:1.0
RUN mkdir /app && chown -R bun:bun /app
WORKDIR /app
USER bun
COPY --chown=bun:bun . /app
RUN bun install 
CMD ["bun", "run", "start:migrate"]
