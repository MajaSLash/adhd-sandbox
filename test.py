import requests
from bs4 import BeautifulSoup

def retrieve_data(url):

  response = requests.get(url)
  response.raise_for_status()
  return response.text

def parse_data(text_data):

  soup = BeautifulSoup(text_data, 'html.parser')
  table = soup.find('table')

  data = []
  
  rows = table.find_all('tr')[1:]

  for row in rows:
    cols = row.findAll('td')
    if len(cols) == 3:
        try:
            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())
            data.append((char, x, y))
        except ValueError:
            print(f'Invalid data: {row}')
  return data

def construct_output(data):

  max_x = max([x for _, x, _ in data])
  max_y = max([y for _, _, y in data])

  grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

  for char, x, y in data:
    grid[y][x] = char

  return grid

def print_output(grid):

  for row in grid:
    print(''.join(row))

def draw(url):

  text_data = retrieve_data(url)
  data = parse_data(text_data)
  grid = construct_output(data)
  print_output(grid)

draw('https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub')