# openui5-qrcode

openui5-qrcode is an OpenUI5 utility that wrap [toastr](https://github.com/CodeSeven/toastr), a Javascript library for non-blocking notifications.

![openui5-toastr preview](https://raw.githubusercontent.com/StErMi/openui5-toastr/master/preview.PNG)

## Demo

You can checkout a demo with different configuration parameter here: https://stermi.github.io/openui5-toastr/test/demo/

## Usage

### Configure manifest.json

Add the library to sap.ui5 dependencies list and configure the resourceRoots to point where you uploaded the custom library.

```json
"sap.ui5": {
    ...
	"dependencies": {
		"minUI5Version": "1.30.0",
		"libs": {
    		...
			"it.designfuture.toastr": {}
		}
	},
	"resourceRoots": {
		"it.designfuture.toastr": "./thirdparty/it/designfuture/toastr/"
	}
}
```

### How to use it inside your code

Include it inside your AMD require it/designfuture/toastr/Toastr

and just call it

```javascript
Toastr.info('This is a call title', 'And this is a call message', {
  "closeButton": false,
  "debug": false,
  "progressBar": false,
  "preventDuplicates": false,
  "tapToDismiss": true,
  "newestOnTop": true,
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut",
  "showDuration": 300,
  "hideDuration": 1000,
  "timeOut": 5000,
  "extendedTimeOut": 1000,
  "rtl": false,
  "onShown": null,
  "onHidden": null,
  "onclick": null,
  "onCloseClick": null
});
```

## Config Parameters

| Name | Type | Default| Description
| :---- | :------------------- | :---- | :---------  |
| closeButton | boolean | false | Optionally enable a close button
| debug | boolean | false | Show more debug informations
| progressBar | boolean | false | Visually indicate how long before a toast expires.
| preventDuplicates | boolean | false | Rather than having identical toasts stack, set the preventDuplicates property to true. Duplicates are matched to the previous toast based on their message content.
| tapToDismiss | boolean | true | Tap toast to dismiss it
| newestOnTop | boolean | true | Show newest toast at bottom
| showEasing | boolean | "swing" | Animation easing
| hideEasing | boolean | "linear" | Animation easing
| showMethod | boolean | "fadeIn" | jQuery show/hide method of your choice
| hideMethod | boolean | "fadeOut" | jQuery show/hide method of your choice
| showDuration | string | 300 | How long the show animation should last
| hideDuration | string | 1000 | How long the hide animation should last
| timeOut | string | 5000 | How long the toast will display without user interaction
| extendedTimeOut | string | 1000 | How long the toast will display after a user hovers over it
| rtl | boolean | false | Flip the toastr to be displayed properly for right-to-left languages.
| onShown | function | null | Custom callback when toast is shown
| onHidden | function | null | Custom callback when toast is hidden
| onclick | function | null | Custom callback when toast is clicked
| onCloseClick | function | null | Custom callback when toast is closed by the close button (X)


## Methods

| Name |  Description
| :---- | :------------------- |
| info | Show an info toast
| success | Show a success toast
| warning | Show an warning toast
| error | Show an error toast
| clearToast | Clear a specific toast
| clearLastToast | Clear the last toast showed
| clearAllToast | Clear all the toasts stacked

## Build

If you would like to extend and customize the control, you can easily do that but re-building the code with just a simple Grunt command:

```
npm install
grunt build
```

## Credits

Emanuele Ricci

 - Email: [stermi@gmail.com](stermi@gmail.com)
 - Twitter: [@StErMi](https://twitter.com/StErMi)

## License
This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details
