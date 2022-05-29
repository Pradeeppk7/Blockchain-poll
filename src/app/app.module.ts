import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoolCreateComponent } from './pool-create/pool-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoolComponent } from './pool/pool.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';
import { PollService } from './poll.service';

@NgModule({
  declarations: [
    AppComponent,
    PoolCreateComponent,
    PoolComponent,
    PollVoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
