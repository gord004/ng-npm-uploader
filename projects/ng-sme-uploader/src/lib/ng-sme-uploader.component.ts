import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgSmeUploaderConfig } from './ng-sme-uploader.config';

@Component({
  selector: 'ng-sme-uploader',
  templateUrl: './ng-sme-uploader.component.html',
  styleUrls: ['./ng-sme-uploader.component.scss'],
})
export class NgSmeUploaderComponent implements OnInit {
  @Input() config: NgSmeUploaderConfig;
  @Output() onFileAdd = new EventEmitter();
  @Output() onFileUpload = new EventEmitter();
  @Output() uploadResult = new EventEmitter();

  uploaderInstance: any;

  ngOnInit(): void {
    const SmeUploader = require('@sme-uploader/core');
    const uploader = new SmeUploader({
      autoProceed: this.config.options.autoProceed,
      restrictions: this.config.restrictions,
      debug: this.config.options.debug,
    });

    this.uploaderInstance = uploader;

    const Dashboard = require('@sme-uploader/dashboard');
    uploader.use(Dashboard, {
      target: '.drag-drop-area',
      id: this.config.options.id,
      theme: this.config.uploaderLook.theme,
      note: this.config.uploaderLook.note,
      height: this.config.uploaderLook.height,
      width: this.config.uploaderLook.width,
      thumbnailWidth: this.config.uploaderLook.thumbnailWidth,
      inline: true,
      showProgressDetails: this.config.statusBarOptions.showProgressDetails,
      browserBackButtonClose: this.config.options.browserBackButtonClose,
      hideUploadButton: this.config.statusBarOptions.hideUploadButton,
      hideRetryButton: this.config.statusBarOptions.hideRetryButton,
      hidePauseResumeButton: this.config.statusBarOptions.hidePauseResumeButton,
      hideCancelButton: this.config.statusBarOptions.hideCancelButton,
      hideAfterFinish: this.config.statusBarOptions.hideAfterFinish,
      hideProgressAfterFinish: this.config.statusBarOptions.hideProgressAfterFinish,
      proudlyDisplayPoweredBySmeUploader: this.config.uploaderLook.proudlyDisplayPoweredBySmeUploader,
      allowMultipleUploads: this.config.options.allowMultipleUploads,
    });

    // Plugins
    if (this.config.plugins.GoogleDrive) {
      // uploader.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
    }

    if (this.config.plugins.Instagram) {
      // uploader.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
    }

    if (this.config.plugins.Facebook) {
      // uploader.use(Facebook, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
    }

    if (this.config.plugins.Dropbox) {
      // uploader.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
    }

    if (this.config.plugins.Webcam) {
      // uploader.use(Webcam, { target: Dashboard });
    }

    if (this.config.plugins.ScreenCapture) {
      // uploader.use(ScreenCapture, { target: Dashboard });
    }

    const Tus = require('@sme-uploader/tus');
    uploader.use(Tus, {
      endpoint: this.config.uploadAPI.endpoint,
      headers: this.config.uploadAPI.headers,
      resume: this.config.uploadAPI.resume,
      retryDelays: this.config.uploadAPI.retryDelays,
    });

    uploader.on('file-added', (file) => {
      if (this.config.options.meta) {
        uploader.setFileMeta(file.id, this.config.options.meta);
      }
      this.onFileAdd.emit(file);
    });

    uploader.on('upload', (data) => {
      this.onFileUpload.emit(data);
    });

    uploader.on('complete', (result) => {
      this.uploadResult.emit(result);
    });
  }
}
