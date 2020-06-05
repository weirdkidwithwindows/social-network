export default () => {
  const signup = `
  <img src="../img/png1.png">
    <h1>&lt;CodeBook&gt;</h1>
    <p>Registro</p>
    <form>
        <input type="text" id="name" name="name" required placeholder="Nombre">
        <input type="email" id="email" name="email" required placeholder="Correo electrónico">
        <input type="password" id="password" name="password" required placeholder="Contraseña">
        <button>Sign up</button>
    </form>
    <p>¿Ya tienes una cuenta? <a href="#/login">Iniciar sesión</a></p>
`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('wrapper');
  divElemt.innerHTML = signup;
  return divElemt;
};
