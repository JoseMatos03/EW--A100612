import json

def main():
    # Open and read the original unformatted JSON data
    with open('dataset_reparacoes.json', 'r', encoding='utf-8') as infile:
        data = json.load(infile)

    # Get the list of "reparacoes"
    reparacoes = data.get('reparacoes', [])

    # Prepare empty lists for unique "viaturas" and "intervencoes"
    viaturas = []
    intervencoes = []

    # Sets to keep track of seen identifiers (this avoids duplicate data)
    seen_matriculas = set()
    seen_codigos = set()

    for reparacao in reparacoes:
        # Process "viatura"
        viatura = reparacao.get('viatura')
        if viatura:
            matricula = viatura.get('matricula')
            # Only add if this "matricula" hasn't been seen before
            if matricula and matricula not in seen_matriculas:
                seen_matriculas.add(matricula)
                viaturas.append(viatura)

        # Process each "intervencao"
        for interv in reparacao.get('intervencoes', []):
            codigo = interv.get('codigo')
            # Only add if this "codigo" hasn't been seen before
            if codigo and codigo not in seen_codigos:
                seen_codigos.add(codigo)
                intervencoes.append(interv)

    new_data = {
        "reparacoes": reparacoes,
        "viaturas": viaturas,
        "intervencoes": intervencoes
    }

    # Write the new formatted JSON data
    with open('formatted_dataset_reparacoes.json', 'w', encoding='utf-8') as outfile:
        json.dump(new_data, outfile, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
