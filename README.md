# Gympoint Web

## Root Import

Vamos aprender a configurar o Root Import para que possamos substituir essa sintaxe de import:

```jsx
import something from '../../../src/something';
```

Para essa:

```jsx
import something from '~/src/something';
```

Instale as seguintes dependencias

```bash
yarn add customize-cra react-app-rewired babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```

Na raiz do projeto crie um arquivo com o nome `config-overrides.js`.

```bash
touch config-overrides.js
```

Edite esse arquivo e deixe-o dessa maneira:

```js
const { addBabelPlugin, override } = require('customize-cra');
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
```

Agora vamos mudar algumas configurações do arquivo `package.json`.

Deixe isso:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

Dssa forma:

```json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
}
```

Agora vamos configurar o eslint para que ele pare de reclamar com nossa nova maneira de importar os aqruivos.

Abra seu arquivo `.eslintrc.js`, após `rules`, adicione a seguinte configuração:

```js
{
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
}
```

Agora vamos configurar para que o VSCode não se perca nas importações dessa nova maneira.

Crie um arquivo na raiz do projeto com o nome `jsconfig.json`.

```bash
touch jsconfig.json
```

edite-o e deixe da seguinte forma:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

E fim, tudo volta a funcionar perfeitamente :)

## Validation

Agora vamos validar os dados do formulário de Login, na página `SignIn`, edite-o, e deixe-o dessa forma:

```jsx
import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup'; // importei o Yup
import logo from '~/assets/images/logo.png';


const schema = Yup.object().shape({ // Criei um schema, e algumas validações.
  email: Yup.string()
    .email('Digite um email válido')
    .required(),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log(email, password);
  }
  return (
    <>
      <img src={logo} alt="gympoint" />

      <Form schema={schema} {/*Aqui eu passei omo parâmeytro do unform, pode ser estilizado como um span*/} onSubmit={handleSubmit} action="">
        <Input name="email" type="email" placeholder="seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha secreta"
        />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
// src/pages/SignIn/index.js
```
