import socket
import threading
import time

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/ipAddress')
def ipAddress():
    hostname = socket.gethostname()

    ipAddress = str(socket.gethostbyname(hostname))  
    print(ipAddress)
    return ipAddress



    
    


if __name__ == '__main__':
    app.run()