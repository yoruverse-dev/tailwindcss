export default function App() {
    return (
        <main className="p-10 flex flex-col gap-10 bg-primary">
            <p className="text-primary">Primary</p>
            <p className="text-disabled">Disabled</p>
            <button className="border border-brand px-5 py-2.5 w-fit bg-primary_alt text-primary">
                Hola
            </button>
            <div className="size-5 bg-gray-light-600"></div>
        </main>
    )
}
