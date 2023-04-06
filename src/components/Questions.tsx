import Image from "next/image";
import styles from "../styles/Questions.module.scss"

const Questions = () => (
    <div className={styles.questions_conteiner}>
        <h2>Frequently Asked Questions</h2>
        <div>
            <p>Do you have any kind of questions? We are here to help.</p>
            <Image src={"/../public/Question.png"} width={344} height={345} alt={"Questions"} ></Image>
        </div>
        <div>
            <div>
                <h4>What is the price?</h4>
                <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            </div>
            <div>
                <h4>What is the price?</h4>
                <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            </div><div>
                <h4>What is the price?</h4>
                <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            </div><div>
                <h4>What is the price?</h4>
                <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            </div><div>
                <h4>What is the price?</h4>
                <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            </div><div>
                <h4>What is the price?</h4>
                <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
            </div>
        </div>
    </div>
);

export default Questions;