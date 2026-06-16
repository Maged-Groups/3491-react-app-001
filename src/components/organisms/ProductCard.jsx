import { FaStar } from 'react-icons/fa6'
import { Link } from "react-router";
import ButtonTW from '../molecules/ButtonTW';
import { useState } from 'react';

export default function ProductCard({ product }) {
    const [count, setCount] = useState(0);

    return (
        <div className="flex gap-4 flex-col justify-between p-2 border rounded-md shadow max-w-80">
            <h2 className="text-2xl text-center font-bold mb-10">{product.title}</h2>
            <div>

                <div>
                    <img src={product.thumbnail} />
                </div>
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

                {/* Cart icons */}
                <div className='flex gap-3 justify-between my-4 px-4'>
                    <ButtonTW onClick={() => setCount(count + 1)} text='+' variant='success' className='flex-1' />
                    <span className='flex-1 text-center'>{count}</span>
                    <ButtonTW onClick={() => setCount(count - 1)} text='-' variant='danger' className='flex-1' />
                </div>

            </div>

            <Link className="text-sky-300 bg-sky-900 rounded-3xl px-2 py-1 shadow-2xl text-center" to={`/products/${product.id}`}>See more</Link>
        </div>
    )
}