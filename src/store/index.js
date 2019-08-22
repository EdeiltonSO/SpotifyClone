import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "../config/ReactotronConfig"; // Adicionado

import sagas from "./sagas";
import reducers from "./ducks";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

// Esse trecho está substituindo o trecho comentado
const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);
// Fim do trecho substituto

sagaMiddleware.run(sagas);

export default store;

// Esse trecho só funcionou na aula.
// Aqui, compila mas diz que o createAppropriateStore não é uma função
/*

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(...middlewares))
);

*/
