from flask import Blueprint, render_template

app_route_bp = Blueprint("app_route", __name__)

@app_route_bp.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app_route_bp.route("/coding", methods=["GET"])
def coding():
    return render_template("coding.html")

@app_route_bp.route("/learning", methods=["GET"])
def learning():
    return render_template("learning.html")

@app_route_bp.route("/reward", methods=["GET"])
def reward():
    return render_template("reward.html")