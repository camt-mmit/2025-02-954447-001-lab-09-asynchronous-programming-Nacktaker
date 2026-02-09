import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './profile-root-pages.html',
  styleUrl: './profile-root-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileRoot {}
