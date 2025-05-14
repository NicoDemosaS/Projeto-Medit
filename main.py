from flask import Flask, render_template

app = Flask(__name__)
if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)

@app.route("/")
def index_html():
    return render_template("index.html")

@app.route("/quemsomos")
def quemsomos_html():
    return render_template("quemsomos.html")

@app.route("/galeria")
def galeria_html():
    return render_template("galeria.html")

@app.route("/agenda")
def agenda_html():
    return render_template("agenda.html")
