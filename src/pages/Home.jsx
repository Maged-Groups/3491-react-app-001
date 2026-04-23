import Counter from "../features/Home/components/Counter";
import CounterAdv from "../features/Home/components/CounterAdv";

export default function Home() {
    return (
        <div className="h-screen flex flex-wrap items-center justify-center gap-3 p-4">
            <div>
                <h2 className="text-6xl text-center font-bold mb-10">Normal Counter</h2>
                <Counter />
            </div>

            <div>
                <h2 className="text-6xl text-center font-bold mb-10">Advanced Counter</h2>
                <CounterAdv />
            </div>
        </div>
    )
}