# generator-djangospa

Django single page application for Yeoman


## Getting started

**Setting up the environment**

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
$ pip install django=>1.8
$ pip install djangorestframework
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

The generator will download all the project dependencies and run grunt to copy files over to proper locations.

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
$ python manage.py migrate
$ python manage.py createsuperuser
$ python manage.py loaddata initdata.json
```

## Starting the site
```
$ cd <name_of_your_project>
$ python manage.py runserver
```

Access your application at `http://127.0.0.1:8000`

## Django REST framework API

Access browsable API at `http://127.0.0.1:8000/api`


## License
[MIT](LICENSE.md)

**Big thanks to [@nolapete](https://github.com/nolapete) for collaborating on the project!**
