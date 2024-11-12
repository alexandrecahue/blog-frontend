
BlogFrontend - Interface do Blog
Este projeto é a interface de um sistema de blog, desenvolvido com React. Ele permite que os usuários visualizem, criem, editem e excluam postagens. A autenticação e login são gerenciados pelo Azure Active Directory B2C. Este projeto foi criado como parte de um teste técnico.

Tecnologias Utilizadas
React 18: Biblioteca JavaScript para construção de interfaces de usuário.
TypeScript: Extensão do JavaScript que oferece tipagem estática opcional.
Azure Active Directory B2C: Serviço de autenticação.
Axios: Cliente HTTP para realizar requisições ao backend.
React Router 6: Gerenciamento de rotas da aplicação.
Material UI (MUI): Biblioteca de componentes para a interface.
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
Antes de começar, é necessário garantir que as seguintes ferramentas estejam instaladas em sua máquina:

Node.js: Instalar aqui
Azure Active Directory B2C: Configurar aqui
Instalação e Execução
1. Clonar o Repositório
bash
Copiar código
git clone https://github.com/seuusuario/BlogFrontend.git
cd BlogFrontend
2. Instalar as Dependências
Use o comando abaixo para instalar todas as dependências do projeto:

bash
Copiar código
npm install
3. Configurar o Azure B2C
Para configurar o Azure Active Directory B2C:

Crie e configure o tenant no Azure AD B2C seguindo a documentação oficial.
Crie uma aplicação no Azure AD B2C e obtenha o Client ID e Tenant ID.
Configure a autenticação no frontend editando o arquivo src/authConfig.ts:

typescript
Copiar código
export const msalConfig = {
  auth: {
    clientId: 'SEU_CLIENT_ID',
    authority: 'https://SEU_DOMINIO_B2C.b2clogin.com/SEU_DOMINIO_B2C.onmicrosoft.com/B2C_1_signupsignin',
    knownAuthorities: ['SEU_DOMINIO_B2C.b2clogin.com'],
    redirectUri: 'http://localhost:3000',
  }
};
4. Configurar a API Backend
O backend deve estar rodando localmente ou em um servidor acessível. Certifique-se de que o URL da API está corretamente configurado no arquivo .env:

bash
Copiar código
REACT_APP_API_URL=http://localhost:5000/api
5. Iniciar o Projeto
Depois de configurar o Azure B2C e o backend, você pode iniciar o servidor de desenvolvimento com o comando:

bash
Copiar código
npm start
A aplicação estará disponível em http://localhost:3000.

Funcionalidades
Autenticação
A autenticação é gerida pelo Azure B2C. Os usuários podem se registrar, fazer login e logout. Apenas usuários autenticados têm acesso às funcionalidades de criação, edição e exclusão de postagens.

CRUD de Postagens
Criar Postagens: Usuários podem criar novas postagens, fornecendo título e conteúdo.
Editar Postagens: Usuários podem editar suas próprias postagens.
Excluir Postagens: Usuários podem deletar suas postagens.
Listar Postagens: As postagens são listadas na página principal, em ordem decrescente pela data de criação.
Controle de Versão
Este projeto segue o fluxo de ramificações Git Flow. Certifique-se de utilizar este fluxo para manter o histórico de commits limpo e organizado.

Testes
Atualmente, o projeto não possui testes automatizados, mas recomenda-se a utilização de Jest e React Testing Library para validar as funcionalidades.

Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Observações
A integração com o Azure B2C é essencial para o correto funcionamento da autenticação, portanto, siga as etapas de configuração com atenção.
Caso encontre problemas relacionados ao CORS ao realizar requisições para o backend, verifique as configurações de CORS no servidor para garantir que as requisições do frontend sejam permitidas.
