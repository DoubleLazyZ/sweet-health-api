# Sweet Health API

## 使用步驟
### 01. 啟動docker
```dockerfile=
docker-compose -f docker-compose.yml up
```

### 生成openssl
```
openssl
genrsa -out private.key 1024
rsa -in private.key -out public.key
```
