# generator-djangospa

Django single page application for Yeoman


## Getting started

**Setting up the environment**

Create a virtual environment and install django:


	$ virtualenv myenv


Activate the environment:


	$ . myenv/bin/activate


Install Requirements


	$ pip install -r requirements.txt
	

Install the django single page app generator


	$ npm install generator-djangospa -g


## Creating a new project

	$ yo djangospa

Enter the **project name**, **project description** and the **name of a first django app**.

The generator will download all the project dependencies and run grunt to copy files over to proper locations.


## Import default REST JSON data

	$ cd <name_of_your_project>
	$ python manage.py makemigrations
	$ python manage.py createsuperuser

Access your application admin at `http://127.0.0.1:8000/admin`

Login as superuser you created.

Click Items,
Click Import,
Choose File,
Page.json,
Select Format: json,
Click Submit,
Confirm Import,
Click Home

Repeat for Item.json


## Django REST framework API

Access browsable API at `http://127.0.0.1:8000/api`


## Starting the site

	$ cd <name_of_your_project>
	$ python manage.py runserver

Access your application at `http://127.0.0.1:8000`


## License
[MIT](LICENSE.md)

-

**Developed with :heart: by Daniel Furtado in Stockholm, Sweden.**
