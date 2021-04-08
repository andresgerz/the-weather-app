import requests
from flask import Flask, jsonify, request
from bs4 import BeautifulSoup

url = ''

app = Flask(__name__)

response = requests.get(url)

html = BeautifulSoup(response.text, 'html.parser')

temps_html = html.find_all('font')

temps = list()
for temp in temps_html:
    temps.append(temp.text)

print(temps)


@app.route('/', methods=['GET'])
def index():
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run(debug=True, port=4004)