import { Component } from '@angular/core';
import { NgSmeUploaderConfig } from 'projects/ng-sme-uploader/src/lib/ng-sme-uploader.config';
import { environment } from 'src/environments/environment';

// import { SmeUploaderConfig } from 'ng-sne-uploader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SME Uploader Angular';

  settings: NgSmeUploaderConfig = {
    uploadAPI: {
      endpoint: 'http://18.213.229.220:1080/files/',
      headers: {},
      resume: true,
      retryDelays: [0, 1000, 3000, 5000],
    },
    plugins: {},
    restrictions: {
      maxNumberOfFiles: 10,
    },
    options: {
      debug: true,
      autoProceed: false,
    },
    uploaderLook: {
      note: '',
      theme: 'light',
      proudlyDisplayPoweredBySmeUploader: true,
    },
    statusBarOptions: {
      showProgressDetails: true,
      hideRetryButton: false,
      hideCancelButton: false,
      hideProgressAfterFinish: false,
    },
  };

  onFileAdd(evt): void {
    console.log('onFileAdd', evt);
  }

  onFileUpload(evt): void {
    console.log('onFileUpload', evt);
  }

  uploadResult(evt): void {
    console.log('uploadResult', evt);
  }
}
