import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SCREENS } from './screen/index';
import { SERVICES } from './service/index';
import { STORES } from './store/index';

@NgModule({
    declarations: [
        AppComponent,
        ...SCREENS
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ...SERVICES,
        ...STORES
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
