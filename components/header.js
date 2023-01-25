import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'; 
import logo from '../public/img/logo.svg'
import carrito from '../public/img/carrito.png'
import styles from '../styles/header.module.css'

function Header() {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={"/"}>
                    <Image className={styles.logo} src={logo.src} width={300} height={40} alt="logo" />
                </Link>
                
                <nav className={styles.navegacion}>
                    <Link href={"/"} className={router.pathname === '/' ? styles.active : ''}>
                        Inicio
                    </Link>

                    <Link href={"/nosotros"} className={router.pathname === '/nosotros' ? styles.active : ''}>
                        Nosotros
                    </Link>

                    <Link href={"/tienda"} className={router.pathname === '/tienda' ? styles.active : ''}>
                        Tienda
                    </Link>

                    <Link href={"/blog"} className={router.pathname === '/blog' ? styles.active : ''}>
                        blog
                    </Link>

                    <Link href={"/carrito"} className={router.pathname === '/carrito' ? styles.active : ''}>
                        <Image width={30} height={25} src={carrito} alt='carrito de compras' />
                    </Link>
                    
                </nav>
            </div>
        </header>
    );
}

export default Header;