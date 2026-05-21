# Modem

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration und Anfänger‑Administratoren

## Einführung
Ein Modem ist die Schnittstelle zwischen dem Übertragungsmedium des Providers (DSL, Kabel, LTE, Glasfaser) und dem lokalen Netzwerk. Es modulieret/demoduliert Signale und sorgt für die physische Verbindung.

## Technische Definition
Modem = Modulator‑Demodulator; es wandelt analoge oder link‑spezifische Signale in digitale Ethernet‑Frames (und umgekehrt). Arbeitet primär auf physikalischer Schicht (OSI Layer 1) und teilweise Data Link (Layer 2).

## Detaillierte Erklärung
- Betriebsarten:
  - Bridge‑Mode: Modem gibt öffentliche IP direkt an Router weiter; Router übernimmt NAT/Firewall.
  - Gateway/Router‑Modem: Kombigerät mit NAT, DHCP, Firewall.
- Häufige Schnittstellen: Ethernet (RJ45), RJ11 (DSL), Coax (Kabel), SFP (Glasfaser)

## Wie die Technologie funktioniert
- Empfangene Trägersignale werden demoduliert, in digitale Pakete überführt und über Ethernet an Router/PC weitergereicht.
- Im Bridge‑Mode läuft öffentliches IP‑Handling am Router; im Gateway übernimmt das Modem zusätzliche Dienste.

## OSI‑Layer Relevanz
- Primär: Layer 1 (Physical)
- Sekundär: Layer 2 (Data Link) bei Modem‑Gateway (PPP, Ethernet)

## Vorteile
- Ermöglicht ISP‑Zugang
- Oft einfache Einrichtung durch ISPs

## Nachteile
- ISP‑Geräte haben oft eingeschränkte Konfigurationsmöglichkeiten
- Gateway‑Modems können zu doppeltem NAT führen

## Sicherheitsüberlegungen
- Gateway‑Modems: Managementzugriff absichern, Firmware pflegen
- Bridge‑Mode: Router muss Firewall/VPN übernehmen
- Keine öffentlichen Management‑Ports offen lassen

## Typische Einsatzfälle
- Heimnetz: vom ISP bereitgestelltes Modem/Gateway
- Büronetz: Modem im Bridge‑Mode → professioneller Router

## Real‑World Beispiele
- DSL‑Modem: Modem verbindet DSL‑Leitung mit Router im Haushalt
- Kabelmodem: DOCSIS‑Modem vom Kabelanbieter liefert Internet

## Häufige Fehler
- Doppeltes NAT (häufig bei aktivem ISP‑Router plus eigenem Router)
- Falscher Betriebsmodus (Gateway statt Bridge) führt zu Problemen mit Port‑Forwarding

## Troubleshooting‑Hinweise
- Prüfen ob Modem im Bridge oder Gateway Mode läuft
- Link‑Leds und Protokoll‑Logs des Modems prüfen
- Bei Verbindungsausfall: Neustart (Power‑Cycle) als erster Schritt

## Beispiel‑Hinweis (Bridge‑Mode)
```text
# Im Bridge Mode das interne Routerinterface konfigurieren:
ip address 203.0.113.10 255.255.255.248
ip route 0.0.0.0 0.0.0.0 203.0.113.1
```

## Mermaid‑Diagramm
```mermaid
graph LR
  ISP[Provider] --> Modem[Modem]
  Modem --> Router[Router]
  Router --> Switch[LAN-Switch]
  Switch --> Client[Arbeitsplatz]
```

## Zusammenfassung
Modems sind die physische Schnittstelle zum Internet. Für stabile, professionelle Netzwerke empfiehlt sich Bridge‑Mode plus dedizierter Router.

## Verwandte Themen
- [Router](router.md)
- [NAT & Subnetze](../adressierung/subnetz.md)
- [DSL / Übertragungstechnologien](../uebertragung/dsl.md)