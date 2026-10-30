"""Stellt Blogseiten auf das Design «Signal» um (Navigation, Footer, Stylesheets).

Idempotent: bereits umgestellte Seiten werden übersprungen. Wird manuell und vom
wöchentlichen Blog-Wächter ausgeführt, weil die externe Pipeline Artikel noch mit der
alten Vorlage erzeugt.

Aufruf im Repo-Root:  python3 tools/blog_restyle.py
"""
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {"zato-privacy"}

NAV_LABELS = {
    "de": ("Angebote", "Über mich", "Blog", "Kontakt"),
    "en": ("Offers", "About", "Blog", "Contact"),
}


def nav_html(prefix, lang, switcher):
    offers, about, blog, contact = NAV_LABELS[lang]
    blog_href = f"{prefix}blog-en" if lang == "en" else f"{prefix}blog"
    return f"""    <nav class="site-nav" aria-label="Navigation">
        <div class="wrap">
            <a href="{prefix}"><img src="{prefix}img/logo-aiconsult-white-tight.webp" alt="AIConsult.ch" width="600" height="68"></a>
            <ul>
                <li><a href="{prefix}#offers">{offers}</a></li>
                <li><a href="{prefix}#about">{about}</a></li>
                <li><a href="{blog_href}">{blog}</a></li>
                <li><a href="{prefix}#contact" class="btn">{contact}</a></li>
            </ul>
{switcher}        </div>
    </nav>
"""


def footer_html(prefix):
    return f"""    <footer class="site-footer">
        <div class="wrap">
            <span>&copy; 2026 AIConsult.ch, Althaus Online</span>
            <ul>
                <li><a href="{prefix}blog">Blog</a></li>
                <li><a href="{prefix}impressum.html">Impressum</a></li>
                <li><a href="{prefix}datenschutz.html">Datenschutz</a></li>
            </ul>
        </div>
    </footer>
"""


def restyle(path: Path) -> bool:
    html = path.read_text(encoding="utf-8")
    if "css/blog.css" in html:
        return False
    if "style-improved.css" not in html or '<nav id="navbar">' not in html:
        return False

    prefix = "./" if path.parent == ROOT else "../"
    lang = "en" if '<html lang="en' in html or path.name.endswith("-en.html") else "de"

    switcher_match = re.search(r'            <div class="language-switcher">.*?</div>\n', html, re.S)
    switcher = switcher_match.group(0) if switcher_match else ""

    html = html.replace(
        "family=Outfit:wght@300;400;600;700",
        "family=Archivo:wdth,wght@62..125,400..900",
    )
    html = re.sub(
        r'<link rel="stylesheet" href="(\.\.?/)css/style-improved\.css">',
        r'<link rel="stylesheet" href="\1css/site.css">\n    <link rel="stylesheet" href="\1css/blog.css">',
        html,
    )
    html = re.sub(r'    <nav id="navbar">.*?</nav>\n', lambda m: nav_html(prefix, lang, switcher), html, count=1, flags=re.S)
    html = re.sub(r'    <footer[^>]*>.*?</footer>\n', lambda m: footer_html(prefix), html, count=1, flags=re.S)
    html = re.sub(r'\s*<script src="(\.\./)*\.?/?js/main-improved\.js"></script>', "", html)

    path.write_text(html, encoding="utf-8", newline="")
    return True


def blog_pages():
    tracked = subprocess.run(["git", "ls-files"], cwd=ROOT, capture_output=True, text=True).stdout.split()
    pages = [ROOT / "blog.html", ROOT / "blog-en.html"]
    for f in tracked:
        parts = f.split("/")
        if len(parts) == 2 and parts[1] in ("index.html", "index-en.html") and parts[0] not in SKIP_DIRS:
            pages.append(ROOT / f)
    return [p for p in pages if p.exists()]


if __name__ == "__main__":
    changed = [p.relative_to(ROOT).as_posix() for p in blog_pages() if restyle(p)]
    print(f"{len(changed)} Seiten umgestellt")
    for c in changed:
        print(" ", c)
