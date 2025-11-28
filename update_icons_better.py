import re

# Read the file
with open('aiconsult-minimal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Better scissor icon - classic scissors shape with dashed line
new_scissor_icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Upper blade handle -->
                                <circle cx="5" cy="5" r="2.5" fill="none" stroke="#000000" stroke-width="1.5"/>
                                <!-- Lower blade handle -->
                                <circle cx="5" cy="19" r="2.5" fill="none" stroke="#000000" stroke-width="1.5"/>
                                <!-- Upper blade -->
                                <path d="M 6.5 6 L 11 11 L 20 2" stroke="#000000" stroke-width="2" stroke-linecap="round" fill="none"/>
                                <!-- Lower blade -->
                                <path d="M 6.5 18 L 11 13 L 20 22" stroke="#000000" stroke-width="2" stroke-linecap="round" fill="none"/>
                                <!-- Pivot point -->
                                <circle cx="11" cy="12" r="1" fill="#000000"/>
                                <!-- Dashed cut line -->
                                <line x1="13" y1="12" x2="23" y2="12" stroke="#000000" stroke-width="1.5" stroke-dasharray="2,2" stroke-linecap="round"/>
                            </svg>'''

# Better gear icon - three interlocking gears
new_gear_icon = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Large gear (center-left) -->
                                <path d="M9 2l-.5 1.5-1.5-.3-.3 1.5-1.5.5.5 1.5L4 8l1.7 1.2-.5 1.5 1.5.3.3 1.5 1.5-.3L9 14l.5-1.5 1.5.3.3-1.5 1.5-.5-.5-1.5L14 8l-1.7-1.2.5-1.5-1.5-.3-.3-1.5-1.5.3L9 2zm0 3.5c1.38 0 2.5 1.12 2.5 2.5S10.38 10.5 9 10.5 6.5 9.38 6.5 8 7.62 5.5 9 5.5z"/>
                                <!-- Medium gear (top-right) -->
                                <path d="M16 6l-.4 1.2-1.2-.2-.2 1.2-1.2.4.4 1.2L12 11l1.4.8-.4 1.2 1.2.2.2 1.2 1.2-.2.4-1.2L18 12l-1.4-.8.4-1.2-1.2-.2-.2-1.2-1.2.2L16 6zm0 2.8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                                <!-- Small gear (bottom-right) -->
                                <path d="M16 14l-.3.9-.9-.15-.15.9-.9.3.3.9L13 18l1.05.6-.3.9.9.15.15.9.9-.15.3-.9L17 18l-1.05-.6.3-.9-.9-.15-.15-.9-.9.15L16 14zm0 2.1c.77 0 1.4.63 1.4 1.4s-.63 1.4-1.4 1.4-1.4-.63-1.4-1.4.63-1.4 1.4-1.4z"/>
                            </svg>'''

# Find and replace the scissor icon
scissor_pattern = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24"[^>]*>\s*<!-- Scissor blades -->.*?</svg>'
content = re.sub(scissor_pattern, new_scissor_icon, content, flags=re.DOTALL)

# Find and replace the gear icon
gear_pattern = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24"[^>]*>\s*<!-- Large gear -->.*?</svg>'
content = re.sub(gear_pattern, new_gear_icon, content, flags=re.DOTALL)

# Write back
with open('aiconsult-minimal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Icons updated successfully!")
