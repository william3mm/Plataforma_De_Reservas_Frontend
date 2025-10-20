# 🌐 Frontend – Plataforma de Serviços (Aplicação Cliente)

Este é o **frontend** da aplicação de gestão de serviços e reservas, desenvolvido em **React + TypeScript**. O sistema consome a API do backend e disponibiliza funcionalidades como **listagem de serviços, contratação, histórico e saldo do usuário**.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🛣️ [React Router](https://reactrouter.com/) – Navegação entre páginas
- 📡 [Axios](https://axios-http.com/) – Consumo da API
- ⚡ [Vite](https://vitejs.dev/) – Build rápido e Dev Server
- 🎨 CSS com design responsivo (mobile + desktop)

---

## 📂 Estrutura de Pastas

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório

````bash
git clone [https://github.com/seu-usuario/seu-repo-frontend.git](https://github.com/seu-usuario/seu-repo-frontend.git)
cd seu-repo-frontend

Entendido. Aqui está apenas o conteúdo Markdown referente à documentação do Frontend.
Markdown

# 🌐 Frontend – Plataforma de Serviços (Aplicação Cliente)

Este é o **frontend** da aplicação de gestão de serviços e reservas, desenvolvido em **React + TypeScript**. O sistema consome a API do backend e disponibiliza funcionalidades como **listagem de serviços, contratação, histórico e saldo do usuário**.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🛣️ [React Router](https://reactrouter.com/) – Navegação entre páginas
- 📡 [Axios](https://axios-http.com/) – Consumo da API
- ⚡ [Vite](https://vitejs.dev/) – Build rápido e Dev Server
- 🎨 CSS com design responsivo (mobile + desktop)

---

## 📂 Estrutura de Pastas

src/ ├── api/ # Configuração de chamadas à API (Axios) ├── components/ # Componentes reutilizáveis (Navbar, Cards, etc.) ├── pages/ # Páginas principais (ClienteHome, Dashboard, etc.) ├── Services/ # Serviços que integram com o backend ├── types/ # Definições de tipos TypeScript ├── App.tsx # Roteamento principal └── main.tsx # Ponto de entrada da aplicação


---

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/seu-repo-frontend.git](https://github.com/seu-usuario/seu-repo-frontend.git)
cd seu-repo-frontend

🔹 2. Instalar dependências
```bash
npm install
# ou
yarn install

Entendido. Aqui está apenas o conteúdo Markdown referente à documentação do Frontend.
Markdown

# 🌐 Frontend – Plataforma de Serviços (Aplicação Cliente)

Este é o **frontend** da aplicação de gestão de serviços e reservas, desenvolvido em **React + TypeScript**. O sistema consome a API do backend e disponibiliza funcionalidades como **listagem de serviços, contratação, histórico e saldo do usuário**.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🛣️ [React Router](https://reactrouter.com/) – Navegação entre páginas
- 📡 [Axios](https://axios-http.com/) – Consumo da API
- ⚡ [Vite](https://vitejs.dev/) – Build rápido e Dev Server
- 🎨 CSS com design responsivo (mobile + desktop)

---

## 📂 Estrutura de Pastas

src/ ├── api/ # Configuração de chamadas à API (Axios) ├── components/ # Componentes reutilizáveis (Navbar, Cards, etc.) ├── pages/ # Páginas principais (ClienteHome, Dashboard, etc.) ├── Services/ # Serviços que integram com o backend ├── types/ # Definições de tipos TypeScript ├── App.tsx # Roteamento principal └── main.tsx # Ponto de entrada da aplicação


---

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/seu-repo-frontend.git](https://github.com/seu-usuario/seu-repo-frontend.git)
cd seu-repo-frontend

🔹 2. Instalar dependências

npm install
# ou
yarn install

🔹 3. Criar arquivo .env

Crie um arquivo .env na raiz do projeto com a URL do backend:

VITE_API_URL=http://seu-servidor:3000
⚠️ Importante: Essa variável é usada no api/axios.ts para configurar a comunicação com a API.


````

Entendido. Aqui está apenas o conteúdo Markdown referente à documentação do Frontend.
Markdown

# 🌐 Frontend – Plataforma de Serviços (Aplicação Cliente)

Este é o **frontend** da aplicação de gestão de serviços e reservas, desenvolvido em **React + TypeScript**. O sistema consome a API do backend e disponibiliza funcionalidades como **listagem de serviços, contratação, histórico e saldo do usuário**.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🛣️ [React Router](https://reactrouter.com/) – Navegação entre páginas
- 📡 [Axios](https://axios-http.com/) – Consumo da API
- ⚡ [Vite](https://vitejs.dev/) – Build rápido e Dev Server
- 🎨 CSS com design responsivo (mobile + desktop)

---

## 📂 Estrutura de Pastas

src/ ├── api/ # Configuração de chamadas à API (Axios) ├── components/ # Componentes reutilizáveis (Navbar, Cards, etc.) ├── pages/ # Páginas principais (ClienteHome, Dashboard, etc.) ├── Services/ # Serviços que integram com o backend ├── types/ # Definições de tipos TypeScript ├── App.tsx # Roteamento principal └── main.tsx # Ponto de entrada da aplicação

---

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/seu-repo-frontend.git](https://github.com/seu-usuario/seu-repo-frontend.git)
cd seu-repo-frontend

🔹 2. Instalar dependências

Bash

npm install
# ou
yarn install

🔹 3. Criar arquivo .env

Crie um arquivo .env na raiz do projeto com a URL do backend:

VITE_API_URL=http://seu-servidor:3000

    ⚠️ Importante: Essa variável é usada no api/axios.ts para configurar a comunicação com a API.

🔹 4. Rodar em modo desenvolvimento

Bash

npm run dev

O app ficará disponível em: 👉 http://localhost:5173
```

Entendido. Aqui está apenas o conteúdo Markdown referente à documentação do Frontend.
Markdown

# 🌐 Frontend – Plataforma de Serviços (Aplicação Cliente)

Este é o **frontend** da aplicação de gestão de serviços e reservas, desenvolvido em **React + TypeScript**. O sistema consome a API do backend e disponibiliza funcionalidades como **listagem de serviços, contratação, histórico e saldo do usuário**.

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- 🛣️ [React Router](https://reactrouter.com/) – Navegação entre páginas
- 📡 [Axios](https://axios-http.com/) – Consumo da API
- ⚡ [Vite](https://vitejs.dev/) – Build rápido e Dev Server
- 🎨 CSS com design responsivo (mobile + desktop)

---

## 📂 Estrutura de Pastas

src/ ├── api/ # Configuração de chamadas à API (Axios) ├── components/ # Componentes reutilizáveis (Navbar, Cards, etc.) ├── pages/ # Páginas principais (ClienteHome, Dashboard, etc.) ├── Services/ # Serviços que integram com o backend ├── types/ # Definições de tipos TypeScript ├── App.tsx # Roteamento principal └── main.tsx # Ponto de entrada da aplicação

---

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/seu-repo-frontend.git](https://github.com/seu-usuario/seu-repo-frontend.git)
cd seu-repo-frontend

🔹 2. Instalar dependências

Bash

npm install
# ou
yarn install

🔹 3. Criar arquivo .env

Crie um arquivo .env na raiz do projeto com a URL do backend:

VITE_API_URL=http://seu-servidor:3000

    ⚠️ Importante: Essa variável é usada no api/axios.ts para configurar a comunicação com a API.

🔹 4. Rodar em modo desenvolvimento

Bash

npm run dev

O app ficará disponível em: 👉 http://localhost:5173

🔹 5. Gerar build para produção

Bash

npm run build

Os arquivos finais ficarão na pasta dist/.

🚀 Funcionalidades Principais

    🔑 Login e autenticação via token JWT

    📋 Listagem de serviços disponíveis

    💸 Contratação de serviços com verificação de saldo

    💰 Exibição do saldo atual do cliente

    📜 Histórico de reservas

    📱 Interface responsiva (mobile + desktop)

📌 Próximos Passos (Evolução do Projeto)

    📱 Criar versão mobile em React Native

    🎭 Melhorar feedback visual (toasts, loaders, spinners)

    🧪 Implementar testes unitários automatizados
```
