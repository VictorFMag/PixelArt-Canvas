FROM nginx:alpine

# Copie o arquivo de configuração do Nginx para o diretório de configuração
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie os arquivos do site para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Exponha a porta 80 para acesso externo
EXPOSE 8080

# Inicie o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]