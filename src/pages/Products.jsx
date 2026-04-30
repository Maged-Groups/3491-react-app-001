import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import ProductCard from "../components/organisms/ProductCard";


export default function Products() {

    const [limit, setLimit] = useState(0);
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const getProducts = async () => {
            // Get All Products from API
            const api = 'https://dummyjson.com/products';

            const res = await fetch(api);

            const data = await res.json();

            setLimit(data.limit);
            setProducts(data.products);
            setTotal(data.total);

        }


        getProducts();
    }, [counter]);


    return (
        <div className="flex flex-col flex-wrap gap-3 p-4">
            <h2 className="text-6xl text-center font-bold mb-10">Products <small className="text-xs">({limit} of {total})</small></h2>

            <button onClick={() => setCounter(counter + 1)} className="border hover:bg-green-200">CLICK ME {counter}</button>

            <div className="flex flex-wrap justify-center gap-5">
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>

        </div>
    )
}