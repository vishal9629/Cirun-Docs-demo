# Cirun.io Documentation

## Installation

```
yarn install
```

## Build Documentation

```
yarn start
```

To build and preview docs:

```bash
cd docsrc && make html && open _build/html/index.html && cd ..
```

## Update `docs/`

```bash
cp -r docsrc/_build/html/* docs/
```

and now commit and push

TODO: Automated this via GitHub Actions
