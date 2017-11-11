import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'pacientes', title: 'Pesquisa de Pacientes',  icon: 'ti-panel', class: '' },
    { path: 'new/registroConsulta', title: 'Registro consulta',  icon:'ti-user', class: '' },
    { path: 'consulta', title: 'Consulta',  icon:'ti-pencil-alt2', class: '' },
    { path: 'exames', title: 'Exames',  icon:'ti-view-list-alt', class: '' },
    { path: 'resultados', title: 'Resultados do exame',  icon:'ti-text', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
