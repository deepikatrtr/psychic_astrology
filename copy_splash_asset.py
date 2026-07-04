import shutil
import os

source = r"C:\Users\deepika\.gemini\antigravity\brain\65b9595f-b806-4076-b19e-f420d9a5f7f9\media__1782993473122.jpg"
destination = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\assets\splash_guru.jpg"

try:
    shutil.copy(source, destination)
    print("Success: Copied uploaded splash guru image to assets!")
except Exception as e:
    print(f"Error copying file: {e}")
