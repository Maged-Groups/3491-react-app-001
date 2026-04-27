import { useParams } from 'react-router'

export default function Product() {

    const { id } = useParams();

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 p-4">
            <h2 className="text-6xl text-center font-bold mb-10">Product {id} Page</h2>
        </div>
    )
}