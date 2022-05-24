import styles from "../styles/PizzaList.module.css";
import BookCard from "./BookCard"
const booklist = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> THE BEST STORY BOOKS IN TOWN</h1>
            <p className={styles.desc}>
                
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.
            </p>
            <div className={styles.wrapper}>
            <BookCard/>
            <BookCard/>
            <BookCard/>

                </div>
        </div>
    );
}

export default booklist;