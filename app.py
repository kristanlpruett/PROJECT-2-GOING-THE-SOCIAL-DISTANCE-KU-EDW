from flask import Flask, render_template, redirect
import scrape_mars

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/articles"
mongo = PyMongo(app)



@app.route("/")
def index():
    site_data = data.js
    return render_template("index.html", site_data=site_data)


@app.route("/search")
def search():
    app.getRoutes()
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)
