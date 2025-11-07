# Anleitung: Logo und Foto einfügen

## 1. Dein Foto speichern

Speichere dein professionelles Foto (das blaue Portrait) hier:
```
C:\Users\dd\OneDrive\Desktop\Phyton\aiconsult-redesign\public\images\adrian-althaus.jpg
```

**Schritte:**
1. Öffne das Foto das du mir geschickt hast
2. Speichere es als `adrian-althaus.jpg`
3. Lege es in den Ordner: `aiconsult-redesign/public/images/`

## 2. Logo verwenden

### Option A: Dein vorhandenes Logo nutzen
Kopiere eins deiner Logos (empfohlen: AIConsult_ch_blk-removebg.png) nach:
```
C:\Users\dd\OneDrive\Desktop\Phyton\aiconsult-redesign\public\images\logo.png
```

Dann im HTML (Zeile 756) ersetzen:
```html
<!-- VON: -->
<img src="data:image/svg+xml;base64,..." alt="AIConsult.ch Logo">

<!-- ZU: -->
<img src="public/images/logo.png" alt="AIConsult.ch Logo">
```

### Option B: Logo aus deinem Logos-Ordner kopieren

**Windows Command Prompt:**
```bash
cd C:\Users\dd\OneDrive\Desktop\Phyton\aiconsult-redesign
copy "C:\Users\dd\OneDrive\Desktop\1 Projekte\AIconsult.ch\AIConsult.ch\Logos\AIConsult_ch_blk-removebg.png" "public\images\logo.png"
```

## 3. HTML aktualisieren

Im File `enterprise-design.html`:

**Logo (Zeile ~756):**
```html
<a href="#" class="nav-logo">
    <img src="public/images/logo.png" alt="AIConsult.ch Logo">
</a>
```

**Foto (Zeile ~810 und ~954):**
```html
<img src="public/images/adrian-althaus.jpg" alt="Adrian Althaus - KI-Berater">
```

## 4. Testen

Öffne `enterprise-design.html` im Browser und überprüfe:
- ✓ Logo erscheint in der Navigation
- ✓ Dein Foto erscheint im Hero-Bereich
- ✓ Dein Foto erscheint im "Über mich" Bereich

## Schnell-Kommando zum Kopieren

```bash
# Logo kopieren
copy "C:\Users\dd\OneDrive\Desktop\1 Projekte\AIconsult.ch\AIConsult.ch\Logos\AIConsult_ch_blk-removebg.png" "C:\Users\dd\OneDrive\Desktop\Phyton\aiconsult-redesign\public\images\logo.png"

# Foto speichern (manuell aus deinem Original-Foto)
# Speichere dein blaues Portrait-Foto als:
# C:\Users\dd\OneDrive\Desktop\Phyton\aiconsult-redesign\public\images\adrian-althaus.jpg
```
