# SNMP (Simple Network Management Protocol)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
SNMP ermöglicht Monitoring und Management von Netzwerkgeräten (Switches, Router, Server) über MIBs (Management Information Base).

## Technische Definition
SNMP ist ein Application‑Layer‑Protokoll, das einfache Abfragen (GET/GETNEXT) und Traps (unsolicited Notifications) über UDP (standardmäßig Port 161/162) unterstützt.

## Detaillierte Erklärung
- Versionen: SNMPv1, v2c (Community Strings), v3 (Auth & Encryption)
- MIBs definieren OIDs, die Werte (Status, Traffic, Temperatur) repräsentieren
- Polling vs. Traps: Polling fragt Werte ab; Traps melden Ereignisse

## Wie es funktioniert
- Management Station (NMS) pollt Geräte oder empfängt Traps; SNMPv3 bietet Authentifizierung und Verschlüsselung

## OSI‑Layer Relevanz
- Layer 7 (Application) über UDP

## Vorteile
- Standardisiertes Monitoring, weite Unterstützung
- SNMPv3 bietet Sicherheit (Auth, PRIV)

## Nachteile
- SNMPv1/v2c unsicher (Community Strings)
- MIB‑Komplexität und Performance‑Overhead bei hoher Polling‑Rate

## Sicherheitsüberlegungen
- SNMPv3 verwenden (USM: User Security Model)
- Management‑Netz isolieren, Access‑Control auf Geräten einrichten

## Typische Einsatzfälle
- Überwachung von Interface‑Stats, CPU, Memory, Temperature
- Automatisierte Alerts bei Schwellenwerten

## Real‑World Beispiele
- Zabbix/PRTG/Nagios pollt Switch‑OIDs für Port‑Status

## Häufige Fehler
- Ohne SNMPv3 Community‑Strings im Klartext verwenden
- Zu häufiges Polling belastet Geräte

## Troubleshooting‑Hinweise
- SNMP Walk: `snmpwalk -v3 -l authPriv -u user -A authpass -X privpass host` prüfen
- ACLs/Firewall für UDP 161/162 prüfen

## Beispiel (snmpwalk)
```bash
snmpwalk -v2c -c public 10.0.0.1 system
```

## Zusammenfassung
SNMP ist ein Kernprotokoll für Netzwerkkontrolle und Monitoring; SNMPv3 mit sicherer Konfiguration wird dringend empfohlen.

## Verwandte Themen
- [Monitoring Grundlagen](../netzwerkgeraete/firewall.md)
- [Syslog & Logging](../sicherheit/ssh.md)

