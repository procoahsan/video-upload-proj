from flask import Flask , request , jsonify

app = Flask(__name__)






@app.route('/video' , methods = ['POST'])
def uploadVideo():
    if 'video' not in request.files:
        return jsonify({'error': 'No file part'})

    video_file = request.files['video']

    if video_file.filename == '':
        return jsonify({'error': 'No selected file'})

    # You can save the video file to a specific directory or process it as needed.
    # For example, you can save it to the 'uploads' directory.
    video_file.save('uploads/' + video_file.filename)

    return jsonify({'message': 'File uploaded successfully'})


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
