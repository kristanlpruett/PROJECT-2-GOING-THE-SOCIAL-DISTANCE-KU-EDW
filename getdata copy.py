import json
import psycopg2
from psycopg2.extras import ReadDictCursor


conn = psycop2.connect("postgres:sealab2021@dvgroup1.c0yvlavqskus.us-west-2.rds.amazonaws.com:5432/project2")
cur = conn.cursor(cursor_factory=RealDictCursor)
cur.execute("""SELECT * from trails LIMIT 10""")

print(json.dumps(cur.fetchall(), indent=2))