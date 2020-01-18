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

      <Form schema={schema} {/*Aqui eu passei como parâmeytro do unform, pode ser estilizado como um span*/} onSubmit={handleSubmit} action="">
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

## Store Config

Aqui vamos configurar o Store, onde vamos fazer a autenticação da plataforma, aqui vamos utilizar o Redux, Redux-Saga e Etc.
Come adicionando essas bibliotecas:

```bash
yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
```

Dentro de `src`, crie as seguintes pastas e arquivos.

```bash
mkdir src/store src/store/modules src/store/modules/auth && touch src/store/index.js touch src/store/createStore.js src/store/modules/rootReducer.js src/store/modules/rootSaga.js src/store/modules/auth/actions.js src/store/modules/auth/reducer.js src/store/modules/auth/sagas.js
```

O esquema de pastas e arquivos deve ficar dessa forma:

```
store
   ├── modules
   │   ├── auth
   │   │   ├── actions.js
   │   │   ├── reducer.js
   │   │   └── sagas.js
   │   ├── rootReducer.js
   │   └── rootSaga.js
   ├── createStore.js
   └── index.js
```

Vamos editar o aquivo `src/store/modules/auth/reducer.js`, deixe-o dessa forma:

```jsx
const INITIAL_STATE = {}; // squi é o estado inicial da aplicação

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
// src/store/modules/auth/reducer.js
```

Agora vamos editar o aquivo `src/store/modules/auth/sagas.js`:

```jsx
import { all } from 'redux-saga/effects';

export default all([]);
// src/store/modules/auth/sagas.js
```

Agora vamos editar o `src/store/modules/rootReducer.js`:

```jsx
import { combineReducers } from 'redux';
import auth from './auth/reducer';

export default combineReducers({
  auth,
});
// src/store/modules/rootReducer.js
```

Agora vamos editar o aquivo `src/store/modules/rootSaga.js`:

```jsx
import { all } from 'redux-saga/effects';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
//src/store/modules/rootSaga.js
```

Agora vamos configurar o arquivo `src/store/index.js`:

```jsx
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import sagas from './modules/rootSaga';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(sagas);

export default store;

// src/store/index.js
```

Agora vamo editar o arquivo `src/store/createStore.js`:

```jsx
import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

// src/store/createStore.js
```

Agora vamos nas configurações do Reactotron, edite o arquivo `src/config/ReactotronConfig.js`:

```jsx
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
```

Agora vamos no arquivo `src/App.js`, vamos editar ele:

```jsx
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import store from './store'; // deve vir depois da configuração do reactotron
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;

// src/App.js
```

Agora com nosso store configurado, vamos começar a criar a autenticação.

Vamos Editar o aquivo `src/store/modules/auth/actions.js`:

```jsx
export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
// src/store/modules/auth/actions.js
```

Aqui criamos 3 actions para a autenticação, uma para fazer request a `API`, outra pra pra successo, e uma pra qualquer falha.

> Agora vamos instalar uma biblioteca pra lidar com requisições a `API`.

```bash
yarn add axios
```

Agora vamos configurar nosso arquivo de `service-api`, crie um arquivo com o nome `api.js` dentro da pasta `src/services`.

```bash
touch src/services/api.js
```

Edite o arquivo que acabamos de criar com as configurações padoes do `AXIOS`:

```jsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:444',
});
// src/services/api.js
```

Configure a `URL` base da sua `API` com sua respectiva porta.

Agora vamos Editar nosso `saga` de autenticação, edite o arquivo `src/store/modules/auth/sagas.js`.

```jsx
import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', { email, password });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/students');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
```

Vamos acessar o componente de `signIn`, e vamos aplicar as seguintes configurações, fazer com que a função `handleSubmit` chame a action de `signInRequest`.

```jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/images/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="gympoint" />

      <Form schema={schema} onSubmit={handleSubmit} action="">
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
```

Agora, vamo ditar o `reducer` que vai gravar as informações quando nossa request for bem sucedida:

```jsx
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });

    default:
      return state;
  }
}

// src/store/modules/auth/reducer.js
```

Aqui no nosso reducer, ouvimos a ação de Success que foi disparada depois que a request foi bem sucedida, e fizemos mudanças no nosso STATE utilizando a function `produce` da lib `immer`.

Agora, vamos fazer com que nosso componente `Route`, escute as mudanças do state do nosso `reducer` de `auth`.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefautLayout from '../pages/_layouts/default';

import store from '~/store'; // importamos o store

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth; // aqui pegamos a informação signed de dentro do nosso resducer auth.
// ...
```

Agora, vamos configurar nosso module de `user`, onde vamos salvar os dados de usuário.

```bash
mkdir src/store/modules/user && touch src/store/modules/user/actions.js src/store/modules/user/reducer.js src/store/modules/user/sagas.js
```

Agora, vamos configurar os arquivos `src/store/modules/user/reducer.js` & `src/store/modules/user/sagas.js`.

```jsx
import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });

    default:
      return state;
  }
}
// src/store/modules/user/reducer.js
```

> Não se esqueça de importar este arquivo dentro do `src/store/modules/rootReducer.js`.

```jsx
import { all } from 'redux-saga/effects';

export default all([]);
// src/store/modules/user/sagas.js
```

> Não se esqueça de importar este arquivo dentro do `src/store/modules/rootSaga.js`.

Agora, para observar estes dados, dentro do `Reactotron` crie um state pra monitorar o estado do reducer de user.

![reactotron](https://i.imgur.com/PalobBn.png)

> É sempre interessante, para cada `reducer` criar um `state` para monitorar os dados dentro do `Reactotron`.

Agora vamos persistir os dados que salvamos nos nosso `reducers`, instale a seguinte lib `redux-persist`

```jsx
yarn add redux-persist
```

Dentro de `src/store` vamos criar um arquivo para a configuração dos dados que irão persistir na aplicação.

```bash
touch src/store/persistReducers.js
```

Agora vamos para a configuração desse arquivo que acabos de criar.

```jsx
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gympoint',
      storage,
      whitelist: ['auth', 'user'], // passamos os reducers que devem ter os dados persistidos
    },
    reducers
  );
  return persistedReducer;
};
```

Agora, vamos configurar o redux persist na nossa aplicação, para que as informações sejam refletidas e persistidas nela por completo.

```jsx
import { persistStore } from 'redux-persist'; // new

import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducers'; // new

import rootReducer from './modules/rootReducer';
import sagas from './modules/rootSaga';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(persistReducers(rootReducer), middlewares); // new
const persistor = persistStore(store); // new
sagaMiddleware.run(sagas);

export { store, persistor }; // new
// src/store/index.js
```

Agora, em temos que mudar os lugares em nossa aplicação que importamos o `store`.

Edite o arquivo `src/App.js`.

```jsx
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'; // importe o persistor
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import { store, persistor } from './store'; // importe as duas variaveis
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      {/* aqui passamos o persistgate por dentro do store e por fora do resto da aplicação */}
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
```

E também o arquivo `src/routes/Route.js`.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefautLayout from '../pages/_layouts/default';

import { store } from '~/store'; // mudança na importação

// ...
```

Com isso finalizamos a persistência de dados da nosa aplicação.

## Loading

Edite o arquivo `src/store/modules/auth/actions.js`.

```jsx
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.laoding = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.profile = action.payload.user;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
```
