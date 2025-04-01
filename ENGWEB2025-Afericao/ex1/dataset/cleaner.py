import json
import ast
import re
import argparse

def clean_data(data):
    cleaned = []
    for item in data:
        # Cria uma cópia do item para não modificar o original
        new_item = dict(item)

        # Processa o bookId: extrai o número inicial usando regex
        book_id = new_item.get('bookId', '')
        match = re.match(r'^(\d+)', book_id)
        if match:
            new_item['_id'] = match.group(1)
        else:
            new_item['_id'] = book_id
        # Não precisamos de manter o campo bookId:
        new_item.pop('bookId', None)

        # Processa o campo author: transforma numa lista, separando por vírgula
        if 'author' in new_item:
            authors = [a.strip() for a in new_item['author'].split(',')]
            new_item['author'] = authors

        # Converte campos que estão como string de lista para uma lista de verdade
        list_fields = ['genres', 'characters', 'awards', 'ratingsByStars', 'setting']
        for field in list_fields:
            if field in new_item:
                try:
                    # Utiliza ast.literal_eval para converter a string para lista
                    new_item[field] = ast.literal_eval(new_item[field])
                except Exception as e:
                    print(f"Erro ao converter o campo {field}: {e}")

        cleaned.append(new_item)
    return cleaned

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Clean a JSON dataset for MongoDB import.')
    parser.add_argument('input_file', type=str, help='Path to the input JSON file')
    parser.add_argument('output_file', type=str, help='Path to save the cleaned JSON file')
    args = parser.parse_args()

    with open(args.input_file, encoding='utf-8') as f:
        data = json.load(f)

    cleaned_data = clean_data(data)

    with open(args.output_file, 'w', encoding='utf-8') as f:
        json.dump(cleaned_data, f)

    print(f"Dados limpos guardados em '{args.output_file}'")