# UDP (User Datagram Protocol)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
UDP ist ein verbindungsloses Transportprotokoll für schnelle, einfache Paketübertragung ohne Garantie für Reihenfolge oder Zustellung.

## Technische Definition
UDP arbeitet auf Layer 4 (Transport) und bietet ein leichtgewichtiges Datagramm‑Service: Header mit Quell-/Zielport, Länge und Checksummen.

## Detaillierte Erklärung
- Kein Verbindungsaufbau, keine Retransmits
- Geeignet für zeitkritische Anwendungen (VoIP, Videostreaming, DNS)
- Einfaches Protokoll mit geringem Overhead

## Wie es funktioniert
- Anwendungen senden Datagrams an IP/UDP; Empfangs‑Anwendung liest Daten unverändert.
- Fehler/Verlust werden nicht automatisch korrigiert; die Anwendung muss es übernehmen.

## OSI‑Layer Relevanz
- Primär Layer 4 (Transport)

## Vorteile
- Geringer Overhead, niedrige Latenz
- Einfachheit; ideal für Broadcast/Multicast

## Nachteile
- Keine Zuverlässigkeit oder Reihenfolgegarantie
- Anwendungen müssen Fehlerbehandlung implementieren

## Sicherheitsüberlegungen
- UDP‑Amplification‑Attacks (z. B. DNS Reflection)
- Stateful Firewalls und Rate‑Limiting empfohlen

## Typische Einsatzfälle
- DNS (UDP für Anfragen), VoIP (RTP), Streaming, DHCP (UDP 67/68)

## Real‑World Beispiele
- DNS‑Lookup per UDP
- RTP‑Streams für Videokonferenzen

## Häufige Fehler
- Firewall blockiert UDP‑Antworten
- MTU‑/Fragmentierungsprobleme bei großen Datagrammen

## Troubleshooting‑Hinweise
- Prüfen von Port‑Erreichbarkeit mit `nc -u` oder `socat`
- Netzwerk‑Sniffer (tcpdump) für UDP‑Pakete

## Beispiel (UDP Test)
```bash
# Einfacher UDP‑Test mit socat
socat - UDP4‑SENDTO:example.com:12345
```

## Zusammenfassung
UDP ist ideal für latenzkritische Anwendungen, die eigene Fehlerkorrektur verwenden. Schutzmaßnahmen gegen Amplification und Filterschutz sind wichtig.

## Verwandte Themen
- [TCP](tcp.md)
- [DNS](../netzwerkdienste/dns.md)
