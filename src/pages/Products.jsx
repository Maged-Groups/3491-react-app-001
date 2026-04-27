import { Link } from "react-router";

export default function Products() {
    return (
        <div className="flex flex-col flex-wrap gap-3 p-4">
            <h2 className="text-6xl text-center font-bold mb-10">Products</h2>

            <div className="flex flex-wrap gap-3">
                {
                    [...Array(300)].map((_, i) => (
                        <div key={Math.random()} className="flex flex-col p-2 border rounded-md shadow">
                            <h3>Product {i + 1}</h3>
                            <Link to={`/products/${i + 1}`}>See more</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}