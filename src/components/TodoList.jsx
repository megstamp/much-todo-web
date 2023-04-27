import { useEffect } from "react"
import { List }  from "antd"

export default function TodoList({ loading, itemList, setItemList, setLoading }) {

    useEffect(() => {
        fetch("https://much-todo-app-ms.web.app/items")//GET
        .then(resp => resp.json())
        .then(setItemList)
        .catch(alert)
        .finally(() => setLoading(false))
    }, [])

    const deleteTask = (taskId) => { 
        setLoading(true)
        fetch(`https://much-todo-app-ms.web.app/items/${taskId}`,{
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(setItemList)
        .catch(alert)
        .finally(() => setLoading(false))

    }

    return (
        <section>
            <List 
                bordered
                dataSource={itemList}
                loading={loading}
                size="large"
                renderItem={(task) => (
                <List.Item onClick={() => deleteTask(task.id)} className={(task.done) && "done"}>
                    {task.item}
                </List.Item>
             ) }
             />
        </section>
    )

}