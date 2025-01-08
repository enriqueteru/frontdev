# Usar una imagen ligera de Node.js
FROM node:18-slim

# Instalar las bibliotecas requeridas para Prisma
RUN apt-get update && apt-get install -y \
    openssl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Configurar el directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias y realizar instalación
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Generar cliente Prisma
RUN npx prisma generate

# Exponer el puerto de la aplicación
EXPOSE 5003

# Iniciar la aplicación
CMD ["npm", "run", "dev"]
