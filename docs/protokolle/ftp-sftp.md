# FTP & SFTP

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
FTP ist ein älteres, unverschlüsseltes Protokoll für Dateiübertragung; SFTP (SSH File Transfer Protocol) bietet sicheren Dateitransfer über SSH.

## Technische Definition
- FTP nutzt TCP (Port 21 für Steuerverbindung, Datenkanal variabel) und ist getrennt in Steuer‑ und Datenkanal.
- SFTP läuft über SSH (Port 22) und transportiert Dateioperationen sicher innerhalb der SSH‑Session.

## Detaillierte Erklärung
- FTP Modi: Active vs. Passive (NAT/Firewall‑Probleme)
- SFTP: Einzelne verschlüsselte Verbindung, Authentifizierung per Keys

## Wie es funktioniert
- FTP Active: Server verbindet zurück zum Client (Problematisch hinter NAT)
- FTP Passive: Client initiiert Datenverbindung zu vom Server angegebenem Port
- SFTP: Client authentifiziert über SSH; Dateien werden sicher übertragen

## OSI‑Layer Relevanz
- Layer 7 (Application) mit TCP als Transport

## Vorteile
- FTP: Einfach, weit verbreitet (legacy)
- SFTP: Sicherheit, Authentizität, einfache Firewall‑Handhabung

## Nachteile
- FTP: Unverschlüsselt, NAT/Firewall kompliziert
- SFTP: Benötigt SSH Infrastruktur (Keys/Accounts)

## Sicherheitsüberlegungen
- FTP vermeiden für sensible Daten; FTPS (FTP über TLS) oder SFTP verwenden
- SSH‑Keys für automatisierte Transfers mit passphrase und Agent

## Typische Einsatzfälle
- Transfer von großen Dateien, automatisierte Backups, Deployments

## Real‑World Beispiele
- SFTP‑Server für Entwicklerzugänge und automatisierte Backups
- Legacy‑FTP in alten Systemen (migrieren empfohlen)

## Häufige Fehler
- FTP hinter NAT ohne Passive Mode konfigurieren
- Unsichere Default‑Accounts

## Troubleshooting‑Hinweise
- Prüfen ob Passive Mode aktiviert ist (FTP)
- Firewall‑Logs für Datenkanäle prüfen
- SFTP: `sftp -vvv user@host` für Debug

## Beispiel (SFTP Verbindung)
```bash
sftp user@example.com
put file.tar.gz /remote/path/
```

## Zusammenfassung
SFTP ist die sichere Alternative zu FTP und sollte bevorzugt werden. FTPS kann eine Option sein, aber SFTP ist einfacher bei NAT/Firewall‑Setups.

## Verwandte Themen
- [SSH](../sicherheit/ssh.md)
- [Firewall](../netzwerkgeraete/firewall.md)
