# Lease Time (DHCP Lease Time)

## Einführung
Lease Time bestimmt die Dauer, für die eine IP‑Adresse einem Client durch DHCP zugewiesen wird. Sie beeinflusst Netzwerkstabilität und Adressauslastung.

## Technische Definition
Lease Time ist eine DHCP‑Option, die in Sekunden angibt, wie lange ein Client die zugewiesene IP behalten darf, bevor Erneuerung nötig ist.

## Detaillierte Erklärung
- Standardablauf: Client versucht bei 50% der Lease Zeit zu erneuern (DHCPREQUEST) — falls kein Reply, erneuter Versuch bei 87.5%.
- Kurzzeitige Leases: nützlich für Gast‑Netze; lange Leases: stabilere Zuordnungen für Server

## Wie es funktioniert
- DHCPACK sendet Lease Time; Client startet Timers (T1/T2) für Erneuerungsversuche

## OSI‑Layer Relevanz
- Primär Layer 7 (DHCP) über UDP

## Vorteile
- Steuerung der Adressvergabe und Poolnutzung
- Flexibel für unterschiedliche Netze (Gäste vs. Server)

## Nachteile
- Zu kurze Leases → hoher DHCP‑Traffic
- Zu lange Leases → Adressknappheit bei dynamischen Umgebungen

## Sicherheitsüberlegungen
- Bei kurzzeitigen Leases ist Rogue DHCP weniger problematisch, aber Monitoring notwendig

## Typische Einsatzfälle
- Guest‑WLAN: kurze Leases (z. B. 1 Stunde)
- Büro/Server: längere Leases oder statische Reservierungen

## Real‑World Beispiele
- DHCP‑Server Konfiguration: `default-lease-time` und `max-lease-time` in ISC DHCP

## Häufige Fehler
- Standard‑Lease zu kurz/zu lang gewählt ohne Analyse
- Keine Reservierungen für wichtige Geräte

## Troubleshooting‑Hinweise
- Logs des DHCP‑Servers prüfen auf Renew/Release/Missing Offers
- Prüfen der T1/T2‑Zeitpunkte und Client‑Verhalten

## Beispiel (ISC DHCP)
```text
default-lease-time 3600;  # 1 Stunde
max-lease-time 86400;     # 24 Stunden
```

## Zusammenfassung
Die richtige Lease Time erhöht Stabilität und effiziente Nutzung von IP‑Pools. Anpassung je nach Netzwerktyp (Guest vs. Dauergeräte) ist empfehlenswert.

## Verwandte Themen
- [DHCP](dhcp.md)
- [Netzwerkplanung](../adressierung/subnetz.md)

