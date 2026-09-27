# Deep Learning Framework for Intelligent Video Restoration, Enhancement and Visual Reconstruction for Degraded Videos

## 📌 Project Overview

DeepVideoRestoration is an AI-powered web-based application designed to
restore and enhance degraded videos and colorize grayscale images and
videos.

The system uses a Django-based web interface with Python, OpenCV and
pre-trained deep learning models to process uploaded media.

---

## 🎯 Objectives

- Restore degraded visual content
- Convert grayscale images and videos into color
- Enhance video quality
- Provide an easy-to-use web interface
- Process video frame-by-frame
- Allow users to upload and download processed media

---

## ✨ Key Features

- 🖼️ Image Colorization
- 🎥 Video Colorization
- 🤖 AI-based Processing
- 🔐 User Registration and Login
- 📤 Image/Video Upload
- 📥 Processed File Download
- 🌐 Django Web Interface
- ⚡ OpenCV-based Frame Processing
- 🎨 Automatic Color Enhancement

---

## 🧠 Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend and AI processing |
| Django | Web application |
| OpenCV | Image and video processing |
| NumPy | Numerical processing |
| Caffe | Pre-trained colorization model |
| CNN | Image colorization |
| SQLite | Database |
| HTML | Web interface |
| CSS | Website styling |
| JavaScript | Frontend interaction |

---

## 🏗️ System Architecture

User
↓
Django Web Interface
↓
Upload Image / Video
↓
OpenCV Processing
↓
Pre-trained Caffe CNN
↓
Frame-by-Frame Colorization
↓
Enhanced Output
↓
Download Result

---

## 🔄 Workflow

1. User registers or logs into the system.
2. User uploads an image or video.
3. The system reads the uploaded media.
4. Grayscale frames are extracted from the video.
5. The pre-trained deep learning model processes the frames.
6. Color information is predicted.
7. The processed frames are reconstructed into a video.
8. The final output is made available to the user.

---

## 🧮 Algorithms

### CNN Colorization
Used to predict color information from grayscale images.

### ResNet
Used for deep feature extraction.

### GAN
Can be used to generate realistic colorized results.

### Caffe Pre-trained Model
Used for practical image colorization without training a model from scratch.

### CIELAB Color Space
Used for separating lightness from color information.

### OpenCV
Used for image and video processing.

---

## 📁 Project Structure

DeepVideoRestoration/

└── video_restoration/

    ├── colorizer/

    ├── restoration_app/

    ├── static/

    │   ├── css/

    │   └── js/

    ├── templates/

    ├── video_restoration/

    ├── manage.py

    └── README.md

---

## 💻 System Requirements

### Hardware

- Intel Core i7 processor
- 8 GB RAM
- 512 GB storage
- Keyboard and mouse

### Software

- Windows 10 or later
- Python
- Django
- OpenCV
- NumPy
- Pandas
- Scikit-learn
- VS Code / PyCharm
- SQLite

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/manushakarre79/DeepVideoRestoration.git

Go to the project directory:
cd DeepVideoRestoration/video_restoration

Install dependencies:
pip install django opencv-python numpy pandas scikit-learn

Run migrations:
python manage.py migrate

Start the server:
python manage.py runserver

Open:
http://127.0.0.1:8000/
---

##🚀 Advantages
User-friendly Django interface
Uses pre-trained deep learning models
Does not require model training from scratch
Supports image and video processing
Frame-wise video processing
Suitable for practical deployment
Includes user registration and login


##🔮 Future Scope
Real-time video restoration
Improved temporal consistency
Advanced attention mechanisms
GPU acceleration
Higher-quality restoration
Cloud-based processing
Mobile application support

👩‍💻 Author

Karre Manusha
B.Tech – Computer Science and Engineering
