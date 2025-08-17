from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/rush")
def rush():
    return render_template("rush.html")


if __name__ == "__main__":
    app.logger.debug("Hi")
    app.run(host="0.0.0.0", port=5000, debug=True)