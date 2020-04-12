import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AsideComponent } from './admin/aside/aside.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { ProfileComponent } from './admin/components/profile/profile.component';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { TabsComponent } from './admin/components/tabs/tabs.component';
import { AdminUserInfoComponent } from './admin/admin-user-info/admin-user-info.component';
import { StatisticsCardComponent } from './admin/components/statistics-card/statistics-card.component';
import { ReferrerComponent } from './admin/components/referrer/referrer.component';
import { ProgressBarComponent } from './admin/components/progress-bar/progress-bar.component';
import { SkillsComponent } from './admin/components/skills/skills.component';
import { NavigationComponent } from './admin/components/navigation/navigation.component';
import { SearchComponent } from './admin/components/search/search.component';
import { FriendsComponent } from './admin/components/friends/friends.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AsideComponent,
    AdminMainComponent,
    ProfileComponent,
    AdminStatisticsComponent,
    TabsComponent,
    AdminUserInfoComponent,
    StatisticsCardComponent,
    ReferrerComponent,
    ProgressBarComponent,
    SkillsComponent,
    NavigationComponent,
    SearchComponent,
    FriendsComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
