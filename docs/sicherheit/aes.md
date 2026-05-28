# AES (Advanced Encryption Standard)

## Einführung
AES ist ein symmetrisches Verschlüsselungsverfahren, das in vielen Netzwerk‑ und Speichersystemen als Standard zur Datenverschlüsselung verwendet wird.

## Technische Definition
AES ist ein Blockcipher (Rijndael) mit Schlüssellängen 128, 192 und 256 Bit; es arbeitet mit 128‑Bit‑Blöcken und ist in Software/Hardware weit verbreitet.

## Detaillierte Erklärung
- AES‑Modi: CBC, GCM, CTR — GCM ist verbreitet für Authenticated Encryption (AEAD).
- In WLAN: AES‑CCMP (Counter Mode with CBC‑MAC Protocol) ersetzt TKIP und bietet Vertraulichkeit und Integrität.

## Wie AES funktioniert
- Daten werden in Blöcken verarbeitet; mit Schlüsseln werden Rundenoperationen (SubBytes, ShiftRows, MixColumns, AddRoundKey) durchgeführt.
- In GCM werden Counter‑Mode (für Verschlüsselung) und GHASH (für Authentifizierung) kombiniert.

## OSI‑Layer Relevanz
- Layer 2: AES‑CCMP im 802.11 MAC für WLAN‑Verschlüsselung
- Layer 6/7: TLS/SSH nutzen AES auf höheren Schichten

## Vorteile
- Sehr hohe Sicherheit (bei korrekter Implementierung und Schlüsselmanagement)
- Hardwarebeschleunigung weit verbreitet (AES‑NI)

## Nachteile
- Unsachgemäße Modi oder schlechter Schlüsselmanagement schwächen Sicherheit

## Sicherheitsüberlegungen
- Nutzung von AEAD‑Modi (z. B. GCM) empfohlen
- Schlüssellängen 128+ Bit; sichere Schlüsselverwaltung (KMS, HSM)
- Vermeidung alter Modi wie ECB

## Typische Einsatzfälle
- WLAN: AES‑CCMP (WPA2/WPA3)
- TLS, IPsec, SSH, Festplattenverschlüsselung, Storage‑Encryption

## Real‑World Beispiele
- WPA2/WPA3 nutzen AES‑basierte Verfahren für WLAN‑Sicherheit
- Verschlüsselung von Datenbanken und Backup‑Volumes

## Häufige Fehler
- Verwendung von unsicheren Modi (ECB)
- Schwaches Schlüsselmanagement (harte Kodierung von Schlüsseln)

## Troubleshooting‑Hinweise
- Bei Performanceproblemen Hardwarebeschleunigung prüfen (AES‑NI)
- Kompatibilitätsprobleme mit Legacy‑Clients identifizieren

## Beispiel (OpenSSL‑Befehl)
```bash
# Verschlüsseln mit AES‑256‑GCM
openssl enc -aes-256-gcm -in file.txt -out file.enc -pass pass:TopSecret
```

## Zusammenfassung
AES ist der aktuelle Industriestandard für symmetrische Verschlüsselung. Korrekte Modi (GCM), Schlüsselverwaltung und Implementierung sind entscheidend für Sicherheit.

## Verwandte Themen
- [WPA](wpa.md)
- [VPN](vpn.md)
- [SSH](ssh.md)
