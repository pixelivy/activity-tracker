FROM python:3.11-slim
LABEL maintainer="Skye Jonczik <skye.jonczik@proton.me>"
WORKDIR /API
COPY docker/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY ./API/ ./API/
CMD ["fastapi", "run", "./API/main.py"]