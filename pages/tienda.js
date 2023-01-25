import Layout from "@/components/layout";
import Guitarra from "@/components/guitarra";
import styles from '../styles/grid.module.css'


function Tienda({guitarras}) {

    
    return (
        <Layout
        title={'Tienda'}
        description={'Tienda Virtual, venta de guitarras, instrumentos, GuitarLA'}
        >
            <main className="contenedor">
                <h2 className="heading">Nuestra Coleccion</h2>
                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra 
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export default Tienda;

// llamado a una API solo cuando se llame a build (estatico)
/*export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data:guitarras} = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}*/

//Llamado a una API de manera dinamica y siempre que el cliente entre a consultar
export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data:guitarras} = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}