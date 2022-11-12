import UiEmpleados from "../../UI/empleados.js";
export function Empleados() {
    const $product = document.createElement('div');
    $product.classList.add('container-products');
    $product.innerHTML=`
    <div class="page-title">
            <h3>Empleados</h3>
        </div>
    
    <div class="container-empleado">
    
        <div>
        <form class="card card-body" id="f-newempleado">
        <div class="form-group">
            <label for="f-name" class="form-label mt-4">Nombre y Apellido:</label>
            <input type="text" class="form-control" id="f-nombre" aria-describedby="Nombre producto" placeholder="Nombre y apellido">
        </div>
        <div class="form-group">
            <label for="f-dpi" class="form-label mt-4">Numero de Cui:</label>
            <input type="text" class="form-control" id="f-dpi" placeholder="Igrese 13 datos">
        </div>
        <div class="form-group">
            <label for="f-p1" class="form-label mt-4">Promedio mensual 1er anio:</label>
            <input type="number" class="form-control" id="f-p1">
        </div>
        <div class="form-group">
        <label for="f-p2" class="form-label mt-4">Promedio mensual 2do anio:</label>
        <input type="number" class="form-control" id="f-p2">
        </div>
        <div class="form-group">
        <label for="f-p3" class="form-label mt-4">Promedio mensual 3er anio:</label>
        <input type="number" class="form-control" id="f-p3">
        </div>
        <div class="form-group">
        <label for="f-p4" class="form-label mt-4">Promedio mensual 4to anio:</label>
        <input type="number" class="form-control" id="f-p4">
        </div>
        <div class="form-group">
        <label for="f-p5" class="form-label mt-4">Promedio mensual 5to anio:</label>
        <input type="number" class="form-control" id="f-p5">
        </div>
        <div class="form-group">
        <label for="f-p5" class="form-label mt-4">Tiempo de trabajo:</label>
        <input type="number" class="form-control" id="f-tiempo">
        </div>

            <button type="Submit"  class="btn btn-primary">Guardar</button>
    </form>
        </div>
        <div class="container-cards" id="empleados-cards"></div>
        </div>
    `;
    function initEmpleados() {
 const ui = new UiEmpleados();
//       uiProduct.getProducts();
ui.getEmpleados()
const formNewEmpleados = document.getElementById('f-newempleado');
formNewEmpleados.addEventListener('submit',()=>{
    const name = document.getElementById("f-nombre").value;
    const dpi  = document.getElementById("f-dpi").value;
    const p1 = document.getElementById("f-p1").value;
    const p2 = document.getElementById("f-p2").value;
    const p3 = document.getElementById("f-p3").value;
    const p4 = document.getElementById("f-p4").value;
    const p5 = document.getElementById("f-p5").value;
    const tiempo_trabajo = document.getElementById("f-tiempo").value;
    if(name === ' '||dpi === ' '||p1 === ' '||p2 === ' '||p3 === ' '){
        ui.toastNotification("error","complete todos los campos");
    }else{
        let newempleado ={
            "name":name,
            "dpi":dpi,
            "p1":p1,
            "p2":p2,
            "p3":p3,
            "p4":p4,
            "p5":p5,
            "jbl":0,
            "tiempo_trabajo":tiempo_trabajo
        }
        ui.saveNewEmpleado(newempleado)
    }
})
const empleadosc=document.getElementById('empleados-cards');
empleadosc.addEventListener('click',(e)=>{
    if (e.target.classList.contains("eliminar")) {
        let idempleado= e.target.getAttribute('_id')
        ui.deleteEmpleado(idempleado)
    }
    
})

    }
    setTimeout(()=>initEmpleados());
    return $product;
}
