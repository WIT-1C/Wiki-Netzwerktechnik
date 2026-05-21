# DMZ (Demilitarized Zone)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
Eine DMZ ist ein isoliertes Netzwerksegment für öffentlich zugängliche Dienste (Web, Mail), das das interne Netzwerk vor direkten Zugriffen schützt.

## Technische Definition
Die DMZ ist ein separates Subnetz zwischen Internet‑Edge (Firewall) und internem LAN; sie begrenzt Zugriff auf publik erreichbare Ressourcen.

## Detaillierte Erklärung
- Architektur: Single‑Firewall mit DMZ, Dual‑Firewall (edge + internal), oder Mikrosegmentierung
- Dienste in DMZ: Webserver, Mail‑Relay, DNS‑Authoritative, Reverse‑Proxy

## Wie es funktioniert
- Firewall regelt strikte Regeln: Internet → DMZ (erlaubt für nötige Ports), DMZ → LAN meist stark eingeschränkt
- NAT/Reverse‑Proxy präsentiert interne Dienste nach außen

## OSI‑Layer Relevanz
- Primär Layer 3/4 (Netzwerk und Transport), Security Layer in höheren Ebenen

## Vorteile
- Reduziert Angriffsfläche auf interne Systeme
- Ermöglicht gezieltes Monitoring und Logging

## Nachteile
- Komplexität in Konfiguration und Wartung
- Fehlkonfiguration kann zu ungewolltem Zugriff führen

## Sicherheitsüberlegungen
- Prinzip der geringsten Privilegien, Logging, Intrusion Detection
- Härtung der Dienste, regelmäßige Patching

## Typische Einsatzfälle
- Hosting von öffentlichen Web‑Anwendungen, FTP‑Gateways, Mail‑Relays

## Real‑World Beispiele
- Webserver in DMZ, Backend‑Datenbank im internen Netz mit strikten Firewall‑Regeln

## Häufige Fehler
- Direkter Zugriff DMZ → LAN erlaubt
- Unzureichende Monitoring/Logging in der DMZ

## Troubleshooting‑Hinweise
- Firewall‑Regeln systematisch prüfen
- Zugriffspfade und NAT‑Regeln mit Traceroute/Firewall‑Logs analysieren

## Mermaid‑Diagramm
```mermaid
graph LR
  Internet --> FirewallEdge[Edge Firewall]
  FirewallEdge --> DMZ[DMZ Subnet]
  DMZ --> ReverseProxy[Reverse Proxy]
  ReverseProxy --> Internal[Internal Network] 
```

## Zusammenfassung
DMZs sind zentrale Sicherheitszonen für öffentliche Dienste. Sorgfältige Firewall‑Policies, Patching und Monitoring sind erforderlich.

## Verwandte Themen
- [Firewall](../netzwerkgeraete/firewall.md)
- [VLAN](vlan.md)
