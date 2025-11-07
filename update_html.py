import re

# Read the file
with open('aiconsult-minimal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Change 1: Update "Wir bieten" title - remove arrow SVG and add highlight span
old_title = r'<h3 style="font-size: var\(--text-3xl\); margin: var\(--space-3xl\) 0 var\(--space-xl\) 0; display: flex; align-items: center; gap: var\(--space-md\);">\s*<svg[^>]*>.*?</svg>\s*Wir bieten\s*</h3>'
new_title = '<h3 style="font-size: var(--text-3xl); margin: var(--space-3xl) 0 var(--space-xl) 0;">\n                    <span class="highlight">Wir bieten</span>\n                </h3>'
content = re.sub(old_title, new_title, content, flags=re.DOTALL)

# Change 2: Update scissor icon for "Massgeschneiderte KI-Strategie"
old_scissor = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24" fill="#000000" style="width: 100%; height: 100%;">\s*<path d="M9\.64 7\.64c\.23-\.5\.36-1\.05\.36-1\.64 0-2\.21-1\.79-4-4-4S2 3\.79 2 6s1\.79 4 4 4c\.59 0 1\.14-\.13 1\.64-\.36L10 12l-2\.36 2\.36C7\.14 14\.13 6\.59 14 6 14c-2\.21 0-4 1\.79-4 4s1\.79 4 4 4 4-1\.79 4-4c0-\.59-\.13-1\.14-\.36-1\.64L12 14l7 7h3v-1L9\.64 7\.64zM6 8c-1\.1 0-2-\.89-2-2s\.9-2 2-2 2 \.89 2 2-\.9 2-2 2zm0 12c-1\.1 0-2-\.89-2-2s\.9-2 2-2 2 \.89 2 2-\.9 2-2 2zm6-7\.5c-\.28 0-\.5-\.22-\.5-\.5s\.22-\.5\.5-\.5\.5\.22\.5\.5-\.22\.5-\.5\.5zM19 3l-6 6 2 2 7-7V3z"/>\s*</svg>'
new_scissor = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" style="width: 100%; height: 100%;">
                                <!-- Scissor blades -->
                                <circle cx="6" cy="6" r="2" fill="#000000"/>
                                <circle cx="6" cy="18" r="2" fill="#000000"/>
                                <line x1="6" y1="6" x2="12" y2="12" stroke="#000000" stroke-width="1.5"/>
                                <line x1="6" y1="18" x2="12" y2="12" stroke="#000000" stroke-width="1.5"/>
                                <line x1="12" y1="12" x2="20" y2="4" stroke="#000000" stroke-width="1.5"/>
                                <line x1="12" y1="12" x2="20" y2="20" stroke="#000000" stroke-width="1.5"/>
                                <!-- Dashed cut line -->
                                <line x1="4" y1="12" x2="20" y2="12" stroke="#000000" stroke-width="1.5" stroke-dasharray="2,2"/>
                            </svg>'''
content = re.sub(old_scissor, new_scissor, content, flags=re.DOTALL)

# Change 3: Update gear icon for "Reibungslose Integration"
old_gear = r'<svg xmlns="http://www\.w3\.org/2000/svg" viewBox="0 0 24 24" fill="#000000" style="width: 100%; height: 100%;">\s*<path d="M12 2C6\.48 2 2 6\.48 2 12s4\.48 10 10 10 10-4\.48 10-10S17\.52 2 12 2zm-2 14\.5v-9l6 4\.5-6 4\.5z M19\.43 12\.935c-\.37-\.063-\.78-\.171-1\.212-\.311l\.636-1\.88c\.349\.113\.697\.211 1\.036\.278\.37\.074\.735\.11 1\.092\.11\.478 0 \.84-\.084 1\.08-\.25\.243-\.169\.363-\.398\.363-\.689 0-\.212-\.062-\.389-\.185-\.53-\.122-\.143-\.304-\.264-\.545-\.365l-1\.24-\.507c-\.654-\.271-1\.147-\.604-1\.48-1-\.33-\.395-\.497-\.887-\.497-1\.476 0-\.757\.273-1\.362\.816-1\.818\.546-\.456 1\.271-\.684 2\.177-\.684\.402 0 \.81\.046 1\.222\.136\.415\.091\.806\.214 1\.173\.367l-\.571 1\.88c-\.328-\.119-\.636-\.211-\.923-\.278-\.285-\.067-\.565-\.1-\.838-\.1-\.474 0-\.833\.083-1\.076\.25-\.24\.164-\.361\.394-\.361\.687 0 \.205\.063\.378\.188\.517\.125\.139\.313\.261\.562\.366l1\.242\.508c\.653\.271 1\.142\.603 1\.469\.997\.327\.394\.49\.885\.49 1\.473 0 \.762-\.272 1\.372-\.816 1\.832-\.541\.457-1\.274\.686-2\.195\.686-\.461 0-\.926-\.052-1\.394-\.157z"/>\s*</svg>'
new_gear = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" style="width: 100%; height: 100%;">
                                <!-- Large gear -->
                                <path d="M12 2l-1 3.5-3-1.5-.5 3.5-3.5.5 1.5 3L2 12l3.5 1-1.5 3 3.5.5.5 3.5 3-1.5L12 22l1-3.5 3 1.5.5-3.5 3.5-.5-1.5-3L22 12l-3.5-1 1.5-3-3.5-.5-.5-3.5-3 1.5L12 2zm0 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>
                                <!-- Small gear interlocking -->
                                <circle cx="18" cy="18" r="1.5" fill="#000000"/>
                                <circle cx="16.5" cy="16.5" r="0.8" fill="#fff"/>
                                <path d="M18 14.5l-.3 1-.8-.4-.2 1-.8.2.4.8-1 .3.3 1-.8.4.2.8-1 .2-.4-.8-1 .3-.3-1-.8-.4-.2-.8-1-.2.4-.8 1-.3.3-1 .8-.4.2-.8 1-.2.4.8 1-.3z" fill="#000000"/>
                            </svg>'''
content = re.sub(old_gear, new_gear, content, flags=re.DOTALL)

# Write back
with open('aiconsult-minimal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated successfully!")
