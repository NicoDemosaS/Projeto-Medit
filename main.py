from flask import Flask, render_template, request, redirect, url_for, session

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

@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        if request.form["username"] == "admin" and request.form["password"] == "senha123":
            session["logged_in"] = True
            return redirect(url_for("admin_html"))
        else:
            error = "Usuário ou senha incorretos."
    return render_template("login.html", error=error)

@app.route("/logout")
def logout():
    session.pop("logged_in", None)
    return redirect(url_for("login"))

@app.route("/admin")
def admin_html():
    if not session.get("logged_in"):
        return redirect(url_for("login"))
    return render_template("admin.html")
    
