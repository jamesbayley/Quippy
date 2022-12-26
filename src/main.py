import json
from typing import NewType, Tuple

import requests
from bs4 import BeautifulSoup

Author = NewType('Author', str)
Quote = NewType('Quote', str)

URL = 'http://www.ideachampions.com/weblogs/archives/2010/11/50_very_awesome.shtml'

quotes: list[Tuple[Author, Quote]] = []
page = requests.get(url=URL, timeout=500)
soup = BeautifulSoup(page.content, 'html.parser') \
    .find(id='container') \
    .find_all('p')[1:-5]

for line in soup:

    line = line \
        .text \
        .replace('\n', '') \
        .replace('  ', ' ') \
        .replace('--', '-')

    if len(line) != 0:

        fst_quote = line.find('"')
        snd_quote = line.rfind('-')

        author = line[snd_quote:] \
            .replace('-', '') \
            .strip()

        quote = line[fst_quote:snd_quote] \
            .replace('"', "") \
            .strip()

        quotes.append((author, quote))

print(f'No. of quotes: {len(quotes)}.')

with open('docs/quotes.json', mode='w', encoding='utf-8') as f:
    json.dump(quotes, f, indent=2)
