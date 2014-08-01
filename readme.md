# Cellular UI

The Cellular user interface is a lightweight (4kb) jquery plugin designed to facilitate rapid implementation of common ui elements. 

Using the same standard markup (an HTML list), the widget can be switched by simply changing the class of the list.

This integrates perfectly with content formatted by Drupal Views- Here's how to display content as tabs, an accordion, or (content-rotator) in a view:

Create a view of FIELDS to collect the information you want to display
__Format:__ _HTML List_
__Settings:__ List class (The class to provide on the list element itself.): _This is the class that will determine the interface_ `jAccordion || jTabs || jScrolli`
Call the script functions: 
`$('.jAccordion').jAccordion();`
`('.jTabs').jTabs();`
`$('.jScrolli').jAccordion();`

Style the interface: `/sass/style/style-ui.css`

