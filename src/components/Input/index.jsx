import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
   
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
    if (email.trim() === '') {
      setIsEmailEmpty(true);
    } else {
      setIsEmailEmpty(false);
    }
    if(email.trim() >= '1'){
      setIsEmailEmpty(false); 
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
   
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
    if (password.trim() === '') {
      setIsPasswordEmpty(true);
    } else {
      setIsPasswordEmpty(false);
    }
    if(password.trim() >='6'){
      setIsPasswordEmpty(false);
    }
  };

  const emailAnimation = useSpring({
    top: emailFocused || email ? '-20px' : '10px',
    fontSize: emailFocused || email ? '14px' : '16px',
  });

  const passwordAnimation = useSpring({
    top: passwordFocused || password ? '-20px' : '10px',
    fontSize: passwordFocused || password ? '14px' : '16px',
  });

  const emailContainerClasses = classNames(styles.inputContainer, {
    [styles.empty]: isEmailEmpty,
  });

  const passwordContainerClasses = classNames(styles.inputContainer, {
    [styles.empty]: isPasswordEmpty,
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <form className={styles.form}>
      <h1 className={styles.h1}><b>Faça seu login</b> </h1>
      <div className={emailContainerClasses}>
        <animated.div
          className={`${styles.placeholder} ${emailFocused ? styles.focused : ''} ${isEmailEmpty ? styles.empty : ''}`}
          style={emailAnimation}
        >
          Digite seu e-mail
        </animated.div>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
        {isEmailEmpty && <p className={styles.errorText}>Email não preenchido</p>}
      </div>
      <div className={passwordContainerClasses}>
        <animated.div className={`${styles.placeholder} ${passwordFocused ? styles.focused : ''}`} style={passwordAnimation}>
          Digite sua senha
        </animated.div>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
        {isPasswordEmpty && <p className={styles.errorText}>Senha deve ter, no mínimo, 6 caracteres</p>}
        <button className={styles.passwordToggle} onClick={handleTogglePassword}>
          {showPassword ? <RiEyeLine size={25} /> : <RiEyeOffLine size={25} />}
        </button>
      </div>
    </form>
    </>
  );
};

export default Form;
