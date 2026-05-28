# RADIUS (Remote Authentication Dial‑In User Service)

## Einführung
RADIUS ist ein zentrales Authentifizierungs‑, Autorisierungs‑und Accounting‑Protokoll (AAA), häufig eingesetzt für WLAN‑Enterprise (802.1X) und VPN‑Authentifizierung.

## Technische Definition
RADIUS arbeitet auf UDP (Ports 1812/1813 oder 1645/1646) und verwaltet Benutzeranfragen an einen zentralen Server, der Authentifizierung (PAP, CHAP, EAP‑Methoden) und Accounting durchführt.

## Detaillierte Erklärung
- Ablauf: NAS (Network Access Server) leitet Authentifizierungsanfrage an RADIUS weiter; Server prüft und antwortet (Access‑Accept/Reject/Challenge)
- EAP: Verschiedene EAP‑Methoden (EAP‑TLS, PEAP) ermöglichen starke Authentifizierung

## Wie es funktioniert
- User verbindet sich (WLAN/VPN) → NAS sendet Access‑Request an RADIUS → RADIUS prüft gegen Datenbank (LDAP/AD) → Antwort zurück

## OSI‑Layer Relevanz
- Layer 7 (Application) über UDP

## Vorteile
- Zentrale Verwaltung von Zugangsdaten und Policies
- Integration mit LDAP/AD für Benutzerverwaltung

## Nachteile
- Single Point of Failure ohne Redundanz
- Komplexität bei EAP/RADIUS Konfiguration

## Sicherheitsüberlegungen
- RADIUS Shared‑Secret sicher verwahren
- Use EAP‑TLS für Zertifikatbasierte Authentifizierung
- RADIUS/TLS (RadSec) für verschlüsselte Transportwege

## Typische Einsatzfälle
- Enterprise WLAN (802.1X), VPN Authentifizierung, Netzwerkzugangskontrolle

## Real‑World Beispiele
- FreeRADIUS + Active Directory Integration für Unternehmens‑WLAN

## Häufige Fehler
- Falsches Shared‑Secret, Time‑Skew bei Zertifikaten, Firewall‑Blocks

## Troubleshooting‑Hinweise
- RADIUS Logs prüfen (`radiusd -X` bei FreeRADIUS)
- Test mit `radtest`/`radperf`
- Network‑Access‑Server Logs kontrollieren

## Beispiel (radtest)
```bash
radtest user password 127.0.0.1 0 testing123
```

## Zusammenfassung
RADIUS ermöglicht zentrale, skalierbare Authentifizierung; sichere Konfiguration, Redundanz und Monitoring sind entscheidend.

## Verwandte Themen
- [WPA2/WPA3 Enterprise](../sicherheit/wpa.md)
- [RADIUS + 802.1X](../netzwerkgeraete/hotspot.md)

