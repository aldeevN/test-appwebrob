import Link from "next/link";
import { title } from "process";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

const Footer = () => (
  <footer>
    <div className={styles.logo}>
      <Link href="/">
        <Image src="/../public/logo.png" width={170} height={33} alt={title} />
      </Link>
      <p>Wisconsin Ave, Suite 700
        Chevy Chase, Maryland 20815</p>
    </div>
    <div>
      <h5>Company</h5>
    </div>
    <div>
      <h5>Social media</h5>
    </div>
  </footer>
);

export default Footer;
