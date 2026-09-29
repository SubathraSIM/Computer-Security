# CM2025 Computer Security - University of London

Coursework for **CM2025 Computer Security** (BSc Computer Science, University of London). The coursework has two parts: a threat intelligence report on recently published malware, and a cryptography section that combines a working cipher program with written analysis of DES, RSA, and digital signatures.

| Part | Topic | Key topics |
|---|---|---|
| Part A | Five recently published malware | Threat analysis, prevention, incident response |
| Part B | Cryptography | Vigenère-style cipher implementation, DES padding, RSA encoding, digital signatures |

**Tech:** JavaScript (Node.js) for the cipher program · written analysis

---

## Part A - Five Recently Published Malware (2024–2025)

For each malware sample, the report covers **what it is and how it spreads**, **how to prevent it**, and **how to respond** if a system is infected.

| Malware | Type / target |
|---|---|
| **Myth Stealer** | Rust-based infostealer on Windows, spread through fake cracked-software and game-cheat sites. Steals browser credentials, cookies, Discord tokens, and crypto wallets. |
| **PlainGnome** | Android spyware attributed to the Gamaredon APT group, disguised as legitimate apps |
| **Crocodilus** | Android banking trojan that abuses Accessibility Services to steal logins and crypto wallet seed phrases |
| **NodeSnake** | Remote access trojan written entirely in Node.js to evade antivirus, delivered by phishing |
| **SpiderX** | Fast ransomware in the Diablo family, with a built-in infostealer that exfiltrates data before encrypting |

The recommendations cover user practices (trusted download sources, updates, password managers), organisational controls (software allow-listing, vetting third-party apps), and incident response (isolate the device, scan, remove, reset credentials).

---

## Part B - Cryptography

### Question 1: Building a cipher
- **Encryption program** in Node.js: converts letters to numbers (A = 0 … Z = 25) and adds each plaintext letter to the matching key letter **mod 26** to produce the ciphertext
- **Input validation:** only uppercase A–Z is accepted for the plaintext and key, and anything else gets a clear error with a new prompt
- **Decryption program:** reverses the process with **modular subtraction**, handling wraparound
- Written answers on:
  - When a cipher can be broken, e.g. Caesar's tiny keyspace and repeated short keys in Vigenère
  - Three factors that make a key strong: length, randomness, and secrecy / no reuse

### Question 2: Block ciphers, RSA, and signatures
- **Why DES needs padding** and how padding works with a 64-bit block
- **Encoding text for RSA:** UTF-8 → hexadecimal → integer smaller than the modulus N, and why OAEP-style padding is needed before computing C = Mᵉ mod N
- **Digital signatures:** why RSA can produce them (sign a hash with the private key, verify with the public key) and why DES can't, since a shared symmetric key gives no non-repudiation

---

## How to run (Part B)

```bash
cd part-b-cryptography
node encrypt.js     # enter uppercase plaintext and key
node decrypt.js     # enter ciphertext and key
```
