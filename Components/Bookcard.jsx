import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Button from '@material-ui/core/Button'
const BookCard = () => {
    return (
        <div className={styles.container}>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded" >
            <Image src="/img/logo2.png" className="card-img-top" width="500" height="500"/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button component="a">Button Link</Button>
            </div>
        </div>

        </div>
    );
}
export default BookCard;