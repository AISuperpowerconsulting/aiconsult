# 📊 Google Analytics 4 Tracking - Dokumentation

## Übersicht

Deine Website ist jetzt vollständig mit Google Analytics 4 (GA4) getrackt. Alle wichtigen Aktionen werden automatisch erfasst und in deinem GA4-Dashboard angezeigt.

**Measurement ID:** `G-L2JNT2YNJ9`

---

## 🎯 Was wird getrackt?

### 1. **Formular-Submissions** (Lead-Generierung)

Alle 4 Kontaktformulare werden getrackt:

| Event Name | Formular | Wert (CHF) | Parameter |
|------------|----------|------------|-----------|
| `generate_lead` | Haupt-Kontaktformular (Footer) | 0 | form_name, lead_type |
| `generate_lead` | KI Einsteiger Workshop | 1'800 | form_name, item_name, value |
| `generate_lead` | KI Team Training Tag | 3'500 | form_name, item_name, value |
| `generate_lead` | Individuelle Beratung | 280 | form_name, item_name, value |

**In GA4 ansehen:**
- Reports → Engagement → Events → Filter: `generate_lead`
- Explorations → Erstelle Report mit Dimension: `form_name` und Metric: `Event count`

### 2. **CTA-Klicks** (Call-to-Action Buttons)

Alle wichtigen Buttons werden getrackt:

| Button Location | Event Name | Parameter |
|----------------|------------|-----------|
| Sticky Button (schwebt rechts) | `cta_click` | cta_name: `sticky_button` |
| Hero Primär-CTA | `cta_click` | cta_name: `hero_primary` |
| Hero Sekundär-CTA | `cta_click` | cta_name: `hero_secondary` |
| Pricing Cards (3x) | `cta_click` + `view_item` | offer_name, offer_price |

**In GA4 ansehen:**
- Reports → Engagement → Events → Filter: `cta_click`
- Analysiere, welcher CTA am besten konvertiert

### 3. **Modal-Öffnungen** (Popup-Formulare)

Wenn ein User auf "Workshop anfragen" klickt:

| Event Name | Parameter |
|------------|-----------|
| `modal_open` | modal_name: `workshop-beginner`, `training-day`, `consulting` |
| `modal_close` | modal_name (wenn User Modal schliesst) |

**Nutzung:**
- Zeigt, welches Angebot am meisten Interesse weckt
- Vergleiche modal_open vs. generate_lead → Conversion Rate pro Modal

### 4. **Scroll-Tiefe** (Scroll Depth)

Misst, wie weit User nach unten scrollen:

| Event Name | Scroll % | Bedeutung |
|------------|----------|-----------|
| `scroll_depth` | 25% | User hat 1/4 der Seite gesehen |
| `scroll_depth` | 50% | Hälfte der Seite gesehen |
| `scroll_depth` | 75% | Drei Viertel |
| `scroll_depth` | 100% | Ganze Seite bis Footer |

**In GA4 ansehen:**
- Reports → Engagement → Events → `scroll_depth`
- Siehe, bei welchem % du User verlierst

### 5. **Navigation-Klicks**

Alle Klicks im Header-Menü:

| Event Name | Parameter |
|------------|-----------|
| `navigation_click` | link_text: "Warum KI", "Lösungen", "Angebote", etc. |

**Nutzung:**
- Zeigt, welche Sections User am meisten interessieren

### 6. **Outbound Links** (externe Links)

Klicks auf externe Links (z.B. AI-Platform-Logos):

| Event Name | Parameter |
|------------|-----------|
| `click` | link_domain: "anthropic.com", "make.com", etc. |
|  | outbound: true |

**Nutzung:**
- Sieh, ob User zu Claude, Make.com etc. gehen
- Zeigt Interesse an Tools

### 7. **Section Visibility** (Abschnitte im Blick)

Wenn ein User zu einer Section scrollt:

| Event Name | Section |
|------------|---------|
| `section_view` | why-ai, services, offers, testimonials, about, faq |

**Nutzung:**
- Zeigt, welche Sections tatsächlich gesehen werden
- Identifiziere ungenutzte Bereiche

### 8. **User Engagement & Zeit**

| Event Name | Wann | Parameter |
|------------|------|-----------|
| `user_engagement` | Nach 30 Sek. | engagement_level: `interested` |
| `page_exit` | User verlässt Seite | time_on_page (in Sekunden) |

**Nutzung:**
- Durchschnittliche Verweildauer messen
- Zeigt echtes Interesse vs. Bounces

---

## 📈 So nutzt du die Daten in Google Analytics

