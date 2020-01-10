import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: 'localhost' }).connect();

  tron.clear();

  console.tron = tron;
}
