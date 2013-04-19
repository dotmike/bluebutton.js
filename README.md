
# BlueButton.js

A JavaScript library to work with Blue Button data. BlueButton.js supports CCDA and VA C32 documents. [Try the demo.](http://bluebutton.blacktm.com/json)

**This project is under heavy development!** Until a v1.0.0 release, the public API will change, a lot.

## Community and Contributing

This project is currently under development by members of the [Blue Button developer community](https://github.com/blue-button?tab=members) and will be maintained by [OSEHRA](http://osehra.org).

If you have a suggestion or concern, submit an issue or tweet us at [@bluebuttondev](http://twitter.com/bluebuttondev).

## Building

<<<<<<< HEAD
<!-- TODO: Say something about requiring Ruby. -->

Download the latest [Google's Closure Compiler](http://closure-compiler.googlecode.com/files/compiler-latest.zip) and unzip it to the `vendor` directory.

=======
>>>>>>> 634e89511cc3dab16de8b4ac6e5cc68417a462ca
Run `rake build` to build both the development and production JavaScript.

Requirements:

- [Ruby](http://www.ruby-lang.org/). We recommend using Ruby 2.0. View the [installation instructions](http://www.ruby-lang.org/en/downloads/).
- [Google's Closure Compiler](https://developers.google.com/closure/compiler/). Download the [latest version](http://closure-compiler.googlecode.com/files/compiler-latest.zip), unzip, and place `compiler.jar` into the `vendor` directory.

All builds are placed in the `build/` directory. Both development and production builds first assemble all JavaScript files in the `src/` directory in the order defined in `manifest.json`. All JavaScript files are concatenated and compiled with Google's Closure Compiler. All errors and warnings will be printed to the console.

# Usage

Start by creating a Blue Button document object by passing CCDA or VA C32 XML string to `BlueButton`:

```javascript
var bb = BlueButton(xml);
```

The Blue Button document object, `bb` in this example, now exposes all patient data through a simple and consistent interface.

## Sections

The health record sections are available using these public methods – JavaScript objects representing the patient data is returned from each:

```javascript
// Returns the patient's personal information and demographics
bb.demographics();

// Returns the patient's allergies and alerts
bb.allergies();

// Returns the patient's encounters
bb.encounters();

// Returns a list of the patient's immunizations
bb.immunizations();

// Returns a list of the patient's laboratory results, organized by panel
bb.labs();

// Returns a list of the patient's medications
bb.medications();

// Returns the patient's problem list
bb.problems();

// Returns a list of the patient's procedures
bb.procedures();

// Returns a list of the patient's vital readings, grouped by date
bb.vitals();
```

## Document Metadata

Information about the document itself can be accessed by using the `document` method:

```javascript
// Returns an object containing information about the CCD document
bb.document();
```
