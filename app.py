# from flask import Flask, render_template, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Enable CORS for AJAX if needed

# # Dummy database (for demonstration)
# users = []

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')
    
#     # Authenticate user (mock check)
#     for user in users:
#         if user['email'] == email and user['password'] == password:
#             return jsonify({'success': True, 'message': 'Login successful'})
    
#     return jsonify({'success': False, 'message': 'Invalid credentials'})


# @app.route('/dashboard')
# def dashboard():
#     return render_template('dashboard.html')


# @app.route('/register', methods=['POST'])
# def register():
#     data = request.json
#     users.append({
#         'name': data.get('name'),
#         'email': data.get('email'),
#         'password': data.get('password'),
#         'phone': data.get('phone'),
#         'address': data.get('address')
#     })
#     return jsonify({'success': True, 'message': 'Registration successful'})

# if __name__ == '__main__':
#     app.run(debug=True)




from flask import session, redirect, url_for
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your-very-secret-key-here'

CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")  # Change this to your MongoDB URI
db = client["user_db"]
users_collection = db["users"]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login_post():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = users_collection.find_one({'email': email})
    if user and check_password_hash(user['password'], password):
        return jsonify({'success': True, 'message': 'Login successful'})

    return jsonify({'success': False, 'message': 'Invalid credentials'})


@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')

    if users_collection.find_one({'email': email}):
        return jsonify({'success': False, 'message': 'Email already registered'})

    hashed_password = generate_password_hash(data.get('password'))

    users_collection.insert_one({
        'name': data.get('name'),
        'email': email,
        'password': hashed_password,
        'phone': data.get('phone'),
        'address': data.get('address')
    })
    return jsonify({'success': True, 'message': 'Registration successful'})

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))  # This now works correctly! # This looks for a function named login()



# Route for Transfer page
@app.route('/transfer')
def transfer():
    return "Transfer Money Page - Implement your transfer page here"

# Route for Transactions page
@app.route('/transactions')
def transactions():
    return "Transactions History Page - Implement your transactions page here"

# Route for Account Settings page
@app.route('/settings')
def settings():
    return "Account Settings Page - Implement your settings page here"








if __name__ == '__main__':
    app.run(debug=True)
