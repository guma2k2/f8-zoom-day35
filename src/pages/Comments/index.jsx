import { useEffect, useState } from "react";
import styles from "./Comments.module.scss";
import Button from "../../components/Button";
function Comments() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);
    const [loading, setLoading] = useState(false);
    const getComments = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            setComments(result);
        } catch (error) {
            alert(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setComment((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments((prev) => {
            return [comment, ...prev];
        });
        setComment({});
    };
    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Comment List</h1>
            {loading === false ? (
                <div className={styles.wrapper}>
                    {comments &&
                        comments.length > 0 &&
                        comments.map((comment) => (
                            <div className={styles.item} key={comment.id}>
                                <img src={`https://ui-avatars.com/api/?name=${comment.name}`} alt="" className={styles.img} />
                                <div className={styles.info}>
                                    <div className={styles.title}>{comment.name}</div>
                                    <div className={styles.email}>{comment.email}</div>
                                    <p className={styles.body}>{comment.body}</p>
                                    <p className={styles.time}>1 ngày trước</p>
                                </div>
                            </div>
                        ))}

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            placeholder="Nhập name"
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={comment.name || ""}
                        />
                        <input
                            placeholder="Nhập email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={comment.email || ""}
                        />
                        <input
                            placeholder="Nhập body"
                            onChange={handleChange}
                            type="text"
                            name="body"
                            value={comment.body || ""}
                        />
                        <Button primary loading={loading} type="submit">
                            Đăng
                        </Button>
                    </form>
                </div>
            ) : (
                <h3 className={styles.loadingText}>Đang tải....</h3>
            )}
        </div>
    );
}

export default Comments;
