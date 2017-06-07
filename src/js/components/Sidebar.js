import React from "react";
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
      <aside id="left-sidebar-nav">
      <ul id="slide-out" class="side-nav fixed leftside-navigation">
        <li class="user-details cyan darken-2">
          <div class="row">
            <div class="col col s4 m4 l4">
              <img src="images/favicon/favicon.ico" alt=""
                class="circle responsive-img valign profile-image"/>
            </div>
            <div class="col col s8 m8 l8">
              <a
                class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn"
                href="user-profile-page.jsp">Nombre Apellido</a>
              <p class="user-roal">Administrador</p>
            </div>
          </div>
        </li>
        <li class="active" ><Link to={'/principal'}><i class="mdi-action-home"></i> Principal</Link></li>
        <li><Link to={'/socios'}><i
            class="mdi-action-accessibility"></i> Socios</Link></li>

        
          <li><Link to={'/estadisticas'}><i class="mdi-content-sort"></i>
            Estadísticas</Link></li>
          <li><a href="#"><i class="mdi-action-settings"></i>
            Configuración</a></li>
        
        
        <li class="divider"></li>
        <li><a id="btnSalir" href="user-login.html"><i  class="mdi-hardware-keyboard-tab"></i> Salir</a></li>
        <li class="li-hover"><div class="divider"></div></li>
        <li>
                <div class="card">
                  <div class="container center card-content  yellow darken-2 white-text">
                      <p class="card-stats-title"><i class="mdi-action-trending-up"></i> Ingresos en el dia</p>
                      <h4 class="card-stats-number" id="cantingresos"></h4>
                  </div>
                </div>
                </li>
      </ul>
      <a href="#" data-activates="slide-out"
        class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i
        class="mdi-navigation-menu"></i></a> </aside>
      </div>
    );
  }
}
