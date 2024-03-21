
function Header() {
    return (
        <header className="bg-slate-400 p-4 flex justify-between shadow-md">
            <h1 id="titulo" className="titulo header__title">
                Hola mundoo
            </h1>
            <nav>
                <a href="#">link 1</a>
                <a href="#">link 2</a>
                <a href="#">link 3</a>
            </nav>
        </header>
    );
}
export default Header;