### 1. **Dashboard aufrufen**
Gehe zu [analytics.google.com](https://analytics.google.com) und wähle deine Property "AIConsult.ch"

### 2. **Wichtigste Reports**

#### **a) Conversions (Lead-Generierung)**
```
Reports → Engagement → Conversions
```
- Markiere `generate_lead` als Conversion-Event
- Zeigt dir: Wie viele Anfragen pro Tag/Woche/Monat

#### **b) Event-Übersicht**
```
Reports → Engagement → Events
```
- Alle Events in der Übersicht
- Sortiere nach "Event count" → siehst du häufigste Aktionen

#### **c) Benutzerdefinierte Reports erstellen**
```
Explore → Blank Exploration
```

**Beispiel: "CTA Performance Report"**
- Dimension: `cta_name`, `cta_location`
- Metrik: `Event count`
- Segment: Nur User, die danach auch Formular gesendet haben

**Beispiel: "Conversion Funnel"**
1. Landing Page View
2. Scroll 50%
3. CTA Click
4. Modal Open
5. Form Submit

### 3. **Wichtige Metriken beobachten**

#### **Conversion Rate**
```
(Anzahl "generate_lead" Events) / (Anzahl Sessions) * 100
```
- Benchmark B2B: 2-5% ist gut
- Ziel: >3%

#### **CTA Click-Through-Rate**
```
(cta_click Events) / (Page Views) * 100
```
- Zeigt, wie gut deine CTAs funktionieren

#### **Modal → Form Conversion**
```
(generate_lead von Modal) / (modal_open) * 100
```
- Zeigt, wie viele User das Formular auch wirklich absenden

---

## 🔔 Event-Tests (Browser Console)

Öffne die Browser-Console (F12) auf deiner Website. Du solltest sehen:

```
🎯 AIConsult.ch Tracking initialized
📊 GA4 Event: [event_name] {parameters}
✅ Tracking setup complete - all events configured
```

**Events manuell testen:**
1. Öffne [aiconsult.ch](https://aiconsult.ch)
2. Browser Console öffnen (F12 → Console)
3. Scroll runter → siehst du `📊 GA4 Event: scroll_depth`
4. Klick auf CTA → siehst du `📊 GA4 Event: cta_click`
5. Formular absenden → siehst du `📊 GA4 Event: generate_lead`

Nach 24-48 Stunden erscheinen die Events in deinem GA4-Dashboard.

---

## 🎯 Optimierungen basierend auf Tracking-Daten

### Nach 2 Wochen Daten:

#### **1. CTA-Optimierung**
- **Frage:** Welcher CTA wird am meisten geklickt?
- **Aktion:** Weniger erfolgreiche CTAs umformulieren oder Design anpassen

#### **2. Formular-Optimierung**
- **Frage:** Bei welchem Formular brechen User am meisten ab?
- **Aktion:** Formular noch weiter vereinfachen, Felder reduzieren

#### **3. Content-Optimierung**
- **Frage:** Scrollt niemand zu "FAQ" oder "About"?
- **Aktion:** Section umplatzieren oder Content spannender machen

#### **4. Angebots-Optimierung**
- **Frage:** Wird ein Workshop-Modal deutlich öfter geöffnet?
- **Aktion:** Dieses Angebot prominenter platzieren

---

## 🛠 Erweiterte Tracking-Features (Optional)

Falls du später noch mehr tracken möchtest:

### **Microsoft Clarity (Heatmaps & Session Recordings)**
- Kostenlos, DSGVO-konform
- Zeigt Mouse-Bewegungen, Klicks, Scroll-Verhalten visuell
- Ergänzt GA4 perfekt

**Setup:** Sag mir Bescheid, ich füge den Code hinzu (5 Min.)

### **Conversion Value Tracking**
- Aktuell: Wir tracken Werte (CHF 1'800, 3'500, 280)
- Optional: E-Commerce Tracking für Revenue-Reports

---

## 📞 Support

Bei Fragen zum Tracking:
- GA4 braucht 24-48h bis erste Daten erscheinen
- Events erscheinen unter "Reports → Engagement → Events"
- Für Custom Reports: "Explore" nutzen

**Probleme?**
- Console öffnen (F12) und prüfen ob Events gesendet werden
- Falls keine Events sichtbar: Browser-Cache leeren und neu laden

---

## ✅ Checkliste: Tracking ist live

- [x] GA4 Script eingebunden (`G-L2JNT2YNJ9`)
- [x] DSGVO-konform (IP-Anonymisierung aktiv)
- [x] 4 Formulare getrackt
- [x] Alle CTAs getrackt
- [x] Scroll-Depth getrackt
- [x] Modal-Interaktionen getrackt
- [x] Navigation-Klicks getrackt
- [x] Externe Links getrackt
- [x] User-Engagement getrackt

🎉 **Tracking ist vollständig eingerichtet und aktiv!**
