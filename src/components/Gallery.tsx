import Image from "next/image"
import styles from "../styles/Galery.module.scss"

const Galery = () => (
    <div className={styles.galery_conteiner}>
        <h2>Gallery</h2>
        <p>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. </p>
        <div className={styles.stage}>
            <div className={styles.form}>
                <Image src={"/../public/developer1.png"} width={650} height={434} alt={"Galery"} ></Image>
            </div>
            <div className={styles.form}>
                <Image src={"/../public/developer2.png"} width={650} height={434} alt={"Galery"} ></Image>
            </div>
            <div className={styles.form}>
                <Image src={"/../public/developer3.png"} width={650} height={434} alt={"Galery"} ></Image>
            </div>
            <div className={styles.form}>
                <Image src={"/../public/developer4.png"} width={650} height={434} alt={"Galery"} ></Image>
            </div>
        </div>
        <p>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</p>
    </div>
)

export default Galery