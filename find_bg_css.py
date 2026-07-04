filepath = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\index.css"
with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

bg_styles = []
capture = False
brace_count = 0

for line in lines:
    if ".space-bg" in line or ".planet" in line or ".nebula-glow" in line or ".stars-container" in line:
        capture = True
    if capture:
        bg_styles.append(line)
        brace_count += line.count('{')
        brace_count -= line.count('}')
        if brace_count == 0 and '{' not in line and '}' not in line and not line.strip():
            capture = False

print("".join(bg_styles[:100]))
