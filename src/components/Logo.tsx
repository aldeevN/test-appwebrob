import { title } from "process"
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";


const Logo = () => (
    <div className={styles.logo}>
        <Link href="/">
            <Image src="/../public/logo.png" width={170} height={33} alt={title} />
        </Link>
    </div>
)
export default Logo