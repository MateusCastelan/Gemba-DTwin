import React from 'react'
import Salvar from '../Botões/Salvar'
import Exportar from '../Botões/Exportar'
import Desfazer from '../Botões/Desfazer'
import Refazer from '../Botões/Refazer'
import Recortar from '../Botões/Recortar'
import Copiar from '../Botões/Copiar'
import Colar from '../Botões/Colar'
import Conexao from '../Botões/Conexao'
import NovaTela from '../Botões/NovaTela'
import Preview from '../Botões/Preview'
import Centralizar from '../Botões/Centralizar'
import ZoomIn from '../Botões/ZoomIn'
import ZoomOut from '../Botões/ZoomOut'
import { Divider } from '@mui/material'

export const acessoMenu = {
    parte1: [
        {
            id:'1', 
            value: <Divider orientation="vertical" color="#8b8b8b"/>
        }, 
        {
            id:'2', 
            value: <Salvar/>
        }, 
        {
            id:'3', 
            value: <Exportar/>
        }
    ],

    parte2: [
        {
            id:'1', 
            value: <Desfazer/>
        }, 
        {
            id:'2', 
            value: <Refazer/>
        }
    ],

    parte3: [
        {
            id:'1', 
            value: <Recortar/>
        }, 
        {
            id:'2', 
            value: <Copiar/>
        },
        {
            id:'3', 
            value: <Colar/>
        }
    ], 

    parte4: [
        {
            id:'1', 
            value: <Conexao/>
        }
    ], 

    parte5: [
        {
            id:'1', 
            value: <NovaTela/>
        }, 
        {
            id:'2',
            value: <Preview/>
        }
    ],

    parte6: [
        {
            id:'1', 
            value: <Centralizar/>
        }, 
        {
            id:'2', 
            value: <ZoomIn/>
        },
        {
            id:'3', 
            value: <ZoomOut/>
        }
    ],
}
