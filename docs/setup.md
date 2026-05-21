# Setup & Build

Kurzanleitung zum lokalen Aufbau der Dokumentation (Windows):

1. Python & pip installieren (falls nicht vorhanden).
2. Virtuelle Umgebung erstellen (empfohlen):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

3. Benötigte Pakete installieren:

```powershell
pip install mkdocs mkdocs-material mkdocs-mermaid2-plugin mkdocs-tags-plugin pymdown-extensions
```

4. Lokalen Server starten:

```powershell
mkdocs serve
```

5. Site bauen:

```powershell
mkdocs build --clean
```

Hinweis: Wenn `mkdocs-mermaid2-plugin` installiert ist, verwendet die Konfiguration das Plugin und lädt automatisch die Mermaid‑Bibliothek.
