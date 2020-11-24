import pandas as pd
import requests
from splinter import Browser
from bs4 import BeautifulSoup as bs

executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
browser = Browser("chrome", **executable_path, headless=True)

# Soup
route_url = 'https://www.mountainproject.com/route-guide'
browser.visit(route_url)
html = browser.html
soup = bs(html, 'html.parser')

# Get to the locations desired, we will only use the 117 listed (not the continental categories)
# This would pull more "locations" than the 117 without a slice, but we will only loop for 117
guide = soup.find('div', {"id": "route-guide"})
locations = guide.find_all('div', class_='ml-half')
place_names = []
locs = []
lats = []
longs = []

# AVOID RUNNING AGAIN. TAKES TIME

# Loop through the 117 locations desired
for x in range (0, 117):
    place = locations[x]
    
    # Stash the name in a list
    place_names.append(place.find('a').text)
    
    # Pull the link in the href
    href = place.find('a')['href']
    
    # Visit the link and re-soup
    browser.visit(href)
    html = browser.html
    soup = bs(html, 'html.parser')

    # Grab the latitude and longitude from the page. Deal with the formatting
    details = soup.find('table', class_="description-details")
    detail_text = details.find_all('td')
    gps_text = detail_text[3].text
    gps_text = " ".join(gps_text.split()).replace(" Google Map · Climbing Area Map", "")
    lat_and_long = gps_text.split(", ")

    # Stash the latiutde and longitude in lists
    # locs.append(gps_text)
    lats.append(lat_and_long[0])
    longs.append(lat_and_long[1])

# Remove unwanted characters from the names
for i in range(len(place_names)): 
    place_names[i] = place_names[i].replace("-", "").replace("* ", "").replace("*", "")

browser.quit()

# SINGLE CASE TEST

# place_name = locations[0].find('a').text
# place_link = locations[0].find('a')['href']

# print(place_name + ": " + place_link)
# browser.visit(place_link)
# html = browser.html
# soup = bs(html, 'html.parser')

# details = soup.find('table', class_="description-details")    
# latlongs = details.find_all('td')
# loc_data = latlongs[3].text
# loca = " ".join(loc_data.split()).replace(" Google Map · Climbing Area Map", "")
# lat = loca.split(", ")[0]
# long = loca.split(", ")[1]

# Debug check
# print(lat+"_&_"+long) 

# INITIAL LOOPS <- YES I SAID LOOPS. IT WAS TOO MANY

# for loc in locations: 
#     place_names.append(loc.find('a').text)
#     place_link = loc.find('a')['href']
#     places.append(place_link)

# loc_data = []
# counter = 0

# for place in places:
#     counter = counter + 1
#     browser.visit(place)
#     html = browser.html
#     soup = bs(html, 'html.parser')

#     details = soup.find('table', class_="description-details")
#     latlongs = details.find_all('td')
#     loc_data.append(latlongs[3].text) 

#     if counter == 5:
#         break

# geo_data = []
# for latlong in loc_data:
#     latlong = " ".join(latlong.split()).replace(" Google Map  Climbing Area Map", "")
#     geo_data.append(latlong)

# lats = []
# longs = []
# for data in geo_data:
#     lat = data.split()[0]
#     long = data.split()[1]
#     lats.append(lat)
#     longs.append(long)

# STRING CONCACTENATION PROBLEM. JUST USE THE OTHER ONE

# location_dict = {
#     'names': place_names,
#     'location': locs
# }

# df = pd.DataFrame(location_dict, columns=["names", "location"])
# df.to_csv("loc_list.csv", index=False)

# THIS HAS RUN. DON'T RUN AGAIN OR IT WILL TAKE A WHILE

separate_lat_long = {
    'names': place_names,
    'latitude': lats,
    'longitude': longs
}

df = pd.DataFrame(separate_lat_long, columns=["names", "latitude", "longitude"])
df.to_csv("latlong_list.csv", index=False)

print("scrape finished")