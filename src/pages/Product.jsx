import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router'
import { FaStar } from 'react-icons/fa6'
import ProductCard from '../components/organisms/ProductCard';

export default function Product() {
    console.log('Product Component rendered')

    const { id } = useParams();
    console.log({id})

    const [product, setProduct] = useState({});
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const api = 'https://dummyjson.com/products/' + id;
            const res = await fetch(api);
            const data = await res.json();
            setProduct(data);
        }

        getProduct();
    }, [id]);

    useEffect(() => {
        console.log('Second useEffect fired')
        console.log('product', product)
        const getSimilarProducts = async () => {
            if (product.category) {
                const api = 'https://dummyjson.com/products/category/' + product.category
                const res = await fetch(api);
                const data = await res.json();

                setSimilarProducts(data.products);
            }
        }

        getSimilarProducts()
    }, [product])

    return (
        <div className="flex flex-col flex-wrap items-center justify-center gap-3 p-4">
            <h2 className="text-6xl text-center font-bold mb-10">{product.title}</h2>
            <img src={product.thumbnail} />
            <div>
                <div className='flex gap-1'>
                    <span>$</span>
                    <span className='text-red-500 line-through'>{product.price}</span>
                    <span className='text-green-700'>{(product.price - product.price * product.discountPercentage / 100).toFixed(2)}</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <span>{product.rating}</span>
                    <div className='text-amber-400 flex gap-1'> {[...Array(Math.round(product.rating ?? 0))].map((_, i) => (<FaStar key={i} />))} </div>
                </div>
            </div>

            {/* Other products */}

            <div className="flex flex-col gap-5">
                    <h2>Other products you may like</h2>
                <div className="flex flex-wrap gap-5">
                    {
                        similarProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}