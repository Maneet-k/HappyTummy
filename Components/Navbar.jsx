import * as React from 'react';
import ReactDOM from 'react-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callbutton}>
          <MailOutlineIcon />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Contact us</div>
          <div className={styles.text}>blahblah123@gmail.com</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HOME PAGE</li>
          <li className={styles.listItem}>BOOK TYPES</li>
          <Image src="/img/logo2.png" alt="" width={"120px"} height={"70px"} className={styles.logo}/>
          <li className={styles.listItem}>BLOGS EVENTS</li>
          <li className={styles.listItem}>ABOUT CONTACT</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <ShoppingCartOutlinedIcon />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;