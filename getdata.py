from flask import Flask, render_template, redirect, jsonify
from sqlalchemy import create_engine
import sqlalchemy as db

connection_string = "postgres:sealab2021@dvgroup1.c0yvlavqskus.us-west-2.rds.amazonaws.com:5432/project2"
engine = db.create_engine(f'postgresql://{connection_string}')
connection = engine.connect()
metadata = db.MetaData()

table = db.Table('trails', metadata, autoload = True, autoload_with=engine)


def query(selectedCity="Sedona Area"):
    #Query - "table.c.{column_name}" to add specific columns, "where" to filter
    query = db.select([table.c.name, table.c.latitude, table.c.longitude]).where(table.columns.city == selectedCity)

    result = connection.execute(query).fetchall()
    # print(type(dict(result[0])))
    # print(result)
    dict_response = []
    for ea in result:
        dict_response.append({"city": ea[0], "coords": [ea[1],ea[2]]})


    return dict_response
    # [
    #     {"city": ["lat","lon"]},
    #     {"city": ["lat","lon"]},
    # ]
   