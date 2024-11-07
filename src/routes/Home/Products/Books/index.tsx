import Products from "../index.tsx";

export default function Books() {

    return (
        <section>
            <Products/>
            <div className="container mt20 products">
                <p>Livro 1</p>
                <p>Livro 2</p>
                <p>Livro 3</p>
            </div>
        </section>
    );
}