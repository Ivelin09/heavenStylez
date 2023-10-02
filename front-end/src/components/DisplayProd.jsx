
import '../styles/displayprod.css'
import { useEffect } from 'react'
const DisplayProd = () => {
    //console.log(title.current.value)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((res) => { console.log(res); return res.json() });
            console.log(response);
        }

        fetchData();

    }, [])

    // return response.json(); 

    return (
        <div>

        </div>
    )
}

export default DisplayProd;