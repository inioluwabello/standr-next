import styles from './menu.module.css';

const MenuItemMiddle = () => {
    return (
        <div className="space-evenly">
            <div>
                <a className={styles.menuItem}>Best Product</a>
            </div>
            <div>
                <a className={styles.menuItem}>EShop plus</a>
            </div>
            <div>
                <a className={styles.menuItem}>Customer Service</a>
            </div>
            <div>
                <a className={styles.menuItem}>Best Sellers</a>
            </div>
        </div>
    )
}
export default MenuItemMiddle