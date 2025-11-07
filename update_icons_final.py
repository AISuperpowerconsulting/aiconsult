import re

# Read the file
with open('aiconsult-minimal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update scissor icon with thicker strokes
thicker_scissor = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Top handle circle -->
                                <circle cx="10" cy="10" r="4" fill="none" stroke="#000000" stroke-width="3.5"/>
                                <!-- Bottom handle circle -->
                                <circle cx="10" cy="38" r="4" fill="none" stroke="#000000" stroke-width="3.5"/>
                                <!-- Top blade -->
                                <line x1="12" y1="12" x2="24" y2="24" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
                                <line x1="24" y1="24" x2="42" y2="6" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
                                <!-- Bottom blade -->
                                <line x1="12" y1="36" x2="24" y2="24" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
                                <line x1="24" y1="24" x2="42" y2="42" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
                                <!-- Center screw -->
                                <circle cx="24" cy="24" r="3" fill="#000000"/>
                                <!-- Dashed cutting line -->
                                <line x1="26" y1="24" x2="46" y2="24" stroke="#000000" stroke-width="3" stroke-dasharray="4,3" stroke-linecap="round"/>
                            </svg>'''

# Puzzle pieces icon for integration
puzzle_icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Left puzzle piece -->
                                <path d="M4 12 L4 28 L12 28 L12 30 Q12 34 16 34 Q20 34 20 30 L20 28 L28 28 L28 12 L20 12 L20 10 Q20 6 16 6 Q12 6 12 10 L12 12 Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                                
                                <!-- Right puzzle piece -->
                                <path d="M28 20 L28 36 L44 36 L44 28 L46 28 Q50 28 50 24 Q50 20 46 20 L44 20 L44 12 L36 12 L36 10 Q36 6 32 6 Q28 6 28 10 L28 12 Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linejoin="round" transform="translate(-8, 4)"/>
                                
                                <!-- Bottom puzzle piece -->
                                <path d="M12 28 L12 44 L28 44 L28 42 Q28 38 24 38 Q20 38 20 42 L20 44 L4 44 L4 36 L6 36 Q10 36 10 32 Q10 28 6 28 Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>'''

# Find and replace scissor icon
pattern1 = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 48 48"[^>]*>\s*<!-- Top handle circle -->.*?</svg>'
content = re.sub(pattern1, thicker_scissor, content, flags=re.DOTALL, count=1)

# Find and replace gears icon with puzzle
pattern2 = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 48 48"[^>]*>\s*<!-- Large gear.*?</svg>'
content = re.sub(pattern2, puzzle_icon, content, flags=re.DOTALL)

# Write back
with open('aiconsult-minimal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Icons updated: Thicker scissor + Puzzle pieces!")
