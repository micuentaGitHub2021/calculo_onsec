const {request,response}=require('express');
const empleado = require('../models/empleado.js');
const Empleado = require('../models/empleado.js')

const getEmpleados= async (req=request,res=response)=>{
    const Empleados = await Empleado.find().sort('_id');
    res.json(Empleados)
}

/* const getProduct = async (req=request,res=response)=>{
    const product = await Product.findById(req.params.id)
    res.json(product)
} */

const newempleado= async (req=request,res=response)=>{
    const newempleado = new Empleado(req.body);
    newempleado.calcularjubilacion()
    console.log(newempleado)
    await newempleado.save();
    res.json({msg:'Empleado creado'})
}

/* const updateProduct= async (req=request,res=response)=>{
    const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        context:'query'
    })
    if(!product){
        console.log('error al buscar dato')
    }
    res.json({msg:`${product.name}:Actulizado`})

} */
const deleteEmpleado= async (req=request,res=response)=>{
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    res.json({msg:`${empleado.name}:Eliminado`})
}

module.exports={
    newempleado,
    getEmpleados,
    deleteEmpleado
}