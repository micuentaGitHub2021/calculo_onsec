import UiSigIn from "../../UI/SigIn.ui.js";
export function SigInView(){
    const $sigIn= document.createElement('div');
    $sigIn.classList.add('home')
    $sigIn.innerHTML=`
    <div class="page-title animated fadeInDown">
        <h3>CALCULO DE JUBILACION ONSEC</h3>
    </div>
    <div class="home-sigin animated fadeInDown">
      <div>
        <form class="card card-body" id="f-login">
          <h3>Acceso al sistema</h3>
          <div class="form-group">
             <label for="username" class="form-label mt-4">Usuario</label>
             <input type="text" class="form-control" id="f-username" aria-describedby="username" placeholder="Usuario">
          </div>
          <div class="form-group">
            <label for="password" class="form-label mt-4">Contrasena</label>
            <input type="password" class="form-control" id="f-password" placeholder="Contraseña">
          </div>
          <button type="Submit"  class="btn btn-primary">Ingresar</button>
        </form>
      </div>
      <div>
        <img src="https://mercedes-hernandez.com/wp-content/uploads/2020/04/pensio%CC%81n-por-jubilacio%CC%81n.png" class="img-fluid" alt="img">
      </div>
    <div>`;
    function initSigIn(){
      const sigIngUser = new UiSigIn();
      const $formSigIn = document.getElementById('f-login');
      $formSigIn.addEventListener('submit',(e)=>{
        e.preventDefault();
        const username=document.getElementById('f-username').value;
        const pass = document.getElementById('f-password').value;
        if(!username || !pass){
          sigIngUser.noticationToast("error","Llene todos los campos")
          console.log('inputos vacios')
        }else{
          let userData = {
            username:username,
            password:pass
          };
          sigIngUser.sigIn(userData)
        }
      })
    }
    setTimeout(()=>initSigIn(),100)
    return $sigIn;
}