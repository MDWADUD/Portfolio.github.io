from flask import Flask, render_template
from database import get_db_connection

app = Flask(__name__)


@app.route("/")
def home():
    connection = get_db_connection()
    experiences = connection.execute(
    "SELECT * FROM experiences"
    ).fetchall()

    connection.close()

    print(experiences)

    return render_template("index.html", experiences=experiences)


if __name__ == "__main__":
    app.run(debug=True)

