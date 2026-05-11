import cv2
import numpy as np
import os

image_dir = r'd:\work\images'

photos = [
    ('front.jpg', 'Yuan Gao (PI)'),
    ('lin-wang.jpg', 'Lin Wang'),
    ('baozhe-zhang.jpg', 'Baozhe Zhang'),
    ('peng-ju.jpg', 'Peng Ju'),
]

print("Image analysis - subject vs background ratio:")
print("=" * 60)

subject_ratios = {}

for filename, name in photos:
    filepath = os.path.join(image_dir, filename)
    if not os.path.exists(filepath):
        print(f"  {filename}: File not found")
        continue

    img = cv2.imread(filepath)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Use edge detection to find the subject
    edges = cv2.Canny(gray, 50, 150)

    # Dilate to connect edges
    kernel = np.ones((5,5),np.uint8)
    dilated_edges = cv2.dilate(edges, kernel, iterations=2)
    eroded_edges = cv2.erode(dilated_edges, kernel, iterations=1)

    # Find contours
    contours, _ = cv2.findContours(eroded_edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Get the largest contour (likely the person)
    if contours:
        largest_contour = max(contours, key=cv2.contourArea)
        subject_area = cv2.contourArea(largest_contour)
        total_area = img.shape[0] * img.shape[1]
        ratio = subject_area / total_area * 100

        subject_ratios[filename] = ratio

        x, y, w, h = cv2.boundingRect(largest_contour)

        print(f"  {filename} ({name}):")
        print(f"    Image size: {img.shape[1]}x{img.shape[0]}")
        print(f"    Subject bounding box: ({x}, {y}), size: {w}x{h}")
        print(f"    Subject area ratio: {ratio:.2f}%")
        print()
    else:
        print(f"  {filename} ({name}): No subject detected")
        print()

# Calculate scale factors
print("\nScale factor analysis:")
print("=" * 60)
if subject_ratios:
    max_ratio = max(subject_ratios.values())
    for filename, ratio in subject_ratios.items():
        # Scale factor = sqrt(max_ratio / ratio) because we want to match the subject size
        scale = (max_ratio / ratio) ** 0.5
        print(f"  {filename}: subject_ratio={ratio:.2f}%, scale_factor={scale:.2f}x")
