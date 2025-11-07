import re

# Read the file
with open('aiconsult-minimal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update scissor icon - shorter and thinner dashed line
adjusted_scissor = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#000000" style="width: 100%; height: 100%;">
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
                                <!-- Dashed cutting line - shorter and thinner -->
                                <line x1="28" y1="24" x2="42" y2="24" stroke="#000000" stroke-width="2" stroke-dasharray="3,2.5" stroke-linecap="round"/>
                            </svg>'''

# Find and replace scissor icon
pattern = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 48 48"[^>]*>\s*<!-- Top handle circle -->.*?</svg>'
content = re.sub(pattern, adjusted_scissor, content, flags=re.DOTALL, count=1)

# Write back
with open('aiconsult-minimal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Scissor updated: Shorter and thinner dashed line!")
