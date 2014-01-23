Rebel
=====

Rebel is a code generator for PHP and JavaScript code written in [Node JS](http://nodejs.org/).

## Installation

Rebel can be installed via npm, that means you have to install [Node JS](http://nodejs.org/) which comes with npm,
and then via npm install rebel.

```bash
$ npm install rebel -g
```

## Usage

Generating files with Rebel is easy, in order to do so, you have to be at the root of your project and issue a command to generate a file.

```bash
# Change directory into your project
$ cd my-project

# Generate a JS Handler
$ rebel generate javascript handler MyHandler
```

The command above `$ rebel generate javascript handler MyHandler` will generate a handler in `my-project/assets/js/handlers` directory.


## Available commands

This is the list of available commands and where they will generate their files.

**PHP**
```bash

# application/controllers/mycontroller.php
$ rebel generate php controller MyController 

# application/models/mycontroller.php
$ rebel generate php model MyModel

# application/views/mycontroller.php
$ rebel generate php view MyView

# application/helpers/mycontroller.php
$ rebel generate php helper MyHelper

# Generate model, view, controller and helper.
$ rebel generate php object MyObject
```

**JavaScritp ( [Gillie](https://github.com/PabloVallejo/gillie) )**
``` bash

# assets/handlers/myhandler.js
$ rebel generate js handler MyHandler

# assets/models/mymodel.js
$ rebel generate js model MyModel

# assets/controllers/mycontroller.js
$ rebel generate js controller MyController

# assets/views/myview.js
$ rebel generate js view MyView

# assets/helpers/myhelper.js
$ rebel generate js helper MyHelper

# Generate handler, model, view and controller.
$ rebel generate js object myObject

```

## Directory structure

Rebel is intended to work with projects that follow a MV* structure both in the front-end and the back-end. The JavaScript files that are generated can be be used with [Gillie](https://github.com/PabloVallejo/gillie) and the PHP files are bare clases.


```
  my-project/
  ├── application/
      ├── config/
      ├── controllers/
      ├── helpers/
      ├── models/
      └── views/

  └── assets/
      ├── js/
          ├── handlers/
          ├── models/
          ├── views/
          └── controllers/
```
