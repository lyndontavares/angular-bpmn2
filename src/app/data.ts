export var name: String = "Apidfe";

export var routes: Object[] = [{
  icon: 'dashboard',
  route: '/dashboard',
  title: 'Dashboard',
}, {
  icon: 'picture_in_picture',
  route: '/components',
  title: 'Components',
}, {
  icon: 'extension',
  route: '/patterns',
  title: 'Design Patterns',
}
];

export var overview: Object[] = [
{
  color: 'blue-600',
  icon: 'dns',
  route: '/certificate',
  title: 'Criar Processo',
  description:'Criar gráfico de processo BPMN'
}
, 
// {
//   color: 'blue-600',
//   icon: 'cloud_upload',
//   route: '/image',
//   title: 'Cargar logo KuDE',
//   description:'Cargue el logo que será utilizado en el KuDE'
// }

{
  color: 'blue-600',
  icon: 'settings',
  route: '/dashboard',
  title: 'Configuraciones generales',
  description:'Configuraciones generales'
}
// , {
//   color: 'blue-600',
//   icon: 'person_add',
//   route: '/users',
//   title: 'Configuraciones de usuarios',
//   description:'Vea y actualize las generales de los usuarios'
//  }, 
// {
//   color: 'blue-600',
//   icon: 'view_list',
//   route: '/movimento',
//   title: 'Documentos Electrónicos',
//   description:'Vea los movimientos registrados en la ApiDFE'
// }, {
//   color: 'blue-600',
//   icon: 'insert_chart',
//   route: '/grafico',
//   title: 'Gráficos',
//   description:'Consulte las estadísticas de la ApiDFE con la ayuda de los gráficos'
// }
];

export var ususario: Object[] = [
  {
  color: 'deep-yellow-800',
    icon: 'looks_one',
    route: 'add',
    title: 'Novo usuario',
  }, {
  color: 'deep-yellow-800',
    icon: 'view_agenda',
    route: 'edit',
    title: 'Editar usuario',
  }, {
  color: 'deep-yellow-800',
    icon: 'filter_none',
    route: 'listar',
    title: 'Listar usuarios',
  }
];
