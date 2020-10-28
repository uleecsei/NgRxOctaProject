import { ChangeDetectionStrategy, Component } from '@angular/core';
import { selectUser } from '../shared/store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { IAuthState } from '../shared/store/auth/auth.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  user$ = this.store.select(selectUser);

  constructor(private store: Store<IAuthState>) {}

}
