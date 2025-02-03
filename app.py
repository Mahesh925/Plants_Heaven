
from flask import Flask, render_template, request, jsonify
from PIL import Image
import numpy as np
import keras
from keras.applications.vgg19 import preprocess_input
import os
import subprocess
app = Flask(__name__, static_url_path='/static', template_folder='templates')

model = keras.models.load_model("archive (5)/best_model1.h5")

ref = {
    0: 'Apple Scab',
    1: 'Apple Blackrot',
    2: 'Apple Cedarapple Rust',
    3: 'Apple Healthy',
    4: 'Blueberry Healthy',
    5: 'Cherry Powdery Mildew',
    6: 'Cherry Healthy',
    7: 'Corn Cercospora Leaf Spot',
    8: 'Corn Common Rust',
    9: 'Corn Northern Leaf Blight',
    10: 'Corn (Maize) Healthy',
    11: 'Grape Black Rot',
    12: 'Grape Esca (Black Measles)',
    13: 'Grape Leaf Blight (Isariopsis Leaf Spot)',
    14: 'Grape Healthy',
    15: 'Orange Huanglongbing (Citrus Greening)',
    16: 'Peach Bacterial Spot',
    17: 'Peach Healthy',
    18: 'Pepper Bell Bacterial Spot',
    19: 'Pepper Bell Healthy',
    20: 'Potato Early Blight',
    21: 'Potato Late Blight',
    22: 'Potato Healthy',
    23: 'Raspberry Healthy',
    24: 'Soybean Healthy',
    25: 'Squash Powdery Mildew',
    26: 'Strawberry Leaf Scorch',
    27: 'Strawberry Healthy',
    28: 'Tomato Bacterial Spot',
    29: 'Tomato Early Blight',
    30: 'Tomato Late Blight',
    31: 'Tomato Leaf Mold',
    32: 'Tomato Septorial Leaf Spot',
    33: 'Tomato Two-Spotted Spider Mite',
    34: 'Tomato Target Spot',
    35: 'Tomato Yellow Leaf Curl Virus',
    36: 'Tomato Mosaic Virus',
    37: 'Tomato Healthy'
}


def predict_image_class(image_path):
    try:
       
        img = Image.open(image_path)

        img = img.resize((255, 255))

        img_array = np.array(img)

        img_array = preprocess_input(img_array)

        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)

        predicted_class_index = np.argmax(prediction)
        
        confidence = np.max(prediction)

        predicted_class_label = ref[predicted_class_index]
        
        if confidence < 0.5:  # Adjust this threshold based on your model's output
           return jsonify({"prediction": "Not a plant leaf", "confidence": confidence})
       
        return jsonify({"prediction": predicted_class_label})
    except Exception as e:
        return jsonify({"error": str(e)})


@app.route('/')
def home():
    return render_template('index.html')


@app.route("/predict", methods=["POST"])
def predict():
    if "image" in request.files:
        image = request.files["image"]
        if image.filename != "":
            prediction_result = predict_image_class(image)
            return prediction_result
        else:
            return jsonify({"error": "No file selected."})
    return jsonify({"error": "Invalid request."})



@app.route('/news')
def products():
    return render_template('news.html')

@app.route('/dict')
def dictionary():
    return render_template('dict.html')

@app.route('/info')
def info():
    return render_template('info.html')




@app.route('/division/<disease_name>')
def division_page(disease_name):

    return render_template(f'{disease_name}.html')






if __name__ == "__main__":

    app.run(debug=True)
    subprocess.Popen(["python", "-m", "http.server", "8000"], cwd=os.getcwd())
