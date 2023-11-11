from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/<name>', methods=['GET'])
def hello_name(name):
    # return the response as a json object
    return {
        "name": name
    }


if __name__ == '__main__':
    app.run(debug=True)
