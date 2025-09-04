import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
    const [count, setCount] = useState(0);
    const handlePlus = () => {
        setCount(count + 1);
    };

    const handleMinus = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };
    return (
        <div className={styles.container}>
            <div className={styles.counterWrap}>
                <h1 className={styles.heading}>Counter App</h1>
                <div className={styles.status}>ĐÂY LÀ SỐ: {count > 0 ? "DƯƠNG" : count < 0 ? "ÂM" : "BẰNG KHÔNG"}</div>

                <div
                    className={styles.count}
                    style={{
                        color: count > 0 ? "green" : count < 0 ? "red" : "gray",
                    }}
                >
                    {count}
                </div>

                <div className={styles.counterAction}>
                    <div className={styles.btnSuccess} onClick={handlePlus}>
                        +1
                    </div>
                    <div className={styles.btnDanger} onClick={handleMinus}>
                        -1
                    </div>
                    <div className={styles.btnPrimary} onClick={handleReset}>
                        Reset
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;
