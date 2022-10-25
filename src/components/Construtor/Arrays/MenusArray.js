import React from 'react'
import { NoteAddOutlined, FileOpenOutlined, SaveOutlined, FileDownloadOutlined,
        Home, UndoRounded, RedoRounded, ContentCut, ContentCopy, ContentPaste,
        Delete, OpenInFullRounded, Grid4x4Rounded, StraightenRounded, LockRounded, WebAsset,
        ImportExportRounded, BuildRounded, ColorLens, Event, PlayArrowRounded,
        MenuBook, ReportRounded, BookRounded } from '@mui/icons-material/'

export const menuItems = {

    Arquivo: [
        {
            id:'1',
            title: "Novo Arquivo",
            path: "/novoArquivo",
            cName: "dropdown-link",
            icon: <NoteAddOutlined/>,
            cod: "Ctrl+O"
        },
        {
            id:'2',
            title: "Abrir Arquivo",
            path: "/abrirArquivo",
            cName: "dropdown-link",
            icon: <FileOpenOutlined/>,
            cod: "Ctrl+A"
        },
        {
            id:'3',
            title: "Salvar",
            path: "/salvarArquivo",
            cName: "dropdown-link",
            icon: <SaveOutlined/>,
            cod: "Ctrl+S"
        },
        {
            id:'4',
            title: "Exportar",
            path: "/exportarArquivo",
            cName: "dropdown-link",
            icon: <FileDownloadOutlined/>,
            cod: "Crtl+B"
        },
        {
            id:'5',
            title: "Voltar à página inicial",
            path: "/paginaInicial",
            cName: "dropdown-link",
            icon: <Home/>,
        }
        
    ],
    Editar: [
        {
            id:'6',
            title: "Desfazer",
            path: "/desfazer",
            cName: "dropdown-link",
            icon: <UndoRounded/>,
            cod: "Crtl+"
        },
        {
            id:'7',
            title: "Refazer",
            path: "/refazer",
            cName: "dropdown-link",
            icon: <RedoRounded/>,
            cod: "Crtl+"
        },
        {
            id:'8',
            title: "Recortar",
            path: "/recortar",
            cName: "dropdown-link",
            icon: <ContentCut/>,
            cod: "Crtl+"
        },
        {
            id:'9',
            title: "Copiar",
            path: "/copiar",
            cName: "dropdown-link",
            icon: <ContentCopy/>,
            cod: "Crtl+C"
        },
        {
            id:'10',
            title: "Colar",
            path: "/colar",
            cName: "dropdown-link",
            icon: <ContentPaste/>,
            cod: "Crtl+V"
        },
        {
            id:'11',
            title: "Excluir",
            path: "/excluir",
            cName: "dropdown-link",
            icon: <Delete/>,
            cod: "Del"
        },
    ],
    Exibir: [
        {
            id:'12',
            title: "Modo tela cheia",
            path: "/telaCheia",
            cName: "dropdown-link",
            icon: <OpenInFullRounded/>,
            cod: "F12"
        },
        {
            id:'13',
            title: "Mostrar grade",
            path: "/mostrarGrade",
            cName: "dropdown-link",
            icon: <Grid4x4Rounded/>,
            cod: "Crtl+"
        },
        {
            id:'14',
            title: "Mostrar réguas",
            path: "/mostrarRegua",
            cName: "dropdown-link",
            icon: <StraightenRounded/>,
            cod: "Crtl+"
        },
        {
            id:'15',
            title: "Bloquear guia",
            path: "/bloquearGuia",
            cName: "dropdown-link",
            icon: <LockRounded/>,
            cod: "Crtl+"
        },
    ],
    Projeto: [
        {
            id:'16',
            title: "Nova tela",
            path: "/novaAba",
            cName: "dropdown-link",
            icon: <WebAsset/>,
        },
        {
            id:'17',
            title: "Comunicação",
            path: "/comunicação",
            cName: "dropdown-link",
            icon: <ImportExportRounded/>,
        },
        {
            id:'18',
            title: "Propriedades do projeto",
            path: "/propriProjeto",
            cName: "dropdown-link",
            icon: <BuildRounded fontSize='small'/>,
        },
        {
            id:'19',
            title: "Palheta de componentes",
            path: "/palhetaComponentes",
            cName: "dropdown-link",
            icon: <ColorLens/>,
        },
        {
            id:'20',
            title: "Eventos",
            path: "/eventos",
            cName: "dropdown-link",
            icon: <Event/>
            
        },
        {
            id:'21',
            title: "Prévia de visualização",
            path: "/previaVisual",
            cName: "dropdown-link",
            icon: <PlayArrowRounded/>,
        },
    ],  
    Ajuda: [
        {
            id:'22',
            title: "Manual",
            path: "/manual",
            cName: "dropdown-link",
            icon: <MenuBook/>,
        },
        {
            id:'23',
            title: "Relatar erro",
            path: "/relatarErro",
            cName: "dropdown-link",
            icon: <ReportRounded/>,
        },
        {
            id:'24',
            title: "Sobre o Gemba DTWIN",
            path: "/sobre",
            cName: "dropdown-link",
            icon: <BookRounded/>
            
        },
    ],  
}