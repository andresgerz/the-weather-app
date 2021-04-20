import requests, json
from flask import Flask, jsonify, request
from bs4 import BeautifulSoup
from datetime import datetime
import numpy as np


app = Flask(__name__)


@app.route('/<cityId>', methods=['GET'])
def index(cityId):

    datetime.now(tz=None)

    dateTime = datetime.now()

    """ print(dateTime.day)
    print(dateTime.month)
    print(dateTime.year)
    print(dateTime.hour)
    """

    url = f'https://www.ogimet.com/cgi-bin/gsynres?ind={cityId}&decoded=yes&ndays=1&ano={dateTime.year}&mes={dateTime.month}&day={dateTime.day}&hora={dateTime.hour}'

    response = requests.get(url)
    # Add matrix with numpy
    html = BeautifulSoup(response.text, 'html.parser')

    temps_html = html.select('body table tr:nth-child(2) td:nth-child(2) font')
    
    temps_html = [element.text for element in temps_html]
    

    weather_data = {
        "weatherStation": {
            "id": "",
            "latitude": "",
            "longitude": "",
            "altitude": "",
            "hour": ""
        },
        "todayNow": {
            "temp": "",
            "td": "",
            "ddd": "",
            "windSpeed": "",
            "pressure": "",
            "pressureSeaLevel": "",
            "pressureTender": "",
            "topCloudy": "",
            "bottomCloudy": "",
            "heightCloudy": "",
            "visibility": ""
        }
    }

    count = 0
    for station in weather_data["weatherStation"].keys():
        weather_data["weatherStation"][station] = temps_html[count]
        count += 1

    for now in weather_data["todayNow"].keys():
        weather_data["todayNow"][now] = temps_html[count] 
        count += 1

    return jsonify({'data': weather_data })


if __name__ == "__main__":
    app.run(debug=True, port=4004)