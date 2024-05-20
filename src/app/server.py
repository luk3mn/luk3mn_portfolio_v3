from flask import Flask
from src.routes.app_route import app_route_bp

app = Flask(__name__)
app.register_blueprint(app_route_bp)
