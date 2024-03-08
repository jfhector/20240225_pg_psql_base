Basic REST API for a todo list

## How to start the db

### Preprequisites

- Docker
- A docker volume called `todos_app_db_data`
- A todos table in that db with schema:

```
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```


```bash
colima restart
docker container ls
docker image ls
docker run --name todos_app_db_container -e POSTGRES_PASSWORD=12345 -e POSTGRES_USER=asdfg -e POSTGRES_DB=todos_app_db -p 127.0.0.1:5432:5432 -v todos_app_db_data:/var/lib/postgresql/data -d postgres
docker container ls
```
