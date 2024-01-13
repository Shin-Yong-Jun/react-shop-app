import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase';

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");

  const auth = getAuth(app);  
  const handdleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      navigate('/')
    })
    .catch((error) => {
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })  
  }

  return (
    <Form
      title={"로그인"}
      getDataForm={handdleLogin}
      firebaseError={firebaseError}
      />
  )
}

export default SignIn