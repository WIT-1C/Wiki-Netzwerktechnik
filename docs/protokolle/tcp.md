# TCP (Transmission Control Protocol)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
TCP ist ein verbindungsorientiertes Transportprotokoll, das zuverlässige, geordnete und fehlergeprüfte Datenübertragung zwischen Hosts ermöglicht.

## Technische Definition
TCP arbeitet auf OSI Layer 4 (Transport) und stellt Verbindungen (Streams), Sequenzierung, Fluss‑ und Staukontrolle sowie Fehlerkorrektur bereit.

## Detaillierte Erklärung
- Verbindungsaufbau: 3‑Way‑Handshake (SYN, SYN/ACK, ACK)
- Zuverlässigkeit: Sequenznummern, ACKs, Retransmissions
- Flusskontrolle: Window‑Management
- Staukontrolle: Algorithmen wie TCP Reno, Cubic

## Wie es funktioniert
- Sender segmentiert Daten, versieht Segmente mit Sequenznummern.
- Empfänger bestätigt korrekt empfangene Segmente (ACK).
- Fehlende ACKs führen zu Retransmits; Window regelt Rate.

## OSI‑Layer Relevanz
- Primär Layer 4 (Transport)

## Vorteile
- Zuverlässige Übertragung, Reihenfolgegarantie
- Fehlerkorrektur und Staukontrolle

## Nachteile
- Höherer Overhead (Header, Zustandsverwaltung)
- Latenz bei Verbindungsaufbau und Retransmits

## Sicherheitsüberlegungen
- TCP‑Ports sollten nur notwendige offen sein (ACLs/Firewall)
- SYN‑Flooding (DoS) möglich — SYN‑Cookies, Rate‑Limiting
- Man‑in‑the‑Middle möglich bei fehlender Verschlüsselung (TLS)

## Typische Einsatzfälle
- HTTP(S) über TCP, SSH, SMTP, FTP (Steuerkanal)

## Real‑World Beispiele
- Web‑Browsing (TCP + TLS)
- Dateiübertragungen über SCP/SFTP

## Häufige Fehler
- MTU/Fragmentierungsprobleme
- Falsche Firewall‑Rules blockieren TCP‑Handshakes

## Troubleshooting‑Hinweise
- Verbindungsaufbau überprüfen: SYN/ACK mit tcpdump/Wireshark
- Round‑Trip‑Time, Retransmissions und Window‑Size beobachten
- `netstat`/`ss` für offene Verbindungen

## Beispiel (SYN scan mit nmap)
```bash
nmap -sS -p 22 example.com
```

## Zusammenfassung
TCP ist das Standardprotokoll für zuverlässige, verbindungsorientierte Kommunikation. Verständnis von Handshake, Fenstermanagement und Staukontrolle ist zentral fürs Troubleshooting.

## Verwandte Themen
- [UDP](udp.md)
- [HTTP/HTTPS](http-https.md)
- [Firewall](../netzwerkgeraete/firewall.md)
