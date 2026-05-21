# MAC‑Adressen

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
MAC‑Adressen (Media Access Control) sind eindeutige Hardware‑Adressen auf Layer 2, mit denen Netzwerkkarten identifiziert werden.

## Technische Definition
Eine MAC‑Adresse ist 48 Bit (typisch) lang, hexadezimal dargestellt (z. B. 00:1A:2B:3C:4D:5E). Die ersten 24 Bit bilden die OUI des Herstellers.

## Detaillierte Erklärung
- Adresse: OUI (Organizationally Unique Identifier) + Hersteller‑gewiesene NIC‑Teile
- Verwendung: Frame‑Forwarding in Switches, ARP‑Zuordnung zu IPs
- Typen: Unicast, Multicast, Broadcast

## Wie die Technologie funktioniert
- Switches lernen MAC→Port in der MAC‑Address‑Table und leiten Frames zielgerichtet weiter.
- ARP/ND benutzt MAC‑Adressen zur Auflösung von IP zu Link‑Layer Adressen.

## OSI‑Layer Relevanz
- Primär Layer 2 (Data Link)

## Vorteile
- Geräteidentifikation auf Link‑Layer, effizientes Switching

## Nachteile
- MAC‑Spoofing möglich, physische Bindung nicht immer sicher

## Sicherheitsüberlegungen
- Port‑Security (Bindung von MAC an Port), 802.1X für Geräteauthentifizierung
- Monitoring auf MAC‑Änderungen (Rogue Detection)

## Typische Einsatzfälle
- Switch‑Forwarding, Statistische Analysen, VLAN‑Zuweisungen

## Real‑World Beispiele
- MAC‑Filter in NAS/Systemen, Port‑Securitiy auf Access‑Switches

## Häufige Fehler
- Abhängigkeit nur von MAC‑Filtern für Sicherheit
- Fehlinterpretation von dynamischen MAC‑Tabellen

## Troubleshooting‑Hinweise
- `show mac address-table` am Switch prüfen
- ARP‑Cache kontrollieren (`arp -a`)

## Beispiel (Linux: MAC ändern)
```bash
ip link set dev eth0 down
ip link set dev eth0 address 00:11:22:33:44:55
ip link set dev eth0 up
```

## Zusammenfassung
MAC‑Adressen sind zentral für Layer‑2‑Switching. Sicherheit durch Port‑Binding und Authentifizierung erhöht Robustheit.

## Verwandte Themen
- [ARP](../protokolle/arp-rarp.md)
- [Switch](../netzwerkgeraete/switch.md)
