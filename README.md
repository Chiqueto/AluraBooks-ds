# 📚 AluraBooks Design System

[![NPM Version](https://img.shields.io/npm/v/alurabooks-ds?color=blue)](https://www.npmjs.com/package/alurabooks-ds)
[![Build Status](https://github.com/Chiqueto/AluraBooks-ds/actions/workflows/node.js.yml/badge.svg)](https://github.com/Chiqueto/AluraBooks-ds/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Uma biblioteca de componentes React desenvolvida no curso da [Alura](https://www.alura.com.br/) para construir interfaces consistentes, acessíveis e reutilizáveis.  
Este projeto foi publicado no **NPM** e automatizado com **GitHub Actions** para CI/CD.

---

## ✨ Principais Tecnologias

- ⚛️ React + TypeScript
- 💅 Styled Components
- 📦 Publicação via NPM
- ⚙️ GitHub Actions para CI

---

## 📦 Instalação

Você pode instalar diretamente via NPM:

```bash
npm install alurabooks-ds
```

Ou usando Yarn:

```bash
yarn add alurabooks-ds
```

---

## 🚀 Como Utilizar

Após instalar a biblioteca, você pode importar e usar os componentes diretamente no seu projeto React:

```tsx
import { Botao } from 'alurabooks-ds';

export default function App() {
  return (
    <div>
      <Botao>Comprar agora</Botao>
    </div>
  );
}
```

Os componentes são construídos com **Styled Components**, garantindo estilo encapsulado e personalização via props.

---

## 🧩 Componentes Disponíveis

| Componente | Descrição                           |
| ---------- | ----------------------------------- |
| `Botao`    | Botão estilizado com variações      |
| `Titulo`   | Componente de título tipográfico    |
| `Card`     | Card com imagem e informações       |
| `Input`    | Campo de texto com acessibilidade   |
| `Tag`      | Etiqueta para categorizar conteúdos |

> A biblioteca está em constante expansão à medida que o curso avança e melhorias são aplicadas.

---

## 🔄 Integração Contínua com GitHub Actions

Este projeto utiliza **GitHub Actions** para:

- ✅ Verificar o build e rodar testes (futuramente)
- 🧪 Automatizar processos de integração contínua
- 📦 Publicar no NPM com segurança via workflows

Arquivo da pipeline principal:  
`.github/workflows/node.js.yml`

---

## 🧠 Boas Práticas Aplicadas

- ✅ Componentização e reutilização
- 🎯 Tipagem forte com TypeScript
- 💅 Estilização isolada com Styled Components
- 🧪 Estrutura pronta para testes
- 🛠️ Configuração moderna com ESLint e Prettier

---

## 👨‍💻 Como Contribuir

Contribuições são muito bem-vindas!

1. Faça um fork do projeto
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: nova feature'`
4. Envie para o seu fork: `git push origin minha-feature`
5. Abra um Pull Request 😄

---

## 📚 Créditos

Projeto desenvolvido com base no curso [AluraBooks - Design System com React e Storybook](https://cursos.alura.com.br/course/react-ts-design-system) da [Alura](https://www.alura.com.br), com aprimoramentos e aplicação prática feitos por [@Chiqueto](https://github.com/Chiqueto).

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**.  
Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

## 🌐 Links Importantes

- 🧑‍💻 Repositório no GitHub: [github.com/Chiqueto/AluraBooks-ds](https://github.com/Chiqueto/AluraBooks-ds)
- 📦 Página do pacote no NPM: [npmjs.com/package/alurabooks-ds](https://www.npmjs.com/package/alurabooks-ds)
- 🚀 Curso da Alura: [React com TypeScript: criando um Design System](https://cursos.alura.com.br/course/react-ts-design-system)
 