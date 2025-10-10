# Konfiguračný súbor pre EMT Lešenie

Tento návod je určený pre nетechnických používateľov, ktorí potrebujú aktualizovať ceny a kontaktné údaje na webovej stránke.

## Kde nájdem konfiguračný súbor?

Konfiguračný súbor sa nachádza na: `src/data/config.json`

## Ako upraviť ceny a kontaktné údaje?

### 1. Kontaktné informácie

```json
"contact": {
  "phone": "+421 904 350 340",
  "email": "emtlesenie@gmail.com",
  "address": "Petrovce nad Laborcom",
  "addressDescription": "Sklad máme v súkromných priestoroch kde vieme flexibilne reagovať.",
  "responseTime": "24 hodín"
}
```

**Ako upraviť:**
- `phone` - telefónne číslo
- `email` - emailová adresa
- `address` - adresa
- `addressDescription` - popis adresy
- `responseTime` - čas odpovede (napr. "24 hodín", "48 hodín")

### 2. Cenník použitého lešenia

```json
"usedScaffolding": [
  {
    "name": "Rám lešenia používaný š:1m - v:2m",
    "price": "41,90 €"
  }
]
```

**Ako upraviť:**
- `name` - názov položky
- `price` - cena (môžete zmeniť číslo, nechajte formát "X,XX €")

**Ako pridať novú položku:**
Skopírujte celý blok od `{` po `}` a pridajte ho do zoznamu s novými údajmi.

### 3. Cenník nových komponentov

```json
"newComponents": [
  {
    "name": "Noha nastaviteľná nová pozinkovaná 0,3m",
    "price": "7,50 €"
  }
]
```

Rovnaký princíp ako pri použitom lešení.

### 4. Sady lešenia

```json
"sets": [
  {
    "title": "Sada použitého lešenia cca 160m²",
    "description": "38x rám lešenia, 64x podlaha pozinkovaná...",
    "price": "Kontaktujte nás"
  }
]
```

**Ako upraviť:**
- `title` - názov sady
- `description` - popis sady
- `price` - cena alebo text "Kontaktujte nás"

### 5. Poznámky v cenníku

```json
"notes": [
  "Zábradlia a diagonálne tyče sú dodávané ku každým rámom...",
  "Lešenie možno vyskladať individuálne podľa potreby zákazníka.",
  "Ceny sú uvádzané bez DPH..."
]
```

**Ako upraviť:**
Každá poznámka je samostatný riadok v zozname. Môžete ich pridávať alebo odoberať.

## Dôležité upozornenia

⚠️ **POZOR:**
- Pri úprave súboru zachovajte správny formát JSON
- Nezabudnite na čiarky medzi položkami
- Neodstraňujte úvodzovky okolo textov
- Po každej zmene skontrolujte, či stránka funguje správne
- Odporúčame pred zmenou vytvoriť záložnú kópiu súboru

## Príklad úpravy ceny

**Pôvodné:**
```json
{
  "name": "Rám lešenia používaný š:1m - v:2m",
  "price": "41,90 €"
}
```

**Zmenené:**
```json
{
  "name": "Rám lešenia používaný š:1m - v:2m",
  "price": "45,00 €"
}
```

## Ako pridať novú položku do cenníka

1. Nájdite sekciu, kam chcete pridať položku (napr. `usedScaffolding`)
2. Pred poslednú `]` pridajte čiarku na koniec predchádzajúcej položky
3. Skopírujte existujúcu položku a upravte hodnoty
4. Pridajte čiarku na koniec, ak to nie je posledná položka

**Príklad:**
```json
"usedScaffolding": [
  {
    "name": "Rám lešenia používaný š:1m - v:2m",
    "price": "41,90 €"
  },
  {
    "name": "NOVÁ POLOŽKA",
    "price": "XX,XX €"
  }
]
```

## Potrebujete pomoc?

Ak si nie ste istí zmenou, kontaktujte vývojára alebo použite online JSON validátor na kontrolu správnosti formátu: https://jsonlint.com/
