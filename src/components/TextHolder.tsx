import styles from "../styles/TextHolder.module.scss"

const TextHolder = () => (
    <div className={styles.text_holder_container}>

        <div className={styles.holder_item}>
            <h1>Front-End</h1>
            <h1>Developer</h1>
            <button></button>
            <h3>Courses</h3>
            <p>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). </p>
        </div>
    </div>
);

export default TextHolder;