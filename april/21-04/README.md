## I need a good sass project structure, Can you help me?

## Get Started

- [Structure](#structure)
- [Importing](#importing)
- [File declaration](#file-declaration)
- [More](#more)

## Structure

Because many of you having a hard time structuring or working around the new structure of sass. I thought, I would share with you. The general setup that you might want to have on your build. Of course sometimes things can change, but this is an overlook on what you can have.

```
scss/
|
|- abstracts/
|	|- __abstracts-dir.scss     # Import all abstracts .scss files
|	|- _fonts.scss              # Font Import
|	|- _mixins.scss             # Scss Mixins
|	|- _variables.scss          # Scss Variables
|	|- _functions.scss          # Scss Functions(if you have)
|
|- base/
|	|- __base-dir.scss          # Import all base .scss files
|	|- _reset.scss              # Custom Reset/Normalize
|	|- _typography.scss         # Typography Rules
|	…                           # Rest if you have..
|
|- components/
|	|- __components-dir.scss    # Import all components .scss files
|	|- _button.scss             # Button Styles
|	|- _input.scss              # Input Styles
|	|- _modal.scss              # Modal Styles
|	…	                        # Rest if you have..
|
|- layouts/
|	|- __layouts-dir.scss       # Import all layouts .scss files
|	|- _footer.scss             # Footer Styles
|	|- _main-menu.scss          # Main Navigation Styles
|	…                           # Rest if you have..
|
|- vendor/
|	|- __vendor-dir.scss        # Import vendor folders (All of the out side tools that you need for your project)
|	|- fontawesome/             # Font Awesome
|	|- normalize/               # Normalize
|	…                           # Rest if you have..
|
main.scss                       # Main Scss File
```

## Importing

in `main.scss`you need to import all of the files that ends with `-dir.scss`
keep on mind all the files names should starts with `_` besides your `main.scss`
Also your vendors and abstracts should be the first ones that you import

```
//Vendor
@import "vendor/__vendor-dir";

//Abstracts
@import "abstracts/__abstracts-dir";

//Base Styles
@import "base/__base-dir";

//Components
@import "components/__components-dir";

//Layout
@import "layouts/__layouts-dir";

```

## File Declaration

## `Vendors`

Here you will be adding all of the 3rd party tools say fontawesome, normalize and any other ones.

## `Abstracts`

Any Variables you will have mixins or functions, you can add here so it's kind of your owm setups for your project.

## `Base`

You can set your customisations for your base, say your own normalize or any headlines general rules.

## `Components`

Do deep in depth into your elements what Defines your webpage what components that you rely on say (forms, registration forms, Gallery, ...)
tip: you will see actual use here when we start working with react

## `layout`

Define your layout, how your webpage looks like
