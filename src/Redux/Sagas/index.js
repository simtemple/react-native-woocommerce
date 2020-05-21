import { all } from 'redux-saga/effects';

import loadingSaga from './Loading/Loading.saga';
import productsSaga from './Products/Products.saga';

export default function* rootSaga() {
  yield all([
    loadingSaga(),
    productsSaga(),
  ]);
}
