

# 开发环境调试

```
docker run --rm -v "$(pwd -W)":/usr/share/nginx/html -v "$(pwd -W)/nginx.conf":/etc/nginx/conf.d/default.conf -p 80:80 nginx:alpin
```