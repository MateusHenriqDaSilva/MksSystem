# Teste Mks frontend

1. Passo 
## npx create-next-app testemks

2. navegar até a pasta
## cd testemks

3. instalar pacote typescript
## yarn add typescript @types/react @types/node -D

4. instalar depedencias nescessarias
## npm install next ou yarn install next

5. criando arquivo next.config.js
## next dev ou next build

6. execute a aplicacao para criar o tsconfig.json
## npm run dev

7. Habilite as rodas estaticas dentro do next.config.js
## codigo exemplo:
/**  @type {import('next').NextConfig}  */
const nextConfig =  {
  experimental:  {
    typedRoutes: true,
  },
}
module.exports =  nextConfig

8. instalando depencias 
## react-loading-skeleton