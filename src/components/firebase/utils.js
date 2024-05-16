import { collection, getDocs, getFirestore, query, where, getDoc, doc, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "./firebase";

export const getProducts = () => {
    const db = getFirestore(app)

    const productsCollection = collection(db, "products");

    const query = getDocs(productsCollection)
    return query
        .then((res) => {
            const products = res.docs.map(doc => {
                const producto = doc.data()
                producto.id = doc.id
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

    const consulta = getDocs(filtro)

    return consulta
        .then((res) => {
            const products = res.docs.map(doc => {
                const producto = doc.data()
                producto.id = doc.id
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

export const createSale = (productos, cliente) => {

    const db = getFirestore(app)
    const salesCollection = collection(db, "ventas")

    const importeTotal = productos.reduce((total, producto) => {
        return total + (producto.item.price * producto.cantidad);
    }, 0)

    const venta = {
        items: productos,
        usuario: cliente,
        importeTotal: importeTotal,
        fechaDeCompra: serverTimestamp(),
    }
    return addDoc(salesCollection, venta);


}

