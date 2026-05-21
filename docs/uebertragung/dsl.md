# DSL (Digital Subscriber Line)

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
DSL ist eine Familie breitbandiger Zugangstechniken über bestehende Kupferleitungen (Telefonleitung) und wird oft für Internetzugang in Haushalten und kleinen Büros genutzt.

## Technische Definition
Digital Subscriber Line überträgt digitale Daten über die bestehenden Telefonleitungen; Varianten sind ADSL, ADSL2+, VDSL, VDSL2 mit unterschiedlichen Bandbreiten und Distanzen.

## Detaillierte Erklärung
- ADSL/ADSL2+: asymmetrische Geschwindigkeiten (höhere Downstream)
- VDSL/VDSL2: höhere Bandbreiten über kurze Distanzen, oft für FTTC (Fiber to the Curb)
- Splitter/Filter: trennen Sprach‑ und Datensignale

## Wie es funktioniert
- Modem/DSLAM moduliert/demoduliert Signale; Multiplexing trennt Sprach‑ und Datendienste; Signale werden in Frequenzbändern übertragen.

## OSI‑Layer Relevanz
- Primär Layer 1 (Physical) und Layer 2 (PPP/ATM oder Ethernet je Implementierung)

## Vorteile
- Nutzung vorhandener Kupferinfrastruktur
- Weit verbreitet, kosteneffizient für Endkunden

## Nachteile
- Performance stark abhängig von Leitungslänge und Leitungsqualität
- Begrenzte Skalierbarkeit verglichen mit Glasfaser

## Sicherheitsüberlegungen
- Modem-/Router‑Managementzugang absichern
- ISPs liefern oft Gateway mit vorkonfigurierten Diensten (prüfen)

## Typische Einsatzfälle
- Heim‑Internet, kleine Büros, Backup‑Leitungen

## Real‑World Beispiele
- ADSL für ländliche Anschlüsse, VDSL in Stadtteilen mit FTTC‑Rollout

## Häufige Fehler
- Drosselung durch ISP‑Tarife, schlechte Leitungsqualität, falscher Betriebsmodus (Bridge vs. Gateway)

## Troubleshooting‑Hinweise
- Leitungswerte prüfen (SNR, Sync Rate am Modem)
- Splitter/Filter testen, Modem‑Logs prüfen, Leitungsprüfung mit Messgerät

## Mermaid‑Diagramm
```mermaid
graph LR
  Customer[Haus/Modem] --> DSLAM[DSLAM / Street Cabinet]
  DSLAM --> ISP[Provider Backbone]
  ISP --> Internet[Internet]
```

## Zusammenfassung
DSL ist eine etablierte Zugangstechnologie über Kupferleitungen. Für höhere Bandbreiten sind VDSL/FTTC oder Glasfaser vorzuziehen.

## Verwandte Themen
- [Modem](../netzwerkgeraete/modem.md)
- [Übertragungstechnologien](../uebertragung/dsl.md)

