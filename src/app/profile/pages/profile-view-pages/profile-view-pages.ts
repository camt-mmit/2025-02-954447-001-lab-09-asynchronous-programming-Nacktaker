import { ChangeDetectionStrategy, Component, inject, resource } from '@angular/core';
import { ProfileView } from '../../components/profile-view/profile-view';
import { ProfileDataStorage } from '../../services/profile-data.storage';

@Component({
  selector: 'app-profile-view-page',
  imports: [ProfileView],
  templateUrl: './profile-view-pages.html',
  styleUrl: './profile-view-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewPage {
  private readonly dataStorage = inject(ProfileDataStorage);

  protected readonly dataResource = resource({
    loader: async () => await this.dataStorage.get(),
  });
}
