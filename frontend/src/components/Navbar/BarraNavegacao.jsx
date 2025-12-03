import "./style.css";

export const BarraNavegacao = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Menu</div>

      <ul className="sidebar-menu">
        <li className="menu-item"> <a href="/home-freelancer">Freelancers</a></li>
        <li className="menu-item"><a href="">Demandas</a></li>
        <li className="menu-item"><a href="/perfil-freelancer">Perfil</a></li>
      </ul>

      <button className="logout-btn">Sair</button>
    </aside>
  );
}
