# DHCP (Dynamic Host Configuration Protocol)

## Einführung
DHCP automatisiert die Vergabe von IP‑Adressen und zugehörigen Netzwerkparametern (Gateway, DNS) an Clients — unverzichtbar in modernen Netzwerken.

## Technische Definition
DHCP ist ein Bootstrapping‑Protokoll (Layer 7/3), das auf UDP (Ports 67/68) arbeitet und dynamische Adressvergabe über Discover/Offer/Request/ACK‑Ablauf ermöglicht.

## Detaillierte Erklärung
- Ablauf: DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK
- Lease: Zeitlich begrenzte Adresszuteilung; Server verwaltet Pool und Reservierungen
- Optionen: Gateway, DNS‑Server, NTP, DHCP‑Optionen (z. B. 66 für TFTP Boot)

## Wie es funktioniert
- Client sendet Broadcast DHCPDISCOVER; Server antwortet mit Angebot. Client wählt und bestätigt; Server reserviert Adresse für die Lease‑Dauer.

## OSI‑Layer Relevanz
- Primär Layer 7 (Application) über UDP/IPv4 (Layer 4/3)

## Vorteile
- Automatische Konfiguration, einfache Administration
- Unterstützung für Reservierungen und IP‑Management

## Nachteile
- Fehlkonfiguration kann viele Hosts betreffen
- Single Point of Failure ohne Redundanz

## Sicherheitsüberlegungen
- DHCP Snooping, DHCP Relay vertrauenswürdig konfigurieren
- Autorisierte DHCP‑Server (Rogue DHCP vermeiden)

## Typische Einsatzfälle
- Arbeitsplatz‑Netze, Guest‑WLAN (mit separatem DHCP), Virtualisierungs‑Umgebungen

## Real‑World Beispiele
- DHCP‑Failover (z. B. ISC DHCP, Windows DHCP mit Split‑Scope)

## Häufige Fehler
- Überlappende Pools, falsche Gateway‑Optionen, fehlende DHCP‑Relay Konfiguration

## Troubleshooting‑Hinweise
- Logs des DHCP‑Servers prüfen
- Mit `ipconfig /renew` (Windows) oder `dhclient` (Linux) testen
- DHCP‑Snooping/Switch Logs analysieren

## Beispiel (ISC DHCP - simple subnet)
```text
subnet 10.10.10.0 netmask 255.255.255.0 {
  range 10.10.10.100 10.10.10.200;
  option routers 10.10.10.1;
  option domain-name-servers 10.10.10.2;
  default-lease-time 600;
  max-lease-time 7200;
}
```

## Zusammenfassung
DHCP vereinfacht IP‑Management erheblich; Redundanz, Logging und Schutz gegen Rogue‑Server sind Schlüssel für stabile Betriebsabläufe.

## Verwandte Themen
- [DNS](dns.md)
- [Switch ‑ DHCP Snooping](../netzwerkgeraete/switch.md)
