import os
import shutil
import glob

brain_dir = r"C:\Users\deepika\.gemini\antigravity\brain\65b9595f-b806-4076-b19e-f420d9a5f7f9"
assets_dir = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\assets"

mappings = {
    "ex_love_back": "ex_love_back.png",
    "negativity_removal": "negativity_removal.png",
    "love_spell_caster": "love_spell_caster.png",
    "husband_wife_problems": "husband_wife_problems.png",
    "marriage_problems": "marriage_problems.png",
    "black_magic_removal": "black_magic_removal.png",
    "evil_spirit_removal": "evil_spirit_removal.png",
    "evil_eye_removal": "evil_eye_removal.png",
    "spiritual_healing": "spiritual_healing.png",
    "psychic_reading": "psychic_reading.png",
    "love_marriage_solution": "love_marriage_solution.png",
    "breakup_solution": "breakup_solution.png"
}

def copy_assets():
    os.makedirs(assets_dir, exist_ok=True)
    for prefix, dest_name in mappings.items():
        # Search for pattern: brain_dir/prefix_*.png
        pattern = os.path.join(brain_dir, f"{prefix}_*.png")
        files = glob.glob(pattern)
        if files:
            # Get the most recent file if multiple exist
            files.sort(key=os.path.getmtime, reverse=True)
            src_file = files[0]
            dest_file = os.path.join(assets_dir, dest_name)
            try:
                shutil.copy(src_file, dest_file)
                print(f"Copied: {os.path.basename(src_file)} -> {dest_name}")
            except Exception as e:
                print(f"Error copying {prefix}: {e}")
        else:
            print(f"Warning: No file found for pattern: {prefix}_*.png")

if __name__ == "__main__":
    copy_assets()
