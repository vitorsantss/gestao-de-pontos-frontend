# Gestão de Pontos

Este é um projeto de gestão de pontos, desenvolvido com **React.js**, **Tailwind CSS**, **Vite**, **NextUI**, **Zod** e **React Hook Form**. Ele possui funcionalidades para diferentes perfis de usuário: **Admin** e **User**. O sistema permite a gestão de **roles**, **work schedules** (jornada de trabalho) e tipos de batida de ponto.

## Funcionalidades

- **Perfis de Usuário**:
  - **Admin**: Pode gerenciar usuários e acessar o painel de controle.
  - **User**: Pode registrar e visualizar seus logs de trabalho.

- **Tipos de batida de ponto**:
  - `CHECK_IN`
  - `CHECK_OUT`
  - `LUNCH_START`
  - `LUNCH_END`
  - `BREAK_START`
  - `BREAK_END`

- **Jornadas de Trabalho**:
  - 6 horas
  - 8 horas

## Tecnologias Utilizadas

- **React.js**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para aplicações frontend.
- **Tailwind CSS**: Framework de CSS utilitário.
- **NextUI**: Biblioteca de componentes de UI.
- **React Hook Form**: Gerenciamento de formulários com validação.
- **Zod**: Validação e tipagem de dados.

## Estrutura de Pastas

```plaintext
src/
├── assets            # Arquivos estáticos
├── components        # Componentes reutilizáveis da aplicação
├── contexts          # Context API para gerenciar estado global
├── icons             # Ícones utilizados na aplicação
├── modules           # Funcionalidades principais separadas por domínio
├── pages             # Páginas principais
├── routers           # Configuração das rotas
└── services          # Serviços e chamadas de API

## Configuração do Projeto

### Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (>= 14.x)
- npm ou yarn

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação no navegador em: `http://localhost:5173`

---

## Rotas da Aplicação

### Públicas

- `/`: Página de login.

### Usuário (Role: `USER`)

- `/`: Dashboard do usuário.
- `/register-worklog`: Página para registrar batidas de ponto.

### Administrador (Role: `ADMIN`)

- `/`: Dashboard administrativo.
- `/create-user`: Página para cadastro de usuários.
