import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Products() {

    console.log('Products Component rendered')
    const [limit, setLimit] = useState(0);
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);

    const [counter, setCounter] = useState(0);

    console.log('Before useEffect');
    useEffect(() => {
        console.log('Inside useEffect')
        console.log('Before getProducts function')
        const getProducts = async () => {
            console.log('Inside getProducts function')
            // Get All Products from API
            const api = 'https://dummyjson.com/products';
            console.log('api', api)

            const res = await fetch(api);
            console.log('res', res)

            const data = await res.json();
            console.log('data', data)

            setLimit(data.limit);
            setProducts(data.products);
            setTotal(data.total);
            console.log('After set limit, products, totla')

            console.log('products, limit, total', products, limit, total);
        }
        console.log('After getProducts function')


        console.log('Before call getProducts function')
        getProducts();
        console.log('After call getProducts function')
    }, [counter]);
    console.log('After useEffect')


    console.log('Before return')
    return (
        <div className="flex flex-col flex-wrap gap-3 p-4">
            <h2 className="text-6xl text-center font-bold mb-10">Products <small className="text-xs">({limit} of {total})</small></h2>

            <button onClick={() => setCounter(counter + 1)} className="border hover:bg-green-200">CLICK ME {counter}</button>

            <div className="flex flex-wrap gap-3">
                {
                    products.map(product => (
                        <div key={product.id} className="flex flex-col p-2 border rounded-md shadow">
                            <div>
                                <img src={product.thumbnail} alt="" />
                            </div>

                            <h3>{product.title}</h3>
                            <Link to={`/products/i`}>See more</Link>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}