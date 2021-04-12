# the-weather-app

## Index:
1) api-laravel: Laravel, Redis, MySQL, admin
2) web: Next.js
3) mobile: kivy, kivymd
4) api-flask: flask, web scrapy


## 1) Install Lando in root and then start containers(Laravel, MySQL, Redis):

###  https://docs.lando.dev/basics/installation.html

###  lando start


## 2) Start web app in web folder: install dependencies and then start it

###  npm i

###  npm run dev


## 3) Create virtualenv, activate it, install requirements and then start mobile app in mobile folder:

###  python -m virtualenv kivy_venv

###  source kivy_env/bin/activate

###  pip install -r requirements.txt

###  python main.py


## 4) Create virtualenv, activate it, install requirements and then start api in api-flask folder:

###  python -m virtualenv api_venv

###  source api_env/bin/activate

###  pip install -r requirements.txt

###  python app.py