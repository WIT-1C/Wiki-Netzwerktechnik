# HTTP & HTTPS

Zielgruppe: IT‑Auszubildende, Fachinformatiker Systemintegration, Einsteiger‑Administratoren

## Einführung
HTTP ist das unverschlüsselte Protokoll für Web‑Kommunikation; HTTPS ist die verschlüsselte Variante (HTTP über TLS), die Vertraulichkeit und Integrität bietet.

## Technische Definition
- HTTP (Hypertext Transfer Protocol) arbeitet auf Layer 7 (Application) und nutzt TCP als Transport.
- HTTPS kapselt HTTP in TLS (Transport Layer Security) für Verschlüsselung und Authentifizierung.

## Detaillierte Erklärung
- HTTP Methoden: GET, POST, PUT, DELETE, HEAD, OPTIONS
- Statuscodes: 2xx, 3xx, 4xx, 5xx
- HTTPS: Zertifikate (X.509), TLS‑Handshake, Cipher Suites

## Wie es funktioniert
- HTTP: Client öffnet TCP‑Verbindung auf Port 80 → Request/Response
- HTTPS: TLS‑Handshake (Cert, Key‑Exchange) → verschlüsselte HTTP‑Kommunikation auf Port 443

## OSI‑Layer Relevanz
- Layer 7: HTTP
- Layer 4: TCP
- TLS operiert zwischen Layer 4 und 7 (Sesssion/Presentation Aspekte)

## Vorteile
- HTTP: Einfach, weit verbreitet
- HTTPS: Vertraulichkeit, Integrität, Authentifizierung des Servers

## Nachteile
- HTTP: Keine Sicherheit
- HTTPS: Komplexität bei Zertifikatsmanagement, Performance‑Overhead (heute gering)

## Sicherheitsüberlegungen
- HTTPS immer verwenden für sensible Daten
- HSTS, Certificate Pinning, sichere Cipher Suites verwenden
- TLS‑Versionen: TLS 1.2+ empfohlen

## Typische Einsatzfälle
- Websites, APIs, Web‑Applications, RESTful Services

## Real‑World Beispiele
- Webshop über HTTPS mit TLS 1.3 und HSTS

## Häufige Fehler
- Mixed Content (HTTP Ressourcen auf HTTPS Seite)
- Abgelaufene oder unsichere Zertifikate

## Troubleshooting‑Hinweise
- `curl -v https://example.com` für TLS Debug
- Zertifikatkette prüfen (openssl s_client -connect)
- HTTP Statuscodes analysieren

## Beispiel (curl)
```bash
curl -I https://example.com
openssl s_client -connect example.com:443 -showcerts
```

## Zusammenfassung
HTTPS ist Pflicht für sichere Webkommunikation. Richtiges Zertifikatsmanagement und aktuelle TLS‑Konfigurationen sind entscheidend.

## Verwandte Themen
- [TLS / Verschlüsselung](../sicherheit/aes.md)
- [Firewall](../netzwerkgeraete/firewall.md)
