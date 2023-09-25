import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserFail, UserSUC } from '../action/userAction';

async function  getData()
{
 
    const data = axios.get("https://650b2a5cdfd73d1fab09b366.mockapi.io/users/user/");
  return await data;
}


function* userListSaga()
{
    try
    {
    const d = yield call(getData);

    yield put(UserSUC(d.data))

    }

    catch(error)

    {
        yield put(UserFail(error))

    }





}

 export function* watctUSerList() {
    yield takeLatest("UserRequest", userListSaga);
  }