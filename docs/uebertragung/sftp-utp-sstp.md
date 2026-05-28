# SFTP, UTP, SSTP — Übertragungs‑ und Transporttechnologien

## Einführung
Diese Seite fasst drei unterschiedliche Begriffe zusammen: SFTP (sicherer Dateiübertragungsdienst), UTP (Unshielded Twisted Pair Verkabelung) und SSTP (Secure Socket Tunneling Protocol). Sie gehören zu verschiedenen Schichten der Übertragungspalette.

## Technische Definition
- SFTP: SSH File Transfer Protocol, sichert Dateiübertragungen über SSH (Layer 7/TCP)
- UTP: Unshielded Twisted Pair, physisches Kupferkabel für Ethernet (Layer 1)
- SSTP: VPN‑Protokoll über HTTPS/TLS (Layer 4/5 über TCP 443)

## Detaillierte Erklärung
- SFTP: läuft über SSH, bietet Authentifizierung und Verschlüsselung; geeignet für sichere Transfers und Automatisierung.
- UTP: verbreitetes Verkabelungsmedium (Cat5e/Cat6); kein Schirm gegen EMI.
- SSTP: Microsoft‑basiertes VPN, tunnelt PPP über TLS/HTTPS, nützlich hinter restriktiven Firewalls.

## Wie es funktioniert
- SFTP: SSH‑Handshake → verschlüsselte Session → Dateioperationen über den Channel
- UTP: verdrillte Adern reduzieren Crosstalk; Ethernet‑Signale übertragen Bits
- SSTP: TLS‑Verbindung über TCP/443 kapselt VPN‑Daten, NAT‑Traversal robust

## OSI‑Layer Relevanz
- SFTP: Layer 7 (Application) über TCP
- UTP: Layer 1 (Physical)
- SSTP: Layer 4/5 (Transport/Session) mit TLS

## Vorteile
- SFTP: sicher, kompatibel mit SSH‑Infrastruktur
- UTP: günstig, flexibel, leicht zu installieren
- SSTP: funktioniert oft in restriktiven Netzwerken (HTTPS Port)

## Nachteile
- SFTP: performanceabhängig von SSH‑Overhead
- UTP: keine Abschirmung; Störanfälligkeit
- SSTP: proprietär, Abhängigkeit von TLS‑Stack, Overhead

## Sicherheitsüberlegungen
- SFTP: Key‑Based Auth, starke Ciphers
- UTP: physischer Zugang schützen
- SSTP: TLS‑Zertifikate, sichere Cipher Suites

## Typische Einsatzfälle
- SFTP: Backup, Deployments, automatisierte Transfers
- UTP: Arbeitsplatz‑ und Gebäudeverkabelung
- SSTP: Remote‑Access VPN für Windows‑Clients

## Real‑World Beispiele
- SFTP‑Server für Entwicklerteams
- UTP Cat6 für Büroverkabelung
- SSTP als Fallback‑VPN hinter restriktiven Proxys

## Häufige Fehler
- SFTP: unsichere Keys, fehlende Restriktionen
- UTP: Verwendung falscher Kategorie für gewünschte Geschwindigkeit
- SSTP: Zertifikatsfehler, Performance‑Einbußen

## Troubleshooting‑Hinweise
- SFTP: `sftp -vvv` für Debug
- UTP: Kabeltester, Längenprüfung, Link‑LEDs
- SSTP: TLS Handshake Logs, Zertifikatkette prüfen

## Zusammenfassung
SFTP, UTP und SSTP decken unterschiedliche Bereiche ab: Application‑Layer Transfer, physische Verkabelung und VPN‑Tunneling. Jedes hat eigene Anforderungen an Planung und Sicherheit.

## Verwandte Themen
- [SSH](../sicherheit/ssh.md)
- [Patchkabel / UTP](../verkabelung/patchkabel.md)
- [VPN](../sicherheit/vpn.md)

