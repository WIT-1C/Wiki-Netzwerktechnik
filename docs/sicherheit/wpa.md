# WPA (Wi‑Fi Protected Access)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
WPA ist eine Familie von Sicherheitsprotokollen für WLAN (WPA, WPA2, WPA3). Sie definieren Authentifizierung, Verschlüsselung und Integritätsprüfungen für Wi‑Fi‑Netze.

## Technische Definition
- WPA (Legacy): Ersatz für WEP; nutzte TKIP.
- WPA2: Einführung von AES‑CCMP (stabiler) — weit verbreitet.
- WPA3: Moderne Verbesserungen wie SAE (Simultaneous Authentication of Equals) und verbesserte Management Frame Protection.

## Detaillierte Erklärung
- WPA2‑Personal: PSK‑basierte Authentifizierung, AES‑CCMP Verschlüsselung.
- WPA2‑Enterprise: 802.1X + RADIUS, EAP‑Methoden (EAP‑TLS empfohlen).
- WPA3‑Personal: ersetzt PSK durch SAE für resistentere Passwort‑Authentifizierung.

## Wie es funktioniert
- Authentifizierung (PSK oder 802.1X) → Pairing/4‑Way Handshake (WPA2) → Schlüsselableitung für CCMP.
- WPA3 nutzt SAE für bessere Widerstandsfähigkeit gegen Offline‑Brute‑Force.

## OSI‑Layer Relevanz
- Layer 2: 802.11 MAC Security (RSN) implementiert WPA/WPA2/WPA3 Mechanismen

## Vorteile
- WPA2/WPA3 bieten starke Verschlüsselung und Integrität
- WPA3 verbessert Sicherheit bei schwachen Passwörtern

## Nachteile
- Kompatibilitätsprobleme mit sehr alten Geräten
- Falsch konfigurierte RADIUS/EAP‑Setups können Authentifizierungsprobleme verursachen

## Sicherheitsüberlegungen
- WPA2: 802.1X + EAP‑TLS für Unternehmensumgebungen
- WPA3: Aktivieren, wenn alle Clients unterstützen
- Management Frames und PMF (Protected Management Frames) beachten

## Typische Einsatzfälle
- Enterprise WLAN: WPA2/WPA3‑Enterprise mit RADIUS
- Heimnetz: WPA2/WPA3‑Personal (PSK/SAE)

## Real‑World Beispiele
- Firmennetz: WPA2‑Enterprise mit EAP‑TLS und zentralem RADIUS
- Zuhause: Router mit WPA3 Personal aktivieren (wenn Router + Clients kompatibel)

## Häufige Fehler
- Mixed‑Mode (WPA2/WPA) mit TKIP aktiviert → schwächere Sicherheit
- Unsichere PSKs (kurze, leicht zu erratende Passwörter)

## Troubleshooting‑Hinweise
- Auth‑Logs am RADIUS/Controller prüfen
- Falls Clients nicht verbinden: Kompatibilitätsmodus, PSK vs. SAE, Firmware prüfen

## Beispiel (WPA2‑Enterprise Ablauf)
```text
1. Client verbindet zum SSID
2. 802.1X‑EAP startet, Client‑Zertifikat wird geprüft
3. RADIUS gibt das Netzwerkzugangsrecht frei
4. 4‑Way Handshake zur Schlüsselableitung
```

## Mermaid‑Diagramm
```mermaid
graph LR
  Client --> AP[Access Point]
  AP --> RADIUS[RADIUS Server]
  RADIUS --> LDAP[Directory]
```

## Zusammenfassung
WPA2 und WPA3 sind die aktuellen Standards für WLAN‑Sicherheit. WPA3 bringt signifikante Verbesserungen; bestenfalls Enterprise‑Authentifizierung (EAP‑TLS) in Unternehmensumgebungen einsetzen.

## Verwandte Themen
- [WLAN Standards](../wlan/wifi-standards.md)
- [RADIUS](../netzwerkdienste/radius.md)
- [AES](aes.md)
