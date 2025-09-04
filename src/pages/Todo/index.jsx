import { useRef, useState } from "react";
import styles from "./Todo.module.scss";
function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const idRef = useRef(0);
    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Lấy giá trị từ input
    };
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn trang reload khi submit form
        if (inputValue.trim()) {
            setTodos([...todos, { id: (idRef.current += 1), text: inputValue, completed: false }]);
            setInputValue(""); // Reset input sau khi thêm
        }
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
    };

    const handleFinish = (id, e) => {
        const newTodos = todos.map((todo) => {
            if (todo.id == id) {
                todo.completed = e.target.checked;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    console.log(todos);

    const getFinishedTodo = () => {
        let count = 0;
        todos.forEach((todo) => {
            if (todo.completed) {
                count++;
            }
        });
        return count;
    };

    const getUnFinishedtodo = () => {
        return todos.length - getFinishedTodo();
    };

    return (
        <div className={styles.container}>
            <div className={styles.todoWrap}>
                <h1 className={styles.todoHeading}>Todo App</h1>

                <form onSubmit={handleSubmit} className={styles.todoForm}>
                    <input value={inputValue} onChange={handleInputChange} placeholder="Nhập task mới..." />
                    <button className={styles.btnSuccess} type="submit">
                        Thêm
                    </button>
                </form>

                <ul className={styles.todoList}>
                    {todos.length === 0 ? (
                        <div className={styles.todoEmpty}>Chưa có task nào. Hãy thêm task đầu tiên!</div>
                    ) : (
                        todos.map((todo) => (
                            <li key={todo.id} className={styles.todoItem}>
                                <label htmlFor={`todo-${todo.id}`}>{todo.text}</label>
                                <div className={styles.btnDanger} onClick={() => handleDelete(todo.id)}>
                                    Xóa
                                </div>
                                <input
                                    checked={todo.completed}
                                    type="checkbox"
                                    id={`todo-${todo.id}`}
                                    onChange={(e) => handleFinish(todo.id, e)}
                                />
                            </li>
                        ))
                    )}
                </ul>

                <div className={styles.todoStatistic}>
                    Tổng: {todos.length} task(s), Hoàn thành: {getFinishedTodo()} task(s), Còn lại: {getUnFinishedtodo()} task(s)
                </div>
            </div>
        </div>
    );
}

export default Todo;
