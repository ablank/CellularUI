# Cellular UI

The Cellular user interface is a lightweight (4kb) jquery plugin designed to facilitate rapid implementation of common ui elements. 

Using the same standard markup (an HTML list), the widget can be switched by simply changing the class of the list.

This integrates perfectly with content formatted by Drupal Views- Here's how to display content as tabs, an accordion, or (content-rotator) in a view with the cellular theme:

Create a view of FIELDS to collect the information you want to display

__Format:__ _HTML List_

__Settings:__ List class (The class to provide on the list element itself.): _This is the class that will determine the interface_ `jAccordion || jTabs || jScrolli`

__Save__ The view is all set.


__Call the script functions:__ Call each script you want to use from `js/script.js`. 

```javascript
$('.jAccordion').jAccordion({
"active": 0, // Set the array index of the initial panel to display
"duration": 500, // Animation time in ms
"easing": "swing", // Animation easing method
"single": false // Toggle single panel display
});

$('.jBlocklink').jBlocklink();

$('form').jFormal({
"inputs": [ // css selector array of inputs to format
'input[type="text"]',
'input[type="email"]',
'input[type="password"]',
'textarea'
],
});

$('.jScrolli').jScrolli({
"speed": 500, // Duration of cycle
"pause": 3000 // Time to pause between cycles
});

$('.jTabs').jTabs({
"active": 0 // Set the array index of the initial panel to display
});

$('#nav').jMmenu({
"breakpoint": 650 // Window breakpoint trigger
});`
```

__Style the interface:__ `/sass/style/style-ui.css`

