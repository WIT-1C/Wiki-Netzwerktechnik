# TKIP (Temporal Key Integrity Protocol)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
TKIP war ein Übergangsverfahren zur Verbesserung der Sicherheit in WLANs gegenüber WEP. Heute ist TKIP veraltet und gilt als unsicher.

## Technische Definition
Temporal Key Integrity Protocol (TKIP) erweitert WEP, indem es die Schlüsselverwaltung, Initialisierungsvektoren und Message Integrity verbessert.

## Detaillierte Erklärung
- Entwickelt als kurzfristiger Ersatz für WEP (Teil von WPA‑1).
- Nutzt per‑Packet Key Mixing, 48‑Bit IV und Michael Message Integrity Code (MIC).
- Nicht kompatibel mit modernen Sicherheitsanforderungen (z. B. AES‑CCMP in WPA2).

## Wie es funktioniert
- Dynamische Schlüsselableitung für jedes Paket, MIC zur Integritätsprüfung.
- Implementierung in Software/Hardware auf älteren Geräten.

## OSI‑Layer Relevanz
- Primär Layer 2 (Data Link), da TKIP die 802.11 MAC‑Sicherheitsschicht ergänzt.

## Vorteile
- Besser als WEP, einfache Nachrüstung älterer Geräte.

## Nachteile
- Bekannte Schwachstellen; heute unsicher.
- Langfristig nicht wartbar oder aktualisierbar.

## Sicherheitsüberlegungen
- TKIP sollte nicht mehr eingesetzt werden; stellt ein Risiko dar.
- Viele moderne Access Points erlauben TKIP nur noch aus Kompatibilitätsgründen und warnen davor.

## Typische Einsatzfälle (historisch)
- Alte Clients, die kein AES/CCMP unterstützen.

## Real‑World Beispiele
- Frühe WPA‑Implementierungen auf älteren Routern nutzten TKIP.

## Häufige Fehler
- TKIP im Produktivnetz belassen aus Kompatibilitätsgründen — erhöhtes Risiko.

## Troubleshooting‑Hinweise
- Geräteaktualisierung prüfen; wenn möglich, auf WPA2/WPA3 mit AES/CCMP migrieren.
- Falls ältere Geräte vorhanden sind, in ein isoliertes VLAN auslagern.

## Zusammenfassung
TKIP ist veraltet und unsicher. Moderne Netzwerke sollten TKIP deaktivieren und auf AES‑basierte Verfahren (WPA2/WPA3) setzen.

## Verwandte Themen
- [WPA](wpa.md)
- [WLAN Frequenzen](../wlan/wlan-frequenzen.md)
