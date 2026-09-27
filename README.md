# 🎥 DeepVideoRestoration

## Deep Learning Framework for Intelligent Video Restoration, Enhancement and Visual Reconstruction for Degraded Videos

DeepVideoRestoration is a web-based AI application designed for restoring and enhancing degraded visual content, including grayscale images and videos.

The system provides a user-friendly Django web interface where users can upload images or videos and process them using Python, OpenCV and pre-trained deep learning models.

---

## 📌 Project Overview

The proposed system uses a Django-based web platform for practical image and video colorization.

Instead of training a deep learning model from scratch, the system uses a pre-trained Caffe CNN model and OpenCV's `cv2.dnn` module to process video frames and generate colorized output.

The application also provides user registration and login functionality through the Django web interface.

---

## 🎯 Objectives

- Restore and enhance degraded visual content
- Convert grayscale images into color
- Convert grayscale videos into color
- Process video frames using deep learning
- Provide a simple and user-friendly web interface
- Allow users to upload media files
- Generate processed output files
- Provide practical deployment using pre-trained models

---

## ✨ Key Features

- 🖼️ Image Colorization
- 🎥 Video Colorization
- 🤖 Deep Learning Based Processing
- 🌈 Grayscale-to-Color Conversion
- 📤 Image and Video Upload
- 📥 Processed Output
- 🔐 User Registration
- 🔑 User Login
- 🌐 Django Web Interface
- ⚡ OpenCV Frame Processing
- 🧠 Pre-trained Caffe CNN Model
- 🎨 Visual Enhancement

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │        User          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Django Web UI      │
                    └──────────┬───────────┘
                               │
                    Upload Image / Video
                               │
                               ▼
                    ┌──────────────────────┐
                    │  Media Processing    │
                    │       OpenCV         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Pre-trained Caffe    │
                    │      CNN Model       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Frame-wise Processing│
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Enhanced / Colorized │
                    │       Output         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   User Downloads     │
                    │   Processed Result   │
                    └──────────────────────┘
```

---

## 🔄 Working Process

### Step 1 — User Registration / Login

The user can create an account and log into the DeepVideoRestoration application.

### Step 2 — Upload Media

The user uploads a grayscale image or video through the Django web interface.

### Step 3 — Media Processing

The uploaded media is processed using Python and OpenCV.

### Step 4 — Deep Learning Colorization

The pre-trained Caffe CNN model predicts color information from grayscale content.

### Step 5 — Video Frame Processing

For videos, individual frames are processed and colorized.

### Step 6 — Output Generation

The processed frames are reconstructed to generate the final video output.

### Step 7 — Result

The enhanced or colorized output is made available to the user.

---

## 🧠 Algorithms and Techniques

### CNN Colorization

Convolutional Neural Networks are used for predicting color information from grayscale images.

### ResNet

ResNet can be used for deep feature extraction in image restoration and colorization tasks.

### GAN

Generative Adversarial Networks can be used to generate realistic visual results.

### Caffe Pre-trained Model

A pre-trained Caffe model is used for practical image colorization without requiring model training from scratch.

### CIELAB Color Space

The CIELAB color space separates lightness information from color information and is useful for image colorization.

### OpenCV

OpenCV is used for image and video processing, including frame extraction and processing.

### Frame-wise Video Colorization

Video frames are processed individually and reconstructed to generate the processed video.

### Temporal Consistency

Temporal consistency techniques can help maintain consistent visual results across consecutive video frames.

### Optical Flow

Optical flow can be used to analyze motion between consecutive frames.

### Attention Mechanisms

Attention mechanisms can be used to focus on important visual features during restoration and enhancement.

---

## 💻 Technologies Used

| Technology | Purpose |
|------------|---------|
| Python | Backend and processing |
| Django | Web application framework |
| OpenCV | Image and video processing |
| NumPy | Numerical operations |
| Pandas | Data processing |
| Scikit-learn | Machine learning support |
| Caffe | Pre-trained deep learning model |
| CNN | Image colorization |
| SQLite | Database |
| HTML | Web structure |
| CSS | User interface styling |
| JavaScript | Frontend interaction |
| VS Code / PyCharm | Development environment |

---

## 📁 Project Structure

```text
DeepVideoRestoration/
│
├── video_restoration/
│   │
│   ├── colorizer/
│   │   ├── migrations/
│   │   ├── templates/
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── ...
│   │
│   ├── restoration_app/
│   │
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   │
│   ├── templates/
│   │   ├── home.html
│   │   ├── login.html
│   │   └── register.html
│   │
│   ├── video_restoration/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   │
│   └── manage.py
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/manushakarre79/DeepVideoRestoration.git
```

### 2. Go to the Project Directory

```bash
cd DeepVideoRestoration/video_restoration
```

### 3. Install Dependencies

```bash
pip install django opencv-python numpy pandas scikit-learn
```

### 4. Run Database Migrations

```bash
python manage.py migrate
```

### 5. Start the Django Server

```bash
python manage.py runserver
```

### 6. Open the Application

Open your browser and visit:

```text
http://127.0.0.1:8000/
```

---

## 🖥️ Application Pages

### 🏠 Home Page

The home page provides information about the DeepVideoRestoration project, its features, workflow and purpose.

### 🔐 Login Page

Registered users can securely log into the application.

### 📝 Registration Page

New users can create an account using the registration page.

### 🎥 Video Restoration

Users can upload degraded or grayscale videos for processing and restoration.

### 🖼️ Image Colorization

Users can process grayscale images and generate colorized results.

---

## 📸 Screenshots

> Add your project screenshots in this section after uploading them to GitHub.

### Home Page

```text
Add your Home Page screenshot here
```

### Registration Page

```text
Add your Registration Page screenshot here
```

### Login Page

```text
Add your Login Page screenshot here
```

### Video Processing

```text
Add your Video Processing screenshot here
```

### Output

```text
Add your final processed-output screenshot here
```

---

## 🛠️ Advantages

- User-friendly Django interface
- Uses pre-trained deep learning models
- Does not require model training from scratch
- Supports image and video processing
- Frame-wise video processing
- Practical web-based deployment
- Includes user registration and login
- Uses OpenCV for media processing

---

## ⚠️ Limitations

- Processing large videos may require more time.
- Deep learning processing can require significant computational resources.
- Large model files may require additional storage.
- Output quality depends on the input media and model.
- Frame-wise processing can increase video processing time.

---

## 🔮 Future Scope

- Real-time video restoration
- Improved temporal consistency
- Advanced attention mechanisms
- GPU acceleration
- Higher-quality restoration
- Cloud-based processing
- Mobile application support
- Improved video restoration models

---

## 📋 System Requirements

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
- SQLite
- VS Code / PyCharm

---

## 📚 References

1. Zhang et al. — *Colorful Image Colorization*, 2016.
2. *Deep Exemplar-Based Video Colorization*, 2019.
3. Research on temporal consistency for video colorization.
4. DeOldify — Deep learning-based image and video colorization.
5. Recent research surveys on deep learning-based image and video restoration.

---

## 👩‍💻 Author

**Karre Manusha**

B.Tech - Computer Science and Engineering

---



## 📌 Project Summary

**DeepVideoRestoration** combines Django, Python, OpenCV and pre-trained deep learning models to provide a practical web-based platform for image colorization and video restoration.

The proposed system focuses on making deep-learning-based visual restoration easier to access through a user-friendly web application.
