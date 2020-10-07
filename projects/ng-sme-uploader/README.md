# SME Uploader - Angular

<p align="center">
  <img src="https://sme-uploader.web.app/images/logos/sme-uploader.png" width="300px" alt="SME Uploader logo">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ng-sme-uploader"><img src="https://img.shields.io/npm/v/ng-sme-uploader.svg?style=flat-square"></a>
</p>

Angular component wrapper around SME Uploader's maintained file uploader. It can be used to easily intigrate in Angular Projects

SME Uploader's <a href="https://sme-uploader.web.app/" target="_blank"> Documentation

## Installation

>npm i ng-sme-uploader

# Getting started

### app.module.ts

    import { NgSmeUploaderModule } from 'ng-sme-uploader';

    @NgModule({
        imports: [
            NgSmeUploaderModule
            ...
        ],
        ...
    })

### Component Template

    <ng-sme-uploader
      [config]="settings"
      (onFileAdd)="onFileAdd($event)"
      (onFileUpload)="onFileUpload($event)"
      (uploadResult)="uploadResult($event)">
    </ng-sme-uploader>

### Component TS

    import { NgSmeUploaderConfig } from 'ng-sme-uploader';

    settings: NgSmeUploaderConfig = {
        uploadAPI: {
            endpoint: 'https://master.tus.io/files/',
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

### Adding style

Add the cdn stylesheet in index.html or download

### index.html

    <link href="https://unpkg.com/sme-uploader@1.0.7/dist/sme-uploader.min.css" rel="stylesheet">

## Settings

### Input

<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Description</td>
</tr>
<tr>
<td>config</td>
<td>SmeUploaderConfig (Custom Type)</td>
<td>Uploader Configuration</td>
</tr>
</table>

### Output

<table>
<tr>
<td>Name</td>
<td>Description</td>
</tr>
<tr>
<td>(onFileAdd)</td>
<td>Emits file data on each file add</td>
</tr>
<tr>
<td>(onFileUpload)</td>
<td>Emits uploaded data when Upload is succesfully completed in backend</td>
</tr>
<tr>
<td>(onFileAdd)</td>
<td>Emits upload result irrespective of backend success/failure</td>
</tr>
</table>

### SmeUploaderConfig Description

    export interface SmeUploaderConfig {
        uploadAPI: {
            endpoint: string; // backend endpoint to upload files
            headers?: any; // additional headers eg:Authorization Token
            resume?: boolean; // null | boolean - A boolean indicating whether Tus should attempt to resume the upload if the upload has been started in the past
            retryDelays?: number[]; // null | array - When uploading a chunk fails, automatically try again after the millisecond intervals specified in this array
        };
        plugins?: {
            GoogleDrive?: boolean; // null | boolean - Allow Uploading Photo From GoogleDrive
            Instagram?: boolean; // null | boolean - Allow Uploading Photo From Instagram
            Webcam?: boolean; // null | boolean - Allow Taking Photo From Webcam
            Dropbox?: boolean; // null | boolean - Allow Uploading Photo From Dropbox
            Facebook?: boolean; // null | boolean - Allow Uploading Photo From Facebook
            ScreenCapture?: boolean; // null | boolean - Allow Taking ScreenCast
        };
        restrictions?: {
            maxFileSize?: number; // null | number — maximum file size in bytes for each
            maxNumberOfFiles?: number; // null | number — total number of files that can be selected
            minNumberOfFiles?: number; // null | number — minimum number of files that must
            allowedFileTypes?: Array<string>; // null | array of wildcards image/*, exact mime types image/jpeg, or file extensions .jpg: ['image/*', '.jpg', '.jpeg', '.png', '.gif']
        };
        statusBarOptions: {
            hideAfterFinish?: boolean; // Hide the Status Bar after the upload is complete
            showProgressDetails?: boolean; // By default, progress in Status Bar is shown as a simple percentage. If you would like to also display remaining upload size and time, set this to true.
            hideUploadButton?: boolean; // Hide the upload button. Use this if you are providing a custom upload button somewhere, and using the uploader.upload() API
            hideRetryButton?: boolean; // Hide the retry button in StatusBar
            hidePauseResumeButton?: boolean; // Hide the pause/resume button in StatusBar and on each individual file.
            hideCancelButton?: boolean; // Hide the cancel button in StatusBar and on each individual file.
            hideProgressAfterFinish?: boolean; // Hide Status Bar after the upload has finished
        };
        uploaderLook: {
            theme?: string; // light | dark | auto
            note?: string; // Optionally, specify a string of text that explains something about the upload for the user. This is a place to explain any restrictions that are put in place.
            proudlyDisplayPoweredBySmeUploader?: boolean; // SME Uploader is provided to the world for free by the team behind Transloadit. In return, we ask that you consider keeping a tiny Sme Uploader logo at the bottom of the Dashboard, so that more people can discover and use Sme Uploader. This is, of course, entirely optional. Just set this option to false if you do not wish to display the Sme Uploader logo
            width?: number; // null | number — Width of the Dashboard in pixels.
            height?: number; // null | number — Height of the Dashboard in pixels.
            thumbnailWidth?: number; // null | number — Width of the Thumbnail in pixels.
        };
        options?: {
            id?: string; // A site-wide unique ID for the instance.
            debug?: boolean;
            browserBackButtonClose?: boolean;
            autoProceed?: boolean; // Setting this to true will start uploading automatically after the first file is selected without waiting for upload button trigger.
            allowMultipleUploads?: boolean; // Setting this to true,  users can upload some files, and then add more files and upload those as well
            meta?: any; // Metadata object, used for passing things like public keys, usernames, tags and so on
        };
    }
