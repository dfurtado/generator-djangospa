# generator-djangospa

Django single page application for Yeoman


## Getting started

### Setting up the environment

Create a virtual environment and install django:

```
$ virtualenv myenv
```

Activate the environment:

```
$ . myenv/bin/activate
```

Install Requirements:

```
$ pip install "django>=1.8,<1.9", djangorestframework
```

Install the django single page app generator

```
$ npm install generator-djangospa -g
```


## Creating a new project

```
$ yo djangospa
```

Enter the **project name**, **project description** and the **name of a first django app**.

The generator will download all the project dependencies and run gulp to copy files over to proper locations.


## Project folder structure

```
├─┬ app\
│ └─┬ templates\
│   └── app\
│
├── demo\
│
├─┬ source\
│ └── scss\
│
├─┬ static\
│ ├─┬ scripts\
│ │ └── app\
│ │
│ ├─┬ styles\
│ │ └── css\
│ │
│ └── view_templates\
│
└── templates\
```


## Initializing the site
```
$ cd <name_of_your_project>
$ python manage.py migrate  (add --run-syncdb for django >=1.9)
$ python manage.py createsuperuser
$ python manage.py loaddata initdata.json
```


## Starting the site
```
$ python manage.py runserver
```

Access your application at `http://127.0.0.1:8000`


## Django REST framework API

Access browsable API at `http://127.0.0.1:8000/api`

## Django admin page

The django admin page is enabled by default and it can be accessed at `http://127.0.0.1:8000/admin`


## Gulp tasks

| Task | Description |
|:------|:-------------|
|copy-styles| Copy all the CSS dependencies to `static/styles/css/`|
|copy-scripts| Copy all the JavaScript dependencies to `static/scripts/`|
|sass| Compile the SCSS files into CSS |
|sass:watch| Watch for changes in the scss files and run the `sass` task|


## Copyright and License

Copyright (c) 2015 [Daniel Furtado](https://twitter.com/the8bitcoder). Code released under [the MIT license](LICENSE.md)

## Contributors

[https://github.com/dfurtado/generator-djangospa/graphs/contributors](https://github.com/dfurtado/generator-djangospa/graphs/contributors)
