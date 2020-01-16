
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { EmployeesComponent } from './views/employees/employees.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';

import { DetailspostComponent } from './views/detailspost/detailspost.component';
import { PagecontentComponent } from './views/pagecontent/pagecontent.component';
import { FaceRegconizeComponent } from './views/faceregconize/faceregconize.component';
import { TextEditorComponent } from './views/texteditor/texteditor.component';
import { Demo1Component } from './views/demo1/demo1.component';

import { Nhom3Component } from './views/Nhom3/nhom3.component';

import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { StatsCardComponent } from './views/dashboards/common/stats-card/stats-card.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', children:
    [
      { path: '', component: LoginComponent },
    ]
  },
  { path: 'adduser', children:
    [
      { path: '', component: RegisterComponent },
    ]
  },
  { path: 'employees', children:
    [
      { path: '', component: EmployeesComponent },
    ]
  },
  { path: 'detailspost', children:
    [
      { path: '', component: DetailspostComponent },
    ]
  },
  { path: 'pagecontent', children:
    [
      { path: '', component: PagecontentComponent },
    ]
  },
  { path: 'texteditor', children:
    [
      { path: '', component: TextEditorComponent },
    ]
  },
  { path: 'testdemo', children:
    [
      { path: '', component: Demo1Component },
    ]
  },
  { path: 'Nhom3/students', children:
    [
      { path: '', component: Nhom3Component },
    ]
  },
  { path: 'facedemo', children:
    [
      { path: '', component: FaceRegconizeComponent },
    ]
  },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
      { path: 'v2', component: StatsCardComponent }
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
