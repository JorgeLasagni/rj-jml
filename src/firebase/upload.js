//import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import { db } from './config.js'
import { addDoc, collection} from "firebase/firestore"

const MOCK_DATA =
[
    {
    "id": 16,
    "nombre": "Individuales",
    "descripcion": "Descripción del producto 16",
    "precio": 1600,
    "stock": 1,
    "categoria": "Personalizado",
    "img125": "/imagenes125/individuales-125x125.jpg",
    "img500": "/imagenes500/individuales-500x500.jpg"
    },
    {
        "id": 17,
        "nombre": "Mate",
        "descripcion": "Descripción del producto 17",
        "precio": 1700,
        "stock": 2,
        "categoria": "Personalizado",
        "img125": "/imagenes125/mate-125x125.jpg",
        "img500": "/imagenes500/mate-500x500.jpg"
    },
    {
        "id": 18,
        "nombre": "Mate",
        "descripcion": "Descripción del producto 18",
        "categoria": "Personalizado",
        "precio": 1800,    
        "stock": 3,
        "img125": "/imagenes125/matesolo-125x125.jpg",
        "img500": "/imagenes500/matesolo-500x500.jpg"
    },
    {
        "id": 19,
        "nombre": "Mate y Bolso",
        "descripcion": "Descripción del producto 19",
        "categoria": "Personalizado",
        "precio": 1900,
        "stock": 4,
        "img125": "/imagenes125/mateybolso-125x125.jpg",
        "img500": "/imagenes500/mateybolso-500x500.jpg"
    },
    {
        "id": 20,
        "nombre": "Portabolsas",
        "descripcion": "Descripción del producto 20",
        "categoria": "Accesorio",
        "precio": 5000,
        "stock": 5,
        "img125": "/imagenes125/portabolsas3-125x125.jpg",
        "img500": "/imagenes500/portabolsas3-500x500.jpg"
    },
    {
        "id": 21,
        "nombre": "Remera",
        "descripcion": "Descripción del producto 21",
        "precio": 2100,
        "stock": 6,
        "categoria": "Ropa",
        "img125": "/imagenes125/remera-125x125.jpg",
        "img500": "/imagenes500/remera-500x500.jpg"
    },
    {
        "id": 22,
        "nombre": "Remera",
        "descripcion": "Descripción del producto 22",
        "precio": 2200,
        "stock": 7,
        "categoria": "Personalizado",
        "img125": "/imagenes125/remera2-125x125.jpg",
        "img500": "/imagenes500/remera2-500x500.jpg"
    },
    {
        "id": 23,
        "nombre": "Taza",
        "descripcion": "Descripción del producto 23",
        "precio": 2300,
        "stock": 8,
        "categoria": "Personalizado",
        "img125": "/imagenes125/taza-125x125.jpg",
        "img500": "/imagenes500/taza-500x500.jpg"
    },
    {
        "id": 24,
        "nombre": "Taza Mágica",
        "descripcion": "Descripción del producto 24",
        "precio": 2400,
        "stock": 9,
        "categoria": "Personalizado",
        "img125": "/imagenes125/tazamagic-125x125.jpg",
        "img500": "/imagenes500/tazamagic-500x500.jpg"
    },
    {
        "id": 25,
        "nombre": "Termo",
        "descripcion": "Descripción del producto 25",
        "precio": 2500,
        "stock": 1,
        "categoria": "Personalizado",
        "img125": "/imagenes125/termosolo-125x125.jpg",
        "img500": "/imagenes500/termosolo-500x500.jpg"
    },
    {
        "id": 26,
        "nombre": "Vaso",
        "descripcion": "Descripción del producto 26",
        "precio": 2600,
        "stock": 11,
        "categoria": "Personalizado",
        "img125": "/imagenes125/vasosolofinal-125x125.jpg",
        "img500": "/imagenes500/vasosolofinal-500x500.jpg"
    }
]
const data = MOCK_DATA.map((item) => {
    delete item.id
    return item
})

const productosRef = collection(db, 'productos')

data.forEach((item) => {
    addDoc(productosRef, item)
})

// console.log("Hola!!!")
// //console.log(MOCK_DATA)
// console.log(data)