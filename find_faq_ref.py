filepath = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\pages\Home.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "openFaq" in line:
        print(f"Line {i+1}: {line.strip()}")
