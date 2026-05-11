import cv2
import os

# Load cascade for face detection
cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
face_cascade = cv2.CascadeClassifier(cascade_path)

# Photos to analyze
photos = [
    ('front.jpg', 'Yuan Gao (PI)'),
    ('lin-wang.jpg', 'Lin Wang'),
    ('baozhe-zhang.jpg', 'Baozhe Zhang'),
    ('peng-ju.jpg', 'Peng Ju'),
]

image_dir = r'd:\work\images'

print("Face detection analysis:")
print("=" * 60)

for filename, name in photos:
    filepath = os.path.join(image_dir, filename)
    if not os.path.exists(filepath):
        print(f"  {filename}: File not found")
        continue

    img = cv2.imread(filepath)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

    img_area = img.shape[0] * img.shape[1]

    if len(faces) == 0:
        print(f"  {filename} ({name}): No face detected")
        continue

    # Get the largest face
    largest_face = max(faces, key=lambda f: f[2] * f[3])
    x, y, w, h = largest_face
    face_area = w * h

    # Head is roughly 1.5x the face bounding box
    head_area_est = face_area * 1.5
    head_ratio = head_area_est / img_area * 100

    print(f"  {filename} ({name}):")
    print(f"    Image size: {img.shape[1]}x{img.shape[0]}")
    print(f"    Face detected at: ({x}, {y}), size: {w}x{h}")
    print(f"    Face area ratio: {face_area/img_area*100:.2f}%")
    print(f"    Estimated head area ratio: {head_ratio:.2f}%")
    print()
