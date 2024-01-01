FROM python:3.10-slim

RUN apt-get update && apt-get install -y nodejs npm

RUN apt-get install -y supervisor

WORKDIR /app

COPY . .

RUN pip install -r backend/requirements.txt


WORKDIR /app/frontend
RUN npm install

# Copy supervisord configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 5000 3000

CMD ["/usr/bin/supervisord"]
