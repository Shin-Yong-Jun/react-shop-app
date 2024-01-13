import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'


const Form = ({title}) => {

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    // 옵션으로 인풋태그 벗어날때 유효성 체크 자동으로 해줄수 있는 블러, 그리고 변할때마다 체크해주는 체인지
    mode: "onChange"
  })

  // 각 인풋 별 밸류가 이메일과 패스워드이다.
  const onSubmit = ({email, password}) => {
    console.log(email, password);
  }

  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      message: "입력하신 이메일 주소가 올바르지 않습니다.",
      value: /^(?=.*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/gm,
    }
  }

  const userPassword= {
    required: "필수 필드입니다.",
    minLength: {
      value: 4,
      message: "최소 4자입니다."
    },
    maxLength: {
      value: 13,
      message: "최대 13자입니다."
    },
    pattern: { 
      value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/gm,
      message: "최소 8자, 영문 1자, 숫자 1자."
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input 
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email &&
        <div>
          <span className={styles.form_error}>
            {errors.email.message}
          </span>
        </div>
        }
        <div>
          <span className={styles.form_error}></span>
        </div>
      </div>

      <div>
        <input 
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password &&
        <div>
          <span className={styles.form_error}>
            {errors.password.message}
          </span>
        </div>
        }
        <div>
          <span className={styles.form_error}></span>
        </div>
      </div>
      <button type="submit">{title}</button>
      <span className={styles.form_error}></span>
    </form>
  );
};

export default Form