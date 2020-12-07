import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'tarea',
  connector: 'mssql',
  url: 'mssql://Fernando2019_SQLLogin_1:5vp9iid2i6@produccion.mssql.somee.com/produccion',
  host: 'DESKTOP-15UB8OD',
  port: 1433,
  user: 'Fernando',
  password: 'Software2021',
  database: 'produccion'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TareaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'tarea';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.tarea', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
