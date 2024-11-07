import Products from "../index.tsx";

export default function Electronics() {

    return (
        <section>
            <Products/>
            <div className="container mt20 products">
                <p>Eletrônico 1</p>
                <p>Eletrônico 2</p>
                <p>Eletrônico 3</p>
            </div>
        </section>
    );
}