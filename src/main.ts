import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2VlhhQlJCfV5CQmFBYVF2R2BJfl56cFxMZFVBNQtUQF1hSn5adE1iWH9ddH1XRmlV");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
