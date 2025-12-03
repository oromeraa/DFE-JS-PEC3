import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { DebugPanelComponent } from './debug-panel/debug-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    DebugPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
