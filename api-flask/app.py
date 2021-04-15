import requests, json
from flask import Flask, jsonify, request
from bs4 import BeautifulSoup
from datetime import datetime
from marshmallow import Marshmallow

datetime.now(tz=None)

dateTime = datetime.now()

print(dateTime.day)
print(dateTime.month)
print(dateTime.year)
print(dateTime.hour)

url = f'https://www.ogimet.com/cgi-bin/gsynres?ind=87155&decoded=yes&ndays=2&ano={dateTime.year}&mes={dateTime.month}&day={dateTime.day}&hora={dateTime.hour}'

app = Flask(__name__)

response = requests.get(url)

html = BeautifulSoup(response.text, 'html.parser')

temps_html = html.find_all('font')

temps = list()
for temp in temps_html:
    temps.append(temp.text)

print(temps)

ma = Marshmallow(response)

@app.route('/', methods=['GET'])
def index():
    return jsonify({'response': ma })

if __name__ == "__main__":
    app.run(debug=True, port=4004)