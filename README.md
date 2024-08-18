# Curriculum Evaluator - Documentação
![curriculum-evaluator-desktop](https://github.com/user-attachments/assets/d1238900-b10e-47fa-ae41-c00220f573f6)
![curriculum-evaluator-mobile](https://github.com/user-attachments/assets/88b55db9-dce0-46d6-994e-27c65d5b251f)

## Visão Geral

**Curriculum Evaluator** é uma aplicação moderna projetada para avaliar e analisar currículos de forma eficiente, utilizando uma combinação de tecnologias front-end e back-end para oferecer uma experiência fluida e intuitiva. Esta documentação descreve a estrutura da aplicação, as tecnologias utilizadas, e orienta os desenvolvedores sobre como contribuir e configurar o ambiente de desenvolvimento.

## Tecnologias Utilizadas

### Backend

- **NestJS**: Framework Node.js para construir aplicações server-side eficientes e escaláveis. Utilizado para a criação de APIs RESTful e GraphQL.

### Frontend

- **Next.js**: Framework React para a construção de aplicações web com renderização híbrida (SSR e SSG), roteamento avançado e otimização de performance.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código, melhorando a segurança e a manutenção.
- **Tailwind CSS**: Framework utilitário CSS que permite a construção de interfaces de usuário modernas e responsivas.
- **framer-motion**: Biblioteca para animações no React, utilizada para criar transições suaves e interações dinâmicas.
- **Shadcn/ui**: Conjunto de componentes de interface de usuário altamente customizáveis e acessíveis, construídos com Tailwind CSS.


## Configuração do Ambiente de Desenvolvimento

### Requisitos

- Node.js v18 ou superior
- Yarn ou npm

### Passos para Configuração

1. **Clone o repositório:**
    
    ```bash
    git clone https://github.com/KauetSilva/curriculum-evaluator.git
    cd curriculum-evaluator
    
    ```
    
2. **Instale as dependências:**
    
    ```bash
    yarn install
    # ou
    npm install
    
    ```
    
3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    
    ```bash
    DATABASE_URL=postgresql://user:password@localhost:5432/curriculum_evaluator
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    
    ```
    
4. **Inicie o servidor de desenvolvimento:**
    
    ```bash
    yarn dev
    # ou
    npm run dev
    
    ```
    
5. **Acesse a aplicação:**
Abra o navegador e acesse `http://localhost:3000`.


## Contribuição

Para contribuir com o projeto, siga estas etapas:

1. **Faça um fork do repositório.**
2. **Crie uma branch para a nova funcionalidade ou correção de bug:**
    
    ```bash
    git checkout -b minha-nova-feature
    
    ```
    
3. **Faça commit das suas mudanças:**
    
    ```bash
    git commit -m 'Adiciona nova feature'
    
    ```
    
4. **Envie para o repositório remoto:**
    
    ```bash
    git push origin minha-nova-feature
    
    ```
    
5. **Abra um Pull Request.**
