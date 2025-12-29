# 🎥 Microsoft Clarity Setup - Heatmaps & Session Recordings

## Was ist Microsoft Clarity?

**Microsoft Clarity** ist ein kostenloses Tool für User-Behavior-Analytics:
- ✅ **100% kostenlos** (keine Limits, keine versteckten Kosten)
- ✅ **DSGVO-konform** (keine personenbezogenen Daten gespeichert)
- ✅ **Heatmaps** - sieh, wo User klicken, scrollen, bewegen
- ✅ **Session Recordings** - schau User beim Surfen zu (anonymisiert)
- ✅ **Perfekte Ergänzung zu GA4** (andere Perspektive auf User-Verhalten)

**Warum ist das wertvoll?**
- Siehst du, wo User "stecken bleiben"
- Findest du UI-Probleme, die du sonst nicht bemerkst
- Verstehst du, warum User Formulare abbrechen
- Identifizierst du, welche Sections ignoriert werden

---

## 🚀 Setup in 3 Minuten

### Schritt 1: Microsoft Clarity Konto erstellen

1. Gehe zu **[clarity.microsoft.com](https://clarity.microsoft.com)**
2. Klicke auf **"Sign up"**
3. Melde dich an mit:
   - Microsoft-Konto (empfohlen) ODER
   - Google-Konto ODER
   - GitHub-Konto

### Schritt 2: Neues Projekt anlegen

1. Nach Login: Klicke **"Add new project"**
2. Fülle aus:
   - **Name:** `AIConsult.ch`
   - **Website URL:** `https://www.aiconsult.ch`
   - **Site category:** `Business Services` oder `Consulting`
3. Klicke **"Add new project"**

### Schritt 3: Project ID kopieren

Nach Projekterstellung siehst du einen **Setup-Screen**.

1. Du siehst einen Code-Schnipsel, der so aussieht:
   ```javascript
   (function(c,l,a,r,i,t,y){
       ...
   })(window, document, "clarity", "script", "ABC123XYZ");
   ```

2. **Kopiere die ID am Ende** (z.B. `ABC123XYZ`)
   - Format ist meist: 10-12 alphanumerische Zeichen
   - Beispiel: `n8gkp9q1r5` oder `abc123def456`

### Schritt 4: ID in Code einfügen

**Wichtig:** Der Clarity-Code ist bereits in deiner `index.html` eingebaut!

Du musst nur noch die **Project ID** einfügen:

1. Öffne die Datei:
   ```
   index.html
   ```

2. Suche nach dieser Zeile (ca. Zeile 32):
   ```javascript
   })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
   ```

3. Ersetze `YOUR_CLARITY_PROJECT_ID` mit deiner echten ID:
   ```javascript
   })(window, document, "clarity", "script", "n8gkp9q1r5");
   ```

4. Speichern und Website neu hochladen

### Schritt 5: Verifizierung (nach 5 Min.)

1. Gehe zurück zu [clarity.microsoft.com](https://clarity.microsoft.com)
2. Öffne dein Projekt "AIConsult.ch"
3. Clarity sollte nach 5 Minuten **"Recording"** anzeigen (grüner Status)
4. Falls nicht: Check ob ID richtig eingefügt wurde

---

## 📊 Clarity nutzen - Die wichtigsten Features

### 1. **Dashboard (Übersicht)**

Sobald Clarity läuft, siehst du:

| Metrik | Was es bedeutet |
|--------|-----------------|
| **Sessions** | Anzahl Besucher |
| **Recordings** | Anzahl aufgezeichneter Sessions |
| **Dead clicks** | User klickt auf nicht-klickbare Elemente (UI-Problem!) |
| **Rage clicks** | User klickt mehrfach frustriert (zeigt Bugs!) |
| **Excessive scrolling** | User scrollt vor und zurück (findet nicht, was er sucht) |
| **Quick backs** | User kommt und geht sofort (schlechte Landing Page?) |

**Tipp:** Hohe "Dead Clicks" oder "Rage Clicks" zeigen UI-Probleme!

### 2. **Heatmaps (Klick-, Scroll-, Area-Maps)**

**So kommst du hin:**
```
Clarity Dashboard → Heatmaps (linkes Menü)
```

**Arten von Heatmaps:**

#### **Click Heatmap**
- Zeigt **wo User klicken** (rot = viele Klicks, blau = wenige)
- **Nutzen:**
  - Sieh, ob wichtige CTAs geklickt werden
  - Finde "Dead Clicks" (User klickt auf Nicht-Links)
  - Optimiere Button-Platzierung

#### **Scroll Heatmap**
- Zeigt **wie weit User scrollen** (Prozent der User pro Section)
- **Nutzen:**
  - Sieh, welche Sections kaum gesehen werden
  - Optimiere Content-Reihenfolge
  - Erkenne "Scroll-Stopps" (wo User aufhören)

#### **Area Heatmap**
- Zeigt **welche Bereiche beachtet werden** (Mouse-Bewegung)
- **Nutzen:**
  - Sieh, was User lesen vs. überspringen
  - Optimiere wichtige Sections

**Praxis-Beispiel:**
- Du siehst: 70% der User scrollen nicht bis "Angebote"
- → Aktion: "Angebote"-Section weiter nach oben schieben

### 3. **Session Recordings (User anschauen)**

**So kommst du hin:**
```
Clarity Dashboard → Recordings (linkes Menü)
```

**Was du siehst:**
- Video-Replay wie User durch deine Seite navigiert (anonymisiert)
- Mouse-Bewegungen, Klicks, Scroll-Verhalten, Formular-Eingaben (Text wird ausgeblendet!)

**Filter nutzen:**

| Filter | Nutzen |
|--------|--------|
| **Rage Clicks** | User, die frustriert mehrfach klicken |
| **Dead Clicks** | User, die auf Nicht-Links klicken |
| **Error Clicks** | JavaScript-Fehler während Session |
| **Form Abandonment** | User, die Formular starten aber nicht absenden |

**Praxis-Workflow:**
1. Filtere nach **"Form Abandonment"**
2. Schau dir 5-10 Recordings an
3. Sieh, bei welchem Formular-Feld User abbrechen
4. Optimiere dieses Feld (z.B. Pflichtfeld entfernen, besseren Platzhalter)

### 4. **Insights (Automatische Probleme)**

Clarity findet automatisch:
- **Excessive Scrolling** → User findet nicht, was er sucht
- **Rage Clicks** → User ist frustriert, etwas funktioniert nicht
- **Dead Clicks** → UI ist unklar (User klickt auf Text statt Button)
- **Quick Backs** → User verlässt Seite sofort (schlechte Landing Page)

**Nutzen:**
- Lass Clarity nach Problemen suchen, statt selbst zu suchen
- Priorisiere Fixes nach Häufigkeit

---

## 🎯 Konkrete Use-Cases für AIConsult.ch

### **Use-Case 1: Formular-Optimierung**

**Frage:** Warum füllen User das Formular nicht aus?

**Clarity-Lösung:**
1. Gehe zu **Recordings**
2. Filter: **"Form Abandonment"**
3. Schau dir 5 Sessions an
4. Achte auf:
   - Wo User das Formular verlassen
   - Ob sie zögern bei bestimmten Feldern
   - Ob sie zwischen Feldern hin und her springen

**Mögliche Erkenntnisse:**
- User brechen bei "Nachricht" ab → Zu viel Aufwand
- User klicken mehrfach auf Submit, aber nichts passiert → Button-Feedback fehlt
- User scrollen nicht bis zum Formular → Formular zu weit unten

### **Use-Case 2: CTA-Optimierung**

**Frage:** Wird der Sticky CTA-Button überhaupt gesehen?

**Clarity-Lösung:**
1. Gehe zu **Heatmaps → Click Heatmap**
2. Sieh, wie oft der Sticky Button geklickt wird
3. Vergleiche mit anderen CTAs

**Mögliche Erkenntnisse:**
- Sticky Button wird kaum geklickt → Position ändern oder auffälliger machen
- User klicken auf Hero-CTA aber nicht auf Sticky → Sticky ist redundant

### **Use-Case 3: Content-Reihenfolge**

**Frage:** Welche Sections werden übersprungen?

**Clarity-Lösung:**
1. Gehe zu **Heatmaps → Scroll Heatmap**
2. Sieh, bei welchen % der User aufhören zu scrollen

**Mögliche Erkenntnisse:**
- 60% scrollen nicht bis "About" → Entweder unwichtig oder zu weit unten
- 80% scrollen zu "Angebote" → Das interessiert! Evtl. weiter nach oben

### **Use-Case 4: Mobile vs. Desktop**

**Frage:** Funktioniert die Seite auf Mobile genauso gut?

**Clarity-Lösung:**
1. Gehe zu **Recordings**
2. Filter: **Device → Mobile**
3. Schau dir Mobile-Sessions an

**Mögliche Erkenntnisse:**
- User klicken auf falsches Element → Touch-Targets zu klein
- User scrollen exzessiv → Navigation unklar
- Sticky CTA überdeckt Content → Position anpassen

---

## 📈 Wöchentliche Routine (10 Min.)

**Jeden Montag:**

1. **Dashboard checken**
   - Wie viele Sessions letzte Woche?
   - Rage Clicks / Dead Clicks gestiegen?

2. **Top 3 Recordings anschauen**
   - Filter: "Form Abandonment" oder "Rage Clicks"
   - Sieh, wo User Probleme haben

3. **1 Quick Fix umsetzen**
   - Basierend auf Erkenntnissen
   - Z.B. Formular-Feld entfernen, CTA umformulieren

**Resultat:** Kontinuierliche, datenbasierte Optimierung

---

## 🔒 Datenschutz & DSGVO

**Microsoft Clarity ist DSGVO-konform:**
- ✅ Keine personenbezogenen Daten (Namen, E-Mails) gespeichert
- ✅ IPs werden anonymisiert
- ✅ Formular-Eingaben werden **nicht** aufgezeichnet (nur dass etwas eingegeben wurde)
- ✅ Server in Europa verfügbar
- ✅ Kostenlos, keine Datenweitergabe an Dritte

**Wichtig für Datenschutzerklärung:**
Du solltest Clarity in deiner Datenschutzerklärung erwähnen:

```
Wir nutzen Microsoft Clarity zur Analyse des Nutzerverhaltens auf unserer
Website (Heatmaps, Session Recordings). Dabei werden keine personenbezogenen
Daten erfasst. Weitere Infos: https://clarity.microsoft.com/privacy
```

---

## 🆘 Troubleshooting

### Problem: "No data yet" nach 24 Stunden

**Lösung:**
1. Prüfe, ob Project ID richtig eingefügt (in `index.html` Zeile 32)
2. Öffne deine Website → F12 → Console
3. Suche nach Clarity-Fehlermeldungen
4. Falls Fehler: ID nochmal kopieren und neu einfügen

### Problem: Recordings sind unscharf / verpixelt

**Lösung:**
- Das ist normal für Text-Eingaben (Datenschutz!)
- Rest sollte klar sein
- Falls nicht: Check Browser-Kompatibilität (IE11 wird nicht unterstützt)

### Problem: Heatmaps zeigen nur wenige Daten

**Lösung:**
- Clarity braucht mindestens **50 Sessions** für aussagekräftige Heatmaps
- Warte 1-2 Wochen, dann sind genug Daten da

---

## ✅ Checkliste: Clarity ist live

Nach Setup solltest du sehen:

**In Clarity Dashboard:**
- [x] Status: "Recording" (grün)
- [x] Erste Sessions erscheinen nach 5-30 Min.
- [x] Heatmaps verfügbar nach ~50 Sessions

**Auf deiner Website (F12 Console):**
- [x] Keine Clarity-Fehler in Console
- [x] Clarity-Script lädt (in Network-Tab sichtbar)

---

## 🎯 Quick-Start nach Setup

**Tag 1-3:** Warte auf erste Daten (mind. 50 Sessions)

**Tag 4:**
1. Schau dir erste **5 Recordings** an (beliebig)
2. Mach dir Notizen: Was fällt auf?

**Woche 2:**
1. Check **Heatmaps** → Wo klicken User?
2. Identifiziere **1 Problem** (z.B. wenig Klicks auf wichtigen CTA)
3. Implementiere **1 Fix**

**Woche 3:**
1. Vergleiche Daten vor/nach Fix
2. Hat es geholfen? → Nächstes Problem angehen

---

## 🎁 Bonus: Clarity + GA4 kombinieren

**Best Practice:**
1. **GA4** zeigt dir **WAS** passiert (Events, Conversions)
2. **Clarity** zeigt dir **WARUM** (User-Behavior, Probleme)

**Beispiel-Workflow:**
1. GA4: "Formular wird oft nicht abgeschickt" (niedrige Conversion)
2. Clarity: Recordings filtern nach "Form Abandonment"
3. Erkennst du: User klicken Submit, aber nichts passiert
4. Fix: Button-Feedback einbauen ("Wird gesendet...")
5. GA4: Conversion steigt!

---

## 📞 Next Steps

**Jetzt:**
1. Clarity-Konto erstellen: [clarity.microsoft.com](https://clarity.microsoft.com)
2. Project ID kopieren
3. In `index.html` Zeile 32 einfügen: `"YOUR_CLARITY_PROJECT_ID"` → `"deine-id"`
4. Speichern & hochladen

**In 1-2 Tagen:**
1. Erste Recordings anschauen
2. Überraschungen erleben (User verhalten sich anders als gedacht!)

**In 1 Woche:**
1. Erste Optimierung basierend auf Clarity-Daten
2. Conversion Rate verbessern 🚀

---

🎉 **Viel Erfolg mit Microsoft Clarity!**

Bei Fragen einfach melden!
