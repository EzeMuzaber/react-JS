import { collection, getDocs, getFirestore, query, where, getDoc, doc,addDoc,serverTimestamp } from "firebase/firestore";
import { app } from "./firebase";

export const getProducts = () => {
    const db = getFirestore(app)

    const productsCollection = collection(db, "products");

    const query = getDocs(productsCollection)
    //res.docs[0].id = es un metodo que me devuelve el id del documento
    //res.docs[0].data()= es un metodo que me devuelve la data del documento
    return query
        .then((res) => {
            console.log(res)
            const products = res.docs.map(doc => {
                //console.log(doc.data())
                //console.log(doc.id)
                const producto = doc.data()
                producto.id = doc.id//de aca obtenemos el id stock
                return producto
            })
            return products
        })
        .catch((error) => {
            console.log(error)
        })
}
export const getProductsFromCategories = (species) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, "products");
    let filtro
    if (species === "Human") {
        filtro = query(productsCollection, where("species", "==", "Human"))
    }
    else if (species === "Alien") {
        filtro = query(productsCollection, where("species", "==", "Alien"))
    } else {
        filtro = productsCollection
    }
    //const filtro= query(productsCollection, where("species","==","Alien"))

    const consulta = getDocs(filtro)

    return consulta
        .then((res) => {
            console.log(res)
            const products = res.docs.map(doc => {
                const producto = doc.data()
                producto.id = doc.id//de aca obtenemos el id stock
                return producto
            })
            return products
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductDetail = (id) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, "products");
    const filtro = doc(productsCollection, id)
    const consulta = getDoc(filtro)
    //console.log(consulta)
    return consulta
        .then((res) => {
            const producto = res.data()
            producto.id = res.id
            return producto

        })
        .catch((error) => {
            console.log(error)
        })
}

export const createSale = (sale) => {

    const db = getFirestore(app)
    const salesCollection = collection(db, "ventas")

    const venta={
        items: sale,
        usuario: {nombre: "nombre", apellido: "apellido", email: "email",dni: "dni", celular: "celular", 
        direccion: "direccion",envio: "envio"},
        fechaDeCompra: serverTimestamp()
    }
    const consulta = addDoc(salesCollection,venta)
    consulta
    .then((res) => {
        console.log(res)

    })
    .catch((error) => {
        console.log(error)
    })
    
    return consulta
    
}