import requests

url = "https://twinword-text-similarity-v1.p.rapidapi.com/similarity/"

headers = {
    'x-rapidapi-host': "twinword-text-similarity-v1.p.rapidapi.com",
    'x-rapidapi-key': "d810a164c6msh25f0534799f398dp140a10jsn39b114aa7c0e"
}


def get_sim(text1, text2):
    querystring = {"text1": text1, "text2": text2}
    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    # print(response.json())
    return response.json()['similarity']


get_sim("reading", "books")
