import re

# Read the file
with open('aiconsult-minimal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Much better scissor icon - classic scissors with clear dashed line
better_scissor = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Top handle circle -->
                                <circle cx="10" cy="10" r="4" fill="none" stroke="#000000" stroke-width="2.5"/>
                                <!-- Bottom handle circle -->
                                <circle cx="10" cy="38" r="4" fill="none" stroke="#000000" stroke-width="2.5"/>
                                <!-- Top blade -->
                                <line x1="12" y1="12" x2="24" y2="24" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
                                <line x1="24" y1="24" x2="42" y2="6" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
                                <!-- Bottom blade -->
                                <line x1="12" y1="36" x2="24" y2="24" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
                                <line x1="24" y1="24" x2="42" y2="42" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
                                <!-- Center screw -->
                                <circle cx="24" cy="24" r="2.5" fill="#000000"/>
                                <!-- Dashed cutting line -->
                                <line x1="26" y1="24" x2="46" y2="24" stroke="#000000" stroke-width="2.5" stroke-dasharray="4,3" stroke-linecap="round"/>
                            </svg>'''

# Much better gears icon - three interlocking gears like the reference
better_gears = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Large gear (left) -->
                                <g transform="translate(14, 18)">
                                    <circle cx="0" cy="0" r="6" fill="#fff" stroke="#000000" stroke-width="2"/>
                                    <circle cx="0" cy="0" r="3" fill="#000000"/>
                                    <!-- Teeth -->
                                    <rect x="-2" y="-11" width="4" height="6" rx="1" fill="#000000"/>
                                    <rect x="-2" y="5" width="4" height="6" rx="1" fill="#000000"/>
                                    <rect x="-11" y="-2" width="6" height="4" ry="1" fill="#000000"/>
                                    <rect x="5" y="-2" width="6" height="4" ry="1" fill="#000000"/>
                                    <rect x="-8.5" y="-8.5" width="5" height="4" rx="1" transform="rotate(-45 -6 -6)" fill="#000000"/>
                                    <rect x="3.5" y="-8.5" width="5" height="4" rx="1" transform="rotate(45 6 -6)" fill="#000000"/>
                                    <rect x="-8.5" y="4.5" width="5" height="4" rx="1" transform="rotate(45 -6 6)" fill="#000000"/>
                                    <rect x="3.5" y="4.5" width="5" height="4" rx="1" transform="rotate(-45 6 6)" fill="#000000"/>
                                </g>
                                
                                <!-- Medium gear (top right) -->
                                <g transform="translate(32, 12)">
                                    <circle cx="0" cy="0" r="5" fill="#fff" stroke="#000000" stroke-width="2"/>
                                    <circle cx="0" cy="0" r="2.5" fill="#000000"/>
                                    <!-- Teeth -->
                                    <rect x="-1.5" y="-9" width="3" height="5" rx="0.8" fill="#000000"/>
                                    <rect x="-1.5" y="4" width="3" height="5" rx="0.8" fill="#000000"/>
                                    <rect x="-9" y="-1.5" width="5" height="3" ry="0.8" fill="#000000"/>
                                    <rect x="4" y="-1.5" width="5" height="3" ry="0.8" fill="#000000"/>
                                    <rect x="-7" y="-7" width="4" height="3" rx="0.8" transform="rotate(-45 -5 -5)" fill="#000000"/>
                                    <rect x="3" y="-7" width="4" height="3" rx="0.8" transform="rotate(45 5 -5)" fill="#000000"/>
                                    <rect x="-7" y="4" width="4" height="3" rx="0.8" transform="rotate(45 -5 5)" fill="#000000"/>
                                    <rect x="3" y="4" width="4" height="3" rx="0.8" transform="rotate(-45 5 5)" fill="#000000"/>
                                </g>
                                
                                <!-- Small gear (bottom right) -->
                                <g transform="translate(34, 32)">
                                    <circle cx="0" cy="0" r="4" fill="#fff" stroke="#000000" stroke-width="2"/>
                                    <circle cx="0" cy="0" r="2" fill="#000000"/>
                                    <!-- Teeth -->
                                    <rect x="-1.2" y="-7" width="2.4" height="4" rx="0.6" fill="#000000"/>
                                    <rect x="-1.2" y="3" width="2.4" height="4" rx="0.6" fill="#000000"/>
                                    <rect x="-7" y="-1.2" width="4" height="2.4" ry="0.6" fill="#000000"/>
                                    <rect x="3" y="-1.2" width="4" height="2.4" ry="0.6" fill="#000000"/>
                                    <rect x="-5.5" y="-5.5" width="3.5" height="2.4" rx="0.6" transform="rotate(-45 -4 -4)" fill="#000000"/>
                                    <rect x="2" y="-5.5" width="3.5" height="2.4" rx="0.6" transform="rotate(45 4 -4)" fill="#000000"/>
                                    <rect x="-5.5" y="3" width="3.5" height="2.4" rx="0.6" transform="rotate(45 -4 4)" fill="#000000"/>
                                    <rect x="2" y="3" width="3.5" height="2.4" rx="0.6" transform="rotate(-45 4 4)" fill="#000000"/>
                                </g>
                            </svg>'''

# Find and replace scissor icon
pattern1 = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24"[^>]*>\s*<!-- Upper blade handle -->.*?</svg>'
content = re.sub(pattern1, better_scissor, content, flags=re.DOTALL)

# Find and replace gears icon
pattern2 = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24"[^>]*>\s*<!-- Large gear \(left\) -->.*?</svg>'
content = re.sub(pattern2, better_gears, content, flags=re.DOTALL)

# Alternative patterns in case the comments changed
if '<!-- Upper blade handle -->' not in content:
    pattern1_alt = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24"[^>]*fill="#000000"[^>]*>\s*<circle cx="5" cy="5".*?</svg>'
    content = re.sub(pattern1_alt, better_scissor, content, flags=re.DOTALL, count=1)

if '<!-- Large gear (left) -->' not in content:
    pattern2_alt = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24"[^>]*>\s*<!-- Large gear -->.*?</svg>'
    content = re.sub(pattern2_alt, better_gears, content, flags=re.DOTALL)

# Write back
with open('aiconsult-minimal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Better icons created!")
