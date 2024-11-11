BlogFrontend - Frontend do Blog

Este projeto é o frontend para um sistema de blog, desenvolvido em React com TypeScript. 
Ele permite aos usuários autenticados visualizar, criar, editar e deletar postagens. 
O login e a autenticação são gerenciados através do Azure Active Directory B2C.
projeto para uso do teste técnico.

Tecnologias Utilizadas
React 18 - Biblioteca JavaScript para criar interfaces de usuário.
TypeScript - Superconjunto de JavaScript que adiciona tipagem estática opcional.
Azure Active Directory B2C - Serviço de autenticação.
Axios - Cliente HTTP para fazer requisições ao backend.
React Router 6 - Gerenciamento de rotas da aplicação.
Material UI (MUI) - Biblioteca de componentes de interface de usuário.
Dependências
Node.js: 18.x
React: 18.2.0
TypeScript: 4.9.x
Axios: 1.5.x
React Router: 6.11.x
Material UI: 5.15.x
@azure/msal-browser: 2.29.x
@azure/msal-react: 1.7.x
Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

Node.js: Instalar aqui
Azure Active Directory B2C: Configuração aqui
Instalação e Execução
1. Clone o Repositório
bash
Copiar código
git clone https://github.com/seuusuario/BlogFrontend.git
cd BlogFrontend
2. Instale as Dependências
Execute o seguinte comando para instalar todas as dependências do projeto:

npm install

4. Configuração do Azure B2C
Configurar o Azure Active Directory B2C:

Crie e configure seu tenant no Azure AD B2C conforme a documentação oficial.
Crie uma aplicação no Azure AD B2C e obtenha o Client ID e Tenant ID.
Configurar a autenticação no frontend:

No arquivo src/authConfig.ts, insira as informações da sua aplicação B2C:

export const msalConfig = {
  auth: {
    clientId: 'SEU_CLIENT_ID',
    authority: 'https://SEU_DOMINIO_B2C.b2clogin.com/SEU_DOMINIO_B2C.onmicrosoft.com/B2C_1_signupsignin',
    knownAuthorities: ['SEU_DOMINIO_B2C.b2clogin.com'],
    redirectUri: 'http://localhost:3000',
  }
};

4. Configuração da API Backend
O backend (API) deve estar rodando localmente ou em um servidor acessível.
Certifique-se de que o URL da API backend esteja configurado corretamente no arquivo .env:

REACT_APP_API_URL=http://localhost:5000/api
5. Executar o Projeto
Após configurar o Azure B2C e o backend, você pode iniciar o servidor de desenvolvimento:

npm start
A aplicação estará disponível em http://localhost:3000.

Funcionalidades
Autenticação
A autenticação é gerenciada pelo Azure B2C. O usuário pode se cadastrar, fazer login e logout. Todas as postagens e interações no sistema estão protegidas e requerem um usuário autenticado.

CRUD de Postagens
Criar Postagens: Os usuários podem criar novas postagens fornecendo um título e conteúdo.
Editar Postagens: Um usuário pode editar suas próprias postagens.
Deletar Postagens: Um usuário pode deletar suas próprias postagens.
Listar Postagens: Todas as postagens são listadas na tela principal em ordem decrescente de data de criação.

Controle de Versão
Este projeto segue o modelo de ramificação Git Flow. Certifique-se de seguir o fluxo correto para manter o histórico limpo.

Testes
Ainda não foram configurados testes automatizados para este projeto, mas é recomendado que testes sejam implementados utilizando Jest e React Testing Library para validação das funcionalidades.

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

Notas
A integração com o Azure B2C é essencial para o funcionamento da autenticação, portanto, certifique-se de seguir as etapas de configuração corretamente.
Caso enfrente problemas de CORS ao se comunicar com o backend, ajuste as configurações de CORS no backend para permitir as requisições do frontend.
