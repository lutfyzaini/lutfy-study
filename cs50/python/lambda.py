people = [
    {"name" : "Harry", "house": "Gryffindor"},
    {"name" : "Cho", "house":"Ravenclaw"},
    {"name" : "Draco", "house":"Styherin"}
]

people.sort(key=lambda person: person["name"])
print(people)