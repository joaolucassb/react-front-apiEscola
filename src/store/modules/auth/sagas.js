import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const reponse = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...reponse.data }));

    toast.success('Login feito com sucesso!');

    axios.defaults.headers.Authorization = `Bearer ${reponse.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
