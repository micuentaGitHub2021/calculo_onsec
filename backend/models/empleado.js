const {Schema,model}=require('mongoose');

const EmpleadoSchema=new Schema({
    name:{type: String,required:true},
    dpi:{type: String,required:true},
    p1:{type:Number,default:0},
    p2:{type: Number,default:0},
    p3:{type: Number,default:0},
    p4:{type: Number,default:0},
    p5:{type: Number,default:0},
    jbl:{type:Number,default:0},
    tiempo_trabajo:{type: Number,default:0},
    created_at:{type:Date,default:Date.now}
})

EmpleadoSchema.methods.calcularjubilacion = function(){

    const promedio=this.p1+this.p2+this.p3+this.p4+this.p5/5
    this.jbl=this.tiempo_trabajo*promedio
}

module.exports= model('Empleado',EmpleadoSchema);

