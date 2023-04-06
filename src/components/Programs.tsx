import Image from "next/image";
import styles from "../styles/programs.module.scss"

const Programs = () => {
    return (
        <div className={styles.programs_container}>
            <h1>Programming technologies</h1>
            <p> By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
            <div className={styles.technologies}>
                <div>
                    <Image src="/../public/angular.png" width={162} height={130} alt="webDev" />
                    <h4>Angular</h4>
                </div>
                <div>
                    <Image src="/../public/angular.png" width={162} height={130} alt="webDev" />
                    <h4>React</h4>
                </div>
                <div>
                    <Image src="/../public/angular.png" width={162} height={130} alt="webDev" />
                    <h4>Vue.js</h4>
                </div>
                <div>
                    <Image src="/../public/angular.png" width={162} height={130} alt="webDev" />
                    <h4>JavaScript</h4>
                </div>
            </div>
        </div>
    );
}
export default Programs