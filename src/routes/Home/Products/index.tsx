import Card from "../../../components/Card";
import {NavLink} from "react-router-dom";

export default function Products() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt20">
                        <div className="card">
                            <NavLink to="/products/computers" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
                                <Card title="Computadores"/>
                            </NavLink>
                            <NavLink to="/products/electronics" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
                                <Card title="Eletrônicos"/>
                            </NavLink>
                            <NavLink to="/products/books" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
                                <Card title="Livros"/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}