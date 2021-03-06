import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
/*import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';*/
import { ConsultasDoPacienteComponent } from 'app/pages/consultas-do-paciente/consultas-do-paciente.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'pacientes',
        pathMatch: 'full',
    },
    {
        path: 'pacientes',
        component: DashboardComponent
    },
    {
        path: 'new/registroConsulta',
        component: UserComponent
    },
    {
        path: 'pacientes/consultas/exames',
        component: TableComponent
    },
    {
        path: 'resultados',
        component: TypographyComponent
    },
    {
        path: 'pacientes/consultas',
        component: ConsultasDoPacienteComponent
    }
]
