import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { UserRequest } from './action/userAction';

export default function User() {

    const d = useSelector(y=>y.user);
    
    const d1= useDispatch();

    console.log(d);

    useEffect(()=> {

        d1(UserRequest())

    },[])
  return (
    <div>User</div>
  )
}
