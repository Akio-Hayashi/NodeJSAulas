const express = require('express');
const router = express.Router();

// Services
const {getClientes, getClienteById, 
    insertCliente, updateClienteById,
    deleteClienteById} = 
    require('./../services/clientesService')

router.get("/", (req, res)=>{
    res.send({clientes: getClientes()})
})

router.get("/:id", (req, res)=>{
    res.send(getClienteById(req.params.id))
})

router.post("/", (req, res)=>{
    console.log(req.body)
    insertCliente(req.body)
    res.send({success: true})
})

router.put("/:id", (req, res)=>{
    console.log(req.body)
    updateClienteById(req.params.id, req.body)
    res.send({success: true})
})

router.delete("/:id", (req, res)=>{
    deleteClienteById(req.params.id)
    res.send({success: true})
})

module.exports = router;