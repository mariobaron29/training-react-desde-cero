import { useState, useEffect } from "react"

const Effect = () => {

    const [users, setUsers] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            setUsers(data)
        })

    }, [])

    useEffect(() => {
        setUsers([
            {
                hola: "test",
            }
        ])
        console.log(users)
    } ,[id])

    const handleSubmit = (e) => {
        e.preventDefault() //Evita que se recarga el sitio
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <form onSubmit = {handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input
                        value = {id}
                        onChange = {(e) => setId(e.target.value)}
                        type = "text"
                        className = "form-control"
                        id = "exampleInputEmail1"
                        aria-describedby = "emailHelp" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
        </>
    )
}

export default Effect
