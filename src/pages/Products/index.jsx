import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router";
import styles from "./Products.module.scss";
function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [productId, setProductId] = useState();
    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (error) {
            alert(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (productId) => {
        setOpen(true);
        setProductId(productId);
    };

    const getProductActive = () => {
        if (products.length == 0) return null;
        console.log(productId);
        return products.find((product) => product.id === productId);
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Product List</h1>
            {!loading ? (
                <div className={styles.productWrap}>
                    {products &&
                        products.length > 0 &&
                        products.map((product) => (
                            <div className={styles.productItem} key={product.id}>
                                <div className={styles.productId}>{product.id}</div>
                                <h2 className={styles.productTitle}>{product.title}</h2>
                                <p className={styles.productBody}>{product.body}</p>
                                <div className={styles.btnSuccess} onClick={() => handleOpenModal(product.id)}>
                                    Xem chi tiết
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <h2 className={styles.loadingText}>Đang tải....</h2>
            )}

            <Modal open={open} setOpen={setOpen}>
                {getProductActive() ? (
                    <div key={getProductActive().id} className={styles.productDetail}>
                        <div className={styles.productId}>{getProductActive().id}</div>
                        <h2 className={styles.productTitle}>{getProductActive().title}</h2>
                        <p className={styles.productBody}>{getProductActive().body}</p>
                    </div>
                ) : (
                    <div className={styles.error}>Error....</div>
                )}
            </Modal>
        </div>
    );
}

export default Products;
