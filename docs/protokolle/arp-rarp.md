# ARP / RARP

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
ARP (Address Resolution Protocol) und RARP (Reverse ARP) sind Protokolle zur Zuordnung von IP‑Adressen zu MAC‑Adressen bzw. umgekehrt (historisch für RARP).

## Technische Definition
- ARP übersetzt IPv4‑Adressen in MAC‑Adressen innerhalb eines Broadcast‑Domains.
- RARP wurde verwendet, um einer Maschine ihre IP anhand der MAC zuzuweisen; heute ersetzt durch DHCP.

## Detaillierte Erklärung
- ARP ist ein Layer‑2‑Protokoll, das Broadcasts nutzt: "Who has 192.168.1.10?" → Antwort: "192.168.1.10 is at aa:bb:cc..."
- RARP: Client sendet Broadcast, ein Server antwortet mit IP basierend auf MAC (veraltet)

## Wie es funktioniert
- ARP‑Cache auf Hosts speichert MAC↔IP‑Zuordnungen
- ARP‑Replies können statisch gesetzt werden (ARP‑Binding)

## OSI‑Layer Relevanz
- Layer 2 (Data Link) mit Bezug zu Layer 3 (IP)

## Vorteile
- Ermöglicht IP‑Routing/Kommunikation innerhalb LANs

## Nachteile
- ARP‑Spoofing / Poisoning ist ein Sicherheitsrisiko

## Sicherheitsüberlegungen
- ARP‑Spoofing verhindern mit Dynamic ARP Inspection, Port‑Security
- Statische ARP‑Einträge nur begrenzt nutzbar

## Typische Einsatzfälle
- Lokale Adressauflösung in IPv4 Netzwerken

## Real‑World Beispiele
- ARP‑Requests/Replies beobachten mit `arp -a` oder Wireshark

## Häufige Fehler
- ARP‑Cache veraltet → Connectivity Probleme
- ARP‑Flooding durch Angriffe

## Troubleshooting‑Hinweise
- `arp -a` Cache prüfen
- Gratuitous ARP zur Aktualisierung verwenden
- Switch‑Mechanismen (DAI) einsetzen

## Beispiel (ARP‑Cache anzeigen)
```bash
# Linux
arp -n
# Windows
arp -a
```

## Zusammenfassung
ARP ist essenziell für IPv4‑Kommunikation im LAN; Schutzmaßnahmen gegen ARP‑Spoofing sind wichtig.

## Verwandte Themen
- [Switch](../netzwerkgeraete/switch.md)
- [DHCP](../netzwerkdienste/dhcp.md)
