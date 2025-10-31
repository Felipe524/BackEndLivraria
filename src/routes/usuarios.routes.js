import {
CriarUsuario,
listaUsuario,
ObterUsuario,
atualizaUsuario,
deletarUsuario
}from "../controllers/usuarios.controller.js";

import express from "express";

const router = express.Router()

router.get("/",listaUsuario);
router.get("/",CriarUsuario);
router.get("/",ObterUsuario);
router.get("/",atualizaUsuario);
router.get("/",deletarUsuario);



export default router
