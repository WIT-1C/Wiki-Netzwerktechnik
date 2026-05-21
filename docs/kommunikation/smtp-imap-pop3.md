# SMTP, IMAP & POP3

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
E‑Mail‑Systeme basieren auf drei zentralen Protokollen: SMTP für den Versand, IMAP und POP3 für den Empfang. Diese Seite erklärt Unterschiede, Einsatz und Betrieb.

## Technische Definition
- SMTP (Simple Mail Transfer Protocol): Versand/Weiterleitung von E‑Mails (Port 25, Submission 587, SMTPS 465).
- POP3 (Post Office Protocol v3): Empfang und optionales Löschen von Mails auf dem Server (Port 110 / 995 TLS).
- IMAP (Internet Message Access Protocol): Zugriff auf Mails auf dem Server mit Synchronisation (Port 143 / 993 TLS).

## Detaillierte Erklärung
- SMTP ist zuständig für Relaying zwischen Mailservern und für Submission von Clients an MTA.
- POP3 lädt Mails in der Regel lokal runter; IMAP lässt Mails auf dem Server und synchronisiert Ordner/Flags.

## Wie die Technologie funktioniert
- SMTP: Client verbindet zur Submission‑Port 587 mit Auth, MTA routet an Ziel‑MTA via DNS MX.
- IMAP: Client synchronisiert Postfach‑State (Ordner, gelesen/ungelesen, Flags) über langlebige Verbindungen.
- POP3: Client fordert neue Nachrichten an und speichert sie lokal; typischerweise löscht Server nach Abruf (konfigurierbar).

## OSI‑Layer Relevanz
- Layer 7 (Application) über TCP (reliable transport)

## Vorteile
- SMTP: robustes Delivery‑Netzwerk
- IMAP: Multi‑Device‑Sync, Server‑seitige Ordnerverwaltung
- POP3: geeignet für einfache Offline‑Clients und geringe Serverlast

## Nachteile
- SMTP: Open‑Relays führen zu Spam‑Missbrauch
- POP3: schlechter für mehrere Geräte
- IMAP: höherer Speicher‑/IO‑Aufwand am Server

## Sicherheitsüberlegungen
- TLS (STARTTLS/implicit TLS) für Transportverschlüsselung
- Authentifizierung (SASL, OAuth2) an Submission/IMAP
- SPF/DKIM/DMARC zur Authentizität und Anti‑Spoofing
- Anti‑Spam/Antivirus vor Mail‑Ingest

## Typische Einsatzfälle
- Unternehmens‑Mailserver mit IMAP und Exchange/SMTP Relays
- Heim/Themen‑Server mit POP3 für einzelne Clients

## Real‑World Beispiele
- Setup: Postfix (MTA) + Dovecot (IMAP/POP3) + Spamassassin + DKIM

## Häufige Fehler
- Offen stehender SMTP‑Port als Open Relay
- Fehlende TLS/STARTTLS‑Konfiguration
- DNS/MX falsch konfiguriert ⇒ Zustellungsprobleme

## Troubleshooting‑Hinweise
- Logs prüfen: /var/log/mail.log, postfix/smtp logs
- SMTP‑Verbindungsdiagnose: `telnet mail.example.com 25` / `openssl s_client -connect mail.example.com:465`
- DNS MX und rDNS prüfen (`dig MX example.com`, `dig -x <ip>`)

## Beispiel (Telnet SMTP Test)
```text
telnet mail.example.com 25
EHLO client.example.com
MAIL FROM:<admin@example.com>
RCPT TO:<user@remote.example.com>
DATA
Subject: Test

Testnachricht.
.
QUIT
```

## Zusammenfassung
Sichere Mailinfrastruktur benötigt korrekt konfiguriertes SMTP, TLS, Auth und Anti‑Spam‑Maßnahmen. IMAP eignet sich für Multi‑Device‑Nutzung, POP3 für einfache Offline‑Szenarien.

## Verwandte Themen
- [DNS / MX Records](../netzwerkdienste/dns.md)
- [TLS / Verschlüsselung](../sicherheit/aes.md)

