import ReCAPTCHA from "react-google-recaptcha";

// ...

export function Captcha() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de validação e envio do formulário aqui
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Seus campos de formulário aqui */}
      <ReCAPTCHA sitekey="SUA_CHAVE_DO_SITE" />
      
    </form>
  );
}


