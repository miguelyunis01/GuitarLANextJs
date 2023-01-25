import Image from "next/image";
import Layout from "@/components/layout";
import imagen from '../public/img/nosotros.jpg'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, GuitarLA, Tienda de musica"}
    >
      <main className={`contenedor ${styles.nosotros}`}>
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src={imagen} width={1000} height={800} alt="nosotrosimagen" />
          <div>
            <p>
              Fusce et imperdiet ipsum, et rutrum nunc. Sed et orci consequat,
              congue nulla ut, tristique purus. Quisque felis tortor, pretium
              non consequat at, euismod non dui. Aliquam vestibulum lacus est,
              tincidunt feugiat est fermentum efficitur. Ut posuere nibh sit
              amet dui rhoncus mollis. Sed auctor posuere congue. Proin a turpis
              nunc. Mauris ut placerat elit.
            </p>
            <p>
              Fusce et imperdiet ipsum, et rutrum nunc. Sed et orci consequat,
              congue nulla ut, tristique purus. Quisque felis tortor, pretium
              non consequat at, euismod non dui. Aliquam vestibulum lacus est,
              tincidunt feugiat est fermentum efficitur. Ut posuere nibh sit
              amet dui rhoncus mollis. Sed auctor posuere congue. Proin a turpis
              nunc. Mauris ut placerat elit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Nosotros;
