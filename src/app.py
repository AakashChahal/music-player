from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/*": {"origins": "*", "methods": ["GET", "POST"]}}
)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/<search_keyword>', methods=['GET'])
def get_song(search_keyword):
    return {
        "result": search_keyword
    }


if __name__ == '__main__':
    app.run(debug=True)
