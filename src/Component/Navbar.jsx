export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Alejandro Dominguez Cardenas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Tecnologia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Estudios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Que dicen de mi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}