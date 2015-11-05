# generator-djangospa

Django single page application for Yeoman


## Getting started

**Setting up the environment**

Create a virtual environment and install django:


	$ virtualenv myenv


Activate the environment:


	$ . myenv/bin/activate


Install Django 1.8.0 or later:


	$ pip install django
	
	
Install Django REST Framework


	$ pip install djangorestframework
	

Install the django single page app generator


	$ npm install generator-djangospa -g


## Creating a new project

	$ yo djangospa

Enter the **project name**, **project description** and the **name of a first django app**.

The generator will download all the project dependencies and run grunt to copy files over to proper locations.


## Starting the site

	$ cd <name_of_your_project>
	$ python manage.py runserver

Access your application at `http://127.0.0.1:8000`


## License
[MIT](LICENSE.md)

-

**Developed with :heart: by Daniel Furtado in Stockholm, Sweden.**
**Added to with :heart: by Pete LoGiudice in New Orleans, Louisiana, USA. **
