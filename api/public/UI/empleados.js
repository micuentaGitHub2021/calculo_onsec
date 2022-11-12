import AppServices from "../services/AppServices.js";
// import {Modal} from "../component/modal/Modal.js";
// import {EditProductModal} from "../component/products/EditProduct.js";
// import {NewProduct} from "../component/products/NewProduct.js";
const appService = new AppServices();
class UiEmpleados{
    getEmpleados(){
        appService.makeRequest('empleados',{},'GET').then(data=>{
            this.renderEmpleados(data)
        }).catch(err=>{
            console.log(err)
        })
    }
    renderEmpleados(products){
    const productsContainer= document.getElementById('empleados-cards');
    productsContainer.innerHTML = '';
    const $fragment = document.createDocumentFragment();
    products.forEach(el => {
      const div = document.createElement('div');
      div.className = 'container-card animated fadeInRight';
      div.innerHTML = `
        <div class="card-product">
            
            <div class="contentBx">
                <b><h3>${el.name}</h3></b>
                <p>${el.dpi}</p>
                <b><span class="price">Promedio 1er año.:${el.p1} </span></b>
                <b><span class="price">Promedio 2do año.:${el.p2} </span></b>
                <b><span class="price">Promedio 3er año.:${el.p3} </span></b>
                <b><span class="price">Promedio 4to año.:${el.p4} </span></b>
                <b><span class="price">Promedio 5to año.:${el.p5} </span></b>
                <b><span class="price">Tiempo.:${el.tiempo_trabajo} </span></b>
                <b><span class="price">jubilacion.:${el.jbl} </span></b>
                <div class="option-card">
                    <button _id="${el._id}" class="btn btn-success editar">Editar</button>
                    <button _id="${el._id}" class="btn btn-danger eliminar">Eliminar</button>
                </div>
                <span>${el.created_at}</span>
            </div>
        </div>`;
      $fragment.appendChild(div);
    });
    productsContainer.appendChild($fragment)
    }

     
    saveNewEmpleado(empleado){
        appService.makeRequest('empleados',empleado,'POST').then(res=>{
            this.getEmpleados();
            this.toastNotification("success",res.msg)
        }).catch(err=>{
            console.log(err)
            this.toastNotification("error","Al registrar producto")
        })
    }

    deleteEmpleado(idempleado){
        const conf =confirm("Desea Eliminar al empleado ?");
        if(!conf){
            return
        }else{
            appService.makeRequest(`empleados/${idempleado}`,{},'DELETE').then(res=>{
                this.getEmpleados();
                this.toastNotification("success",res.msg)
            }).catch(err=>{
                console.log(err)
                this.toastNotification("error","Al eliminar empleado")
            })

        }
        
    }

   /* getProduct(idProduct){
        appService.makeRequest(`product/${idProduct}`,{},'GET').then(res=>{
            this.editProduct(res)
        }).catch(err=>{
            console.log(err)
            this.toastNotification("error","Al cargar producto")
        })
    }
    editProduct(product){
        console.log(product._id)
        Modal(EditProductModal(product))
    }
    updateProduct(id,product){
        appService.makeRequest(`product/${id}`,product,'PUT').then(res=>{
            this.removeModal();
            this.getProducts();
            this.toastNotification("success",res.msg)
        }).catch(err=>{
            console.log(err)
            this.toastNotification("error","Al actualizar producto")
        })
    }

    removeModal(){
        //
        const modal = document.querySelector('.modal-contenedor');
        document.body.removeChild(modal)
    }
*/
    toastNotification(notificationType,message){
        toastr[notificationType](message)
    }

}
export default UiEmpleados;