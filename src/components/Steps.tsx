import styles from "../styles/Steps.module.scss"

const Steps = () => (
    <div className={styles.steps_conteiner}>
        <h2>Steps</h2>
        <div className={styles.steps_col}>
            <div className={styles.steps_col_items_left}>
                <h4>Step 1</h4>
                <div>
                    <h3>Introduction to Front-End </h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Elit massa erat vitae non semper quis. </p>
                </div>
                <div>
                    <h4>Step 2</h4>
                    <h3>Overview of Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Elit massa erat vitae non semper quis. </p>
                </div>
                <div>
                    <h4>Step 3</h4>
                    <h3>Introduction to Front-End </h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Elit massa erat vitae non semper quis. </p>
                </div>
            </div>
            <div className={styles.steps_col_items_right}>
                <div>
                    <h4>Step 4</h4>
                    <h3>Overview of Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Elit massa erat vitae non semper quis. </p>
                </div>
                <div>
                    <h4>Step 5</h4>
                    <h3>Introduction to Front-End </h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Elit massa erat vitae non semper quis. </p>
                </div>
                <div>
                    <h4>Step 6</h4>
                    <h3>Overview of Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                        Elit massa erat vitae non semper quis. </p>
                </div>
            </div>
        </div>
    </div>
)

export default Steps